/**
 * Logger Sender - Отправляет логи на backend
 * Работает вместе с logger.js
 */

class LoggerSender {
    constructor(apiUrl = 'http://localhost:5000/api/website-log') {
        this.apiUrl = apiUrl;
        this.queue = [];
        this.sending = false;
        this.batchSize = 10; // Отправлять по 10 логов за раз
        this.sendInterval = 5000; // Отправлять каждые 5 секунд
        
        // Запускаем периодическую отправку
        this.startSending();
        
        // Перехватываем методы логгера
        this.interceptLogger();
    }

    /**
     * Перехватывает добавление логов в logger
     */
    interceptLogger() {
        if (!window.logger) {
            console.error('Logger not found! Make sure logger.js is loaded first.');
            return;
        }

        const originalAddLog = window.logger.addLog.bind(window.logger);
        const self = this;

        window.logger.addLog = function(type, args) {
            // Вызываем оригинальный метод
            originalAddLog(type, args);
            
            // Добавляем в очередь отправки
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
            // Отправляем каждый лог отдельно (можно оптимизировать)
            for (const log of batch) {
                await fetch(this.apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(log)
                }).catch(err => {
                    // Если не удалось отправить - игнорируем
                    // (чтобы не создавать бесконечный цикл ошибок)
                });
            }
        } catch (error) {
            // Тихо игнорируем ошибки отправки
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
            // Небольшая задержка между пакетами
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
}

// Создаем глобальный экземпляр
// ВАЖНО: Измените URL если сервер работает на другом порту или домене
window.loggerSender = new LoggerSender(
    window.location.hostname === 'localhost' 
        ? 'http://localhost:5000/api/website-log'
        : '/api/website-log' // Для продакшена
);

// Отправляем оставшиеся логи при закрытии страницы
window.addEventListener('beforeunload', () => {
    if (window.loggerSender && window.loggerSender.queue.length > 0) {
        // Используем sendBeacon для гарантированной отправки
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
console.log(`🌐 Sending logs to: ${window.loggerSender.apiUrl}`);
