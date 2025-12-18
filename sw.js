<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">

    <!-- Cache Control для Opera GX и других браузеров -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate, max-age=0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta name="version" content="1.2.0">
    <meta name="last-modified" content="2025-12-18T20:56:03.473Z">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Universal Access & SEO -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    
    <!-- No Geo-blocking -->
    <meta name="geo.region" content="WORLD">
    <meta name="geo.placename" content="Global">
    
    <!-- Cache Control for better availability -->
    
    
    <!-- Content Security Policy - Simplified for blocked regions -->
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    
    <title>BadgRules - Нейросеть по правилам GTA 5 RP</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
        rel="stylesheet">
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="images/logo.ico">
    <link rel="shortcut icon" type="image/x-icon" href="images/logo.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="images/logo.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="images/logo.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="images/logo.ico">
    <style>
        /* ═══════════════════════════════════════════════════════════════
           🛡️ LOADING PROTECTION - Защита от черного экрана
           ═══════════════════════════════════════════════════════════════ */
        
        /* Минимальный экран загрузки пока не загрузятся стили */
        body {
            background: #000 !important;
            margin: 0;
            padding: 0;
        }
        
        /* Экран загрузки по умолчанию */
        #initialLoader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at 50% 50%, 
                rgba(10, 20, 35, 1) 0%,
                rgba(5, 10, 20, 1) 50%,
                rgba(0, 0, 0, 1) 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 999999;
            color: white;
        }
        
        #initialLoader .loader-content {
            text-align: center;
        }
        
        #initialLoader .loader-spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(96, 165, 250, 0.2);
            border-top-color: #60a5fa;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        #initialLoader .loader-text {
            font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 18px;
            font-weight: 600;
            color: #60a5fa;
            margin-bottom: 10px;
        }
        
        #initialLoader .loader-subtext {
            font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 14px;
            color: #a0a0a0;
        }
        
        #initialLoader .loader-error {
            display: none;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 12px;
            padding: 20px;
            margin-top: 20px;
            max-width: 500px;
        }
        
        #initialLoader .loader-error.active {
            display: block;
        }
        
        #initialLoader .error-title {
            color: #ef4444;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        #initialLoader .error-message {
            color: #fca5a5;
            font-size: 14px;
            line-height: 1.6;
        }
        
        #initialLoader .retry-button {
            background: #60a5fa;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 15px;
            transition: all 0.3s ease;
        }
        
        #initialLoader .retry-button:hover {
            background: #3b82f6;
            transform: translateY(-2px);
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* Background Colors */
            --primary-bg: #000000;
            --secondary-bg: #0a0a0a;
            --card-bg: #141414;
            
            /* Accent Colors - Futuristic Palette */
            --accent-primary: #60a5fa;      /* Purple */
            --accent-secondary: #3b82f6;    /* Pink */
            --accent-success: #10b981;      /* Green */
            --accent-warning: #fbbf24;      /* Gold */
            --accent-color: #f5f5f5;        /* Legacy support */
            
            /* Text Colors */
            --text-primary: #ffffff;
            --text-secondary: #a0a0a0;
            --text-muted: #666666;
            
            /* Border & Effects */
            --border-color: #2a2a2a;
            --border-glow: rgba(96, 165, 250, 0.3);
            --shadow: rgba(0, 0, 0, 0.5);
            --glow: rgba(96, 165, 250, 0.2);
            
            /* GTA Colors */
            --gta5rp-color: #e74c3c;
            --majestic-color: #9b59b6;
        }

        body {
            font-family: 'Manrope', sans-serif;
            background: radial-gradient(ellipse at 50% 50%, 
                rgba(10, 20, 35, 1) 0%,
                rgba(5, 10, 20, 1) 50%,
                rgba(0, 0, 0, 1) 100%);
            color: var(--text-primary);
            overflow-x: hidden;
            min-height: 100vh;
            position: relative;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 50% 50%,
                rgba(20, 50, 100, 0.04) 0%,
                rgba(15, 40, 80, 0.02) 40%,
                transparent 70%
            );
            pointer-events: none;
            z-index: 0;
        }

        /* ═══════════════════════════════════════════════════════════════
           🌊 ГОЛУБОЕ ГЛОБАЛЬНОЕ СВЕЧЕНИЕ НА ВЕСЬ САЙТ
           ═══════════════════════════════════════════════════════════════ */

        .global-gradient-mesh {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
            display: block; /* ВКЛЮЧЕНО */
        }

        /* Дополнительный синий слой на весь экран - более темный */
        .global-gradient-mesh::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at 50% 50%,
                rgba(60, 110, 180, 0.04) 0%,
                rgba(50, 100, 170, 0.03) 20%,
                rgba(40, 90, 160, 0.02) 40%,
                rgba(30, 80, 150, 0.01) 60%,
                transparent 80%
            );
            animation: globalBlueRotate 30s linear infinite;
        }

        @keyframes globalBlueRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Основное голубо-серое свечение от персонажа */
        .global-blue-ambient {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at 70% 45%,
                rgba(60, 100, 160, 0.06) 0%,
                rgba(50, 90, 150, 0.04) 25%,
                rgba(40, 80, 140, 0.03) 45%,
                rgba(30, 70, 130, 0.02) 65%,
                rgba(20, 60, 120, 0.01) 80%,
                transparent 100%
            );
            opacity: 0.8;
            filter: blur(100px);
        }

        .global-mesh-gradient {
            display: none; /* СКРЫТО */
        }

        .global-gradient-1 {
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, var(--accent-primary), transparent);
            top: -300px;
            left: -300px;
        }

        .global-gradient-2 {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, var(--accent-secondary), transparent);
            top: 20%;
            right: -200px;
            animation-delay: -8s;
        }

        .global-gradient-3 {
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, var(--accent-primary), transparent);
            bottom: -250px;
            left: 40%;
            animation-delay: -16s;
        }

        .global-gradient-4 {
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, var(--accent-success), transparent);
            top: 50%;
            left: -150px;
            animation-delay: -12s;
        }

        @keyframes globalMeshFloat {
            0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
            25% { transform: translate(80px, -60px) rotate(90deg) scale(1.1); }
            50% { transform: translate(-40px, 80px) rotate(180deg) scale(0.9); }
            75% { transform: translate(60px, 40px) rotate(270deg) scale(1.05); }
        }

        /* ═══════════════════════════════════════════════════════════════
           НОВЫЙ ФОН - ПЕРСОНАЖ И СВЕТЯЩИЙСЯ КРУГ КАК НА ФОТО
           ═══════════════════════════════════════════════════════════════ */
        
        /* ВИДИМЫЙ СВЕТЯЩИЙСЯ КРУГ ЗА ПЕРСОНАЖЕМ - ТОЧНАЯ КОПИЯ */
        .hero-background-circle {
            position: fixed;
            top: 35%;
            right: 12%;
            transform: translate(0, -50%);
            width: 850px;
            height: 850px;
            z-index: 1;
            pointer-events: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Внутренний синий круг с приглушенным свечением */
        .hero-background-circle::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center,
                rgba(70, 120, 200, 0.08) 0%,
                rgba(70, 120, 200, 0.06) 30%,
                rgba(60, 110, 190, 0.04) 50%,
                rgba(50, 100, 180, 0.02) 70%,
                transparent 100%
            );
            border-radius: 50%;
            border: 3px solid rgba(70, 120, 200, 0.3);
            box-shadow: 
                inset 0 0 100px rgba(70, 120, 200, 0.12),
                inset 0 0 50px rgba(60, 110, 190, 0.08),
                0 0 60px rgba(70, 120, 200, 0.2),
                0 0 120px rgba(60, 110, 190, 0.15);
        }

        /* Внешнее синее свечение от круга - более темное */
        .hero-background-circle::after {
            content: '';
            position: absolute;
            width: 250%;
            height: 250%;
            background: radial-gradient(circle at center,
                rgba(70, 120, 200, 0.10) 0%,
                rgba(60, 110, 190, 0.08) 15%,
                rgba(50, 100, 180, 0.06) 25%,
                rgba(45, 95, 170, 0.04) 40%,
                rgba(40, 90, 160, 0.03) 55%,
                rgba(35, 80, 150, 0.02) 70%,
                rgba(30, 70, 140, 0.01) 85%,
                transparent 100%
            );
            border-radius: 50%;
            filter: blur(150px);
        }

        /* Canvas для молний - СКРЫТО */
        .lightning-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
            display: none; /* СКРЫТО */
        }

        .hero-character-badger {
            position: fixed;
            top: 60%;
            right: 10%;
            transform: translateY(-50%);
            width: 650px;
            height: 100vh;
            max-height: 900px;
            z-index: 2;
            pointer-events: none;
            display: flex;
            align-items: center;
            justify-content: center;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
        }

        /* ГОЛУБО-СЕРОЕ СВЕЧЕНИЕ ОТ ПЕРСОНАЖА И КРУГА */
        .hero-character-badger::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 1000px;
            height: 1000px;
            background: radial-gradient(circle at center,
                rgba(140, 170, 200, 0.15) 0%,
                rgba(130, 165, 200, 0.12) 10%,
                rgba(120, 160, 200, 0.09) 20%,
                rgba(110, 155, 200, 0.07) 30%,
                rgba(100, 150, 200, 0.05) 45%,
                rgba(90, 145, 200, 0.03) 60%,
                rgba(80, 140, 200, 0.015) 75%,
                transparent 100%
            );
            border-radius: 50%;
            z-index: -1;
            pointer-events: none;
            filter: blur(90px);
            animation: pulseGentleGlow 5s ease-in-out infinite;
        }

        @keyframes pulseGentleGlow {
            0%, 100% {
                opacity: 0.6;
                transform: translate(-50%, -50%) scale(1);
            }
            50% {
                opacity: 0.85;
                transform: translate(-50%, -50%) scale(1.03);
            }
        }

        .hero-character-badger img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
            /* УБРАНО БЕЛОЕ СВЕЧЕНИЕ - оставлена только тень снизу */
            filter: drop-shadow(0 120px 200px rgba(0, 0, 0, 0.95));
            image-rendering: -webkit-optimize-contrast;
            image-rendering: high-quality;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            transform: translateZ(0);
            position: relative;
            z-index: 2;
        }

        /* Одно крыло точно за спиной персонажа */
        .angel-wings {
            display: none; /* WINGS HIDDEN */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .wing {
            position: absolute;
            top: 50%;
            left: -20%;  /* Чуть левее (было 50%) */
            transform: translate(-50%, -50%);
        }

        .wing img {
            width: 2000px;  /* Больше (было 900px) */
            height: auto;
            object-fit: contain;
            filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
        }

        @media (max-width: 1600px) {
            .wing img {
                width: 1000px;  /* Было 800px */
            }
            .hero-background-circle {
                width: 750px;
                height: 750px;
                right: 10%;
            }
        }

        @media (max-width: 1400px) {
            .wing img {
                width: 900px;  /* Было 700px */
            }
            .hero-background-circle {
                width: 680px;
                height: 680px;
                right: 8%;
            }
        }

        @media (max-width: 1200px) {
            .wing img {
                width: 800px;  /* Было 600px */
            }
            .hero-background-circle {
                width: 600px;
                height: 600px;
                right: 6%;
            }
        }

        @media (max-width: 968px) {
            .wing img {
                width: 650px;  /* Было 500px */
            }
            .hero-background-circle {
                width: 520px;
                height: 520px;
                right: 4%;
            }
        }

        @media (max-width: 640px) {
            .wing img {
                width: 500px;  /* Было 400px */
            }
            .hero-background-circle {
                width: 450px;
                height: 450px;
                opacity: 0.65;
            }
        }

        @media (max-width: 1600px) {
            .hero-character-badger {
                width: 600px;
                max-height: 800px;
                right: 8%;
            }
            .hero-character-badger::before {
                width: 700px;
                height: 700px;
            }
        }

        @media (max-width: 1400px) {
            .hero-character-badger {
                width: 550px;
                max-height: 700px;
                right: 6%;
            }
            .hero-character-badger::before {
                width: 650px;
                height: 650px;
            }
        }

        @media (max-width: 1200px) {
            .hero-character-badger {
                width: 500px;
                max-height: 600px;
                right: 4%;
            }
            .hero-character-badger::before {
                width: 600px;
                height: 600px;
            }
        }

        @media (max-width: 968px) {
            .hero-character-badger {
                width: 400px;
                max-height: 500px;
                right: 0;
                opacity: 0.8;
            }
            .hero-character-badger::before {
                width: 500px;
                height: 500px;
                opacity: 0.6;
            }
        }

        @media (max-width: 640px) {
            .hero-character-badger {
                width: 320px;
                max-height: 400px;
                right: -30px;
                opacity: 0.7;
            }
            .hero-character-badger::before {
                width: 400px;
                height: 400px;
                opacity: 0.5;
            }
        }

        @media (max-width: 1600px) {
            .hero-background-circle {
                width: 650px;
                height: 650px;
            }
        }

        @media (max-width: 1400px) {
            .hero-background-circle {
                width: 600px;
                height: 600px;
            }
        }

        @media (max-width: 1200px) {
            .hero-background-circle {
                width: 500px;
                height: 500px;
            }
        }

        @media (max-width: 968px) {
            .hero-background-circle {
                width: 450px;
                height: 450px;
                top: 30%;
                right: -80px;
                opacity: 0.4;
            }
            .hero-character-badger {
                width: 60vw;
                right: 40%;
                opacity: 0.6;
            }
        }

        @media (max-width: 640px) {
            .hero-background-circle {
                width: 350px;
                height: 350px;
                top: 25%;
                right: -100px;
                opacity: 0.3;
            }
            .hero-character-badger {
                width: 70vw;
                right: 30%;
                opacity: 0.5;
            }
        }

        .global-particles-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
            display: none; /* СКРЫТО - УБРАНЫ ЧАСТИЦЫ */
        }

        .main-content {
            position: relative;
            z-index: 10;
        }

        /* Override all glassmorphism elements */
        .login-container,
        .project-card,
        .server-card,
        .message-content,
        .chat-input-box,
        .profile-dropdown,
        .modal-content,
        .settings-section {
            background: rgba(20, 20, 20, 0.7) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border: 1px solid var(--border-color) !important;
        }

        /* Hover effects for interactive elements */
        .project-card:hover,
        .server-card:hover,
        .message-content:hover,
        .dropdown-item:hover {
            background: rgba(20, 20, 20, 0.85) !important;
            border-color: var(--border-glow) !important;
            box-shadow: 0 8px 32px var(--glow) !important;
            transform: translateY(-2px);
        }

        /* Logo glow */
        .logo-img,
        .logo-btn-img {
            filter: drop-shadow(0 0 30px rgba(96, 165, 250, 0.6)) !important;
            animation: logoFloat 3s ease-in-out infinite;
        }

        @keyframes logoFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
        }

        /* Avatar gradients */
        .user-avatar,
        .message.bot .message-avatar {
            background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)) !important;
        }

        /* Button gradients */
        .discord-login-btn,
        .login-btn,
        .send-btn,
        .btn-primary {
            background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)) !important;
            border: none !important;
            transition: all 0.3s ease !important;
        }

        .discord-login-btn:hover,
        .login-btn:hover,
        .send-btn:hover:not(:disabled),
        .btn-primary:hover {
            box-shadow: 0 8px 32px rgba(96, 165, 250, 0.5) !important;
            transform: scale(1.05) !important;
        }

        /* Input focus states */
        input:focus,
        textarea:focus,
        select:focus {
            outline: none !important;
            border-color: var(--border-glow) !important;
            box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.15) !important;
        }

        /* Selected states */
        .project-card.selected,
        .server-card.selected {
            border-color: var(--accent-primary) !important;
            box-shadow: 0 8px 32px rgba(96, 165, 250, 0.4) !important;
        }

        /* Dropdown enhancements */
        .dropdown-server-info {
            background: rgba(96, 165, 250, 0.1) !important;
            border: 1px solid rgba(96, 165, 250, 0.3) !important;
        }

        .dropdown-item:hover {
            background: rgba(96, 165, 250, 0.15) !important;
        }

        /* Message animations */
        .message {
            animation: messageSlideIn 0.5s ease-out;
        }

        @keyframes messageSlideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Status badge near avatar */
        .subscription-status-badge {
            display: none !important;
        }

        .subscription-status-badge.free {
            display: none !important;
        }

        .subscription-status-badge.pro {
            display: none !important;
        }

        .subscription-status-badge.lifetime {
            display: none !important;
        }

        @keyframes badgePulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
        }

        .subscription-status-icon {
            font-size: 0.75rem;
            filter: drop-shadow(0 0 3px currentColor);
        }

        /* Mini badge on avatar - HIDDEN */
        .sub-badge-mini {
            display: none !important;
        }

        .sub-badge-mini.free {
            display: none !important;
        }

        .sub-badge-mini.pro {
            display: none !important;
        }

        .sub-badge-mini.lifetime {
            display: none !important;
        }

        .sub-badge-wrapper {
            position: relative;
            display: inline-block;
        }

        /* Z-index hierarchy */
        .global-gradient-mesh { z-index: 0 !important; }
        .global-particles-canvas { z-index: 1 !important; }
        .main-content { z-index: 10 !important; }
        .login-overlay { z-index: 1000 !important; }
        .user-profile-badge { z-index: 1001 !important; }
            display: flex !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: flex !important;
            opacity: 1 !important;
            visibility: visible !important;
        .profile-dropdown { z-index: 1002 !important; }

        /* Reduce background grid opacity */
        .background-grid {
            opacity: 0.02 !important;
        }

        /* Login Screen */
        .login-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--primary-bg);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.5s ease-out;
        }

        .login-overlay.hidden {
            display: none;
        }

        .login-container {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            padding: 3rem;
            max-width: 540px;
            width: 90%;
            box-shadow: 0 20px 60px var(--shadow);
            animation: scaleIn 0.6s ease-out;
        }

        .login-logo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .login-logo-img {
            width: 80px;
            height: 80px;
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
            animation: float 3s ease-in-out infinite;
        }

        .login-logo h2 {
            font-size: 2rem;
            font-weight: 800;
            letter-spacing: -0.02em;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
        }

        .login-content {
            text-align: center;
        }

        .login-content h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .login-subtitle {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 2rem;
            line-height: 1.5;
        }

        .discord-login-button {
            width: 100%;
            background: #5865F2;
            color: white;
            border: none;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Manrope', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
        }

        .discord-login-button:hover {
            background: #4752C4;
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(88, 101, 242, 0.4);
        }

        .discord-login-button:active {
            transform: translateY(0);
        }

        .discord-icon {
            width: 24px;
            height: 24px;
        }

        .login-divider {
            display: flex;
            align-items: center;
            margin: 1.5rem 0;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .login-divider::before,
        .login-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: var(--border-color);
        }

        .login-divider span {
            padding: 0 1rem;
        }

        .guest-button {
            width: 100%;
            background: transparent;
            color: var(--text-primary);
            border: 1px solid var(--border-color);
            padding: 1rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Manrope', sans-serif;
        }

        .guest-button:hover {
            border-color: var(--accent-color);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
        }

        .guest-button:active {
            transform: translateY(0);
        }

        .login-footer {
            margin-top: 1.5rem;
            font-size: 0.8rem;
            color: var(--text-secondary);
            line-height: 1.5;
        }

        .login-footer a {
            color: var(--accent-color);
            text-decoration: none;
            transition: opacity 0.3s ease;
        }

        .login-footer a:hover {
            opacity: 0.7;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* PROJECT & SERVER SELECTION STYLES                                */
        /* ═══════════════════════════════════════════════════════════════ */

        /* Login Steps */
        .login-step {
            display: none;
        }

        .login-step.active {
            display: block;
        }

        /* Step Indicator */
        .step-indicator {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .step-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--border-color);
            transition: all 0.3s ease;
        }

        .step-dot.active {
            background: #fff;
            width: 24px;
            border-radius: 4px;
        }

        .step-dot.completed {
            background: #22c55e;
        }

        /* Project Cards */
        .project-selector {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .project-card {
            background: rgba(255, 255, 255, 0.03);
            border: 2px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .project-card.gta5rp::before {
            background: linear-gradient(90deg, #e74c3c, #c0392b);
        }

        .project-card.majestic::before {
            background: linear-gradient(90deg, #9b59b6, #8e44ad);
        }

        .project-card:hover {
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-4px);
        }

        .project-card:hover::before {
            opacity: 1;
        }

        .project-card.selected {
            border-color: #fff;
            background: rgba(255, 255, 255, 0.08);
        }

        .project-card.selected::before {
            opacity: 1;
        }

        .project-card.gta5rp.selected {
            border-color: var(--gta5rp-color);
            box-shadow: 0 0 20px rgba(231, 76, 60, 0.3);
        }

        .project-card.majestic.selected {
            border-color: var(--majestic-color);
            box-shadow: 0 0 20px rgba(155, 89, 182, 0.3);
        }

        .project-icon {
            font-size: 2.5rem;
            margin-bottom: 0.75rem;
        }

        .project-name {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
            color: var(--text-primary);
        }

        .project-desc {
            font-size: 0.75rem;
            color: var(--text-secondary);
        }

        .project-check {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #22c55e;
            display: none;
            align-items: center;
            justify-content: center;
        }

        .project-card.selected .project-check {
            display: flex;
        }

        .project-check svg {
            width: 14px;
            height: 14px;
            stroke: white;
            stroke-width: 3;
        }

        .project-forum-link {
            display: block;
            font-size: 0.7rem;
            color: var(--text-secondary);
            text-decoration: none;
            margin-top: 0.5rem;
            opacity: 0.7;
            transition: all 0.2s ease;
        }

        .project-forum-link:hover {
            opacity: 1;
            color: var(--text-primary);
        }

        /* Server Selection */
        .server-selector {
            max-height: 280px;
            overflow-y: auto;
            margin-bottom: 1.5rem;
            padding-right: 0.5rem;
        }

        .server-selector::-webkit-scrollbar {
            width: 6px;
        }

        .server-selector::-webkit-scrollbar-track {
            background: var(--border-color);
            border-radius: 3px;
        }

        .server-selector::-webkit-scrollbar-thumb {
            background: var(--text-secondary);
            border-radius: 3px;
        }

        .server-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
        }

        .server-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.85rem 1rem;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .server-card:hover {
            border-color: rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.06);
        }

        .server-card.selected {
            border-color: #fff;
            background: rgba(255, 255, 255, 0.1);
        }

        .server-card.gta5rp.selected {
            border-color: var(--gta5rp-color);
            background: rgba(231, 76, 60, 0.15);
        }

        .server-card.majestic.selected {
            border-color: var(--majestic-color);
            background: rgba(155, 89, 182, 0.15);
        }

        .server-number {
            width: 28px;
            height: 28px;
            border-radius: 8px;
            background: var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            font-weight: 700;
            font-family: 'JetBrains Mono', monospace;
            flex-shrink: 0;
        }

        .server-card.selected .server-number {
            background: rgba(255, 255, 255, 0.2);
        }

        .server-emoji {
            font-size: 1.1rem;
        }

        .server-info {
            flex: 1;
            min-width: 0;
        }

        .server-name {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .server-players {
            font-size: 0.7rem;
            color: var(--text-secondary);
            font-family: 'JetBrains Mono', monospace;
        }

        .server-bonus {
            font-size: 0.65rem;
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
            padding: 0.1rem 0.4rem;
            border-radius: 4px;
            margin-left: 0.3rem;
            font-weight: 600;
        }

        /* Step Navigation Buttons */
        .step-navigation {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .nav-btn {
            flex: 1;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Manrope', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .nav-btn.back {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
        }

        .nav-btn.back:hover {
            border-color: var(--text-secondary);
            color: var(--text-primary);
        }

        .nav-btn.next {
            background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
            border: none;
            color: #1a1a1a;
        }

        .nav-btn.next:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
        }

        .nav-btn.next:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .nav-btn svg {
            width: 18px;
            height: 18px;
        }

        /* Selected Info Display */
        .selected-info {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .selected-info-icon {
            font-size: 2rem;
        }

        .selected-info-text {
            flex: 1;
        }

        .selected-info-project {
            font-size: 0.85rem;
            color: var(--text-secondary);
        }

        .selected-info-server {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .change-selection {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: 'Manrope', sans-serif;
        }

        .change-selection:hover {
            border-color: var(--text-secondary);
            color: var(--text-primary);
        }

        /* User Server Badge */
        .user-server-badge {
            font-size: 0.65rem;
            padding: 0.15rem 0.5rem;
            border-radius: 4px;
            font-weight: 600;
        }

        .user-server-badge.gta5rp {
            background: rgba(231, 76, 60, 0.2);
            color: #e74c3c;
        }

        .user-server-badge.majestic {
            background: rgba(155, 89, 182, 0.2);
            color: #9b59b6;
        }

        /* Dropdown Server Info */
        .dropdown-server-info {
            padding: 0.85rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, rgba(96, 165, 250, 0.05), rgba(59, 130, 246, 0.05));
            border: 1px solid rgba(96, 165, 250, 0.15);
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .dropdown-server-info:hover {
            background: linear-gradient(135deg, rgba(96, 165, 250, 0.08), rgba(59, 130, 246, 0.08));
            border-color: rgba(96, 165, 250, 0.25);
        }

        .dropdown-server-label {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--text-secondary);
            margin-bottom: 0.35rem;
            font-weight: 600;
        }

        .dropdown-server-value {
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        .dropdown-server-value span {
            filter: drop-shadow(0 0 4px currentColor);
        }

        @media (max-width: 500px) {
            .project-selector {
                grid-template-columns: 1fr;
            }

            .server-grid {
                grid-template-columns: 1fr;
            }

            .step-navigation {
                flex-direction: column;
            }

            .nav-btn.back {
                order: 2;
            }

            .nav-btn.next {
                order: 1;
            }
        }

        /* User Profile Badge */
        .user-profile-badge {
            display: flex !important;
            opacity: 1 !important;
            visibility: visible !important;
            position: absolute;
            top: 50%;
            right: 2rem;
            transform: translateY(-50%);
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            gap: 1rem;
            background: transparent;
            border: none;
            border-radius: 16px;
            padding: 0.75rem;
            z-index: 100;
            animation: fadeInDown 0.5s ease-out;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            user-select: none;
        }

        .user-profile-badge:hover {
            background: transparent;
            transform: translateY(-50%) translateY(-2px);
        }

        .user-profile-badge:active {
            transform: translateY(-50%) scale(0.98);
        }

        .user-profile-badge.hidden {
            display: flex !important; /* ALWAYS VISIBLE */
            opacity: 1 !important;
        }

        .user-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.1rem;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            overflow: hidden;
            position: relative;
            box-shadow: 0 4px 20px rgba(96, 165, 250, 0.3);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 3px solid rgba(100, 100, 100, 0.4);
            flex-shrink: 0;
        }

        /* Статус подписки через цвет рамки */
        .user-avatar.subscription-free {
            border: 3px solid rgba(120, 120, 120, 0.5);
            box-shadow: 0 4px 20px rgba(120, 120, 120, 0.2);
        }

        .user-avatar.subscription-pro {
            border: 3px solid #a78bfa;
            box-shadow: 0 4px 20px rgba(96, 165, 250, 0.6), 0 0 0 2px rgba(96, 165, 250, 0.3);
        }

        .user-avatar.subscription-lifetime {
            border: 3px solid #fbbf24;
            box-shadow: 0 4px 20px rgba(251, 191, 36, 0.6), 0 0 0 2px rgba(251, 191, 36, 0.3);
        }

        .user-profile-badge:hover .user-avatar {
            transform: scale(1.08);
        }

        .user-profile-badge:hover .user-avatar.subscription-pro {
            box-shadow: 0 8px 32px rgba(96, 165, 250, 0.7), 0 0 0 2px rgba(96, 165, 250, 0.5);
            border-color: #c4b5fd;
        }

        .user-profile-badge:hover .user-avatar.subscription-lifetime {
            box-shadow: 0 8px 32px rgba(251, 191, 36, 0.7), 0 0 0 2px rgba(251, 191, 36, 0.5);
            border-color: #fcd34d;
        }

        .user-profile-badge:hover .user-avatar.subscription-free {
            box-shadow: 0 8px 32px rgba(120, 120, 120, 0.3);
            border-color: rgba(140, 140, 140, 0.6);
        }

        .user-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }

        /* Subscription Badge около аватарки */
        .sub-badge-wrapper {
            position: relative;
            display: inline-block;
            flex-shrink: 0;
        }

        .sub-badge-mini {
            display: none !important;
        }

        .sub-badge-mini.free {
            display: none !important;
        }

        .sub-badge-mini.pro {
            display: none !important;
        }

        .sub-badge-mini.lifetime {
            display: none !important;
        }

        .user-info {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            min-width: 0;
            align-items: flex-end;
        }

        .user-name {
            font-weight: 700;
            font-size: 1rem;
            letter-spacing: -0.01em;
            color: var(--text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: right;
        }

        .user-status {
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--text-secondary);
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            gap: 0.4rem;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        .user-status::before {
            display: none;
        }

        .user-server-badge {
            display: inline-flex;
            flex-direction: row-reverse;
            align-items: center;
            gap: 0.3rem;
        }

        .user-server-badge::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--accent-success);
            box-shadow: 0 0 8px var(--accent-success);
            animation: statusPulse 2s ease-in-out infinite;
        }

        @keyframes statusPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .dropdown-arrow {
            color: var(--text-secondary);
            transition: all 0.3s ease;
            flex-shrink: 0;
            font-size: 1rem;
        }

        .user-profile-badge:hover .dropdown-arrow {
            color: var(--accent-primary);
            transform: translateY(2px);
        }

        /* Profile Dropdown Menu */
        .profile-dropdown {
            position: fixed;
            top: 6rem;
            right: 2rem;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            padding: 0.4rem;
            min-width: 200px;
            z-index: 99;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
            animation: dropdownSlide 0.2s ease-out;
            opacity: 1;
            transform: translateY(0);
        }

        .profile-dropdown.hidden {
            display: none;
        }

        @keyframes dropdownSlide {
            from {
                opacity: 0;
                transform: translateY(-8px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .dropdown-item {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 0.65rem;
            padding: 0.6rem 0.85rem;
            background: transparent;
            border: none;
            border-radius: 6px;
            color: var(--text-primary);
            font-size: 0.875rem;
            font-family: 'Manrope', sans-serif;
            cursor: pointer;
            transition: all 0.15s ease;
            text-align: left;
        }

        .dropdown-item:hover {
            background: rgba(255, 255, 255, 0.06);
            color: var(--accent-color);
        }

        .dropdown-item.logout-item:hover {
            background: rgba(239, 68, 68, 0.12);
            color: #ef4444;
        }

        .dropdown-icon {
            width: 18px;
            height: 18px;
            flex-shrink: 0;
        }

        .dropdown-divider {
            height: 1px;
            background: var(--border-color);
            margin: 0.35rem 0;
        }

        .logout-button {
            background: transparent;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0.5rem;
            transition: color 0.3s ease;
        }

        .logout-button:hover {
            color: var(--accent-color);
        }

        /* ═══════════════════════════════════════════════════════════════
/* ═══════════════════════════════════════════════════════════════
   💎 REVOLUTIONARY SUBSCRIPTION DESIGN
   Кардинально новый, футуристичный дизайн с particles и 3D эффектами
   ═══════════════════════════════════════════════════════════════ */

.subscription-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    z-index: 9999;
    overflow-y: auto;
    animation: sectionFadeIn 0.5s ease-out;
}

/* Добавляем статичное синее свечение */
.subscription-section::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at 50% 30%,
        rgba(60, 110, 180, 0.15) 0%,
        rgba(50, 100, 170, 0.10) 30%,
        rgba(40, 90, 160, 0.05) 50%,
        transparent 70%
    );
    pointer-events: none;
    z-index: -1;
}

.subscription-section.hidden {
    display: none;
}

@keyframes sectionFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Particles Canvas */
.particles-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    display: none; /* ОТКЛЮЧЕНО */
}

/* Gradient Mesh Background */
.gradient-mesh {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    pointer-events: none;
}

.mesh-gradient {
    position: absolute;
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.4;
    /* animation: meshFloat 20s ease-in-out infinite; */ /* ОТКЛЮЧЕНО */
}

.gradient-1 {
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(60, 110, 180, 0.12) 0%, transparent 70%);
    top: 10%;
    left: 10%;
}

.gradient-2 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(50, 100, 170, 0.10) 0%, transparent 70%);
    bottom: 10%;
    right: 10%;
}

.gradient-3 {
    width: 650px;
    height: 650px;
    background: radial-gradient(circle, rgba(55, 105, 175, 0.08) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.gradient-4 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(45, 95, 165, 0.06) 0%, transparent 70%);
    top: 20%;
    right: 20%;
}

/* Анимация отключена */
/*
@keyframes meshFloat {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(100px, -100px) rotate(120deg); }
    66% { transform: translate(-50px, 100px) rotate(240deg); }
}
*/

/* Close Button */
.sub-close-btn {
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 10000;
}

.sub-close-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

.sub-close-btn svg {
    color: #ffffff;
}

/* Container */
.sub-container {
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
    z-index: 10;
}

/* Header */
.sub-header {
    text-align: center;
    margin-bottom: 4rem;
    animation: headerSlideUp 0.8s ease-out;
}

@keyframes headerSlideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.sub-header-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #818cf8;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2rem;
}

.badge-dot {
    width: 6px;
    height: 6px;
    background: #818cf8;
    border-radius: 50%;
    animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.5);
    }
}

.sub-title {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
    color: #ffffff;
}

.title-word {
    display: inline-block;
    animation: wordReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: calc(var(--index) * 0.1s);
    opacity: 0;
    transform: translateY(20px);
}

@keyframes wordReveal {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.title-highlight {
    color: #ffffff;
    /* Градиент отключен */
    /*
    background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% auto;
    animation: gradientShift 3s ease-in-out infinite;
    */
}

/*
@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}
*/

.sub-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 2rem;
}

/* Status Card */
.sub-status {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Цветные варианты статуса */
.sub-status.status-free {
    border-color: rgba(120, 120, 120, 0.3);
}

.sub-status.status-free .status-value {
    color: #aaa;
}

.sub-status.status-free .status-badge {
    background: linear-gradient(135deg, rgba(100, 100, 100, 0.15), rgba(80, 80, 80, 0.15));
}

.sub-status.status-pro {
    border-color: rgba(96, 165, 250, 0.5);
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.05), rgba(59, 130, 246, 0.05));
    box-shadow: 0 0 30px rgba(96, 165, 250, 0.2);
}

.sub-status.status-pro .status-value {
    color: #c4b5fd;
}

.sub-status.status-pro .status-badge {
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3));
}

.sub-status.status-pro .status-glow {
    background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(96, 165, 250, 0.2) 50%, 
        transparent 100%);
}

.sub-status.status-lifetime {
    border-color: rgba(251, 191, 36, 0.5);
    background: linear-gradient(135deg, rgba(251, 191, 36, 0.05), rgba(245, 158, 11, 0.05));
    box-shadow: 0 0 30px rgba(251, 191, 36, 0.2);
}

.sub-status.status-lifetime .status-value {
    color: #fcd34d;
}

.sub-status.status-lifetime .status-badge {
    background: linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.3));
}

.sub-status.status-lifetime .status-glow {
    background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(251, 191, 36, 0.2) 50%, 
        transparent 100%);
}

.status-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(99, 102, 241, 0.1) 50%, 
        transparent 100%);
    animation: statusGlowMove 3s ease-in-out infinite;
}

@keyframes statusGlowMove {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.status-content {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.status-content svg {
    color: rgba(255, 255, 255, 0.6);
}

.status-text {
    display: flex;
    flex-direction: column;
}

.status-label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-value {
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
}

.status-badge {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    font-size: 1.2rem;
}

/* Pricing Toggle */
.pricing-toggle {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    margin: 0 auto 3rem;
    max-width: 300px;
}

.toggle-btn {
    position: relative;
    padding: 0.75rem 2rem;
    background: transparent;
    border: none;
    border-radius: 50px;
    font-size: 0.95rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;
}

.toggle-btn.active {
    color: #ffffff;
}

.toggle-indicator {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: calc(50% - 0.5rem);
    height: calc(100% - 1rem);
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 50px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
}

/* Cards Grid */
.sub-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

/* Pricing Card */
.sub-pricingcard {
    position: relative;
    padding: 2.5rem;
    background: rgba(15, 15, 20, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    animation: cardSlideUp 0.8s ease-out backwards;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.sub-pricingcard:nth-child(1) { animation-delay: 0.1s; }
.sub-pricingcard:nth-child(2) { animation-delay: 0.2s; }
.sub-pricingcard:nth-child(3) { animation-delay: 0.3s; }
.sub-pricingcard:nth-child(4) { animation-delay: 0.4s; }
.sub-pricingcard:nth-child(5) { animation-delay: 0.5s; }

/* Верхняя линия при наведении */
.sub-pricingcard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
        transparent 0%,
        rgba(70, 120, 200, 0.6) 50%,
        transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.sub-pricingcard:hover::before {
    opacity: 1;
}

/* Compact Cards */
.sub-pricingcard.compact {
    padding: 1.75rem;
}

.sub-pricingcard.compact .card-header {
    margin-bottom: 1.25rem;
    text-align: center;
}

.sub-pricingcard.compact .card-name {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
}

.sub-pricingcard.compact .card-desc {
    font-size: 0.85rem;
}

.sub-pricingcard.compact .card-price {
    margin-bottom: 1.5rem;
}

/* Discount Badge */
.discount-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.35rem 0.75rem;
    background: linear-gradient(135deg, 
        rgba(70, 120, 200, 0.8), 
        rgba(60, 110, 190, 0.8));
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
    z-index: 2;
    border: 1px solid rgba(70, 120, 200, 0.3);
}

@keyframes cardSlideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.sub-pricingcard:hover {
    transform: translateY(-8px);
    border-color: rgba(70, 120, 200, 0.3);
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(70, 120, 200, 0.2);
}

.sub-pricingcard.featured {
    background: rgba(20, 25, 35, 0.7);
    border-color: rgba(70, 120, 200, 0.3);
    box-shadow: 0 0 60px rgba(99, 102, 241, 0.2);
}

/* Card Glow */
.card-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.sub-pricingcard:hover .card-glow {
    opacity: 1;
}

.card-glow.pro {
    background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
}

.card-glow.lifetime {
    background: radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%);
}

/* Card Shine */
.card-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.1) 50%, 
        transparent 100%);
    animation: cardShine 3s ease-in-out infinite;
}

@keyframes cardShine {
    0% { left: -100%; }
    50%, 100% { left: 100%; }
}

/* Card Badge */
.card-badge {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.card-badge svg {
    width: 12px;
    height: 12px;
}

.card-badge.lifetime {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    box-shadow: 0 4px 20px rgba(251, 191, 36, 0.4);
}

/* Card Header */
.card-header {
    margin-bottom: 2rem;
}

.card-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 1rem;
    position: relative;
}

.icon-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    transition: all 0.3s ease;
}

.sub-pricingcard:hover .icon-wrapper {
    transform: rotateY(180deg);
    background: rgba(255, 255, 255, 0.08);
}

.card-icon.pro .icon-wrapper {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    border-color: rgba(99, 102, 241, 0.3);
}

.card-icon.lifetime .icon-wrapper {
    background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.1));
    border-color: rgba(251, 191, 36, 0.3);
}

.icon-wrapper svg {
    color: rgba(255, 255, 255, 0.8);
}

.card-name {
    font-size: 1.75rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 0.5rem;
}

.card-desc {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.5);
}

/* Card Price */
.card-price {
    margin-bottom: 2rem;
}

.price-tag {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #10b981;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
}

.price-tag.lifetime {
    background: rgba(251, 191, 36, 0.1);
    border-color: rgba(251, 191, 36, 0.3);
    color: #fbbf24;
}

.price-wrapper {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.price-currency {
    font-size: 1.5rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.6);
}

.price-amount {
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
}

.price-period {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.4);
}

.price-subtext {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
}

/* Card Features */
.card-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.feature-item:last-child {
    border-bottom: none;
}

.feature-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 800;
    color: #10b981;
    flex-shrink: 0;
}

.feature-icon.pro {
    background: rgba(99, 102, 241, 0.1);
    color: #818cf8;
}

.feature-icon.lifetime {
    background: rgba(251, 191, 36, 0.1);
    color: #fbbf24;
}

/* Card Button */
.card-btn {
    position: relative;
    width: 100%;
    padding: 1.25rem;
    background: rgba(70, 120, 200, 0.1);
    border: 1px solid rgba(70, 120, 200, 0.3);
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-btn:hover {
    background: rgba(70, 120, 200, 0.2);
    border-color: rgba(70, 120, 200, 0.5);
    transform: translateY(-2px);
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(70, 120, 200, 0.2);
}

.btn-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(70, 120, 200, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.card-btn:hover .btn-glow {
    width: 400px;
    height: 400px;
}

.btn-text {
    position: relative;
    z-index: 2;
}

.btn-icon {
    position: relative;
    z-index: 2;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
}

.card-btn:hover .btn-icon {
    transform: translateX(4px);
}

.card-btn.pro {
    background: linear-gradient(135deg, 
        rgba(70, 120, 200, 0.3), 
        rgba(60, 110, 190, 0.3));
    border-color: rgba(70, 120, 200, 0.5);
}

.card-btn.lifetime {
    background: linear-gradient(135deg, 
        rgba(200, 160, 60, 0.3), 
        rgba(180, 140, 50, 0.3));
    border-color: rgba(200, 160, 60, 0.5);
}

/* Comparison Section */
.comparison-section {
    margin-bottom: 3rem;
    animation: cardSlideUp 0.8s ease-out 0.4s backwards;
}

.comparison-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 2rem;
}

.comparison-table {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    overflow: hidden;
}

.comparison-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.comparison-row:last-child {
    border-bottom: none;
}

.comparison-row.header {
    background: rgba(255, 255, 255, 0.05);
    font-weight: 700;
}

.comparison-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
}

.comparison-cell.feature {
    justify-content: flex-start;
    color: #ffffff;
}

.comparison-cell.highlight {
    color: #818cf8;
    font-weight: 700;
}

/* Trust Section */
.trust-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    animation: cardSlideUp 0.8s ease-out 0.5s backwards;
}

.trust-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.trust-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.trust-text {
    flex: 1;
}

.trust-title {
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.25rem;
}

.trust-desc {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
}

/* Mobile Responsive */
@media (max-width: 968px) {
    .sub-container {
        padding: 3rem 1.5rem;
    }

    .sub-title {
        font-size: 2.5rem;
    }

    .sub-cards-grid {
        grid-template-columns: 1fr;
    }

    .comparison-row {
        grid-template-columns: 1.5fr 1fr 1fr 1fr;
        font-size: 0.85rem;
    }

    .trust-section {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .sub-title {
        font-size: 2rem;
    }

    .price-amount {
        font-size: 2.5rem;
    }

    .sub-close-btn {
        width: 40px;
        height: 40px;
    }
}
        /* Discord Bot Action Buttons */
        /* Bot Settings Modal */
        .settings-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(8px);
            z-index: 1001;
            display: none;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease-out;
        }

        .settings-modal.active {
            display: flex;
        }

        .settings-content {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            padding: 2.5rem;
            max-width: 700px;
            width: 90%;
            max-height: 85vh;
            overflow-y: auto;
            box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
            animation: scaleIn 0.4s ease-out;
        }

        .settings-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--border-color);
        }

        .settings-header h2 {
            font-size: 1.75rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .close-modal {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            width: 36px;
            height: 36px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .close-modal:hover {
            border-color: var(--accent-color);
            color: var(--accent-color);
            transform: rotate(90deg);
        }

        .setting-group {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .setting-title {
            font-size: 1.05rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .setting-description {
            color: var(--text-secondary);
            font-size: 0.875rem;
            margin-bottom: 1rem;
            line-height: 1.5;
        }

        .setting-control {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 1rem;
        }

        .toggle-switch {
            position: relative;
            width: 52px;
            height: 28px;
            background: var(--border-color);
            border-radius: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .toggle-switch.active {
            background: linear-gradient(135deg, #5865F2 0%, #4752C4 100%);
        }

        .toggle-slider {
            position: absolute;
            top: 3px;
            left: 3px;
            width: 22px;
            height: 22px;
            background: white;
            border-radius: 50%;
            transition: all 0.3s ease;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .toggle-switch.active .toggle-slider {
            left: 27px;
        }

        .input-field {
            flex: 1;
            background: var(--primary-bg);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            padding: 0.75rem 1rem;
            border-radius: 10px;
            font-size: 0.95rem;
            font-family: 'Manrope', sans-serif;
            transition: all 0.3s ease;
        }

        .input-field:focus {
            outline: none;
            border-color: #5865F2;
            box-shadow: 0 0 0 3px rgba(88, 101, 242, 0.1);
        }

        .select-input {
            flex: 1;
            background: var(--primary-bg);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            padding: 0.75rem 1rem;
            border-radius: 10px;
            font-size: 0.95rem;
            font-family: 'Manrope', sans-serif;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .select-input:focus {
            outline: none;
            border-color: #5865F2;
            box-shadow: 0 0 0 3px rgba(88, 101, 242, 0.1);
        }

        .save-settings-btn {
            width: 100%;
            background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
            border: none;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Manrope', sans-serif;
            margin-top: 1rem;
            box-shadow: 0 6px 20px rgba(74, 222, 128, 0.3);
        }

        .save-settings-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(74, 222, 128, 0.4);
        }

        .save-settings-btn:active {
            transform: translateY(0);
        }

        .settings-status {
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            font-weight: 500;
            display: none;
        }

        /* Animated Background */
        .background-grid {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
            background-size: 50px 50px;
            background-position: 0 0;
            z-index: 0;
            animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
            0% {
                background-position: 0 0;
            }

            100% {
                background-position: 50px 50px;
            }
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* TOP LEFT LOGO WITH NEON ANIMATION                                */
        /* ═══════════════════════════════════════════════════════════════ */

        /* ═══════════════════════════════════════════════════════════════
           НОВАЯ НАВИГАЦИЯ - ГОРИЗОНТАЛЬНЫЕ КНОПКИ (КАК НА ФОТО LOUVRE)
           ═══════════════════════════════════════════════════════════════ */

        .top-logo {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 150;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0;
            padding: 0;
            background: transparent;
            backdrop-filter: none;
            height: 64px;
            border-bottom: none;
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .top-logo.hidden {
            transform: translateY(-100%);
            opacity: 0;
        }

        /* Logo Part - слева */
        .logo-main {
            position: absolute;
            left: 2rem;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem;
            background: transparent;
            border: none;
            transition: all 0.3s ease;
        }

        .logo-btn-img {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .logo-btn-text {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        /* Кнопка меню - скрыта */
        .menu-toggle-btn {
            display: none;
        }

        /* Горизонтальная навигация */
        .logo-dropdown {
            position: static;
            display: flex;
            align-items: center;
            gap: 0;
            background: transparent;
            border: none;
            padding: 0;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            min-width: auto;
        }

        .logo-dropdown.show {
            opacity: 1;
            visibility: visible;
            transform: none;
        }

        .logo-menu-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0;
            padding: 0 2.5rem;
            height: 64px;
            border-radius: 0;
            cursor: pointer;
            transition: all 0.2s ease;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.85rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            background: transparent;
            border: none;
            position: relative;
        }

        .logo-menu-item:hover {
            background: transparent;
            color: #ffffff;
        }

        .logo-menu-item.active {
            background: transparent;
            color: #ffffff;
        }

        .logo-menu-item.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: #ffffff;
        }

        .logo-menu-item svg {
            display: none;
        }

        .logo-menu-item span {
            font-size: 0.85rem;
        }

        @media (max-width: 968px) {
            .logo-menu-item {
                padding: 0 1.5rem;
                font-size: 0.8rem;
            }
        }

        @media (max-width: 768px) {
            .top-logo {
                flex-direction: column;
                height: auto;
                align-items: flex-start;
            }

            .logo-main {
                position: static;
                transform: none;
                padding: 1rem 1.5rem;
            }

            .logo-dropdown {
                width: 100%;
                flex-direction: column;
                align-items: stretch;
            }

            .logo-menu-item {
                padding: 1rem 1.5rem;
                height: auto;
                border-right: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }

            .logo-menu-item:first-child {
                border-left: none;
            }
        }

        .logo-menu-divider {
            height: 1px;
            background: var(--border-color);
            margin: 0.35rem 0;
        }

        /* Remove old header */
        header {
            display: none;
        }

        /* Main Container */
        .container {
            position: relative;
            z-index: 5;
            max-width: 900px;
            margin: 0 auto;
            padding: 0 1.5rem;
            padding-top: 100px;
            padding-bottom: 50px;
            min-height: 100vh;
            box-sizing: border-box;
            overflow: visible;
        }

        /* When chat is active, add padding for input */
        .container:has(#chatSection.active) {
            padding-bottom: 160px;
        }

        /* Chat Interface - New Layout */
        .chat-container {
            background: transparent;
            border: none;
            border-radius: 0;
            overflow: visible;
            box-shadow: none;
            animation: fadeIn 0.5s ease-out;
        }

        .chat-header {
            display: none;
        }

        .chat-messages {
            overflow: visible;
            padding: 2rem 0;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        /* Fixed Input Container */
        .chat-input-container {
            background: transparent !important;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1rem 2rem 1.5rem;
            z-index: 100;
            display: none;
            /* Hidden by default, shown only in chat */
        }

        .chat-input-inner {
            max-width: 800px;
            margin: 0 auto;
        }

/* ... existing code ... */

/* Modern Input Box */
.chat-input-box {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    backdrop-filter: none;
}

.chat-input-box::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.chat-input-box:focus-within::before {
    opacity: 1;
}

.chat-input-box:hover {
    border-color: rgba(255, 255, 255, 0.15);
}

.chat-input-box:focus-within {
    border-color: transparent;
    box-shadow: 0 0 30px rgba(96, 165, 250, 0.15), 0 10px 40px rgba(0, 0, 0, 0.2);
}

/* Input Area - Main */
.chat-input-main {
    padding: 1.25rem 1.5rem;
    min-height: 60px;
    border-radius: 20px 20px 0 0;
    background: transparent;
}

.chat-input {
    width: 100%;
    background: transparent;
    border: none;
    padding: 0;
    color: var(--text-primary);
    font-family: 'Manrope', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    resize: none;
}

.chat-input:focus {
    outline: none;
}

.chat-input::placeholder {
    color: var(--text-muted);
    transition: color 0.3s ease;
}

.chat-input:focus::placeholder {
    color: var(--text-secondary);
}

/* Bottom Bar */
.chat-input-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    background: transparent;
    border-radius: 0 0 20px 20px;
}

/* ... existing code ... */

        /* ═══════════════════════════════════════════════════════════════ */
        /* NEW AI MODEL SELECTOR - Clean & Beautiful                        */
        /* ═══════════════════════════════════════════════════════════════ */

        .ai-selector {
            position: relative;
            z-index: 200;
        }

        .ai-selector-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.4rem 0.7rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .ai-selector-btn:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: rgba(255, 255, 255, 0.12);
        }

        .ai-selector-btn.open {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.15);
        }

        .ai-selector-text {
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--text-secondary);
        }

        .ai-selector-arrow {
            color: var(--text-secondary);
            transition: transform 0.25s ease;
            margin-left: 0.15rem;
        }

        .ai-selector-btn.open .ai-selector-arrow {
            transform: rotate(180deg);
        }

        /* Dropdown Menu - Opens to the LEFT */
        .ai-dropdown {
            position: absolute;
            bottom: 0;
            right: calc(100% + 25px);
            width: 240px;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 0.5rem;
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            transform-origin: right center;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: -20px 0 50px rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(255, 255, 255, 0.05) inset;
        }

        .ai-dropdown.show {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
        }

        .ai-dropdown-label {
            padding: 0.5rem 0.75rem 0.4rem;
            font-size: 0.65rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-secondary);
        }

        /* Model Options */
        .ai-option {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.65rem 0.75rem;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.15s ease;
            margin-bottom: 0.25rem;
        }

        .ai-option:last-child {
            margin-bottom: 0;
        }

        .ai-option:hover {
            background: rgba(255, 255, 255, 0.05);
        }

        .ai-option.selected {
            background: rgba(255, 255, 255, 0.08);
        }

        .ai-option-content {
            flex: 1;
            min-width: 0;
        }

        .ai-option-name {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .ai-option-check {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            flex-shrink: 0;
        }

        .ai-option.selected .ai-option-check {
            background: var(--text-primary);
            border-color: var(--text-primary);
        }

        .ai-option-check svg {
            width: 10px;
            height: 10px;
            stroke: var(--primary-bg);
            stroke-width: 3;
            opacity: 0;
            transform: scale(0.5);
            transition: all 0.2s ease;
        }

        .ai-option.selected .ai-option-check svg {
            opacity: 1;
            transform: scale(1);
        }

        /* Send Button */
        .send-button {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            padding: 0.4rem 0.75rem;
            background: transparent;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: 'Manrope', sans-serif;
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--text-secondary);
        }

        .send-button:hover {
            color: var(--text-primary);
            background: rgba(255, 255, 255, 0.05);
        }

        .send-button:hover svg {
            transform: translateX(2px);
        }

        .send-button svg {
            transition: transform 0.2s ease;
        }

        .send-button:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }

        /* Keyboard Shortcut Hint */
        .shortcut-hint {
            font-size: 0.7rem;
            color: var(--text-secondary);
            opacity: 0.5;
            margin-left: 0.5rem;
        }

        .shortcut-hint kbd {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.15rem 0.35rem;
            border-radius: 4px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
        }

        .message {
            display: flex;
            gap: 1rem;
            animation: messageSlideIn 0.4s ease-out;
        }

        @keyframes messageSlideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .message-avatar {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            flex-shrink: 0;
        }

        .message.bot .message-avatar {
            background: linear-gradient(135deg, #f5f5f5 0%, #a0a0a0 100%);
            color: var(--primary-bg);
        }

        .message.user .message-avatar {
            background: var(--border-color);
            color: var(--text-primary);
        }

        .message-content {
            flex: 1;
            line-height: 1.6;
        }

        .message-text {
            background: transparent;
            padding: 0;
            border-radius: 0;
            border: none;
        }

        .message.user .message-text {
            background: transparent;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* 📜 КРАСИВОЕ ФОРМАТИРОВАНИЕ ОТВЕТОВ БОТА */
        /* ═══════════════════════════════════════════════════════════════ */

        .rule-card {
            background: transparent;
            border: 1px solid rgba(96, 165, 250, 0.2);
            border-radius: 16px;
            padding: 1.25rem 0;
            margin-bottom: 1rem;
        }

        .rule-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .rule-icon {
            font-size: 1.5rem;
        }

        .rule-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .rule-badge {
            background: rgba(88, 101, 242, 0.3);
            color: #a8b4ff;
            padding: 0.25rem 0.6rem;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-left: auto;
        }

        .rule-definition {
            background: transparent;
            border-left: 3px solid var(--accent-primary);
            padding: 0.5rem 0 0.5rem 1rem;
            border-radius: 0;
            margin-bottom: 1rem;
            font-size: 0.95rem;
            color: var(--text-primary);
            line-height: 1.6;
        }

        .rule-section {
            margin-bottom: 1rem;
        }

        .rule-section-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .rule-section-title svg {
            width: 14px;
            height: 14px;
        }

        .punishment-box {
            background: linear-gradient(135deg, rgba(237, 66, 69, 0.15) 0%, rgba(237, 66, 69, 0.05) 100%);
            border: 1px solid rgba(237, 66, 69, 0.3);
            border-radius: 10px;
            padding: 0.75rem 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .punishment-icon {
            font-size: 1.25rem;
        }

        .punishment-text {
            color: #ff9999;
            font-weight: 500;
            font-size: 0.9rem;
        }

        .examples-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .examples-list li {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            padding: 0.6rem 1rem;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        .examples-list li:last-child {
            margin-bottom: 0;
        }

        .examples-list li::before {
            content: '•';
            color: #5865F2;
            font-weight: bold;
        }

        .notes-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .notes-list li {
            background: rgba(250, 166, 26, 0.1);
            border-left: 3px solid #faa61a;
            padding: 0.6rem 1rem;
            margin-bottom: 0.5rem;
            border-radius: 0 8px 8px 0;
            font-size: 0.85rem;
            color: #ffd699;
        }

        .notes-list li:last-child {
            margin-bottom: 0;
        }

        .rule-source {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 1rem;
            padding-top: 0.75rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        .rule-source a {
            color: #5865F2;
            text-decoration: none;
        }

        .rule-source a:hover {
            text-decoration: underline;
        }

        /* Help Card - когда ничего не найдено */
        .help-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.25rem;
        }

        .help-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 1rem;
            color: var(--text-primary);
        }

        .help-section {
            margin-bottom: 1.25rem;
        }

        .help-section-title {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .terms-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
        }

        @media (max-width: 500px) {
            .terms-grid {
                grid-template-columns: 1fr;
            }
        }

        .term-item {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 10px;
            padding: 0.6rem 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-size: 0.85rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .term-item:hover {
            background: rgba(88, 101, 242, 0.15);
            border-color: rgba(88, 101, 242, 0.4);
            color: var(--text-primary);
            transform: translateX(4px);
        }

        .term-abbr {
            background: linear-gradient(135deg, #5865F2 0%, #4752C4 100%);
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: 6px;
            font-weight: 700;
            font-size: 0.75rem;
            min-width: 40px;
            text-align: center;
        }

        .topics-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .topic-tag {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 0.4rem 0.9rem;
            font-size: 0.85rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .topic-tag:hover {
            background: rgba(88, 101, 242, 0.2);
            border-color: rgba(88, 101, 242, 0.4);
            color: var(--text-primary);
        }

        .help-tip {
            background: rgba(250, 166, 26, 0.1);
            border-left: 3px solid #faa61a;
            padding: 0.75rem 1rem;
            border-radius: 0 8px 8px 0;
            font-size: 0.85rem;
            color: #ffd699;
        }

        /* HTML контент в сообщениях */
        .message-text.html-content {
            background: transparent;
            border: none;
            padding: 0;
        }

        /* Мульти-результаты */
        .multi-results {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .mini-rule-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1rem;
            transition: all 0.2s ease;
        }

        .mini-rule-card:hover {
            border-color: rgba(88, 101, 242, 0.5);
            background: rgba(88, 101, 242, 0.05);
        }

        .mini-rule-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .mini-rule-title {
            font-weight: 600;
            color: var(--text-primary);
        }

        .mini-rule-desc {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
        }

        .mini-rule-punishment {
            font-size: 0.8rem;
            color: #ff9999;
        }

        /* Не найдено - список терминов */
        .terms-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 0.5rem;
            margin: 1rem 0;
        }

        .term-chip {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
            color: var(--text-secondary);
            text-align: center;
            transition: all 0.2s ease;
        }

        .term-chip:hover {
            border-color: #5865F2;
            color: var(--text-primary);
            background: rgba(88, 101, 242, 0.1);
        }

        .term-chip strong {
            color: var(--text-primary);
        }

        .message-time {
            font-size: 0.75rem;
            color: var(--text-secondary);
            margin-top: 0.5rem;
            font-family: 'JetBrains Mono', monospace;
        }

        /* Welcome Screen - New Minimalist Design */
        .welcome-screen {
            text-align: left;
            padding: 3rem 0;
            opacity: 1;
            transition: opacity 0.3s ease-out;
            max-width: 750px;
        }

        .welcome-screen.hidden {
            display: none;
        }

        .welcome-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 1.5rem;
            opacity: 0.9;
            filter: brightness(1.1);
            display: none; /* СКРЫТО */
        }

        .welcome-screen h3 {
            font-size: 1.75rem;
            margin-bottom: 0.75rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .welcome-main-title {
            font-size: 3.5rem !important;
            font-weight: 600 !important;
            line-height: 1.15 !important;
            margin-bottom: 2rem !important;
            color: #ffffff !important;
            letter-spacing: -0.02em !important;
            max-width: 700px;
        }

        .welcome-subtitle-question {
            color: rgba(255, 255, 255, 0.7) !important;
            font-size: 1.1rem !important;
            margin-bottom: 1.5rem !important;
            font-weight: 400 !important;
        }

        .welcome-subtitle {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 0.35rem;
        }

        .welcome-subtitle a {
            color: var(--text-primary);
            text-decoration: underline;
            text-decoration-color: rgba(255, 255, 255, 0.3);
            text-underline-offset: 2px;
        }

        .welcome-subtitle a:hover {
            text-decoration-color: var(--text-primary);
        }

        /* Quick Questions - Pill Style */
        .quick-questions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1.5rem;
        }

        .quick-question {
            background: transparent;
            border: 1px solid var(--border-color);
            padding: 0.6rem 1rem;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .quick-question:hover {
            border-color: rgba(255, 255, 255, 0.4);
            background: rgba(255, 255, 255, 0.03);
        }

        .quick-question-title {
            font-weight: 500;
            font-size: 0.9rem;
            color: var(--text-primary);
        }

        .quick-question-desc {
            display: none;
        }

        /* Recent Dialogs Section */
        .recent-dialogs {
            margin-top: 2.5rem;
        }

        .recent-dialogs-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-secondary);
            font-size: 0.85rem;
            cursor: pointer;
            margin-bottom: 0.75rem;
            transition: color 0.2s ease;
        }

        .recent-dialogs-header:hover {
            color: var(--text-primary);
        }

        .recent-dialogs-header svg {
            transition: transform 0.2s ease;
        }

        .recent-dialogs-header.open svg {
            transform: rotate(180deg);
        }

        /* Compact Model Selector - Near Input */
        .model-selector-compact {
            position: relative;
        }

        .model-trigger-compact {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 0.75rem;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s ease;
            white-space: nowrap;
        }

        .model-trigger-compact:hover {
            border-color: rgba(138, 43, 226, 0.5);
            background: rgba(138, 43, 226, 0.05);
        }

        .model-trigger-compact.active {
            border-color: rgba(138, 43, 226, 0.6);
        }

        .model-icon-compact {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .model-name-compact {
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .model-arrow-compact {
            color: var(--text-secondary);
            transition: transform 0.2s ease;
            flex-shrink: 0;
        }

        .model-trigger-compact.active .model-arrow-compact {
            transform: rotate(180deg);
        }

        .model-dropdown-compact {
            position: absolute;
            bottom: calc(100% + 8px);
            left: 0;
            min-width: 220px;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.2s ease;
            z-index: 1000;
            box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
        }

        .model-dropdown-compact.open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .model-dropdown-header {
            padding: 0.6rem 0.85rem;
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary);
            background: rgba(0, 0, 0, 0.2);
        }

        .model-option-compact {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            padding: 0.65rem 0.85rem;
            cursor: pointer;
            transition: all 0.15s ease;
        }

        .model-option-compact:hover {
            background: rgba(138, 43, 226, 0.1);
        }

        .model-option-compact.active {
            background: rgba(138, 43, 226, 0.15);
        }

        .model-option-compact.disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        .model-option-compact.disabled:hover {
            background: transparent;
        }

        .model-opt-icon {
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            flex-shrink: 0;
        }

        .model-opt-info {
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
        }

        .model-opt-name {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .model-opt-desc {
            font-size: 0.7rem;
            color: var(--text-secondary);
        }

        .model-divider-compact {
            height: 1px;
            background: var(--border-color);
            margin: 0.25rem 0;
        }

        .model-footer-compact {
            padding: 0.5rem 0.85rem;
            background: rgba(0, 0, 0, 0.15);
            text-align: center;
        }

        .model-footer-compact a {
            font-size: 0.7rem;
            color: #ffffff;
            text-decoration: none;
        }

        .model-footer-compact a:hover {
            text-decoration: underline;
        }

        /* Minimalist Profile Styles - Informative */
        .profile-minimal {
            max-width: 600px;
            margin: 0 auto;
            padding: 1.5rem;
        }

        .profile-user-card {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            padding: 1.5rem;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            margin-bottom: 1rem;
        }

        .profile-avatar-minimal {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: linear-gradient(135deg, #5865F2 0%, #4752C4 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.75rem;
            font-weight: 700;
            color: white;
            flex-shrink: 0;
            background-size: cover;
            background-position: center;
            border: 3px solid rgba(120, 120, 120, 0.4);
            box-shadow: 0 4px 20px rgba(100, 100, 100, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Цветные рамки по статусу подписки */
        .profile-avatar-minimal.subscription-free {
            border: 3px solid rgba(120, 120, 120, 0.5);
            box-shadow: 0 4px 20px rgba(120, 120, 120, 0.2);
        }

        .profile-avatar-minimal.subscription-pro {
            border: 3px solid #a78bfa;
            box-shadow: 0 4px 24px rgba(96, 165, 250, 0.6), 0 0 0 2px rgba(96, 165, 250, 0.3);
        }

        .profile-avatar-minimal.subscription-lifetime {
            border: 3px solid #fbbf24;
            box-shadow: 0 4px 24px rgba(251, 191, 36, 0.6), 0 0 0 2px rgba(251, 191, 36, 0.3);
        }

        .profile-user-info {
            flex: 1;
            min-width: 0;
        }

        .profile-name-minimal {
            font-size: 1.35rem;
            font-weight: 700;
            margin: 0 0 0.15rem 0;
            color: var(--text-primary);
        }

        .profile-tag-minimal {
            font-size: 0.85rem;
            color: var(--text-secondary);
            font-family: 'JetBrains Mono', monospace;
        }

        /* Бейдж роли команды */
        .profile-role-badge {
            display: inline-block;
            padding: 0.2rem 0.6rem;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-left: 0.5rem;
        }

        .profile-role-badge.hidden {
            display: none;
        }

        .profile-role-badge.owner {
            background: linear-gradient(135deg, #ffd700 0%, #ffaa00 100%);
            color: #1a1a1a;
            box-shadow: 0 2px 10px rgba(255, 215, 0, 0.4);
        }

        .profile-role-badge.admin {
            background: linear-gradient(135deg, #ed4245 0%, #c73e3a 100%);
            color: white;
            box-shadow: 0 2px 10px rgba(237, 66, 69, 0.4);
        }

        .profile-role-badge.moderator {
            background: linear-gradient(135deg, #5865f2 0%, #4752c4 100%);
            color: white;
            box-shadow: 0 2px 10px rgba(88, 101, 242, 0.4);
        }

        .profile-role-badge.helper {
            background: linear-gradient(135deg, #3ba55d 0%, #2d8049 100%);
            color: white;
            box-shadow: 0 2px 10px rgba(59, 165, 93, 0.4);
        }

        .profile-role-badge.team {
            background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
            color: white;
            box-shadow: 0 2px 10px rgba(155, 89, 182, 0.4);
        }

        /* VIP номера (1-10) */
        .profile-tag-minimal.vip {
            background: linear-gradient(135deg, #ffd700 0%, #ffaa00 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
        }

        .profile-status-minimal {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            margin-top: 0.4rem;
            font-size: 0.8rem;
            color: #3ba55d;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }

        .status-dot.online {
            background: #3ba55d;
            box-shadow: 0 0 8px rgba(59, 165, 93, 0.6);
        }

        /* Stats Grid */
        .profile-stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.75rem;
            margin-bottom: 1rem;
        }

        .stat-item {
            text-align: center;
            padding: 1rem 0.5rem;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
        }

        .stat-number {
            display: block;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            font-family: 'JetBrains Mono', monospace;
            line-height: 1;
        }

        .stat-title {
            font-size: 0.65rem;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.03em;
            margin-top: 0.35rem;
        }

        /* Info List */
        .profile-info-list {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            overflow: hidden;
            margin-bottom: 1rem;
        }

        .info-row {
            display: flex;
            align-items: center;
            padding: 0.85rem 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        .info-row:last-child {
            border-bottom: none;
        }

        .info-row svg {
            width: 16px;
            height: 16px;
            color: var(--text-secondary);
            flex-shrink: 0;
            margin-right: 0.75rem;
        }

        .info-row .label {
            flex: 1;
            font-size: 0.85rem;
            color: var(--text-secondary);
        }

        .info-row .value {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-primary);
            font-family: 'JetBrains Mono', monospace;
        }

        .info-row .value.success {
            color: #4ade80;
        }

        .info-row .value.warning {
            color: #fbbf24;
        }

        /* Quick Actions - Single Button */
        .profile-quick-actions {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
        }

        .quick-action-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.85rem 2rem;
            border-radius: 10px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: 'Manrope', sans-serif;
            border: none;
        }

        .quick-action-btn.primary {
            background: linear-gradient(135deg, #5865F2, #4752C4);
            color: white;
        }

        .quick-action-btn.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(88, 101, 242, 0.4);
        }

        .quick-action-btn.secondary {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
        }

        .quick-action-btn.secondary:hover {
            border-color: var(--text-secondary);
            color: var(--text-primary);
        }

        .quick-action-btn.danger {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
        }

        .quick-action-btn.danger:hover {
            border-color: #ef4444;
            color: #ef4444;
            background: rgba(239, 68, 68, 0.1);
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* ═══════════════════════════════════════════════════════════════ */

        /* 🛡️ ADMIN PANEL STYLES                                          */
        /* ═══════════════════════════════════════════════════════════════ */

        .admin-panel-section {
            background: var(--secondary-bg);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 16px;
            padding: 1.5rem;
            margin-top: 2rem;
        }

        .admin-panel-section.hidden {
            display: none;
        }

        .admin-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        .admin-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 700;
            font-size: 1.1rem;
            color: #ef4444;
        }

        .admin-close-btn {
            background: none;
            border: none;
            color: var(--text-secondary);
            font-size: 1.25rem;
            cursor: pointer;
            padding: 0.25rem;
        }

        .admin-card {
            background: var(--tertiary-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1.25rem;
            margin-bottom: 1rem;
        }

        .admin-card.danger {
            border-color: rgba(239, 68, 68, 0.3);
        }

        .admin-card h4 {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .admin-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }

        .form-group label {
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        .admin-input {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 0.75rem 1rem;
            color: var(--text-primary);
            font-size: 0.9rem;
            transition: border-color 0.3s;
            font-family: 'Manrope', sans-serif;
        }

        .admin-input:focus {
            outline: none;
            border-color: var(--border-light);
        }

        .admin-input::placeholder {
            color: var(--text-muted);
        }

        .admin-plan-select {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .admin-plan-btn {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 0.5rem 1rem;
            color: var(--text-secondary);
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Manrope', sans-serif;
        }

        .admin-plan-btn:hover {
            border-color: var(--border-light);
        }

        .admin-plan-btn.active {
            background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2));
            border-color: rgba(251, 191, 36, 0.4);
            color: #fbbf24;
        }

        .admin-grant-btn {
            background: linear-gradient(135deg, #4ade80, #22c55e);
            border: none;
            color: #000;
            padding: 0.85rem 1.5rem;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Manrope', sans-serif;
        }

        .admin-grant-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(74, 222, 128, 0.3);
        }

        .admin-revoke-btn {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            border: none;
            color: white;
            padding: 0.75rem 1.25rem;
            border-radius: 10px;
            font-weight: 600;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Manrope', sans-serif;
        }

        .admin-revoke-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(239, 68, 68, 0.3);
        }

        .grants-list {
            max-height: 200px;
            overflow-y: auto;
        }

        .grants-empty {
            text-align: center;
            color: var(--text-muted);
            padding: 1rem;
            font-size: 0.85rem;
        }

        .grant-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem;
            background: var(--secondary-bg);
            border-radius: 8px;
            margin-bottom: 0.5rem;
        }

        .grant-item-user {
            font-size: 0.85rem;
            color: var(--text-primary);
            font-family: monospace;
        }

        .grant-item-plan {
            font-size: 0.75rem;
            color: #4ade80;
        }

        .grant-item-date {
            font-size: 0.7rem;
            color: var(--text-muted);
        }

        .admin-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15));
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 12px;
            padding: 0.85rem 1.5rem;
            color: #ef4444;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 1.5rem;
            font-family: 'Manrope', sans-serif;
        }

        .admin-toggle-btn:hover {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(220, 38, 38, 0.25));
        }

        .admin-toggle-btn.hidden {
            display: none;
        }

        @media (max-width: 600px) {
            .sub-status-glass {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }

            .status-main {
                flex-direction: column;
            }

            .admin-plan-select {
                justify-content: center;
            }
        }

        .payment-modal-new {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            width: 100%;
            max-width: 440px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalSlideUp {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }

            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .modal-close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.05);
            border: none;
            color: var(--text-secondary);
            width: 36px;
            height: 36px;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            z-index: 10;
        }

        .modal-close-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-primary);
        }

        .modal-header-new {
            text-align: center;
            padding: 2rem 2rem 1.5rem;
            border-bottom: 1px solid var(--border-color);
        }

        .modal-logo {
            position: relative;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
        }

        .modal-logo-glow {
            position: absolute;
            inset: -6px;
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            border-radius: 24px;
            filter: blur(20px);
            opacity: 0.4;
            z-index: -1;
            animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {

            0%,
            100% {
                opacity: 0.4;
                transform: scale(1);
            }

            50% {
                opacity: 0.6;
                transform: scale(1.05);
            }
        }

        .modal-logo-text {
            font-size: 1.75rem;
            font-weight: 900;
            color: #000;
        }

        .modal-header-new h2 {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.35rem;
        }

        .modal-plan-name {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        /* Order Summary */
        .order-summary {
            padding: 1.5rem 2rem 2rem;
        }

        .summary-card {
            background: var(--tertiary-bg);
            border-radius: 16px;
            padding: 1.25rem;
            margin-bottom: 1.5rem;
        }

        .summary-card .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.6rem 0;
        }

        .summary-card .summary-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .summary-card .summary-label svg {
            opacity: 0.6;
        }

        .summary-card .summary-value {
            font-weight: 600;
            color: var(--text-primary);
        }

        .summary-card .summary-divider {
            height: 1px;
            background: var(--border-color);
            margin: 0.5rem 0;
        }

        .summary-card .summary-row.total {
            padding-top: 0.75rem;
        }

        .summary-card .summary-row.total .summary-label {
            font-weight: 700;
            color: var(--text-primary);
        }

        .summary-total {
            text-align: right;
        }

        .total-usd {
            display: block;
            font-size: 1.35rem;
            font-weight: 800;
            color: var(--text-primary);
        }

        .total-rub {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* PayPal Button New */
        .paypal-btn-new {
            width: 100%;
            position: relative;
            padding: 1rem 1.5rem;
            background: linear-gradient(135deg, #003087, #009cde);
            border: none;
            border-radius: 14px;
            cursor: pointer;
            overflow: hidden;
            margin-bottom: 1rem;
        }

        .paypal-btn-bg {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transform: translateX(-100%);
            transition: transform 0.5s ease;
        }

        .paypal-btn-new:hover .paypal-btn-bg {
            transform: translateX(100%);
        }

        .paypal-btn-content {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            color: white;
            font-weight: 700;
            font-size: 1rem;
            font-family: 'Manrope', sans-serif;
        }

        .paypal-btn-new:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 156, 222, 0.3);
        }

        .payment-info-note {
            display: flex;
            gap: 0.75rem;
            align-items: flex-start;
            background: rgba(251, 191, 36, 0.08);
            border: 1px solid rgba(251, 191, 36, 0.2);
            border-radius: 12px;
            padding: 1rem;
            margin-bottom: 1rem;
        }

        .payment-info-note svg {
            color: #fbbf24;
            flex-shrink: 0;
            margin-top: 0.1rem;
        }

        .payment-info-note p {
            font-size: 0.8rem;
            color: var(--text-secondary);
            line-height: 1.5;
            margin: 0;
        }

        .secure-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        .secure-badge svg {
            color: #4ade80;
        }

        /* Success State */
        .success-state {
            padding: 2.5rem 2rem;
            text-align: center;
        }

        .success-animation {
            position: relative;
            width: 100px;
            height: 100px;
            margin: 0 auto 1.5rem;
        }

        .success-circle {
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(34, 197, 94, 0.2));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: successPop 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes successPop {
            0% {
                transform: scale(0);
            }

            50% {
                transform: scale(1.1);
            }

            100% {
                transform: scale(1);
            }
        }

        .success-circle svg {
            color: #4ade80;
            animation: checkDraw 0.5s ease 0.3s backwards;
        }

        @keyframes checkDraw {
            from {
                stroke-dashoffset: 50;
                opacity: 0;
            }

            to {
                stroke-dashoffset: 0;
                opacity: 1;
            }
        }

        .success-particles span {
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            animation: particleExplode 0.8s ease forwards;
        }

        .success-particles span:nth-child(1) {
            background: #fbbf24;
            top: 50%;
            left: 50%;
            --angle: 0deg;
        }

        .success-particles span:nth-child(2) {
            background: #4ade80;
            top: 50%;
            left: 50%;
            --angle: 60deg;
        }

        .success-particles span:nth-child(3) {
            background: #a855f7;
            top: 50%;
            left: 50%;
            --angle: 120deg;
        }

        .success-particles span:nth-child(4) {
            background: #f43f5e;
            top: 50%;
            left: 50%;
            --angle: 180deg;
        }

        .success-particles span:nth-child(5) {
            background: #3b82f6;
            top: 50%;
            left: 50%;
            --angle: 240deg;
        }

        .success-particles span:nth-child(6) {
            background: #10b981;
            top: 50%;
            left: 50%;
            --angle: 300deg;
        }

        @keyframes particleExplode {
            0% {
                transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(1);
                opacity: 1;
            }

            100% {
                transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-60px) scale(0);
                opacity: 0;
            }
        }

        .success-state h3 {
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .success-state p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 0.25rem;
        }

        .success-date {
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: 1.5rem !important;
        }

        .success-btn {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            border: none;
            color: #000;
            padding: 0.9rem 2rem;
            border-radius: 12px;
            font-weight: 700;
            font-size: 0.95rem;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            font-family: 'Manrope', sans-serif;
        }

        .success-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
        }

        /* Processing Overlay */
        .processing-overlay {
            position: absolute;
            inset: 0;
            background: rgba(17, 17, 17, 0.97);
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 100;
        }

        .processing-overlay.hidden {
            display: none;
        }

        .processing-spinner {
            position: relative;
            width: 60px;
            height: 60px;
            margin-bottom: 1.25rem;
        }

        .spinner-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid transparent;
            border-radius: 50%;
            animation: spinnerRotate 1.5s linear infinite;
        }

        .spinner-ring:nth-child(1) {
            border-top-color: #fbbf24;
            animation-delay: 0s;
        }

        .spinner-ring:nth-child(2) {
            border-right-color: #a855f7;
            animation-delay: 0.15s;
            width: 80%;
            height: 80%;
            top: 10%;
            left: 10%;
        }

        .spinner-ring:nth-child(3) {
            border-bottom-color: #4ade80;
            animation-delay: 0.3s;
            width: 60%;
            height: 60%;
            top: 20%;
            left: 20%;
        }

        @keyframes spinnerRotate {
            to {
                transform: rotate(360deg);
            }
        }

        .processing-overlay p {
            color: var(--text-primary);
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        .processing-hint {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        @media (max-width: 600px) {
            .sub-status-card {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }

            .sub-status-left {
                flex-direction: column;
            }

            .order-summary {
                padding: 1.25rem;
            }

            .modal-header-new {
                padding: 1.5rem 1.25rem 1.25rem;
            }
        }

        .plan-card {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            position: relative;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .plan-card:hover {
            border-color: var(--border-light);
            transform: translateY(-4px);
        }

        .plan-card.popular {
            border-color: rgba(168, 85, 247, 0.4);
            background: linear-gradient(135deg, var(--secondary-bg), rgba(168, 85, 247, 0.05));
        }

        .plan-card.popular:hover {
            border-color: rgba(168, 85, 247, 0.6);
            box-shadow: 0 10px 30px rgba(168, 85, 247, 0.15);
        }

        .plan-popular-badge {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #a855f7, #ec4899);
            color: white;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 0.3rem 0.75rem;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .plan-header {
            text-align: center;
            margin-bottom: 1.25rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        .plan-name {
            display: block;
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .plan-price {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--text-primary);
        }

        .plan-price small {
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--text-secondary);
        }

        .plan-features {
            list-style: none;
            padding: 0;
            margin: 0 0 1.25rem 0;
        }

        .plan-features li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-bottom: 0.6rem;
        }

        .plan-features li svg {
            color: #4ade80;
            flex-shrink: 0;
        }

        .plan-btn {
            width: 100%;
            padding: 0.75rem;
            border-radius: 10px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Manrope', sans-serif;
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-primary);
        }

        .plan-btn:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: var(--border-light);
        }

        .plan-btn.primary {
            background: var(--text-primary);
            border: none;
            color: var(--primary-bg);
        }

        .plan-btn.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.15);
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* 💳 PAYMENT MODAL STYLES                                          */
        /* ═══════════════════════════════════════════════════════════════ */

        .payment-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(8px);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            animation: fadeIn 0.3s ease;
        }

        .payment-modal-overlay.hidden {
            display: none;
        }

        .payment-modal {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            width: 100%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: scaleIn 0.3s ease;
        }

        .payment-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: transparent;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 8px;
            transition: all 0.2s ease;
            z-index: 10;
        }

        .payment-close:hover {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-primary);
        }

        .payment-header {
            text-align: center;
            padding: 2rem 2rem 1.5rem;
            border-bottom: 1px solid var(--border-color);
        }

        .payment-icon {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
        }

        .payment-icon svg {
            color: var(--text-primary);
        }

        .payment-header h2 {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .payment-plan-name {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        /* Payment Steps */
        .payment-steps {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 1.25rem 2rem;
            border-bottom: 1px solid var(--border-color);
        }

        .payment-step {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            opacity: 0.4;
            transition: all 0.3s ease;
        }

        .payment-step.active {
            opacity: 1;
        }

        .payment-step.completed {
            opacity: 1;
        }

        .payment-step.completed .step-number {
            background: #4ade80;
            border-color: #4ade80;
        }

        .step-number {
            width: 28px;
            height: 28px;
            border: 2px solid var(--border-light);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .payment-step.active .step-number {
            background: var(--text-primary);
            border-color: var(--text-primary);
            color: var(--primary-bg);
        }

        .step-name {
            font-size: 0.8rem;
            color: var(--text-secondary);
            font-weight: 500;
        }

        .payment-step.active .step-name {
            color: var(--text-primary);
        }

        .payment-step-line {
            width: 30px;
            height: 2px;
            background: var(--border-color);
        }

        /* Payment Content */
        .payment-content {
            padding: 1.5rem 2rem 2rem;
        }

        .payment-content.hidden {
            display: none;
        }

        /* Payment Methods */
        .payment-methods {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }

        .payment-method {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.25rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .payment-method:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: var(--border-light);
        }

        .payment-method.selected {
            background: rgba(255, 255, 255, 0.08);
            border-color: var(--text-primary);
        }

        .method-icon {
            width: 44px;
            height: 44px;
            background: var(--tertiary-bg);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .method-icon svg {
            color: var(--text-secondary);
        }

        .payment-method.selected .method-icon svg {
            color: var(--text-primary);
        }

        .method-info {
            flex: 1;
        }

        .method-name {
            display: block;
            font-weight: 600;
            color: var(--text-primary);
            font-size: 0.95rem;
        }

        .method-desc {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        .method-check {
            width: 24px;
            height: 24px;
            border: 2px solid var(--border-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
        }

        .method-check svg {
            opacity: 0;
            color: var(--primary-bg);
        }

        .payment-method.selected .method-check {
            background: var(--text-primary);
            border-color: var(--text-primary);
        }

        .payment-method.selected .method-check svg {
            opacity: 1;
        }

        /* Payment Forms */
        .payment-form {
            margin-bottom: 1.5rem;
        }

        .payment-form.hidden {
            display: none;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-group label {
            display: block;
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
        }

        .form-group input {
            width: 100%;
            padding: 0.9rem 1rem;
            background: var(--tertiary-bg);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            color: var(--text-primary);
            font-size: 1rem;
            font-family: 'JetBrains Mono', monospace;
            transition: all 0.2s ease;
        }

        .form-group input:focus {
            outline: none;
            border-color: var(--text-primary);
            background: var(--secondary-bg);
        }

        .form-group input::placeholder {
            color: var(--text-muted);
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        .card-input-wrapper {
            position: relative;
        }

        .card-brands {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            gap: 0.5rem;
        }

        .card-brand {
            font-size: 0.65rem;
            font-weight: 700;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            opacity: 0.3;
        }

        .card-brand.visa {
            background: #1a1f71;
            color: white;
        }

        .card-brand.mc {
            background: #eb001b;
            color: white;
        }

        .card-brand.mir {
            background: #4db45e;
            color: white;
        }

        /* SBP Form */
        .sbp-qr-container {
            text-align: center;
            padding: 1.5rem;
            background: white;
            border-radius: 12px;
            margin-bottom: 1rem;
        }

        .sbp-qr {
            margin-bottom: 1rem;
        }

        .sbp-instruction {
            color: #333;
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
        }

        .sbp-banks {
            display: flex;
            justify-content: center;
            gap: 0.75rem;
            flex-wrap: wrap;
        }

        .sbp-banks span {
            font-size: 0.75rem;
            color: #666;
            padding: 0.3rem 0.6rem;
            background: #f0f0f0;
            border-radius: 6px;
        }

        /* Redirect Notice */
        .redirect-notice {
            text-align: center;
            padding: 2rem;
        }

        .redirect-notice svg {
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }

        .redirect-notice p {
            color: var(--text-secondary);
            font-size: 0.95rem;
        }

        /* Crypto Form */
        .crypto-selector {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1.25rem;
        }

        .crypto-option {
            flex: 1;
            padding: 0.75rem;
            background: var(--tertiary-bg);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            color: var(--text-secondary);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: 'Manrope', sans-serif;
        }

        .crypto-option:hover {
            border-color: var(--border-light);
        }

        .crypto-option.selected {
            background: var(--text-primary);
            border-color: var(--text-primary);
            color: var(--primary-bg);
        }

        .crypto-address-container {
            background: var(--tertiary-bg);
            border-radius: 12px;
            padding: 1.25rem;
        }

        .crypto-address-container label {
            display: block;
            font-size: 0.8rem;
            color: var(--text-muted);
            margin-bottom: 0.5rem;
        }

        .crypto-address {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--secondary-bg);
            padding: 0.75rem;
            border-radius: 8px;
            margin-bottom: 1rem;
        }

        .crypto-address span {
            flex: 1;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.75rem;
            color: var(--text-primary);
            word-break: break-all;
        }

        .copy-btn {
            background: transparent;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 6px;
            transition: all 0.2s ease;
        }

        .copy-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-primary);
        }

        .crypto-amount {
            text-align: center;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        .crypto-amount strong {
            color: var(--text-primary);
            font-family: 'JetBrains Mono', monospace;
        }

        /* Payment Summary */
        .payment-summary {
            background: var(--tertiary-bg);
            border-radius: 12px;
            padding: 1rem 1.25rem;
            margin-bottom: 1.5rem;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        .summary-row.total {
            border-top: 1px solid var(--border-color);
            margin-top: 0.5rem;
            padding-top: 0.75rem;
            font-weight: 700;
            color: var(--text-primary);
            font-size: 1rem;
        }

        /* Payment Buttons */
        .payment-buttons {
            display: flex;
            gap: 1rem;
        }

        .payment-btn {
            flex: 1;
            padding: 1rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Manrope', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .payment-btn.primary {
            background: var(--text-primary);
            border: none;
            color: var(--primary-bg);
        }

        .payment-btn.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
        }

        .payment-btn.secondary {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-primary);
        }

        .payment-btn.secondary:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: var(--border-light);
        }

        /* Payment Success */
        .payment-success {
            text-align: center;
            padding: 1rem 0;
        }

        .success-icon {
            width: 80px;
            height: 80px;
            background: rgba(74, 222, 128, 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
        }

        .success-icon svg {
            color: #4ade80;
        }

        .payment-success h3 {
            font-size: 1.25rem;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .payment-success p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 0.25rem;
        }

        .success-expires {
            font-size: 0.85rem !important;
            color: var(--text-muted) !important;
            margin-bottom: 1.5rem !important;
        }

        /* Payment Processing */
        .payment-processing {
            position: absolute;
            inset: 0;
            background: rgba(17, 17, 17, 0.95);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            z-index: 100;
        }

        .payment-processing.hidden {
            display: none;
        }

        .processing-spinner {
            width: 48px;
            height: 48px;
            border: 3px solid var(--border-color);
            border-top-color: var(--text-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .payment-processing p {
            color: var(--text-secondary);
            font-size: 0.95rem;
        }

        @media (max-width: 600px) {
            .profile-minimal {
                padding: 1rem;
            }

            .profile-stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .profile-quick-actions {
                grid-template-columns: 1fr;
            }

            .payment-steps {
                padding: 1rem;
                gap: 0.25rem;
            }

            .step-name {
                display: none;
            }

            .payment-content {
                padding: 1.25rem;
            }

            .form-row {
                grid-template-columns: 1fr;
            }
        }


        /* Loading Animation */
        .typing-indicator {
            display: flex;
            gap: 0.4rem;
            padding: 1rem 0;
        }

        .typing-dot {
            width: 8px;
            height: 8px;
            background: var(--text-secondary);
            border-radius: 50%;
            animation: typingBounce 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typingBounce {

            0%,
            60%,
            100% {
                transform: translateY(0);
            }

            30% {
                transform: translateY(-10px);
            }
        }

        /* Responsive - Settings Modal */
        @media (max-width: 1024px) {
            .settings-content {
                padding: 1.5rem;
                max-height: 90vh;
            }

            .settings-header h2 {
                font-size: 1.4rem;
            }

            .setting-group {
                padding: 1rem;
            }

            .setting-control {
                flex-wrap: wrap;
            }
        }


        /* Navigation Menu - HIDDEN, using top logo instead */
        .main-nav {
            display: none;
        }

        .nav-container {
            display: none;
        }

        .nav-button {
            display: none;
        }

        /* Section Management */
        .section {
            display: none;
            animation: sectionFadeIn 0.4s ease-out;
        }

        .section.active {
            display: block;
        }

        @keyframes sectionFadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Profile Section - Enhanced Design */
        .profile-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        /* Profile Header - Premium Design */
        .profile-header {
            position: relative;
            margin-bottom: 2rem;
            border-radius: 24px;
            overflow: hidden;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .profile-header-bg {
            height: 180px;
            background:
                radial-gradient(ellipse at 20% 50%, rgba(88, 101, 242, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 50%, rgba(114, 137, 218, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 100%, rgba(67, 84, 199, 0.5) 0%, transparent 50%),
                linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            position: relative;
            overflow: hidden;
        }

        .profile-header-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background:
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.03;
            pointer-events: none;
        }

        .profile-header-bg::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: profileStars 60s linear infinite;
        }

        @keyframes profileStars {
            0% {
                transform: translate(0, 0);
            }

            100% {
                transform: translate(50px, 50px);
            }
        }

        .profile-header-content {
            padding: 0 2.5rem 2.5rem;
            margin-top: -70px;
            display: flex;
            align-items: flex-end;
            gap: 2rem;
            position: relative;
            z-index: 2;
        }

        .profile-avatar-large {
            position: relative;
            flex-shrink: 0;
        }

        .profile-avatar-img {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            border: 5px solid var(--primary-bg);
            background: linear-gradient(135deg, #5865F2 0%, #7289da 50%, #4752C4 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3.5rem;
            font-weight: 800;
            color: white;
            background-size: cover;
            background-position: center;
            box-shadow:
                0 10px 40px rgba(88, 101, 242, 0.4),
                0 0 0 4px rgba(88, 101, 242, 0.2);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .profile-avatar-large:hover .profile-avatar-img {
            transform: scale(1.05);
            box-shadow:
                0 15px 50px rgba(88, 101, 242, 0.5),
                0 0 0 6px rgba(88, 101, 242, 0.3);
        }

        .profile-avatar-large::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border-radius: 50%;
            background: conic-gradient(from 0deg, #5865F2, #7289da, #4752C4, #5865F2);
            z-index: -1;
            opacity: 0.5;
            animation: avatarGlow 4s linear infinite;
        }

        @keyframes avatarGlow {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .profile-status-indicator {
            position: absolute;
            bottom: 12px;
            right: 12px;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: #3ba55d;
            border: 5px solid var(--primary-bg);
            box-shadow: 0 0 20px rgba(59, 165, 93, 0.6);
            animation: statusPulse 2s ease-in-out infinite;
        }

        @keyframes statusPulse {

            0%,
            100% {
                box-shadow: 0 0 20px rgba(59, 165, 93, 0.6);
            }

            50% {
                box-shadow: 0 0 30px rgba(59, 165, 93, 0.9);
            }
        }

        .profile-header-info {
            flex: 1;
            padding-bottom: 1rem;
        }

        .profile-username {
            font-size: 2.2rem;
            font-weight: 800;
            margin: 0;
            color: var(--text-primary);
            letter-spacing: -0.02em;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .profile-discriminator {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin: 0.3rem 0 1rem;
            font-family: 'JetBrains Mono', monospace;
            opacity: 0.8;
        }

        .profile-badges {
            display: flex;
            gap: 0.6rem;
            flex-wrap: wrap;
        }

        .profile-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(88, 101, 242, 0.15);
            border: 1px solid rgba(88, 101, 242, 0.4);
            border-radius: 20px;
            font-size: 0.85rem;
            color: #7289da;
            font-weight: 600;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }

        .profile-badge:hover {
            background: rgba(88, 101, 242, 0.25);
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(88, 101, 242, 0.3);
        }

        .profile-badge svg {
            width: 16px;
            height: 16px;
        }

        .profile-badge.verified {
            background: rgba(59, 165, 93, 0.15);
            border-color: rgba(59, 165, 93, 0.4);
            color: #3ba55d;
        }

        .profile-badge.premium {
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 193, 7, 0.15));
            border-color: rgba(255, 215, 0, 0.4);
            color: #ffc107;
        }

        /* Profile Stats - Glass Morphism Design */
        .profile-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
            margin-bottom: 2rem;
        }

        @media (max-width: 1200px) {
            .profile-stats {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 600px) {
            .profile-stats {
                grid-template-columns: 1fr;
            }
        }

        .profile-stat-card {
            background: linear-gradient(135deg, rgba(30, 30, 46, 0.9), rgba(20, 20, 35, 0.95));
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            padding: 1.75rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.75rem;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }

        .profile-stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, transparent, rgba(88, 101, 242, 0.8), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .profile-stat-card:hover::before {
            opacity: 1;
        }

        .profile-stat-card:hover {
            border-color: rgba(88, 101, 242, 0.4);
            transform: translateY(-8px);
            box-shadow:
                0 20px 40px rgba(0, 0, 0, 0.4),
                0 0 40px rgba(88, 101, 242, 0.15);
        }

        .profile-stat-card:nth-child(1):hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(99, 179, 237, 0.2);
        }

        .profile-stat-card:nth-child(2):hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(236, 201, 75, 0.2);
        }

        .profile-stat-card:nth-child(3):hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(72, 187, 120, 0.2);
        }

        .profile-stat-card:nth-child(4):hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(237, 100, 166, 0.2);
        }

        .stat-icon {
            font-size: 2.8rem;
            flex-shrink: 0;
            filter: none;
            transition: transform 0.3s ease;
        }

        .profile-stat-card:hover .stat-icon {
            transform: scale(1.15);
        }

        .stat-content {
            flex: 1;
        }

        .stat-value {
            font-size: 2.4rem;
            font-weight: 800;
            color: var(--text-primary);
            line-height: 1;
            margin-bottom: 0.4rem;
            letter-spacing: -0.02em;
            font-family: 'JetBrains Mono', monospace;
        }

        .stat-label {
            font-size: 0.85rem;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 500;
        }

        /* Status Indicator */
        .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 0.5rem;
        }

        .status-indicator.online {
            background: #3ba55d;
            box-shadow: 0 0 12px rgba(59, 165, 93, 0.7);
            animation: statusBlink 2s ease-in-out infinite;
        }

        @keyframes statusBlink {

            0%,
            100% {
                opacity: 1;
            }

            50% {
                opacity: 0.7;
            }
        }

        .profile-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        /* Profile Cards - Modern Glass Design */
        .profile-card {
            background: linear-gradient(145deg, rgba(30, 30, 46, 0.95), rgba(20, 20, 35, 0.98));
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }

        .profile-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent);
            transition: left 0.5s ease;
        }

        .profile-card:hover::before {
            left: 100%;
        }

        .profile-card:hover {
            border-color: rgba(88, 101, 242, 0.4);
            transform: translateY(-6px);
            box-shadow:
                0 20px 50px rgba(0, 0, 0, 0.4),
                0 0 30px rgba(88, 101, 242, 0.1);
        }

        .profile-card h3 {
            font-size: 1.15rem;
            margin-bottom: 1.25rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text-primary);
            font-weight: 700;
        }

        .profile-card-icon {
            width: 28px;
            height: 28px;
            opacity: 0.8;
            padding: 5px;
            background: rgba(88, 101, 242, 0.15);
            border-radius: 8px;
            color: #7289da;
        }

        .profile-info {
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
        }

        .profile-info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.25rem;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 12px;
            font-size: 0.95rem;
            border: 1px solid rgba(255, 255, 255, 0.03);
            transition: all 0.3s ease;
        }

        .profile-info-item:hover {
            background: rgba(88, 101, 242, 0.1);
            border-color: rgba(88, 101, 242, 0.2);
        }

        .profile-info-label {
            color: var(--text-secondary);
            font-weight: 500;
        }

        .profile-info-value {
            font-weight: 700;
            color: var(--text-primary);
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.9rem;
        }

        /* Profile Actions */
        .profile-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }

        .profile-action-btn {
            flex: 1;
            min-width: 200px;
            padding: 1rem 1.5rem;
            border-radius: 14px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            font-family: 'Manrope', sans-serif;
        }

        .profile-action-btn.primary {
            background: linear-gradient(135deg, #5865F2, #4752C4);
            border: none;
            color: white;
        }

        .profile-action-btn.primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(88, 101, 242, 0.4);
        }

        .profile-action-btn.secondary {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-primary);
        }

        .profile-action-btn.secondary:hover {
            border-color: rgba(239, 68, 68, 0.5);
            color: #ef4444;
            background: rgba(239, 68, 68, 0.1);
        }

        /* Activity Chart Placeholder */
        .activity-chart {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 16px;
            padding: 1.5rem;
            margin-top: 1rem;
        }

        .activity-bars {
            display: flex;
            gap: 6px;
            align-items: flex-end;
            height: 80px;
        }

        .activity-bar {
            flex: 1;
            background: linear-gradient(to top, #5865F2, #7289da);
            border-radius: 4px 4px 0 0;
            min-height: 8px;
            transition: all 0.3s ease;
        }

        .activity-bar:hover {
            opacity: 0.8;
        }

        .activity-labels {
            display: flex;
            justify-content: space-between;
            margin-top: 0.75rem;
            font-size: 0.75rem;
            color: var(--text-secondary);
        }

        /* Complaints Section */
        .complaint-form {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* ROLLBACK SECTION - New Design                                    */
        /* ═══════════════════════════════════════════════════════════════ */

        .rollback-container {
            max-width: 700px;
            margin: 0 auto;
        }

        .rollback-header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .rollback-header h2 {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .rollback-subtitle {
            color: var(--text-secondary);
            font-size: 0.95rem;
        }

        /* Type Selector */
        .rollback-type-selector {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }

        .type-option {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 0.5rem;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .type-option:hover {
            border-color: rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.03);
        }

        .type-option.active {
            border-color: rgba(255, 255, 255, 0.5);
            background: rgba(255, 255, 255, 0.1);
        }

        .type-option svg {
            width: 24px;
            height: 24px;
            color: var(--text-secondary);
        }

        .type-option.active svg {
            color: #ffffff;
        }

        .type-option span {
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--text-secondary);
            text-align: center;
        }

        .type-option.active span {
            color: var(--text-primary);
        }

        /* File Upload Area */
        .file-upload-area {
            border: 2px dashed var(--border-color);
            border-radius: 16px;
            padding: 3rem 2rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 1.5rem;
            background: rgba(255, 255, 255, 0.01);
        }

        .file-upload-area:hover {
            border-color: rgba(255, 255, 255, 0.4);
            background: rgba(255, 255, 255, 0.03);
        }

        .file-upload-area.dragover {
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.08);
        }

        .upload-icon {
            margin-bottom: 1rem;
        }

        .upload-icon svg {
            width: 48px;
            height: 48px;
            color: var(--text-secondary);
        }

        .file-upload-area:hover .upload-icon svg {
            color: #ffffff;
        }

        .upload-text {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }

        .upload-title {
            font-size: 1rem;
            font-weight: 500;
            color: var(--text-primary);
        }

        .upload-formats {
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        /* File Preview */
        .file-preview {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1rem;
            margin-bottom: 1.5rem;
        }

        .file-preview-info {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .file-preview-icon {
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .file-preview-icon svg {
            width: 24px;
            height: 24px;
            color: #ffffff;
        }

        .file-preview-details {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
        }

        .file-preview-name {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .file-preview-size {
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        .file-remove-btn {
            width: 36px;
            height: 36px;
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
        }

        .file-remove-btn:hover {
            border-color: #ef4444;
            background: rgba(239, 68, 68, 0.1);
        }

        .file-remove-btn svg {
            width: 16px;
            height: 16px;
            color: var(--text-secondary);
        }

        .file-remove-btn:hover svg {
            color: #ef4444;
        }

        /* Progress Bar */
        .file-progress {
            height: 4px;
            background: var(--border-color);
            border-radius: 2px;
            margin-top: 1rem;
            overflow: hidden;
        }

        .file-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #ffffff, #f0f0f0);
            border-radius: 2px;
            transition: width 0.3s ease;
        }

        /* Form Group */
        .rollback-form-group {
            margin-bottom: 1.5rem;
        }

        .rollback-label {
            display: block;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
        }

        .rollback-textarea {
            width: 100%;
            min-height: 100px;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1rem;
            color: var(--text-primary);
            font-family: 'Manrope', sans-serif;
            font-size: 0.95rem;
            resize: vertical;
            transition: all 0.2s ease;
        }

        .rollback-textarea:focus {
            outline: none;
            border-color: rgba(255, 255, 255, 0.4);
        }

        .rollback-textarea::placeholder {
            color: var(--text-secondary);
        }

        /* Submit Button */
        .rollback-submit-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
            border: none;
            border-radius: 12px;
            color: #2c3e50;
            font-family: 'Manrope', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .rollback-submit-btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
        }

        .rollback-submit-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .rollback-submit-btn svg {
            width: 20px;
            height: 20px;
        }

        /* Status */
        .rollback-status {
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            font-weight: 500;
        }

        .rollback-status.success {
            background: rgba(34, 197, 94, 0.1);
            border: 1px solid rgba(34, 197, 94, 0.3);
            color: #22c55e;
        }

        .rollback-status.error {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #ef4444;
        }

        /* Responsive */
        @media (max-width: 600px) {
            .rollback-type-selector {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* 🏠 LANDING / HOME PAGE                                           */
        /* ═══════════════════════════════════════════════════════════════ */

        .landing-section {
            min-height: auto;
            padding-top: 20px;
            padding-bottom: 3rem;
            overflow: visible;
        }

        /* Hero Section */
        .hero-section {
            text-align: center;
            padding: 1rem 0 3rem;
            position: relative;
            overflow: visible;
        }

        .hero-logo {
            width: 100px;
            height: 100px;
            margin: 0 auto 1.25rem;
            position: relative;
            animation: heroFloat 4s ease-in-out infinite;
        }

        .hero-logo img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        }

        @keyframes heroFloat {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-15px);
            }
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            font-size: 0.8rem;
            color: #ffffff;
            margin-bottom: 1.5rem;
            animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {

            0%,
            100% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
            }

            50% {
                box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
            }
        }

        .hero-badge svg {
            width: 14px;
            height: 14px;
        }

        .hero-title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 50%, #ffffff 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: titleShine 4s ease infinite;
        }

        @keyframes titleShine {

            0%,
            100% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }
        }

        .hero-subtitle {
            font-size: 1.1rem;
            color: var(--text-secondary);
            max-width: 500px;
            margin: 0 auto 2rem;
            line-height: 1.6;
        }

        .hero-cta {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .cta-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
            border: none;
            border-radius: 12px;
            color: #2c3e50;
            font-family: 'Manrope', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .cta-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(255, 255, 255, 0.4);
        }

        .cta-primary svg {
            width: 20px;
            height: 20px;
        }

        .cta-secondary {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 1rem 2rem;
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 12px;
            color: var(--text-primary);
            font-family: 'Manrope', sans-serif;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .cta-secondary:hover {
            border-color: var(--text-secondary);
            background: rgba(255, 255, 255, 0.03);
        }

        /* Features Grid */
        .features-section {
            padding: 2.5rem 0;
        }

        .section-label {
            text-align: center;
            font-size: 0.85rem;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 0.75rem;
        }

        .section-title {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 3rem;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .feature-card {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #ffffff, #f0f0f0);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .feature-card:hover {
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-5px);
        }

        .feature-card:hover::before {
            opacity: 1;
        }

        .feature-icon {
            width: 56px;
            height: 56px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.25rem;
        }

        .feature-icon svg {
            width: 28px;
            height: 28px;
            color: #ffffff;
        }

        .feature-title {
            font-size: 1.15rem;
            font-weight: 700;
            margin-bottom: 0.6rem;
        }

        .feature-desc {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.6;
        }

        /* Demo Chat Preview */
        .demo-section {
            padding: 2.5rem 0;
        }

        .demo-container {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            overflow: hidden;
            max-width: 700px;
            margin: 0 auto;
        }

        .demo-header {
            padding: 1rem 1.5rem;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .demo-dots {
            display: flex;
            gap: 6px;
        }

        .demo-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--border-color);
        }

        .demo-dot:nth-child(1) {
            background: #ef4444;
        }

        .demo-dot:nth-child(2) {
            background: #eab308;
        }

        .demo-dot:nth-child(3) {
            background: #22c55e;
        }

        .demo-title {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-left: auto;
        }

        .demo-chat {
            padding: 1.5rem;
            min-height: 300px;
        }

        .demo-message {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            animation: demoFadeIn 0.5s ease;
        }

        @keyframes demoFadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .demo-message.user {
            flex-direction: row-reverse;
        }

        .demo-avatar {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85rem;
            font-weight: 600;
            flex-shrink: 0;
        }

        .demo-message.bot .demo-avatar {
            background: linear-gradient(135deg, #ffffff, #e0e0e0);
            color: #2c3e50;
        }

        .demo-bubble {
            background: var(--primary-bg);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 0.9rem 1.2rem;
            max-width: 80%;
        }

        .demo-message.user .demo-bubble {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .demo-text {
            font-size: 0.9rem;
            line-height: 1.6;
        }

        .demo-typing {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.9rem 1.2rem;
        }

        .typing-dot {
            width: 8px;
            height: 8px;
            background: var(--text-secondary);
            border-radius: 50%;
            animation: typingBounce 1.4s ease-in-out infinite;
        }

        .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typingBounce {

            0%,
            60%,
            100% {
                transform: translateY(0);
            }

            30% {
                transform: translateY(-6px);
            }
        }

        /* Stats Section */
        .stats-section {
            padding: 2rem 0;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
        }

        .stat-card {
            text-align: center;
            padding: 1.25rem;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
        }

        .stat-number-big {
            font-size: 2rem;
            font-weight: 800;
            font-family: 'JetBrains Mono', monospace;
            background: linear-gradient(135deg, #ffffff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-label {
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin-top: 0.25rem;
        }

        /* CTA Bottom */
        .cta-section {
            padding: 2.5rem 0 1.5rem;
            text-align: center;
        }

        .cta-box {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(240, 240, 240, 0.1) 100%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 2rem 1.5rem;
            position: relative;
            overflow: hidden;
        }

        .cta-box::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
            animation: ctaGlow 6s ease-in-out infinite;
        }

        @keyframes ctaGlow {

            0%,
            100% {
                transform: translate(0, 0);
            }

            50% {
                transform: translate(10%, 10%);
            }
        }

        .cta-box-title {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            position: relative;
        }

        .cta-box-subtitle {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            position: relative;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* 🌐 SOCIAL SECTION                                                */
        /* ═══════════════════════════════════════════════════════════════ */

        .social-section {
            padding: 2.5rem 0 1rem;
            text-align: center;
        }

        .social-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .social-subtitle {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 2rem;
        }

        .social-card {
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            padding: 1.25rem 2rem;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            color: var(--text-primary);
        }

        .social-card:hover {
            border-color: #5865F2;
            transform: translateY(-4px);
            box-shadow: 0 15px 40px rgba(88, 101, 242, 0.2);
        }

        .social-icon {
            width: 48px;
            height: 48px;
            background: rgba(88, 101, 242, 0.1);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .social-icon svg {
            width: 28px;
            height: 28px;
            color: #5865F2;
        }

        .social-info {
            text-align: left;
        }

        .social-name {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 0.15rem;
        }

        .social-desc {
            font-size: 0.85rem;
            color: var(--text-secondary);
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* 📜 SCROLL ANIMATIONS                                             */
        /* ═══════════════════════════════════════════════════════════════ */

        .scroll-reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }

        .scroll-reveal-left {
            opacity: 0;
            transform: translateX(-60px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-reveal-left.revealed {
            opacity: 1;
            transform: translateX(0);
        }

        .scroll-reveal-right {
            opacity: 0;
            transform: translateX(60px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-reveal-right.revealed {
            opacity: 1;
            transform: translateX(0);
        }

        .scroll-reveal-scale {
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-reveal-scale.revealed {
            opacity: 1;
            transform: scale(1);
        }

        /* Staggered animations */
        .scroll-reveal[data-delay="1"] {
            transition-delay: 0.1s;
        }

        .scroll-reveal[data-delay="2"] {
            transition-delay: 0.2s;
        }

        .scroll-reveal[data-delay="3"] {
            transition-delay: 0.3s;
        }

        .scroll-reveal[data-delay="4"] {
            transition-delay: 0.4s;
        }

        .scroll-reveal-left[data-delay="1"],
        .scroll-reveal-right[data-delay="1"] {
            transition-delay: 0.1s;
        }

        .scroll-reveal-left[data-delay="2"],
        .scroll-reveal-right[data-delay="2"] {
            transition-delay: 0.2s;
        }

        /* Responsive */
        @media (max-width: 780px) {
            .hero-title {
                font-size: 3rem;
            }

            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .features-grid {
                grid-template-columns: 1fr;
            }
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--text-primary);
        }

        .form-input,
        .form-textarea,
        .form-select {
            width: 100%;
            background: var(--primary-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 0.875rem;
            color: var(--text-primary);
            font-family: 'Manrope', sans-serif;
            font-size: 0.95rem;
            transition: all 0.3s ease;
        }

        .form-textarea {
            min-height: 120px;
            resize: vertical;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }

        .form-button {
            background: var(--accent-color);
            color: var(--primary-bg);
            border: none;
            padding: 1rem 2rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
        }

        .form-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }

        /* Rules Section */
        .rules-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .rule-category {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .rule-category:hover {
            border-color: var(--accent-color);
            transform: translateY(-4px);
            box-shadow: 0 10px 40px rgba(255, 255, 255, 0.05);
        }

        .rule-category-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.75rem;
        }

        .rule-category-icon {
            font-size: 2rem;
        }

        .rule-category-title {
            font-size: 1.1rem;
            font-weight: 600;
        }

        .rule-category-desc {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.5;
        }

        /* History Section */
        .history-list {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            overflow: hidden;
        }

        .history-item {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            transition: background 0.3s ease;
        }

        .history-item:last-child {
            border-bottom: none;
        }

        .history-item:hover {
            background: var(--primary-bg);
        }

        .history-item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
        }

        .history-item-title {
            font-weight: 600;
            font-size: 1rem;
        }

        .history-item-time {
            font-size: 0.85rem;
            color: var(--text-secondary);
            font-family: 'JetBrains Mono', monospace;
        }

        .history-item-content {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.5;
        }

        /* Footer */
        footer {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 3rem 2rem;
            margin-top: 4rem;
            color: var(--text-secondary);
            font-size: 0.95rem;
            border-top: 1px solid var(--border-color);
            animation: fadeIn 2s ease-out 1s both;
        }

        footer p {
            margin: 0;
            line-height: 1.6;
        }

        footer p:first-child {
            font-weight: 500;
            font-size: 1rem;
            color: var(--text-primary);/* ... existing code ... */

            /* Modern Input Box */
            .chat-input-box {
                background: transparent;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                backdrop-filter: none;
            }

            .chat-input-box::before {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: 20px;
                padding: 1px;
                background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.3));
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            }

            .chat-input-box:focus-within::before {
                opacity: 1;
            }

            .chat-input-box:hover {
                border-color: rgba(255, 255, 255, 0.15);
            }

            .chat-input-box:focus-within {
                border-color: transparent;
                box-shadow: 0 0 30px rgba(96, 165, 250, 0.15), 0 10px 40px rgba(0, 0, 0, 0.2);
            }

            /* Input Area - Main */
            .chat-input-main {
                padding: 1.25rem 1.5rem;
                min-height: 60px;
                border-radius: 20px 20px 0 0;
                background: transparent;
            }

            .chat-input {
                width: 100%;
                background: transparent;
                border: none;
                padding: 0;
                color: var(--text-primary);
                font-family: 'Manrope', sans-serif;
                font-size: 1rem;
                line-height: 1.6;
                resize: none;
            }

            .chat-input:focus {
                outline: none;
            }

            .chat-input::placeholder {
                color: var(--text-muted);
                transition: color 0.3s ease;
            }

            .chat-input:focus::placeholder {
                color: var(--text-secondary);
            }

            /* Bottom Bar */
            .chat-input-bottom {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.75rem 1.25rem;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                background: transparent;
                border-radius: 0 0 20px 20px;
            }

            /* ... existing code ... *//* ... existing code ... */

            /* Modern Input Box */
            .chat-input-box {
                background: transparent;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                backdrop-filter: none;
            }

            .chat-input-box::before {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: 20px;
                padding: 1px;
                background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.3));
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            }

            .chat-input-box:focus-within::before {
                opacity: 1;
            }

            .chat-input-box:hover {
                border-color: rgba(255, 255, 255, 0.15);
            }

            .chat-input-box:focus-within {
                border-color: transparent;
                box-shadow: 0 0 30px rgba(96, 165, 250, 0.15), 0 10px 40px rgba(0, 0, 0, 0.2);
            }

            /* Input Area - Main */
            .chat-input-main {
                padding: 1.25rem 1.5rem;
                min-height: 60px;
                border-radius: 20px 20px 0 0;
                background: transparent;
            }

            .chat-input {
                width: 100%;
                background: transparent;
                border: none;
                padding: 0;
                color: var(--text-primary);
                font-family: 'Manrope', sans-serif;
                font-size: 1rem;
                line-height: 1.6;
                resize: none;
            }

            .chat-input:focus {
                outline: none;
            }

            .chat-input::placeholder {
                color: var(--text-muted);
                transition: color 0.3s ease;
            }

            .chat-input:focus::placeholder {
                color: var(--text-secondary);
            }

            /* Bottom Bar */
            .chat-input-bottom {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.75rem 1.25rem;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                background: transparent;
                border-radius: 0 0 20px 20px;
            }

            /* ... existing code ... */
        }

        /* Responsive */

        footer a {
            color: var(--accent-color);
            text-decoration: none;
            transition: opacity 0.3s ease;
        }

        footer a:hover {
            opacity: 0.7;
        }

        /* Responsive */

        /* Responsive Design - Consolidated */
        @media (max-width: 768px) {
            .chat-input-wrapper {
                flex-direction: column;
            }

            .chat-messages {
                height: 400px;
            }

            .login-container {
                padding: 2rem;
            }

            .logo-img {
                height: 60px;
                width: 60px;
            }

            .model-buttons {
                grid-template-columns: 1fr;
            }

            .nav-button {
                justify-content: center;
            }

            .nav-container {
                flex-direction: column;
            }

            .quick-questions {
                grid-template-columns: 1fr;
            }

            .send-button {
                width: 100%;
            }

            .user-name {
                font-size: 0.85rem;
            }

            .user-profile-badge {
            display: flex !important;
            opacity: 1 !important;
            visibility: visible !important;
                padding: 0.5rem 0.75rem;
                right: 1rem;
                top: 1rem;
            }

            .user-status {
                font-size: 0.7rem;
            }

            h1 {
                font-size: 2.5rem;
            }

            .profile-dropdown {
                right: 1rem;
                top: 5rem;
                min-width: 200px;
            }

            .dropdown-item {
                font-size: 0.85rem;
                padding: 0.65rem 0.85rem;
            }

        }

        /* 
           Wider layout & Enhanced visuals 
        */
        .profile-minimal {
            max-width: 1200px !important;
            padding: 2.5rem !important;
        }

            transform: translateY(-12px) scale(1.02) !important;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.01)) !important;
            border-color: #d4af37 !important;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.15) !important;
        }

        .plan-elite:hover .plan-price {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }

        /* Feature Icons Pop */
        .feature-elite {
            transition: transform 0.3s ease, background 0.3s ease !important;
        }

        .feature-elite:hover {
            background: rgba(212, 175, 55, 0.15) !important;
            transform: translateY(-5px);
        }

        .feature-elite .f-icon {
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            display: inline-block;
        }

        .feature-elite:hover .f-icon {
            transform: scale(1.4) rotate(10deg);
        }

        /* Button Pulse */
        @keyframes btnGlowPulse {
            0% {
                box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.6);
            }

            70% {
                box-shadow: 0 0 0 12px rgba(212, 175, 55, 0);
            }

            100% {
                box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
            }
        }

        .lt-btn {
            animation: btnGlowPulse 2s infinite !important;
            position: relative;
            overflow: hidden;
        }

        .lt-btn::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            animation: btnShine 3s infinite;
        }

        @keyframes btnShine {
            0% {
                left: -100%;
            }

            20% {
                left: 100%;
            }

            100% {
                left: 100%;
            }
        }

        /* в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ */
        /* рџ›‘ DISABLE ANIMATIONS FOR LIFETIME BLOCK                        */
        /* в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ */
        .lifetime-elite,
        .lifetime-elite .lifetime-rays,
        .lifetime-elite .lt-btn,
        .lifetime-elite .lt-btn::after,
        .lifetime-elite .lifetime-icon-elite,
        .lifetime-elite:hover,
        .lifetime-elite:hover .lifetime-icon-elite {
            animation: none !important;
            transform: none !important;
        }

        /* Keep simple hover scale if desired, but user said "remove animation". 
           If they meant just the continuous ones, I should perhaps leave hover. 
           But "РЈР±РµСЂРё Р°РЅРёРјР°С†РёСЋ" is strong. Let's kill all animations on that block to be safe. */

        .lifetime-elite:hover {
            border-color: #d4af37 !important;
            /* Keep border color change */
        }

        /* ═══════════════════════════════════════════════════════════════
           💎 COMPACT SUBSCRIPTION BADGE IN PROFILE
           ═══════════════════════════════════════════════════════════════ */

        .profile-subscription-badge {
            display: none !important;
        }

        /* Показываем бейдж только в секции подписки */
        #subscriptionSection .profile-subscription-badge,
        .subscription-info .profile-subscription-badge {
            display: inline-flex !important;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.9rem;
            border-radius: 10px;
            font-size: 0.85rem;
            font-weight: 700;
            margin-top: 0.65rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            letter-spacing: 0.03em;
            text-transform: uppercase;
        }

        #subscriptionSection .profile-subscription-badge.free,
        .subscription-info .profile-subscription-badge.free {
            background: linear-gradient(135deg, rgba(100, 100, 100, 0.15), rgba(80, 80, 80, 0.15));
            border: 1px solid rgba(120, 120, 120, 0.35);
            color: #aaa;
        }

        #subscriptionSection .profile-subscription-badge.pro,
        .subscription-info .profile-subscription-badge.pro {
            background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2));
            border: 1px solid rgba(96, 165, 250, 0.5);
            color: #c4b5fd;
            box-shadow: 0 0 20px rgba(96, 165, 250, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        #subscriptionSection .profile-subscription-badge.lifetime,
        .subscription-info .profile-subscription-badge.lifetime {
            background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2));
            border: 1px solid rgba(251, 191, 36, 0.5);
            color: #fcd34d;
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .profile-sub-icon {
            font-size: 1rem;
            filter: drop-shadow(0 0 4px currentColor);
        }

        .profile-sub-text {
            font-size: 0.8rem;
            letter-spacing: 0.08em;
            font-weight: 800;
        }

        /* ═══════════════════════════════════════════════════════════════
           📋 COMPLAINT FORM & HISTORY STYLES
           ═══════════════════════════════════════════════════════════════ */

        .complaint-form {
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            padding: 3rem;
            transition: all 0.3s ease;
        }

        .complaint-form:hover {
            background: rgba(20, 20, 20, 0.8);
            border-color: var(--border-glow);
            box-shadow: 0 8px 32px var(--glow);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
            color: var(--text-primary);
            font-size: 0.95rem;
            font-weight: 600;
        }

        .form-label svg {
            color: var(--accent-primary);
        }

        .form-input,
        .form-textarea {
            width: 100%;
            padding: 1rem;
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            color: var(--text-primary);
            font-size: 0.95rem;
            font-family: 'Manrope', sans-serif;
            transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
            outline: none;
            border-color: var(--border-glow);
            box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.15);
            background: rgba(20, 20, 20, 0.8);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
            color: var(--text-secondary);
        }

        .form-textarea {
            resize: vertical;
            min-height: 150px;
        }

        .submit-complaint-btn {
            width: 100%;
            padding: 1.25rem;
            background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
            border: none;
            border-radius: 12px;
            color: white;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            transition: all 0.3s ease;
            margin-top: 1rem;
        }

        .submit-complaint-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 32px rgba(96, 165, 250, 0.5);
        }

        .submit-complaint-btn svg {
            width: 20px;
            height: 20px;
        }

        .complaint-status {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: 12px;
            display: none;
            animation: slideIn 0.3s ease;
        }

        .complaint-status.success {
            display: block;
            background: rgba(16, 185, 129, 0.15);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: var(--accent-success);
        }

        .complaint-status.error {
            display: block;
            background: rgba(239, 68, 68, 0.15);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #ef4444;
        }

        /* History Styles */
        .history-container {
            max-width: 900px;
            margin: 0 auto;
        }

        .history-empty {
            text-align: center;
            padding: 4rem 2rem;
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 24px;
        }

        .empty-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: rgba(96, 165, 250, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .empty-icon svg {
            width: 40px;
            height: 40px;
            color: var(--accent-primary);
        }

        .history-empty h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: var(--text-primary);
        }

        .history-empty p {
            font-size: 1rem;
            color: var(--text-secondary);
            max-width: 500px;
            margin: 0 auto;
        }

        .history-item {
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            transition: all 0.3s ease;
        }

        .history-item:hover {
            background: rgba(20, 20, 20, 0.8);
            border-color: var(--border-glow);
            box-shadow: 0 4px 16px var(--glow);
            transform: translateY(-2px);
        }

        .history-item-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        .history-item-type {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--accent-primary);
        }

        .history-item-date {
            font-size: 0.85rem;
            color: var(--text-secondary);
        }

        .history-item-content {
            color: var(--text-primary);
            line-height: 1.6;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-10px);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .complaint-form {
                padding: 2rem 1.5rem;
            }

            .form-input,
            .form-textarea {
                padding: 0.875rem;
                font-size: 0.9rem;
            }

            .submit-complaint-btn {
                padding: 1rem;
                font-size: 0.95rem;
            }
        }
         #start-screen {
            display: none;
        }

    
        /* ═══════════════════════════════════════════════════════════════
           VERTICAL SCROLL INDICATOR - LEFT SIDE
           ═══════════════════════════════════════════════════════════════ */
        .vertical-scroll-indicator {
            position: fixed;
            left: 40px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
        }

        .scroll-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }

        .scroll-dot:hover {
            background: rgba(255, 255, 255, 0.5);
            transform: scale(1.2);
        }

        .scroll-dot.active {
            background: #60a5fa;
            box-shadow: 0 0 20px rgba(96, 165, 250, 0.6),
                        0 0 40px rgba(96, 165, 250, 0.4);
            height: 40px;
            border-radius: 4px;
        }

        .scroll-dot.active::before {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: 6px;
            background: radial-gradient(circle, rgba(96, 165, 250, 0.3), transparent);
            z-index: -1;
        }

        @media (max-width: 768px) {
            .vertical-scroll-indicator {
                display: none;
            }

        /* Scroll dot hover effects */
        .scroll-dot:not(.active):hover {
            background: rgba(96, 165, 250, 0.6);
        }

        .scroll-dot {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s ease;
        }

        @media (max-width: 992px) {
            .vertical-scroll-indicator {
                left: 20px;
            }
        }

        @media (max-width: 640px) {
            .vertical-scroll-indicator {
                left: 15px;
            }
            
            .scroll-dot {
                width: 6px;
                height: 6px;
            }
            
            .scroll-dot.active {
                height: 30px;
            }
        }
        }


        /* ═══════════════════════════════════════════════════════════════
           DISCORD LINK BUTTON - LEFT BOTTOM
           ═══════════════════════════════════════════════════════════════ */
        
        .discord-link-button {
            position: fixed;
            left: 2rem;
            bottom: 2rem;
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, 
                rgba(88, 101, 242, 0.15) 0%, 
                rgba(114, 137, 218, 0.15) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(88, 101, 242, 0.3);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            text-decoration: none;
        }

        .discord-link-button svg {
            width: 28px;
            height: 28px;
            color: rgba(88, 101, 242, 0.9);
            transition: all 0.3s ease;
        }

        .discord-link-button::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(135deg, 
                rgba(88, 101, 242, 0.4) 0%, 
                rgba(114, 137, 218, 0.4) 100%);
            border-radius: 18px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }

        .discord-link-button:hover {
            transform: translateY(-4px) scale(1.05);
            background: linear-gradient(135deg, 
                rgba(88, 101, 242, 0.25) 0%, 
                rgba(114, 137, 218, 0.25) 100%);
            border-color: rgba(88, 101, 242, 0.5);
            box-shadow: 
                0 8px 24px rgba(88, 101, 242, 0.3),
                0 0 40px rgba(88, 101, 242, 0.2);
        }

        .discord-link-button:hover::before {
            opacity: 1;
        }

        .discord-link-button:hover svg {
            color: rgba(88, 101, 242, 1);
            transform: scale(1.1) rotate(-5deg);
        }

        .discord-link-button:active {
            transform: translateY(-2px) scale(1.02);
        }

        /* Анимация пульсации */
        @keyframes discordPulse {
            0%, 100% {
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
            }
            50% {
                box-shadow: 
                    0 4px 16px rgba(0, 0, 0, 0.3),
                    0 0 20px rgba(88, 101, 242, 0.4);
            }
        }

        .discord-link-button {
            animation: discordPulse 3s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .discord-link-button {
                left: 1rem;
                bottom: 1rem;
                width: 48px;
                height: 48px;
            }

            .discord-link-button svg {
                width: 24px;
                height: 24px;
            }
        }

        
        
        /* ═══════════════════════════════════════════════════════════════
           NEWS SECTION - В СТИЛЕ ЖАЛОБ
           ═══════════════════════════════════════════════════════════════ */
        
        /* News Grid */
        .news-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 1.5rem;
            max-width: 1400px;
            margin: 0 auto;
        }
        
        /* News Card - в стиле complaint-form */
        .news-card {
            background: rgba(15, 15, 20, 0.6);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 0;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            animation: fadeInUp 0.5s ease-out forwards;
            opacity: 0;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .news-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, 
                transparent 0%,
                rgba(96, 165, 250, 0.6) 50%,
                transparent 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .news-card:hover {
            transform: translateY(-8px);
            border-color: rgba(96, 165, 250, 0.3);
            box-shadow: 
                0 20px 60px rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(96, 165, 250, 0.2);
        }

        .news-card:hover::before {
            opacity: 1;
        }

        /* News Header Bar */
        .news-header-bar {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem;
            background: rgba(10, 10, 15, 0.4);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .news-card .news-icon {
            font-size: 2rem;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(96, 165, 250, 0.1);
            border: 1px solid rgba(96, 165, 250, 0.2);
            border-radius: 12px;
            flex-shrink: 0;
            transition: all 0.3s ease;
        }

        .news-card:hover .news-icon {
            background: rgba(96, 165, 250, 0.2);
            border-color: rgba(96, 165, 250, 0.4);
            transform: scale(1.05);
        }

        .news-category {
            padding: 0.4rem 0.9rem;
            background: linear-gradient(135deg, 
                rgba(96, 165, 250, 0.15) 0%, 
                rgba(59, 130, 246, 0.15) 100%);
            border: 1px solid rgba(96, 165, 250, 0.3);
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: rgba(96, 165, 250, 1);
            transition: all 0.3s ease;
        }

        .news-card:hover .news-category {
            background: linear-gradient(135deg, 
                rgba(96, 165, 250, 0.25) 0%, 
                rgba(59, 130, 246, 0.25) 100%);
            border-color: rgba(96, 165, 250, 0.5);
        }

        /* News Content */
        .news-content {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .news-card-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.3;
            margin: 0;
            transition: color 0.3s ease;
        }

        .news-card:hover .news-card-title {
            color: rgba(96, 165, 250, 1);
        }

        .news-card-text {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.6;
            margin: 0;
        }

        /* News Tags */
        .news-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }

        .news-tag {
            padding: 0.35rem 0.75rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .news-card:hover .news-tag {
            background: rgba(96, 165, 250, 0.1);
            border-color: rgba(96, 165, 250, 0.3);
            color: rgba(96, 165, 250, 0.9);
        }

        /* News Footer */
        .news-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
            background: rgba(10, 10, 15, 0.4);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .news-author,
        .news-date {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.5);
        }

        .news-author svg,
        .news-date svg {
            width: 16px;
            height: 16px;
            opacity: 0.6;
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .news-grid {
                grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            }
        }
        
        @media (max-width: 768px) {
            .news-grid {
                grid-template-columns: 1fr;
            }
        }

           TEAM SECTION - Discord Style Cards
           ═══════════════════════════════════════════════════════════════ */
        
        /* Team Grid - Vertical Layout */
        .team-grid {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Team Member Card - Improved Design */
        .team-member-card {
            background: linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
            border: 1px solid rgba(60, 60, 60, 0.4);
            border-radius: 16px;
            padding: 1.75rem;
            display: flex;
            align-items: center;
            gap: 1.75rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .team-member-card::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 5px;
            background: linear-gradient(180deg, rgba(96, 165, 250, 0.9), rgba(59, 130, 246, 0.9));
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .team-member-card::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 16px;
            padding: 1px;
            background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .team-member-card:hover {
            background: linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(15, 15, 15, 1) 100%);
            border-color: rgba(96, 165, 250, 0.4);
            transform: translateX(6px) translateY(-2px);
            box-shadow: 0 8px 30px rgba(96, 165, 250, 0.2), 0 4px 15px rgba(0, 0, 0, 0.5);
        }

        .team-member-card:hover::before {
            opacity: 1;
        }

        .team-member-card:hover::after {
            opacity: 1;
        }

        /* Avatar Container */
        .team-member-avatar-container {
            position: relative;
            flex-shrink: 0;
        }

        /* Avatar - Enhanced */
        .team-member-avatar {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            border: 4px solid rgba(40, 40, 40, 0.6);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .team-member-card:hover .team-member-avatar {
            border-color: rgba(96, 165, 250, 0.6);
            box-shadow: 0 0 25px rgba(96, 165, 250, 0.4), 
                        0 0 40px rgba(96, 165, 250, 0.2),
                        0 4px 20px rgba(0, 0, 0, 0.5);
            transform: scale(1.05);
        }

        .team-member-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .team-member-avatar-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #60a5fa, #3b82f6);
            font-size: 2rem;
            font-weight: 700;
            color: white;
        }

        /* Status Indicator - Enhanced */
        .team-member-status {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: #23a55a;
            border: 4px solid rgba(15, 15, 15, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease;
        }

        .team-member-card:hover .team-member-status {
            transform: scale(1.1);
        }

        /* Member Info Container */
        .team-member-info {
            flex: 1;
            min-width: 0;
        }

        /* Member Name - Enhanced */
        .team-member-name {
            font-size: 1.35rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            letter-spacing: -0.02em;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        /* Member Meta */
        .team-member-meta {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex-wrap: wrap;
            margin-bottom: 0.5rem;
        }

        .team-member-id {
            font-size: 0.85rem;
            color: var(--text-secondary);
            font-weight: 500;
        }

        .team-member-role {
            display: inline-flex;
            align-items: center;
            padding: 0.35rem 0.85rem;
            border-radius: 10px;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }

        .team-member-card:hover .team-member-role {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .role-owner {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ef4444 100%);
            color: white;
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.4), 
                        0 4px 15px rgba(239, 68, 68, 0.3);
        }

        .team-member-card:hover .role-owner {
            box-shadow: 0 0 25px rgba(245, 158, 11, 0.6), 
                        0 4px 20px rgba(239, 68, 68, 0.4);
        }

        .role-team {
            background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
            color: white;
            box-shadow: 0 0 20px rgba(96, 165, 250, 0.4), 
                        0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .team-member-card:hover .role-team {
            box-shadow: 0 0 25px rgba(96, 165, 250, 0.6), 
                        0 4px 20px rgba(59, 130, 246, 0.4);
        }

        .team-member-bio {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.5;
        }

        @media (max-width: 768px) {
            .team-member-card {
                flex-direction: column;
                text-align: center;
            }
            
            .team-member-name {
                white-space: normal;
            }
        }


        /* Loading Animation */
        .team-loading {
            text-align: center;
            padding: 3rem;
            color: #888;
        }

        .loading-spinner {
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 4px solid rgba(96, 165, 250, 0.2);
            border-top-color: #60a5fa;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .loading-text {
            font-size: 1rem;
            color: var(--text-secondary);
            margin-top: 1rem;
        }

        /* Fade in animation for cards */
        .team-member-card {
            animation: fadeInUp 0.5s ease-out forwards;
            opacity: 0;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .team-member-card:nth-child(1) { animation-delay: 0.05s; }
        .team-member-card:nth-child(2) { animation-delay: 0.1s; }
        .team-member-card:nth-child(3) { animation-delay: 0.15s; }
        .team-member-card:nth-child(4) { animation-delay: 0.2s; }
        .team-member-card:nth-child(5) { animation-delay: 0.25s; }
        .team-member-card:nth-child(6) { animation-delay: 0.3s; }

        /* ═══════════════════════════════════════════════════════════════
           NEW TEAM CARDS - Similar to uploaded image style
           ═══════════════════════════════════════════════════════════════ */
        
        .team-card {
            position: relative;
            background: var(--team-card-bg, rgba(30, 30, 30, 0.6));
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid var(--team-card-border, rgba(255, 255, 255, 0.1));
            backdrop-filter: blur(10px);
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
        }

        .team-card:hover {
            transform: translateY(-10px);
            border-color: var(--team-card-hover-border, rgba(96, 165, 250, 0.4));
            box-shadow: 0 20px 40px var(--team-card-hover-shadow, rgba(96, 165, 250, 0.2));
        }

        .team-card[data-role="owner"]:hover {
            border-color: var(--owner-card-hover-border, rgba(255, 215, 0, 0.5));
            box-shadow: 0 20px 40px var(--owner-card-hover-shadow, rgba(255, 215, 0, 0.3));
        }

        .team-card[data-role="senior"]:hover {
            border-color: var(--senior-card-hover-border, rgba(168, 85, 247, 0.5));
            box-shadow: 0 20px 40px var(--senior-card-hover-shadow, rgba(168, 85, 247, 0.3));
        }

        .team-card:nth-child(1) { animation-delay: 0.1s; }
        .team-card:nth-child(2) { animation-delay: 0.2s; }
        .team-card:nth-child(3) { animation-delay: 0.3s; }
        .team-card:nth-child(4) { animation-delay: 0.4s; }
        .team-card:nth-child(5) { animation-delay: 0.5s; }

        .team-card-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 150px;
            background: var(--team-card-gradient, linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(59, 130, 246, 0.1)));
            transition: all 0.4s ease;
        }

        .team-card[data-role="owner"] .team-card-bg {
            background: var(--owner-card-gradient, linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 193, 7, 0.1)));
        }

        .team-card[data-role="senior"] .team-card-bg {
            background: var(--senior-card-gradient, linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(126, 58, 242, 0.1)));
        }

        .team-card:hover .team-card-bg {
            height: 180px;
        }

        .team-card-content {
            position: relative;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
        }

        .team-avatar-wrapper {
            position: relative;
            width: 140px;
            height: 140px;
        }

        .team-avatar {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 4px solid var(--team-avatar-border, rgba(96, 165, 250, 0.3));
            object-fit: cover;
            transition: all 0.3s ease;
            background: rgba(40, 40, 40, 0.8);
        }

        .team-card[data-role="owner"] .team-avatar {
            border-color: var(--owner-avatar-border, rgba(255, 215, 0, 0.5));
            box-shadow: 0 0 30px var(--owner-avatar-glow, rgba(255, 215, 0, 0.3));
        }

        .team-card[data-role="senior"] .team-avatar {
            border-color: var(--senior-avatar-border, rgba(168, 85, 247, 0.5));
            box-shadow: 0 0 30px var(--senior-avatar-glow, rgba(168, 85, 247, 0.3));
        }

        .team-card:hover .team-avatar {
            transform: scale(1.05);
            border-width: 5px;
        }

        .team-avatar-placeholder {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 4px solid rgba(96, 165, 250, 0.3);
        }

        .team-card[data-role="owner"] .team-avatar-placeholder {
            background: linear-gradient(135deg, #ffd700, #ffc107);
            border-color: rgba(255, 215, 0, 0.5);
        }

        .team-card[data-role="senior"] .team-avatar-placeholder {
            background: linear-gradient(135deg, #a855f7, #7e3af2);
            border-color: rgba(168, 85, 247, 0.5);
        }

        .team-role-badge {
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            backdrop-filter: blur(10px);
            border: 2px solid;
            transition: all 0.3s ease;
            white-space: nowrap;
        }

        .team-role-badge.owner {
            background: var(--owner-badge-bg, linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 193, 7, 0.15)));
            border-color: var(--owner-badge-border, rgba(255, 215, 0, 0.5));
            color: var(--owner-badge-color, #ffd700);
            box-shadow: 0 4px 15px var(--owner-badge-shadow, rgba(255, 215, 0, 0.3));
        }

        .team-role-badge.senior {
            background: var(--senior-badge-bg, linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(126, 58, 242, 0.15)));
            border-color: var(--senior-badge-border, rgba(168, 85, 247, 0.5));
            color: var(--senior-badge-color, #a855f7);
            box-shadow: 0 4px 15px var(--senior-badge-shadow, rgba(168, 85, 247, 0.3));
        }

        .team-role-badge.team {
            background: var(--team-badge-bg, linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.15)));
            border-color: var(--team-badge-border, rgba(96, 165, 250, 0.5));
            color: var(--team-badge-color, #60a5fa);
            box-shadow: 0 4px 15px var(--team-badge-shadow, rgba(96, 165, 250, 0.3));
        }

        .team-card:hover .team-role-badge {
            transform: translateX(-50%) translateY(-3px);
        }

        .team-info {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            padding-top: 1rem;
        }

        .team-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            margin: 0;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .team-title {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--team-title-color, #60a5fa);
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .team-card[data-role="owner"] .team-title {
            color: var(--owner-title-color, #ffd700);
        }

        .team-card[data-role="senior"] .team-title {
            color: var(--senior-title-color, #a855f7);
        }

        .team-description {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--text-secondary);
            margin: 0;
            max-width: 100%;
        }

        @media (max-width: 768px) {
            .team-card-content {
                padding: 1.5rem;
            }

            .team-avatar-wrapper {
                width: 120px;
                height: 120px;
            }

            .team-name {
                font-size: 1.3rem;
            }

            .team-title {
                font-size: 0.85rem;
            }

            .team-description {
                font-size: 0.9rem;
            }
        }

        /* Responsive Team Grid - Mobile */
        @media (max-width: 1024px) {
            .features-section > div[style*="grid-template-columns: repeat(3"] {
                grid-template-columns: repeat(2, minmax(280px, 350px)) !important;
            }
        }

        @media (max-width: 768px) {
            .features-section > div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
                max-width: 400px !important;
            }
        }

</style>
</head>

<body>
    <!-- 🛡️ INITIAL LOADER - Защита от черного экрана -->
    <div id="initialLoader">
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Загрузка BadgRules...</div>
            <div class="loader-subtext">Пожалуйста, подождите</div>
            <div class="loader-error" id="loaderError">
                <div class="error-title">⚠️ Ошибка загрузки</div>
                <div class="error-message">
                    Возможные причины:<br>
                    • Блокировка провайдером (попробуйте VPN)<br>
                    • Проблемы с подключением к Discord<br>
                    • Медленное интернет-соединение
                </div>
                <button class="retry-button" onclick="location.reload()">Перезагрузить страницу</button>
            </div>
        </div>
    </div>

    <!-- VERTICAL SCROLL INDICATOR - LEFT SIDE -->
    <div class="vertical-scroll-indicator">
        <div class="scroll-dot active" data-section="chat"></div>
        <div class="scroll-dot" data-section="complaints"></div>
        <div class="scroll-dot" data-section="history"></div>
        <div class="scroll-dot" data-section="news"></div>
        <div class="scroll-dot" data-section="team"></div>
        <div class="scroll-dot" data-section="social"></div>
    </div>

    <!-- 🌊 GLOBAL GRADIENT MESH BACKGROUND -->
    <div class="global-gradient-mesh">
        <div class="global-blue-ambient"></div>
        <div class="global-mesh-gradient global-gradient-1"></div>
        <div class="global-mesh-gradient global-gradient-2"></div>
        <div class="global-mesh-gradient global-gradient-3"></div>
        <div class="global-mesh-gradient global-gradient-4"></div>
    </div>

    <!-- 🎭 НОВЫЙ ФОН - КРУГ С ПЕРСОНАЖЕМ -->
    <div class="hero-background-circle"></div>
    <canvas id="lightningCanvas" class="lightning-canvas"></canvas>
    <div class="hero-character-badger">
        <img src="images/logo1.png" alt="BadgRules Character">
    </div>

    <!-- ✨ GLOBAL PARTICLES CANVAS -->
    <canvas id="globalParticlesCanvas" class="global-particles-canvas"></canvas>

    <!-- 📦 MAIN CONTENT WRAPPER -->
    <div class="main-content">

    <div class="background-grid"></div>

    <!-- Top Left Logo with Dropdown -->
    <div class="top-logo" id="topLogo">
        <!-- Logo with neon effect -->
        <div class="logo-main">
            <img src="images/logo.png" alt="Logo" class="logo-btn-img">
            <span class="logo-btn-text">BadgRules</span>
        </div>

        <!-- Горизонтальная навигация -->
        <div class="logo-dropdown show" id="logoDropdown">
            <div class="logo-menu-item active" data-section="chat" onclick="selectLogoMenu('chat')">
                <span>Чат с AI</span>
            </div>
            <div class="logo-menu-item" data-section="complaints" onclick="selectLogoMenu('complaints')">
                <span>Анализ отката</span>
            </div>
            <div class="logo-menu-item" data-section="history" onclick="selectLogoMenu('history')">
                <span>История</span>
            </div>
            <div class="logo-menu-item" data-section="news" onclick="selectLogoMenu('news')">
                <span>Новости</span>
            </div>
            <div class="logo-menu-item" data-section="team" onclick="selectLogoMenu('team')">
                <span>Команда</span>
            </div>
            <div class="logo-menu-item" data-section="social" onclick="selectLogoMenu('social')">
                <span>Соц. сети</span>
            </div>
        </div>

        <!-- User Profile Badge - в навигации справа -->
        <div class="user-profile-badge hidden" id="userProfileBadge" onclick="toggleProfileMenu(event)" title="Открыть меню">
            <div class="sub-badge-wrapper">
                <div class="user-avatar" id="userAvatar">G</div>
                <div class="sub-badge-mini free" id="subBadgeMini">💎</div>
            </div>
            <div class="user-info">
                <div class="user-name" id="userName">Гость</div>
                <div class="user-status" id="userServerBadge">
                    <span class="user-server-badge" id="serverBadge">Сервер</span>
                    <span class="subscription-status-badge free" id="subscriptionStatusBadge">
                        <span class="subscription-status-icon">⚡</span>
                        <span id="subscriptionStatusText">FREE</span>
                    </span>
                </div>
            </div>
            <svg class="dropdown-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>
    </div>

    <!-- Login Screen -->
    <div class="login-overlay" id="loginOverlay">
        <div class="login-container">
            <div class="login-logo">
                <img src="images/logo.png" alt="BadgRules Logo" class="login-logo-img">
                <h2>BADGRULES</h2>
            </div>

            <!-- Step Indicator -->
            <div class="step-indicator">
                <div class="step-dot active" id="stepDot1"></div>
                <div class="step-dot" id="stepDot2"></div>
                <div class="step-dot" id="stepDot3"></div>
            </div>

            <!-- Step 1: Project Selection -->
            <div class="login-step active" id="step1">
                <div class="login-content">
                    <h3>Выберите проект</h3>
                    <p class="login-subtitle">На каком проекте вы играете?</p>

                    <div class="project-selector">
                        <div class="project-card gta5rp" onclick="selectProject('gta5rp')" data-project="gta5rp">
                            <div class="project-check">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div class="project-icon"></div>
                            <div class="project-name">GTA 5 RP</div>
                            <div class="project-desc">22 сервера</div>
                            <a href="https://forum.gta5rp.com" target="_blank" class="project-forum-link"
                                onclick="event.stopPropagation()">forum.gta5rp.com</a>
                        </div>

                        <div class="project-card majestic" onclick="selectProject('majestic')" data-project="majestic">
                            <div class="project-check">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div class="project-icon"></div>
                            <div class="project-name">Majestic RP</div>
                            <div class="project-desc">16 серверов</div>
                            <a href="https://forum.majestic-rp.ru" target="_blank" class="project-forum-link"
                                onclick="event.stopPropagation()">forum.majestic-rp.ru</a>
                        </div>
                    </div>

                    <button class="nav-btn next" id="nextStep1" disabled onclick="goToStep(2)">
                        <span>Далее</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Step 2: Server Selection -->
            <div class="login-step" id="step2">
                <div class="login-content">
                    <h3 id="serverStepTitle">Выберите сервер</h3>
                    <p class="login-subtitle" id="serverStepSubtitle">На каком сервере вы играете?</p>

                    <div class="server-selector" id="serverSelector">
                        <div class="server-grid" id="serverGrid">
                            <!-- Servers will be populated by JavaScript -->
                        </div>
                    </div>

                    <div class="step-navigation">
                        <button class="nav-btn back" onclick="goToStep(1)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                            <span>Назад</span>
                        </button>
                        <button class="nav-btn next" id="nextStep2" disabled onclick="goToStep(3)">
                            <span>Далее</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Step 3: Login -->
            <div class="login-step" id="step3">
                <div class="login-content">
                    <h3>Авторизация</h3>
                    <p class="login-subtitle">Войдите для полного доступа к функциям</p>

                    <!-- Selected Project/Server Info -->
                    <div class="selected-info" id="selectedInfo">
                        <div class="selected-info-icon" id="selectedIcon">🎮</div>
                        <div class="selected-info-text">
                            <div class="selected-info-project" id="selectedProjectText">GTA 5 RP</div>
                            <div class="selected-info-server" id="selectedServerText">Downtown</div>
                        </div>
                        <button class="change-selection" onclick="goToStep(1)">Изменить</button>
                    </div>

                    <button class="discord-login-button" onclick="loginWithDiscord()">
                        <svg class="discord-icon" viewBox="0 0 71 55" fill="none">
                            <path
                                d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                                fill="currentColor" />
                        </svg>
                        Войти через Discord
                    </button>

                    <div class="login-divider">
                        <span>или</span>
                    </div>

                    <button class="guest-button" onclick="continueAsGuest()">
                        Продолжить как гость
                    </button>

                    <div class="step-navigation" style="margin-top: 1rem;">
                        <button class="nav-btn back" onclick="goToStep(2)"
                            style="flex: 0 0 auto; padding: 0.75rem 1.25rem;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                            <span>Назад</span>
                        </button>
                    </div>

                    <p class="login-footer">
                        Входя в систему, вы соглашаетесь с <a href="#">условиями использования</a> и <a
                            href="#">политикой конфиденциальности</a>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <header>
        <div class="logo-container">
            <!-- ЗАМЕНИТЕ ПУТЬ НИЖЕ НА СВОЙ ЛОГОТИП -->
            <img src="images/logo.png" alt="BadgRules Logo" class="logo-img">
            <h1>BADGRULES</h1>
        </div>
        <p class="subtitle">BudgeRulse — твой помощник в сфере правил серверов GTA5.</p>
    </header>

    <!-- Profile Dropdown Menu -->
    <div class="profile-dropdown hidden" id="profileDropdown">
        <div class="dropdown-server-info">
            <div class="dropdown-server-label">Текущий сервер</div>
            <div class="dropdown-server-value" id="dropdownServerValue">
                <span id="dropdownServerIcon">🎮</span>
                <span id="dropdownServerName">Downtown</span>
            </div>
        </div>
        <button class="dropdown-item" onclick="showSection('profile'); closeProfileMenu()">
            <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Личный кабинет</span>
        </button>
        <button class="dropdown-item" onclick="showSubscriptionSection(); closeProfileMenu()">
            <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            <span>💎 Подписка</span>
        </button>
        <button class="dropdown-item" onclick="changeServer(); closeProfileMenu()">
            <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                </path>
            </svg>
            <span>Сменить сервер</span>
        </button>
        <button class="dropdown-item" onclick="addBotForFamily(); closeProfileMenu()">
            <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Бот проекта</span>
        </button>
        <div class="dropdown-divider"></div>
        <button class="dropdown-item logout-item" onclick="logout(); closeProfileMenu()">
            <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Выйти</span>
        </button>
    </div>

    <!-- 💎 REVOLUTIONARY SUBSCRIPTION SECTION -->
    <div class="subscription-section hidden" id="subscriptionSection">
        <!-- Particles Background -->
        <canvas id="particlesCanvas" class="particles-canvas"></canvas>
        
        <!-- Gradient Mesh Background -->
        <div class="gradient-mesh">
            <div class="mesh-gradient gradient-1"></div>
            <div class="mesh-gradient gradient-2"></div>
            <div class="mesh-gradient gradient-3"></div>
            <div class="mesh-gradient gradient-4"></div>
        </div>

        <!-- Close Button -->
        <button class="sub-close-btn" onclick="closeSubscriptionSection()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>

        <div class="sub-container">
            <!-- Header -->
            <div class="sub-header">
                <div class="sub-header-badge">
                    <span class="badge-dot"></span>
                    <span>PREMIUM ACCESS</span>
                </div>
                <h1 class="sub-title">
                    <span class="title-word" style="--index: 0">Раз</span><span class="title-word" style="--index: 1">бло</span><span class="title-word" style="--index: 2">ки</span><span class="title-word" style="--index: 3">руй</span>
                    <br>
                    <span class="title-highlight">свой потенциал</span>
                </h1>
                <p class="sub-subtitle">Выберите план и получите мгновенный доступ к премиум функциям</p>
                
                <!-- Status -->
                <div class="sub-status" id="subStatusCard">
                    <div class="status-glow"></div>
                    <div class="status-content">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <div class="status-text">
                            <span class="status-label">Статус</span>
                            <span class="status-value" id="statusValueText">FREE</span>
                        </div>
                        <div class="status-badge" id="statusBadgeIcon">⚡</div>
                    </div>
                </div>
            </div>

            <!-- Cards -->
            <div class="sub-cards-grid">
                
                <!-- 1 месяц - 200₽ -->
                <div class="sub-pricingcard compact" data-plan="1month">
                    <div class="card-glow"></div>
                    <div class="card-shine"></div>
                    
                    <div class="card-header">
                        <h3 class="card-name">1 месяц</h3>
                        <p class="card-desc">Попробуйте</p>
                    </div>

                    <div class="card-price">
                        <div class="price-wrapper">
                            <span class="price-currency">₽</span>
                            <span class="price-amount">200</span>
                        </div>
                        <div class="price-subtext">Скидка: 0%</div>
                    </div>

                    <button class="card-btn" onclick="openPaymentModal('1month')">
                        <span class="btn-text">Начать</span>
                        <span class="btn-icon">→</span>
                    </button>
                </div>

                <!-- 3 месяца - 450₽ -->
                <div class="sub-pricingcard compact" data-plan="3month">
                    <div class="card-glow"></div>
                    <div class="card-shine"></div>
                    <div class="discount-badge">-25%</div>
                    
                    <div class="card-header">
                        <h3 class="card-name">3 месяца</h3>
                        <p class="card-desc">Популярный</p>
                    </div>

                    <div class="card-price">
                        <div class="price-wrapper">
                            <span class="price-currency">₽</span>
                            <span class="price-amount">450</span>
                        </div>
                        <div class="price-subtext">≈ 150₽/мес</div>
                    </div>

                    <button class="card-btn" onclick="openPaymentModal('3month')">
                        <span class="btn-text">Начать</span>
                        <span class="btn-icon">→</span>
                    </button>
                </div>

                <!-- 6 месяцев - 800₽ -->
                <div class="sub-pricingcard compact featured" data-plan="6month">
                    <div class="card-glow"></div>
                    <div class="card-shine"></div>
                    <div class="featured-badge">🔥 ВЫГОДНО</div>
                    <div class="discount-badge">-33%</div>
                    
                    <div class="card-header">
                        <h3 class="card-name">6 месяцев</h3>
                        <p class="card-desc">Лучший выбор</p>
                    </div>

                    <div class="card-price">
                        <div class="price-wrapper">
                            <span class="price-currency">₽</span>
                            <span class="price-amount">800</span>
                        </div>
                        <div class="price-subtext">≈ 133₽/мес</div>
                    </div>

                    <button class="card-btn" onclick="openPaymentModal('6month')">
                        <span class="btn-text">Начать</span>
                        <span class="btn-icon">→</span>
                    </button>
                </div>

                <!-- Годовая - 1500₽ -->
                <div class="sub-pricingcard compact" data-plan="1year">
                    <div class="card-glow"></div>
                    <div class="card-shine"></div>
                    <div class="discount-badge">-37.5%</div>
                    
                    <div class="card-header">
                        <h3 class="card-name">Годовая</h3>
                        <p class="card-desc">Максимум выгоды</p>
                    </div>

                    <div class="card-price">
                        <div class="price-wrapper">
                            <span class="price-currency">₽</span>
                            <span class="price-amount">1500</span>
                        </div>
                        <div class="price-subtext">≈ 125₽/мес</div>
                    </div>

                    <button class="card-btn" onclick="openPaymentModal('1year')">
                        <span class="btn-text">Начать</span>
                        <span class="btn-icon">→</span>
                    </button>
                </div>

                <!-- Бессрочная - 2500₽ -->
                <div class="sub-pricingcard compact premium" data-plan="lifetime">
                    <div class="card-glow"></div>
                    <div class="card-shine"></div>
                    <div class="featured-badge premium-badge">♾️ LIFETIME</div>
                    
                    <div class="card-header">
                        <h3 class="card-name">Бессрочная</h3>
                        <p class="card-desc">Навсегда</p>
                    </div>

                    <div class="card-price">
                        <div class="price-wrapper">
                            <span class="price-currency">₽</span>
                            <span class="price-amount">2500</span>
                        </div>
                        <div class="price-subtext">Один платеж</div>
                    </div>

                    <button class="card-btn premium" onclick="openPaymentModal('lifetime')">
                        <span class="btn-text">Купить навсегда</span>
                        <span class="btn-icon">♾️</span>
                    </button>
                </div>

            </div>
            <!-- Comparison Table -->
            <div class="comparison-section">
                <h3 class="comparison-title">Сравнение планов</h3>
                <div class="comparison-table">
                    <div class="comparison-row header">
                        <div class="comparison-cell">Функции</div>
                        <div class="comparison-cell">Базовый</div>
                        <div class="comparison-cell highlight">Про</div>
                        <div class="comparison-cell">Вечный</div>
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell feature">AI Ассистент</div>
                        <div class="comparison-cell">✓</div>
                        <div class="comparison-cell highlight">✓</div>
                        <div class="comparison-cell">✓</div>
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell feature">Поддержка 24/7</div>
                        <div class="comparison-cell">✓</div>
                        <div class="comparison-cell highlight">✓</div>
                        <div class="comparison-cell">✓</div>
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell feature">Premium значок</div>
                        <div class="comparison-cell">—</div>
                        <div class="comparison-cell highlight">✓</div>
                        <div class="comparison-cell">✓</div>
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell feature">Ранний доступ</div>
                        <div class="comparison-cell">—</div>
                        <div class="comparison-cell highlight">✓</div>
                        <div class="comparison-cell">✓</div>
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell feature">Legendary статус</div>
                        <div class="comparison-cell">—</div>
                        <div class="comparison-cell highlight">—</div>
                        <div class="comparison-cell">✓</div>
                    </div>
                </div>
            </div>

            <!-- Trust Section -->
            <div class="trust-section">
                <div class="trust-item">
                    <div class="trust-icon">🔒</div>
                    <div class="trust-text">
                        <div class="trust-title">Безопасные платежи</div>
                        <div class="trust-desc">256-bit SSL шифрование</div>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">💳</div>
                    <div class="trust-text">
                        <div class="trust-title">Все способы оплаты</div>
                        <div class="trust-desc">Карты, электронные кошельки</div>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">⚡</div>
                    <div class="trust-text">
                        <div class="trust-title">Мгновенная активация</div>
                        <div class="trust-desc">Доступ сразу после оплаты</div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Bot Settings Modal -->
    <div class="settings-modal" id="settingsModal">
        <div class="settings-content">
            <div class="settings-header">
                <h2>⚙️ Настройки Discord бота</h2>
                <button class="close-modal" onclick="closeBotSettings()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="setting-group">
                <div class="setting-title">🛡️ Авто-модерация</div>
                <div class="setting-description">
                    Автоматическое удаление сообщений, нарушающих правила сервера
                </div>
                <div class="setting-control">
                    <div class="toggle-switch active" onclick="toggleSetting(this, 'autoMod')">
                        <div class="toggle-slider"></div>
                    </div>
                    <span>Включено</span>
                </div>
            </div>

            <div class="setting-group">
                <div class="setting-title">👋 Приветственные сообщения</div>
                <div class="setting-description">
                    Отправлять приветствие новым участникам сервера
                </div>
                <div class="setting-control">
                    <div class="toggle-switch active" onclick="toggleSetting(this, 'welcomeMsg')">
                        <div class="toggle-slider"></div>
                    </div>
                    <span>Включено</span>
                </div>
                <div class="setting-control">
                    <input type="text" class="input-field" id="welcomeChannel" placeholder="Канал (#general)"
                        value="#general">
                </div>
            </div>

            <div class="setting-group">
                <div class="setting-title">🤖 AI ответы на вопросы</div>
                <div class="setting-description">
                    Бот будет автоматически отвечать на вопросы о правилах
                </div>
                <div class="setting-control">
                    <div class="toggle-switch active" onclick="toggleSetting(this, 'aiResponses')">
                        <div class="toggle-slider"></div>
                    </div>
                    <span>Включено</span>
                </div>
            </div>

            <div class="setting-group">
                <div class="setting-title">📝 Канал для жалоб</div>
                <div class="setting-description">
                    Укажите канал, куда будут отправляться жалобы
                </div>
                <div class="setting-control">
                    <input type="text" class="input-field" id="complaintChannel" placeholder="#жалобы" value="#жалобы">
                </div>
            </div>

            <div class="setting-group">
                <div class="setting-title">🌐 Язык бота</div>
                <div class="setting-description">
                    Выберите язык интерфейса бота
                </div>
                <div class="setting-control">
                    <select class="select-input" id="botLanguage">
                        <option value="ru" selected>Русский 🇷🇺</option>
                        <option value="en">English 🇬🇧</option>
                        <option value="ua">Українська 🇺🇦</option>
                    </select>
                </div>
            </div>

            <div class="setting-group">
                <div class="setting-title">💬 Префикс команд</div>
                <div class="setting-description">
                    Символ для вызова команд бота (например: !help, /help)
                </div>
                <div class="setting-control">
                    <input type="text" class="input-field" id="botPrefix" placeholder="!" value="!" maxlength="3">
                </div>
            </div>

            <div class="setting-group">
                <div class="setting-title">📊 Канал логов</div>
                <div class="setting-description">
                    Канал для записи всех действий бота
                </div>
                <div class="setting-control">
                    <input type="text" class="input-field" id="logChannel" placeholder="#bot-logs" value="#bot-logs">
                </div>
            </div>

            <div class="setting-group">
                <div class="setting-title">👑 Роль администратора</div>
                <div class="setting-description">
                    Роль с полным доступом к настройкам бота
                </div>
                <div class="setting-control">
                    <input type="text" class="input-field" id="adminRole" placeholder="@Администратор"
                        value="@Администратор">
                </div>
            </div>

            <button class="save-settings-btn" onclick="saveSettings()">
                💾 Сохранить настройки
            </button>

            <div class="settings-status" id="settingsStatus"></div>
        </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="main-nav">
        <div class="nav-container">
            <a href="#" class="nav-button active" onclick="showSection('chat'); return false;">
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Чат с AI</span>
            </a>
            <a href="#" class="nav-button" onclick="showSection('complaints'); return false;">
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                    </path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Жалобы</span>
            </a>
            <a href="#" class="nav-button" onclick="showSection('rules'); return false;">
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>База правил</span>
            </a>
            <a href="#" class="nav-button" onclick="showSection('history'); return false;">
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>История</span>
            </a>
        </div>
    </nav>

    <div class="container">
        <!-- HOME / LANDING Section -->
        <div class="section active" id="homeSection">
            <div class="landing-section">
                <!-- Hero -->
                <div class="hero-section">
                    <div class="hero-logo">
                        <img src="images/logo.png" alt="BadgRules">
                    </div>

                    <div class="hero-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                        <span>Powered by AI</span>
                    </div>

                    <h1 class="hero-title">Добро пожаловать<br>в BadgRules!</h1>

                    <p class="hero-subtitle">
                        Умный помощник для игроков GTA 5 RP. Мгновенные ответы по правилам,
                        анализ ситуаций и помощь с откатами — всё в одном месте.
                    </p>

                    <div class="hero-cta">
                        <button class="cta-primary" onclick="selectLogoMenu('chat')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Начать чат с AI
                        </button>
                        <button class="cta-secondary" onclick="selectLogoMenu('complaints')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                            Анализ видео
                        </button>
                    </div>
                </div>

                <!-- Features -->
                <div class="features-section scroll-reveal">
                    <p class="section-label">Смотри, что у нас есть</p>
                    <h2 class="section-title">Возможности платформы</h2>

                    <div class="features-grid">
                        <div class="feature-card scroll-reveal" data-delay="1">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <h3 class="feature-title">AI Ассистент</h3>
                            <p class="feature-desc">Мгновенные ответы на любые вопросы по правилам GTA 5 RP. Знает все
                                нюансы Metagaming, PowerGaming, FailRP и многое другое.</p>
                        </div>

                        <div class="feature-card scroll-reveal" data-delay="2">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                </svg>
                            </div>
                            <h3 class="feature-title">Анализ видео</h3>
                            <p class="feature-desc">Загрузи видео нарушения — AI проанализирует ситуацию и поможет
                                составить грамотный запрос на откат.</p>
                        </div>

                        <div class="feature-card scroll-reveal" data-delay="3">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                </svg>
                            </div>
                            <h3 class="feature-title">База правил</h3>
                            <p class="feature-desc">Структурированная база знаний с правилами популярных серверов:
                                Majestic RP, Arizona RP, Diamond RP и других.</p>
                        </div>

                        <div class="feature-card scroll-reveal" data-delay="4">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <h3 class="feature-title">История запросов</h3>
                            <p class="feature-desc">Все твои диалоги сохраняются. Легко вернуться к прошлым вопросам и
                                ответам в любое время.</p>
                        </div>
                    </div>
                </div>

                <!-- Demo Chat - Two columns -->
                <div class="demo-section scroll-reveal">
                    <p class="section-label">Как это работает</p>
                    <h2 class="section-title">Примеры диалогов</h2>

                    <div
                        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
                        <!-- Left Demo -->
                        <div class="demo-container scroll-reveal-left" data-delay="1">
                            <div class="demo-header">
                                <div class="demo-dots">
                                    <span class="demo-dot"></span>
                                    <span class="demo-dot"></span>
                                    <span class="demo-dot"></span>
                                </div>
                                <span class="demo-title">Правила</span>
                            </div>

                            <div class="demo-chat">
                                <div class="demo-message user">
                                    <div class="demo-avatar">Вы</div>
                                    <div class="demo-bubble">
                                        <p class="demo-text">Что такое Metagaming?</p>
                                    </div>
                                </div>

                                <div class="demo-message bot">
                                    <div class="demo-avatar">AI</div>
                                    <div class="demo-bubble">
                                        <p class="demo-text">
                                            <strong>Metagaming (MG)</strong> — использование информации, полученной вне
                                            игры, для получения преимущества в РП.
                                        </p>
                                        <p class="demo-text"
                                            style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                                            Пример: узнать в Discord местоположение врага и приехать туда.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Demo -->
                        <div class="demo-container scroll-reveal-right" data-delay="2">
                            <div class="demo-header">
                                <div class="demo-dots">
                                    <span class="demo-dot"></span>
                                    <span class="demo-dot"></span>
                                    <span class="demo-dot"></span>
                                </div>
                                <span class="demo-title">Откаты</span>
                            </div>

                            <div class="demo-chat">
                                <div class="demo-message user">
                                    <div class="demo-avatar">Вы</div>
                                    <div class="demo-bubble">
                                        <p class="demo-text">Меня убили без причины, это DM?</p>
                                    </div>
                                </div>

                                <div class="demo-message bot">
                                    <div class="demo-avatar">AI</div>
                                    <div class="demo-bubble">
                                        <p class="demo-text">
                                            Да, это <strong>Deathmatch (DM)</strong> — убийство без РП причины.
                                            Загрузите видео, и я помогу составить жалобу на откат.
                                        </p>
                                        <p class="demo-text"
                                            style="margin-top: 0.5rem; font-size: 0.85rem; color: #ffffff;">
                                            📹 Готов проанализировать ваше видео
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stats -->
                <div class="stats-section scroll-reveal">
                    <div class="stats-grid">
                        <div class="stat-card scroll-reveal" data-delay="1">
                            <div class="stat-number-big">500+</div>
                            <div class="stat-label">Правил в базе</div>
                        </div>
                        <div class="stat-card scroll-reveal" data-delay="2">
                            <div class="stat-number-big">24/7</div>
                            <div class="stat-label">Доступность</div>
                        </div>
                        <div class="stat-card scroll-reveal" data-delay="3">
                            <div class="stat-number-big">&lt;2с</div>
                            <div class="stat-label">Время ответа</div>
                        </div>
                        <div class="stat-card scroll-reveal" data-delay="4">
                            <div class="stat-number-big">99%</div>
                            <div class="stat-label">Точность</div>
                        </div>
                    </div>
                </div>

                <!-- CTA -->
                <div class="cta-section scroll-reveal-scale">
                    <div class="cta-box">
                        <h2 class="cta-box-title">Готов начать?</h2>
                        <p class="cta-box-subtitle">Присоединяйся к тысячам игроков, которые уже используют BadgRules
                        </p>
                        <button class="cta-primary" onclick="selectLogoMenu('chat')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                            Запустить ассистента
                        </button>
                    </div>
                </div>

                <!-- Social Section -->
                <div class="social-section scroll-reveal">
                    <h2 class="social-title">Ищи нас в соцсетях</h2>
                    <p class="social-subtitle">Там мы общаемся и отвечаем на вопросы</p>

                    <a href="https://discord.gg/rU5bwEv97n" target="_blank" class="social-card">
                        <div class="social-icon">
                            <svg viewBox="0 0 71 55" fill="currentColor">
                                <path
                                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                            </svg>
                        </div>
                        <div class="social-info">
                            <div class="social-name">Discord</div>
                            <div class="social-desc">Сообщество и поддержка</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- Chat Section -->
        <div class="section" id="chatSection">
            <div class="chat-container">
                <div class="chat-messages" id="chatMessages">
                    <div class="welcome-screen" id="welcomeScreen">
                        <!-- ЗАМЕНИТЕ ПУТЬ НИЖЕ НА СВОЙ ЛОГОТИП -->
                        <img src="images/logo.png" alt="BadgRules Logo" class="welcome-icon">
                        <h3 class="welcome-main-title">BudgeRulse — твой помощник в сфере правил серверов GTA5.</h3>
                        <p class="welcome-subtitle-question">Чем могу помочь?</p>

                        <div class="quick-questions">
                            <div class="quick-question" onclick="askQuickQuestion('Что такое Metagaming?')">
                                <span class="quick-question-title">Что такое Metagaming?</span>
                            </div>
                            <div class="quick-question" onclick="askQuickQuestion('Как правильно грабить игроков?')">
                                <span class="quick-question-title">Как правильно грабить игроков?</span>
                            </div>
                            <div class="quick-question" onclick="askQuickQuestion('Правила взаимодействия с полицией')">
                                <span class="quick-question-title">Правила взаимодействия с полицией</span>
                            </div>
                            <div class="quick-question" onclick="askQuickQuestion('Что можно делать в зелёной зоне?')">
                                <span class="quick-question-title">Что можно делать в зелёной зоне?</span>
                            </div>
                        </div>

                        <div class="recent-dialogs">
                            <div class="recent-dialogs-header" onclick="toggleRecentDialogs(this)">
                                <span>Последние диалоги</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fixed Input at Bottom -->
        <div class="chat-input-container">
            <div class="chat-input-inner">
                <div class="chat-input-box">
                    <!-- Main Input Area -->
                    <div class="chat-input-main">
                        <input type="text" class="chat-input" id="chatInput" placeholder="Задай свой вопрос..."
                            onkeypress="handleKeyPress(event)">
                    </div>

                    <!-- Bottom Bar with Model & Send -->
                    <div class="chat-input-bottom">
                        <!-- AI Model Selector -->
                        <div class="ai-selector" id="aiSelector">
                            <div class="ai-selector-btn" id="aiSelectorBtn" onclick="toggleAiSelector()">
                                <span class="ai-selector-text" id="aiSelectorText">⚡ Groq LLaMA</span>
                                <svg class="ai-selector-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>

                            <div class="ai-dropdown" id="aiDropdown">
                                <div class="ai-dropdown-label">Выбрать нейросеть</div>

                                <div class="ai-option selected" data-model="groq" onclick="selectAiModel('groq')">
                                    <div class="ai-option-content">
                                        <div class="ai-option-name">⚡ Groq LLaMA</div>
                                        <div class="ai-option-desc">Быстрая и надёжная</div>
                                    </div>
                                    <div class="ai-option-check">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                </div>

                                <div class="ai-option" data-model="huggingface" onclick="selectAiModel('huggingface')">
                                    <div class="ai-option-content">
                                        <div class="ai-option-name">🤗 HuggingFace</div>
                                        <div class="ai-option-desc">Бесплатная модель</div>
                                    </div>
                                    <div class="ai-option-check">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                </div>

                                <div class="ai-option" data-model="gemini" onclick="selectAiModel('gemini')">
                                    <div class="ai-option-content">
                                        <div class="ai-option-name">🔷 Gemini 2.0</div>
                                        <div class="ai-option-desc">Может быть лимит</div>
                                    </div>
                                    <div class="ai-option-check">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center;">
                            <button class="send-button" id="sendButton" onclick="sendMessage()">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                <span>Отправить</span>
                            </button>
                            <span class="shortcut-hint"><kbd>Enter</kbd></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Chat Section -->

        <!-- Profile Section - Static & Simple -->
        <div class="section" id="profileSection">
            <div class="profile-minimal">
                <!-- User Card -->
                <div class="profile-user-card">
                    <div class="profile-avatar-minimal" id="profileAvatarImg">G</div>
                    <div class="profile-user-info">
                        <h2 class="profile-name-minimal" id="profileUsername">Гость</h2>
                        <span class="profile-tag-minimal" id="profileDiscriminator">#0000</span>
                        <span class="profile-role-badge hidden" id="profileRoleBadge"></span>
                        <div class="profile-status-minimal">
                            <span class="status-dot online"></span>
                            В сети
                        </div>
                        <!-- Compact Subscription Badge -->
                        <div class="profile-subscription-badge" id="profileSubBadge">
                            <span class="profile-sub-icon" id="profileSubIcon">⚡</span>
                            <span class="profile-sub-text" id="profileSubText">FREE</span>
                        </div>
                    </div>
                </div>

                <!-- Stats Grid - Static -->
                <div class="profile-stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">0</span>
                        <span class="stat-title">Вопросов</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">0</span>
                        <span class="stat-title">Жалоб</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">12</span>
                        <span class="stat-title">Правил</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">0ч</span>
                        <span class="stat-title">Онлайн</span>
                    </div>
                </div>

                <!-- Info List - Static -->
                <div class="profile-info-list">
                    <div class="info-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span class="label">Discord ID</span>
                        <span class="value" id="profileDiscordId">—</span>
                    </div>
                    <div class="info-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span class="label">Роль</span>
                        <span class="value" id="userRole">—</span>
                    </div>
                    <div class="info-row" id="staticRow" style="display: none;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                        </svg>
                        <span class="label">Статик</span>
                        <span class="value" id="userStatic">—</span>
                    </div>
                    <div class="info-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span class="label">Регистрация</span>
                        <span class="value" id="profileJoinDate">—</span>
                    </div>
                    <div class="info-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span class="label">Последний вход</span>
                        <span class="value">Сейчас</span>
                    </div>
                    <div class="info-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <span class="label">Статус аккаунта</span>
                        <span class="value success">Активен</span>
                    </div>
                    <div class="info-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path
                                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                            </path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <span class="label">Предупреждений</span>
                        <span class="value">0</span>
                    </div>
                    <div class="info-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <span class="label">Рейтинг</span>
                        <span class="value">5.0</span>
                    </div>
                </div>

                <!-- Only Logout Button -->
                <div class="profile-quick-actions">
                    <button class="quick-action-btn danger" onclick="logout()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        Выйти из аккаунта
                    </button>
                </div>
            </div>
        </div>

        <!-- Complaints Section (Откат) -->
        <div class="section" id="complaintsSection">
            <div class="landing-section">
                <!-- Hero -->
                <div class="hero-section">
                    <div class="hero-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <span>Система жалоб</span>
                    </div>

                    <h1 class="hero-title">Подать жалобу<br>на нарушение</h1>

                    <p class="hero-subtitle">
                        Заполните форму ниже для подачи жалобы на нарушение правил сервера.
                        Все поля обязательны для заполнения. Укажите доказательства нарушения.
                    </p>
                </div>

                <!-- Complaint Form -->
                <div class="features-section">
                    <div class="complaint-form-container" style="max-width: 800px; margin: 0 auto;">
                        <div class="complaint-form">
                            <!-- Type -->
                            <div class="form-group">
                                <label class="form-label">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px;">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                    </svg>
                                    Тип нарушения
                                </label>
                                <select id="complaintType" class="form-input">
                                    <option value="">Выберите тип нарушения</option>
                                    <option value="dm">🔫 DM (DeathMatch)</option>
                                    <option value="mg">🧠 MG (MetaGaming)</option>
                                    <option value="pg">💪 PG (PowerGaming)</option>
                                    <option value="rk">☠️ RK (Revenge Kill)</option>
                                    <option value="fr">🎭 FailRP</option>
                                    <option value="other">📋 Другое</option>
                                </select>
                            </div>

                            <!-- Violator ID -->
                            <div class="form-group">
                                <label class="form-label">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px;">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    ID нарушителя
                                </label>
                                <input type="text" id="violatorId" class="form-input" placeholder="Например: 12345">
                            </div>

                            <!-- Server -->
                            <div class="form-group">
                                <label class="form-label">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px;">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                    </svg>
                                    Сервер
                                </label>
                                <input type="text" id="serverName" class="form-input" placeholder="Например: Downtown">
                            </div>

                            <!-- Description -->
                            <div class="form-group">
                                <label class="form-label">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px;">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                    Описание инцидента
                                </label>
                                <textarea id="incidentDescription" class="form-textarea" rows="6" placeholder="Подробно опишите что произошло, время, место и обстоятельства нарушения..."></textarea>
                            </div>

                            <!-- Evidence -->
                            <div class="form-group">
                                <label class="form-label">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px;">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                    Ссылка на доказательства
                                </label>
                                <input type="text" id="evidenceLink" class="form-input" placeholder="YouTube, Google Drive или другая ссылка на видео/скриншоты">
                            </div>

                            <!-- Submit Button -->
                            <button onclick="submitComplaint()" class="submit-complaint-btn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 2L11 13"></path>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                Отправить жалобу
                            </button>

                            <!-- Status Message -->
                            <div id="complaintStatus" class="complaint-status"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- History Section (История) -->
        <div class="section" id="historySection">
            <div class="landing-section">
                <!-- Hero -->
                <div class="hero-section">
                    <div class="hero-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>История запросов</span>
                    </div>

                    <h1 class="hero-title">История ваших<br>запросов</h1>

                    <p class="hero-subtitle">
                        Здесь отображаются все ваши запросы к AI помощнику и поданные жалобы.
                        История сохраняется автоматически и доступна в любое время.
                    </p>
                </div>

                <!-- History Content -->
                <div class="features-section">
                    <div id="historyContainer" class="history-container">
                        <!-- Empty State -->
                        <div class="history-empty">
                            <div class="empty-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <h3>История пуста</h3>
                            <p>Начните общаться с AI помощником, и ваши запросы появятся здесь</p>
                            <button class="cta-primary" onclick="selectLogoMenu('chat')" style="margin-top: 1.5rem;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                Начать чат
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- News Section -->
        <div class="section" id="newsSection">
            <div class="landing-section">
                <!-- Hero -->
                <div class="hero-section">
                    <div class="hero-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="3" y1="9" x2="21" y2="9"></line>
                            <line x1="9" y1="21" x2="9" y2="9"></line>
                        </svg>
                        <span>Новости проекта</span>
                    </div>

                    <h1 class="hero-title">Новости проекта</h1>

                    <p class="hero-subtitle">
                        Последние обновления и важные события.
                        Следите за развитием проекта и новыми функциями.
                    </p>
                </div>

                <!-- News Grid -->
                <div class="features-section">
                    <div class="news-grid" id="newsGrid">
                        <!-- News items will be loaded here by JavaScript -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Team Section -->
        <div class="section" id="teamSection">
            <div class="landing-section">
                <!-- Hero -->
                <div class="hero-section">
                    <div class="hero-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>Наша команда</span>
                    </div>

                    <h1 class="hero-title">Команда проекта<br>BadgRules</h1>

                    <p class="hero-subtitle">
                        Познакомьтесь с людьми, которые создают и поддерживают проект.
                        Наша команда работает для того, чтобы сделать игру лучше для всех.
                    </p>
                </div>

                <!-- Team Grid -->
                <div class="features-section">
                    <!-- Owners Row - 2 cards centered -->
                    <div style="display: grid; grid-template-columns: repeat(2, minmax(280px, 350px)); gap: 2rem; max-width: 800px; margin: 0 auto 3rem auto; justify-content: center;">
                        
                        <!-- Владелец 1 -->
                        <div class="team-card" data-role="owner">
                            <div class="team-card-bg"></div>
                            <div class="team-card-content">
                                <div class="team-avatar-wrapper">
                                    <img src="images/owner1.png" alt="Владелец" class="team-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                    <div class="team-avatar-placeholder" style="display: none;">
                                        <div style="font-size: 3rem;">👑</div>
                                    </div>
                                    <div class="team-role-badge owner">
                                        <span>👑</span>
                                        <span>Владелец</span>
                                    </div>
                                </div>
                                <div class="team-info">
                                    <h3 class="team-name">Kai</h3>
                                    <p class="team-title">Основатель проекта</p>
                                    <p class="team-description">
                                        Создатель и идейный вдохновитель BadgRules. 
                                        Отвечает за общее развитие проекта и принятие стратегических решений.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Владелец 2 -->
                        <div class="team-card" data-role="owner">
                            <div class="team-card-bg"></div>
                            <div class="team-card-content">
                                <div class="team-avatar-wrapper">
                                    <img src="images/owner2.png" alt="Со-владелец" class="team-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                    <div class="team-avatar-placeholder" style="display: none;">
                                        <div style="font-size: 3rem;">👑</div>
                                    </div>
                                    <div class="team-role-badge owner">
                                        <span>👑</span>
                                        <span>Владелец</span>
                                    </div>
                                </div>
                                <div class="team-info">
                                    <h3 class="team-name">Very</h3>
                                    <p class="team-title">Со-основатель проекта</p>
                                    <p class="team-description">
                                        Со-основатель BadgRules. 
                                        Управляет технической частью проекта и координирует работу команды.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Senior Moderator Row - 1 card centered -->
                    <div style="display: grid; grid-template-columns: minmax(280px, 350px); gap: 2rem; max-width: 400px; margin: 0 auto 3rem auto; justify-content: center;">
                        
                        <!-- Senior Модератор -->
                        <div class="team-card" data-role="senior">
                            <div class="team-card-bg"></div>
                            <div class="team-card-content">
                                <div class="team-avatar-wrapper">
                                    <img src="images/team3.png" alt="Senior Модератор" class="team-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                    <div class="team-avatar-placeholder" style="display: none;">
                                        <div style="font-size: 3rem;">⭐</div>
                                    </div>
                                    <div class="team-role-badge senior">
                                        <span>⭐</span>
                                        <span>Команда</span>
                                    </div>
                                </div>
                                <div class="team-info">
                                    <h3 class="team-name">Kingo</h3>
                                    <p class="team-title">Senior-Moderator</p>
                                    <p class="team-description">
                                        Главный специалист, отвечающий за техническую поддержку, коммуникацию с пользователями и веб-разработку.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Team Members Row - 2 cards centered -->
                    <div style="display: grid; grid-template-columns: repeat(2, minmax(280px, 350px)); gap: 2rem; max-width: 800px; margin: 0 auto; justify-content: center;">

                        <!-- Команда 1 -->
                        <div class="team-card" data-role="team">
                            <div class="team-card-bg"></div>
                            <div class="team-card-content">
                                <div class="team-avatar-wrapper">
                                    <img src="images/team1.png" alt="Команда" class="team-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                    <div class="team-avatar-placeholder" style="display: none;">
                                        <div style="font-size: 3rem;">👥</div>
                                    </div>
                                    <div class="team-role-badge team">
                                        <span>👥</span>
                                        <span>Команда</span>
                                    </div>
                                </div>
                                <div class="team-info">
                                    <h3 class="team-name">Lesya</h3>
                                    <p class="team-title">Moderator</p>
                                    <p class="team-description">
                                        Создает контент для проекта, модерирует сообщество и помогает пользователям с вопросами.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Команда 2 -->
                        <div class="team-card" data-role="team">
                            <div class="team-card-bg"></div>
                            <div class="team-card-content">
                                <div class="team-avatar-wrapper">
                                    <img src="images/team2.png" alt="Команда" class="team-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                    <div class="team-avatar-placeholder" style="display: none;">
                                        <div style="font-size: 3rem;">👥</div>
                                    </div>
                                    <div class="team-role-badge team">
                                        <span>👥</span>
                                        <span>Команда</span>
                                    </div>
                                </div>
                                <div class="team-info">
                                    <h3 class="team-name">Yuki</h3>
                                    <p class="team-title">Moderator</p>
                                    <p class="team-description">
                                        Отвечает за дизайн интерфейса, пользовательский опыт и визуальную составляющую проекта.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Social Networks Section -->
        <div class="section" id="socialSection">
            <div class="landing-section">
                <!-- Hero -->
                <div class="hero-section">
                    <div class="hero-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                        <span>Социальные сети</span>
                    </div>

                    <h1 class="hero-title">Мы в социальных<br>сетях</h1>

                    <p class="hero-subtitle">
                        Следите за новостями проекта, общайтесь с сообществом
                        и будьте в курсе всех обновлений BadgRules.
                    </p>
                </div>

                <!-- Social Cards -->
                <div class="features-section">
                    <div style="display: grid; grid-template-columns: repeat(3, minmax(280px, 350px)); gap: 2rem; max-width: 1200px; margin: 0 auto; justify-content: center;">
                        
                        <!-- Discord Card -->
                        <a href="https://discord.gg/FmFp9MHj" target="_blank" style="text-decoration: none; color: inherit;">
                        <div style="background: rgba(88, 101, 242, 0.1); border: 1px solid rgba(88, 101, 242, 0.3); border-radius: 20px; padding: 2rem; text-align: center; transition: all 0.3s; cursor: pointer; height: 100%;" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='rgba(88, 101, 242, 0.5)'; this.style.boxShadow='0 20px 40px rgba(88, 101, 242, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(88, 101, 242, 0.3)'; this.style.boxShadow='none'">
                            <div style="width: 80px; height: 80px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #5865F2, #7289DA); border-radius: 20px; display: flex; align-items: center; justify-content: center;">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                                </svg>
                            </div>
                            <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Discord</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.95rem;">Официальный Discord сервер проекта</p>
                            <div style="display: inline-flex; align-items: center; gap: 0.5rem; color: #5865F2; font-weight: 600;">
                                discord.gg/FmFp9MHj
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </div>
                        </div>
                        </a>

                        <!-- Email Card -->
                        <a href="mailto:support@badgrules.com" style="text-decoration: none; color: inherit;">
                        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 20px; padding: 2rem; text-align: center; transition: all 0.3s; cursor: pointer; height: 100%;" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='rgba(16, 185, 129, 0.5)'; this.style.boxShadow='0 20px 40px rgba(16, 185, 129, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(16, 185, 129, 0.3)'; this.style.boxShadow='none'">
                            <div style="width: 80px; height: 80px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #10b981, #059669); border-radius: 20px; display: flex; align-items: center; justify-content: center;">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Email</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.95rem;">Напишите нам электронное письмо</p>
                            <div style="display: inline-flex; align-items: center; gap: 0.5rem; color: #10b981; font-weight: 600;">
                                support@badgrules.com
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </div>
                        </div>
                        </a>

                        <!-- Telegram Card -->
                        <a href="https://t.me/badgrules" target="_blank" style="text-decoration: none; color: inherit;">
                        <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 20px; padding: 2rem; text-align: center; transition: all 0.3s; cursor: pointer; height: 100%;" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='rgba(59, 130, 246, 0.5)'; this.style.boxShadow='0 20px 40px rgba(59, 130, 246, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(59, 130, 246, 0.3)'; this.style.boxShadow='none'">
                            <div style="width: 80px; height: 80px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 20px; display: flex; align-items: center; justify-content: center;">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                                </svg>
                            </div>
                            <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Telegram</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.95rem;">Наш официальный Telegram канал</p>
                            <div style="display: inline-flex; align-items: center; gap: 0.5rem; color: #3b82f6; font-weight: 600;">
                                @badgrules
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </div>
                        </div>
                        </a>

                    </div>
                </div>

                <!-- Bottom Info -->
                <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: rgba(96, 165, 250, 0.05); border-radius: 20px; border: 1px solid rgba(96, 165, 250, 0.1);">
                    <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
                        Будьте на связи
                    </h3>
                    <p style="font-size: 1rem; color: var(--text-secondary); max-width: 700px; margin: 0 auto;">
                        Подписывайтесь на наши социальные сети, чтобы не пропустить важные новости,
                        обновления и эксклюзивный контент от команды BadgRules!
                    </p>
                </div>
            </div>
        </div>


    <script>

        // Форсированная перезагрузка в Opera GX
        (function operaGXForceReload() {
            const RELOAD_KEY = 'badgrules_force_reload';
            const reloaded = sessionStorage.getItem(RELOAD_KEY);
            
            // Определяем Opera
            const isOpera = navigator.userAgent.includes('OPR') || 
                           navigator.userAgent.includes('Opera');
            
            // Если Opera и еще не перезагружали в этой сессии
            if (isOpera && !reloaded) {
                console.log('🔄 Opera обнаружена - форсирую перезагрузку...');
                sessionStorage.setItem(RELOAD_KEY, 'true');
                
                // Перезагружаем БЕЗ кэша
                window.location.reload(true);
            }
        })();


        // ═══════════════════════════════════════════════════════════════
        // 🔧 SERVICE WORKER - Контроль кэширования
        // ═══════════════════════════════════════════════════════════════
        
        // Регистрация Service Worker для контроля кэша
        if ('serviceWorker' in navigator) {
            // Сначала удаляем все старые Service Workers
            navigator.serviceWorker.getRegistrations().then(registrations => {
                registrations.forEach(registration => {
                    console.log('🗑️ Удаление старого Service Worker');
                    registration.unregister();
                });
            });
            
            console.log('✅ Service Workers очищены (кэш под контролем)');
        }


        // Cache Busting для критических элементов
        window.addEventListener('DOMContentLoaded', () => {
            const timestamp = Date.now();
            
            // Обновляем изображения с cache busting
            document.querySelectorAll('img[data-no-cache]').forEach(img => {
                const src = img.src.split('?')[0];
                img.src = `${src}?v=${timestamp}`;
            });
            
            console.log('🔄 Cache busting применен');
        });


        // Функция принудительного обновления (для пользователей)
        function forceUpdateSite() {
            console.log('🔄 Принудительное обновление...');
            
            // Очищаем всё
            localStorage.clear();
            sessionStorage.clear();
            
            if ('caches' in window) {
                caches.keys().then(names => {
                    names.forEach(name => caches.delete(name));
                });
            }
            
            // Показываем уведомление
            alert('🔄 Сайт будет обновлен!\n\nВсе кэши очищены.\nСейчас страница перезагрузится.');
            
            // Перезагружаем БЕЗ кэша
            setTimeout(() => {
                window.location.reload(true);
            }, 500);
        }
        
        // Добавляем в window для доступа из консоли
        window.forceUpdateSite = forceUpdateSite;
        
        console.log('💡 Подсказка: Если сайт не обновляется, введи в консоль: forceUpdateSite()');


        // Детектор Opera GX с помощью
        (function detectOperaGX() {
            const isOpera = navigator.userAgent.includes('OPR') || 
                           navigator.userAgent.includes('Opera');
            
            if (isOpera) {
                console.log('%c🎮 Opera GX обнаружена!', 'color: #ff1a8c; font-size: 16px; font-weight: bold;');
                console.log('%c💡 Если изменения не видны:', 'color: #60a5fa; font-size: 14px;');
                console.log('%c1️⃣ Нажми Ctrl+Shift+Delete', 'color: white; font-size: 12px;');
                console.log('%c2️⃣ Выбери "Всё время"', 'color: white; font-size: 12px;');
                console.log('%c3️⃣ Отметь "Кэшированные изображения"', 'color: white; font-size: 12px;');
                console.log('%c4️⃣ Нажми "Очистить данные"', 'color: white; font-size: 12px;');
                console.log('%cили просто введи: forceUpdateSite()', 'color: #4ade80; font-size: 14px; font-weight: bold;');
                
                // Проверяем версию
                const savedVersion = localStorage.getItem('badgrules_site_version');
                if (savedVersion && savedVersion !== SITE_VERSION) {
                    console.log(`%c⚠️ Старая версия в кэше: ${savedVersion}`, 'color: #fbbf24; font-size: 14px;');
                    console.log(`%c✅ Должна быть: ${SITE_VERSION}`, 'color: #4ade80; font-size: 14px;');
                }
            }
        })();


        // ═══════════════════════════════════════════════════════════════
        // 🔄 СИСТЕМА ВЕРСИОНИРОВАНИЯ - Принудительное обновление
        // ═══════════════════════════════════════════════════════════════
        
        const SITE_VERSION = '1.2.0'; // Увеличивай при каждом обновлении!
        const VERSION_KEY = 'badgrules_site_version';
        
        // Проверка версии при загрузке
        (function checkVersion() {
            try {
                const savedVersion = localStorage.getItem(VERSION_KEY);
                
                if (savedVersion !== SITE_VERSION) {
                    console.log(`🔄 Обнаружена новая версия: ${savedVersion || 'нет'} → ${SITE_VERSION}`);
                    
                    // АГРЕССИВНАЯ ОЧИСТКА ВСЕГО КЭША
                    console.log('🗑️ Очистка старого кэша...');
                    
                    // 1. Очистка localStorage (кроме важных данных)
                    const keepKeys = ['badgrules_user', 'badgrules_server_selection'];
                    const allKeys = Object.keys(localStorage);
                    
                    allKeys.forEach(key => {
                        if (!keepKeys.includes(key)) {
                            localStorage.removeItem(key);
                        }
                    });
                    
                    // 2. Очистка всех Cache API
                    if ('caches' in window) {
                        caches.keys().then(cacheNames => {
                            return Promise.all(
                                cacheNames.map(cacheName => {
                                    console.log(`🗑️ Удаление кэша: ${cacheName}`);
                                    return caches.delete(cacheName);
                                })
                            );
                        }).then(() => {
                            console.log('✅ Все кэши очищены');
                        });
                    }
                    
                    // 3. Сохраняем новую версию
                    localStorage.setItem(VERSION_KEY, SITE_VERSION);
                    
                    // 4. Показываем уведомление пользователю
                    showVersionUpdateNotification();
                    
                    console.log(`✅ Обновлено до версии ${SITE_VERSION}`);
                } else {
                    console.log(`✅ Версия актуальна: ${SITE_VERSION}`);
                }
            } catch (e) {
                console.warn('⚠️ Ошибка проверки версии:', e);
            }
        })();
        
        // Уведомление об обновлении
        function showVersionUpdateNotification() {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background: linear-gradient(135deg, #60a5fa, #3b82f6);
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(96, 165, 250, 0.4);
                z-index: 999999;
                font-family: 'Manrope', sans-serif;
                font-weight: 600;
                font-size: 14px;
                max-width: 320px;
                animation: slideInRight 0.5s ease;
            `;
            
            notification.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                    </svg>
                    <div>
                        <div style="font-size: 16px; margin-bottom: 4px;">🎉 Сайт обновлён!</div>
                        <div style="font-size: 12px; opacity: 0.9;">Версия ${SITE_VERSION}</div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Удаляем через 5 секунд
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.5s ease';
                setTimeout(() => notification.remove(), 500);
            }, 5000);
        }
        
        // CSS анимации
        const versionStyles = document.createElement('style');
        versionStyles.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(400px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(400px);
                }
            }
        `;
        document.head.appendChild(versionStyles);


        // ═══════════════════════════════════════════════════════════════
        // 🎮 SERVER DATA - GTA 5 RP & Majestic RP
        // ═══════════════════════════════════════════════════════════════

        const SERVERS = {
            gta5rp: [
                { id: 1, name: 'DOWNTOWN', emoji: '', players: '', bonus: '' },
                { id: 2, name: 'STRAWBERRY', emoji: '', players: '', bonus: '' },
                { id: 3, name: 'VINEWOOD', emoji: '', players: '', bonus: '' },
                { id: 4, name: 'BLACKBERRY', emoji: '', players: '', bonus: '' },
                { id: 5, name: 'INSQUAD', emoji: '', players: '', bonus: '' },
                { id: 6, name: 'SUNRISE', emoji: '', players: '', bonus: '' },
                { id: 7, name: 'RAINBOW', emoji: '', players: '', bonus: '' },
                { id: 8, name: 'RICHMAN', emoji: '', players: '', bonus: '' },
                { id: 9, name: 'ECLIPSE', emoji: '', players: '', bonus: '' },
                { id: 10, name: 'LA MESA', emoji: '', players: '', bonus: '' },
                { id: 11, name: 'BURTON', emoji: '', players: '', bonus: '' },
                { id: 12, name: 'ROCKFORD', emoji: '', players: '', bonus: '' },
                { id: 13, name: 'ALTA', emoji: '', players: '', bonus: '' },
                { id: 14, name: 'DEL PERRO', emoji: '', players: '', bonus: '' },
                { id: 15, name: 'DAVIS', emoji: '', players: '', bonus: '' },
                { id: 16, name: 'HARMONY', emoji: '', players: '', bonus: '' },
                { id: 17, name: 'REDWOOD', emoji: '', players: '', bonus: '' },
                { id: 18, name: 'HAWICK', emoji: '', players: '', bonus: '' },
                { id: 19, name: 'GRAPESEED', emoji: '', players: '', bonus: '' },
                { id: 20, name: 'MURRIETA', emoji: '', players: '', bonus: '' },
                { id: 21, name: 'VESPUCCI', emoji: '', players: '', bonus: '' },
                { id: 22, name: 'MILTON', emoji: '', players: '', bonus: '' }
            ],
            majestic: [
                { id: 1, name: 'Denver', emoji: '️', players: '—', bonus: '' },
                { id: 2, name: 'Phoenix', emoji: '', players: '—', bonus: '' },
                { id: 3, name: 'Seattle', emoji: '', players: '—', bonus: 'x1.1' },
                { id: 4, name: 'Houston', emoji: '', players: '—', bonus: 'x1.15' },
                { id: 5, name: 'New York', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 6, name: 'Atlanta', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 7, name: 'San Francisco', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 8, name: 'Chicago', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 9, name: 'Los Angeles', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 10, name: 'Miami', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 11, name: 'Dallas', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 12, name: 'Detroit', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 13, name: 'Boston', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 14, name: 'Las Vegas', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 15, name: 'San Diego', emoji: '', players: '—', bonus: 'x1.2' },
                { id: 16, name: 'Washington', emoji: '', players: '—', bonus: 'x1.2' }
            ]
        };

        // ═══════════════════════════════════════════════════════════════
        // 📊 PROJECT/SERVER SELECTION STATE
        // ═══════════════════════════════════════════════════════════════

        let selectedProject = null;
        let selectedServer = null;
        let currentLoginStep = 1;

        // ═══════════════════════════════════════════════════════════════
        // 🎯 PROJECT SELECTION FUNCTIONS
        // ═══════════════════════════════════════════════════════════════

        function selectProject(project) {
            selectedProject = project;
            selectedServer = null; // Reset server selection

            // Update UI
            document.querySelectorAll('.project-card').forEach(card => {
                card.classList.remove('selected');
            });

            const selectedCard = document.querySelector(`.project-card[data-project="${project}"]`);
            if (selectedCard) {
                selectedCard.classList.add('selected');
            }

            // Enable next button
            document.getElementById('nextStep1').disabled = false;

            // Pre-populate servers for step 2
            populateServers(project);
        }

        function populateServers(project) {
            const grid = document.getElementById('serverGrid');
            const servers = SERVERS[project] || [];
            const projectClass = project;

            grid.innerHTML = servers.map(server => {
                const bonusHtml = server.bonus ? `<span class="server-bonus">${server.bonus}</span>` : '';
                return `
                <div class="server-card ${projectClass}" data-server="${server.id}" onclick="selectServer(${server.id}, '${server.name}', '${server.emoji}')">
                    <div class="server-number">${String(server.id).padStart(2, '0')}</div>
                    <span class="server-emoji">${server.emoji}</span>
                    <div class="server-info">
                        <div class="server-name">${server.name} ${bonusHtml}</div>
                    </div>
                </div>
            `}).join('');

            // Update step 2 title
            const projectName = project === 'gta5rp' ? 'GTA 5 RP' : 'Majestic RP';
            document.getElementById('serverStepTitle').textContent = `Сервер ${projectName}`;
        }

        function selectServer(id, name, emoji) {
            selectedServer = { id, name, emoji };

            // Update UI
            document.querySelectorAll('.server-card').forEach(card => {
                card.classList.remove('selected');
            });

            const selectedCard = document.querySelector(`.server-card[data-server="${id}"]`);
            if (selectedCard) {
                selectedCard.classList.add('selected');
            }

            // Enable next button
            document.getElementById('nextStep2').disabled = false;
        }

        // ═══════════════════════════════════════════════════════════════
        // 📍 STEP NAVIGATION
        // ═══════════════════════════════════════════════════════════════

        function goToStep(step) {
            // Validate transition
            if (step === 2 && !selectedProject) return;
            if (step === 3 && !selectedServer) return;

            // Hide all steps
            document.querySelectorAll('.login-step').forEach(s => s.classList.remove('active'));

            // Show target step
            document.getElementById(`step${step}`).classList.add('active');

            // Update step indicator
            updateStepIndicator(step);

            // If going to step 3, update selected info display
            if (step === 3) {
                updateSelectedInfoDisplay();
            }

            currentLoginStep = step;
        }

        function updateStepIndicator(activeStep) {
            for (let i = 1; i <= 3; i++) {
                const dot = document.getElementById(`stepDot${i}`);
                dot.classList.remove('active', 'completed');

                if (i < activeStep) {
                    dot.classList.add('completed');
                } else if (i === activeStep) {
                    dot.classList.add('active');
                }
            }
        }

        function updateSelectedInfoDisplay() {
            const projectName = selectedProject === 'gta5rp' ? 'GTA 5 RP' : 'Majestic RP';

            document.getElementById('selectedIcon').textContent = selectedServer.emoji;
            document.getElementById('selectedProjectText').textContent = projectName;
            document.getElementById('selectedServerText').textContent = selectedServer.name;
        }

        function saveServerSelection() {
            const selection = {
                project: selectedProject,
                server: selectedServer
            };
            localStorage.setItem('badgrules_server_selection', JSON.stringify(selection));
            
            // Сохраняем в профиль пользователя для AI
            try {
                const userData = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
                if (userData && userData.id) {
                    userData.server = selectedServer.name;
                    userData.project = selectedProject;
                    localStorage.setItem('badgrules_user', JSON.stringify(userData));
                    console.log(`✅ Сервер ${selectedServer.name} сохранен в профиль`);
                }
            } catch (e) {
                console.warn('⚠️ Не удалось сохранить в профиль');
            }
        }

        function loadServerSelection() {
            const saved = localStorage.getItem('badgrules_server_selection');
            if (saved) {
                const selection = JSON.parse(saved);
                selectedProject = selection.project;
                selectedServer = selection.server;
                return selection;
            }
            return null;
        }

        function updateServerBadgeDisplay(project, server) {
            const serverBadge = document.getElementById('serverBadge');
            const dropdownIcon = document.getElementById('dropdownServerIcon');
            const dropdownName = document.getElementById('dropdownServerName');

            if (serverBadge) {
                serverBadge.textContent = server.name;
                serverBadge.className = 'user-server-badge ' + project;
            }

            if (dropdownIcon) dropdownIcon.textContent = server.emoji;
            if (dropdownName) dropdownName.textContent = server.name;
        }

        function changeServer() {
            // Clear selection and show login overlay at step 1
            selectedProject = null;
            selectedServer = null;

            document.querySelectorAll('.project-card').forEach(card => {
                card.classList.remove('selected');
            });
            document.getElementById('nextStep1').disabled = true;
            document.getElementById('nextStep2').disabled = true;

            goToStep(1);
            document.getElementById('loginOverlay').classList.remove('hidden');
            document.getElementById('userProfileBadge').classList.add('hidden');
        }

        // ═══════════════════════════════════════════════════════════════
        // 🤖 AI MODEL SELECTOR - New Clean Version
        // ═══════════════════════════════════════════════════════════════

        const aiModels = {
            groq: { name: '⚡ Groq LLaMA' },
            huggingface: { name: '🤗 HuggingFace' },
            gemini: { name: '🔷 Gemini 2.0' }
        };

        let isAiSelectorOpen = false;

        function toggleAiSelector() {
            const btn = document.getElementById('aiSelectorBtn');
            const dropdown = document.getElementById('aiDropdown');

            isAiSelectorOpen = !isAiSelectorOpen;

            if (isAiSelectorOpen) {
                btn.classList.add('open');
                dropdown.classList.add('show');
            } else {
                btn.classList.remove('open');
                dropdown.classList.remove('show');
            }
        }

        function selectAiModel(model) {
            if (!aiModels[model]) return;

            currentModel = model;
            const modelInfo = aiModels[model];

            // Update button text
            document.getElementById('aiSelectorText').textContent = modelInfo.name;

            // Update selected state in dropdown
            document.querySelectorAll('.ai-option').forEach(opt => {
                if (opt.dataset.model === model) {
                    opt.classList.add('selected');
                } else {
                    opt.classList.remove('selected');
                }
            });

            // Close dropdown
            toggleAiSelector();
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            const selector = document.getElementById('aiSelector');
            if (selector && !selector.contains(e.target) && isAiSelectorOpen) {
                toggleAiSelector();
            }
        });

        // Toggle Recent Dialogs
        function toggleRecentDialogs(element) {
            element.classList.toggle('open');
        }

        // ═══════════════════════════════════════════════════════════════
        // 🏠 TOP LOGO MENU FUNCTIONS
        // ═══════════════════════════════════════════════════════════════

        let isLogoMenuOpen = false;

        function toggleLogoMenu() {
            const btn = document.getElementById('menuToggleBtn');
            const dropdown = document.getElementById('logoDropdown');

            isLogoMenuOpen = !isLogoMenuOpen;

            if (isLogoMenuOpen) {
                btn.classList.add('open');
                dropdown.classList.add('show');
            } else {
                btn.classList.remove('open');
                dropdown.classList.remove('show');
            }
        }

        function selectLogoMenu(section) {
            // Update active state
            document.querySelectorAll('.logo-menu-item').forEach(item => {
                if (item.dataset.section === section) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Не закрываем меню - горизонтальная навигация всегда видна

            // Show section
            showSection(section);
        }

        // Close logo menu when clicking outside
        document.addEventListener('click', function (e) {
            const logoEl = document.getElementById('topLogo');
            if (logoEl && !logoEl.contains(e.target) && isLogoMenuOpen) {
                toggleLogoMenu();
            }
        });

        // ═══════════════════════════════════════════════════════════════
        // 📁 ROLLBACK FILE UPLOAD FUNCTIONS
        // ═══════════════════════════════════════════════════════════════

        let selectedFile = null;
        let selectedRollbackType = 'dm';

        function selectRollbackType(element) {
            // Remove active from all
            document.querySelectorAll('.type-option').forEach(opt => {
                opt.classList.remove('active');
            });

            // Add active to clicked
            element.classList.add('active');
            selectedRollbackType = element.dataset.type;
        }

        function handleFileSelect(event) {
            const file = event.target.files[0];
            if (!file) return;

            // Check file size (100MB max)
            if (file.size > 100 * 1024 * 1024) {
                alert('Файл слишком большой. Максимум 100MB');
                return;
            }

            selectedFile = file;

            // Show preview
            document.getElementById('fileUploadArea').style.display = 'none';
            document.getElementById('filePreview').style.display = 'block';
            document.getElementById('fileName').textContent = file.name;
            document.getElementById('fileSize').textContent = formatFileSize(file.size);

            // Enable submit button
            document.getElementById('rollbackSubmitBtn').disabled = false;

            // Simulate upload progress
            simulateUpload();
        }

        function removeFile(event) {
            event.stopPropagation();
            selectedFile = null;

            // Reset UI
            document.getElementById('fileUploadArea').style.display = 'block';
            document.getElementById('filePreview').style.display = 'none';
            document.getElementById('fileInput').value = '';
            document.getElementById('uploadProgress').style.width = '0%';
            document.getElementById('rollbackSubmitBtn').disabled = true;
        }

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        function simulateUpload() {
            let progress = 0;
            const progressBar = document.getElementById('uploadProgress');

            const interval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                }
                progressBar.style.width = progress + '%';
            }, 100);
        }

        // Drag and drop
        const uploadArea = document.getElementById('fileUploadArea');
        if (uploadArea) {
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            });

            uploadArea.addEventListener('dragleave', () => {
                uploadArea.classList.remove('dragover');
            });

            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('dragover');

                const file = e.dataTransfer.files[0];
                if (file) {
                    document.getElementById('fileInput').files = e.dataTransfer.files;
                    handleFileSelect({ target: { files: [file] } });
                }
            });
        }

        // ═══════════════════════════════════════════════════════════════
        // 🤖 API CONFIGURATION - Настройка API ключей
        // ═══════════════════════════════════════════════════════════════

        // ═══════════════════════════════════════════════════════════════
        // 🤖 КОНФИГУРАЦИЯ AI МОДЕЛЕЙ
        // ═══════════════════════════════════════════════════════════════
        
        const API_CONFIG = {
            // Groq - РАБОТАЕТ 100%
            groq: {
                enabled: true,
                name: 'Groq LLaMA',
                apiKey: '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',
                endpoint: 'https://api.groq.com/openai/v1/chat/completions',
                model: 'llama-3.3-70b-versatile',
                type: 'openai',
                icon: '⚡',
                status: '✅ Работает'
            },
            
            // HuggingFace - РАБОТАЕТ БЕЗ КЛЮЧА
            huggingface: {
                enabled: true,
                name: 'HuggingFace',
                apiKey: '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',
                endpoint: 'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct',
                model: 'meta-llama/Llama-3.2-3B-Instruct',
                type: 'huggingface',
                icon: '🤗',
                status: '✅ Бесплатно'
            },
            
            // Google Gemini
            gemini: {
                enabled: true,
                name: 'Google Gemini',
                apiKey: 'AIzaSyAjsekCNag77SDOzwtweMJaOl6WjgCTetE',
                endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
                model: 'gemini-2.0-flash-exp',
                type: 'gemini',
                icon: '🔷',
                status: '⚠️ Может быть лимит'
            }
        };

        // Groq ПО УМОЛЧАНИЮ - самая надёжная!
        let currentModel = 'groq';

        // ═══════════════════════════════════════════════════════════════
        // 📚 ЗАГРУЗКА ССЫЛОК ИЗ TXT ФАЙЛА
        // ═══════════════════════════════════════════════════════════════
        
        // Структура для хранения тем и ссылок
        let RULES_TOPICS = [];
        
        // Загружаем ссылки из TXT файла
        async function loadRulesLinksFromTxt() {
            try {
                console.log('📥 Загружаю ссылки из RULES_LINKS.txt...');
                
                // Попробуем загрузить файл
                const response = await fetch('RULES_LINKS.txt');
                
                if (!response.ok) {
                    console.warn('⚠️ Не найден RULES_LINKS.txt, использую встроенные ссылки');
                    return loadDefaultRulesLinks();
                }
                
                const text = await response.text();
                const lines = text.split('\n');
                const topics = [];
                
                for (const line of lines) {
                    // Пропускаем комментарии и пустые строки
                    if (line.trim().startsWith('#') || !line.trim()) {
                        continue;
                    }
                    
                    // Парсим формат: Описание темы (ссылка)
                    const match = line.match(/^(.+?)\s*\((.+?)\)\s*$/);
                    
                    if (match) {
                        const description = match[1].trim();
                        const url = match[2].trim();
                        
                        if (url.startsWith('http')) {
                            topics.push({
                                description: description,
                                url: url,
                                keywords: extractKeywords(description)
                            });
                            
                            console.log(`✓ Загружена тема: ${description.substring(0, 50)}...`);
                        }
                    }
                }
                
                if (topics.length > 0) {
                    console.log(`✅ Загружено ${topics.length} тем из RULES_LINKS.txt`);
                    return topics;
                } else {
                    console.warn('⚠️ TXT файл пустой, использую встроенные ссылки');
                    return loadDefaultRulesLinks();
                }
                
            } catch (error) {
                console.error('❌ Ошибка загрузки RULES_LINKS.txt:', error);
                console.log('📦 Использую встроенные ссылки');
                return loadDefaultRulesLinks();
            }
        }
        
        // Извлекаем ключевые слова из описания для поиска
        function extractKeywords(description) {
            const text = description.toLowerCase();
            const keywords = [];
            
            // Базовые правила
            if (text.includes('dm') || text.includes('rdm')) keywords.push('dm', 'deathmatch', 'убийство', 'убива', 'убить');
            if (text.includes('vdm')) keywords.push('vdm', 'машин', 'транспорт', 'переезд');
            if (text.includes('pg') || text.includes('powergaming')) keywords.push('pg', 'powergaming', 'повергейм');
            if (text.includes('mg') || text.includes('metagaming')) keywords.push('mg', 'metagaming', 'метагейм');
            if (text.includes('nlr')) keywords.push('nlr', 'смерть', 'возрожд');
            if (text.includes('rk') || text.includes('tk') || text.includes('sk')) keywords.push('rk', 'tk', 'sk', 'реванш', 'убийство');
            
            // Зоны
            if (text.includes('зелен') || text.includes('green')) keywords.push('зелен', 'зона', 'green', 'больниц', 'полиц', 'госпиталь', 'government');
            if (text.includes('гетто') || text.includes('ghetto') || text.includes('красн')) keywords.push('гетто', 'ghetto', 'банд', 'территор');
            
            // Действия
            if (text.includes('ограбл') || text.includes('граб')) keywords.push('ограбл', 'граб', 'банк', 'магазин', 'инкассатор', 'маска');
            if (text.includes('похищ') || text.includes('заложник')) keywords.push('похищ', 'заложник', 'kidnap', 'capture');
            
            // Организации
            if (text.includes('гос') || text.includes('государ')) keywords.push('гос', 'государ', 'полиц', 'police', 'ems', 'медик', 'government', 'army', 'fib');
            if (text.includes('фракц') || text.includes('организац')) keywords.push('фракц', 'организац', 'лидер', 'зам');
            
            // Транспорт
            if (text.includes('транспорт') || text.includes('машин')) keywords.push('транспорт', 'машин', 'авто', 'погон', 'дтп');
            
            return keywords;
        }
        
        // Встроенные ссылки на случай если TXT не загрузился
        function loadDefaultRulesLinks() {
            console.log('📦 Загружаю встроенные ссылки...');
            return [
                {
                    description: 'Основные правила где DM, RDM, RK, TK, VDM, PG, MG, NLR',
                    url: 'https://forum.gta5rp.com/threads/pravila-proekta.652405/',
                    keywords: ['dm', 'rdm', 'vdm', 'pg', 'mg', 'nlr', 'убийство', 'правила']
                },
                {
                    description: 'Основные правила Majestic',
                    url: 'https://forum.majestic-rp.ru/threads/obshhie-pravila-servera.1/',
                    keywords: ['dm', 'rdm', 'vdm', 'pg', 'mg', 'nlr', 'убийство', 'правила', 'majestic']
                }
            ];
        }
        
        // Инициализируем загрузку при старте
        loadRulesLinksFromTxt().then(topics => {
            RULES_TOPICS = topics;
            console.log('✅ Ссылки на правила готовы!');
            
            // Запускаем автоматическое сканирование форумов
            startForumAutoScraping();
        });

        // ═══════════════════════════════════════════════════════════════
        // 🌐 АВТОМАТИЧЕСКОЕ СКАНИРОВАНИЕ ФОРУМОВ GTA5RP & MAJESTIC
        // ═══════════════════════════════════════════════════════════════
        
        // База данных всех просканированных страниц
        const FORUM_DATABASE = {
            gta5rp: {
                indexed: false,
                pages: [],
                lastUpdate: null
            },
            majestic: {
                indexed: false,
                pages: [],
                lastUpdate: null
            }
        };
        
        // Форумы для сканирования
        const FORUM_BASES = {
            gta5rp: {
                name: 'GTA 5 RP',
                baseUrl: 'https://forum.gta5rp.com',
                rulesSection: 'https://forum.gta5rp.com/forums/pravila/',
                servers: ['Arizona', 'Chocolate', 'Rodina', 'Phoenix', 'Mesa', 'Red-Rock', 
                         'Yuma', 'Surprise', 'Prescott', 'Glendale', 'Kingman', 'Winslow']
            },
            majestic: {
                name: 'Majestic RP',
                baseUrl: 'https://forum.majestic-rp.ru',
                rulesSection: 'https://forum.majestic-rp.ru/forums/pravila-servera/',
                servers: ['Majestic01', 'Majestic02', 'Majestic03', 'Majestic04', 'Majestic05', 'Majestic06']
            }
        };
        
        // Запуск автоматического сканирования
        async function startForumAutoScraping() {
            console.log('🌐 Запуск автоматического сканирования форумов GTA5RP и Majestic...');
            
            // Проверяем кэш
            const cacheKey = 'forum_database_cache';
            const cached = localStorage.getItem(cacheKey);
            
            if (cached) {
                try {
                    const data = JSON.parse(cached);
                    const cacheAge = Date.now() - (data.timestamp || 0);
                    
                    // Если кэш свежий (меньше 24 часов)
                    if (cacheAge < 24 * 60 * 60 * 1000) {
                        console.log(`📦 Используем кэш форума (возраст: ${Math.round(cacheAge/3600000)} ч)`);
                        FORUM_DATABASE.gta5rp = data.gta5rp || FORUM_DATABASE.gta5rp;
                        FORUM_DATABASE.majestic = data.majestic || FORUM_DATABASE.majestic;
                        return;
                    }
                } catch (e) {
                    console.warn('⚠️ Ошибка чтения кэша');
                }
            }
            
            console.log('🔍 Сканирую форумы в фоновом режиме...');
            
            // GTA5RP
            scrapeForumSection('gta5rp', FORUM_BASES.gta5rp.rulesSection)
                .then(pages => {
                    FORUM_DATABASE.gta5rp.pages = pages;
                    FORUM_DATABASE.gta5rp.indexed = true;
                    FORUM_DATABASE.gta5rp.lastUpdate = Date.now();
                    console.log(`✅ GTA5RP: ${pages.length} страниц проиндексировано`);
                    saveForumDatabaseToCache();
                })
                .catch(err => console.error('❌ Ошибка GTA5RP:', err));
            
            // Majestic (через 5 сек)
            setTimeout(() => {
                scrapeForumSection('majestic', FORUM_BASES.majestic.rulesSection)
                    .then(pages => {
                        FORUM_DATABASE.majestic.pages = pages;
                        FORUM_DATABASE.majestic.indexed = true;
                        FORUM_DATABASE.majestic.lastUpdate = Date.now();
                        console.log(`✅ Majestic: ${pages.length} страниц проиндексировано`);
                        saveForumDatabaseToCache();
                    })
                    .catch(err => console.error('❌ Ошибка Majestic:', err));
            }, 5000);
        }
        
        // Сканирование раздела форума
        async function scrapeForumSection(forumKey, sectionUrl) {
            console.log(`📥 Сканирую: ${sectionUrl}`);
            
            try {
                const html = await fetchPageHTML(sectionUrl);
                if (!html) return [];
                
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                const threadLinks = [];
                const selectors = [
                    'a.PreviewTooltip',
                    '.structItem-title a',
                    'h3.threadTitle a',
                    '.discussionListItem .title a'
                ];
                
                for (const selector of selectors) {
                    const links = doc.querySelectorAll(selector);
                    links.forEach(link => {
                        const href = link.getAttribute('href');
                        const title = link.textContent?.trim() || '';
                        
                        if (href && title && href.includes('threads/')) {
                            let fullUrl = href;
                            if (href.startsWith('/')) {
                                fullUrl = FORUM_BASES[forumKey].baseUrl + href;
                            }
                            
                            threadLinks.push({
                                title: title,
                                url: fullUrl,
                                forum: forumKey
                            });
                        }
                    });
                    
                    if (threadLinks.length > 0) break;
                }
                
                console.log(`📊 Найдено ${threadLinks.length} тем`);
                return threadLinks.slice(0, 20); // Первые 20
                
            } catch (error) {
                console.error('❌ Ошибка сканирования:', error);
                return [];
            }
        }
        
        // Загрузка HTML страницы
        async function fetchPageHTML(url) {
            const corsProxies = [
                'https://api.allorigins.win/raw?url=',
                'https://corsproxy.io/?',
                'https://api.codetabs.com/v1/proxy?quest=',
                'https://cors-anywhere.herokuapp.com/',
                'https://thingproxy.freeboard.io/fetch/',
                'https://yacdn.org/proxy/'
            ];
            
            for (const proxy of corsProxies) {
                try {
                    const response = await fetch(proxy + encodeURIComponent(url), {
                        method: 'GET',
                        headers: { 'Accept': 'text/html' }
                    });
                    
                    if (response.ok) {
                        return await response.text();
                    }
                } catch (err) {
                    continue;
                }
            }
            
            return null;
        }
        
        // Сохранение в localStorage
        function saveForumDatabaseToCache() {
            try {
                const data = {
                    timestamp: Date.now(),
                    gta5rp: FORUM_DATABASE.gta5rp,
                    majestic: FORUM_DATABASE.majestic
                };
                
                localStorage.setItem('forum_database_cache', JSON.stringify(data));
                console.log('💾 База форума сохранена');
            } catch (e) {
                console.warn('⚠️ Не удалось сохранить кэш');
            }
        }
        
        // ═══════════════════════════════════════════════════════════════
        // 🔍 УМНЫЙ ПОИСК ПО БАЗЕ С УЧЕТОМ СЕРВЕРА
        // ═══════════════════════════════════════════════════════════════
        
        function searchInForumDatabase(question, serverName, userServer) {
            const lowerQ = question.toLowerCase();
            const forumKey = serverName.toLowerCase().includes('majestic') ? 'majestic' : 'gta5rp';
            const database = FORUM_DATABASE[forumKey];
            
            if (!database.indexed || database.pages.length === 0) {
                console.log('⚠️ База еще не проиндексирована');
                return [];
            }
            
            console.log(`🔍 Ищу в базе ${forumKey} (${database.pages.length} страниц)`);
            
            const results = [];
            const keywords = extractSearchKeywords(lowerQ);
            
            for (const page of database.pages) {
                const pageTitle = page.title.toLowerCase();
                let score = 0;
                
                // Ключевые слова
                for (const keyword of keywords) {
                    if (pageTitle.includes(keyword)) {
                        score += 3;
                    }
                }
                
                // Сервер пользователя - ВЫСОКИЙ ПРИОРИТЕТ
                if (userServer && pageTitle.includes(userServer.toLowerCase())) {
                    score += 5;
                }
                
                if (score > 0) {
                    results.push({ ...page, score: score });
                }
            }
            
            results.sort((a, b) => b.score - a.score);
            
            if (results.length > 0) {
                console.log(`✅ Найдено ${results.length} релевантных:`);
                results.slice(0, 3).forEach((r, i) => {
                    console.log(`  ${i+1}. ${r.title.substring(0, 60)}... (${r.score})`);
                });
            }
            
            return results.slice(0, 2);
        }
        
        // Извлечение ключевых слов
        function extractSearchKeywords(question) {
            const keywords = [];
            const q = question.toLowerCase();
            
            if (q.includes('dm') || q.includes('убий')) keywords.push('dm', 'rdm', 'убийств');
            if (q.includes('vdm') || q.includes('машин')) keywords.push('vdm', 'транспорт');
            if (q.includes('pg')) keywords.push('pg', 'powergaming');
            if (q.includes('mg')) keywords.push('mg', 'metagaming');
            if (q.includes('nlr')) keywords.push('nlr');
            if (q.includes('зелен') || q.includes('больниц')) keywords.push('зелен', 'green', 'зона');
            if (q.includes('гетто') || q.includes('банд')) keywords.push('гетто', 'ghetto');
            if (q.includes('граб') || q.includes('ограбл')) keywords.push('ограбл', 'грабеж');
            if (q.includes('похит')) keywords.push('похищ', 'заложник');
            if (q.includes('гос') || q.includes('полиц')) keywords.push('государ', 'police', 'ems');
            if (q.includes('фракц')) keywords.push('фракц', 'организац');
            
            return keywords;
        }

        // Кэш для загруженных правил (чтобы не парсить каждый раз)
        const rulesCache = {};

        // ═══════════════════════════════════════════════════════════════
        // 🌐 ФУНКЦИЯ ПАРСИНГА ПРАВИЛ С ФОРУМА
        // ═══════════════════════════════════════════════════════════════
        
        
        // ═══════════════════════════════════════════════════════════════
        // 💾 CACHE API - Агрессивное кэширование ответов форума
        // ═══════════════════════════════════════════════════════════════
        
        const CACHE_NAME = 'badgrules-forum-cache-v1';
        const CACHE_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 дней
        
        // Сохранение в Cache API
        async function saveToCacheAPI(url, content) {
            if (!('caches' in window)) {
                console.warn('⚠️ Cache API не поддерживается');
                return;
            }
            
            try {
                const cache = await caches.open(CACHE_NAME);
                const response = new Response(JSON.stringify({
                    content: content,
                    timestamp: Date.now()
                }), {
                    headers: { 'Content-Type': 'application/json' }
                });
                
                await cache.put(url, response);
                console.log('💾 Сохранено в Cache API:', url);
            } catch (e) {
                console.warn('⚠️ Ошибка Cache API:', e);
            }
        }
        
        // Загрузка из Cache API
        async function loadFromCacheAPI(url) {
            if (!('caches' in window)) return null;
            
            try {
                const cache = await caches.open(CACHE_NAME);
                const response = await cache.match(url);
                
                if (!response) return null;
                
                const data = await response.json();
                
                // Проверяем срок годности
                const age = Date.now() - data.timestamp;
                if (age > CACHE_EXPIRY_MS) {
                    console.log('🗑️ Кэш устарел:', url);
                    await cache.delete(url);
                    return null;
                }
                
                console.log('📦 Загружено из Cache API:', url);
                return data.content;
            } catch (e) {
                console.warn('⚠️ Ошибка чтения Cache API:', e);
                return null;
            }
        }
        
        // Очистка старого кэша
        async function clearExpiredCache() {
            if (!('caches' in window)) return;
            
            try {
                const cache = await caches.open(CACHE_NAME);
                const requests = await cache.keys();
                let deletedCount = 0;
                
                for (const request of requests) {
                    const response = await cache.match(request);
                    if (response) {
                        const data = await response.json();
                        const age = Date.now() - data.timestamp;
                        
                        if (age > CACHE_EXPIRY_MS) {
                            await cache.delete(request);
                            deletedCount++;
                        }
                    }
                }
                
                if (deletedCount > 0) {
                    console.log(`🗑️ Очищено ${deletedCount} устаревших записей`);
                }
            } catch (e) {
                console.warn('⚠️ Ошибка очистки кэша:', e);
            }
        }
        
        // Очищаем кэш при загрузке
        window.addEventListener('load', () => {
            clearExpiredCache();
        });

        async function fetchRulesFromForum(url) {
            // 1. Проверяем память (самый быстрый)
            if (rulesCache[url]) {
                console.log('📦 Правила из памяти:', url);
                return rulesCache[url];
            }
            
            // 2. Проверяем Cache API (средняя скорость)
            const cachedContent = await loadFromCacheAPI(url);
            if (cachedContent) {
                rulesCache[url] = cachedContent; // Сохраняем в память для следующих запросов
                return cachedContent;
            }

            console.log('🌐 Загружаю правила с:', url);
            
            try {
                // Используем CORS прокси для доступа к форуму
                // Расширенный список CORS прокси (проверенные)
                const corsProxies = [
                    'https://api.allorigins.win/raw?url=',
                    'https://corsproxy.io/?',
                    'https://api.codetabs.com/v1/proxy?quest=',
                    'https://cors-anywhere.herokuapp.com/',
                    'https://thingproxy.freeboard.io/fetch/',
                    'https://yacdn.org/proxy/',
                    // Дополнительные надежные прокси
                    'https://proxy.cors.sh/',
                    'https://api.allorigins.win/get?url=',
                ];

                let response = null;
                let proxyUsed = null;

                // Пробуем разные прокси
                for (const proxy of corsProxies) {
                    try {
                        const proxyUrl = proxy + encodeURIComponent(url);
                        response = await fetch(proxyUrl, {
                            method: 'GET',
                            headers: {
                                'Accept': 'text/html,application/xhtml+xml'
                            }
                        });

                        if (response.ok) {
                            proxyUsed = proxy;
                            console.log('✅ Прокси работает:', proxy);
                            break;
                        }
                    } catch (err) {
                        console.warn('⚠️ Прокси не работает:', proxy);
                        continue;
                    }
                }

                if (!response || !response.ok) {
                    console.warn('❌ Не удалось загрузить правила через прокси');
                    return null;
                }

                const html = await response.text();
                
                // Парсим HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // Извлекаем текст правил из разных возможных селекторов
                const selectors = [
                    '.messageText',           // XenForo forum
                    '.message-body',          
                    '.bbWrapper',
                    'article .content',
                    '.post-content',
                    'main article',
                    '.fr-view'
                ];

                let rulesText = '';
                
                for (const selector of selectors) {
                    const elements = doc.querySelectorAll(selector);
                    if (elements.length > 0) {
                        elements.forEach(el => {
                            const text = el.textContent || el.innerText || '';
                            if (text.length > 100) { // Игнорируем короткие тексты
                                rulesText += text + '\n\n';
                            }
                        });
                        
                        if (rulesText.length > 500) {
                            break; // Достаточно текста
                        }
                    }
                }

                // Если ничего не нашли, берем весь body
                if (rulesText.length < 100) {
                    rulesText = doc.body?.textContent || doc.body?.innerText || '';
                }

                // Очищаем текст
                rulesText = rulesText
                    .replace(/\s+/g, ' ')           // Множественные пробелы
                    .replace(/\n{3,}/g, '\n\n')     // Множественные переносы
                    .trim()
                    .substring(0, 5000);            // Ограничиваем размер

                if (rulesText.length > 100) {
                    console.log('✅ Правила загружены, символов:', rulesText.length);
                    
                    // Сохраняем в ВСЕ уровни кэша
                    rulesCache[url] = rulesText;              // Память
                    saveRuleCacheToStorage();                  // localStorage
                    saveToCacheAPI(url, rulesText);           // Cache API
                    
                    return rulesText;
                } else {
                    console.warn('⚠️ Правила слишком короткие или не найдены');
                    return null;
                }

            } catch (error) {
                console.error('❌ Ошибка парсинга правил:', error);
                return null;
            }
        }

        // ═══════════════════════════════════════════════════════════════
        // 🎯 УМНЫЙ ВЫБОР ССЫЛОК НА ОСНОВЕ ВОПРОСА
        // ═══════════════════════════════════════════════════════════════
        
        function selectRelevantLinks(question, serverName) {
            const lowerQ = question.toLowerCase();
            const selectedLinks = [];
            
            // Определяем сервер
            const isMajestic = serverName.toLowerCase().includes('majestic');
            const isGTA5RP = !isMajestic;
            
            console.log(`🔍 Ищу релевантные темы для: "${question}"`);
            console.log(`📊 Доступно тем: ${RULES_TOPICS.length}`);
            
            // Ищем темы по ключевым словам
            for (const topic of RULES_TOPICS) {
                // Проверяем соответствие серверу
                const topicDesc = topic.description.toLowerCase();
                const topicUrl = topic.url.toLowerCase();
                
                if (isMajestic && !topicUrl.includes('majestic')) continue;
                if (isGTA5RP && !topicUrl.includes('gta5rp') && !topicUrl.includes('gta-5')) continue;
                
                // Считаем совпадения ключевых слов
                let matchScore = 0;
                
                // Проверяем все ключевые слова темы
                for (const keyword of topic.keywords) {
                    if (lowerQ.includes(keyword)) {
                        matchScore += 2; // Прямое совпадение в вопросе
                    }
                    if (topicDesc.includes(keyword)) {
                        matchScore += 1; // Совпадение в описании
                    }
                }
                
                // Дополнительные проверки для конкретных слов в вопросе
                if (lowerQ.includes('основн') && topicDesc.includes('основн')) matchScore += 3;
                if (lowerQ.includes('что такое') && topicDesc.includes('основн')) matchScore += 2;
                
                if (matchScore > 0) {
                    selectedLinks.push({
                        topic: topic,
                        score: matchScore,
                        reason: `Совпадений: ${matchScore}`
                    });
                }
            }
            
            // Сортируем по релевантности
            selectedLinks.sort((a, b) => b.score - a.score);
            
            // Логируем результаты
            if (selectedLinks.length > 0) {
                console.log(`✅ Найдено ${selectedLinks.length} релевантных тем:`);
                selectedLinks.slice(0, 3).forEach((link, i) => {
                    console.log(`  ${i+1}. ${link.topic.description.substring(0, 60)}... (Score: ${link.score})`);
                });
            } else {
                console.warn('⚠️ Релевантных тем не найдено, беру первую основную');
                
                // Fallback - берем первую тему для этого сервера
                for (const topic of RULES_TOPICS) {
                    const topicUrl = topic.url.toLowerCase();
                    if (isMajestic && topicUrl.includes('majestic')) {
                        selectedLinks.push({ topic: topic, score: 0, reason: 'Fallback' });
                        break;
                    }
                    if (isGTA5RP && (topicUrl.includes('gta5rp') || topicUrl.includes('gta-5'))) {
                        selectedLinks.push({ topic: topic, score: 0, reason: 'Fallback' });
                        break;
                    }
                }
            }
            
            // Ограничиваем 2 темами для скорости
            return selectedLinks.slice(0, 2).map(link => ({
                description: link.topic.description,
                url: link.topic.url
            }));
        }

        const chatMessages = document.getElementById('chatMessages');
        const chatInput = document.getElementById('chatInput');
        const sendButton = document.getElementById('sendButton');
        const welcomeScreen = document.getElementById('welcomeScreen');
        let isProcessing = false;

        function getCurrentTime() {
            const now = new Date();
            return now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        }

        function addMessage(text, isBot = false) {
            welcomeScreen.classList.add('hidden');

            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isBot ? 'bot' : 'user'}`;

            messageDiv.innerHTML = `
                <div class="message-avatar">${isBot ? 'BR' : 'Вы'}</div>
                <div class="message-content">
                    <div class="message-text">${text}</div>
                    <div class="message-time">${getCurrentTime()}</div>
                </div>
            `;

            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Функция для добавления HTML сообщений (красивые карточки)
        function addMessageHtml(htmlContent, isBot = false) {
            welcomeScreen.classList.add('hidden');

            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isBot ? 'bot' : 'user'}`;

            messageDiv.innerHTML = `
                <div class="message-avatar">${isBot ? 'BR' : 'Вы'}</div>
                <div class="message-content">
                    <div class="message-text html-content">${htmlContent}</div>
                    <div class="message-time">${getCurrentTime()}</div>
                </div>
            `;

            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function addTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot';
            typingDiv.id = 'typingIndicator';
            typingDiv.innerHTML = `
                <div class="message-avatar">BR</div>
                <div class="message-content">
                    <div class="typing-indicator">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            `;
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function removeTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        }

        // ═══════════════════════════════════════════════════════════════
        // 🤖 ФУНКЦИИ ДЛЯ ВЫЗОВА AI МОДЕЛЕЙ
        // ═══════════════════════════════════════════════════════════════

        async function callClaude(messages, config) {
            try {
                // Преобразуем формат сообщений если нужно
                const claudeMessages = messages.map(msg => ({
                    role: msg.role,
                    content: typeof msg.content === 'string' ? msg.content : msg.content
                }));

                const response = await fetch(config.endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'anthropic-version': '2023-06-01',
                        'x-api-key': config.apiKey || ''
                    },
                    body: JSON.stringify({
                        model: config.model,
                        max_tokens: 1024,
                        messages: claudeMessages
                    })
                });

                if (!response.ok) {
                    const errorData = await response.text();
                    console.error('Claude API response:', errorData);
                    throw new Error(`Claude API error: ${response.status}`);
                }

                const data = await response.json();
                if (data.content && data.content[0] && data.content[0].text) {
                    return data.content[0].text;
                }
                throw new Error('Invalid response format from Claude');
            } catch (error) {
                console.error('Claude API error:', error);
                // На claude.ai используем встроенный API
                if (config.useBuiltIn) {
                    return await getBuiltInResponse(messages);
                }
                throw new Error('Claude: ' + error.message);
            }
        }

        // Встроенный API для claude.ai
        async function getBuiltInResponse(messages) {
            // Это простой fallback для встроенного API
            const lastMessage = messages[messages.length - 1];
            if (typeof lastMessage.content === 'string') {
                return `Claude ответ: ${lastMessage.content.substring(0, 50)}...`;
            }
            return 'Получен ответ от Claude';
        }

        async function callGemini(prompt, config) {
            try {
                if (!config.apiKey) {
                    throw new Error('API ключ для Gemini не установлен');
                }

                const response = await fetch(`${config.endpoint}?key=${config.apiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt
                            }]
                        }],
                        generationConfig: {
                            maxOutputTokens: 1024
                        }
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    console.error('Gemini API error:', errorData);
                    throw new Error(`Gemini API error: ${response.status}`);
                }

                const data = await response.json();
                if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
                    return data.candidates[0].content.parts[0].text;
                }
                throw new Error('Invalid response format from Gemini');
            } catch (error) {
                console.error('Gemini API error:', error);
                throw new Error('Gemini: ' + error.message);
            }
        }

        async function callDeepSeek(messages, config) {
            try {
                if (!config.apiKey) {
                    throw new Error('API ключ для DeepSeek не установлен');
                }

                const response = await fetch(config.endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${config.apiKey}`
                    },
                    body: JSON.stringify({
                        model: config.model,
                        messages: messages,
                        max_tokens: 1024
                    })
                });

                if (!response.ok) {
                    const errorData = await response.text();
                    console.error('DeepSeek API error:', errorData);
                    throw new Error(`DeepSeek API error: ${response.status}`);
                }

                const data = await response.json();
                if (data.choices && data.choices[0] && data.choices[0].message) {
                    return data.choices[0].message.content;
                }
                throw new Error('Invalid response format from DeepSeek');
            } catch (error) {
                console.error('DeepSeek API error:', error);
                throw new Error('DeepSeek: ' + error.message);
            }
        }

        async function callGrok(messages, config) {
            try {
                if (!config.apiKey) {
                    throw new Error('API ключ для Grok не установлен');
                }

                const response = await fetch('https://api.x.ai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${config.apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'grok-beta',
                        messages: messages,
                        max_tokens: 1024
                    })
                });

                if (!response.ok) {
                    const errorData = await response.text();
                    console.error('Grok API error:', errorData);
                    throw new Error(`Grok API error: ${response.status}`);
                }

                const data = await response.json();
                if (data.choices && data.choices[0] && data.choices[0].message) {
                    return data.choices[0].message.content;
                }
                throw new Error('Invalid response format from Grok');
            } catch (error) {
                console.error('Grok API error:', error);
                throw new Error('Grok: ' + error.message);
            }
        }

        // ═══════════════════════════════════════════════════════════════
        // 📚 ПОЛНАЯ БАЗА ЗНАНИЙ - ПРАВИЛА GTA 5 RP И MAJESTIC RP
        // Источник: forum.gta5rp.com, forum.majestic-rp.ru
        // ═══════════════════════════════════════════════════════════════

        // Функция для получения текущего проекта
        function getCurrentProject() {
            const selection = loadServerSelection();
            return selection ? selection.project : 'gta5rp';
        }

        // Функция для получения форума текущего проекта
        function getCurrentForumUrl() {
            const project = getCurrentProject();
            return project === 'majestic' ? 'forum.majestic-rp.ru' : 'forum.gta5rp.com';
        }

        // ═══════════════════════════════════════════════════════════════
        // 📚 БАЗА ПРАВИЛ GTA 5 RP
        // ═══════════════════════════════════════════════════════════════

        const GTA5RP_RULES = {
            'dm': {
                term: 'DM (DeathMatch)',
                definition: 'Убийство или нанесение урона без веской IC (In Character) причины.',
                rule: '6.9',
                punishment: 'Деморган от 30 минут',
                examples: ['Убийство случайного игрока без причины', 'Стрельба по прохожим'],
                source: 'forum.gta5rp.com'
            },
            'rdm': {
                term: 'RDM (Random DeathMatch)',
                definition: 'То же что и DM - убийство случайных игроков без ролевой причины.',
                rule: '6.9',
                punishment: 'Деморган от 30 минут',
                examples: ['Убийство без предупреждения', 'Атака без IC причины'],
                source: 'forum.gta5rp.com'
            },
            'vdm': {
                term: 'VDM (Vehicle DeathMatch)',
                definition: 'Убийство или нанесение урона с помощью транспортного средства без IC причины.',
                rule: '6.3',
                punishment: 'Деморган от 30 минут',
                examples: ['Намеренный таран игроков', 'Сбивание пешеходов'],
                source: 'forum.gta5rp.com'
            },
            'db': {
                term: 'DB (DriveBy)',
                definition: 'Намеренное убийство/нанесение урона/таран без веской IC причины на любом виде транспорта, а также постоянное сбивание с целью не дать подняться.',
                rule: '6.3',
                punishment: 'Деморган от 30 минут',
                examples: ['Стрельба из машины без причины', 'Постоянный таран'],
                source: 'forum.gta5rp.com'
            },
            'rk': {
                term: 'RK (Revenge Kill)',
                definition: 'Убийство игрока с целью мести, возвращение на место смерти в течение 15 минут.',
                rule: '6.4',
                punishment: 'Деморган от 20 минут',
                examples: ['Вернулся убить после смерти', 'Месть за предыдущую смерть'],
                source: 'forum.gta5rp.com'
            },
            'nlr': {
                term: 'NLR (New Life Rule)',
                definition: 'После смерти персонажа, он забывает последние 15 минут своей жизни, а также то, что привело к смерти.',
                rule: '6.4.1',
                punishment: 'Деморган от 60 минут',
                examples: ['Использование информации о убийце после смерти', 'Возврат к месту смерти'],
                source: 'forum.gta5rp.com'
            },
            'tk': {
                term: 'TK (Team Kill)',
                definition: 'Убийство/нанесение урона членам своей или союзной фракции, организации без IC причины.',
                rule: '6.5',
                punishment: 'Деморган от 30 минут',
                examples: ['Убийство члена своей банды', 'Атака союзника'],
                source: 'forum.gta5rp.com'
            },
            'sk': {
                term: 'SK (Spawn Kill)',
                definition: 'Убийство/нанесение урона на титульной территории любой фракции/организации, на месте появления игрока.',
                rule: '6.6',
                punishment: 'Деморган 120 минут и warn',
                examples: ['Убийство на спавне банды', 'Кемпинг у выхода из здания'],
                source: 'forum.gta5rp.com'
            },
            'pg': {
                term: 'PG (PowerGaming)',
                definition: 'Присвоение свойств персонажу, не соответствующих реальности, отсутствие страха за свою жизнь.',
                rule: '6.7',
                punishment: 'Деморган от 30 минут',
                examples: ['Игнорирование угрозы оружием', 'Продолжение движения когда по тебе стреляют более 30 секунд'],
                notes: [
                    'Запрещено продолжать движение, если вас обогнали и создали препятствие',
                    'Запрещено продолжать движение, если по вам ведут огонь более ~30 секунд',
                    '1 сотрудник силовой структуры в броне может сопротивляться 2 гражданским'
                ],
                source: 'forum.gta5rp.com'
            },
            'mg': {
                term: 'MG (MetaGaming)',
                definition: 'Использование OOC информации в IC. Использование информации, которую ваш персонаж никак не мог получить в игре.',
                rule: '6.8 / 5.3',
                punishment: 'Деморган от 30 минут / Мут от 120 минут / Блокировка от 1 дня',
                examples: ['Использование инфы из Discord в игре', 'Узнали имя из никнейма над головой'],
                source: 'forum.gta5rp.com'
            },
            'ck': {
                term: 'CK (Character Kill)',
                definition: 'RP-убийство персонажа - полная ликвидация из RP-мира. Разрешен только с целью ликвидации информации.',
                rule: '6.10',
                punishment: 'Требуется одобренная РП ситуация на форуме',
                notes: ['После одобрения игрок обязан сменить Имя_Фамилию', 'FCK допускается без РП ситуации'],
                source: 'forum.gta5rp.com'
            },
            'fck': {
                term: 'FCK (Faction Character Kill)',
                definition: 'Фракционное CK - разрешено с целью ликвидации информации. После FCK игрок не может вернуться в организацию без смены никнейма.',
                rule: '6.10',
                punishment: 'Запрет на возврат во фракцию без смены ника',
                source: 'forum.gta5rp.com'
            },
            'nonrp': {
                term: 'NonRP',
                definition: 'Поведение, нарушающее RolePlay режим игры.',
                rule: '6.1',
                punishment: 'Деморган/Предупреждение',
                source: 'forum.gta5rp.com'
            },
            'nrd': {
                term: 'NRD (NonRP Drive)',
                definition: 'Вождение транспорта в неправдоподобной манере.',
                rule: '6.2',
                punishment: 'Деморган от 10 минут',
                examples: ['Езда по встречке с ДТП', 'Езда по горам на легковушке'],
                source: 'forum.gta5rp.com'
            },
            'зеленая зона': {
                term: 'Зеленая зона (ЗЗ)',
                definition: 'Защищенная территория где запрещены убийства и похищения.',
                rule: '6.11',
                punishment: 'Деморган 120 минут и warn',
                notes: ['Government, FIB, NEWS, LSPD, EMS, LSSD'],
                source: 'forum.gta5rp.com'
            },
            'гетто': {
                term: 'Гетто районы',
                definition: 'Районы где разрешен криминал без маски и DM сотрудников силовых структур участникам банд.',
                notes: ['Цветные квадраты на карте', 'Разрешен любой криминал без маски'],
                source: 'forum.gta5rp.com'
            },
            'похищение': {
                term: 'Правила похищения',
                definition: 'Похищения могут проводиться для: получения информации, получения выкупа, посвящений или FCK.',
                rule: '6.33',
                notes: ['Унижение жертвы только по согласию', 'Запрещено выходить из игры в процессе'],
                source: 'forum.gta5rp.com'
            },
            'маска': {
                term: 'Использование маски',
                definition: 'Похищения, захваты, теракты должны сопровождаться использованием маски.',
                rule: '6.31',
                punishment: 'Деморган от 30 минут',
                exceptions: ['Самооборона', 'IC конфликт', 'Территория гетто'],
                source: 'forum.gta5rp.com'
            },
            'читы': {
                term: 'Использование читов',
                definition: 'Запрещено использование любых читов, модов, программ, скриптов, дающих преимущество.',
                rule: '1.7',
                punishment: 'Блокировка от 3 дней / Перманентная блокировка / Черный список',
                source: 'forum.gta5rp.com'
            },
            'оскорбления': {
                term: 'Оскорбления',
                definition: 'Запрещены любые формы оскорблений, издевательств, расизма, национализма в OOC чатах.',
                rule: '5.4',
                punishment: 'Мут от 180 минут / Деморган от 120 минут / Блокировка от 5 дней',
                source: 'forum.gta5rp.com'
            },
            'твинк': {
                term: 'Твинк (второй персонаж)',
                definition: 'Запрещено иметь твинк в криминальных организациях, если другой персонаж в гос. структуре.',
                rule: '2.6',
                punishment: 'Warn на всех персонажей во фракциях',
                source: 'forum.gta5rp.com'
            },
            'флуд': {
                term: 'Флуд',
                definition: '3 и более повторяющихся сообщений от одного игрока.',
                rule: '5.6',
                punishment: 'Мут от 60 минут',
                source: 'forum.gta5rp.com'
            },
            'деморган': {
                term: 'Деморган',
                definition: 'Тюремное наказание в игре на определенное время.',
                examples: ['Деморган 30 минут', 'Деморган 120 минут'],
                source: 'forum.gta5rp.com'
            },
            'ic': {
                term: 'IC (In Character)',
                definition: 'Информация и действия в рамках ролевой игры, от лица персонажа.',
                source: 'forum.gta5rp.com'
            },
            'ooc': {
                term: 'OOC (Out Of Character)',
                definition: 'Информация и общение вне ролевой игры, от лица игрока.',
                examples: ['Чат /b', 'Discord', 'Реальная информация'],
                source: 'forum.gta5rp.com'
            }
        };

        // ═══════════════════════════════════════════════════════════════
        // 📚 БАЗА ПРАВИЛ MAJESTIC RP
        // ═══════════════════════════════════════════════════════════════

        const MAJESTIC_RULES = {
            'dm': {
                term: 'DM (DeathMatch)',
                definition: 'Убийство или нанесение повреждений игроку без весомой внутриигровой (RP) причины.',
                rule: '3.1',
                punishment: 'Тюрьма от 30 минут / Бан',
                examples: ['Убийство случайного игрока', 'Стрельба без причины'],
                source: 'forum.majestic-rp.ru'
            },
            'rdm': {
                term: 'RDM (Random DeathMatch)',
                definition: 'Случайное убийство игроков без какой-либо ролевой причины.',
                rule: '3.1',
                punishment: 'Тюрьма от 30 минут / Бан',
                examples: ['Убийство первого встречного', 'Массовые убийства'],
                source: 'forum.majestic-rp.ru'
            },
            'vdm': {
                term: 'VDM (Vehicle DeathMatch)',
                definition: 'Намеренное убийство или нанесение урона игрокам с использованием транспортного средства.',
                rule: '3.2',
                punishment: 'Тюрьма от 30 минут / Бан',
                examples: ['Таран игроков', 'Наезд на пешеходов'],
                source: 'forum.majestic-rp.ru'
            },
            'rk': {
                term: 'RK (Revenge Kill)',
                definition: 'Убийство игрока с целью мести после своей смерти. Возврат на место смерти с целью отомстить.',
                rule: '3.3',
                punishment: 'Тюрьма от 20 минут',
                examples: ['Вернулся на место смерти для мести', 'Преследование убийцы'],
                source: 'forum.majestic-rp.ru'
            },
            'nlr': {
                term: 'NLR (New Life Rule)',
                definition: 'Правило новой жизни - после смерти персонаж забывает все события, которые привели к его гибели.',
                rule: '3.4',
                punishment: 'Тюрьма от 60 минут',
                examples: ['Использование информации о убийце', 'Возврат к месту событий'],
                notes: ['Персонаж не помнит последние 30 минут до смерти'],
                source: 'forum.majestic-rp.ru'
            },
            'pg': {
                term: 'PG (PowerGaming)',
                definition: 'Отыгрыш нереалистичных действий, использование сверхспособностей, отсутствие страха смерти.',
                rule: '3.5',
                punishment: 'Тюрьма от 30 минут',
                examples: ['Игнорирование направленного оружия', 'Сверхчеловеческие способности'],
                notes: ['Необходимо реалистично реагировать на угрозы'],
                source: 'forum.majestic-rp.ru'
            },
            'mg': {
                term: 'MG (MetaGaming)',
                definition: 'Использование информации полученной вне игры (Discord, стрим, и т.д.) для получения преимущества в игре.',
                rule: '3.6',
                punishment: 'Тюрьма от 30 минут / Бан',
                examples: ['Использование инфы из Discord', 'Стримснайпинг', 'Чтение ников над головами'],
                source: 'forum.majestic-rp.ru'
            },
            'tk': {
                term: 'TK (Team Kill)',
                definition: 'Убийство членов своей организации, фракции или команды без ролевой причины.',
                rule: '3.7',
                punishment: 'Тюрьма от 30 минут / Увольнение из фракции',
                source: 'forum.majestic-rp.ru'
            },
            'sk': {
                term: 'SK (Spawn Kill)',
                definition: 'Убийство игроков на точках возрождения или в защищенных зонах.',
                rule: '3.8',
                punishment: 'Тюрьма от 60 минут / Бан',
                source: 'forum.majestic-rp.ru'
            },
            'ck': {
                term: 'CK (Character Kill)',
                definition: 'Полное убийство персонажа с удалением всей его истории. Требует согласования с администрацией.',
                rule: '3.9',
                punishment: 'Только с разрешения администрации',
                notes: ['Требуется веская RP причина', 'Согласование обязательно'],
                source: 'forum.majestic-rp.ru'
            },
            'fear rp': {
                term: 'Fear RP (Страх за жизнь)',
                definition: 'Обязательное правило - персонаж должен бояться за свою жизнь когда ему угрожают оружием.',
                rule: '3.10',
                punishment: 'Тюрьма от 30 минут',
                examples: ['Игнорирование угрозы пистолетом', 'Побег под прицелом'],
                notes: ['При угрозе оружием необходимо подчиняться', 'Исключение: численное преимущество 3:1'],
                source: 'forum.majestic-rp.ru'
            },
            'nonrp': {
                term: 'NonRP',
                definition: 'Нереалистичное поведение, нарушающее атмосферу ролевой игры.',
                rule: '3.11',
                punishment: 'Предупреждение / Тюрьма',
                examples: ['Прыжки на месте', 'Нереалистичное вождение'],
                source: 'forum.majestic-rp.ru'
            },
            'зеленая зона': {
                term: 'Зеленая зона (Green Zone)',
                definition: 'Безопасная территория где запрещены любые преступления и насилие.',
                rule: '4.1',
                punishment: 'Тюрьма от 60 минут / Бан',
                notes: ['Больницы', 'Полицейские участки', 'Государственные здания'],
                source: 'forum.majestic-rp.ru'
            },
            'красная зона': {
                term: 'Красная зона (Red Zone)',
                definition: 'Опасная территория где разрешены преступления и PvP без предупреждения.',
                rule: '4.2',
                notes: ['Гетто районы', 'Криминальные территории'],
                source: 'forum.majestic-rp.ru'
            },
            'гетто': {
                term: 'Гетто',
                definition: 'Криминальные районы где разрешены убийства и ограбления с минимальными ограничениями.',
                rule: '4.2',
                notes: ['PvP разрешен', 'Маска не обязательна для членов банд'],
                source: 'forum.majestic-rp.ru'
            },
            'похищение': {
                term: 'Правила похищения',
                definition: 'Похищение игроков разрешено только с ролевой причиной и соблюдением правил.',
                rule: '5.1',
                notes: ['Максимум 2 часа удержания', 'Запрещено похищать в зеленых зонах', 'Нельзя требовать более $50,000'],
                source: 'forum.majestic-rp.ru'
            },
            'ограбление': {
                term: 'Правила ограбления',
                definition: 'Ограбление игроков разрешено с соблюдением определенных правил.',
                rule: '5.2',
                notes: ['Можно забрать максимум $10,000', 'Нельзя грабить в зеленых зонах', 'Нужна RP причина'],
                source: 'forum.majestic-rp.ru'
            },
            'читы': {
                term: 'Использование читов',
                definition: 'Любое использование сторонних программ для получения преимущества строго запрещено.',
                rule: '1.1',
                punishment: 'Перманентный бан',
                source: 'forum.majestic-rp.ru'
            },
            'оскорбления': {
                term: 'Оскорбления',
                definition: 'Запрещены оскорбления, расизм, дискриминация как в игре так и вне игры.',
                rule: '2.1',
                punishment: 'Мут / Бан от 24 часов',
                source: 'forum.majestic-rp.ru'
            },
            'ic': {
                term: 'IC (In Character)',
                definition: 'Действия и общение от лица вашего игрового персонажа.',
                source: 'forum.majestic-rp.ru'
            },
            'ooc': {
                term: 'OOC (Out Of Character)',
                definition: 'Общение вне роли, от лица игрока. Используйте чат /b для OOC общения.',
                source: 'forum.majestic-rp.ru'
            },
            'деморган': {
                term: 'Тюрьма (Demorgan)',
                definition: 'Игровое наказание - отправка персонажа в тюрьму на определенное время.',
                source: 'forum.majestic-rp.ru'
            },
            'твинк': {
                term: 'Твинк (Второй персонаж)',
                definition: 'Второй персонаж на аккаунте. Запрещено использовать для передачи имущества между персонажами.',
                rule: '2.5',
                punishment: 'Бан / Удаление персонажа',
                source: 'forum.majestic-rp.ru'
            }
        };

        // Функция для получения правил текущего проекта
        function getRulesDatabase() {
            const project = getCurrentProject();
            return project === 'majestic' ? MAJESTIC_RULES : GTA5RP_RULES;
        }

        // Функция поиска по базе знаний - ЗАВИСИТ ОТ ВЫБРАННОГО ПРОЕКТА
        function searchRulesDatabase(query) {
            const lowerQuery = query.toLowerCase();
            const results = [];

            // Получаем базу правил текущего проекта
            const rulesDb = getRulesDatabase();
            const forumUrl = getCurrentForumUrl();

            for (const [key, data] of Object.entries(rulesDb)) {
                const searchText = [
                    key,
                    data.term || '',
                    data.definition || '',
                    (data.examples || []).join(' '),
                    (data.notes || []).join(' ')
                ].join(' ').toLowerCase();

                if (searchText.includes(lowerQuery) || lowerQuery.includes(key)) {
                    results.push({ key, ...data, source: forumUrl });
                }
            }

            return results;
        }

        // Функция форматирования ответа по правилам - КРАСИВЫЙ HTML
        function formatRuleResponse(ruleData) {
            let html = `<div class="rule-card">`;

            // Заголовок
            html += `<div class="rule-header">
                <span class="rule-icon">📜</span>
                <span class="rule-title">${ruleData.term}</span>
                ${ruleData.rule ? `<span class="rule-badge">Правило ${ruleData.rule}</span>` : ''}
            </div>`;

            // Определение
            html += `<div class="rule-definition">${ruleData.definition}</div>`;

            // Наказание
            if (ruleData.punishment) {
                html += `<div class="rule-section">
                    <div class="punishment-box">
                        <span class="punishment-icon">⚖️</span>
                        <span class="punishment-text">${ruleData.punishment}</span>
                    </div>
                </div>`;
            }

            // Примеры
            if (ruleData.examples && ruleData.examples.length > 0) {
                html += `<div class="rule-section">
                    <div class="rule-section-title">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Примеры
                    </div>
                    <ul class="examples-list">
                        ${ruleData.examples.map(ex => `<li>${ex}</li>`).join('')}
                    </ul>
                </div>`;
            }

            // Примечания
            if (ruleData.notes && ruleData.notes.length > 0) {
                html += `<div class="rule-section">
                    <div class="rule-section-title">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        Важно знать
                    </div>
                    <ul class="notes-list">
                        ${ruleData.notes.map(note => `<li>${note}</li>`).join('')}
                    </ul>
                </div>`;
            }

            // Исключения
            if (ruleData.exceptions) {
                const exceptionsText = Array.isArray(ruleData.exceptions) ? ruleData.exceptions.join(', ') : ruleData.exceptions;
                html += `<div class="rule-section">
                    <div class="rule-section-title">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        Исключения
                    </div>
                    <div style="background: rgba(34, 197, 94, 0.1); border-left: 3px solid #22c55e; padding: 0.6rem 1rem; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #86efac;">
                        ✅ ${exceptionsText}
                    </div>
                </div>`;
            }

            // Источник
            if (ruleData.source) {
                html += `<div class="rule-source">
                    <span>🔗</span>
                    <span>Источник:</span>
                    <a href="https://${ruleData.source}" target="_blank">${ruleData.source}</a>
                </div>`;
            }

            html += `</div>`;
            return html;
        }

        // Форматирование для нескольких результатов
        function formatMultipleResults(results) {
            let html = `<div class="multi-results">
                <div style="color: var(--text-secondary); margin-bottom: 0.5rem;">📚 Найдено ${results.length} результатов:</div>`;

            results.slice(0, 3).forEach((rule, i) => {
                html += `<div class="mini-rule-card">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                        <span style="font-size: 1.1rem;">📜</span>
                        <span style="font-weight: 600; color: var(--text-primary);">${rule.term}</span>
                        ${rule.rule ? `<span class="rule-badge" style="margin-left: auto;">Правило ${rule.rule}</span>` : ''}
                    </div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${rule.definition}</div>
                    ${rule.punishment ? `<div style="font-size: 0.85rem; color: #ff9999;">⚖️ ${rule.punishment}</div>` : ''}
                </div>`;
            });

            if (results.length > 3) {
                html += `<div style="text-align: center; padding: 0.75rem; color: var(--text-secondary); font-size: 0.85rem;">
                    💡 Уточните запрос для более точного результата
                </div>`;
            }

            html += `</div>`;
            return html;
        }

        // Старая база знаний для обратной совместимости
        const KNOWLEDGE_BASE = {
            'криминал': {
                title: '🏴 КРИМИНАЛ - ПРАВИЛА',
                content: 'Смотри правила DM, DB, похищение, маска, гетто'
            },
            'полиция': {
                title: '🚔 ПОЛИЦИЯ',
                content: 'Смотри правила зеленая зона, ems, pg'
            },
            'мета': {
                title: '🚫 МЕТАГЕЙМ',
                content: 'Смотри правило MG (MetaGaming)'
            },
            'зоны': {
                title: '📍 ЗОНЫ',
                content: 'Смотри правила: зеленая зона, гетто'
            },
            'наказания': {
                title: '⚖️ НАКАЗАНИЯ',
                content: 'Смотри: demorgan, warn, блокировка'
            },
            'фракции': {
                title: '👥 ФРАКЦИИ',
                content: 'Смотри правила: твинк, fck, tk'
            },
            'помощь': {
                title: '🆘 ПОМОЩЬ',
                content: 'Задай конкретный вопрос о правилах, например: "Что такое DM?", "Правила похищения", "Что за NLR?"'
            }
        };

        // Улучшенная функция поиска по базе знаний
        function searchKnowledgeBase(query) {
            const lq = query.toLowerCase();

            // Сначала ищем в полной базе правил RULES_DATABASE
            const rulesResults = searchRulesDatabase(lq);

            if (rulesResults.length > 0) {
                // Нашли в базе правил - форматируем ответ как HTML
                let htmlContent = '';

                if (rulesResults.length === 1) {
                    htmlContent = formatRuleResponse(rulesResults[0]);
                } else {
                    htmlContent = formatMultipleResults(rulesResults);
                }

                return {
                    isHtml: true,
                    content: htmlContent
                };
            }

            // Если не нашли в RULES_DATABASE, ищем по ключевым словам
            const keywords = {
                'криминал': ['криминал', 'преступ', 'грабе', 'воров'],
                'полиция': ['полиц', 'коп', 'лспд', 'police'],
                'мета': ['мета', 'метагейм'],
                'зоны': ['зона', 'район'],
                'наказания': ['наказ', 'штраф', 'бан'],
                'фракции': ['фракц', 'организ'],
                'помощь': ['помощь', 'команд', 'справ']
            };

            for (const [key, words] of Object.entries(keywords)) {
                if (words.some(word => lq.includes(word))) {
                    const kb = KNOWLEDGE_BASE[key];
                    if (kb) {
                        return {
                            isHtml: false,
                            title: kb.title,
                            content: kb.content
                        };
                    }
                }
            }

            // Проверяем на конкретные термины из базы правил
            const ruleTerms = ['dm', 'rdm', 'vdm', 'db', 'rk', 'nlr', 'tk', 'sk', 'pg', 'mg', 'ck', 'fck', 'nonrp', 'nrd', 'деморган', 'warn', 'ic', 'ooc'];

            for (const term of ruleTerms) {
                if (lq.includes(term)) {
                    const rule = RULES_DATABASE[term];
                    if (rule) {
                        return {
                            isHtml: true,
                            content: formatRuleResponse(rule)
                        };
                    }
                }
            }

            return null;
        }

        // ═══════════════════════════════════════════════════════════════
        // 🔍 ПОИСК ПО ФОРУМАМ MAJESTIC RP И GTA5RP
        // ═══════════════════════════════════════════════════════════════

        const FORUMS = [
            'https://forum.majestic-rp.ru',
            'https://forum.gta5rp.com'
        ];

        async function searchForums(query) {
            console.log('🔍 Ищу на форумах:', query);
            const allLinks = [];

            for (const forum of FORUMS) {
                try {
                    const searchQuery = `site:${forum.replace('https://', '')} ${query}`;
                    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
                    const corsProxy = 'https://api.allorigins.win/raw?url=';

                    const response = await fetch(corsProxy + encodeURIComponent(googleUrl), {
                        method: 'GET',
                        headers: {
                            'Accept': 'text/html'
                        }
                    }).catch(err => {
                        console.warn('Прокси не доступен, используем прямой поиск');
                        return null;
                    });

                    if (response && response.ok) {
                        const html = await response.text();
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');

                        const links = [];
                        doc.querySelectorAll('a[href*="' + forum + '"]').forEach(link => {
                            const href = link.href;
                            if (href.includes(forum) && !links.includes(href) && links.length < 2) {
                                links.push(href);
                            }
                        });

                        allLinks.push(...links);
                        console.log(`✅ Найдено на ${forum}:`, links.length);
                    }
                } catch (error) {
                    console.warn(`⚠️ Ошибка поиска на ${forum}:`, error.message);
                }
            }

            return allLinks.length > 0 ? allLinks : getDefaultForumLinks(query);
        }

        async function fetchForumContent(url) {
            try {
                const corsProxy = 'https://api.allorigins.win/raw?url=';
                const response = await fetch(corsProxy + encodeURIComponent(url), {
                    method: 'GET',
                    headers: {
                        'Accept': 'text/html'
                    }
                }).catch(err => {
                    console.warn('CORS прокси не доступен');
                    return null;
                });

                if (!response || !response.ok) {
                    console.warn('Не удалось загрузить контент с', url);
                    return null;
                }

                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                let content = '';
                const selectors = ['.message-body', '.messageText', '.content', 'article', '.post-content', 'main', '.main-content'];

                for (const selector of selectors) {
                    const elements = doc.querySelectorAll(selector);
                    if (elements.length > 0) {
                        elements.forEach(el => {
                            const text = el.textContent.trim();
                            if (text.length > 50) {
                                content += text + '\n\n';
                            }
                        });
                        if (content.length > 100) break;
                    }
                }

                if (!content || content.length < 100) {
                    content = doc.body?.textContent || '';
                }

                return content.replace(/\s+/g, ' ').trim().substring(0, 3000);
            } catch (error) {
                console.warn('⚠️ Ошибка загрузки контента:', error.message);
                return null;
            }
        }

        function getDefaultForumLinks(query) {
            const lq = query.toLowerCase();
            const links = [];

            if (lq.includes('fear') || lq.includes('фир') || lq.includes('страх')) {
                links.push('https://forum.majestic-rp.ru/forums/pravila-servera/');
                links.push('https://forum.gta5rp.com/forums/pravila/');
            }
            if (lq.includes('meta') || lq.includes('мета')) {
                links.push('https://forum.majestic-rp.ru/forums/pravila-servera/');
                links.push('https://forum.gta5rp.com/forums/pravila/');
            }

            if (links.length === 0) {
                links.push('https://forum.majestic-rp.ru/forums/pravila-servera/');
                links.push('https://forum.gta5rp.com/forums/pravila/');
            }

            return links;
        }

        async function sendMessage() {
            const message = chatInput.value.trim();
            if (!message || isProcessing) return;

            isProcessing = true;
            sendButton.disabled = true;

            addMessage(message, false);
            chatInput.value = '';
            // Показываем что AI думает
            addTypingIndicator();
            
            // Показываем статус загрузки в реальном времени
            const statusMsg = addMessage('🔍 Ищу информацию на форуме...', true);
            setTimeout(() => {
                if (statusMsg && statusMsg.parentNode) {
                    statusMsg.remove();
                }
            }, 2000);

            try {
                const config = API_CONFIG[currentModel];
                
                // Проверка перед запросом
                if (!config) {
                    throw new Error(`Модель ${currentModel} не найдена`);
                }
                
                if (!config.enabled) {
                    throw new Error(`${config.name} отключена. ${config.status}`);
                }
                
                if (!config.apiKey) {
                    throw new Error(`Нет API ключа для ${config.name}. Получите ключ и добавьте в код.`);
                }
                
                console.log(`🤖 ${config.name} (${config.icon}) обрабатывает запрос...`);
                
                // Получаем выбранный сервер
                const selectedServer = loadServerSelection();
                const serverName = selectedServer ? 
                    (selectedServer.project === 'gta5rp' ? 'GTA 5 RP' : 'Majestic RP') : 
                    'GTA 5 RP';
                
                const forumUrl = selectedServer ? 
                    (selectedServer.project === 'gta5rp' ? 'forum.gta5rp.com' : 'forum.majestic-rp.ru') : 
                    'forum.gta5rp.com';
                
                // AI ищет на форуме
                console.log(`🔍 ${config.name} ищет ответ на ${forumUrl}...`);
                const aiResult = await getAIResponseFromForum(message, serverName, forumUrl);
                
                removeTypingIndicator();
                
                if (aiResult && aiResult.text) {
                    const formatted = formatBeautifulAIResponse(
                        aiResult.text, 
                        serverName, 
                        forumUrl, 
                        aiResult.wasParsed || false
                    );
                    addMessageHtml(formatted, true);
                } else {
                    showBeautifulHelp(message, serverName);
                }

            } catch (error) {
                console.error('❌ Ошибка:', error);
                removeTypingIndicator();
                
                const errorHtml = formatBeautifulError(error.message);
                addMessageHtml(errorHtml, true);
            } finally {
                isProcessing = false;
                sendButton.disabled = false;
                chatInput.focus();
            }
        }

        // 🌐 AI ищет информацию НА ФОРУМЕ
        async function getAIResponseFromForum(question, serverName, forumUrl) {
            const config = API_CONFIG[currentModel];
            
            console.log(`📡 Отправка запроса к ${config.name}...`);
            
            // ═══════════════════════════════════════════════════════════
            // 👤 ОПРЕДЕЛЯЕМ СЕРВЕР ПОЛЬЗОВАТЕЛЯ
            // ═══════════════════════════════════════════════════════════
            
            let userServer = null;
            try {
                const userData = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
                if (userData && userData.server) {
                    userServer = userData.server;
                    console.log(`👤 Сервер пользователя: ${userServer}`);
                }
            } catch (e) {
                console.log('ℹ️ Сервер не указан в профиле');
            }
            
            // ═══════════════════════════════════════════════════════════
            // 🌐 ИЩЕМ В АВТО-СКРАПЕРЕ (ПРИОРИТЕТ!)
            // ═══════════════════════════════════════════════════════════
            
            console.log('🔍 Ищу в базе проиндексированных страниц...');
            const forumResults = searchInForumDatabase(question, serverName, userServer);
            
            let forumRulesText = '';
            let loadedTopicsInfo = [];
            
            // Если нашли в базе - используем
            if (forumResults.length > 0) {
                console.log(`✅ Использую страницы из базы (${forumResults.length} шт.)`);
                
                for (const page of forumResults) {
                    console.log(`📥 Загружаю: ${page.title.substring(0, 50)}...`);
                    
                    const rules = await fetchRulesFromForum(page.url);
                    
                    if (rules) {
                        forumRulesText += `\n\n=== ${page.title.toUpperCase()} ===\n${rules}\n`;
                        loadedTopicsInfo.push(page.title);
                        console.log(`✅ Загружено: (${rules.length} символов)`);
                    }
                }
            }
            
            // ═══════════════════════════════════════════════════════════
            // 📄 FALLBACK: TXT ФАЙЛ
            // ═══════════════════════════════════════════════════════════
            
            if (!forumRulesText) {
                console.log('📄 База не помогла, использую TXT...');
                const relevantLinks = selectRelevantLinks(question, serverName);
                
                for (const link of relevantLinks) {
                    const shortDesc = link.description.substring(0, 50);
                    console.log(`📥 Загружаю: ${shortDesc}...`);
                    
                    const rules = await fetchRulesFromForum(link.url);
                    
                    if (rules) {
                        forumRulesText += `\n\n=== ${link.description.toUpperCase()} ===\n${rules}\n`;
                        loadedTopicsInfo.push(link.description);
                        console.log(`✅ Загружено: (${rules.length} символов)`);
                    }
                }
            }
            
            // Если совсем ничего - базовый контекст
            if (!forumRulesText) {
                console.warn('⚠️ Использую базовый контекст');
                forumRulesText = `
БАЗОВЫЙ КОНТЕКСТ (правила не загружены):
- Зеленая зона (Government, Police, EMS, News) - ПОЛНОСТЬЮ ЗАПРЕЩЕНЫ грабежи и убийства
- Такси, заправки, магазины - НЕ ЗЕЛЕНАЯ ЗОНА (можно грабить с маской)
- Гетто - разрешен криминал с RP причиной
- Маска ОБЯЗАТЕЛЬНА для грабежей
- DM = убийство без RP причины (запрещено)
- VDM = убийство машиной (запрещено)
`;
            } else {
                console.log('✅ Правила загружены!');
            }
            
            // Информация о сервере для промпта
            const serverInfo = userServer ? `\n\n⚠️ ВАЖНО: Игрок играет на сервере ${userServer}. Если правила отличаются для разных серверов, дай ответ для ${userServer}.` : '';
            
            // УЛУЧШЕННЫЙ ПРОМПТ
            const prompt = `Ты - эксперт по ${serverName} (форум: ${forumUrl}).${serverInfo}

ВОПРОС: "${question}"

ПРАВИЛА С ФОРУМА:
${forumRulesText}

ИНСТРУКЦИИ:
1. Используй ТОЛЬКО информацию из правил выше
2. Если "можно ли..." - дай ЧЕТКИЙ ответ: ДА или НЕТ
3. Объясни ПОЧЕМУ (1-2 предложения)
4. Укажи номер правила если найдешь
5. Максимум 4-5 предложений
${userServer ? `6. Учитывай что игрок на сервере ${userServer}` : ''}

ПРИМЕРЫ:
Вопрос: "Можно грабить такси?"
Ответ: "ДА, такси можно грабить. Такси не зеленая зона. Нужна маска. Правило 6.31."

Вопрос: "Можно убить в больнице?"
Ответ: "НЕТ, больница (EMS) - зеленая зона. Убийства там запрещены. Правило 6.11."

ОТВЕТЬ:`;
            
            try {
                let response;
                
                if (config.type === 'openai') {
                    response = await callOpenAICompatible(config, prompt);
                } else if (config.type === 'gemini') {
                    response = await callGeminiAPI(config, prompt);
                } else if (config.type === 'huggingface') {
                    response = await callHuggingFaceAPI(config, prompt);
                }
                
                console.log(`✅ ${config.name} ответил успешно`);
                
                // Возвращаем объект с текстом и флагом парсинга
                return {
                    text: response,
                    wasParsed: forumRulesText.length > 500 // Если загрузили правила
                };
                
            } catch (error) {
                console.error(`❌ Ошибка ${config.name}:`, error);
                
                // Детальная обработка ошибок
                if (error.message.includes('429')) {
                    throw new Error(`${config.name}: Превышен лимит запросов (429). Попробуйте другую модель или подождите.`);
                } else if (error.message.includes('401') || error.message.includes('403')) {
                    throw new Error(`${config.name}: Неверный API ключ (401/403).`);
                } else if (error.message.includes('quota')) {
                    throw new Error(`${config.name}: Квота исчерпана. Попробуйте другую модель.`);
                } else if (error.message.includes('CORS') || error.message.includes('Failed to fetch')) {
                    throw new Error(`${config.name}: Ошибка сети. Попробуйте другую модель.`);
                }
                
                throw new Error(`${config.name}: ${error.message}`);
            }
        }

        // 🔷 Вызов OpenAI-совместимых API
        async function callOpenAICompatible(config, prompt) {
            const response = await fetch(config.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.apiKey}`
                },
                body: JSON.stringify({
                    model: config.model,
                    messages: [{
                        role: 'user',
                        content: prompt
                    }],
                    temperature: 0.3,
                    max_tokens: 500
                })
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`${config.name} error:`, errorText);
                throw new Error(`${config.name} API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.choices && data.choices[0] && data.choices[0].message) {
                console.log(`✅ ${config.name} ответ получен`);
                return data.choices[0].message.content;
            }
            
            throw new Error(`Неверный формат ответа от ${config.name}`);
        }

        // 🔷 Вызов Google Gemini API
        async function callGeminiAPI(config, prompt) {
            const response = await fetch(`${config.endpoint}?key=${config.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.3,
                        maxOutputTokens: 500
                    }
                })
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Gemini error:', errorText);
                throw new Error(`Gemini API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                console.log('✅ Gemini ответ получен');
                return data.candidates[0].content.parts[0].text;
            }
            
            throw new Error('Неверный формат ответа от Gemini');
        }

        // 🤗 Вызов HuggingFace API
        async function callHuggingFaceAPI(config, prompt) {
            const response = await fetch(config.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.apiKey}`
                },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: 500,
                        temperature: 0.3,
                        return_full_text: false
                    }
                })
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('HuggingFace error:', errorText);
                throw new Error(`HuggingFace API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            // HuggingFace может вернуть массив или объект
            if (Array.isArray(data) && data[0]) {
                console.log('✅ HuggingFace ответ получен');
                return data[0].generated_text || data[0].text || 'Нет ответа';
            } else if (data.generated_text) {
                console.log('✅ HuggingFace ответ получен');
                return data.generated_text;
            }
            
            throw new Error('Неверный формат ответа от HuggingFace');
        }

        // 🎨 КРАСИВЫЙ дизайн ответа AI
        function formatBeautifulAIResponse(text, serverName, forumUrl, wasParsed = false) {
            const config = API_CONFIG[currentModel];
            const modelIcon = config ? config.icon : '🤖';
            const modelName = config ? config.name : currentModel.toUpperCase();
            
            // Определяем ссылку на форум для правил
            const forumLink = forumUrl.includes('gta5rp') ? 
                'https://forum.gta5rp.com/forums/pravila/' : 
                'https://forum.majestic-rp.ru/forums/pravila-servera/';
            
            // Выделяем ДА/НЕТ в тексте
            let formattedText = text
                .replace(/(^|\s)(ДА|DA|YES)(\s|,|\.|$)/gi, '$1<span style="color: #10b981; font-weight: 700;">$2</span>$3')
                .replace(/(^|\s)(НЕТ|NET|NO)(\s|,|\.|$)/gi, '$1<span style="color: #ef4444; font-weight: 700;">$2</span>$3')
                .replace(/Правило\s+([\d.]+)/gi, (match, ruleNum) => {
                    return `<a href="${forumLink}" target="_blank" style="color: var(--accent-primary); font-weight: 600; text-decoration: none; border-bottom: 2px solid var(--accent-primary); transition: all 0.2s; cursor: pointer;" onmouseover="this.style.color='#3b82f6'; this.style.borderColor='#3b82f6'" onmouseout="this.style.color='var(--accent-primary)'; this.style.borderColor='var(--accent-primary)'">Правило ${ruleNum}</a>`;
                });
            
            // Определяем статус источника
            const sourceStatus = wasParsed ? 
                `<span style="padding: 5px 12px; background: rgba(16, 185, 129, 0.15); border-radius: 8px; font-size: 0.75rem; color: var(--accent-success); font-weight: 500;">
                    ✓ Правила с форума
                </span>` :
                `<span style="padding: 5px 12px; background: rgba(251, 191, 36, 0.15); border-radius: 8px; font-size: 0.75rem; color: var(--accent-warning); font-weight: 500;">
                    ⚠️ Базовые знания AI
                </span>`;
            
            return `<div style="background: transparent; border-radius: 12px; overflow: hidden;">
                <!-- Заголовок -->
                <div style="padding: 14px 18px; background: transparent; border-bottom: 1px solid rgba(96, 165, 250, 0.2);">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 1.4rem;">${modelIcon}</span>
                        <div style="flex: 1;">
                            <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--accent-primary);">
                                ${modelName}
                            </div>
                            <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">
                                ${wasParsed ? 'Ответ на основе правил форума' : 'Ответ на основе базовых знаний'}
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Контент -->
                <div style="padding: 18px 0;">
                    <div style="font-size: 0.95rem; line-height: 1.8; color: var(--text-primary);">
                        ${formattedText}
                    </div>
                </div>
                
                <!-- Футер -->
                <div style="padding: 12px 0; display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                    <span style="padding: 5px 12px; background: rgba(96, 165, 250, 0.15); border-radius: 8px; font-size: 0.75rem; color: var(--text-secondary); font-weight: 500;">
                        🎮 ${serverName}
                    </span>
                    <a href="${forumLink}" target="_blank" style="padding: 5px 12px; background: rgba(59, 130, 246, 0.15); border-radius: 8px; font-size: 0.75rem; color: var(--text-secondary); font-weight: 500; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(59, 130, 246, 0.25)'" onmouseout="this.style.background='rgba(59, 130, 246, 0.15)'">
                        🌐 Открыть правила →
                    </a>
                    ${sourceStatus}
                </div>
            </div>`;
        }

        // ⚠️ Красивое форматирование ошибки
        function formatBeautifulError(errorMessage) {
            const availableModels = Object.entries(API_CONFIG)
                .filter(([key, cfg]) => cfg.enabled && cfg.apiKey)
                .map(([key, cfg]) => `<button onclick="switchModel('${key}')" style="padding: 8px 16px; background: rgba(96, 165, 250, 0.15); border: 1px solid rgba(96, 165, 250, 0.3); border-radius: 8px; font-size: 0.85rem; color: var(--text-primary); cursor: pointer; transition: all 0.2s;">${cfg.icon} ${cfg.name}</button>`)
                .join('');
            
            return `<div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05)); border-radius: 12px; overflow: hidden; border: 1px solid rgba(239, 68, 68, 0.2);">
                <!-- Заголовок -->
                <div style="padding: 14px 18px; background: rgba(239, 68, 68, 0.15); border-bottom: 1px solid rgba(239, 68, 68, 0.2);">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 1.4rem;">⚠️</span>
                        <div style="font-size: 0.9rem; font-weight: 700; color: #ef4444;">
                            Ошибка AI
                        </div>
                    </div>
                </div>
                
                <!-- Сообщение -->
                <div style="padding: 18px;">
                    <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-primary); margin-bottom: 16px;">
                        ${errorMessage}
                    </div>
                    
                    ${availableModels ? `
                        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(239, 68, 68, 0.2);">
                            <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 10px;">
                                💡 Попробуйте другую модель:
                            </div>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                ${availableModels}
                            </div>
                        </div>
                    ` : `
                        <div style="margin-top: 16px; padding: 12px; background: rgba(251, 191, 36, 0.1); border-radius: 8px; border-left: 3px solid var(--accent-warning);">
                            <div style="font-size: 0.85rem; font-weight: 600; color: var(--accent-warning); margin-bottom: 6px;">
                                🔧 Как исправить:
                            </div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
                                1. Получите API ключ для Gemini: <a href="https://aistudio.google.com/apikey" target="_blank" style="color: var(--accent-primary);">aistudio.google.com/apikey</a><br>
                                2. Или для Grok: <a href="https://console.x.ai" target="_blank" style="color: var(--accent-primary);">console.x.ai</a><br>
                                3. Добавьте ключ в код (API_CONFIG)
                            </div>
                        </div>
                    `}
                </div>
            </div>`;
        }

        // 📋 Красивая справка
        function showBeautifulHelp(query, serverName) {
            const helpHtml = `<div style="background: linear-gradient(135deg, rgba(96, 165, 250, 0.08), rgba(59, 130, 246, 0.05)); border-radius: 12px; overflow: hidden;">
                <div style="padding: 18px;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
                        <span style="font-size: 1.4rem;">🔍</span>
                        <div>
                            <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">
                                Не удалось найти ответ
                            </div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">
                                По запросу: "${query}"
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(96, 165, 250, 0.15);">
                        <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 12px;">
                            📜 Популярные вопросы:
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px;">
                            <button onclick="askQuickQuestion('Можно грабить такси?')" style="padding: 10px 14px; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 8px; font-size: 0.85rem; color: var(--text-primary); cursor: pointer; text-align: left; transition: all 0.2s;">
                                🚕 Грабить такси?
                            </button>
                            <button onclick="askQuickQuestion('Что такое DM?')" style="padding: 10px 14px; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 8px; font-size: 0.85rem; color: var(--text-primary); cursor: pointer; text-align: left;">
                                💀 Что такое DM?
                            </button>
                            <button onclick="askQuickQuestion('Зеленая зона')" style="padding: 10px 14px; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 8px; font-size: 0.85rem; color: var(--text-primary); cursor: pointer; text-align: left;">
                                🟢 Зеленая зона
                            </button>
                            <button onclick="askQuickQuestion('Правила гетто')" style="padding: 10px 14px; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 8px; font-size: 0.85rem; color: var(--text-primary); cursor: pointer; text-align: left;">
                                🔴 Гетто
                            </button>
                        </div>
                    </div>
                </div>
                
                <div style="padding: 12px 18px; background: rgba(0, 0, 0, 0.2);">
                    <span style="padding: 5px 12px; background: rgba(96, 165, 250, 0.15); border-radius: 8px; font-size: 0.75rem; color: var(--text-secondary); font-weight: 500;">
                        ${serverName}
                    </span>
                </div>
            </div>`;
            
            addMessageHtml(helpHtml, true);
        }

        // 🔄 Функция переключения модели
        function switchModel(modelKey) {
            currentModel = modelKey;
            const config = API_CONFIG[modelKey];
            console.log(`✓ Переключено на ${config.name} ${config.icon}`);
            
            // Показываем уведомление
            const notification = document.createElement('div');
            notification.style.cssText = 'position: fixed; top: 20px; right: 20px; padding: 12px 20px; background: rgba(16, 185, 129, 0.9); color: white; border-radius: 8px; font-size: 0.9rem; font-weight: 600; z-index: 10000; animation: slideIn 0.3s ease-out;';
            notification.textContent = `${config.icon} Переключено на ${config.name}`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }

        // 🎨 Минималистичный дизайн обычного ответа
        function formatMinimalistResponse(title, content, serverName, forumUrl) {
            return `<div style="padding: 0;">
                <div style="padding: 16px 0; border-bottom: 1px solid rgba(96, 165, 250, 0.15);">
                    <div style="font-size: 0.9rem; font-weight: 600; color: var(--accent-primary); margin-bottom: 8px;">
                        ${title}
                    </div>
                    <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-primary);">
                        ${content}
                    </div>
                </div>
                <div style="padding-top: 12px; display: flex; gap: 8px;">
                    <span style="padding: 4px 10px; background: rgba(96, 165, 250, 0.1); border-radius: 6px; font-size: 0.75rem; color: var(--text-secondary);">
                        ${serverName}
                    </span>
                </div>
            </div>`;
        }

        // 📋 Минималистичная справка
        function showMinimalistHelp(query, serverName) {
            const helpHtml = `<div style="padding: 0;">
                <div style="padding: 16px 0; border-bottom: 1px solid rgba(96, 165, 250, 0.15);">
                    <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
                        По запросу "<strong>${query}</strong>" ничего не найдено
                    </div>
                    <div style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-bottom: 10px;">
                        Популярные правила
                    </div>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <button onclick="askQuickQuestion('Что такое DM?')" style="padding: 8px 14px; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 8px; font-size: 0.85rem; color: var(--text-primary); cursor: pointer; transition: all 0.2s;">DM</button>
                        <button onclick="askQuickQuestion('Что такое VDM?')" style="padding: 8px 14px; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 8px; font-size: 0.85rem; color: var(--text-primary); cursor: pointer;">VDM</button>
                        <button onclick="askQuickQuestion('Что такое NLR?')" style="padding: 8px 14px; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 8px; font-size: 0.85rem; color: var(--text-primary); cursor: pointer;">NLR</button>
                        <button onclick="askQuickQuestion('Зеленая зона')" style="padding: 8px 14px; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 8px; font-size: 0.85rem; color: var(--text-primary); cursor: pointer;">Зоны</button>
                    </div>
                </div>
                <div style="padding-top: 12px;">
                    <span style="padding: 4px 10px; background: rgba(96, 165, 250, 0.1); border-radius: 6px; font-size: 0.75rem; color: var(--text-secondary);">
                        ${serverName}
                    </span>
                </div>
            </div>`;
            
            addMessageHtml(helpHtml, true);
        }

        // 🔍 Расширенный поиск в базе данных правил
        function advancedSearchInDatabase(query, selectedServer) {
            const lowerQuery = query.toLowerCase();
            
            // Определяем базу правил в зависимости от сервера
            const rulesDB = selectedServer && selectedServer.project === 'majestic' ? 
                MAJESTIC_RULES : GTA5RP_RULES;
            
            const serverName = selectedServer ? 
                (selectedServer.project === 'gta5rp' ? 'GTA 5 RP' : 'Majestic RP') : 
                'GTA 5 RP';
            
            const forumUrl = selectedServer ? 
                (selectedServer.project === 'gta5rp' ? 'forum.gta5rp.com' : 'forum.majestic-rp.ru') : 
                'forum.gta5rp.com';
            
            // Массив для результатов с приоритетом
            const results = [];
            
            // 1. ПРЯМОЙ ПОИСК - по ключу в базе (наивысший приоритет)
            for (const [key, rule] of Object.entries(rulesDB)) {
                if (lowerQuery.includes(key) || key.includes(lowerQuery)) {
                    results.push({ rule, priority: 10 });
                    break; // Если нашли точное совпадение - сразу возвращаем
                }
            }
            
            // 2. ПОИСК ПО ТЕРМИНУ - в названии правила
            if (results.length === 0) {
                for (const [key, rule] of Object.entries(rulesDB)) {
                    const termLower = rule.term.toLowerCase();
                    if (termLower.includes(lowerQuery) || lowerQuery.includes(termLower.split(' ')[0])) {
                        results.push({ rule, priority: 9 });
                    }
                }
            }
            
            // 3. ПОИСК ПО ОПРЕДЕЛЕНИЮ - в тексте правила
            if (results.length === 0) {
                for (const [key, rule] of Object.entries(rulesDB)) {
                    const defLower = rule.definition.toLowerCase();
                    if (defLower.includes(lowerQuery)) {
                        results.push({ rule, priority: 8 });
                    }
                }
            }
            
            // 4. УМНЫЙ ПОИСК - распознавание намерений
            const intentPatterns = {
                'кого нельзя грабить': ['зеленая зона', 'похищение'],
                'кого можно грабить': ['гетто', 'похищение'],
                'где можно убивать': ['гетто'],
                'где нельзя убивать': ['зеленая зона'],
                'правила убийства': ['dm', 'rdm', 'vdm', 'rk'],
                'правила смерти': ['nlr', 'rk', 'ck'],
                'правила фракций': ['fck', 'tk', 'твинк'],
                'правила машин': ['vdm', 'nrd', 'db'],
                'правила транспорта': ['vdm', 'nrd', 'db'],
                'правила общения': ['ooc', 'ic', 'оскорбления', 'флуд'],
                'читы': ['читы'],
                'страх': ['pg'],
                'мета': ['mg'],
                'информация': ['mg', 'ooc', 'ic']
            };
            
            // Ищем по шаблонам намерений
            if (results.length === 0) {
                for (const [pattern, ruleKeys] of Object.entries(intentPatterns)) {
                    if (lowerQuery.includes(pattern)) {
                        const intentResults = ruleKeys.map(key => rulesDB[key]).filter(r => r);
                        if (intentResults.length > 0) {
                            intentResults.forEach(rule => results.push({ rule, priority: 7 }));
                            break;
                        }
                    }
                }
            }
            
            // 5. КОНТЕКСТНЫЙ ПОИСК - по ключевым словам
            if (results.length === 0) {
                const contextKeywords = {
                    'граб': ['похищение', 'маска', 'зеленая зона'],
                    'убить': ['dm', 'vdm', 'rk', 'зеленая зона'],
                    'убийств': ['dm', 'vdm', 'rk'],
                    'машин': ['vdm', 'nrd', 'db'],
                    'авто': ['vdm', 'nrd', 'db'],
                    'зон': ['зеленая зона', 'гетто'],
                    'маск': ['маска'],
                    'фракц': ['fck', 'tk', 'твинк'],
                    'банд': ['fck', 'tk', 'гетто'],
                    'смерт': ['nlr', 'rk', 'ck'],
                    'реванш': ['rk'],
                    'мест': ['rk', 'nlr'],
                    'забы': ['nlr'],
                    'страх': ['pg'],
                    'стриль': ['dm', 'db'],
                    'тара': ['vdm', 'db']
                };
                
                for (const [keyword, ruleKeys] of Object.entries(contextKeywords)) {
                    if (lowerQuery.includes(keyword)) {
                        const contextResults = ruleKeys.map(key => rulesDB[key]).filter(r => r);
                        if (contextResults.length > 0) {
                            contextResults.forEach(rule => results.push({ rule, priority: 6 }));
                            break;
                        }
                    }
                }
            }
            
            // Если нашли результаты - форматируем
            if (results.length > 0) {
                // Сортируем по приоритету и убираем дубликаты
                const uniqueResults = [];
                const seenTerms = new Set();
                
                results.sort((a, b) => b.priority - a.priority);
                
                for (const {rule} of results) {
                    if (!seenTerms.has(rule.term)) {
                        seenTerms.add(rule.term);
                        uniqueResults.push(rule);
                    }
                }
                
                // Ограничиваем до 3 наиболее релевантных результатов
                const topResults = uniqueResults.slice(0, 3);
                
                return formatDatabaseResults(topResults, serverName, forumUrl, query);
            }
            
            return null;
        }

        // 🎨 Форматирование результатов из базы данных
        function formatDatabaseResults(results, serverName, forumUrl, userQuery = null) {
            let html = `<div class="ai-response-card" style="padding: 20px; background: linear-gradient(135deg, rgba(96, 165, 250, 0.05), rgba(59, 130, 246, 0.05)); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 15px;">`;
            
            // Заголовок
            html += `<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.5rem;">🤖</span>
                <span style="font-weight: 600; color: var(--accent-primary);">BadgRules AI</span>
            </div>`;
            
            // ПРЯМОЙ ОТВЕТ НА ВОПРОС (самое важное!)
            if (userQuery) {
                html += generateDirectAnswer(userQuery, results, serverName);
            }
            
            // Детальная информация о правилах
            html += `<div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid rgba(96, 165, 250, 0.15);">
                <div style="font-size: 1rem; font-weight: 600; margin-bottom: 15px; color: var(--text-secondary);">📋 Подробная информация о правилах:</div>
            </div>`;
            
            // Результаты
            results.forEach((rule, index) => {
                html += `<div style="margin-bottom: ${index < results.length - 1 ? '25px' : '0'}; padding: 15px; background: rgba(0, 0, 0, 0.2); border-radius: 12px; border-left: 4px solid var(--accent-primary);">`;
                
                // Термин с эмодзи
                const emoji = getEmojiForRule(rule.term);
                html += `<div style="font-size: 1.15rem; font-weight: 700; margin-bottom: 10px; color: var(--accent-primary); display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 1.3rem;">${emoji}</span>
                    <span>${rule.term}</span>
                </div>`;
                
                // Определение
                html += `<div style="margin-bottom: 12px; line-height: 1.7; color: var(--text-primary); font-size: 0.95rem;">${rule.definition}</div>`;
                
                // Правило и наказание
                if (rule.rule || rule.punishment) {
                    html += `<div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">`;
                    if (rule.rule) {
                        html += `<span style="padding: 7px 14px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.15)); border-radius: 10px; font-size: 0.85rem; font-weight: 600; border: 1px solid rgba(59, 130, 246, 0.4); color: var(--accent-primary);">📋 Правило ${rule.rule}</span>`;
                    }
                    if (rule.punishment) {
                        html += `<span style="padding: 7px 14px; background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.15)); border-radius: 10px; font-size: 0.85rem; font-weight: 600; border: 1px solid rgba(239, 68, 68, 0.4); color: #ef4444;">⚖️ ${rule.punishment}</span>`;
                    }
                    html += `</div>`;
                }
                
                // Примеры
                if (rule.examples && rule.examples.length > 0) {
                    html += `<div style="margin-top: 12px; padding: 12px; background: rgba(96, 165, 250, 0.08); border-radius: 10px;">
                        <div style="font-size: 0.9rem; font-weight: 600; margin-bottom: 8px; color: var(--accent-primary);">💡 Примеры нарушений:</div>`;
                    rule.examples.forEach(example => {
                        html += `<div style="margin-left: 10px; margin-bottom: 5px; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">• ${example}</div>`;
                    });
                    html += `</div>`;
                }
                
                // Исключения
                if (rule.exceptions && rule.exceptions.length > 0) {
                    html += `<div style="margin-top: 12px; padding: 12px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border-left: 3px solid var(--accent-success);">
                        <div style="font-size: 0.9rem; font-weight: 600; margin-bottom: 8px; color: var(--accent-success);">✅ Исключения:</div>`;
                    rule.exceptions.forEach(exc => {
                        html += `<div style="margin-left: 10px; margin-bottom: 5px; font-size: 0.88rem; color: var(--text-secondary);">• ${exc}</div>`;
                    });
                    html += `</div>`;
                }
                
                // Заметки
                if (rule.notes && rule.notes.length > 0) {
                    html += `<div style="margin-top: 12px; padding: 12px; background: rgba(251, 191, 36, 0.12); border-radius: 10px; border-left: 3px solid var(--accent-warning);">
                        <div style="font-size: 0.9rem; font-weight: 600; margin-bottom: 8px; color: var(--accent-warning);">⚠️ Важно знать:</div>`;
                    rule.notes.forEach(note => {
                        html += `<div style="margin-left: 10px; margin-bottom: 5px; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">• ${note}</div>`;
                    });
                    html += `</div>`;
                }
                
                html += `</div>`;
            });
            
            // Источник
            html += `<div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(96, 165, 250, 0.2);">
                <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px; font-weight: 600;">📍 Источник информации:</div>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <span style="padding: 8px 16px; background: rgba(96, 165, 250, 0.15); border-radius: 12px; font-size: 0.85rem; font-weight: 600; border: 1px solid rgba(96, 165, 250, 0.4);">
                        🎮 ${serverName}
                    </span>
                    <span style="padding: 8px 16px; background: rgba(59, 130, 246, 0.15); border-radius: 12px; font-size: 0.85rem; font-weight: 600; border: 1px solid rgba(59, 130, 246, 0.4);">
                        🌐 ${forumUrl}
                    </span>
                    <span style="padding: 8px 16px; background: rgba(16, 185, 129, 0.15); border-radius: 12px; font-size: 0.85rem; font-weight: 600; border: 1px solid rgba(16, 185, 129, 0.4);">
                        📚 Официальные правила
                    </span>
                </div>
            </div>`;
            
            html += `</div>`;
            return html;
        }

        // 💬 Генерация прямого ответа на вопрос пользователя
        function generateDirectAnswer(query, results, serverName) {
            const lowerQuery = query.toLowerCase();
            let answer = '';
            
            // Анализируем вопрос и даём конкретный ответ
            if (lowerQuery.includes('кого нельзя') && lowerQuery.includes('граб')) {
                answer = `<strong>Нельзя грабить:</strong> Игроков в зелёной зоне (Government, Police, EMS, News). Также нужна маска для ограбления вне гетто.`;
            } else if (lowerQuery.includes('кого можно') && lowerQuery.includes('граб')) {
                answer = `<strong>Можно грабить:</strong> Любых игроков вне зелёной зоны, при наличии маски и RP причины. В гетто маска не требуется.`;
            } else if (lowerQuery.includes('где можно') && lowerQuery.includes('убива')) {
                answer = `<strong>Убивать можно:</strong> В гетто районах (цветные квадраты на карте) - разрешён DM игроков из банд при наличии RP причины.`;
            } else if (lowerQuery.includes('где нельзя') && lowerQuery.includes('убива')) {
                answer = `<strong>Убивать нельзя:</strong> В зелёной зоне (Government, Police, EMS, News) - полностью запрещены убийства и похищения. Наказание: Деморган 120 мин + warn.`;
            } else if (results.length > 0) {
                // Генерируем ответ на основе первого найденного правила
                const mainRule = results[0];
                answer = `<strong>${mainRule.term}:</strong> ${mainRule.definition}`;
                
                if (mainRule.rule) {
                    answer += ` <span style="color: var(--accent-primary); font-weight: 600;">(Правило ${mainRule.rule})</span>`;
                }
                if (mainRule.punishment) {
                    answer += ` <span style="color: #ef4444; font-weight: 600;">Наказание: ${mainRule.punishment}</span>`;
                }
            }
            
            if (answer) {
                return `<div style="padding: 18px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1)); border-radius: 12px; border-left: 4px solid var(--accent-success); margin-bottom: 20px;">
                    <div style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--accent-success); margin-bottom: 8px;">✓ Ответ на ваш вопрос</div>
                    <div style="font-size: 1rem; line-height: 1.7; color: var(--text-primary);">${answer}</div>
                </div>`;
            }
            
            return '';
        }

        // 🎯 Определение эмодзи для правила
        function getEmojiForRule(term) {
            const termLower = term.toLowerCase();
            if (termLower.includes('death')) return '💀';
            if (termLower.includes('vehicle')) return '🚗';
            if (termLower.includes('revenge')) return '🔄';
            if (termLower.includes('new life')) return '🔄';
            if (termLower.includes('power')) return '💪';
            if (termLower.includes('meta')) return '🧠';
            if (termLower.includes('team')) return '👥';
            if (termLower.includes('spawn')) return '🎯';
            if (termLower.includes('character')) return '⚰️';
            if (termLower.includes('зона')) return '🟢';
            if (termLower.includes('гетто')) return '🔴';
            if (termLower.includes('маска')) return '🎭';
            if (termLower.includes('похищ')) return '🔒';
            if (termLower.includes('чит')) return '⚠️';
            if (termLower.includes('оскор')) return '🚫';
            if (termLower.includes('твинк')) return '👤';
            return '📌';
        }

        // 📋 Умная справка с контекстом
        function showSmartHelpCard(query, serverName) {
            const helpHtml = `<div class="help-card">
                <div class="help-header">
                    <span style="font-size: 1.5rem;">🔍</span>
                    <span>По запросу "<strong>${query}</strong>" ничего не найдено</span>
                </div>
                
                <div class="help-section">
                    <div style="margin-bottom: 15px; padding: 12px; background: rgba(96, 165, 250, 0.1); border-radius: 8px; border-left: 3px solid var(--accent-primary);">
                        <div style="font-weight: 600; margin-bottom: 5px;">Вы играете на: ${serverName}</div>
                        <div style="font-size: 0.9rem; color: var(--text-secondary);">База содержит правила только для этого сервера</div>
                    </div>
                </div>
                
                <div class="help-section">
                    <div class="help-section-title">📜 Популярные правила:</div>
                    <div class="terms-grid">
                        <div class="term-item" onclick="askQuickQuestion('Что такое DM?')"><span class="term-abbr">DM</span> DeathMatch</div>
                        <div class="term-item" onclick="askQuickQuestion('Что такое VDM?')"><span class="term-abbr">VDM</span> Vehicle DM</div>
                        <div class="term-item" onclick="askQuickQuestion('Что такое NLR?')"><span class="term-abbr">NLR</span> New Life Rule</div>
                        <div class="term-item" onclick="askQuickQuestion('Что такое PG?')"><span class="term-abbr">PG</span> PowerGaming</div>
                        <div class="term-item" onclick="askQuickQuestion('Что такое MG?')"><span class="term-abbr">MG</span> MetaGaming</div>
                        <div class="term-item" onclick="askQuickQuestion('Зеленая зона')"><span class="term-abbr">🟢</span> Зелёная зона</div>
                    </div>
                </div>
                
                <div class="help-section">
                    <div class="help-section-title">🏷️ Темы:</div>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span class="topic-tag" onclick="askQuickQuestion('правила убийства')">Убийства</span>
                        <span class="topic-tag" onclick="askQuickQuestion('правила фракций')">Фракции</span>
                        <span class="topic-tag" onclick="askQuickQuestion('правила зон')">Зоны</span>
                        <span class="topic-tag" onclick="askQuickQuestion('правила транспорта')">Транспорт</span>
                        <span class="topic-tag" onclick="askQuickQuestion('правила смерти')">Смерть</span>
                    </div>
                </div>
                
                <div class="help-tip">
                    💡 Попробуйте задать вопрос по-другому или выберите из списка выше
                </div>
            </div>`;
            
            addMessageHtml(helpHtml, true);
        }
        // Model Selection
        function selectModel(model) {
            console.log('Переключение на модель:', model);

            // Check if model is enabled
            const config = API_CONFIG[model];
            if (!config || !config.enabled) {
                alert(`Модель ${model} не настроена. Добавьте API ключ в настройках.`);
                return;
            }

            // If requires API key and not provided
            if (model !== 'claude' && (!config.apiKey || config.apiKey === '')) {
                alert(`Для использования ${model} требуется API ключ.\n\nИнструкция по настройке в файле API_SETUP_GUIDE.md`);
                return;
            }

            // Update current model
            currentModel = model;

            // Update UI
            document.querySelectorAll('.model-button').forEach(btn => {
                btn.classList.remove('active');
                const badge = btn.querySelector('.model-badge');
                if (btn.dataset.model === model) {
                    btn.classList.add('active');
                    badge.textContent = 'Активна';
                } else {
                    if (btn.disabled) {
                        badge.textContent = 'Требуется API ключ';
                    } else {
                        badge.textContent = 'Доступна';
                    }
                }
            });

            console.log(`Модель ${model} активирована`);
        }

        // Alias for compatibility with error messages
        function switchModel(model) {
            return selectModel(model);
        }

        // Initialize model buttons based on config
        window.addEventListener('DOMContentLoaded', () => {
            // Enable buttons for configured models
            Object.keys(API_CONFIG).forEach(modelKey => {
                const config = API_CONFIG[modelKey];
                if (config.enabled && (modelKey === 'claude' || (config.apiKey && config.apiKey !== ''))) {
                    const button = document.querySelector(`.model-button[data-model="${modelKey}"]`);
                    if (button) {
                        button.disabled = false;
                        const badge = button.querySelector('.model-badge');
                        if (modelKey === currentModel) {
                            badge.textContent = 'Активна';
                        } else {
                            badge.textContent = 'Доступна';
                        }
                    }
                }
            });
        });

        function askQuickQuestion(question) {
            chatInput.value = question;
            sendMessage();
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        }

        // Focus input on load
        window.addEventListener('DOMContentLoaded', () => {
            console.log('DOM загружен, проверяем авторизацию...');
            checkLoginStatus();
            
            // Обновить badge сразу после загрузки
            setTimeout(() => {
                console.log('🔄 Инициализация badge...');
                if (typeof updateAllSubscriptionBadges === 'function') {
                    updateAllSubscriptionBadges();
                }
            }, 500);
        });

        window.addEventListener('load', () => {
            if (chatInput) {
                chatInput.focus();
            }
            
            // Ещё раз обновить badge после полной загрузки
            setTimeout(() => {
                console.log('🔄 Финальное обновление badge...');
                if (typeof updateAllSubscriptionBadges === 'function') {
                    updateAllSubscriptionBadges();
                }
            }, 1000);
        });

        // Discord OAuth Configuration
        const DISCORD_CLIENT_ID = '1436658032451784775'; // Замените на ваш Client ID
        const DISCORD_REDIRECT_URI = window.location.origin; // Автоматический redirect
        const DISCORD_OAUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}&response_type=token&scope=identify`;

        // Check Login Status
        function checkLoginStatus() {
            console.log('Проверка статуса входа...');
            const user = localStorage.getItem('badgrules_user');
            const selection = loadServerSelection();
            console.log('Данные пользователя:', user);
            console.log('Выбор сервера:', selection);

            if (user && selection) {
                const userData = JSON.parse(user);
                console.log('Пользователь найден:', userData);
                showMainInterface(userData);
            } else {
                console.log('Пользователь не найден или нет выбора сервера, показываем экран входа');
            }
        }

        // Login with Discord
        function loginWithDiscord() {
            console.log('Перенаправление на Discord OAuth...');
            // Сохраняем выбор сервера перед редиректом
            saveServerSelection();
            // Реальная авторизация через Discord
            window.location.href = DISCORD_OAUTH_URL;
        }

        // Continue as Guest
        function continueAsGuest() {
            const guestUser = {
                id: 'guest_' + Date.now(),
                username: 'Гость',
                avatar: null,
                loginType: 'guest'
            };

            saveServerSelection();
            localStorage.setItem('badgrules_user', JSON.stringify(guestUser));
            showMainInterface(guestUser);
        }

        // Show Main Interface
        function showMainInterface(user) {
            console.log('Показываем главный интерфейс для:', user);

            // Load server selection
            const selection = loadServerSelection();

            // Hide login overlay
            const loginOverlay = document.getElementById('loginOverlay');
            console.log('loginOverlay элемент:', loginOverlay);

            if (loginOverlay) {
                loginOverlay.classList.add('hidden');
                console.log('Экран входа скрыт');
            } else {
                console.error('loginOverlay не найден!');
            }

            // Show user profile badge
            const badge = document.getElementById('userProfileBadge');
            console.log('userProfileBadge элемент:', badge);

            if (badge) {
                badge.classList.remove('hidden');
                console.log('Бейдж пользователя показан');
            } else {
                console.error('userProfileBadge не найден!');
                return;
            }

            // Update user info
            const userName = document.getElementById('userName');
            const userAvatar = document.getElementById('userAvatar');

            console.log('userName:', userName);
            console.log('userAvatar:', userAvatar);

            if (user.loginType === 'discord') {
                if (userName) userName.textContent = user.displayName || user.username;

                // Display avatar
                if (userAvatar) {
                    if (user.avatar) {
                        const avatarUrl = user.avatar.includes('?')
                            ? user.avatar
                            : `${user.avatar}?size=128`;

                        console.log('🖼️ Загрузка аватарки:', avatarUrl);

                        if (avatarUrl && avatarUrl.startsWith('http')) {
                            // Очистить содержимое
                            userAvatar.textContent = '';
                            userAvatar.style.backgroundImage = '';
                            
                            // Создать img элемент
                            const imgElement = document.createElement('img');
                            imgElement.src = avatarUrl;
                            imgElement.style.width = '100%';
                            imgElement.style.height = '100%';
                            imgElement.style.objectFit = 'cover';
                            imgElement.style.borderRadius = '50%';
                            
                            imgElement.onload = () => {
                                console.log('✅ Аватарка загружена успешно');
                            };
                            
                            imgElement.onerror = (e) => {
                                console.error('❌ Ошибка загрузки аватарки:', e);
                                const displayName = user.displayName || user.username;
                                userAvatar.textContent = displayName.charAt(0).toUpperCase();
                                imgElement.remove();
                            };
                            
                            // Удалить старый img если есть
                            const oldImg = userAvatar.querySelector('img');
                            if (oldImg) oldImg.remove();
                            
                            userAvatar.appendChild(imgElement);
                        } else {
                            console.warn('⚠️ Невалидный URL аватарки');
                            const displayName = user.displayName || user.username;
                            userAvatar.textContent = displayName.charAt(0).toUpperCase();
                            userAvatar.style.backgroundImage = '';
                        }
                    } else {
                        console.log('ℹ️ Нет аватарки, показываю инициалы');
                        const displayName = user.displayName || user.username;
                        userAvatar.textContent = displayName.charAt(0).toUpperCase();
                        userAvatar.style.backgroundImage = '';
                        const oldImg = userAvatar.querySelector('img');
                        if (oldImg) oldImg.remove();
                    }
                }
            } else {
                if (userName) userName.textContent = 'Гость';
                if (userAvatar) {
                    userAvatar.textContent = 'G';
                    userAvatar.style.backgroundImage = '';
                }
            }

            // Update server badge display
            if (selection && selection.server) {
                updateServerBadgeDisplay(selection.project, selection.server);
            }

            console.log('Информация пользователя обновлена');

            // Update profile section
            updateProfileSection(user);
        }

        // Update Profile Section
        function updateProfileSection(user) {
            console.log('Updating profile section with user data:', user);

            if (!user) return;

            // Update Profile Header
            const profileUsername = document.getElementById('profileUsername');
            const profileDiscriminator = document.getElementById('profileDiscriminator');
            const profileAvatarImg = document.getElementById('profileAvatarImg');
            const profileRoleBadge = document.getElementById('profileRoleBadge');

            if (user.loginType === 'discord') {
                // Username
                if (profileUsername) {
                    profileUsername.textContent = user.displayName || user.username || 'Discord User';
                }

                // Обновляем статик и роль
                if (typeof updateProfileStatic === 'function') {
                    updateProfileStatic(user.id);
                }

                // Генерируем уникальный номер аккаунта ТОЛЬКО если НЕ владелец
                if (profileDiscriminator) {
                    const userIsOwner = isOwner(user.id); // Используем новую функцию
                    
                    if (userIsOwner) {
                        // У владельцев скрываем статик полностью
                        profileDiscriminator.style.display = 'none';
                    } else {
                        // У всех остальных показываем статик
                        profileDiscriminator.style.display = 'inline-block';
                        const accountNumber = getAccountNumber(user.id);
                        
                        if (accountNumber) {
                            profileDiscriminator.textContent = `#${accountNumber}`;

                            // Добавляем VIP стиль для номеров 0001-0010
                            if (parseInt(accountNumber) <= 10) {
                                profileDiscriminator.classList.add('vip');
                            } else {
                                profileDiscriminator.classList.remove('vip');
                            }
                        }
                    }
                }

                // Показываем бейдж роли для команды
                if (profileRoleBadge) {
                    const teamRole = getUserRole(user.id); // Используем новую функцию
                    if (teamRole && teamRole !== 'Пользователь') {
                        profileRoleBadge.textContent = teamRole;
                        profileRoleBadge.classList.remove('hidden', 'owner', 'admin', 'team');

                        // Добавляем соответствующий класс
                        if (teamRole === 'Владелец') profileRoleBadge.classList.add('owner');
                        else if (teamRole === 'Администратор') profileRoleBadge.classList.add('admin');
                        else if (teamRole === 'Команда') profileRoleBadge.classList.add('team');
                        else profileRoleBadge.classList.add('team');
                    } else {
                        profileRoleBadge.classList.add('hidden');
                    }
                }

                // Avatar
                if (profileAvatarImg && user.avatar) {
                    const avatarUrl = user.avatar.includes('?')
                        ? user.avatar
                        : `${user.avatar}?size=256`;
                    
                    console.log('🖼️ Загрузка аватарки профиля:', avatarUrl);
                    
                    if (avatarUrl && avatarUrl.startsWith('http')) {
                        // Очистить
                        profileAvatarImg.textContent = '';
                        profileAvatarImg.style.backgroundImage = '';
                        
                        // Создать img
                        const imgElement = document.createElement('img');
                        imgElement.src = avatarUrl;
                        imgElement.style.width = '100%';
                        imgElement.style.height = '100%';
                        imgElement.style.objectFit = 'cover';
                        imgElement.style.borderRadius = '50%';
                        
                        imgElement.onload = () => {
                            console.log('✅ Аватарка профиля загружена');
                        };
                        
                        imgElement.onerror = (e) => {
                            console.error('❌ Ошибка загрузки аватарки профиля:', e);
                            const initial = (user.displayName || user.username || 'G').charAt(0).toUpperCase();
                            profileAvatarImg.textContent = initial;
                            imgElement.remove();
                        };
                        
                        // Удалить старый img
                        const oldImg = profileAvatarImg.querySelector('img');
                        if (oldImg) oldImg.remove();
                        
                        profileAvatarImg.appendChild(imgElement);
                    } else {
                        const initial = (user.displayName || user.username || 'G').charAt(0).toUpperCase();
                        profileAvatarImg.textContent = initial;
                        profileAvatarImg.style.backgroundImage = '';
                    }
                } else if (profileAvatarImg) {
                    const initial = (user.displayName || user.username || 'G').charAt(0).toUpperCase();
                    profileAvatarImg.textContent = initial;
                    profileAvatarImg.style.backgroundImage = '';
                }

                // Discord Info Card
                const profileDiscordId = document.getElementById('profileDiscordId');
                if (profileDiscordId && user.id) {
                    profileDiscordId.textContent = user.id;
                }

                const profileDisplayName = document.getElementById('profileDisplayName');
                if (profileDisplayName) {
                    profileDisplayName.textContent = user.displayName || user.username || 'Discord User';
                }

                // Activity
                const profileJoinDate = document.getElementById('profileJoinDate');
                if (profileJoinDate) {
                    const joinDate = new Date().toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    });
                    profileJoinDate.textContent = joinDate;
                }

                // Load stats from localStorage
                loadProfileStats();

            } else {
                // Guest mode
                if (profileUsername) profileUsername.textContent = 'Гость';
                if (profileDiscriminator) profileDiscriminator.textContent = '#0000';
                if (profileAvatarImg) {
                    profileAvatarImg.textContent = 'G';
                    profileAvatarImg.style.backgroundImage = '';
                }
            }
        }

        // ═══════════════════════════════════════════════════════════════
        // 🎫 СИСТЕМА УНИКАЛЬНЫХ НОМЕРОВ АККАУНТОВ - УДАЛЕНА
        // Используется новая система TEAM_STATIC_IDS (см. ниже в коде)
        // ═══════════════════════════════════════════════════════════════

        // Функция для получения номера аккаунта с проверкой на владельца
        function getAccountNumber(discordId) {
            if (!discordId) return '0000';

            // Используем новую систему getUserStatic
            const staticNum = getUserStatic(discordId);
            
            // Если есть статик - возвращаем его
            if (staticNum) {
                return staticNum;
            }
            
            // Если владелец (нет статика) - возвращаем пустую строку или специальное значение
            if (isOwner(discordId)) {
                return null; // Владельцы без номера
            }
            
            return '0000'; // На всякий случай
        }

        // Функция для получения общего количества пользователей
        function getTotalUsers() {
            const allStatics = JSON.parse(localStorage.getItem('badgrules_all_statics') || '{}');
            return Object.keys(allStatics).length + Object.keys(TEAM_STATIC_IDS).length;
        }

        // Функция для проверки VIP статуса (номера 0000-0010)
        function isVipNumber(accountNumber) {
            const num = parseInt(accountNumber);
            return num >= 0 && num <= 10;
        }

        // Пример использования в функции авторизации
        function setupUserProfile(userData) {
            const discordId = userData.id || 'guest';
            const accountNumber = getAccountNumber(discordId);
            const teamRole = getUserRole(discordId); // Используем новую систему
            const isVip = isVipNumber(accountNumber);

            // Обновляем профиль
            document.getElementById('profileDiscordId').textContent = discordId;

            // Добавляем бейдж роли если есть
            const roleBadge = document.getElementById('profileRoleBadge');
            if (teamRole && teamRole !== 'Пользователь') {
                roleBadge.textContent = teamRole;
                roleBadge.className = `profile-role-badge ${teamRole === 'Владелец' ? 'owner' : 'team'}`;
                roleBadge.classList.remove('hidden');
            } else {
                roleBadge.classList.add('hidden');
            }

            // Добавляем VIP стиль для номеров 0001-0010
            const tagElement = document.getElementById('profileDiscriminator');
            if (isVip && accountNumber) {
                tagElement.classList.add('vip');
            }
        }

        // Функция для отображения роли в дропдауне профиля
        function setupProfileDropdown(userData) {
            const discordId = userData.id || 'guest';
            const teamRole = getUserRole(discordId); // Используем новую систему

            // Добавляем роль в дропдаун если пользователь в команде или владелец
            if (teamRole && teamRole !== 'Пользователь') {
                const roleText = teamRole === 'Владелец' ? 'Владелец проекта' : 'Команда проекта';
                const roleIcon = teamRole === 'Владелец' ? '👑' : '⭐';
                const roleColor = teamRole === 'Владелец' ? '#ffd700' : '#60a5fa';

                // Создаем элемент с ролью в дропдауне
                const roleElement = document.createElement('div');
                roleElement.className = 'dropdown-item';
                roleElement.innerHTML = `
            <span style="color: ${roleColor}">${roleIcon}</span>
            <span>${roleText}</span>
        `;

                // Вставляем в начало дропдауна
                const dropdown = document.getElementById('profileDropdown');
                const firstItem = dropdown.querySelector('.dropdown-item');
                if (firstItem) {
                    dropdown.insertBefore(roleElement, firstItem);

                    // Добавляем разделитель
                    const divider = document.createElement('div');
                    divider.className = 'dropdown-divider';
                    dropdown.insertBefore(divider, firstItem);
                }
            }
        }

        // Load and update profile statistics
        function loadProfileStats() {
            // Get saved data from localStorage
            const chatHistory = JSON.parse(localStorage.getItem('badgrules_chat_history') || '[]');
            const complaints = JSON.parse(localStorage.getItem('badgrules_complaints') || '[]');

            // Update questions count
            const statQuestions = document.getElementById('statQuestions');
            if (statQuestions) {
                statQuestions.textContent = chatHistory.length || 0;
            }

            // Update complaints count
            const statComplaints = document.getElementById('statComplaints');
            if (statComplaints) {
                statComplaints.textContent = complaints.length || 0;
            }

            // Update rules (count of different rule views - можно добавить трекинг)
            const statRules = document.getElementById('statRules');
            if (statRules) {
                const rulesViewed = localStorage.getItem('badgrules_rules_viewed') || '0';
                statRules.textContent = rulesViewed;
            }

            // Calculate time in system
            const statTime = document.getElementById('statTime');
            if (statTime) {
                const user = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
                if (user.firstLogin) {
                    const firstLogin = new Date(user.firstLogin);
                    const now = new Date();
                    const hours = Math.floor((now - firstLogin) / (1000 * 60 * 60));
                    statTime.textContent = hours > 0 ? `${hours}ч` : '<1ч';
                } else {
                    statTime.textContent = '<1ч';
                }
            }

            // Update sessions count
            const profileSessions = document.getElementById('profileSessions');
            if (profileSessions) {
                const sessions = localStorage.getItem('badgrules_sessions') || '1';
                profileSessions.textContent = sessions;
            }
        }

        // Logout
        // Profile Dropdown Menu Functions
        function toggleProfileMenu(event) {
            event.stopPropagation();
            const dropdown = document.getElementById('profileDropdown');
            dropdown.classList.toggle('hidden');
        }

        function closeProfileMenu() {
            const dropdown = document.getElementById('profileDropdown');
            dropdown.classList.add('hidden');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function (event) {
            const dropdown = document.getElementById('profileDropdown');
            const badge = document.getElementById('userProfileBadge');

            if (dropdown && badge &&
                !dropdown.contains(event.target) &&
                !badge.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });

        function logout() {
            if (confirm('Вы уверены, что хотите выйти?')) {
                localStorage.removeItem('badgrules_user');
                localStorage.removeItem('badgrules_server_selection');
                location.reload();
            }
        }

        // Handle Discord OAuth Redirect
        window.addEventListener('load', () => {
            // Check if there's an access token in URL (from Discord OAuth)
            const hash = window.location.hash.substring(1);
            const params = new URLSearchParams(hash);
            const accessToken = params.get('access_token');

            if (accessToken) {
                console.log('Access token found, fetching user data...');

                // Fetch user info from Discord API
                fetch('https://discord.com/api/users/@me', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Discord API error: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(discordUser => {
                        console.log('Discord user data:', discordUser);

                        // Build avatar URL (Discord uses .png, .jpg, .webp, or .gif for animated)
                        let avatarUrl = null;
                        if (discordUser.avatar) {
                            const extension = discordUser.avatar.startsWith('a_') ? 'gif' : 'png';
                            avatarUrl = `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.${extension}?size=128`;
                        }

                        const user = {
                            id: discordUser.id,
                            username: discordUser.username,
                            discriminator: discordUser.discriminator,
                            displayName: discordUser.global_name || discordUser.username,
                            avatar: avatarUrl,
                            email: discordUser.email,
                            loginType: 'discord'
                        };

                        console.log('Processed user data:', user);
                        localStorage.setItem('badgrules_user', JSON.stringify(user));

                        // Clean URL
                        window.history.replaceState({}, document.title, window.location.pathname);

                        // Check if server selection exists
                        const selection = loadServerSelection();
                        if (selection && selection.project && selection.server) {
                            showMainInterface(user);
                        } else {
                            // Show login overlay at step 1 for server selection
                            document.getElementById('loginOverlay').classList.remove('hidden');
                            goToStep(1);
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching Discord user:', error);
                        alert('Ошибка при входе через Discord. Попробуйте снова.');
                    });
            }
        });

        // Section Navigation
        function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            // Remove active class from all nav buttons
            document.querySelectorAll('.nav-button').forEach(button => {
                button.classList.remove('active');
            });

            // Show selected section
            const sectionMap = {
                'home': 'homeSection',
                'chat': 'chatSection',
                'profile': 'profileSection',
                'complaints': 'complaintsSection',
                'rules': 'rulesSection',
                'history': 'historySection',
                'news': 'newsSection',
                'team': 'teamSection',
                'social': 'socialSection'
            };

            const targetSection = document.getElementById(sectionMap[sectionName]);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Show/hide chat input container based on section
            const chatInputContainer = document.querySelector('.chat-input-container');
            if (chatInputContainer) {
                if (sectionName === 'chat') {
                    chatInputContainer.style.display = 'block';
                } else {
                    chatInputContainer.style.display = 'none';
                }
            }

            // Add active class to clicked button
            if (event && event.target) {
                const button = event.target.closest('.nav-button');
                if (button) {
                    button.classList.add('active');
                }
            }

            // Обновляем скролл-индикатор
            if (typeof updateScrollIndicator === 'function') {
                updateScrollIndicator(sectionName);
            }

            // Синхронизация подписки при открытии профиля
            if (sectionName === 'profile' && BOT_API.ENABLED) {
                const userData = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
                if (userData && userData.id) {
                    console.log('🔄 Синхронизация при открытии профиля...');
                    checkSubscriptionFromBot(userData.id).then(() => {
                        console.log('✅ Профиль обновлен');
                    });
                }
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Discord Webhook Configuration
        const DISCORD_WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE'; // Замените на ваш Webhook URL

        // Complaint Submission
        async function submitComplaint() {
            // Get form values
            const complaintType = document.getElementById('complaintType').value;
            const violatorId = document.getElementById('violatorId').value;
            const serverName = document.getElementById('serverName').value;
            const description = document.getElementById('incidentDescription').value;
            const evidence = document.getElementById('evidenceLink').value;
            const statusDiv = document.getElementById('complaintStatus');

            // Validation
            if (!description.trim()) {
                showStatus('error', '❌ Пожалуйста, опишите инцидент');
                return;
            }

            if (description.trim().length < 20) {
                showStatus('error', '❌ Описание должно быть не менее 20 символов');
                return;
            }

            // Get user data
            const user = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
            const userName = user.displayName || user.username || 'Гость';
            const userId = user.id || 'N/A';

            // Show loading
            showStatus('loading', '⏳ Отправка жалобы...');

            // Prepare Discord embed
            const embed = {
                title: '📋 Новая жалоба',
                color: 16711680, // Red color
                fields: [
                    {
                        name: '👤 Отправитель',
                        value: `${userName} (ID: ${userId})`,
                        inline: true
                    },
                    {
                        name: '🎯 Тип жалобы',
                        value: complaintType,
                        inline: true
                    },
                    {
                        name: '🖥️ Сервер',
                        value: serverName,
                        inline: true
                    }
                ],
                description: `**📝 Описание:**\n${description}`,
                timestamp: new Date().toISOString(),
                footer: {
                    text: 'BadgRules Complaint System'
                }
            };

            // Add violator ID if provided
            if (violatorId.trim()) {
                embed.fields.push({
                    name: '⚠️ ID нарушителя',
                    value: violatorId,
                    inline: false
                });
            }

            // Add evidence link if provided
            if (evidence.trim()) {
                embed.fields.push({
                    name: '🔗 Доказательства',
                    value: evidence,
                    inline: false
                });
            }

            const payload = {
                username: 'BadgRules Bot',
                avatar_url: 'https://i.imgur.com/AfFp7pu.png', // Опционально: аватар бота
                embeds: [embed]
            };

            try {
                // Check if webhook is configured
                if (DISCORD_WEBHOOK_URL === 'YOUR_WEBHOOK_URL_HERE') {
                    // Demo mode - just show success
                    console.log('Demo mode - would send:', payload);
                    showStatus('success', '✅ Жалоба отправлена! (Демо-режим)');

                    // Save to localStorage for demo
                    const complaints = JSON.parse(localStorage.getItem('badgrules_complaints') || '[]');
                    complaints.push({
                        ...payload.embeds[0],
                        id: Date.now(),
                        timestamp: new Date().toISOString()
                    });
                    localStorage.setItem('badgrules_complaints', JSON.stringify(complaints));

                    // Clear form
                    setTimeout(() => {
                        clearComplaintForm();
                    }, 2000);
                    return;
                }

                // Real webhook send
                const response = await fetch(DISCORD_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    showStatus('success', '✅ Жалоба успешно отправлена! Администрация рассмотрит её в течение 24 часов.');

                    // Save to localStorage
                    const complaints = JSON.parse(localStorage.getItem('badgrules_complaints') || '[]');
                    complaints.push({
                        ...payload.embeds[0],
                        id: Date.now(),
                        timestamp: new Date().toISOString()
                    });
                    localStorage.setItem('badgrules_complaints', JSON.stringify(complaints));

                    // Clear form after delay
                    setTimeout(() => {
                        clearComplaintForm();
                    }, 3000);
                } else {
                    throw new Error(`HTTP ${response.status}`);
                }
            } catch (error) {
                console.error('Error sending complaint:', error);
                showStatus('error', '❌ Ошибка при отправке жалобы. Попробуйте позже или обратитесь к администрации напрямую.');
            }
        }

        function showStatus(type, message) {
            const statusDiv = document.getElementById('complaintStatus');
            statusDiv.style.display = 'block';

            const colors = {
                success: '#4ade80',
                error: '#f87171',
                loading: '#60a5fa'
            };

            statusDiv.style.color = colors[type] || '#fff';
            statusDiv.style.padding = '1rem';
            statusDiv.style.borderRadius = '8px';
            statusDiv.style.background = 'rgba(255, 255, 255, 0.05)';
            statusDiv.style.border = `1px solid ${colors[type]}`;
            statusDiv.textContent = message;
        }

        function clearComplaintForm() {
            document.getElementById('complaintType').selectedIndex = 0;
            document.getElementById('violatorId').value = '';
            document.getElementById('serverName').selectedIndex = 0;
            document.getElementById('incidentDescription').value = '';
            document.getElementById('evidenceLink').value = '';
            document.getElementById('complaintStatus').style.display = 'none';
        }

        function showRuleDetails(category) {
            const categoryTitles = {
                'basic': 'Основы РП',
                'zones': 'Зоны',
                'crime': 'Криминал',
                'police': 'Полиция',
                'factions': 'Фракции',
                'punishments': 'Наказания'
            };

            const title = categoryTitles[category];
            chatInput.value = `Расскажи подробно о разделе правил: ${title}`;
            showSection('home');
            setTimeout(() => sendMessage(), 300);
        }

        
        // Очистка всего кэша правил
        async function clearAllRulesCache() {
            // Очистка памяти
            rulesCache = {};
            console.log('🗑️ Кэш памяти очищен');
            
            // Очистка localStorage
            try {
                localStorage.removeItem('badgrules_rules_cache');
                console.log('🗑️ localStorage кэш очищен');
            } catch (e) {
                console.warn('⚠️ Ошибка очистки localStorage:', e);
            }
            
            // Очистка Cache API
            if ('caches' in window) {
                try {
                    await caches.delete(CACHE_NAME);
                    console.log('🗑️ Cache API очищен');
                } catch (e) {
                    console.warn('⚠️ Ошибка очистки Cache API:', e);
                }
            }
            
            alert('✅ Весь кэш правил очищен! Следующий запрос загрузит свежие данные.');
        }
        
        // Показать статистику кэша
        async function showCacheStats() {
            let stats = 'СТАТИСТИКА КЭША:\n\n';
            
            // Память
            const memoryCount = Object.keys(rulesCache).length;
            stats += `💾 В памяти: ${memoryCount} страниц\n`;
            
            // localStorage
            try {
                const saved = localStorage.getItem('badgrules_rules_cache');
                if (saved) {
                    const parsed = JSON.parse(saved);
                    stats += `📦 localStorage: ${Object.keys(parsed).length} страниц\n`;
                } else {
                    stats += '📦 localStorage: 0 страниц\n';
                }
            } catch (e) {
                stats += '📦 localStorage: ошибка\n';
            }
            
            // Cache API
            if ('caches' in window) {
                try {
                    const cache = await caches.open(CACHE_NAME);
                    const requests = await cache.keys();
                    stats += `🌐 Cache API: ${requests.length} страниц\n`;
                } catch (e) {
                    stats += '🌐 Cache API: ошибка\n';
                }
            } else {
                stats += '🌐 Cache API: не поддерживается\n';
            }
            
            alert(stats);
        }

        // ═══════════════════════════════════════════════════════════════
        // 🤖 DISCORD BOT FUNCTIONS - Функции Discord бота
        // ═══════════════════════════════════════════════════════════════

        // Configuration
        const BOT_CONFIG = {
            clientId: 'YOUR_BOT_CLIENT_ID', // Замените на Client ID вашего бота
            inviteUrl: 'https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot%20applications.commands',
            familyBaseUrl: 'https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot%20applications.commands&guild_id='
        };

        // Bot Settings Storage
        let botSettings = {
            autoMod: true,
            welcomeMsg: true,
            aiResponses: true,
            welcomeChannel: '#general',
            complaintChannel: '#жалобы',
            botLanguage: 'ru',
            botPrefix: '!',
            logChannel: '#bot-logs',
            adminRole: '@Администратор'
        };

        // Load saved settings
        function loadBotSettings() {
            const saved = localStorage.getItem('badgrules_bot_settings');
            if (saved) {
                try {
                    botSettings = JSON.parse(saved);
                    applyBotSettings();
                } catch (e) {
                    console.error('Error loading bot settings:', e);
                }
            }
        }

        // Apply settings to UI
        function applyBotSettings() {
            const fields = ['welcomeChannel', 'complaintChannel', 'botLanguage', 'botPrefix', 'logChannel', 'adminRole'];
            fields.forEach(field => {
                const element = document.getElementById(field);
                if (element && botSettings[field]) {
                    element.value = botSettings[field];
                }
            });
        }

        // Toggle Setting
        function toggleSetting(element, setting) {
            element.classList.toggle('active');
            botSettings[setting] = element.classList.contains('active');

            const statusText = element.parentElement.querySelector('span');
            if (statusText) {
                statusText.textContent = botSettings[setting] ? 'Включено' : 'Выключено';
            }
        }

        // Open Bot Settings Modal
        function openBotSettings() {
            const modal = document.getElementById('settingsModal');
            if (modal) {
                modal.classList.add('active');
                loadBotSettings();
            }
        }

        // Close Bot Settings Modal
        function closeBotSettings() {
            const modal = document.getElementById('settingsModal');
            if (modal) {
                modal.classList.remove('active');
            }
        }

        // Close modal on background click
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('settingsModal');
            if (e.target === modal) {
                closeBotSettings();
            }
        });

        // Save Settings
        function saveSettings() {
            // Get all input values
            botSettings.welcomeChannel = document.getElementById('welcomeChannel').value;
            botSettings.complaintChannel = document.getElementById('complaintChannel').value;
            botSettings.botLanguage = document.getElementById('botLanguage').value;
            botSettings.botPrefix = document.getElementById('botPrefix').value;
            botSettings.logChannel = document.getElementById('logChannel').value;
            botSettings.adminRole = document.getElementById('adminRole').value;

            // Save to localStorage
            localStorage.setItem('badgrules_bot_settings', JSON.stringify(botSettings));

            // Show success message
            const statusDiv = document.getElementById('settingsStatus');
            if (statusDiv) {
                statusDiv.style.display = 'block';
                statusDiv.style.background = 'rgba(74, 222, 128, 0.1)';
                statusDiv.style.border = '1px solid #4ade80';
                statusDiv.style.color = '#4ade80';
                statusDiv.textContent = '✅ Настройки успешно сохранены!';

                setTimeout(() => {
                    statusDiv.style.display = 'none';
                }, 3000);
            }

            console.log('Bot settings saved:', botSettings);
        }

        // Add Bot to Server
        function addBotToServer() {
            if (BOT_CONFIG.clientId === 'YOUR_BOT_CLIENT_ID') {
                alert('⚠️ Настройка бота\n\nДля добавления бота на сервер:\n1. Создайте бота в Discord Developer Portal\n2. Скопируйте Client ID\n3. Замените YOUR_BOT_CLIENT_ID в коде на ваш Client ID\n\nПосле этого кнопка будет работать!');
                return;
            }
            window.open(BOT_CONFIG.inviteUrl, '_blank', 'width=500,height=700');
        }

        // Add Bot for Family
        function addBotForFamily() {
            if (BOT_CONFIG.clientId === 'YOUR_BOT_CLIENT_ID') {
                alert('⚠️ Настройка бота\n\nСначала настройте Client ID бота (см. функцию addBotToServer)');
                return;
            }

            const guildId = prompt('🎮 Введите ID вашего Discord сервера (Guild ID):\n\nКак найти Guild ID:\n1. Включите режим разработчика в Discord (Настройки → Расширенные)\n2. Правый клик по серверу → Копировать ID сервера');

            if (guildId && guildId.trim()) {
                const url = BOT_CONFIG.familyBaseUrl + guildId.trim();
                window.open(url, '_blank', 'width=500,height=700');
            }
        }

        // Initialize bot settings on page load
        loadBotSettings();

        // ═══════════════════════════════════════════════════════════════
        // 📜 SCROLL REVEAL ANIMATIONS
        // ═══════════════════════════════════════════════════════════════

        function initScrollReveal() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, observerOptions);

            // Observe all scroll-reveal elements
            const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
            revealElements.forEach(el => observer.observe(el));
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', initScrollReveal);

        // Re-initialize when switching to home section
        const originalShowSection = showSection;
        showSection = function (sectionName) {
            originalShowSection(sectionName);
            if (sectionName === 'home') {
                setTimeout(initScrollReveal, 100);
            }
        };

        // ═══════════════════════════════════════════════════════════════════════
        // 💎 SUBSCRIPTION SYSTEM
        // ═══════════════════════════════════════════════════════════════════════

        const SUBSCRIPTION_PLANS = {
            '1month': { name: '1 месяц', priceRub: 200, priceUsd: 2.10, months: 1 },
            '3months': { name: '3 месяца', priceRub: 450, priceUsd: 4.75, months: 3 },
            '6months': { name: '6 месяцев', priceRub: 800, priceUsd: 8.45, months: 6 },
            '1year': { name: '12 месяцев', priceRub: 1500, priceUsd: 15.85, months: 12 },
            'lifetime': { name: 'Навсегда', priceRub: 2500, priceUsd: 26.40, months: -1 }
        };

        // Проверка подписки пользователя
        function checkSubscription() {
            try {
                // Читаем подписку из localStorage (сохранённую ботом)
                const subscriptionData = localStorage.getItem('badgrules_subscription');
                
                if (!subscriptionData) {
                    console.log('📭 Нет данных подписки в localStorage');
                    return null;
                }

                const sub = JSON.parse(subscriptionData);
                console.log('📦 Подписка из localStorage:', sub);
                
                // Проверяем lifetime
                if (sub.type === 'lifetime') {
                    console.log('♾️ Lifetime подписка');
                    return { ...sub, type: 'lifetime' };
                }

                // Проверяем срок действия
                const expiresAt = new Date(sub.expiresAt);
                const now = new Date();
                
                if (expiresAt > now) {
                    const daysLeft = Math.ceil((expiresAt - now) / (1000 * 60 * 60 * 24));
                    console.log('💎 PRO подписка активна, дней осталось:', daysLeft);
                    return { ...sub, type: 'pro', daysLeft };
                } else {
                    console.log('⏰ Подписка истекла');
                    localStorage.removeItem('badgrules_subscription');
                    return null;
                }
            } catch (e) {
                console.error('❌ Ошибка проверки подписки:', e);
                return null;
            }
        }

        // Обновление UI подписки
        function updateSubscriptionUI() {
            const sub = checkSubscription();
            const badge = document.getElementById('subBadgeMini');
            const statusBadge = document.getElementById('currentStatusBadge');

            if (!badge || !statusBadge) return;

            // Обновляем badge около аватарки
            if (sub) {
                badge.classList.remove('free', 'pro', 'lifetime');
                if (sub.type === 'lifetime') {
                    badge.classList.add('lifetime');
                    badge.textContent = '♾️';
                    statusBadge.className = 'current-status lifetime';
                    statusBadge.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                        LIFETIME
                    `;
                } else {
                    badge.classList.add('pro');
                    badge.textContent = '💎';
                    const expiresDate = new Date(sub.expiresAt);
                    const daysLeft = Math.ceil((expiresDate - new Date()) / (1000 * 60 * 60 * 24));
                    statusBadge.className = 'current-status pro';
                    statusBadge.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        PRO (${daysLeft} дней)
                    `;
                }
            } else {
                badge.classList.remove('pro', 'lifetime');
                badge.classList.add('free');
                badge.textContent = '💎';
                statusBadge.className = 'current-status free';
                statusBadge.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    FREE план
                `;
            }

            // Подсвечиваем активный план
            document.querySelectorAll('.pricing-card').forEach(card => {
                card.classList.remove('active');
            });

            if (sub) {
                const activePlan = sub.plan || sub.planId;
                const activeCard = document.querySelector(`.pricing-card[data-plan="${activePlan}"]`);
                if (activeCard) {
                    activeCard.classList.add('active');
                }
            }
        }

        // Открытие модалки оплаты (заглушка - нужно будет подключить реальную оплату)
        function openPaymentModal(plan) {
            const planData = SUBSCRIPTION_PLANS[plan];
            alert(`💎 Оплата подписки\n\nПлан: ${planData.name}\nЦена: ${planData.priceRub}₽ ($${planData.priceUsd})\n\nДля подключения оплаты свяжитесь с администратором.`);
        }

        // ═══════════════════════════════════════════════════════════════
        // 💎 PARTICLES ANIMATION FOR SUBSCRIPTION SECTION
        // ═══════════════════════════════════════════════════════════════

        function initParticles() {
            const canvas = document.getElementById('particlesCanvas');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            let particles = [];
            let animationFrameId;

            // Resize canvas
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            // Particle class
            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2 + 1;
                    this.speedX = Math.random() * 0.5 - 0.25;
                    this.speedY = Math.random() * 0.5 - 0.25;
                    this.opacity = Math.random() * 0.5 + 0.2;
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    // Wrap around edges
                    if (this.x > canvas.width) this.x = 0;
                    if (this.x < 0) this.x = canvas.width;
                    if (this.y > canvas.height) this.y = 0;
                    if (this.y < 0) this.y = canvas.height;
                }

                draw() {
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Create particles
            function createParticles() {
                const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle());
                }
            }

            // Connect particles
            function connectParticles() {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 100) {
                            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Animation loop
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });

                connectParticles();

                animationFrameId = requestAnimationFrame(animate);
            }

            createParticles();
            animate();

            // Cleanup
            return () => {
                cancelAnimationFrame(animationFrameId);
                window.removeEventListener('resize', resizeCanvas);
            };
        }

        // Показать секцию подписки
        function showSubscriptionSection() {
            const subSection = document.getElementById('subscriptionSection');
            const scrollIndicator = document.querySelector('.vertical-scroll-indicator');
            
            if (subSection) {
                subSection.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                
                // Скрываем скролл-индикатор
                if (scrollIndicator) {
                    scrollIndicator.style.display = 'none';
                }
                
                // Initialize particles
                setTimeout(() => {
                    initParticles();
                }, 100);
                
                updateSubscriptionUI();
            }
        }

        // Закрыть секцию подписки
        function closeSubscriptionSection() {
            const subSection = document.getElementById('subscriptionSection');
            const scrollIndicator = document.querySelector('.vertical-scroll-indicator');
            
            if (subSection) {
                subSection.classList.add('hidden');
                // Восстанавливаем прокрутку
                document.body.style.overflow = '';
                
                // Показываем скролл-индикатор обратно
                if (scrollIndicator) {
                    scrollIndicator.style.display = 'flex';
                }
            }
        }

        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeSubscriptionSection();
            }
        });

        // Инициализация подписки при загрузке
        document.addEventListener('DOMContentLoaded', () => {
            updateSubscriptionUI();
            
            // Обновляем каждую минуту
            setInterval(updateSubscriptionUI, 60000);

            // Pricing toggle functionality
            const toggleBtns = document.querySelectorAll('.toggle-btn');
            const indicator = document.querySelector('.toggle-indicator');

            toggleBtns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    // Remove active from all
                    toggleBtns.forEach(b => b.classList.remove('active'));
                    
                    // Add active to clicked
                    btn.classList.add('active');
                    
                    // Move indicator
                    if (indicator) {
                        indicator.style.transform = `translateX(${index * 100}%)`;
                    }

                    // Update prices based on period
                    const period = btn.dataset.period;
                    console.log('Selected period:', period);
                });
            });
        });

        // ═══════════════════════════════════════════════════════════════════════
        // ═══════════════════════════════════════════════════════════════════════

        // ⚠️ ВАЖНО: Замените YOUR_PAYPAL_EMAIL на ваш реальный PayPal email
        const PAYPAL_EMAIL = 'YOUR_PAYPAL_EMAIL@example.com';

        // ═══════════════════════════════════════════════════════════════
        // ✨ GLOBAL PARTICLES ANIMATION
        // ═══════════════════════════════════════════════════════════════

        let globalParticlesInitialized = false;

        function initGlobalParticles() {
            if (globalParticlesInitialized) return;
            
            const canvas = document.getElementById('globalParticlesCanvas');
            if (!canvas) return;

            globalParticlesInitialized = true;
            const ctx = canvas.getContext('2d');
            let particles = [];
            let animationFrameId;

            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            class GlobalParticle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2.5 + 1;
                    this.speedX = Math.random() * 0.6 - 0.3;
                    this.speedY = Math.random() * 0.6 - 0.3;
                    this.opacity = Math.random() * 0.6 + 0.2;
                    this.color = this.getRandomColor();
                }

                getRandomColor() {
                    const colors = [
                        'rgba(96, 165, 250, ',
                        'rgba(59, 130, 246, ',
                        'rgba(16, 185, 129, ',
                        'rgba(255, 255, 255, '
                    ];
                    return colors[Math.floor(Math.random() * colors.length)];
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    if (this.x > canvas.width) this.x = 0;
                    if (this.x < 0) this.x = canvas.width;
                    if (this.y > canvas.height) this.y = 0;
                    if (this.y < 0) this.y = canvas.height;
                }

                draw() {
                    ctx.fillStyle = this.color + this.opacity + ')';
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            function createParticles() {
                const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new GlobalParticle());
                }
            }

            function connectParticles() {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 120) {
                            const opacity = 0.15 * (1 - distance / 120);
                            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });

                connectParticles();
                animationFrameId = requestAnimationFrame(animate);
            }

            createParticles();
            animate();

            return () => {
                cancelAnimationFrame(animationFrameId);
                window.removeEventListener('resize', resizeCanvas);
            };
        }

        // Initialize global particles on page load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initGlobalParticles);
        } else {
            initGlobalParticles();
        }

        // ═══════════════════════════════════════════════════════════════
        // 💎 UPDATE SUBSCRIPTION STATUS BADGE
        // ═══════════════════════════════════════════════════════════════

        // Wrap original updateSubscriptionUI
        const originalUpdateSubscriptionUI = window.updateSubscriptionUI || function() {};

        window.updateSubscriptionUI = function() {
            // Call original function if exists
            if (typeof originalUpdateSubscriptionUI === 'function') {
                originalUpdateSubscriptionUI();
            }

            // Update status badge
            const sub = checkSubscription();
            const statusBadge = document.getElementById('subscriptionStatusBadge');
            const statusText = document.getElementById('subscriptionStatusText');
            const statusIcon = statusBadge?.querySelector('.subscription-status-icon');
            const miniBadge = document.getElementById('subBadgeMini');
            const userAvatar = document.getElementById('userAvatar');

            if (!statusBadge || !statusText) return;

            // Удаляем все классы подписки с аватарки
            if (userAvatar) {
                userAvatar.classList.remove('subscription-free', 'subscription-pro', 'subscription-lifetime');
            }

            if (sub) {
                if (sub.type === 'lifetime') {
                    // Lifetime subscription
                    statusBadge.className = 'subscription-status-badge lifetime';
                    statusIcon.textContent = '♾️';
                    statusText.textContent = 'LIFETIME';
                    
                    if (miniBadge) {
                        miniBadge.className = 'sub-badge-mini lifetime';
                        miniBadge.textContent = '♾️';
                    }
                    
                    // Добавляем класс к аватарке
                    if (userAvatar) {
                        userAvatar.classList.add('subscription-lifetime');
                    }
                } else {
                    // Pro subscription
                    statusBadge.className = 'subscription-status-badge pro';
                    statusIcon.textContent = '💎';
                    statusText.textContent = 'PRO';
                    
                    if (miniBadge) {
                        miniBadge.className = 'sub-badge-mini pro';
                        miniBadge.textContent = '💎';
                    }
                    
                    // Добавляем класс к аватарке
                    if (userAvatar) {
                        userAvatar.classList.add('subscription-pro');
                    }
                }
            } else {
                // Free plan
                statusBadge.className = 'subscription-status-badge free';
                statusIcon.textContent = '⚡';
                statusText.textContent = 'FREE';
                
                if (miniBadge) {
                    miniBadge.className = 'sub-badge-mini free';
                }
                
                // Добавляем класс к аватарке
                if (userAvatar) {
                    userAvatar.classList.add('subscription-free');
                }
            }

            // Update Profile Subscription Badge
            updateProfileSubscriptionBadge();
        };

        // ═══════════════════════════════════════════════════════════════
        // 💎 UPDATE COMPACT PROFILE SUBSCRIPTION BADGE
        // ═══════════════════════════════════════════════════════════════

        function updateProfileSubscriptionBadge() {
            const sub = checkSubscription();
            const badge = document.getElementById('profileSubBadge');
            const icon = document.getElementById('profileSubIcon');
            const text = document.getElementById('profileSubText');
            const profileAvatar = document.getElementById('profileAvatarImg');
            
            // Обновляем класс аватарки в личном кабинете
            if (profileAvatar) {
                profileAvatar.classList.remove('subscription-free', 'subscription-pro', 'subscription-lifetime');
                
                if (sub) {
                    if (sub.type === 'lifetime') {
                        profileAvatar.classList.add('subscription-lifetime');
                    } else {
                        profileAvatar.classList.add('subscription-pro');
                    }
                } else {
                    profileAvatar.classList.add('subscription-free');
                }
            }
            
            if (!badge || !icon || !text) return;

            if (sub) {
                if (sub.type === 'lifetime') {
                    // Lifetime subscription
                    badge.className = 'profile-subscription-badge lifetime';
                    icon.textContent = '♾️';
                    text.textContent = 'LIFETIME';
                } else {
                    // Pro subscription
                    badge.className = 'profile-subscription-badge pro';
                    icon.textContent = '💎';
                    text.textContent = 'PRO';
                }
            } else {
                // Free plan
                badge.className = 'profile-subscription-badge free';
                icon.textContent = '⚡';
                text.textContent = 'FREE';
            }
        }

        // Универсальная функция обновления ВСЕХ badge
        function updateAllSubscriptionBadges() {
            const sub = checkSubscription();
            console.log('🔄 Обновление всех badge:', sub);
            
            // 1. Badge в хедере (subBadgeMini)
            const headerBadge = document.getElementById('subBadgeMini');
            if (headerBadge) {
                headerBadge.classList.remove('free', 'pro', 'lifetime');
                if (sub) {
                    if (sub.type === 'lifetime') {
                        headerBadge.classList.add('lifetime');
                        headerBadge.textContent = '♾️';
                    } else {
                        headerBadge.classList.add('pro');
                        headerBadge.textContent = '💎';
                    }
                } else {
                    headerBadge.classList.add('free');
                    headerBadge.textContent = '⚡';
                }
                console.log('✅ Header badge обновлен:', headerBadge.className);
            }
            
            // 2. Badge в dropdown (subscriptionStatusBadge)
            const dropdownBadge = document.getElementById('subscriptionStatusBadge');
            const dropdownIcon = dropdownBadge?.querySelector('.subscription-status-icon');
            const dropdownText = document.getElementById('subscriptionStatusText');
            
            if (dropdownBadge) {
                dropdownBadge.classList.remove('free', 'pro', 'lifetime');
                if (sub) {
                    if (sub.type === 'lifetime') {
                        dropdownBadge.classList.add('lifetime');
                        if (dropdownIcon) dropdownIcon.textContent = '♾️';
                        if (dropdownText) dropdownText.textContent = 'LIFETIME';
                    } else {
                        dropdownBadge.classList.add('pro');
                        if (dropdownIcon) dropdownIcon.textContent = '💎';
                        if (dropdownText) dropdownText.textContent = 'PRO';
                    }
                } else {
                    dropdownBadge.classList.add('free');
                    if (dropdownIcon) dropdownIcon.textContent = '⚡';
                    if (dropdownText) dropdownText.textContent = 'FREE';
                }
                console.log('✅ Dropdown badge обновлен:', dropdownBadge.className);
            }
            
            // 3. Статус в разделе подписки (subscriptionSection)
            const statusValue = document.getElementById('statusValueText');
            const statusBadge = document.getElementById('statusBadgeIcon');
            const statusCard = document.getElementById('subStatusCard');
            
            if (statusValue && statusBadge && statusCard) {
                // Удаляем старые классы
                statusCard.classList.remove('status-free', 'status-pro', 'status-lifetime');
                
                if (sub) {
                    if (sub.type === 'lifetime') {
                        statusValue.textContent = 'LIFETIME';
                        statusBadge.textContent = '♾️';
                        statusCard.classList.add('status-lifetime');
                    } else {
                        statusValue.textContent = 'PRO';
                        statusBadge.textContent = '💎';
                        statusCard.classList.add('status-pro');
                    }
                } else {
                    statusValue.textContent = 'FREE';
                    statusBadge.textContent = '⚡';
                    statusCard.classList.add('status-free');
                }
                console.log('✅ Subscription section status обновлен:', statusValue.textContent);
            }
            
            // 4. Badge в профиле
            updateProfileSubscriptionBadge();
            console.log('✅ Profile badge обновлен');
            
            // 5. Badge на странице подписок
            updateSubscriptionUI();
            console.log('✅ Subscription page обновлена');
            
            console.log('🎉 Все badge обновлены!');
        }

        // Call on page load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                updateProfileSubscriptionBadge();
                updateAllSubscriptionBadges();
            });
        } else {
            updateProfileSubscriptionBadge();
            updateAllSubscriptionBadges();
        }

        // Постоянное обновление badge каждые 10 секунд
        setInterval(() => {
            console.log('⏰ Плановое обновление badge...');
            updateAllSubscriptionBadges();
        }, 10000); // 10 секунд

        // ═══════════════════════════════════════════════════════════════
        // 🤖 BOT API INTEGRATION
        // ═══════════════════════════════════════════════════════════════

       const BOT_API = {
            // ✅ Railway URL с /api на конце
            // ✅ ПРАВИЛЬНЫЙ Railway URL
            // ✅ ПРАВИЛЬНЫЙ URL - С /api НА КОНЦЕ!
            BASE_URL: 'https://badgbotmain-production.up.railway.app/api',
            SECRET: 'RwNbyMc-dR2g6aaz8YemkbxqHh5R7E0_',
            ENABLED: true,
            DEBUG: true
        };

        // ═══════════════════════════════════════════════════════════════
        // API CALLS
        // ═══════════════════════════════════════════════════════════════

        async function botApiCall(endpoint, method = 'GET', data = null) {
            if (!BOT_API.ENABLED) {
                console.warn('⚠️ Bot API disabled. Set BOT_API.ENABLED = true');
                return null;
            }
            
            const url = `${BOT_API.BASE_URL}${endpoint}`;
            
            if (BOT_API.DEBUG) {
                console.log(`📡 API Request: ${method} ${url}`);
                if (data) console.log('📤 Data:', data);
            }
            
            try {
                const options = {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Secret': BOT_API.SECRET
                    }
                };

                if (data && method !== 'GET') {
                    options.body = JSON.stringify(data);
                }

                const response = await fetch(url, options);
                
                if (BOT_API.DEBUG) {
                    console.log(`📥 Response: ${response.status} ${response.statusText}`);
                }
                
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`API Error ${response.status}: ${errorText}`);
                }

                const result = await response.json();
                
                if (BOT_API.DEBUG) {
                    console.log('✅ Response data:', result);
                }
                
                return result;
            } catch (error) {
                console.error('❌ Bot API Error:', error);
                console.error('URL:', url);
                console.error('Method:', method);
                return null;
            }
        }

        // ═══════════════════════════════════════════════════════════════
        // SUBSCRIPTION CHECK FROM BOT
        // ═══════════════════════════════════════════════════════════════

        async function checkSubscriptionFromBot(userId) {
            console.log('🔍 Проверка подписки для:', userId);
            
            const result = await botApiCall(`/subscription/${userId}`);
            
            console.log('📦 Ответ от бота:', result);
            
            if (!result) {
                console.error('❌ Не удалось получить данные от бота');
                return null;
            }
            
            // Проверка бана ПЕРВЫМ ДЕЛОМ
            if (result.banned) {
                console.warn('🔨 Пользователь забанен!');
                handleUserBanned();
                return null;
            }
            
            console.log('✅ Пользователь НЕ забанен');
            
            if (result.subscription) {
                const sub = result.subscription;
                console.log('📋 Данные подписки:', sub);
                
                const now = new Date();
                const expires = new Date(sub.expires_at);
                
                console.log('⏰ Проверка времени:');
                console.log('   Сейчас:', now);
                console.log('   Истекает:', expires);
                console.log('   Активна в БД:', sub.active);
                console.log('   Не истекла:', expires > now);
                
                // УПРОЩЁННАЯ проверка - если подписка есть в БД, она активна
                if (expires > now) {
                    console.log('💎 ПОДПИСКА АКТИВНА! Сохраняем...');
                    
                    const subData = {
                        type: sub.type,
                        plan: sub.plan,
                        expiresAt: sub.expires_at,
                        grantedAt: sub.granted_at,
                        active: true
                    };
                    
                    console.log('💾 Сохраняем в localStorage:', subData);
                    localStorage.setItem('badgrules_subscription', JSON.stringify(subData));
                    
                    // Проверка что сохранилось
                    const saved = localStorage.getItem('badgrules_subscription');
                    console.log('✅ Проверка сохранения:', saved);
                    
                    // Обновить ВСЕ badge везде
                    console.log('🔄 Обновляем все badge...');
                    if (typeof updateAllSubscriptionBadges === 'function') {
                        updateAllSubscriptionBadges();
                    }
                    
                    console.log('✅ Подписка синхронизирована:', sub.type);
                    return sub;
                } else {
                    // Подписка истекла
                    console.log('⏰ Подписка истекла');
                    localStorage.removeItem('badgrules_subscription');
                    if (typeof updateAllSubscriptionBadges === 'function') {
                        updateAllSubscriptionBadges();
                    }
                }
            } else {
                console.log('⚡ Подписка не найдена - FREE план');
                console.log('🗑️ Удаляем старые данные из localStorage');
                localStorage.removeItem('badgrules_subscription');
                if (typeof updateAllSubscriptionBadges === 'function') {
                    updateAllSubscriptionBadges();
                }
            }
            
            return null;
        }

        async function checkSubscriptionStatus() {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) return;

                const response = await fetch(`https://your-api.com/subscriptions/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                
                if (response.ok) {
                    const subscription = await response.json();
                    updateSubscriptionUI(subscription);
                }
            } catch (error) {
                console.error('Ошибка проверки подписки:', error);
            }
        }

        // Проверяем статус при загрузке страницы
        window.addEventListener('load', () => {
            checkSubscriptionStatus();
            
            // Проверяем каждые 60 секунд на случай, если WebSocket недоступен
            setInterval(checkSubscriptionStatus, 60000);
        });

        // ═══════════════════════════════════════════════════════════════
        // SEND LOGS TO BOT
        // ═══════════════════════════════════════════════════════════════

        async function sendLogToBot(eventType, userId, data) {
            await botApiCall('/log', 'POST', {
                event_type: eventType,
                user_id: userId,
                data: data
            });
        }

        // ═══════════════════════════════════════════════════════════════
        // AUTO SYNC ON LOGIN
        // ═══════════════════════════════════════════════════════════════

        // Переопределяем функцию входа
        const originalLoginComplete = window.loginComplete || function() {};

        window.loginComplete = async function(userData) {
            // Вызываем оригинальную функцию
            originalLoginComplete(userData);
            
            // КРИТИЧЕСКАЯ синхронизация с ботом ПЕРЕД показом интерфейса
            if (BOT_API.ENABLED && userData && userData.id) {
                console.log('🤖 КРИТИЧЕСКАЯ синхронизация с ботом...');
                console.log('   User ID:', userData.id);
                console.log('   Username:', userData.username);
                
                // Сначала проверяем БАН и ПОДПИСКУ
                const result = await botApiCall(`/subscription/${userData.id}`);
                
                console.log('📦 Полный ответ от бота:', result);
                
                if (result && result.banned) {
                    console.error('🔨 ПОЛЬЗОВАТЕЛЬ ЗАБАНЕН!');
                    console.error('   User ID:', userData.id);
                    console.error('   Блокируем доступ...');
                    
                    // НЕ показываем интерфейс!
                    handleUserBanned();
                    return; // ОСТАНАВЛИВАЕМ ВЫПОЛНЕНИЕ
                }
                
                console.log('✅ Пользователь НЕ забанен, продолжаем...');
                
                // Если не забанен - проверяем подписку
                const subscription = await checkSubscriptionFromBot(userData.id);
                
                console.log('📋 Результат проверки подписки:', subscription);
                
                // ПРИНУДИТЕЛЬНОЕ обновление badge после небольшой задержки
                setTimeout(() => {
                    console.log('🔄 ПРИНУДИТЕЛЬНОЕ обновление всех badge...');
                    if (typeof updateAllSubscriptionBadges === 'function') {
                        updateAllSubscriptionBadges();
                    }
                }, 500);
                
                // И ещё раз через секунду на всякий случай
                setTimeout(() => {
                    console.log('🔄 ПОВТОРНОЕ обновление всех badge...');
                    if (typeof updateAllSubscriptionBadges === 'function') {
                        updateAllSubscriptionBadges();
                    }
                }, 1500);
                
                // Отправляем лог входа
                await sendLogToBot('user_login', userData.id, {
                    username: userData.username,
                    discriminator: userData.discriminator,
                    avatar: userData.avatar,
                    timestamp: new Date().toISOString()
                });
                
                if (subscription) {
                    console.log('✅ Синхронизация завершена:', subscription.type);
                } else {
                    console.log('✅ Синхронизация завершена: FREE');
                }
            }
        };

        // ═══════════════════════════════════════════════════════════════
        // PERIODIC SUBSCRIPTION CHECK
        // ═══════════════════════════════════════════════════════════════

        function startSubscriptionSync() {
            if (!BOT_API.ENABLED) return;
            
            // Проверять каждые 30 секунд (чаще чем раньше!)
            setInterval(async () => {
                const userData = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
                
                if (userData && userData.id) {
                    console.log('🔄 Периодическая проверка бана и подписки...');
                    
                    // Получить данные напрямую от бота
                    const result = await botApiCall(`/subscription/${userData.id}`);
                    
                    if (result) {
                        // ПРОВЕРКА БАНА ПЕРВЫМ ДЕЛОМ
                        if (result.banned) {
                            console.error('🔨 ОБНАРУЖЕН БАН! Блокируем доступ...');
                            handleUserBanned();
                            return;
                        }
                        
                        // Если не забанен - обновляем подписку
                        await checkSubscriptionFromBot(userData.id);
                    }
                }
            }, 30 * 1000);  // 30 секунд
            
            console.log('🤖 Автоматическая синхронизация запущена (каждые 30 секунд)');
        }

        // Запустить синхронизацию при загрузке
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', startSubscriptionSync);
        } else {
            startSubscriptionSync();
        }

        // ═══════════════════════════════════════════════════════════════
        // MANUAL SUBSCRIPTION SYNC
        // ═══════════════════════════════════════════════════════════════

        async function manualSyncSubscription() {
            if (!BOT_API.ENABLED) {
                alert('❌ Bot API отключен! Включите в настройках.');
                return;
            }

            const userData = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
            
            if (!userData || !userData.id) {
                alert('❌ Вы не авторизованы!');
                return;
            }

            console.log('🔄 Ручная синхронизация подписки...');
            
            // Показать индикатор загрузки
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = '⏳ Обновление...';
            button.disabled = true;
            
            try {
                const subscription = await checkSubscriptionFromBot(userData.id);
                
                if (subscription) {
                    console.log('✅ Подписка обновлена:', subscription.type);
                    button.textContent = '✅ Обновлено!';
                    
                    // Показать уведомление
                    showNotification(`Подписка обновлена: ${subscription.type.toUpperCase()}`, 'success');
                } else {
                    console.log('✅ Подписка обновлена: FREE');
                    button.textContent = '✅ Обновлено!';
                    
                    showNotification('Подписка обновлена: FREE', 'info');
                }
                
                // Вернуть текст через 2 секунды
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000);
            } catch (error) {
                console.error('❌ Ошибка синхронизации:', error);
                button.textContent = '❌ Ошибка';
                
                showNotification('Ошибка синхронизации. Проверьте консоль.', 'error');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000);
            }
        }

        // Простая функция уведомлений
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 16px 24px;
                background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 
                              type === 'error' ? 'linear-gradient(135deg, #ef4444, #dc2626)' :
                              'linear-gradient(135deg, #5865F2, #4752C4)'};
                color: white;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 500;
                z-index: 10000;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                animation: slideIn 0.3s ease;
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        // ═══════════════════════════════════════════════════════════════
        // BAN HANDLER
        // ═══════════════════════════════════════════════════════════════

        function handleUserBanned() {
            // Показать модальное окно о бане
            const banModal = document.createElement('div');
            banModal.id = 'banModal';
            banModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            `;
            
            banModal.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
                    border: 2px solid #ef4444;
                    border-radius: 24px;
                    padding: 3rem;
                    max-width: 500px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(239, 68, 68, 0.3);
                    animation: slideIn 0.3s ease;
                ">
                    <div style="
                        width: 80px;
                        height: 80px;
                        margin: 0 auto 1.5rem;
                        background: rgba(239, 68, 68, 0.2);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 3rem;
                    ">🔨</div>
                    
                    <h2 style="
                        font-size: 2rem;
                        font-weight: 800;
                        color: #ffffff;
                        margin-bottom: 1rem;
                    ">Аккаунт заблокирован</h2>
                    
                    <p style="
                        font-size: 1rem;
                        color: #a0a0a0;
                        margin-bottom: 2rem;
                        line-height: 1.6;
                    ">
                        Ваш аккаунт был заблокирован администрацией.<br>
                        Для получения дополнительной информации обратитесь в поддержку.
                    </p>
                    
                    <button onclick="logout(); document.getElementById('banModal').remove();" style="
                        padding: 1rem 2rem;
                        background: #ef4444;
                        border: none;
                        border-radius: 12px;
                        color: white;
                        font-size: 1rem;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'">
                        Выйти из аккаунта
                    </button>
                </div>
            `;
            
            document.body.appendChild(banModal);
            
            // Заблокировать все функции
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.style.pointerEvents = 'none';
                mainContent.style.filter = 'blur(10px)';
            }
        }

        // ═══════════════════════════════════════════════════════════════
        // EVENT LOGGING
        // ═══════════════════════════════════════════════════════════════

        // Лог отправки сообщения в чат
        const originalSendMessage = window.sendMessage;
        if (originalSendMessage) {
            window.sendMessage = async function() {
                const userData = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
                
                if (BOT_API.ENABLED && userData && userData.id) {
                    const messageInput = document.getElementById('messageInput');
                    
                    await sendLogToBot('chat_message', userData.id, {
                        message_length: messageInput ? messageInput.value.length : 0,
                        timestamp: new Date().toISOString()
                    });
                }
                
                return originalSendMessage.apply(this, arguments);
            };
        }

        // Лог выхода
        const originalLogout = window.logout;
        if (originalLogout) {
            window.logout = async function() {
                const userData = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
                
                if (BOT_API.ENABLED && userData && userData.id) {
                    await sendLogToBot('user_logout', userData.id, {
                        timestamp: new Date().toISOString()
                    });
                }
                
                return originalLogout.apply(this, arguments);
            };
        }
        

        // ═══════════════════════════════════════════════════════════════
        // INITIALIZATION
        // ═══════════════════════════════════════════════════════════════

        async function testBotConnection() {
    if (!BOT_API.ENABLED) {
        console.log('⚡ Bot API отключен в настройках');
        return;
    }
    
    console.log('🔍 Начинаем проверку подключения к боту...');
    console.log('📡 API URL:', BOT_API.BASE_URL);
    console.log('🔑 API Secret (первые 5 символов):', BOT_API.SECRET ? BOT_API.SECRET.substring(0, 5) + '...' : 'undefined');
    
    // 1. Проверяем health endpoint
    console.log('\n1️⃣ Проверка /api/health:');
    try {
        const healthUrl = `${BOT_API.BASE_URL}/health`;
        console.log('   URL:', healthUrl);
        
        const response = await fetch(healthUrl, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        console.log('   Статус:', response.status, response.statusText);
        
        if (response.ok) {
            const data = await response.json();
            console.log('   ✅ Сервер отвечает:', data);
        } else {
            const errorText = await response.text();
            console.error('   ❌ Ошибка сервера:', errorText);
            return;
        }
    } catch (error) {
        console.error('   💥 Ошибка сети:', error.message);
        console.error('   Проблема: не удалось подключиться к серверу');
        return;
    }
    
    // 2. Проверяем авторизацию
    console.log('\n2️⃣ Проверка авторизации (запрос подписки):');
    try {
        // Используем тестовый ID или ID из localStorage
        const userData = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
        const userId = userData.id || '710861571919970305';
        
        const subUrl = `${BOT_API.BASE_URL}/subscription/${userId}`;
        console.log('   URL:', subUrl);
        console.log('   User ID:', userId);
        
        const response = await fetch(subUrl, {
            headers: {
                'X-API-Secret': BOT_API.SECRET,
                'Content-Type': 'application/json'
            }
        });
        
        console.log('   Статус:', response.status, response.statusText);
        
        if (response.ok) {
            const data = await response.json();
            console.log('   ✅ Авторизация успешна!');
            console.log('   Данные:', data);
            
            // Обновляем UI если есть подписка
            if (data.subscription) {
                console.log('   🎉 Пользователь имеет подписку!');
                // Здесь можно обновить UI
            }
        } else {
            const errorText = await response.text();
            console.error('   ❌ Ошибка авторизации:', errorText);
            
            if (response.status === 401) {
                console.error('   🔐 Неверный API секрет!');
                console.error('   Убедитесь что BOT_API.SECRET совпадает с API_SECRET в Railway');
            }
        }
    } catch (error) {
        console.error('   💥 Ошибка при проверке авторизации:', error.message);
    }
    
    console.log('\n🎯 Проверка завершена!');
}

// Запускаем проверку при загрузке
if (BOT_API.ENABLED) {
    console.log('🤖 Bot API Integration loaded');
    console.log('📡 API URL:', BOT_API.BASE_URL);
    console.log('🔑 API Secret:', BOT_API.SECRET ? BOT_API.SECRET.substring(0, 10) + '...' : 'undefined');
    console.log('🔍 Debug mode:', BOT_API.DEBUG ? 'ON' : 'OFF');
    
    // Ждем немного и запускаем проверку
    setTimeout(() => {
        testBotConnection();
    }, 1000);
} else {
    console.log('🤖 Bot API Integration loaded (DISABLED)');
    console.log('💡 To enable: set BOT_API.ENABLED = true');
}



// ═══════════════════════════════════════════════════════════════════════════════
// 🔨 МИНИМАЛИСТИЧНАЯ СИСТЕМА БАНА
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Получить имя Discord пользователя по ID
 */
async function getDiscordUsername(userId) {
    try {
        const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
            headers: {
                'Authorization': `Bot ${BOT_API.BOT_TOKEN || ''}`
            }
        });
        
        if (response.ok) {
            const user = await response.json();
            return user.username || user.global_name || 'Администратор';
        }
    } catch (error) {
        console.log('Не удалось получить имя пользователя:', error);
    }
    
    return 'Администратор';
}

/**
 * Выйти из аккаунта
 */
function logoutAccount() {
    console.log('👋 Выход из аккаунта...');
    
    // Очистить все данные
    localStorage.clear();
    sessionStorage.clear();
    
    // Перезагрузить страницу
    window.location.href = '/';
}

/**
 * Показать минималистичный экран бана
 */
async function showBanScreen(banInfo) {
    console.error('🔨 ПОЛЬЗОВАТЕЛЬ ЗАБАНЕН!');
    console.log('Ban Info:', banInfo);
    
    // Получить имя админа
    const adminName = banInfo.banned_by ? await getDiscordUsername(banInfo.banned_by) : 'Администратор';
    
    // Скрыть весь контент
    document.body.innerHTML = '';
    
    // Создать экран бана
    const banScreen = document.createElement('div');
    banScreen.id = 'ban-screen';
    banScreen.innerHTML = `
        <div class="ban-container">
            <!-- Иконка -->
            <div class="ban-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="1.5"/>
                </svg>
            </div>
            
            <!-- Заголовок -->
            <h1 class="ban-title">Доступ заблокирован</h1>
            
            <!-- Причина -->
            <div class="ban-reason-box">
                <div class="ban-reason-label">Причина</div>
                <div class="ban-reason-text">${banInfo.reason || 'Нарушение правил'}</div>
            </div>
            
            <!-- Информация -->
            <div class="ban-info-minimal">
                <div class="ban-info-item-minimal">
                    <span class="ban-info-label-minimal">Забанил:</span>
                    <span class="ban-info-value-minimal">${adminName}</span>
                </div>
                ${banInfo.temporary ? `
                <div class="ban-info-item-minimal">
                    <span class="ban-info-label-minimal">Истекает:</span>
                    <span class="ban-info-value-minimal">${formatBanExpiry(banInfo.expires_at)}</span>
                </div>
                ` : ''}
            </div>
            
            <!-- Кнопки -->
            <div class="ban-buttons">
                <button class="btn-logout" onclick="logoutAccount()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Выйти из аккаунта
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banScreen);
    addMinimalistBanStyles();
    
    // Сохранить в кэш
    localStorage.setItem('badgrules_ban_info', JSON.stringify(banInfo));
    localStorage.setItem('badgrules_banned', 'true');
}

/**
 * Форматировать истечение бана
 */
function formatBanExpiry(expiresAt) {
    if (!expiresAt) return 'Не указано';
    
    const date = new Date(expiresAt);
    const now = new Date();
    const diff = date - now;
    
    if (diff <= 0) return 'Истёк';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) {
        return `${days} дн. ${hours} ч.`;
    } else if (hours > 0) {
        return `${hours} ч.`;
    } else {
        return `${Math.floor(diff / (1000 * 60))} мин.`;
    }
}

/**
 * Минималистичные стили
 */
function addMinimalistBanStyles() {
    const style = document.createElement('style');
    style.textContent = `
        #ban-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .ban-container {
            max-width: 480px;
            width: 90%;
            background: #0a0a0a;
            border: 1px solid #1a1a1a;
            border-radius: 16px;
            padding: 48px 40px;
            text-align: center;
            animation: fadeIn 0.4s ease-out;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .ban-icon {
            margin: 0 auto 24px;
            color: #ec4899;
            opacity: 0.9;
        }
        
        .ban-title {
            font-size: 1.75em;
            font-weight: 600;
            color: #ffffff;
            margin: 0 0 32px 0;
            letter-spacing: -0.02em;
        }
        
        .ban-reason-box {
            background: rgba(59, 130, 246, 0.08);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 12px;
            padding: 20px;
            margin: 0 0 32px 0;
        }
        
        .ban-reason-label {
            font-size: 0.8em;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 8px;
        }
        
        .ban-reason-text {
            font-size: 1.1em;
            font-weight: 500;
            color: #ec4899;
            line-height: 1.5;
            word-wrap: break-word;
        }
        
        .ban-info-minimal {
            margin: 0 0 32px 0;
        }
        
        .ban-info-item-minimal {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #1a1a1a;
        }
        
        .ban-info-item-minimal:last-child {
            border-bottom: none;
        }
        
        .ban-info-label-minimal {
            font-size: 0.9em;
            color: rgba(255, 255, 255, 0.5);
        }
        
        .ban-info-value-minimal {
            font-size: 0.9em;
            font-weight: 500;
            color: #ffffff;
        }
        
        .ban-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .btn-logout {
            width: 100%;
            background: transparent;
            border: 1px solid #2a2a2a;
            color: rgba(255, 255, 255, 0.7);
            padding: 14px 24px;
            border-radius: 10px;
            font-size: 0.95em;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .btn-logout:hover {
            background: #0f0f0f;
            border-color: #3a3a3a;
            color: #ffffff;
        }
        
        .btn-logout:active {
            transform: scale(0.98);
        }
        
        /* Mobile */
        @media (max-width: 768px) {
            .ban-container {
                padding: 40px 28px;
            }
            
            .ban-title {
                font-size: 1.5em;
            }
            
            .ban-icon svg {
                width: 64px;
                height: 64px;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Скрыть экран бана
 */
function hideBanScreen() {
    console.log('✅ Разбан - перезагрузка...');
    
    localStorage.removeItem('badgrules_ban_info');
    localStorage.removeItem('badgrules_banned');
    
    setTimeout(() => {
        window.location.reload();
    }, 300);
}

/**
 * Проверка статуса бана (С ПРАВИЛЬНОЙ ПОДДЕРЖКОЙ РАЗБАНА)
 */
async function checkBanStatus(userId) {
    if (!userId) return false;
    
    try {
        console.log('🔍 Проверка бана:', userId);
        
        const response = await fetch(`${BOT_API.BASE_URL}/subscription/${userId}`, {
            headers: {
                'X-API-Secret': BOT_API.SECRET,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            console.error('❌ Ошибка API:', response.status);
            return false;
        }
        
        const data = await response.json();
        console.log('📦 Ответ API:', data);
        
        const wasBanned = localStorage.getItem('badgrules_banned') === 'true';
        
        if (data.banned === true) {
            console.error('🔨 ЗАБАНЕН!');
            
            const banInfo = {
                user_id: userId,
                banned: true,
                reason: data.ban_info?.reason || 'Нарушение правил',
                banned_at: data.ban_info?.banned_at || new Date().toISOString(),
                banned_by: data.ban_info?.banned_by || null,
                temporary: data.ban_info?.temporary || false,
                expires_at: data.ban_info?.expires_at || null
            };
            
            if (!document.getElementById('ban-screen')) {
                showBanScreen(banInfo);
            }
            
            return true;
            
        } else if (data.banned === false && wasBanned) {
            console.log('🎉 РАЗБАНЕН!');
            hideBanScreen();
            return false;
            
        } else {
            localStorage.removeItem('badgrules_ban_info');
            localStorage.removeItem('badgrules_banned');
            console.log('✅ НЕ забанен');
            return false;
        }
        
    } catch (error) {
        console.error('❌ Ошибка:', error);
        
        const cachedBan = localStorage.getItem('badgrules_ban_info');
        if (cachedBan && !document.getElementById('ban-screen')) {
            showBanScreen(JSON.parse(cachedBan));
            return true;
        }
        
        return false;
    }
}

/**
 * Мониторинг бана
 */
function startBanMonitoring(userId) {
    if (!userId) return;
    
    console.log('👁️ Мониторинг бана активен (30 сек)');
    
    setInterval(async () => {
        console.log('🔄 Проверка...');
        await checkBanStatus(userId);
    }, 30 * 1000);
}

// ═══════════════════════════════════════════════════════════════════════════════
// ИНТЕГРАЦИЯ
// ═══════════════════════════════════════════════════════════════════════════════

(function() {
    const originalLoginComplete = window.loginComplete;
    
    window.loginComplete = async function(userData) {
        console.log('🔐 Login - проверка бана...');
        
        if (userData && userData.id) {
            const isBanned = await checkBanStatus(userData.id);
            
            if (isBanned) {
                console.error('🔨 Доступ заблокирован');
                return;
            }
            
            console.log('✅ Не забанен');
            
            if (originalLoginComplete) {
                await originalLoginComplete(userData);
            }
            
            startBanMonitoring(userData.id);
        }
    };
})();

(function() {
    const originalCheckSub = window.checkSubscriptionFromBot;
    
    window.checkSubscriptionFromBot = async function(userId) {
        const isBanned = await checkBanStatus(userId);
        if (isBanned) return null;
        
        if (originalCheckSub) {
            return await originalCheckSub(userId);
        }
        
        return null;
    };
})();

(function() {
    const cachedBan = localStorage.getItem('badgrules_ban_info');
    if (cachedBan) {
        const banInfo = JSON.parse(cachedBan);
        
        if (banInfo.temporary && banInfo.expires_at) {
            const expires = new Date(banInfo.expires_at);
            if (expires < new Date()) {
                localStorage.removeItem('badgrules_ban_info');
                localStorage.removeItem('badgrules_banned');
                return;
            }
        }
        
        showBanScreen(banInfo);
    }
})();

console.log('✅ Минималистичная система бана активна!');

// ═══════════════════════════════════════════════════════════════════════════════
// СИСТЕМА АНИМАЦИИ МОЛНИЙ ВОКРУГ ПЕРСОНАЖА - ОТКЛЮЧЕНО
// ═══════════════════════════════════════════════════════════════════════════════

// Молнии отключены по запросу пользователя
console.log('⚡ Система молний отключена');

// ═══════════════════════════════════════════════════════════════════════════════
// СКРЫТИЕ НАВИГАЦИИ ПРИ СКРОЛЛЕ ВНИЗ
// ═══════════════════════════════════════════════════════════════════════════════

(function initNavbarHideOnScroll() {
    const navbar = document.getElementById('topLogo');
    if (!navbar) return;

    let lastScrollTop = 0;
    let scrollTimeout;

    function handleScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Игнорируем если скролл в самом верху
        if (currentScroll <= 100) {
            navbar.classList.remove('hidden');
            lastScrollTop = currentScroll;
            return;
        }

        // Скролл вниз - прячем
        if (currentScroll > lastScrollTop) {
            navbar.classList.add('hidden');
        } 
        // Скролл вверх - показываем
        else if (currentScroll < lastScrollTop) {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    // Добавляем debounce для плавности
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 10);
    }, { passive: true });

    console.log('📱 Автоскрытие навигации активно');
})();

    
// ═══════════════════════════════════════════════════════════════
// VERTICAL SCROLL INDICATOR FUNCTIONALITY - LEFT SIDE
// ═══════════════════════════════════════════════════════════════
(function() {
    function initScrollIndicator() {
        const scrollDots = document.querySelectorAll('.scroll-dot');
        
        scrollDots.forEach(dot => {
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                console.log('🖱️ Клик на скролл точку:', section);
                
                if (section) {
                    // Update active dot
                    scrollDots.forEach(d => d.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Switch section using showSection
                    if (typeof showSection === 'function') {
                        showSection(section);
                        console.log('✅ Секция переключена на:', section);
                    }
                    
                    // Also update logo menu
                    const logoMenuItems = document.querySelectorAll('.logo-menu-item');
                    logoMenuItems.forEach(item => {
                        if (item.getAttribute('data-section') === section) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            });
        });
        
        console.log('✅ Скролл индикатор инициализирован');
    }
    
    // Update scroll indicator when section changes
    window.updateScrollIndicator = function(sectionName) {
        console.log('🔄 Обновление скролл индикатора:', sectionName);
        const scrollDots = document.querySelectorAll('.scroll-dot');
        scrollDots.forEach(dot => {
            if (dot.getAttribute('data-section') === sectionName) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };
    
    // Initialize on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollIndicator);
    } else {
        initScrollIndicator();
    }
    
    // Re-initialize after a delay to ensure DOM is ready
    setTimeout(initScrollIndicator, 500);
})();

// Override showSection to update scroll indicator
(function() {
    const originalShowSection = window.showSection;
    
    if (originalShowSection) {
        window.showSection = function(sectionName) {
            console.log('📄 Переключение секции:', sectionName);
            
            // Call original function
            originalShowSection.apply(this, arguments);
            
            // Update scroll indicator
            if (typeof updateScrollIndicator === 'function') {
                updateScrollIndicator(sectionName);
            }
        };
    }
})();

// Also update when selectLogoMenu is called
(function() {
    const originalSelectLogoMenu = window.selectLogoMenu;
    
    if (originalSelectLogoMenu) {
        window.selectLogoMenu = function(section) {
            console.log('📋 selectLogoMenu вызван:', section);
            
            // Call original
            originalSelectLogoMenu.apply(this, arguments);
            
            // Update scroll indicator
            if (typeof updateScrollIndicator === 'function') {
                updateScrollIndicator(section);
            }
        };
    }
})();




// ═══════════════════════════════════════════════════════════════
// AUTO-OPEN CHAT ON LOGIN - Skip Home Screen
// ═══════════════════════════════════════════════════════════════
(function() {
    // Override showMainInterface to immediately show chat
    const originalShowMainInterface = window.showMainInterface;
    
    if (originalShowMainInterface) {
        window.showMainInterface = function(user) {
            // Call original function
            originalShowMainInterface.call(this, user);
            
            // After a short delay, switch to chat
            setTimeout(() => {
                console.log('🚀 Auto-opening chat section...');
                
                // Hide home section
                const homeSection = document.getElementById('homeSection');
                if (homeSection) {
                    homeSection.classList.remove('active');
                }
                
                // Show chat section
                const chatSection = document.getElementById('chatSection');
                if (chatSection) {
                    chatSection.classList.add('active');
                }
                
                // Show chat input
                const chatInput = document.querySelector('.chat-input-container');
                if (chatInput) {
                    chatInput.style.display = 'block';
                }
                
                // Update menu
                document.querySelectorAll('.logo-menu-item').forEach(item => {
                    if (item.dataset.section === 'chat') {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
                
                // Update scroll indicator
                if (typeof updateScrollIndicator === 'function') {
                    updateScrollIndicator('chat');
                }
                
                console.log('✅ Chat section opened automatically');
            }, 100);
        };
    }
})();

// Also ensure chat is shown on page load if user is logged in
window.addEventListener('load', function() {
    setTimeout(() => {
        const user = localStorage.getItem('badgrules_user');
        if (user) {
            const homeSection = document.getElementById('homeSection');
            const chatSection = document.getElementById('chatSection');
            
            if (homeSection && chatSection) {
                homeSection.classList.remove('active');
                chatSection.classList.add('active');
                
                const chatInput = document.querySelector('.chat-input-container');
                if (chatInput) {
                    chatInput.style.display = 'block';
                }
            }
        }
    }, 200);
});




// ═══════════════════════════════════════════════════════════════
// NEWS CONFIGURATION - Конфигурация новостей
// ═══════════════════════════════════════════════════════════════

const NEWS_CONFIG = [
    {
        id: 1,
        title: 'Новостей пока нет',
        date: '2024-12-14',
        category: 'Информация',
        content: 'На данный момент новостей нет. Следите за обновлениями проекта BadgRules. Скоро здесь появятся важные анонсы, обновления функционала и другая полезная информация для пользователей.',
        icon: '📰',
        author: 'Команда BadgRules',
        tags: ['Скоро', 'Обновления']
    }
];

// Функция рендеринга новости
function renderNewsItem(news) {
    const card = document.createElement('div');
    card.className = 'news-card';
    
    const dateObj = new Date(news.date);
    const formattedDate = dateObj.toLocaleDateString('ru-RU', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Формируем теги
    const tagsHTML = news.tags ? news.tags.map(tag => 
        `<span class="news-tag">${tag}</span>`
    ).join('') : '';
    
    card.innerHTML = `
        <div class="news-header-bar">
            <div class="news-icon">${news.icon}</div>
            <div class="news-category">${news.category}</div>
        </div>
        <div class="news-content">
            <h3 class="news-card-title">${news.title}</h3>
            <p class="news-card-text">${news.content}</p>
            ${tagsHTML ? `<div class="news-tags">${tagsHTML}</div>` : ''}
            <div class="news-footer">
                <div class="news-author">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>${news.author || 'Команда BadgRules'}</span>
                </div>
                <div class="news-date">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>${formattedDate}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Загрузка новостей
function loadNews() {
    console.log('📰 Загрузка новостей...');
    
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) {
        console.error('❌ newsGrid не найден');
        return;
    }
    
    newsGrid.innerHTML = '';
    
    // Сортируем новости по дате (новые сначала)
    const sortedNews = [...NEWS_CONFIG].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    sortedNews.forEach((news, index) => {
        const card = renderNewsItem(news);
        card.style.animationDelay = `${index * 0.1}s`;
        newsGrid.appendChild(card);
    });
    
    console.log('✅ Новости загружены!');
}

// Автозагрузка новостей при открытии секции
document.addEventListener('DOMContentLoaded', function() {
    const originalShowSection = window.showSection;
    if (originalShowSection) {
        window.showSection = function(sectionName) {
            originalShowSection.apply(this, arguments);
            
            if (sectionName === 'news') {
                setTimeout(loadNews, 100);
            }
        };
    }
});


// ═══════════════════════════════════════════════════════════════
// STATIC SYSTEM - Система статиков
// ═══════════════════════════════════════════════════════════════

// ID владельцев (БЕЗ СТАТИКА)
const OWNER_IDS = [
    '482499344982081546',
    '701782316623855668'
];

// ID команды с фиксированными статиками 0001-0010
const TEAM_STATIC_IDS = {
    '685507278400782376': '0001',  // #0001 - Kai
    '1170537060277428324': '0002',   // #0002 - Участник команды
    '1346385347319169038': '0003',  // #0003 - Участник команды
      // #0004 - Участник команды
    // Добавляйте участников команды до 0010
    // 'DISCORD_ID': '0005',
    // 'DISCORD_ID': '0006',
    // и так далее до 0010
};

// Максимальный статик для команды
const MAX_TEAM_STATIC = 10;

// Функция проверки - является ли пользователь владельцем
function isOwner(userId) {
    return OWNER_IDS.includes(userId);
}

// Функция проверки - является ли пользователь участником команды
function isTeamMember(userId) {
    return TEAM_STATIC_IDS.hasOwnProperty(userId);
}

// Функция получения следующего свободного статика для обычных пользователей
function getNextAvailableStatic() {
    // Получаем все выданные статики
    const allStatics = JSON.parse(localStorage.getItem('badgrules_all_statics') || '{}');
    const usedStatics = new Set();
    
    // Добавляем фиксированные статики команды (0001-0010) в занятые
    Object.values(TEAM_STATIC_IDS).forEach(staticNum => {
        usedStatics.add(staticNum);
    });
    
    // Добавляем все выданные статики пользователям
    Object.values(allStatics).forEach(staticNum => {
        usedStatics.add(staticNum);
    });
    
    // Ищем первый свободный статик начиная с 0011
    for (let i = MAX_TEAM_STATIC + 1; i <= 9999; i++) {
        const staticNum = i.toString().padStart(4, '0');
        if (!usedStatics.has(staticNum)) {
            return staticNum;
        }
    }
    
    // Если все статики заняты (маловероятно)
    console.error('❌ Все статики заняты! Достигнут лимит 9999 пользователей');
    return null;
}

// Основная функция получения статика пользователя
function getUserStatic(userId) {
    if (!userId) {
        console.error('❌ userId не предоставлен');
        return null;
    }
    
    // 1. ВЛАДЕЛЬЦЫ - без статика
    if (isOwner(userId)) {
        console.log(`👑 Пользователь ${userId} - Владелец (без статика)`);
        return null;
    }
    
    // 2. КОМАНДА - фиксированные статики 0001-0010
    if (isTeamMember(userId)) {
        const teamStatic = TEAM_STATIC_IDS[userId];
        console.log(`⭐ Пользователь ${userId} - Команда (статик ${teamStatic})`);
        return teamStatic;
    }
    
    // 3. ОБЫЧНЫЕ ПОЛЬЗОВАТЕЛИ - динамические статики от 0011
    const allStatics = JSON.parse(localStorage.getItem('badgrules_all_statics') || '{}');
    
    // Проверяем, был ли уже выдан статик ранее
    if (allStatics[userId]) {
        const existingStatic = allStatics[userId];
        console.log(`✅ Пользователь ${userId} уже имеет статик ${existingStatic}`);
        return existingStatic;
    }
    
    // Выдаем новый статик
    const newStatic = getNextAvailableStatic();
    if (newStatic) {
        allStatics[userId] = newStatic;
        localStorage.setItem('badgrules_all_statics', JSON.stringify(allStatics));
        console.log(`🆕 Выдан новый статик ${newStatic} для пользователя ${userId}`);
        return newStatic;
    }
    
    console.error(`❌ Не удалось выдать статик для пользователя ${userId}`);
    return null;
}

// Функция получения роли пользователя
function getUserRole(userId) {
    if (!userId) return 'Гость';
    
    if (isOwner(userId)) {
        return 'Владелец';
    }
    
    if (isTeamMember(userId)) {
        return 'Команда';
    }
    
    return 'Пользователь';
}

// Функция получения красивого отображения роли с иконкой
function getUserRoleWithIcon(userId) {
    if (!userId) return '👤 Гость';
    
    if (isOwner(userId)) {
        return '👑 Владелец';
    }
    
    if (isTeamMember(userId)) {
        return '⭐ Команда';
    }
    
    return '👤 Пользователь';
}

// Обновление отображения статика в профиле
function updateProfileStatic(userId) {
    console.log('🔄 Обновление профиля для userId:', userId);
    
    const staticElement = document.getElementById('userStatic');
    const roleElement = document.getElementById('userRole');
    const staticRow = document.getElementById('staticRow');
    
    if (!staticElement || !roleElement) {
        console.warn('⚠️ Элементы профиля не найдены');
        return;
    }
    
    // Получаем статик и роль пользователя
    const userStatic = getUserStatic(userId);
    const userRole = getUserRole(userId);
    const userRoleWithIcon = getUserRoleWithIcon(userId);
    
    console.log(`📊 Статик: ${userStatic || 'НЕТ'}, Роль: ${userRole}`);
    
    // Обновляем роль (можно использовать с иконкой)
    roleElement.textContent = userRole;
    
    // Показываем/скрываем строку со статиком
    if (userStatic) {
        // У пользователя есть статик - показываем
        staticElement.textContent = `#${userStatic}`;
        if (staticRow) {
            staticRow.style.display = 'flex';
            console.log(`✅ Статик #${userStatic} отображается`);
        }
    } else {
        // Владельцы - скрываем строку со статиком
        if (staticRow) {
            staticRow.style.display = 'none';
            console.log(`👑 Владелец - статик скрыт`);
        }
    }
}

// Функция для просмотра всех выданных статиков (для отладки)
function debugShowAllStatics() {
    const allStatics = JSON.parse(localStorage.getItem('badgrules_all_statics') || '{}');
    console.log('📋 Все выданные статики:');
    console.table(allStatics);
    console.log('⭐ Команда:', TEAM_STATIC_IDS);
    console.log('👑 Владельцы (без статика):', OWNER_IDS);
}

// Функция для сброса всех статиков (только для отладки!)
function debugResetAllStatics() {
    if (confirm('⚠️ Вы уверены? Это удалит все выданные статики!')) {
        localStorage.removeItem('badgrules_all_statics');
        console.log('🗑️ Все статики сброшены');
        location.reload();
    }
}

// ═══════════════════════════════════════════════════════════════
// 🌍 UNIVERSAL ACCESS - Service Worker ОТКЛЮЧЕН (может вызывать проблемы)
// ═══════════════════════════════════════════════════════════════

// Service Worker временно отключен из-за проблем с загрузкой
// Раскомментируйте если нужен offline режим
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker зарегистрирован');
            })
            .catch(err => {
                console.log('ℹ️ Service Worker не зарегистрирован');
            });
    });
}
*/

// ═══════════════════════════════════════════════════════════════
// 🌐 GLOBAL ACCESSIBILITY - Проверка доступности
// ═══════════════════════════════════════════════════════════════

// Проверяем доступность основных сервисов
async function checkGlobalAccess() {
    const services = [
        { name: 'Groq API', url: 'https://api.groq.com' },
        { name: 'Gemini API', url: 'https://generativelanguage.googleapis.com' },
        { name: 'CORS Proxy', url: 'https://api.allorigins.win' }
    ];
    
    console.log('🌍 Проверка глобальной доступности...');
    
    for (const service of services) {
        try {
            const response = await fetch(service.url, { 
                method: 'HEAD',
                mode: 'no-cors'
            });
            console.log(`✅ ${service.name}: доступен`);
        } catch (error) {
            console.log(`⚠️ ${service.name}: ограничен (будут использоваться альтернативы)`);
        }
    }
}

// Запускаем проверку при загрузке
checkGlobalAccess();

// ═══════════════════════════════════════════════════════════════
// 🚫 RUSSIA BLOCK DETECTION - Определение блокировок РФ
// ═══════════════════════════════════════════════════════════════

let pageLoadTimeout;
let isRussiaBlocked = false;

// Таймаут для бесконечной загрузки (5 секунд)
pageLoadTimeout = setTimeout(() => {
    if (document.readyState !== 'complete') {
        console.warn('⚠️ Обнаружена медленная загрузка - возможна блокировка провайдера');
        isRussiaBlocked = true;
        
        // Показываем предупреждение пользователю
        showBlockWarning();
    }
}, 5000);

// Очищаем таймаут когда страница загружена
window.addEventListener('load', () => {
    clearTimeout(pageLoadTimeout);
});

// Функция показа предупреждения о блокировке
function showBlockWarning() {
    const warningDiv = document.createElement('div');
    warningDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(251, 191, 36, 0.95);
        color: #000;
        padding: 15px 30px;
        border-radius: 12px;
        font-weight: 600;
        z-index: 999999;
        box-shadow: 0 4px 20px rgba(251, 191, 36, 0.4);
        max-width: 90%;
        text-align: center;
        animation: slideDown 0.5s ease;
    `;
    
    warningDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; justify-content: center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>Обнаружены проблемы с подключением. Используйте VPN для стабильной работы.</span>
        </div>
    `;
    
    document.body.appendChild(warningDiv);
    
    // Убираем предупреждение через 10 секунд
    setTimeout(() => {
        warningDiv.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => warningDiv.remove(), 500);
    }, 10000);
}

// Добавляем анимации
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ═══════════════════════════════════════════════════════════════
// 🔄 FAILOVER - Автоматическое переключение на альтернативы
// ═══════════════════════════════════════════════════════════════

// Перехватываем ошибки сети и переключаемся на альтернативы
window.addEventListener('online', () => {
    console.log('🌐 Соединение восстановлено');
    location.reload();
});

window.addEventListener('offline', () => {
    console.log('📴 Соединение потеряно - работаем в offline режиме');
});


// ═══════════════════════════════════════════════════════════════
// 🛡️ PAGE LOAD PROTECTION - Защита от черного экрана
// ═══════════════════════════════════════════════════════════════

(function() {
    const loader = document.getElementById('initialLoader');
    const loaderError = document.getElementById('loaderError');
    let loadTimeout;
    let errorTimeout;
    
    // Таймаут на полную загрузку - 8 секунд
    loadTimeout = setTimeout(() => {
        console.error('⚠️ Страница не загрузилась за 8 секунд');
        if (loaderError) {
            loaderError.classList.add('active');
        }
    }, 8000);
    
    // Полная загрузка страницы
    window.addEventListener('load', () => {
        clearTimeout(loadTimeout);
        console.log('✅ Страница полностью загружена');
        
        // Убираем loader с анимацией
        if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });
    
    // DOM готов (базовая защита)
    document.addEventListener('DOMContentLoaded', () => {
        console.log('✅ DOM загружен');
        
        // Если за 15 секунд не произошло событие load, показываем ошибку
        errorTimeout = setTimeout(() => {
            if (loader && loader.style.display !== 'none') {
                console.error('⚠️ Критическая ошибка загрузки');
                if (loaderError) {
                    loaderError.classList.add('active');
                }
            }
        }, 15000);
    });
    
    // Глобальный обработчик ошибок
    window.addEventListener('error', (e) => {
        console.error('❌ Глобальная ошибка:', e.message, e.filename, e.lineno);
        
        // Если критическая ошибка в первые 5 секунд, показываем экран ошибки
        if (performance.now() < 5000) {
            if (loaderError) {
                loaderError.classList.add('active');
            }
        }
    });
    
    // Обработчик необработанных промисов
    window.addEventListener('unhandledrejection', (e) => {
        console.error('❌ Необработанный промис:', e.reason);
    });
    
    console.log('🛡️ Система защиты от черного экрана активирована');
})();


// ═══════════════════════════════════════════════════════════════
// 🎨 TEAM CARDS COLOR CUSTOMIZATION - Кастомизация цветов карточек команды
// ═══════════════════════════════════════════════════════════════

// Цвета по умолчанию
const DEFAULT_TEAM_COLORS = {
    // Карточки команды
    teamCardBg: 'rgba(30, 30, 30, 0.6)',
    teamCardBorder: 'rgba(255, 255, 255, 0.1)',
    teamCardHoverBorder: 'rgba(96, 165, 250, 0.4)',
    teamCardHoverShadow: 'rgba(96, 165, 250, 0.2)',
    teamCardGradient: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(59, 130, 246, 0.1))',
    teamAvatarBorder: 'rgba(96, 165, 250, 0.3)',
    teamBadgeBg: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.15))',
    teamBadgeBorder: 'rgba(96, 165, 250, 0.5)',
    teamBadgeColor: '#60a5fa',
    teamBadgeShadow: 'rgba(96, 165, 250, 0.3)',
    teamTitleColor: '#60a5fa',
    
    // Карточки владельцев
    ownerCardHoverBorder: 'rgba(255, 215, 0, 0.5)',
    ownerCardHoverShadow: 'rgba(255, 215, 0, 0.3)',
    ownerCardGradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 193, 7, 0.1))',
    ownerAvatarBorder: 'rgba(255, 215, 0, 0.5)',
    ownerAvatarGlow: 'rgba(255, 215, 0, 0.3)',
    ownerBadgeBg: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 193, 7, 0.15))',
    ownerBadgeBorder: 'rgba(255, 215, 0, 0.5)',
    ownerBadgeColor: '#ffd700',
    ownerBadgeShadow: 'rgba(255, 215, 0, 0.3)',
    ownerTitleColor: '#ffd700',
    
    // Карточки Senior-модератора
    seniorCardHoverBorder: 'rgba(168, 85, 247, 0.5)',
    seniorCardHoverShadow: 'rgba(168, 85, 247, 0.3)',
    seniorCardGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(126, 58, 242, 0.1))',
    seniorAvatarBorder: 'rgba(168, 85, 247, 0.5)',
    seniorAvatarGlow: 'rgba(168, 85, 247, 0.3)',
    seniorBadgeBg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(126, 58, 242, 0.15))',
    seniorBadgeBorder: 'rgba(168, 85, 247, 0.5)',
    seniorBadgeColor: '#a855f7',
    seniorBadgeShadow: 'rgba(168, 85, 247, 0.3)',
    seniorTitleColor: '#a855f7'
};

// Загрузка сохраненных цветов
function loadTeamColors() {
    const savedColors = localStorage.getItem('badgrules_team_colors');
    const colors = savedColors ? JSON.parse(savedColors) : DEFAULT_TEAM_COLORS;
    applyTeamColors(colors);
    return colors;
}

// Применение цветов
function applyTeamColors(colors) {
    const root = document.documentElement;
    
    // Применяем каждый цвет
    Object.keys(colors).forEach(key => {
        const cssVarName = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(cssVarName, colors[key]);
    });
    
    console.log('🎨 Цвета карточек команды применены');
}

// Сохранение цветов
function saveTeamColors(colors) {
    localStorage.setItem('badgrules_team_colors', JSON.stringify(colors));
    applyTeamColors(colors);
    console.log('💾 Цвета карточек команды сохранены');
}

// Сброс к цветам по умолчанию
function resetTeamColors() {
    saveTeamColors(DEFAULT_TEAM_COLORS);
    console.log('🔄 Цвета карточек сброшены к значениям по умолчанию');
}

// Загружаем цвета при старте страницы
document.addEventListener('DOMContentLoaded', () => {
    loadTeamColors();
});


</script>



</body>

</html>