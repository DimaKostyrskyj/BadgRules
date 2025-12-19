/**
 * Advanced Logger System
 * Скрывает все логи из консоли (F12) и собирает их в памяти
 * Доступ только через Discord команду /load_logs
 */

class AdvancedLogger {
    constructor() {
        this.logs = [];
        this.errors = [];
        this.warnings = [];
        this.infos = [];
        this.maxLogs = 1000; // Максимум логов в памяти
        this.startTime = new Date();
        
        // Сохраняем оригинальные методы консоли
        this.originalConsole = {
            log: console.log.bind(console),
            error: console.error.bind(console),
            warn: console.warn.bind(console),
            info: console.info.bind(console),
            debug: console.debug.bind(console)
        };
        
        // Перехватываем все методы консоли
        this.interceptConsole();
        
        // Перехватываем необработанные ошибки
        this.setupErrorHandlers();
    }

    /**
     * Перехватывает все методы console и скрывает вывод
     */
    interceptConsole() {
        const self = this;
        
        // console.log
        console.log = function(...args) {
            self.addLog('log', args);
            // НЕ выводим в консоль!
        };
        
        // console.error
        console.error = function(...args) {
            self.addLog('error', args);
            // НЕ выводим в консоль!
        };
        
        // console.warn
        console.warn = function(...args) {
            self.addLog('warn', args);
            // НЕ выводим в консоль!
        };
        
        // console.info
        console.info = function(...args) {
            self.addLog('info', args);
            // НЕ выводим в консоль!
        };
        
        // console.debug
        console.debug = function(...args) {
            self.addLog('debug', args);
            // НЕ выводим в консоль!
        };
    }

    /**
     * Добавляет лог в память
     */
    addLog(type, args) {
        const timestamp = new Date();
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

        const logEntry = {
            type,
            message,
            timestamp: timestamp.toISOString(),
            timeFromStart: this.getTimeSinceStart()
        };

        // Добавляем в общий массив
        this.logs.push(logEntry);
        
        // Добавляем в категорию
        switch(type) {
            case 'error':
                this.errors.push(logEntry);
                break;
            case 'warn':
                this.warnings.push(logEntry);
                break;
            case 'info':
                this.infos.push(logEntry);
                break;
        }

        // Ограничиваем размер массивов
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }
        if (this.errors.length > this.maxLogs / 2) {
            this.errors.shift();
        }
        if (this.warnings.length > this.maxLogs / 2) {
            this.warnings.shift();
        }
    }

    /**
     * Обработчики необработанных ошибок
     */
    setupErrorHandlers() {
        const self = this;
        
        // Глобальные ошибки
        window.addEventListener('error', (event) => {
            self.addLog('error', [
                `🔴 Uncaught Error:`,
                `Message: ${event.message}`,
                `File: ${event.filename}`,
                `Line: ${event.lineno}:${event.colno}`,
                `Stack: ${event.error?.stack || 'N/A'}`
            ]);
            event.preventDefault(); // Предотвращаем вывод в консоль
        });

        // Promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            self.addLog('error', [
                `🔴 Unhandled Promise Rejection:`,
                `Reason: ${event.reason}`,
                `Stack: ${event.reason?.stack || 'N/A'}`
            ]);
            event.preventDefault();
        });
    }

    /**
     * Получить время с момента старта
     */
    getTimeSinceStart() {
        const diff = new Date() - this.startTime;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        
        return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    }

    /**
     * Получить статистику логов
     */
    getStats() {
        return {
            total: this.logs.length,
            errors: this.errors.length,
            warnings: this.warnings.length,
            infos: this.infos.length,
            uptime: this.getTimeSinceStart(),
            startTime: this.startTime.toISOString()
        };
    }

    /**
     * Получить все логи (для Discord бота)
     */
    getAllLogs(limit = 50) {
        return this.logs.slice(-limit).reverse();
    }

    /**
     * Получить только ошибки
     */
    getErrors(limit = 20) {
        return this.errors.slice(-limit).reverse();
    }

    /**
     * Получить только предупреждения
     */
    getWarnings(limit = 20) {
        return this.warnings.slice(-limit).reverse();
    }

    /**
     * Очистить все логи
     */
    clearLogs() {
        this.logs = [];
        this.errors = [];
        this.warnings = [];
        this.infos = [];
    }

    /**
     * Экспорт логов в текстовый формат
     */
    exportLogs(type = 'all') {
        let logsToExport;
        
        switch(type) {
            case 'errors':
                logsToExport = this.errors;
                break;
            case 'warnings':
                logsToExport = this.warnings;
                break;
            case 'info':
                logsToExport = this.infos;
                break;
            default:
                logsToExport = this.logs;
        }

        const stats = this.getStats();
        let output = '';
        output += '╔════════════════════════════════════════════════════════════════╗\n';
        output += '║              BADGRULES - ЛОГИ СИСТЕМЫ                          ║\n';
        output += '╚════════════════════════════════════════════════════════════════╝\n\n';
        output += `📊 Статистика:\n`;
        output += `   Всего логов: ${stats.total}\n`;
        output += `   Ошибок: ${stats.errors}\n`;
        output += `   Предупреждений: ${stats.warnings}\n`;
        output += `   Информации: ${stats.infos}\n`;
        output += `   Время работы: ${stats.uptime}\n`;
        output += `   Запущено: ${new Date(stats.startTime).toLocaleString('ru-RU')}\n\n`;
        output += '─'.repeat(70) + '\n\n';

        logsToExport.forEach((log, index) => {
            const icon = {
                'error': '🔴',
                'warn': '🟡',
                'info': '🔵',
                'log': '⚪',
                'debug': '🟣'
            }[log.type] || '⚪';

            output += `${icon} [${log.type.toUpperCase()}] ${log.timeFromStart}\n`;
            output += `   ${new Date(log.timestamp).toLocaleString('ru-RU')}\n`;
            output += `   ${log.message}\n\n`;
        });

        return output;
    }

    /**
     * Для отладки - восстановить оригинальную консоль
     */
    restoreConsole() {
        console.log = this.originalConsole.log;
        console.error = this.originalConsole.error;
        console.warn = this.originalConsole.warn;
        console.info = this.originalConsole.info;
        console.debug = this.originalConsole.debug;
    }

    /**
     * Принудительный вывод в оригинальную консоль (для отладки)
     */
    forceLog(...args) {
        this.originalConsole.log(...args);
    }
}

// Создаем глобальный экземпляр логгера
window.logger = new AdvancedLogger();

// Экспортируем для использования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedLogger;
}

// Приветственное сообщение (скрыто от пользователя, но залогировано)
console.log('🦡 BadgRules Logger System initialized');
console.log('📝 All logs are being collected');
console.log('🔒 Console output is hidden from F12');
console.log('💡 Use Discord command /load_logs to view logs');
