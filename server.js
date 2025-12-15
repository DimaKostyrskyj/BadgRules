const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const pathModule = require('path');

const app = express();
const PORT = 3000;

// ==================== КОНФИГУРАЦИЯ ====================
const CONFIG = {
    // API ключи
    DEEPSEEK_API_KEY: 'sk-ca0628e898fd4f62848b640d537c6a82',
    GEMINI_API_KEY: 'AIzaSyCbsZPAQAsdzeEgj56JPImGT1WBrggkL-g',
    CLAUDE_API_KEY: 'sk-ant-api03-xxx', // Получите на console.anthropic.com
    
    // URL форумов для парсинга
    FORUMS: {
        GTA5RP: {
            baseUrl: 'https://forum.gta5rp.com',
            rulesUrl: 'https://forum.gta5rp.com/forums/rules.5/',
            searchUrl: 'https://forum.gta5rp.com/search/'
        },
        MAJESTIC: {
            baseUrl: 'https://forum.majestic-rp.ru',
            rulesUrl: 'https://forum.majestic-rp.ru/forums/pravila.2/',
            searchUrl: 'https://forum.majestic-rp.ru/search/'
        }
    },
    
    // Кэширование данных (в минутах)
    CACHE_DURATION: 60
};

// ==================== БАЗА ЗНАНИЙ ====================
let rulesDatabase = {
    gta5rp: {
        lastUpdated: null,
        rules: {},
        categories: []
    },
    majestic: {
        lastUpdated: null,
        rules: {},
        categories: []
    }
};

// ==================== УТИЛИТЫ ====================
async function fetchWithTimeout(url, timeout = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

async function scrapeGTARules() {
    console.log('🔍 Парсинг правил GTA5RP...');
    
    try {
        const response = await fetchWithTimeout(CONFIG.FORUMS.GTA5RP.rulesUrl);
        const html = await response.text();
        const $ = cheerio.load(html);
        
        const rules = {};
        const categories = [];
        
        // Ищем основные разделы с правилами
        $('.structItem--thread').each((i, element) => {
            const title = $(element).find('.structItem-title a').text().trim();
            const url = CONFIG.FORUMS.GTA5RP.baseUrl + $(element).find('.structItem-title a').attr('href');
            const description = $(element).find('.structItem-minor').text().trim();
            
            if (title && title.toLowerCase().includes('правил') || 
                title.toLowerCase().includes('rules') ||
                title.toLowerCase().includes('гайд')) {
                
                const category = {
                    title,
                    url,
                    description,
                    type: 'gta5rp'
                };
                
                categories.push(category);
                console.log(`📋 Найден раздел: ${title}`);
            }
        });
        
        // Если не нашли на главной, ищем в структуре
        if (categories.length === 0) {
            $('a').each((i, element) => {
                const href = $(element).attr('href');
                const text = $(element).text().trim().toLowerCase();
                
                if (href && text.includes('правил') || text.includes('rules')) {
                    const category = {
                        title: $(element).text().trim(),
                        url: href.startsWith('http') ? href : CONFIG.FORUMS.GTA5RP.baseUrl + href,
                        description: 'Раздел правил',
                        type: 'gta5rp'
                    };
                    categories.push(category);
                }
            });
        }
        
        rulesDatabase.gta5rp = {
            lastUpdated: new Date(),
            rules: {},
            categories
        };
        
        console.log(`✅ Найдено ${categories.length} категорий правил GTA5RP`);
        return categories;
        
    } catch (error) {
        console.error('❌ Ошибка парсинга GTA5RP:', error.message);
        
        // Запасной вариант - встроенные правила
        return getFallbackGTARules();
    }
}

async function scrapeMajesticRules() {
    console.log('🔍 Парсинг правил Majestic RP...');
    
    try {
        const response = await fetchWithTimeout(CONFIG.FORUMS.MAJESTIC.rulesUrl);
        const html = await response.text();
        const $ = cheerio.load(html);
        
        const categories = [];
        
        // Парсим разделы Majestic
        $('.structItemContainer').each((i, element) => {
            const titleElement = $(element).find('.structItem-title a');
            const title = titleElement.text().trim();
            const url = titleElement.attr('href');
            
            if (title && (title.toLowerCase().includes('правил') || 
                         title.toLowerCase().includes('rules') ||
                         title.toLowerCase().includes('общие правила') ||
                         title.toLowerCase().includes('регламент'))) {
                
                const fullUrl = url.startsWith('http') ? url : CONFIG.FORUMS.MAJESTIC.baseUrl + url;
                const description = $(element).find('.structItem-minor').text().trim() || 'Правила сервера';
                
                const category = {
                    title,
                    url: fullUrl,
                    description,
                    type: 'majestic'
                };
                
                categories.push(category);
                console.log(`📋 Найден раздел Majestic: ${title}`);
            }
        });
        
        rulesDatabase.majestic = {
            lastUpdated: new Date(),
            rules: {},
            categories
        };
        
        console.log(`✅ Найдено ${categories.length} категорий правил Majestic`);
        return categories;
        
    } catch (error) {
        console.error('❌ Ошибка парсинга Majestic:', error.message);
        return getFallbackMajesticRules();
    }
}

function getFallbackGTARules() {
    return [
        {
            title: "Основные правила GTA 5 RP",
            url: "https://forum.gta5rp.com/forums/rules.5/",
            description: "Общие правила сервера",
            type: "gta5rp",
            content: `
🎭 **METAGAMING (MG)** - Использование внеигровой информации в игре:
- Нельзя использовать информацию из Discord, Twitch, TeamSpeak
- Нельзя передавать информацию между персонажами без отыгрыша
- Пример нарушения: Узнал о ограблении из чата Discord и приехал на место

⚡ **POWERGAMING (PG)** - Нереалистичные действия:
- Нельзя выживать после смертельных ранений
- Нельзя игнорировать физические ограничения
- Пример: Продолжать драться с 5 пулями в теле

🚫 **FAILRP** - Неадекватное поведение:
- Нельзя нарушать логику персонажа
- Нельзя делать действия без RP причины
- Пример: Прыгать с небоскреба и выживать

🔫 **RDM/VDM** - Беспричинное убийство:
- Для убийства должна быть RP причина
- Нельзя сбивать игроков машиной без причины
- Минимальное время для отыгрыша смерти - 10 минут

💬 **NLR (New Life Rule)** - Правило новой жизни:
- После смерти нельзя помнить обстоятельства смерти
- Нельзя возвращаться на место смерти 15 минут
- Нельзя мстить за свою смерть

📞 **IC/OOC** - Разделение роли и реальности:
- Внутриигровой (IC) и внеигровой (OOC) чаты разделены
- Нельзя использовать OOC информацию в IC
            `
        }
    ];
}

function getFallbackMajesticRules() {
    return [
        {
            title: "Общие правила Majestic RP",
            url: "https://forum.majestic-rp.ru/forums/pravila.2/",
            description: "Основные правила сервера",
            type: "majestic",
            content: `
🏙️ **ОСНОВНЫЕ ПРАВИЛА MAJESTIC RP:**

👥 **Ролевая игра:**
- Каждый игрок должен соответствовать своему персонажу
- Запрещено нарушение логики игрового мира
- Обязателен качественный отыгрыш

🚓 **Взаимодействие с полицией:**
- При остановке полицией - останавливаться
- Следовать указаниям полицейских
- Право на адвоката при задержании

💰 **Экономика и работа:**
- Запрещена передача денег без RP причины
- Работа должна быть отыграна
- Налоги и штрафы выплачиваются вовремя

🏘️ **Недвижимость и бизнес:**
- Запрещено захватывать чужую недвижимость
- Бизнес должен быть зарегистрирован
- Соблюдение договоров аренды/купли

🚗 **Транспорт:**
- Соблюдение ПДД
- Страховка обязательна
- Угон только с RP причиной

⚠️ **Нарушения и наказания:**
- 1-е нарушение: Предупреждение
- 2-е нарушение: Бан 1-3 дня
- 3-е нарушение: Бан 7-30 дней
- Серьезные нарушения: Пермамент
            `
        }
    ];
}

// ==================== ИНТЕЛЛЕКТУАЛЬНЫЙ ПОИСК ====================
function searchRules(query, server = 'all') {
    const results = [];
    const queryLower = query.toLowerCase();
    
    // Ключевые слова для категоризации
    const keywords = {
        metagaming: ['метагейминг', 'metagaming', 'mg', 'внеигровая информация', 'discord'],
        powergaming: ['павергейминг', 'powergaming', 'pg', 'нереалистично', 'выживание'],
        failrp: ['фейлрп', 'failrp', 'неадекват', 'логика'],
        rdm: ['рдм', 'rdm', 'убийство', 'беспричинно'],
        vdm: ['вдм', 'vdm', 'машина', 'сбить'],
        nlr: ['нлр', 'nlr', 'новая жизнь', 'смерть'],
        police: ['полиция', 'копы', 'lspd', 'задержание', 'штраф'],
        robbery: ['ограбление', 'грабеж', 'банк', 'ограбить'],
        zones: ['зоны', 'зеленая', 'красная', 'желтая', 'зона'],
        cars: ['машины', 'транспорт', 'авто', 'угон'],
        property: ['недвижимость', 'дом', 'бизнес', 'квартира'],
        economy: ['экономика', 'деньги', 'работа', 'зарплата'],
        family: ['семья', 'банда', 'организация', 'фракция']
    };
    
    // Определяем категорию запроса
    let detectedCategory = null;
    for (const [category, words] of Object.entries(keywords)) {
        if (words.some(word => queryLower.includes(word))) {
            detectedCategory = category;
            break;
        }
    }
    
    // Ищем в базе данных правил
    if (server === 'all' || server === 'gta5rp') {
        rulesDatabase.gta5rp.categories.forEach(rule => {
            const titleMatch = rule.title.toLowerCase().includes(queryLower);
            const descMatch = rule.description?.toLowerCase().includes(queryLower);
            const contentMatch = rule.content?.toLowerCase().includes(queryLower);
            
            if (titleMatch || descMatch || contentMatch) {
                results.push({
                    ...rule,
                    relevance: (titleMatch ? 3 : 0) + (descMatch ? 2 : 0) + (contentMatch ? 1 : 0),
                    server: 'gta5rp'
                });
            }
        });
    }
    
    if (server === 'all' || server === 'majestic') {
        rulesDatabase.majestic.categories.forEach(rule => {
            const titleMatch = rule.title.toLowerCase().includes(queryLower);
            const descMatch = rule.description?.toLowerCase().includes(queryLower);
            const contentMatch = rule.content?.toLowerCase().includes(queryLower);
            
            if (titleMatch || descMatch || contentMatch) {
                results.push({
                    ...rule,
                    relevance: (titleMatch ? 3 : 0) + (descMatch ? 2 : 0) + (contentMatch ? 1 : 0),
                    server: 'majestic'
                });
            }
        });
    }
    
    // Сортируем по релевантности
    results.sort((a, b) => b.relevance - a.relevance);
    
    return {
        query,
        detectedCategory,
        results: results.slice(0, 10), // Только топ-10 результатов
        totalFound: results.length
    };
}

// ==================== AI ОБРАБОТКА ====================
async function generateAIResponse(userQuery, model = 'deepseek') {
    console.log(`🤖 Генерация ответа (${model}) для: ${userQuery.substring(0, 50)}...`);
    
    // Ищем правила в нашей базе
    const searchResults = searchRules(userQuery);
    
    // Формируем контекст для AI
    let context = `# КОНТЕКСТ ДЛЯ BADGRULES AI

Ты - эксперт по правилам GTA 5 RP и Majestic RP. Твоя задача - давать точные ответы на основе реальных правил серверов.

## ПОЛЬЗОВАТЕЛЬ СПРАШИВАЕТ:
${userQuery}

## НАЙДЕННАЯ ИНФОРМАЦИЯ:`;

    if (searchResults.results.length > 0) {
        searchResults.results.forEach((rule, index) => {
            context += `\n\n### ${index + 1}. ${rule.title} (${rule.server.toUpperCase()})`;
            context += `\n${rule.description || ''}`;
            if (rule.content) {
                context += `\n${rule.content.substring(0, 500)}...`;
            }
        });
    } else {
        context += '\n\n⚠️ По этому запросу не найдено конкретных правил в базе.';
    }
    
    context += `

## ИНСТРУКЦИЯ ДЛЯ ОТВЕТА:
1. Если нашел правило - цитируй его точно
2. Добавь примеры нарушений и правильного поведения
3. Укажи возможные наказания
4. Если информация противоречива - укажи это
5. Если не уверен - скажи проверьте на официальном форуме
6. Будь дружелюбным и профессиональным
7. Используй эмодзи для наглядности 🎭👮💰

## ОТВЕТ:`;
    
    // Отправляем запрос к выбранному AI
    try {
        let response;
        
        switch(model) {
            case 'deepseek':
                response = await callDeepSeekAPI(context, userQuery);
                break;
            case 'gemini':
                response = await callGeminiAPI(context, userQuery);
                break;
            case 'claude':
                response = await callClaudeAPI(context, userQuery);
                break;
            default:
                response = await callDeepSeekAPI(context, userQuery);
        }
        
        // Добавляем источники в ответ
        if (searchResults.results.length > 0) {
            const sources = searchResults.results.map(r => 
                `• ${r.title} (${r.server === 'gta5rp' ? 'GTA5RP' : 'Majestic'})`
            ).join('\n');
            
            response += `\n\n📚 **Источники информации:**\n${sources}\n\n🔍 *Для точной информации проверьте официальные форумы.*`;
        }
        
        return response;
        
    } catch (error) {
        console.error(`Ошибка AI (${model}):`, error);
        return `⚠️ Ошибка при обработке запроса. Пожалуйста, проверьте:\n1. Правильность API ключей\n2. Подключение к интернету\n3. Попробуйте другой AI модель\n\nВ качестве альтернативы, вот что я нашел:\n\n${context.substring(0, 1000)}...`;
    }
}

async function callDeepSeekAPI(context, userQuery) {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CONFIG.DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
            model: 'deepseek-chat',
            messages: [
                {
                    role: 'system',
                    content: 'Ты - BadgRules AI, эксперт по правилам GTA 5 RP и Majestic RP. Отвечай точно, используя предоставленный контекст.'
                },
                {
                    role: 'user',
                    content: context
                }
            ],
            max_tokens: 2000,
            temperature: 0.7,
            stream: false
        })
    });
    
    if (!response.ok) {
        throw new Error(`DeepSeek API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
}

async function callGeminiAPI(context, userQuery) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${CONFIG.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: context
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 2000
            }
        })
    });
    
    if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

async function callClaudeAPI(context, userQuery) {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': CONFIG.CLAUDE_API_KEY,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-3-sonnet-20240229',
            max_tokens: 2000,
            messages: [{
                role: 'user',
                content: context
            }],
            temperature: 0.7
        })
    });
    
    if (!response.ok) {
        throw new Error(`Claude API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.content[0].text;
}

// ==================== API РОУТЫ ====================
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Главный API endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, model = 'deepseek' } = req.body;
        
        if (!message) {
            return res.status(400).json({ error: 'Сообщение обязательно' });
        }
        
        console.log(`📨 Запрос: "${message.substring(0, 50)}..." (модель: ${model})`);
        
        // Обновляем базу правил если старая
        const now = new Date();
        const hourAgo = new Date(now.getTime() - 60 * 60 * 1000);
        
        if (!rulesDatabase.gta5rp.lastUpdated || rulesDatabase.gta5rp.lastUpdated < hourAgo) {
            await scrapeGTARules();
        }
        
        if (!rulesDatabase.majestic.lastUpdated || rulesDatabase.majestic.lastUpdated < hourAgo) {
            await scrapeMajesticRules();
        }
        
        // Генерируем ответ
        const aiResponse = await generateAIResponse(message, model);
        
        // Сохраняем в историю
        const history = JSON.parse(await fs.readFile('chat_history.json', 'utf8').catch(() => '[]'));
        history.push({
            timestamp: now.toISOString(),
            query: message,
            model: model,
            response: aiResponse.substring(0, 500) + '...'
        });
        
        await fs.writeFile('chat_history.json', JSON.stringify(history, null, 2));
        
        res.json({
            success: true,
            response: aiResponse,
            model: model,
            timestamp: now.toISOString(),
            sources: {
                gta5rp: rulesDatabase.gta5rp.categories.length,
                majestic: rulesDatabase.majestic.categories.length
            }
        });
        
    } catch (error) {
        console.error('❌ Ошибка обработки запроса:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: error.message,
            suggestion: 'Попробуйте другой AI модель или проверьте API ключи'
        });
    }
});

// API для поиска правил
app.get('/api/search-rules', async (req, res) => {
    try {
        const { q, server = 'all' } = req.query;
        
        if (!q) {
            return res.status(400).json({ error: 'Запрос обязателен' });
        }
        
        // Обновляем базу если нужно
        await updateRulesIfNeeded();
        
        const results = searchRules(q, server);
        
        res.json({
            success: true,
            query: q,
            server: server,
            ...results
        });
        
    } catch (error) {
        console.error('Ошибка поиска:', error);
        res.status(500).json({ error: 'Search error', message: error.message });
    }
});

// API для обновления базы правил
app.post('/api/update-rules', async (req, res) => {
    try {
        console.log('🔄 Принудительное обновление базы правил...');
        
        const gtaResults = await scrapeGTARules();
        const majesticResults = await scrapeMajesticRules();
        
        res.json({
            success: true,
            message: 'База правил обновлена',
            stats: {
                gta5rp: gtaResults.length,
                majestic: majesticResults.length,
                total: gtaResults.length + majesticResults.length
            },
            lastUpdated: new Date().toISOString()
        });
        
    } catch (error) {
        res.status(500).json({ error: 'Update failed', message: error.message });
    }
});

// Статус системы
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        service: 'BadgRules AI Assistant',
        rulesDatabase: {
            gta5rp: {
                categories: rulesDatabase.gta5rp.categories.length,
                lastUpdated: rulesDatabase.gta5rp.lastUpdated
            },
            majestic: {
                categories: rulesDatabase.majestic.categories.length,
                lastUpdated: rulesDatabase.majestic.lastUpdated
            }
        },
        apis: {
            deepseek: !!CONFIG.DEEPSEEK_API_KEY && CONFIG.DEEPSEEK_API_KEY !== 'sk-...',
            gemini: !!CONFIG.GEMINI_API_KEY && CONFIG.GEMINI_API_KEY !== 'AIza...',
            claude: !!CONFIG.CLAUDE_API_KEY && CONFIG.CLAUDE_API_KEY !== 'sk-ant...'
        }
    });
});

async function updateRulesIfNeeded() {
    const now = new Date();
    const hourAgo = new Date(now.getTime() - CONFIG.CACHE_DURATION * 60 * 1000);
    
    if (!rulesDatabase.gta5rp.lastUpdated || rulesDatabase.gta5rp.lastUpdated < hourAgo) {
        await scrapeGTARules();
    }
    
    if (!rulesDatabase.majestic.lastUpdated || rulesDatabase.majestic.lastUpdated < hourAgo) {
        await scrapeMajesticRules();
    }
}

// Инициализация при запуске
async function initialize() {
    console.log('🚀 Инициализация BadgRules AI Assistant...');
    
    // Создаем файл истории если нет
    try {
        await fs.access('chat_history.json');
    } catch {
        await fs.writeFile('chat_history.json', '[]');
    }
    
    // Первоначальная загрузка правил
    await updateRulesIfNeeded();
    
    console.log('✅ Инициализация завершена');
    console.log(`📊 GTA5RP правил: ${rulesDatabase.gta5rp.categories.length}`);
    console.log(`📊 Majestic правил: ${rulesDatabase.majestic.categories.length}`);
}

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(PORT, async () => {
    console.log('\n' + '='.repeat(60));
    console.log('🤖 BADGRULES AI ASSISTANT ЗАПУЩЕН!');
    console.log('='.repeat(60));
    console.log(`🌐 Веб-интерфейс: http://localhost:${PORT}`);
    console.log(`📡 API Endpoint: http://localhost:${PORT}/api/chat`);
    console.log(`🔍 Поиск правил: http://localhost:${PORT}/api/search-rules?q=метагейминг`);
    console.log(`📊 Статус системы: http://localhost:${PORT}/api/status`);
    console.log('='.repeat(60));
    
    await initialize();
    
    console.log('='.repeat(60));
    console.log('💡 Инструкция:');
    console.log('1. Замените API ключи в server.js');
    console.log('2. Для Claude получите ключ на console.anthropic.com');
    console.log('3. Система автоматически парсит правила с форумов');
    console.log('4. Используйте разные AI модели в интерфейсе');
    console.log('='.repeat(60));
});