
$path = "d:\BadgRules\index.html"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# 1. Fix JavaScript mojibake and missing variables
$badJs = "window.grantPro = function(userId, days = 30) {
    if (!userId) return console.error('вќЊ Please provide a user ID');
    
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
    
    console.log(вњ… Granted Pro to  for );
    alert(вњ… Pro РїРѕРґРїРёСЃРєР° РІС‹РґР°РЅР° РїРѕР»СЊР·РѕРІР°С‚РµР»СЋ );
    
    // Refresh if it's the current user
    const currentUser = JSON.parse(localStorage.getItem('badgrules_user') || '{}');
    if (currentUser.id === userId) {
        location.reload();
    }
    
    return subscription;
};"

# Use literal strings for replacement to avoid PowerShell interpolation issues
$goodJs = "window.grantPro = function(userId, days = 30) {
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
};"

# Normalize line endings and whitespace for matching
$content = $content.Replace($badJs.Replace("`r`n", "`n"), $goodJs.Replace("`r`n", "`n"))

# 2. Fix CSS mojibake
# Since exact matching of the corrupted block might be tricky due to invisible chars, 
# I will use a regex or a simpler substring replacement if possible.
# Let's try to match the header of the corrupted CSS block.

$badCssHeader = "/* рџ›‘ DISABLE ANIMATIONS FOR LIFETIME BLOCK                        */"
$goodCssHeader = "/* 🛑 DISABLE ANIMATIONS FOR LIFETIME BLOCK                        */"

if ($content.Contains($badCssHeader)) {
    $content = $content.Replace($badCssHeader, $goodCssHeader)
}

$badCssBorder = "/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ */"
$goodCssBorder = "/* ═══════════════════════════════════════════════════════════════ */"

if ($content.Contains($badCssBorder)) {
    $content = $content.Replace($badCssBorder, $goodCssBorder)
}

# Fix the comment inside CSS
$badComment = "But `\"РЈР±РµСЂРё Р°РЅРёРјР°С†РёСЋ`\" is strong."
$goodComment = "But `\"Убери анимацию`\" is strong."
# Trying a simpler replace for the specific russian text if the above is too strict
$content = $content.Replace("РЈР±РµСЂРё Р°РЅРёРјР°С†РёСЋ", "Убери анимацию")


# Write back with UTF8
[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Fixed mojibake and syntax errors in index.html"
