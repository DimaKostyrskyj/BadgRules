
$path = "d:\BadgRules\index.html"
$content = Get-Content -Path $path -Raw -Encoding UTF8

# 1. Add window.grantPro helper
$grantProCode = @"
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
"@

$content = $content -replace "// Check if current user has granted Pro", $grantProCode

# 2. Add Hardcoded ID check
$hardcodedCheck = @"
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
"@

$content = $content -replace "const user = JSON.parse\(userData\);", $hardcodedCheck

Set-Content -Path $path -Value $content -Encoding UTF8
Write-Host "Successfully injected Pro granting logic into index.html"
