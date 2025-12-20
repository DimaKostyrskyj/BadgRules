/**
 * Logger Sender - Отправляет логи на backend
 * ИСПРАВЛЕНО: Правильный URL и обработка ошибок
 */

class LoggerSender {
    constructor(apiUrl) {
        // Автоматически определяем URL
        this.apiUrl = apiUrl || this.getApiUrl();
        this.queue = [];
        this.sending = false;
        this.batchSize = 10;
        this.sendInterval = 5000;
        
        console.log(`📡 Logger Sender: URL = ${this.apiUrl}`);
        
        this.startSending();
        this.interceptLogger();
    }

    /**
     * Автоматическое определение URL API
     */
    getApiUrl() {
        const hostname = window.location.hostname;
        
        // Для localhost или badgrules.com используем прямой URL
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return 'http://localhost:5000/api/website-log';
        }
        
        // Для badgrules.com или www.badgrules.com
        if (hostname.includes('badgrules.com')) {
            return 'https://www.badgrules.com/api/website-log';
        }
        
        // По умолчанию - относительный путь
        return '/api/website-log';
    }

    /**
     * Перехватывает добавление логов в logger
     */
    interceptLogger() {
        if (!window.logger) {
            console.error('Logger not found!');
            return;
        }

        const originalAddLog = window.logger.addLog.bind(window.logger);
        const self = this;

        window.logger.addLog = function(type, args) {
            originalAddLog(type, args);
            
            const message = args.map(arg => {
                if (typeof arg === 'object') {
                    try {
                        return JSON.stringify(arg, null, 2);
                    } catch (e) {
                        return String(arg);
                    }
                }
                return String(arg);
            }).join(' ');

            self.queue.push({
                type,
                message,
                timestamp: new Date().toISOString()
            });
        };
    }

    /**
     * Запускает периодическую отправку логов
     */
    startSending() {
        setInterval(() => {
            if (this.queue.length > 0 && !this.sending) {
                this.sendBatch();
            }
        }, this.sendInterval);
    }

    /**
     * Отправляет пакет логов на сервер
     */
    async sendBatch() {
        if (this.sending || this.queue.length === 0) return;

        this.sending = true;
        const batch = this.queue.splice(0, this.batchSize);

        try {
            for (const log of batch) {
                await fetch(this.apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(log)
                }).then(response => {
                    if (!response.ok) {
                        console.error(`Logger Send Error: ${response.status}`);
                    }
                }).catch(err => {
                    // Тихо игнорируем ошибки сети
                    console.error('Network error:', err.message);
                });
            }
        } catch (error) {
            console.error('Batch send error:', error);
        } finally {
            this.sending = false;
        }
    }

    /**
     * Принудительная отправка всех логов
     */
    async flush() {
        while (this.queue.length > 0) {
            await this.sendBatch();
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
}

// Создаем глобальный экземпляр
window.loggerSender = new LoggerSender();

// Отправляем оставшиеся логи при закрытии страницы
window.addEventListener('beforeunload', () => {
    if (window.loggerSender && window.loggerSender.queue.length > 0) {
        const logs = window.loggerSender.queue;
        logs.forEach(log => {
            navigator.sendBeacon(
                window.loggerSender.apiUrl,
                JSON.stringify(log)
            );
        });
    }
});

console.log('📡 Logger Sender initialized');
console.log(`🌐 API URL: ${window.loggerSender.apiUrl}`);
