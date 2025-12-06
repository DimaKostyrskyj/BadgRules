
$path = "d:\BadgRules\index.html"
$content = Get-Content -Path $path -Raw -Encoding UTF8

$css = @"
        /* ═══════════════════════════════════════════════════════════════ */
        /* 🛑 DISABLE ANIMATIONS FOR LIFETIME BLOCK                        */
        /* ═══════════════════════════════════════════════════════════════ */
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
           But "Убери анимацию" is strong. Let's kill all animations on that block to be safe. */
        
        .lifetime-elite:hover {
            border-color: #d4af37 !important; /* Keep border color change */
        }
"@

# Insert before the last </style>
if ($content -match "<\/style>") {
    $content = $content -replace "<\/style>", "$css`n    </style>"
    Set-Content -Path $path -Value $content -Encoding UTF8
    Write-Host "Successfully disabled animations for lifetime block in index.html"
} else {
    Write-Error "Could not find </style> tag in index.html"
}
