import express from 'express';
import cors from 'cors';
import axios from 'axios';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ═══════════════════════════════════════════════════════════════
// 🔧 КОНФИГУРАЦИЯ API
// ═══════════════════════════════════════════════════════════════

// 🔑 API КЛЮЧИ (из .env файла или напрямую здесь)
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || 'YOUR_GOOGLE_API_KEY_HERE';
const GOOGLE_CX = process.env.GOOGLE_CX || 'YOUR_CUSTOM_SEARCH_ENGINE_ID';

// AI API - используем OpenAI совместимый формат
const AI_CONFIG = {
    provider: process.env.AI_PROVIDER || 'deepseek',
    apiKey: process.env.AI_API_KEY || 'YOUR_DEEPSEEK_API_KEY',
    endpoint: process.env.AI_ENDPOINT || 'https://api.deepseek.com/v1/chat/completions',
    model: process.env.AI_MODEL || 'deepseek-chat'
};

// ═══════════════════════════════════════════════════════════════
// 🌐 MIDDLEWARE
// ═══════════════════════════════════════════════════════════════

app.use(cors());
app.use(express.json());

// Логирование запросов
app.use((req, res, next) => {
    console.log(`📡 ${new Date().toLocaleTimeString()} | ${req.method} ${req.path}`);
    next();
});

// ═══════════════════════════════════════════════════════════════
// 🔍 ШАГ 1: ПОИСК НА ФОРУМЕ ЧЕРЕЗ GOOGLE CUSTOM SEARCH API
// ═══════════════════════════════════════════════════════════════

async function searchOnForum(question) {
    console.log(`🔍 Ищу на форуме: "${question}"`);
    
    try {
        // Поисковый запрос ограничен только forum.gta5rp.com
        const searchQuery = `site:forum.gta5rp.com ${question}`;
        const url = `https://www.googleapis.com/customsearch/v1`;
        
        const response = await axios.get(url, {
            params: {
                key: GOOGLE_API_KEY,
                cx: GOOGLE_CX,
                q: searchQuery,
                num: 5  // Берем топ-5 результатов
            },
            timeout: 10000
        });
        
        if (response.data && response.data.items && response.data.items.length > 0) {
            const results = response.data.items.map(item => ({
                title: item.title,
                url: item.link,
                snippet: item.snippet
            }));
            
            console.log(`✅ Найдено ${results.length} результатов на форуме`);
            return results;
        }
        
        console.log('⚠️ Ничего не найдено на форуме');
        return [];
        
    } catch (error) {
        if (error.response) {
            console.error(`❌ Ошибка Google Search API: ${error.response.status}`, error.response.data);
        } else {
            console.error('❌ Ошибка поиска:', error.message);
        }
        return [];
    }
}

// ═══════════════════════════════════════════════════════════════
// 📥 ШАГ 2: ЗАГРУЗКА И ПАРСИНГ СТРАНИЦ ФОРУМА
// ═══════════════════════════════════════════════════════════════

async function fetchForumPageContent(url) {
    console.log(`📥 Загружаю: ${url.substring(0, 60)}...`);
    
    try {
        const response = await axios.get(url, {
            timeout: 15000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        
        const $ = cheerio.load(response.data);
        
        // Удаляем ненужные элементы
        $('script, style, nav, header, footer, .navigation, .menu, .sidebar, .ads').remove();
        
        let textContent = '';
        
        // Пробуем разные селекторы для разных типов форумов
        const selectors = [
            '.message-body',
            '.post-content', 
            '.message-content',
            '.post-body',
            '.post',
            'article',
            '.content',
            '.bbWrapper'
        ];
        
        for (const selector of selectors) {
            const elements = $(selector);
            if (elements.length > 0) {
                elements.each((i, el) => {
                    const text = $(el).text().trim();
                    if (text.length > 50) {
                        textContent += text + '\n\n';
                    }
                });
                if (textContent.length > 200) break;
            }
        }
        
        // Если ничего не нашли, берем весь body
        if (textContent.length < 100) {
            textContent = $('body').text();
        }
        
        // Очистка текста
        textContent = textContent
            .replace(/\s+/g, ' ')
            .replace(/\n\s*\n/g, '\n\n')
            .trim()
            .substring(0, 6000);
        
        console.log(`✅ Извлечено ${textContent.length} символов`);
        return textContent;
        
    } catch (error) {
        console.error(`❌ Ошибка загрузки: ${error.message}`);
        return '';
    }
}

// ═══════════════════════════════════════════════════════════════
// 🤖 ШАГ 3: ОТПРАВКА К AI
// ═══════════════════════════════════════════════════════════════

async function askAI(question, forumContents, sources) {
    console.log('🤖 Отправляю к AI...');
    
    const contextText = forumContents
        .map((content, i) => {
            if (!content || content.length < 50) return '';
            return `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 ИСТОЧНИК ${i + 1}: ${sources[i].title}
🔗 URL: ${sources[i].url}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${content}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
        })
        .filter(text => text.length > 0)
        .join('\n\n');
    
    if (!contextText || contextText.length < 100) {
        return 'На форуме GTA5RP не найдена информация. Попробуй переформулировать.';
    }
    
    const systemPrompt = `Ты - эксперт по правилам GTA 5 RP с форума forum.gta5rp.com.

⚠️ КРИТИЧЕСКИ ВАЖНО:
1. Отвечай ТОЛЬКО на основе текста из источников
2. Если ответа НЕТ - скажи: "В материалах с форума информация не найдена"
3. НИКОГДА не используй свою память
4. ВСЕГДА указывай источник: [Источник 1], [Источник 2]
5. Для "можно ли..." дай ЧЕТКИЙ ответ: ДА или НЕТ

ФОРМАТ:
1. Прямой ответ (ДА/НЕТ)
2. Объяснение (2-3 предложения)
3. Номер правила (если есть)
4. Источник: [Источник X]

Максимум 5-6 предложений.`;

    const userPrompt = `ВОПРОС: ${question}

МАТЕРИАЛЫ С ФОРУМА:
${contextText}

Ответь строго на основе материалов:`;

    try {
        const response = await axios.post(
            AI_CONFIG.endpoint,
            {
                model: AI_CONFIG.model,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                temperature: 0.3,
                max_tokens: 600
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AI_CONFIG.apiKey}`
                },
                timeout: 30000
            }
        );
        
        if (response.data && response.data.choices && response.data.choices[0]) {
            const answer = response.data.choices[0].message.content;
            console.log('✅ AI успешно ответил');
            return answer;
        }
        
        throw new Error('Некорректный формат ответа');
        
    } catch (error) {
        if (error.response) {
            console.error(`❌ AI API: ${error.response.status}`);
            throw new Error(`AI error: ${error.response.status}`);
        }
        throw error;
    }
}

// ═══════════════════════════════════════════════════════════════
// 📡 ГЛАВНЫЙ ENDPOINT
// ═══════════════════════════════════════════════════════════════

app.post('/api/ask', async (req, res) => {
    const startTime = Date.now();
    const { question } = req.body;
    
    if (!question || typeof question !== 'string' || !question.trim()) {
        return res.status(400).json({ 
            error: 'Вопрос не указан',
            answer: null,
            sources: []
        });
    }
    
    console.log('\n╔════════════════════════════════════════╗');
    console.log(`║ 📝 ${question.substring(0, 30).padEnd(30)} ║`);
    console.log('╚════════════════════════════════════════╝\n');
    
    try {
        // ШАГ 1: Поиск
        const searchResults = await searchOnForum(question);
        
        if (searchResults.length === 0) {
            console.log(`⚠️ Ничего не найдено (${Date.now() - startTime}ms)\n`);
            return res.json({
                answer: 'На форуме GTA5RP не найдена информация. Попробуй переформулировать.',
                sources: [],
                error: null
            });
        }
        
        // ШАГ 2: Загрузка страниц (макс 3)
        const pagesToFetch = searchResults.slice(0, 3);
        const forumContents = [];
        const validSources = [];
        
        for (const source of pagesToFetch) {
            const content = await fetchForumPageContent(source.url);
            if (content && content.length > 100) {
                forumContents.push(content);
                validSources.push(source);
            }
        }
        
        if (forumContents.length === 0) {
            console.log(`⚠️ Не удалось загрузить (${Date.now() - startTime}ms)\n`);
            return res.json({
                answer: 'Не удалось загрузить страницы форума.',
                sources: searchResults,
                error: 'Ошибка загрузки'
            });
        }
        
        // ШАГ 3: AI
        const answer = await askAI(question, forumContents, validSources);
        
        console.log(`✅ Готово (${Date.now() - startTime}ms)\n`);
        
        res.json({
            answer: answer,
            sources: validSources,
            error: null
        });
        
    } catch (error) {
        console.error(`❌ Ошибка (${Date.now() - startTime}ms):`, error.message, '\n');
        res.status(500).json({
            answer: null,
            sources: [],
            error: error.message
        });
    }
});

// ═══════════════════════════════════════════════════════════════
// 🏥 HEALTH CHECK
// ═══════════════════════════════════════════════════════════════

app.get('/health', (req, res) => {
    const googleOk = GOOGLE_API_KEY && GOOGLE_API_KEY !== 'YOUR_GOOGLE_API_KEY_HERE';
    const aiOk = AI_CONFIG.apiKey && AI_CONFIG.apiKey !== 'YOUR_DEEPSEEK_API_KEY';
    
    res.json({ 
        status: 'OK',
        timestamp: new Date().toISOString(),
        config: {
            googleSearch: googleOk,
            googleCX: !!GOOGLE_CX,
            aiProvider: AI_CONFIG.provider,
            aiConfigured: aiOk,
            aiModel: AI_CONFIG.model
        },
        ready: googleOk && aiOk
    });
});

app.get('/config', (req, res) => {
    res.json({
        google: {
            hasApiKey: !!GOOGLE_API_KEY && GOOGLE_API_KEY !== 'YOUR_GOOGLE_API_KEY_HERE',
            hasCX: !!GOOGLE_CX && GOOGLE_CX !== 'YOUR_CUSTOM_SEARCH_ENGINE_ID'
        },
        ai: {
            provider: AI_CONFIG.provider,
            hasApiKey: !!AI_CONFIG.apiKey && AI_CONFIG.apiKey !== 'YOUR_DEEPSEEK_API_KEY',
            model: AI_CONFIG.model
        }
    });
});

// ═══════════════════════════════════════════════════════════════
// 🚀 ЗАПУСК
// ═══════════════════════════════════════════════════════════════

app.listen(PORT, () => {
    console.log('\n╔═══════════════════════════════════════════════════╗');
    console.log('║   🚀 BadgRules Backend - Forum Search Server     ║');
    console.log('╠═══════════════════════════════════════════════════╣');
    console.log(`║  📡 http://localhost:${PORT}                        ║`);
    console.log('║  🔍 POST /api/ask                                 ║');
    console.log('║  🏥 GET /health                                   ║');
    console.log('╠═══════════════════════════════════════════════════╣');
    
    const googleOk = GOOGLE_API_KEY && GOOGLE_API_KEY !== 'YOUR_GOOGLE_API_KEY_HERE';
    const googleCxOk = GOOGLE_CX && GOOGLE_CX !== 'YOUR_CUSTOM_SEARCH_ENGINE_ID';
    const aiOk = AI_CONFIG.apiKey && AI_CONFIG.apiKey !== 'YOUR_DEEPSEEK_API_KEY';
    
    console.log(`║  Google API:  ${googleOk ? '✅' : '❌'}                                   ║`);
    console.log(`║  Google CX:   ${googleCxOk ? '✅' : '❌'}                                   ║`);
    console.log(`║  AI (${AI_CONFIG.provider}): ${aiOk ? '✅' : '❌'}                             ║`);
    console.log('╠═══════════════════════════════════════════════════╣');
    
    if (!googleOk || !googleCxOk) {
        console.log('║                                                   ║');
        console.log('║  ⚠️  НАСТРОЙ GOOGLE SEARCH API:                  ║');
        console.log('║  1. console.cloud.google.com/apis/credentials     ║');
        console.log('║  2. programmablesearchengine.google.com/          ║');
        console.log('║     Настрой ТОЛЬКО: forum.gta5rp.com             ║');
        console.log('║  3. Добавь ключи в .env                           ║');
    }
    
    if (!aiOk) {
        console.log('║                                                   ║');
        console.log('║  ⚠️  НАСТРОЙ AI API:                             ║');
        console.log('║  DeepSeek: platform.deepseek.com                  ║');
        console.log('║  OpenAI: platform.openai.com/api-keys             ║');
    }
    
    if (googleOk && googleCxOk && aiOk) {
        console.log('║                                                   ║');
        console.log('║  ✅ ГОТОВ К РАБОТЕ!                              ║');
    }
    
    console.log('╚═══════════════════════════════════════════════════╝\n');
});