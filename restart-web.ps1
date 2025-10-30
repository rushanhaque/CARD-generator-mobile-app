Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Restarting Invitation Generator (Web)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Clearing cache and restarting server..." -ForegroundColor Yellow
Write-Host ""

Set-Location $PSScriptRoot
npx expo start --web --clear --port 19006
