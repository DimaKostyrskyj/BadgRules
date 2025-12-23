/**
 * ═══════════════════════════════════════════════════════════════
 * RAG DATA LOADER - Загрузчик данных для RAG системы в браузере
 * ═══════════════════════════════════════════════════════════════
 * 
 * Этот файл должен быть подключен к вашему index.html
 * 
 * <script src="rag-loader.js"></script>
 * 
 * Автоматически загружает данные форума и инициализирует RAG
 */

(function() {
    'use strict';
    
    // ═══════════════════════════════════════════════════════════
    // КОНФИГУРАЦИЯ
    // ═══════════════════════════════════════════════════════════
    
    const RAG_CONFIG = {
        // URL к JSON файлу с данными
        dataUrl: 'forum-data/forum-database-browser.json',
        
        // Локальное хранилище
        localStorageKey: 'rag_forum_data',
        localStorageMetaKey: 'rag_forum_meta',
        
        // Кэширование (7 дней)
        cacheExpiry: 7 * 24 * 60 * 60 * 1000,
        
        // Автозагрузка
        autoLoad: true,
        autoLoadDelay: 3000  // 3 секунды после загрузки страницы
    };
    
    // ═══════════════════════════════════════════════════════════
    // ГЛОБАЛЬНЫЙ ОБЪЕКТ RAG
    // ═══════════════════════════════════════════════════════════
    
    window.RAG_LOADER = {
        loaded: false,
        loading: false,
        data: null,
        error: null
    };
    
    // ═══════════════════════════════════════════════════════════
    // ЗАГРУЗКА ДАННЫХ
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Загрузка данных из файла
     */
    async function loadFromFile() {
        console.log('📥 RAG Loader: Загружаю данные из файла...');
        
        try {
            const response = await fetch(RAG_CONFIG.dataUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            
            console.log(`✅ RAG Loader: Загружено ${data.chunks.length} чанков`);
            
            return data;
            
        } catch (err) {
            console.error('❌ RAG Loader: Ошибка загрузки файла:', err);
            throw err;
        }
    }
    
    /**
     * Загрузка из localStorage
     */
    function loadFromCache() {
        console.log('📦 RAG Loader: Проверяю кэш...');
        
        try {
            const cachedData = localStorage.getItem(RAG_CONFIG.localStorageKey);
            const cachedMeta = localStorage.getItem(RAG_CONFIG.localStorageMetaKey);
            
            if (!cachedData || !cachedMeta) {
                console.log('⚠️ RAG Loader: Кэш не найден');
                return null;
            }
            
            const meta = JSON.parse(cachedMeta);
            
            // Проверяем срок годности
            const age = Date.now() - meta.timestamp;
            if (age > RAG_CONFIG.cacheExpiry) {
                console.log('⚠️ RAG Loader: Кэш устарел');
                localStorage.removeItem(RAG_CONFIG.localStorageKey);
                localStorage.removeItem(RAG_CONFIG.localStorageMetaKey);
                return null;
            }
            
            const data = JSON.parse(cachedData);
            
            console.log(`✅ RAG Loader: Загружено из кэша (${data.chunks.length} чанков)`);
            console.log(`📅 RAG Loader: Кэш создан: ${new Date(meta.timestamp).toLocaleString()}`);
            
            return data;
            
        } catch (err) {
            console.error('❌ RAG Loader: Ошибка чтения кэша:', err);
            return null;
        }
    }
    
    /**
     * Сохранение в localStorage
     */
    function saveToCache(data) {
        console.log('💾 RAG Loader: Сохраняю в кэш...');
        
        try {
            const meta = {
                timestamp: Date.now(),
                chunks: data.chunks.length,
                version: data.metadata.created
            };
            
            localStorage.setItem(RAG_CONFIG.localStorageKey, JSON.stringify(data));
            localStorage.setItem(RAG_CONFIG.localStorageMetaKey, JSON.stringify(meta));
            
            console.log('✅ RAG Loader: Сохранено в кэш');
            
        } catch (err) {
            console.warn('⚠️ RAG Loader: Не удалось сохранить в кэш:', err);
        }
    }
    
    /**
     * Инициализация RAG системы с загруженными данными
     */
    function initializeRAGSystem(data) {
        console.log('🧠 RAG Loader: Инициализирую RAG систему...');
        
        if (!window.RAG_SYSTEM) {
            console.warn('⚠️ RAG Loader: RAG_SYSTEM не найдена');
            return false;
        }
        
        // Загружаем чанки
        window.RAG_SYSTEM.chunks = data.chunks;
        window.RAG_SYSTEM.indexed = true;
        window.RAG_SYSTEM.lastUpdate = data.metadata.created;
        window.RAG_SYSTEM.enabled = true;
        
        console.log(`✅ RAG Loader: RAG система инициализирована`);
        console.log(`📊 RAG Loader: ${data.chunks.length} чанков готовы к поиску`);
        
        return true;
    }
    
    /**
     * Главная функция загрузки
     */
    async function load() {
        if (window.RAG_LOADER.loading) {
            console.warn('⚠️ RAG Loader: Уже загружаю...');
            return;
        }
        
        if (window.RAG_LOADER.loaded) {
            console.log('✅ RAG Loader: Уже загружено');
            return;
        }
        
        window.RAG_LOADER.loading = true;
        window.RAG_LOADER.error = null;
        
        console.log('🚀 RAG Loader: Начинаю загрузку...');
        
        try {
            // 1. Пробуем загрузить из кэша
            let data = loadFromCache();
            
            // 2. Если нет кэша - загружаем из файла
            if (!data) {
                data = await loadFromFile();
                saveToCache(data);
            }
            
            // 3. Инициализируем RAG систему
            const success = initializeRAGSystem(data);
            
            if (success) {
                window.RAG_LOADER.loaded = true;
                window.RAG_LOADER.data = data;
                console.log('🎉 RAG Loader: Загрузка завершена успешно!');
                
                // Вызываем callback если есть
                if (window.onRAGLoaded) {
                    window.onRAGLoaded(data);
                }
            } else {
                throw new Error('Не удалось инициализировать RAG систему');
            }
            
        } catch (err) {
            console.error('❌ RAG Loader: Ошибка загрузки:', err);
            window.RAG_LOADER.error = err;
            
            // Вызываем callback ошибки если есть
            if (window.onRAGError) {
                window.onRAGError(err);
            }
        } finally {
            window.RAG_LOADER.loading = false;
        }
    }
    
    /**
     * Принудительная перезагрузка (очистка кэша + загрузка)
     */
    async function reload() {
        console.log('🔄 RAG Loader: Перезагрузка...');
        
        // Очищаем кэш
        localStorage.removeItem(RAG_CONFIG.localStorageKey);
        localStorage.removeItem(RAG_CONFIG.localStorageMetaKey);
        
        // Сбрасываем флаги
        window.RAG_LOADER.loaded = false;
        window.RAG_LOADER.loading = false;
        window.RAG_LOADER.data = null;
        window.RAG_LOADER.error = null;
        
        // Загружаем заново
        await load();
    }
    
    /**
     * Получение статистики
     */
    function getStats() {
        if (!window.RAG_LOADER.loaded) {
            return null;
        }
        
        const data = window.RAG_LOADER.data;
        
        return {
            loaded: true,
            chunks: data.chunks.length,
            created: data.metadata.created,
            pages: data.metadata.totalPages,
            keywords: data.metadata.keywords.length
        };
    }
    
    // ═══════════════════════════════════════════════════════════
    // PUBLIC API
    // ═══════════════════════════════════════════════════════════
    
    window.RAG_LOADER.load = load;
    window.RAG_LOADER.reload = reload;
    window.RAG_LOADER.getStats = getStats;
    
    // ═══════════════════════════════════════════════════════════
    // АВТОЗАГРУЗКА
    // ═══════════════════════════════════════════════════════════
    
    if (RAG_CONFIG.autoLoad) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                console.log('🤖 RAG Loader: Автозагрузка через', RAG_CONFIG.autoLoadDelay / 1000, 'секунд...');
                load();
            }, RAG_CONFIG.autoLoadDelay);
        });
    }
    
    console.log('✅ RAG Loader: Модуль загружен');
    
})();
