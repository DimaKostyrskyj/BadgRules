#!/bin/bash

# ═══════════════════════════════════════════════════════════════
# QUICK SETUP - Быстрая установка RAG системы
# ═══════════════════════════════════════════════════════════════
# 
# Использование:
# chmod +x setup.sh
# ./setup.sh
#

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║         RAG СИСТЕМА - БЫСТРАЯ УСТАНОВКА                   ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Проверка Node.js
echo "🔍 Проверяю Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен!"
    echo "📥 Установите с https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo "✅ Node.js установлен: $NODE_VERSION"
echo ""

# Создание директории для данных
echo "📁 Создаю директорию forum-data..."
mkdir -p forum-data
echo "✅ Создана: forum-data/"
echo ""

# Копирование sample данных для теста
echo "📋 Копирую тестовые данные..."
if [ -f "sample-forum-data.json" ]; then
    cp sample-forum-data.json forum-data/forum-database-browser.json
    echo "✅ Тестовые данные скопированы"
    echo "   (для продакшена запустите: node forum-parser.js)"
else
    echo "⚠️  sample-forum-data.json не найден"
fi
echo ""

# Проверка файлов
echo "🔍 Проверяю необходимые файлы..."
FILES=("index.html" "rag-loader.js" "forum-parser.js" "package.json")
MISSING=()

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file - НЕ НАЙДЕН"
        MISSING+=("$file")
    fi
done

if [ ${#MISSING[@]} -ne 0 ]; then
    echo ""
    echo "⚠️  Отсутствуют файлы: ${MISSING[*]}"
    echo "📥 Скачайте все необходимые файлы"
    exit 1
fi
echo ""

# Опциональная установка зависимостей
read -p "❓ Установить npm зависимости? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📦 Устанавливаю зависимости..."
    npm install
    echo "✅ Зависимости установлены"
fi
echo ""

# Опциональный запуск парсера
read -p "❓ Запустить парсер форума сейчас? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Запускаю парсер..."
    echo "⏳ Это займет 15-30 секунд..."
    echo ""
    node forum-parser.js
    echo ""
    echo "✅ Парсинг завершен!"
else
    echo "⏭️  Пропущено. Используются тестовые данные."
    echo "   Для парсинга запустите: node forum-parser.js"
fi
echo ""

# Финальная проверка
echo "🔍 Финальная проверка..."
if [ -d "forum-data" ] && [ -f "forum-data/forum-database-browser.json" ]; then
    SIZE=$(du -h forum-data/forum-database-browser.json | cut -f1)
    echo "✅ База данных готова: $SIZE"
else
    echo "⚠️  База данных не найдена"
fi
echo ""

# Инструкции
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                    ✅ УСТАНОВКА ЗАВЕРШЕНА                 ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""
echo "📝 Следующие шаги:"
echo ""
echo "1. Убедитесь что в index.html добавлено:"
echo "   <script src=\"rag-loader.js\"></script>"
echo ""
echo "2. Откройте index.html в браузере"
echo ""
echo "3. Откройте консоль (F12) и проверьте:"
echo "   ✅ RAG Loader: Модуль загружен"
echo "   ✅ RAG система готова!"
echo ""
echo "4. Задайте вопрос и проверьте:"
echo "   🧠 Использую RAG систему..."
echo "   🔍 RAG: Найдено 5 релевантных чанков"
echo ""
echo "📚 Документация:"
echo "   - README.md - Краткое описание"
echo "   - PARSER_GUIDE.md - Полная инструкция"
echo "   - RAG_COMPLETE.md - Техническая документация"
echo ""
echo "🔄 Обновление данных:"
echo "   node forum-parser.js"
echo ""
echo "🎉 Готово! Удачи!"
