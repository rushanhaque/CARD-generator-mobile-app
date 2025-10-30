@echo off
echo ========================================
echo  Restarting Invitation Generator (Web)
echo ========================================
echo.
echo Clearing cache and restarting server...
echo.

cd /d "%~dp0"
call npx expo start --web --clear --port 19006

pause
