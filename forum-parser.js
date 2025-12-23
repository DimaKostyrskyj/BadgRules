/**
 * ═══════════════════════════════════════════════════════════════
 * FULL FORUM CRAWLER - Полный парсер форума GTA5RP
 * ═══════════════════════════════════════════════════════════════
 * 
 * Автоматически находит и парсит ВСЕ страницы форума
 * 
 * Использование:
 * node full-forum-crawler.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════
// КОНФИГУРАЦИЯ
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
    // Базовый URL форума
    forumBaseUrl: 'https://forum.gta5rp.com',
    
    // Стартовые разделы для сканирования
    startSections: [
        '/forums/pravila/',                    // Раздел правил
        '/forums/faq-i-otvety-na-samye-populyarnye-voprosy.1006/',  // FAQ
        '/forums/gajdy-i-obuchenie.1004/',    // Гайды
        '/forums/novosti-servera.1001/'       // Новости
    ],
    
    // Максимум страниц для парсинга (чтобы не перегрузить)
    maxPages: 50,
    
    // Максимум тредов на раздел
    maxThreadsPerSection: 20,
    
    // Настройки чанкинга
    chunkSize: 600,
    chunkOverlap: 100,
    
    // Выходные файлы
    output: {
        full: 'full-forum-database.json',
        browser: 'forum-database-browser.json',
        log: 'crawler.log'
    },
    
    // Задержка между запросами (мс)
    requestDelay: 1000,
    
    // Ключевые слова
    keywords: [
        'dm', 'rdm', 'vdm', 'pg', 'mg', 'nlr', 'rp', 'rk', 'tk', 'ck', 'fck',
        'правил', 'запрещен', 'разрешен', 'можно', 'нельзя',
        'зона', 'зелен', 'больниц', 'полиц', 'гос', 'ems', 'sheriff',
        'граб', 'убийств', 'похищен', 'маск', 'гетто', 'банд', 'фракц',
        'организац', 'сервер', 'игрок', 'наказан', 'варн', 'бан', 'кик',
        'такси', 'заправк', 'магазин', 'оружи', 'транспорт', 'дом',
        'деньг', 'работ', 'лидер', 'война', 'территор', 'база'
    ]
};

// ═══════════════════════════════════════════════════════════════
// CORS ПРОКСИ
// ═══════════════════════════════════════════════════════════════

const CORS_PROXIES = [
    'https://api.allorigins.win/raw?url=',
    'https://corsproxy.io/?',
    'https://api.codetabs.com/v1/proxy?quest='
];

let currentProxyIndex = 0;

// ═══════════════════════════════════════════════════════════════
// ЛОГИРОВАНИЕ
// ═══════════════════════════════════════════════════════════════

const logFile = path.join(__dirname, 'forum-data', CONFIG.output.log);

function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    console.log(message);
    
    try {
        fs.appendFileSync(logFile, logMessage);
    } catch (e) {
        // Игнорируем ошибки логирования
    }
}

// ═══════════════════════════════════════════════════════════════
// ЗАДЕРЖКА
// ═══════════════════════════════════════════════════════════════

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ═══════════════════════════════════════════════════════════════
// ЗАГРУЗКА СТРАНИЦЫ
// ═══════════════════════════════════════════════════════════════

function fetchPage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function fetchWithProxy(url) {
    const proxy = CORS_PROXIES[currentProxyIndex];
    const proxyUrl = proxy + encodeURIComponent(url);
    
    try {
        return await fetchPage(proxyUrl);
    } catch (err) {
        currentProxyIndex = (currentProxyIndex + 1) % CORS_PROXIES.length;
        throw err;
    }
}

async function safeFetch(url) {
    try {
        return await fetchPage(url);
    } catch (err) {
        log(`⚠️ Прямая загрузка не удалась, пробую прокси...`);
        return await fetchWithProxy(url);
    }
}

// ═══════════════════════════════════════════════════════════════
// ИЗВЛЕЧЕНИЕ ССЫЛОК
// ═══════════════════════════════════════════════════════════════

function extractThreadLinks(html, baseUrl) {
    const links = [];
    
    // Ищем ссылки на треды
    // Формат: /threads/название.ID/
    const threadRegex = /href="(\/threads\/[^"]+)"/g;
    
    let match;
    while ((match = threadRegex.exec(html)) !== null) {
        const threadPath = match[1];
        
        // Пропускаем дубликаты
        if (links.find(l => l.path === threadPath)) continue;
        
        const fullUrl = baseUrl + threadPath;
        
        // Извлекаем ID треда
        const idMatch = threadPath.match(/\.(\d+)\//);
        const threadId = idMatch ? idMatch[1] : null;
        
        // Извлекаем название
        const nameMatch = threadPath.match(/\/threads\/([^.]+)\./);
        const threadName = nameMatch ? nameMatch[1].replace(/-/g, ' ') : 'Unknown';
        
        links.push({
            path: threadPath,
            url: fullUrl,
            id: threadId,
            name: threadName
        });
    }
    
    return links;
}

function extractSectionLinks(html, baseUrl) {
    const links = [];
    
    // Ищем ссылки на разделы
    // Формат: /forums/название.ID/
    const sectionRegex = /href="(\/forums\/[^"]+)"/g;
    
    let match;
    while ((match = sectionRegex.exec(html)) !== null) {
        const sectionPath = match[1];
        
        if (links.find(l => l.path === sectionPath)) continue;
        
        const fullUrl = baseUrl + sectionPath;
        
        const idMatch = sectionPath.match(/\.(\d+)\//);
        const sectionId = idMatch ? idMatch[1] : null;
        
        const nameMatch = sectionPath.match(/\/forums\/([^.]+)/);
        const sectionName = nameMatch ? nameMatch[1].replace(/-/g, ' ') : 'Unknown';
        
        links.push({
            path: sectionPath,
            url: fullUrl,
            id: sectionId,
            name: sectionName
        });
    }
    
    return links;
}

// ═══════════════════════════════════════════════════════════════
// ИЗВЛЕЧЕНИЕ ТЕКСТА
// ═══════════════════════════════════════════════════════════════

function extractText(html) {
    // Удаляем скрипты и стили
    let text = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    
    // Ищем контент по селекторам
    const selectors = [
        /<div class="messageText[^>]*>(.*?)<\/div>/gs,
        /<div class="message-body[^>]*>(.*?)<\/div>/gs,
        /<div class="bbWrapper[^>]*>(.*?)<\/div>/gs,
        /<article[^>]*>(.*?)<\/article>/gs
    ];
    
    let content = '';
    
    for (const selector of selectors) {
        const matches = text.matchAll(selector);
        for (const match of matches) {
            content += match[1] + '\n\n';
        }
    }
    
    // Если не нашли - берем body
    if (content.length < 500) {
        const bodyMatch = text.match(/<body[^>]*>(.*?)<\/body>/s);
        if (bodyMatch) {
            content = bodyMatch[1];
        }
    }
    
    // Очищаем
    content = content
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\[.*?\]/g, '')
        .replace(/https?:\/\/[^\s]+/g, '')
        .replace(/[^\wа-яА-ЯёЁ\s.,!?:;-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    
    return content;
}

// ═══════════════════════════════════════════════════════════════
// ЧАНКИНГ
// ═══════════════════════════════════════════════════════════════

function chunkText(text) {
    const chunks = [];
    const size = CONFIG.chunkSize;
    const overlap = CONFIG.chunkOverlap;
    
    for (let i = 0; i < text.length; i += (size - overlap)) {
        const chunk = text.substring(i, i + size).trim();
        if (chunk.length > 100) {
            chunks.push(chunk);
        }
    }
    
    return chunks;
}

// ═══════════════════════════════════════════════════════════════
// ЭМБЕДДИНГ
// ═══════════════════════════════════════════════════════════════

function createEmbedding(text) {
    const words = text.toLowerCase()
        .replace(/[^\wа-яё\s]/gi, ' ')
        .split(/\s+/)
        .filter(w => w.length > 2);
    
    const freq = {};
    words.forEach(w => {
        freq[w] = (freq[w] || 0) + 1;
    });
    
    const embedding = {};
    CONFIG.keywords.forEach(kw => {
        embedding[kw] = freq[kw] || 0;
    });
    
    return embedding;
}

function normalizeEmbedding(embedding) {
    let sum = 0;
    for (const key in embedding) {
        sum += embedding[key] * embedding[key];
    }
    const norm = Math.sqrt(sum);
    
    if (norm === 0) return embedding;
    
    const normalized = {};
    for (const key in embedding) {
        normalized[key] = embedding[key] / norm;
    }
    return normalized;
}

// ═══════════════════════════════════════════════════════════════
// ГЛАВНАЯ ФУНКЦИЯ КРАУЛЕРА
// ═══════════════════════════════════════════════════════════════

async function crawlForum() {
    log('🚀 Запуск полного краулера форума...');
    log(`📍 Базовый URL: ${CONFIG.forumBaseUrl}`);
    log(`📊 Максимум страниц: ${CONFIG.maxPages}`);
    log('');
    
    const database = {
        chunks: [],
        metadata: {
            created: new Date().toISOString(),
            baseUrl: CONFIG.forumBaseUrl,
            totalPages: 0,
            totalSections: 0,
            totalThreads: 0,
            totalChunks: 0,
            keywords: CONFIG.keywords
        }
    };
    
    const visited = new Set();
    const toVisit = [...CONFIG.startSections];
    
    let pageCount = 0;
    let sectionCount = 0;
    let threadCount = 0;
    
    // Обходим разделы
    while (toVisit.length > 0 && pageCount < CONFIG.maxPages) {
        const sectionPath = toVisit.shift();
        
        if (visited.has(sectionPath)) continue;
        visited.add(sectionPath);
        
        const sectionUrl = CONFIG.forumBaseUrl + sectionPath;
        
        log(`\n[${ pageCount + 1}/${CONFIG.maxPages}] 📂 РАЗДЕЛ: ${sectionPath}`);
        
        try {
            // Загружаем раздел
            const html = await safeFetch(sectionUrl);
            await delay(CONFIG.requestDelay);
            
            pageCount++;
            sectionCount++;
            
            // Извлекаем треды
            const threads = extractThreadLinks(html, CONFIG.forumBaseUrl);
            log(`   Найдено тредов: ${threads.length}`);
            
            // Обрабатываем треды
            let processedThreads = 0;
            for (const thread of threads) {
                if (processedThreads >= CONFIG.maxThreadsPerSection) {
                    log(`   ⏭️ Достигнут лимит тредов (${CONFIG.maxThreadsPerSection})`);
                    break;
                }
                
                if (visited.has(thread.path)) continue;
                visited.add(thread.path);
                
                if (pageCount >= CONFIG.maxPages) {
                    log(`   ⏭️ Достигнут лимит страниц (${CONFIG.maxPages})`);
                    break;
                }
                
                log(`   📄 Тред: ${thread.name}`);
                
                try {
                    const threadHtml = await safeFetch(thread.url);
                    await delay(CONFIG.requestDelay);
                    
                    pageCount++;
                    threadCount++;
                    processedThreads++;
                    
                    // Извлекаем текст
                    const text = extractText(threadHtml);
                    
                    if (text.length < 200) {
                        log(`      ⚠️ Мало текста (${text.length} символов)`);
                        continue;
                    }
                    
                    // Создаем чанки
                    const chunks = chunkText(text);
                    
                    // Создаем эмбеддинги
                    chunks.forEach((chunk, idx) => {
                        const embedding = createEmbedding(chunk);
                        const normalized = normalizeEmbedding(embedding);
                        
                        database.chunks.push({
                            text: chunk,
                            embedding: normalized,
                            metadata: {
                                source: thread.url,
                                title: thread.name,
                                threadId: thread.id,
                                category: 'forum',
                                chunkIndex: idx,
                                chunkTotal: chunks.length
                            }
                        });
                    });
                    
                    log(`      ✅ Обработано: ${chunks.length} чанков`);
                    
                } catch (err) {
                    log(`      ❌ Ошибка: ${err.message}`);
                }
            }
            
            // Извлекаем подразделы (первый уровень)
            if (sectionPath.split('/').length <= 3) {  // Не уходим слишком глубоко
                const subsections = extractSectionLinks(html, CONFIG.forumBaseUrl);
                
                for (const subsection of subsections) {
                    if (!visited.has(subsection.path) && !toVisit.includes(subsection.path)) {
                        toVisit.push(subsection.path);
                    }
                }
            }
            
        } catch (err) {
            log(`   ❌ Ошибка раздела: ${err.message}`);
        }
    }
    
    database.metadata.totalPages = pageCount;
    database.metadata.totalSections = sectionCount;
    database.metadata.totalThreads = threadCount;
    database.metadata.totalChunks = database.chunks.length;
    
    log('\n🎉 Краулинг завершен!');
    log(`📊 Статистика:`);
    log(`   Страниц обработано: ${pageCount}`);
    log(`   Разделов: ${sectionCount}`);
    log(`   Тредов: ${threadCount}`);
    log(`   Чанков создано: ${database.chunks.length}`);
    
    return database;
}

// ═══════════════════════════════════════════════════════════════
// СОХРАНЕНИЕ
// ═══════════════════════════════════════════════════════════════

function saveDatabase(database) {
    log('\n💾 Сохраняю данные...');
    
    const outputDir = path.join(__dirname, 'forum-data');
    
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    
    // Полная база
    const fullPath = path.join(outputDir, CONFIG.output.full);
    fs.writeFileSync(fullPath, JSON.stringify(database, null, 2));
    log(`✅ ${fullPath}`);
    
    // Компактная для браузера
    const browserChunks = database.chunks.map(chunk => ({
        text: chunk.text,
        embedding: chunk.embedding,
        metadata: chunk.metadata
    }));
    
    const browserDb = {
        chunks: browserChunks,
        metadata: database.metadata
    };
    
    const browserPath = path.join(outputDir, CONFIG.output.browser);
    fs.writeFileSync(browserPath, JSON.stringify(browserDb, null, 2));
    log(`✅ ${browserPath}`);
    
    log('\n✅ Все файлы сохранены!');
}

// ═══════════════════════════════════════════════════════════════
// ЗАПУСК
// ═══════════════════════════════════════════════════════════════

async function main() {
    try {
        console.log(`
╔═══════════════════════════════════════════════════════════╗
║       FULL FORUM CRAWLER - GTA5RP                         ║
║       Автоматический краулер всего форума                 ║
╚═══════════════════════════════════════════════════════════╝
`);
        
        // Создаем директорию
        const outputDir = path.join(__dirname, 'forum-data');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }
        
        const database = await crawlForum();
        saveDatabase(database);
        
        log('\n✅ Готово! Данные можно использовать в RAG системе.');
        
    } catch (err) {
        log(`\n❌ Критическая ошибка: ${err.message}`);
        console.error(err);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = {
    crawlForum,
    extractText,
    chunkText,
    createEmbedding
};