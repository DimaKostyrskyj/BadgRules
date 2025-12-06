
$path = "d:\BadgRules\index.html"

# Read file content (Raw)
try {
    $content = Get-Content $path -Raw -ErrorAction Stop
} catch {
    Write-Host "Error reading file: $_"
    exit 1
}

# 1. Fix Mojibake (Encoding issues)
$replacements = @{
    "вњ…" = "✅"
    "РїРѕРґРїРёСЃРєР° РІС‹РґР°РЅР° РїРѕР»СЊР·РѕРІР°С‚РµР»СЋ" = "подписка выдана пользователю"
    "РЈР±РµСЂРё Р°РЅРёРјР°С†РёСЋ" = "Убери анимацию"
    "в•ђ" = "═"
    "рџ›‘" = "🛑"
}

foreach ($key in $replacements.Keys) {
    if ($content.Contains($key)) {
        $content = $content.Replace($key, $replacements[$key])
        Write-Host "Fixed mojibake: $key"
    }
}

# 2. Remove misplaced Hardcoded Pro logic from checkAdminAccess
# Pattern matches: // [ADDED] ... up to the closing brace of the if block or similar
# We'll be specific to avoid deleting wrong things.
$misplacedLogicPattern = '(?s)\s*// \[ADDED\] Hardcoded Pro Users List.*?source: ''hardcoded''\s*};\s*\}'
if ($content -match $misplacedLogicPattern) {
    $content = $content -replace $misplacedLogicPattern, ''
    Write-Host "Removed misplaced Hardcoded Pro logic from checkAdminAccess"
}

# 3. Remove existing/broken window.grantPro and checkGrantedPro definitions (to replace them cleanly)
# Remove window.grantPro
$grantProPattern = '(?s)window\.grantPro\s*=\s*function.*?return subscription;\s*};'
if ($content -match $grantProPattern) {
    $content = $content -replace $grantProPattern, ''
    Write-Host "Removed existing window.grantPro definition"
}

# Remove checkGrantedPro
$checkGrantedProPattern = '(?s)function checkGrantedPro\(\).*?return null;\s*}'
if ($content -match $checkGrantedProPattern) {
    $content = $content -replace $checkGrantedProPattern, ''
    Write-Host "Removed existing checkGrantedPro definition"
}

# Remove loadSubscriptionStatus override
$overridePattern = '(?s)const originalLoadSubscriptionStatus =.*?return originalLoadSubscriptionStatus\(\);\s*};'
if ($content -match $overridePattern) {
    $content = $content -replace $overridePattern, ''
    Write-Host "Removed existing loadSubscriptionStatus override"
}

# 4. Inject clean logic
$cleanLogic = @"

// ═══════════════════════════════════════════════════════════════
// 💎 PRO GRANT SYSTEM
// ═══════════════════════════════════════════════════════════════

// Helper to grant Pro via Console/Code
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

// Check if current user has granted Pro
function checkGrantedPro() {
    const userData = localStorage.getItem('badgrules_user');
    if (!userData) return null;
    
    try {
        const user = JSON.parse(userData);

        // [ADDED] Hardcoded Pro Users List - ADD YOUR ID HERE
        const HARDCODED_PRO_IDS = [
            'YOUR_ID_HERE', 
            '962762264825634846' 
        ];

        if (HARDCODED_PRO_IDS.includes(user.id)) {
            return {
                plan: 'lifetime',
                lifetime: true,
                grantedAt: new Date().toISOString(),
                expiresAt: null,
                source: 'hardcoded'
            };
        }
        const grantsKey = 'badgrules_pro_grants';
        const grants = JSON.parse(localStorage.getItem(grantsKey) || '{}');
        
        if (grants[user.id]) {
            const grant = grants[user.id];
            
            // Check if not expired
            if (grant.lifetime || new Date(grant.expiresAt) > new Date()) {
                return grant;
            }
        }
    } catch (e) {
        console.error('Error checking granted pro:', e);
    }
    
    return null;
}

// Enhanced loadSubscriptionStatus to check granted Pro
const originalLoadSubscriptionStatus = window.originalLoadSubscriptionStatus || loadSubscriptionStatus;
window.originalLoadSubscriptionStatus = originalLoadSubscriptionStatus;

loadSubscriptionStatus = function() {
    // First check for granted Pro
    const grantedPro = checkGrantedPro();
    
    if (grantedPro) {
        const badge = document.getElementById('subBadge');
        const expires = document.getElementById('subExpires');
        
        if (badge) {
            badge.classList.remove('free');
            badge.classList.add(grantedPro.lifetime ? 'lifetime' : 'pro');
            badge.querySelector('.badge-text').textContent = grantedPro.lifetime ? 'LIFETIME' : 'PRO';
        }
        
        if (expires) {
            if (grantedPro.lifetime) {
                expires.textContent = '♾️ Бессрочная подписка';
            } else {
                const expDate = new Date(grantedPro.expiresAt);
                expires.textContent = `Активна до ${expDate.toLocaleDateString('ru-RU')}`;
            }
        }
        
        return grantedPro;
    }
    
    // Otherwise use original function
    return originalLoadSubscriptionStatus();
};
"@

# Append logic before closing body tag
if ($content -match '</body>') {
    $content = $content -replace '</body>', ($cleanLogic + "`n</body>")
    Write-Host "Injected clean Pro Grant System logic"
} else {
    Write-Host "Warning: Could not find </body> tag. Appending to end."
    $content += $cleanLogic
}

# Save file with UTF8 encoding
$content | Set-Content -Path $path -Encoding UTF8
Write-Host "File saved successfully."
