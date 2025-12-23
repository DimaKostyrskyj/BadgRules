/**
 * ═══════════════════════════════════════════════════════════════
 * FORUM PARSER - Парсер форума GTA5RP для RAG системы
 * ═══════════════════════════════════════════════════════════════
 * 
 * Назначение:
 * - Загружает страницы с форума forum.gta5rp.com
 * - Извлекает текст правил
 * - Очищает от мусора (HTML теги, BB-коды, ссылки)
 * - Разбивает на чанки
 * - Создает эмбеддинги
 * - Сохраняет в JSON файлы
 * 
 * Использование:
 * node forum-parser.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════
// КОНФИГУРАЦИЯ
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
    // Страницы для парсинга
    pages: [
        {
            url: 'https://forum.gta5rp.com/threads/pravila-proekta.652405/',
            title: 'Правила проекта GTA5RP',
            category: 'rules',
            priority: 10
        },
        {
            url: 'https://forum.gta5rp.com/threads/zeljonye-zony.652406/',
            title: 'Зеленые зоны',
            category: 'zones',
            priority: 9
        },
        {
            url: 'https://forum.gta5rp.com/threads/nps-i-nekotorye-momenty.652408/',
            title: 'NPC и некоторые моменты',
            category: 'gameplay',
            priority: 8
        },
        {
            url: 'https://forum.gta5rp.com/threads/pravila-rp-situacij.652409/',
            title: 'Правила RP ситуаций',
            category: 'rp',
            priority: 9
        }
    ],
    
    // Настройки чанкинга
    chunkSize: 600,
    chunkOverlap: 100,
    
    // Выходные файлы
    output: {
        chunks: 'forum-chunks.json',
        embeddings: 'forum-embeddings.json',
        metadata: 'forum-metadata.json',
        full: 'forum-database.json'
    },
    
    // Ключевые термины для эмбеддинга
    keywords: [
        'dm', 'rdm', 'vdm', 'pg', 'mg', 'nlr', 'rp', 'rk', 'tk', 'ck',
        'правил', 'запрещен', 'разрешен', 'можно', 'нельзя',
        'зона', 'зелен', 'больниц', 'полиц', 'гос', 'ems', 'sheriff',
        'граб', 'убийств', 'похищен', 'маск', 'гетто', 'банд', 'фракц',
        'организац', 'сервер', 'игрок', 'наказан', 'варн', 'бан', 'кик',
        'такси', 'заправк', 'магазин', 'оружи', 'транспорт', 'дом',
        'деньг', 'работ', 'лидер', 'война', 'территор', 'базы'
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

// ═══════════════════════════════════════════════════════════════
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ═══════════════════════════════════════════════════════════════

/**
 * Загрузка страницы через HTTPS
 */
function fetchPage(url) {
    return new Promise((resolve, reject) => {
        console.log(`📥 Загружаю: ${url}`);
        
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                console.log(`✅ Загружено: ${data.length} байт`);
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

/**
 * Загрузка через CORS прокси (fallback)
 */
async function fetchWithProxy(url) {
    for (const proxy of CORS_PROXIES) {
        try {
            const proxyUrl = proxy + encodeURIComponent(url);
            return await fetchPage(proxyUrl);
        } catch (err) {
            console.warn(`⚠️ Прокси ${proxy} не сработал`);
        }
    }
    throw new Error('Все прокси не сработали');
}

/**
 * Извлечение текста из HTML
 */
function extractText(html) {
    console.log(`🔍 Извлекаю текст...`);
    
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
    
    // Если не нашли - берем всё между body
    if (content.length < 500) {
        const bodyMatch = text.match(/<body[^>]*>(.*?)<\/body>/s);
        if (bodyMatch) {
            content = bodyMatch[1];
        }
    }
    
    // Очищаем HTML теги
    content = content
        .replace(/<[^>]+>/g, ' ')           // HTML теги
        .replace(/&nbsp;/g, ' ')            // &nbsp;
        .replace(/&quot;/g, '"')            // Кавычки
        .replace(/&amp;/g, '&')             // Амперсанд
        .replace(/&lt;/g, '<')              // <
        .replace(/&gt;/g, '>')              // >
        .replace(/\[.*?\]/g, '')            // BB-коды
        .replace(/https?:\/\/[^\s]+/g, '')  // Ссылки
        .replace(/[^\wа-яА-ЯёЁ\s.,!?:;-]/g, ' ')  // Спецсимволы
        .replace(/\s+/g, ' ')               // Множественные пробелы
        .trim();
    
    console.log(`✅ Извлечено: ${content.length} символов`);
    return content;
}

/**
 * Разбиение на чанки
 */
function chunkText(text, size = CONFIG.chunkSize, overlap = CONFIG.chunkOverlap) {
    console.log(`📦 Разбиваю на чанки (size: ${size}, overlap: ${overlap})...`);
    
    const chunks = [];
    let start = 0;
    
    while (start < text.length) {
        const end = Math.min(start + size, text.length);
        const chunk = text.substring(start, end).trim();
        
        if (chunk.length > 100) {  // Игнорируем короткие
            chunks.push(chunk);
        }
        
        start += (size - overlap);
    }
    
    console.log(`✅ Создано ${chunks.length} чанков`);
    return chunks;
}

/**
 * Создание эмбеддинга (TF-IDF)
 */
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

/**
 * Нормализация эмбеддинга
 */
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
// ОСНОВНАЯ ФУНКЦИЯ ПАРСИНГА
// ═══════════════════════════════════════════════════════════════

async function parseForums() {
    console.log('🚀 Начинаю парсинг форумов...\n');
    
    const database = {
        chunks: [],
        metadata: {
            created: new Date().toISOString(),
            totalPages: CONFIG.pages.length,
            totalChunks: 0,
            keywords: CONFIG.keywords
        }
    };
    
    // Парсим каждую страницу
    for (let i = 0; i < CONFIG.pages.length; i++) {
        const page = CONFIG.pages[i];
        
        console.log(`\n[${ i + 1}/${CONFIG.pages.length}] Обрабатываю: ${page.title}`);
        console.log(`URL: ${page.url}`);
        
        try {
            // 1. Загружаем страницу
            let html;
            try {
                html = await fetchPage(page.url);
            } catch (err) {
                console.warn('⚠️ Прямая загрузка не удалась, пробую через прокси...');
                html = await fetchWithProxy(page.url);
            }
            
            // 2. Извлекаем текст
            const text = extractText(html);
            
            if (text.length < 200) {
                console.warn(`⚠️ Слишком мало текста (${text.length} символов), пропускаю`);
                continue;
            }
            
            // 3. Разбиваем на чанки
            const chunks = chunkText(text);
            
            // 4. Создаем эмбеддинги для каждого чанка
            console.log(`🧠 Создаю эмбеддинги...`);
            chunks.forEach((chunk, idx) => {
                const embedding = createEmbedding(chunk);
                const normalized = normalizeEmbedding(embedding);
                
                database.chunks.push({
                    text: chunk,
                    embedding: normalized,
                    rawEmbedding: embedding,  // Сохраняем и не нормализованный
                    metadata: {
                        source: page.url,
                        title: page.title,
                        category: page.category,
                        priority: page.priority,
                        chunkIndex: idx,
                        chunkTotal: chunks.length,
                        pageIndex: i
                    }
                });
            });
            
            console.log(`✅ Обработано: ${chunks.length} чанков`);
            
        } catch (err) {
            console.error(`❌ Ошибка обработки ${page.title}:`, err.message);
        }
    }
    
    database.metadata.totalChunks = database.chunks.length;
    
    console.log(`\n🎉 Парсинг завершен!`);
    console.log(`📊 Всего чанков: ${database.chunks.length}`);
    
    return database;
}

// ═══════════════════════════════════════════════════════════════
// СОХРАНЕНИЕ ДАННЫХ
// ═══════════════════════════════════════════════════════════════

function saveDatabase(database) {
    console.log(`\n💾 Сохраняю данные...`);
    
    const outputDir = path.join(__dirname, 'forum-data');
    
    // Создаем директорию если нет
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    
    // 1. Полная база данных
    const fullPath = path.join(outputDir, CONFIG.output.full);
    fs.writeFileSync(fullPath, JSON.stringify(database, null, 2));
    console.log(`✅ Сохранено: ${fullPath} (${getFileSize(fullPath)})`);
    
    // 2. Только чанки (для быстрой загрузки)
    const chunksPath = path.join(outputDir, CONFIG.output.chunks);
    fs.writeFileSync(chunksPath, JSON.stringify(database.chunks, null, 2));
    console.log(`✅ Сохранено: ${chunksPath} (${getFileSize(chunksPath)})`);
    
    // 3. Метаданные
    const metaPath = path.join(outputDir, CONFIG.output.metadata);
    fs.writeFileSync(metaPath, JSON.stringify(database.metadata, null, 2));
    console.log(`✅ Сохранено: ${metaPath} (${getFileSize(metaPath)})`);
    
    // 4. Компактная версия для браузера (без rawEmbedding)
    const browserChunks = database.chunks.map(chunk => ({
        text: chunk.text,
        embedding: chunk.embedding,
        metadata: chunk.metadata
    }));
    
    const browserPath = path.join(outputDir, 'forum-database-browser.json');
    fs.writeFileSync(browserPath, JSON.stringify({
        chunks: browserChunks,
        metadata: database.metadata
    }, null, 2));
    console.log(`✅ Сохранено: ${browserPath} (${getFileSize(browserPath)}) - для браузера`);
    
    console.log(`\n✅ Все файлы сохранены в: ${outputDir}`);
}

function getFileSize(filepath) {
    const stats = fs.statSync(filepath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    return sizeMB > 1 ? `${sizeMB} MB` : `${sizeKB} KB`;
}

// ═══════════════════════════════════════════════════════════════
// СТАТИСТИКА
// ═══════════════════════════════════════════════════════════════

function printStatistics(database) {
    console.log(`\n📊 СТАТИСТИКА:`);
    console.log(`═══════════════════════════════════════`);
    console.log(`Всего страниц обработано: ${database.metadata.totalPages}`);
    console.log(`Всего чанков создано: ${database.metadata.totalChunks}`);
    console.log(`Размер ключевых слов: ${CONFIG.keywords.length}`);
    
    console.log(`\nПо категориям:`);
    const categories = {};
    database.chunks.forEach(chunk => {
        const cat = chunk.metadata.category;
        categories[cat] = (categories[cat] || 0) + 1;
    });
    
    for (const [cat, count] of Object.entries(categories)) {
        console.log(`  ${cat}: ${count} чанков`);
    }
    
    console.log(`\nПо источникам:`);
    const sources = {};
    database.chunks.forEach(chunk => {
        const title = chunk.metadata.title;
        sources[title] = (sources[title] || 0) + 1;
    });
    
    for (const [title, count] of Object.entries(sources)) {
        console.log(`  ${title}: ${count} чанков`);
    }
    
    // Средняя длина чанка
    const avgLength = database.chunks.reduce((sum, c) => sum + c.text.length, 0) / database.chunks.length;
    console.log(`\nСредняя длина чанка: ${avgLength.toFixed(0)} символов`);
    
    console.log(`═══════════════════════════════════════`);
}

// ═══════════════════════════════════════════════════════════════
// ЗАПУСК
// ═══════════════════════════════════════════════════════════════

async function main() {
    try {
        console.log(`
╔═══════════════════════════════════════════════════════════╗
║            FORUM PARSER - GTA5RP                          ║
║            Парсер форума для RAG системы                  ║
╚═══════════════════════════════════════════════════════════╝
`);
        
        const database = await parseForums();
        saveDatabase(database);
        printStatistics(database);
        
        console.log(`\n✅ Готово! Данные можно использовать в RAG системе.`);
        
    } catch (err) {
        console.error(`\n❌ Критическая ошибка:`, err);
        process.exit(1);
    }
}

// Запускаем если это главный модуль
if (require.main === module) {
    main();
}

module.exports = {
    parseForums,
    extractText,
    chunkText,
    createEmbedding
};
