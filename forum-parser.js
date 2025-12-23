/**
 * ═══════════════════════════════════════════════════════════════
 * ULTIMATE FORUM SCRAPER - Полный анализ всего форума
 * ═══════════════════════════════════════════════════════════════
 * 
 * Автоматически:
 * 1. Находит ВСЕ разделы форума
 * 2. Находит ВСЕ темы в каждом разделе
 * 3. Парсит ВСЕ страницы каждой темы
 * 4. Создает ПОЛНУЮ базу знаний
 * 
 * Использование:
 * node ultimate-scraper.js
 */

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════
// КОНФИГУРАЦИЯ
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
    // Базовый URL
    forumUrl: 'https://forum.gta5rp.com',
    
    // Главная страница для старта
    startUrl: 'https://forum.gta5rp.com',
    
    // ЛИМИТЫ (чтобы не перегрузить)
    maxSections: 20,        // Максимум разделов
    maxThreadsPerSection: 30, // Максимум тем на раздел
    maxPagesPerThread: 5,   // Максимум страниц в теме
    
    // ИЛИ убрать лимиты для ПОЛНОГО парсинга:
    // maxSections: 999,
    // maxThreadsPerSection: 999,
    // maxPagesPerThread: 999,
    
    // Задержки (чтобы не заблокировали)
    delayBetweenPages: 2000,    // 2 секунды между страницами
    delayBetweenThreads: 1000,  // 1 секунда между темами
    delayBetweenSections: 3000, // 3 секунды между разделами
    
    // Настройки чанкинга
    chunkSize: 600,
    chunkOverlap: 100,
    
    // Ключевые слова для эмбеддинга
    keywords: [
        // Правила
        'dm', 'rdm', 'vdm', 'pg', 'mg', 'nlr', 'rp', 'rk', 'tk', 'ck', 'fck',
        'правил', 'запрещен', 'разрешен', 'можно', 'нельзя', 'должен',
        
        // Места
        'зона', 'зелен', 'больниц', 'полиц', 'гос', 'ems', 'sheriff', 'hospital',
        'government', 'гетто', 'ghetto', 'база', 'территор',
        
        // Действия
        'граб', 'убийств', 'похищен', 'маск', 'оружи', 'стрельб', 'атак',
        'банд', 'фракц', 'организац', 'gang', 'mafia', 'capture',
        
        // Игровые термины
        'сервер', 'игрок', 'админ', 'модератор', 'репорт', 'жалоб',
        'наказан', 'варн', 'бан', 'кик', 'мут', 'warn', 'kick', 'mute',
        
        // Объекты
        'такси', 'заправк', 'магазин', 'транспорт', 'дом', 'бизнес',
        'деньг', 'работ', 'зарплат', 'лидер', 'война'
    ],
    
    // Приоритетные разделы (парсятся первыми)
    prioritySections: [
        'pravila',
        'faq',
        'rules',
        'gajdy',
        'guide'
    ],
    
    // Игнорировать разделы
    ignoreSections: [
        'offtop',
        'flood',
        'spam',
        'archive',
        'arxiv'
    ]
};

// ═══════════════════════════════════════════════════════════════
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ═══════════════════════════════════════════════════════════════

const STATS = {
    sectionsProcessed: 0,
    threadsProcessed: 0,
    pagesProcessed: 0,
    chunksCreated: 0,
    errors: 0,
    startTime: Date.now()
};

const VISITED = {
    sections: new Set(),
    threads: new Set(),
    pages: new Set()
};

// ═══════════════════════════════════════════════════════════════
// УТИЛИТЫ
// ═══════════════════════════════════════════════════════════════

function log(message) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${message}`);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getElapsedTime() {
    const elapsed = Date.now() - STATS.startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    return `${minutes}м ${seconds}с`;
}

// ═══════════════════════════════════════════════════════════════
// ФУНКЦИИ ОБРАБОТКИ ТЕКСТА
// ═══════════════════════════════════════════════════════════════

function cleanText(text) {
    return text
        .replace(/\s+/g, ' ')
        .replace(/[^\wа-яА-ЯёЁ\s.,!?:;()№-]/g, '')
        .trim();
}

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

function createEmbedding(text) {
    const words = text.toLowerCase()
        .replace(/[^\wа-яё\s]/gi, ' ')
        .split(/\s+/)
        .filter(w => w.length > 2);
    
    const freq = {};
    words.forEach(w => freq[w] = (freq[w] || 0) + 1);
    
    const embedding = {};
    CONFIG.keywords.forEach(kw => embedding[kw] = freq[kw] || 0);
    
    return embedding;
}

function normalizeEmbedding(embedding) {
    let sum = 0;
    for (const key in embedding) sum += embedding[key] * embedding[key];
    const norm = Math.sqrt(sum);
    
    if (norm === 0) return embedding;
    
    const normalized = {};
    for (const key in embedding) normalized[key] = embedding[key] / norm;
    return normalized;
}

// ═══════════════════════════════════════════════════════════════
// SELENIUM ФУНКЦИИ
// ═══════════════════════════════════════════════════════════════

async function createDriver() {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--disable-gpu');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    options.addArguments('--window-size=1920,1080');
    
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    
    return driver;
}

async function safeGet(driver, url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            await driver.get(url);
            await delay(1000);
            return true;
        } catch (err) {
            log(`⚠️ Попытка ${i + 1}/${retries} не удалась: ${err.message}`);
            if (i === retries - 1) throw err;
            await delay(2000);
        }
    }
    return false;
}

async function extractText(driver) {
    try {
        // Ждем загрузки контента
        await driver.wait(until.elementLocated(By.css('body')), 5000);
        
        // Извлекаем текст из основного контента
        const selectors = [
            '.messageText',
            '.message-body',
            '.bbWrapper',
            '.message-content',
            'article.message-body'
        ];
        
        let text = '';
        
        for (const selector of selectors) {
            try {
                const elements = await driver.findElements(By.css(selector));
                
                for (const el of elements) {
                    const elText = await el.getText();
                    if (elText.length > 50) {
                        text += elText + '\n\n';
                    }
                }
                
                if (text.length > 500) break;
            } catch (e) {
                // Игнорируем ошибки отдельных селекторов
            }
        }
        
        return cleanText(text);
        
    } catch (err) {
        log(`⚠️ Ошибка извлечения текста: ${err.message}`);
        return '';
    }
}

// ═══════════════════════════════════════════════════════════════
// ПОИСК ССЫЛОК
// ═══════════════════════════════════════════════════════════════

async function findSectionLinks(driver) {
    const links = [];
    
    try {
        const elements = await driver.findElements(By.css('a[href*="/forums/"]'));
        
        for (const el of elements) {
            try {
                const href = await el.getAttribute('href');
                const text = await el.getText();
                
                if (href && href.includes('/forums/') && text.length > 0) {
                    links.push({
                        url: href,
                        title: text.trim()
                    });
                }
            } catch (e) {
                // Игнорируем
            }
        }
    } catch (err) {
        log(`⚠️ Ошибка поиска разделов: ${err.message}`);
    }
    
    return links;
}

async function findThreadLinks(driver) {
    const links = [];
    
    try {
        const elements = await driver.findElements(By.css('a[href*="/threads/"]'));
        
        for (const el of elements) {
            try {
                const href = await el.getAttribute('href');
                const text = await el.getText();
                
                if (href && href.includes('/threads/') && text.length > 0) {
                    links.push({
                        url: href,
                        title: text.trim()
                    });
                }
            } catch (e) {
                // Игнорируем
            }
        }
    } catch (err) {
        log(`⚠️ Ошибка поиска тем: ${err.message}`);
    }
    
    return links;
}

async function findPageLinks(driver, currentUrl) {
    const links = [];
    
    try {
        // Ищем пагинацию
        const elements = await driver.findElements(By.css('.pageNav-page, a[href*="page-"]'));
        
        for (const el of elements) {
            try {
                const href = await el.getAttribute('href');
                
                if (href && !VISITED.pages.has(href)) {
                    links.push(href);
                }
            } catch (e) {
                // Игнорируем
            }
        }
    } catch (err) {
        log(`⚠️ Ошибка поиска страниц: ${err.message}`);
    }
    
    return links;
}

// ═══════════════════════════════════════════════════════════════
// ГЛАВНЫЕ ФУНКЦИИ ПАРСИНГА
// ═══════════════════════════════════════════════════════════════

async function parseThread(driver, threadUrl, database) {
    if (VISITED.threads.has(threadUrl)) return;
    VISITED.threads.add(threadUrl);
    
    log(`  📄 Тема: ${threadUrl}`);
    
    try {
        await safeGet(driver, threadUrl);
        await delay(CONFIG.delayBetweenPages);
        
        STATS.threadsProcessed++;
        
        // Получаем заголовок
        let title = 'Unknown Thread';
        try {
            const titleEl = await driver.findElement(By.css('h1.p-title-value, .p-title'));
            title = await titleEl.getText();
        } catch (e) {
            // Пробуем извлечь из URL
            const match = threadUrl.match(/\/threads\/([^/]+)/);
            if (match) title = match[1].replace(/-/g, ' ');
        }
        
        // Парсим первую страницу
        const text = await extractText(driver);
        
        if (text.length > 200) {
            const chunks = chunkText(text);
            
            chunks.forEach((chunk, idx) => {
                const embedding = createEmbedding(chunk);
                const normalized = normalizeEmbedding(embedding);
                
                database.chunks.push({
                    text: chunk,
                    embedding: normalized,
                    metadata: {
                        source: threadUrl,
                        title: title,
                        category: 'forum',
                        chunkIndex: idx,
                        chunkTotal: chunks.length
                    }
                });
                
                STATS.chunksCreated++;
            });
            
            log(`    ✅ ${chunks.length} чанков`);
        } else {
            log(`    ⚠️ Мало текста (${text.length} символов)`);
        }
        
        // Ищем другие страницы темы
        const pageLinks = await findPageLinks(driver, threadUrl);
        const pagesToParse = pageLinks.slice(0, CONFIG.maxPagesPerThread - 1);
        
        for (const pageUrl of pagesToParse) {
            if (VISITED.pages.has(pageUrl)) continue;
            VISITED.pages.add(pageUrl);
            
            try {
                await safeGet(driver, pageUrl);
                await delay(CONFIG.delayBetweenPages);
                
                STATS.pagesProcessed++;
                
                const pageText = await extractText(driver);
                
                if (pageText.length > 200) {
                    const pageChunks = chunkText(pageText);
                    
                    pageChunks.forEach((chunk, idx) => {
                        const embedding = createEmbedding(chunk);
                        const normalized = normalizeEmbedding(embedding);
                        
                        database.chunks.push({
                            text: chunk,
                            embedding: normalized,
                            metadata: {
                                source: pageUrl,
                                title: title,
                                category: 'forum',
                                chunkIndex: idx,
                                chunkTotal: pageChunks.length
                            }
                        });
                        
                        STATS.chunksCreated++;
                    });
                }
                
            } catch (err) {
                log(`    ❌ Ошибка страницы: ${err.message}`);
                STATS.errors++;
            }
        }
        
    } catch (err) {
        log(`  ❌ Ошибка темы: ${err.message}`);
        STATS.errors++;
    }
}

async function parseSection(driver, sectionUrl, database) {
    if (VISITED.sections.has(sectionUrl)) return;
    VISITED.sections.add(sectionUrl);
    
    // Проверяем игнорируемые разделы
    for (const ignore of CONFIG.ignoreSections) {
        if (sectionUrl.toLowerCase().includes(ignore)) {
            log(`⏭️  Пропускаю (игнорируемый раздел): ${sectionUrl}`);
            return;
        }
    }
    
    log(`\n📂 РАЗДЕЛ: ${sectionUrl}`);
    
    try {
        await safeGet(driver, sectionUrl);
        await delay(CONFIG.delayBetweenSections);
        
        STATS.sectionsProcessed++;
        
        // Получаем название раздела
        let sectionName = 'Unknown Section';
        try {
            const nameEl = await driver.findElement(By.css('h1.p-title-value, .p-title'));
            sectionName = await nameEl.getText();
        } catch (e) {
            const match = sectionUrl.match(/\/forums\/([^/]+)/);
            if (match) sectionName = match[1].replace(/-/g, ' ');
        }
        
        log(`  Название: ${sectionName}`);
        
        // Находим все темы в разделе
        const threads = await findThreadLinks(driver);
        log(`  Найдено тем: ${threads.length}`);
        
        // Парсим темы (с лимитом)
        const threadsToProcess = threads.slice(0, CONFIG.maxThreadsPerSection);
        
        for (const thread of threadsToProcess) {
            await parseThread(driver, thread.url, database);
            await delay(CONFIG.delayBetweenThreads);
            
            // Печатаем прогресс
            if (STATS.chunksCreated % 100 === 0) {
                log(`\n📊 Прогресс: ${STATS.chunksCreated} чанков, ${getElapsedTime()}`);
            }
        }
        
    } catch (err) {
        log(`❌ Ошибка раздела: ${err.message}`);
        STATS.errors++;
    }
}

// ═══════════════════════════════════════════════════════════════
// ГЛАВНАЯ ФУНКЦИЯ
// ═══════════════════════════════════════════════════════════════

async function scrapeEntireForum() {
    log('🚀 Запуск полного парсера форума...\n');
    log(`📍 Форум: ${CONFIG.forumUrl}`);
    log(`⚙️  Лимиты:`);
    log(`   - Разделов: ${CONFIG.maxSections}`);
    log(`   - Тем на раздел: ${CONFIG.maxThreadsPerSection}`);
    log(`   - Страниц на тему: ${CONFIG.maxPagesPerThread}`);
    log('');
    
    const database = {
        chunks: [],
        metadata: {
            created: new Date().toISOString(),
            forumUrl: CONFIG.forumUrl,
            keywords: CONFIG.keywords
        }
    };
    
    const driver = await createDriver();
    
    try {
        // Загружаем главную страницу
        log('📥 Загружаю главную страницу...');
        await safeGet(driver, CONFIG.startUrl);
        await delay(2000);
        
        // Находим все разделы
        log('🔍 Ищу разделы форума...');
        const sections = await findSectionLinks(driver);
        log(`✅ Найдено разделов: ${sections.length}\n`);
        
        // Фильтруем уникальные
        const uniqueSections = [];
        const seenUrls = new Set();
        
        for (const section of sections) {
            if (!seenUrls.has(section.url)) {
                seenUrls.add(section.url);
                uniqueSections.push(section);
            }
        }
        
        // Сортируем: приоритетные первыми
        uniqueSections.sort((a, b) => {
            const aPriority = CONFIG.prioritySections.some(p => a.url.includes(p));
            const bPriority = CONFIG.prioritySections.some(p => b.url.includes(p));
            
            if (aPriority && !bPriority) return -1;
            if (!aPriority && bPriority) return 1;
            return 0;
        });
        
        // Парсим разделы (с лимитом)
        const sectionsToProcess = uniqueSections.slice(0, CONFIG.maxSections);
        
        log(`🎯 Буду парсить ${sectionsToProcess.length} разделов\n`);
        
        for (let i = 0; i < sectionsToProcess.length; i++) {
            const section = sectionsToProcess[i];
            
            log(`\n[${ i + 1}/${sectionsToProcess.length}] ────────────────────────`);
            
            await parseSection(driver, section.url, database);
        }
        
    } finally {
        await driver.quit();
    }
    
    // Финальная статистика
    database.metadata.stats = {
        sectionsProcessed: STATS.sectionsProcessed,
        threadsProcessed: STATS.threadsProcessed,
        pagesProcessed: STATS.pagesProcessed,
        chunksCreated: STATS.chunksCreated,
        errors: STATS.errors,
        totalTime: getElapsedTime()
    };
    
    database.metadata.totalChunks = database.chunks.length;
    
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
    const fullPath = path.join(outputDir, 'ultimate-forum-database.json');
    fs.writeFileSync(fullPath, JSON.stringify(database, null, 2));
    const fullSize = (fs.statSync(fullPath).size / 1024 / 1024).toFixed(2);
    log(`✅ ${fullPath} (${fullSize} MB)`);
    
    // Компактная для браузера
    const browserDb = {
        chunks: database.chunks.map(c => ({
            text: c.text,
            embedding: c.embedding,
            metadata: c.metadata
        })),
        metadata: database.metadata
    };
    
    const browserPath = path.join(outputDir, 'forum-database-browser.json');
    fs.writeFileSync(browserPath, JSON.stringify(browserDb, null, 2));
    const browserSize = (fs.statSync(browserPath).size / 1024 / 1024).toFixed(2);
    log(`✅ ${browserPath} (${browserSize} MB)`);
    
    log('\n✅ Данные сохранены!');
}

// ═══════════════════════════════════════════════════════════════
// ЗАПУСК
// ═══════════════════════════════════════════════════════════════

async function main() {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║     ULTIMATE FORUM SCRAPER                                ║
║     Полный анализ всего форума GTA5RP                     ║
╚═══════════════════════════════════════════════════════════╝
`);
    
    try {
        const database = await scrapeEntireForum();
        
        log('\n\n🎉 ПАРСИНГ ЗАВЕРШЕН!');
        log('═══════════════════════════════════════');
        log(`📊 СТАТИСТИКА:`);
        log(`   Разделов обработано: ${STATS.sectionsProcessed}`);
        log(`   Тем обработано: ${STATS.threadsProcessed}`);
        log(`   Страниц обработано: ${STATS.pagesProcessed}`);
        log(`   Чанков создано: ${STATS.chunksCreated}`);
        log(`   Ошибок: ${STATS.errors}`);
        log(`   Время работы: ${getElapsedTime()}`);
        log('═══════════════════════════════════════\n');
        
        saveDatabase(database);
        
        log('\n✅ Готово! Используйте forum-database-browser.json в вашем сайте.');
        
    } catch (err) {
        log(`\n❌ Критическая ошибка: ${err.message}`);
        console.error(err);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { scrapeEntireForum };