
$path = "d:\BadgRules\index.html"
# Read with UTF8
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# ---------------------------------------------------------
# 1. FIX JS (Replace the entire corrupted function)
# ---------------------------------------------------------
# We match from "window.grantPro =" until the start of the next known function "function checkGrantedPro"
# We need to be careful with regex special chars.

$correctJs = @'
window.grantPro = function(userId, days = 30) {
    if (!userId) return console.error('❌ Please provide a user ID');
    
    const isLifetime = days === -1;
    const now = new Date();
    const subscription = {
        plan: isLifetime ? 'lifetime' : 'manual',
        planName: isLifetime ? 'Lifetime (Manual)' : days + ' Days (Manual)',
        grantedBy: 'console',
        reason: 'Manual grant via console',
        lifetime: isLifetime,
        startedAt: now.toISOString(),
        expiresAt: isLifetime ? null : new Date(now.getTime() + days * 24 * 60 * 60 * 1000).toISOString()
    };
    
    const grantsKey = 'badgrules_pro_grants';
    const grants = JSON.parse(localStorage.getItem(grantsKey) || '{}');
    grants[userId] = subscription;
    localStorage.setItem(grantsKey, JSON.stringify(grants));
    
    console.log(`✅ Granted Pro to ${userId} for ${isLifetime ? 'Lifetime' : days + ' days'}`);
    alert(`✅ Pro подписка выдана пользователю ${userId}`);
    
    // Refresh if it's the current user
    const currentUser = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
    if (currentUser.id === userId) {
        location.reload();
    }
    
    return subscription;
};
'@

# Regex to find the bad block. 
# It starts with "window.grantPro =" and goes until "// Check if current user has granted Pro"
$jsPattern = '(?s)window\.grantPro\s*=\s*function.*?// Check if current user has granted Pro'
$jsReplacement = $correctJs + "`n`n// Check if current user has granted Pro"

$content = $content -replace $jsPattern, $jsReplacement


# ---------------------------------------------------------
# 2. FIX CSS (Replace the bad comments and content)
# ---------------------------------------------------------
# The bad CSS block is inside <style> ... </style> near the end of head.
# We'll search for the distinctive corrupted separator or header.

$correctCss = @'
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
'@

# Pattern to match the bad CSS block.
# It seems to start with "/* " followed by some chars and "DISABLE ANIMATIONS"
# We'll match from the first corrupted separator line until </style>
# The corrupted separator had "в•ђ" chars.
# Regex: `/\*.*DISABLE ANIMATIONS.*?(\s*\.lifetime-elite:hover\s*\{.*?\})` is too complex.
# Let's match from the specific corrupted line start we saw earlier or just the "DISABLE ANIMATIONS" line up to </style>

# We know the bad header contains "DISABLE ANIMATIONS FOR LIFETIME BLOCK"
# And it ends before </style>

$cssPattern = '(?s)/\*\s*.*?\s*DISABLE ANIMATIONS FOR LIFETIME BLOCK.*?</style>'
$cssReplacement = $correctCss + "`n    </style>"

# Attempt replacement
if ($content -match 'DISABLE ANIMATIONS FOR LIFETIME BLOCK') {
    $content = $content -replace $cssPattern, $cssReplacement
} else {
    Write-Warning "CSS block not found via regex, skipping CSS fix."
}

# Write back
[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Successfully applied fixes to index.html"
