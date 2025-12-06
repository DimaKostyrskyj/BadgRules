
$path = "d:\BadgRules\index.html"
$extPath = "d:\BadgRules\BadgRules\clean_extension.html"

# Read as UTF8. If it fails, try default.
try {
    $content = Get-Content $path -Raw -Encoding UTF8 -ErrorAction Stop
} catch {
    Write-Host "UTF8 read failed, trying default..."
    $content = Get-Content $path -Raw
}

# Remove old broken CSS
# Using regex to match the block. We'll be broad.
# Matches /* ... DISABLE ANIMATIONS ... */ ... .lifetime-elite:hover { ... }
$cssPattern = '(?s)/\*\s*(?:.|[\r\n])*?DISABLE ANIMATIONS FOR LIFETIME BLOCK(?:.|[\r\n])*?\.lifetime-elite:hover\s*\{\s*border-color:[^}]+\}\s*'
if ($content -match $cssPattern) {
    $content = $content -replace $cssPattern, ''
    Write-Host "Removed old CSS block"
}

# Remove window.grantPro
$jsPattern = '(?s)window\.grantPro\s*=\s*function.*?return subscription;\s*};'
if ($content -match $jsPattern) {
    $content = $content -replace $jsPattern, ''
    Write-Host "Removed old window.grantPro"
}

# Remove checkGrantedPro
$checkPattern = '(?s)function checkGrantedPro\(\).*?return null;\s*}'
if ($content -match $checkPattern) {
    $content = $content -replace $checkPattern, ''
    Write-Host "Removed old checkGrantedPro"
}

# Remove loadSubscriptionStatus override
$loadPattern = '(?s)const originalLoadSubscriptionStatus\s*=\s*.*?\};\s*'
if ($content -match $loadPattern) {
    $content = $content -replace $loadPattern, ''
    Write-Host "Removed old loadSubscriptionStatus override"
}

# Remove misplaced logic in checkAdminAccess
$adminPattern = '(?s)\s*// \[ADDED\] Hardcoded Pro Users List.*?source: ''hardcoded''\s*};\s*\}'
if ($content -match $adminPattern) {
    $content = $content -replace $adminPattern, ''
    Write-Host "Removed misplaced logic from checkAdminAccess"
}

# Read clean extension
$extension = Get-Content $extPath -Raw -Encoding UTF8

# Append before </body>
if ($content -match '</body>') {
    $content = $content -replace '</body>', ($extension + "`n</body>")
    Write-Host "Injected new content"
} else {
    $content += $extension
    Write-Host "Appended new content (no body tag found)"
}

# Save
$content | Set-Content $path -Encoding UTF8
Write-Host "Done."
