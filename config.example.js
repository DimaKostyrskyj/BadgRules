// ═══════════════════════════════════════════════════════════════
// 🔑 API CONFIGURATION (EXAMPLE)
// ═══════════════════════════════════════════════════════════════
// 
// ⚠️ ЭТО ПРИМЕР! Скопируй этот файл в config.js и вставь свои ключи!
//
// ИНСТРУКЦИЯ:
// 1. Скопируй этот файл: config.example.js → config.js
// 2. Открой config.js
// 3. Вставь свои API ключи
// 4. Сохрани
//
// config.js автоматически будет проигнорирован Git (.gitignore)
//
// ═══════════════════════════════════════════════════════════════

const API_CONFIG = {
    // Claude API (работает только на claude.ai)
    claude: {
        enabled: true,
        apiKey: '',  // Не нужен для claude.ai
        endpoint: 'https://api.anthropic.com/v1/messages',
        model: 'claude-sonnet-4-20250514',
        useBuiltIn: true
    },
    
    // Gemini API (работает везде - РЕКОМЕНДУЕТСЯ)
    // 🔗 Получи ключ: https://aistudio.google.com/apikey
    gemini: {
        enabled: true,
        apiKey: 'YOUR_GEMINI_API_KEY_HERE',  // ← ВСТАВЬ СВОЙ КЛЮЧ В config.js
        endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
        model: 'gemini-2.0-flash-exp'
    },
    
    // Grok API (платный)
    // 🔗 Получи ключ: https://console.x.ai
    grok: {
        enabled: false,
        apiKey: 'YOUR_GROK_API_KEY_HERE',  // ← ВСТАВЬ СВОЙ КЛЮЧ В config.js
        endpoint: 'https://api.x.ai/v1/chat/completions',
        model: 'grok-beta'
    }
};

// ═══════════════════════════════════════════════════════════════
// 📋 КАК ПОЛУЧИТЬ API КЛЮЧИ:
// ═══════════════════════════════════════════════════════════════
//
// ✅ GEMINI (БЕСПЛАТНО - рекомендуется):
// 1. Открой: https://aistudio.google.com/apikey
// 2. Войди через Google
// 3. Нажми "Create API key"
// 4. Скопируй ключ (начинается с AIzaSy...)
// 5. Вставь в config.js (НЕ в этот файл!)
//
// Лимиты (бесплатно):
// • 1500 запросов в день
// • 15 запросов в минуту
// • 1 миллион токенов в день
//
// ═══════════════════════════════════════════════════════════════
//
// 💰 GROK (платно):
// 1. Открой: https://console.x.ai
// 2. Создай аккаунт
// 3. Получи API ключ
// 4. Вставь в config.js (НЕ в этот файл!)
//
// Стоимость: ~$5 за 1M токенов
//
// ═══════════════════════════════════════════════════════════════
