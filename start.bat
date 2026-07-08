@echo off
title Buckler CRM Portal Launcher
echo ===================================================
echo     Buckler Iraq Operations CRM Portal Launcher
echo ===================================================
echo.

where git >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [System] Git detected. Checking for updates...
    git pull
) else (
    echo [System] Standalone package mode.
)

echo.
echo [System] Launching portal in default browser...
start "" "index.html"
echo.
echo [System] Done! You can close this window.
timeout /t 3 >nul
