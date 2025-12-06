$path = "..\index.html"
$content = Get-Content -Raw -Path $path
$animationCss = @"
        /* 
           ELITE ANIMATIONS PACK 
           Smooth entrances & Interactions 
        */
        
        /* Keyframes */
        @keyframes fadeInUpElite {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes borderPulseElite {
            0%, 100% { border-color: rgba(212, 175, 55, 0.25); box-shadow: 0 0 60px rgba(212, 175, 55, 0.08), inset 0 0 2px rgba(212, 175, 55, 0.1); }
            50% { border-color: rgba(212, 175, 55, 0.5); box-shadow: 0 0 80px rgba(212, 175, 55, 0.15), inset 0 0 10px rgba(212, 175, 55, 0.05); }
        }
        
        @keyframes floatCard {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }

        /* Container Animation */
        .subscription-elite {
            animation: borderPulseElite 4s ease-in-out infinite !important;
        }

        /* Staggered Entrance */
        .subscription-elite > div {
            opacity: 0;
            animation: fadeInUpElite 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        .subscription-elite .elite-bg { animation-delay: 0s; opacity: 1; }
        .subscription-elite .elite-header { animation-delay: 0.1s; }
        .subscription-elite .elite-status { animation-delay: 0.2s; }
        .subscription-elite .elite-features { animation-delay: 0.3s; }
        .subscription-elite .elite-pricing { animation-delay: 0.4s; }
        .subscription-elite .trust-elite { animation-delay: 0.5s; }

        /* Enhanced Plan Interactions */
        .plan-elite {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        }

        .plan-elite:hover {
            transform: translateY(-12px) scale(1.02) !important;
            background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01)) !important;
            border-color: #d4af37 !important;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(212, 175, 55, 0.15) !important;
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
            0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.6); }
            70% { box-shadow: 0 0 0 12px rgba(212, 175, 55, 0); }
            100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }

        .lt-btn {
            animation: btnGlowPulse 2s infinite !important;
            position: relative;
            overflow: hidden;
        }
        
        .lt-btn::after {
            content: '';
            position: absolute;
            top: 0; left: -100%;
            width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: btnShine 3s infinite;
        }
        
        @keyframes btnShine {
            0% { left: -100%; }
            20% { left: 100%; }
            100% { left: 100%; }
        }
"@

if ($content -notmatch "ELITE ANIMATIONS PACK") {
    $content = $content -replace '</style>', "$animationCss`n    </style>"
    Set-Content -Path $path -Value $content
    Write-Host "Animations injected successfully."
} else {
    Write-Host "Animations already present."
}
