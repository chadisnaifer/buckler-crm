@echo off
setlocal enabledelayedexpansion

:: Define source and destination
set "SRC_DIR=C:\Users\csnaifer\.gemini\antigravity\scratch\buckler-crm"
set "DEST_DIR=C:\Users\csnaifer\Desktop\Buckler_CRM_Backups"

:: Create backup folder on Desktop if it doesn't exist
if not exist "%DEST_DIR%" (
    mkdir "%DEST_DIR%"
)

:: Get timestamp safely across different Windows locale settings
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set "YYYY=%datetime:~0,4%"
set "MM=%datetime:~4,2%"
set "DD=%datetime:~6,2%"
set "HH=%datetime:~8,2%"
set "Min=%datetime:~10,2%"
set "TIMESTAMP=%YYYY%%MM%%DD%_%HH%%Min%"

set "ZIP_FILE=%DEST_DIR%\buckler_crm_backup_%TIMESTAMP%.zip"

echo ===================================================
echo   BUCKLER CRM - VERSION SAVE & BACKUP UTILITY
echo ===================================================
echo.
echo Source:      %SRC_DIR%
echo Destination: %ZIP_FILE%
echo.
echo Compressing project files...

:: Exclude node_modules or large zip outputs if present, but since it's a clean folder we can zip directly
powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('%SRC_DIR%', '%ZIP_FILE%')"

if %ERRORLEVEL% equ 0 (
    echo.
    echo [SUCCESS] A complete version of the project has been zipped and saved on your Desktop!
    echo Location: %ZIP_FILE%
) else (
    echo.
    echo [ERROR] Backup compression failed. Make sure the project folder is not open or locked by other apps.
)
echo.
pause
