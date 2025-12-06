$path = "..\index.html"
$content = Get-Content -Raw -Path $path
$newCss = @"
        /* 
           ELITE SUBSCRIPTION UPGRADE 
           Wider layout & Enhanced visuals 
        */
        .profile-minimal { 
            max-width: 1200px !important; 
            padding: 2.5rem !important; 
        }
        
        .subscription-elite { 
            padding: 3rem !important; 
            border-radius: 32px !important; 
            margin-top: 3rem !important; 
            background: linear-gradient(180deg, #080808 0%, #121212 100%) !important;
            box-shadow: 0 0 60px rgba(212, 175, 55, 0.08), inset 0 0 2px rgba(212, 175, 55, 0.1) !important; 
            border: 1px solid rgba(212, 175, 55, 0.25) !important;
        }

        .elite-header {
            margin-bottom: 3rem !important;
            padding-bottom: 2.5rem !important;
        }

        .elite-title { 
            font-size: 2.5rem !important; 
            text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
        }

        .crown-icon { 
            font-size: 4rem !important; 
            filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.4));
        }
        
        .plans-elite { 
            gap: 1.5rem !important; 
        }
        
        .plan-elite { 
            padding: 2rem 1.5rem !important; 
            background: rgba(255, 255, 255, 0.03) !important;
        }

        .plan-elite:hover {
            transform: translateY(-8px) !important;
            background: rgba(255, 255, 255, 0.05) !important;
        }
        
        .features-grid-elite { 
            gap: 1.5rem !important; 
        }
        
        .feature-elite {
            padding: 1.5rem !important;
            background: rgba(255, 255, 255, 0.02) !important;
        }
        
        @media (max-width: 800px) {
            .profile-minimal { padding: 1rem !important; }
            .subscription-elite { padding: 1.5rem !important; }
            .plans-elite, .features-grid-elite { gap: 0.75rem !important; }
        }
"@
# Ensure we don't add it twice if run multiple times
if ($content -notmatch "ELITE SUBSCRIPTION UPGRADE") {
    $content = $content -replace '</style>', "$newCss`n    </style>"
    Set-Content -Path $path -Value $content
    Write-Host "Styles injected successfully."
} else {
    Write-Host "Styles already present."
}
