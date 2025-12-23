/**
 * ═══════════════════════════════════════════════════════════════
 * RAG DATA LOADER V2 - Исправленная версия
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
    'use strict';
    
    const RAG_CONFIG = {
        dataUrl: './forum-data/forum-database-browser.json',
        localStorageKey: 'rag_forum_data',
        localStorageMetaKey: 'rag_forum_meta',
        cacheExpiry: 7 * 24 * 60 * 60 * 1000,
        autoLoad: true,
        autoLoadDelay: 5000
    };
    
    window.RAG_LOADER = {
        loaded: false,
        loading: false,
        data: null,
        error: null
    };
    
    async function loadFromFile() {
        console.log('📥 RAG Loader: Загружаю:', RAG_CONFIG.dataUrl);
        
        try {
            const response = await fetch(RAG_CONFIG.dataUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const data = await response.json();
            console.log(`✅ Загружено ${data.chunks.length} чанков`);
            
            return data;
            
        } catch (err) {
            console.error('❌ Ошибка загрузки:', err.message);
            throw err;
        }
    }
    
    function loadFromCache() {
        console.log('📦 Проверяю кэш...');
        
        try {
            const cachedData = localStorage.getItem(RAG_CONFIG.localStorageKey);
            const cachedMeta = localStorage.getItem(RAG_CONFIG.localStorageMetaKey);
            
            if (!cachedData || !cachedMeta) {
                return null;
            }
            
            const meta = JSON.parse(cachedMeta);
            const age = Date.now() - meta.timestamp;
            
            if (age > RAG_CONFIG.cacheExpiry) {
                localStorage.removeItem(RAG_CONFIG.localStorageKey);
                localStorage.removeItem(RAG_CONFIG.localStorageMetaKey);
                return null;
            }
            
            const data = JSON.parse(cachedData);
            console.log(`✅ Из кэша: ${data.chunks.length} чанков`);
            
            return data;
            
        } catch (err) {
            console.warn('⚠️ Ошибка кэша:', err);
            return null;
        }
    }
    
    function saveToCache(data) {
        try {
            const meta = {
                timestamp: Date.now(),
                chunks: data.chunks.length
            };
            
            localStorage.setItem(RAG_CONFIG.localStorageKey, JSON.stringify(data));
            localStorage.setItem(RAG_CONFIG.localStorageMetaKey, JSON.stringify(meta));
            
            console.log('✅ Сохранено в кэш');
        } catch (err) {
            console.warn('⚠️ Не удалось сохранить:', err);
        }
    }
    
    function initializeRAGSystem(data) {
        if (!window.RAG_SYSTEM) {
            window.RAG_SYSTEM = {
                enabled: false,
                chunks: [],
                indexed: false
            };
        }
        
        window.RAG_SYSTEM.chunks = data.chunks;
        window.RAG_SYSTEM.indexed = true;
        window.RAG_SYSTEM.enabled = true;
        
        console.log(`✅ RAG готова: ${data.chunks.length} чанков`);
        return true;
    }
    
    async function load() {
        if (window.RAG_LOADER.loading || window.RAG_LOADER.loaded) {
            return;
        }
        
        window.RAG_LOADER.loading = true;
        console.log('🚀 RAG Loader: Загрузка...');
        
        try {
            let data = loadFromCache();
            
            if (!data) {
                data = await loadFromFile();
                saveToCache(data);
            }
            
            if (initializeRAGSystem(data)) {
                window.RAG_LOADER.loaded = true;
                window.RAG_LOADER.data = data;
                console.log('🎉 RAG загружена!');
                
                if (window.onRAGLoaded) {
                    window.onRAGLoaded(data);
                }
            }
            
        } catch (err) {
            console.error('❌ RAG ошибка:', err);
            console.log('ℹ️ Используется обычный поиск');
            
            window.RAG_LOADER.error = err;
            
            if (window.RAG_SYSTEM) {
                window.RAG_SYSTEM.enabled = false;
            }
            
            if (window.onRAGError) {
                window.onRAGError(err);
            }
            
        } finally {
            window.RAG_LOADER.loading = false;
        }
    }
    
    window.RAG_LOADER.load = load;
    
    window.RAG_LOADER.reload = async function() {
        localStorage.removeItem(RAG_CONFIG.localStorageKey);
        localStorage.removeItem(RAG_CONFIG.localStorageMetaKey);
        window.RAG_LOADER.loaded = false;
        await load();
    };
    
    window.RAG_LOADER.getStats = function() {
        return window.RAG_LOADER.loaded ? {
            loaded: true,
            chunks: window.RAG_LOADER.data.chunks.length
        } : null;
    };
    
    if (RAG_CONFIG.autoLoad) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(load, RAG_CONFIG.autoLoadDelay);
            });
        } else {
            setTimeout(load, RAG_CONFIG.autoLoadDelay);
        }
    }
    
    console.log('✅ RAG Loader V2 готов');
    
})();