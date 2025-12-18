// BadgRules Service Worker
// Версия: 1.0.0
// Обеспечивает универсальный доступ и offline работу

const CACHE_NAME = 'badgrules-v1';
const CACHE_ASSETS = [
    '/',
    '/index.html',
    '/images/logo.png',
    '/images/favicon-32x32.png',
    '/images/favicon-16x16.png'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
    console.log('🔧 Service Worker: Установка...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('📦 Service Worker: Кэширование файлов...');
                return cache.addAll(CACHE_ASSETS);
            })
            .catch((err) => {
                console.log('ℹ️ Service Worker: Кэширование пропущено');
            })
    );
    
    self.skipWaiting();
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
    console.log('✅ Service Worker: Активирован');
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('🗑️ Service Worker: Удаление старого кэша');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    
    return self.clients.claim();
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
    // Пропускаем API запросы - они должны идти напрямую
    if (event.request.url.includes('/api/') || 
        event.request.url.includes('groq.com') ||
        event.request.url.includes('googleapis.com') ||
        event.request.url.includes('discord.com')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Возвращаем из кэша если есть
                if (response) {
                    return response;
                }
                
                // Иначе загружаем из сети
                return fetch(event.request)
                    .then((response) => {
                        // Проверяем что это валидный ответ
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Клонируем ответ
                        const responseToCache = response.clone();
                        
                        // Добавляем в кэш
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(() => {
                        // Если сеть недоступна - возвращаем базовую страницу
                        return caches.match('/index.html');
                    });
            })
    );
});

// Обработка сообщений
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

console.log('🌍 Service Worker загружен - универсальный доступ активен');
