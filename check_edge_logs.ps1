$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    Write-Host "Edge not found at $edgePath"
    exit 1
}

$userDataDir = Join-Path $pwd "edge_user_data"
if (Test-Path $userDataDir) {
    Remove-Item -Path $userDataDir -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "Launching Edge with custom user data dir..."
$p = Start-Process $edgePath -ArgumentList "--headless=new", "--disable-gpu", "--enable-logging", "--user-data-dir=$userDataDir", "file:///C:/Users/csnaifer/.gemini/antigravity/scratch/buckler-crm/index.html" -PassThru

Start-Sleep -Seconds 8
Stop-Process -Id $p.Id -Force

$logFile = Join-Path $userDataDir "chrome_debug.log"
Write-Host "Checking log file at $logFile..."
if (Test-Path $logFile) {
    Get-Content $logFile
} else {
    Write-Host "No chrome_debug.log found."
}
