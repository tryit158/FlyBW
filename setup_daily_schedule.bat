@echo off
chcp 65001 >nul
echo ========================================================
echo   ✈️ 黑白飛 Fly B&W - 設定 Windows 每日排程自動產生
echo ========================================================
echo.
echo 將建立排程任務：每天早上 08:30 自動產出當日社群推廣文案
echo.

set SCRIPT_DIR=%~dp0
set TASK_CMD=cmd.exe /c "cd /d \"%SCRIPT_DIR%\" && node scripts\daily_poster.cjs"

schtasks /create /tn "FlyBW_Daily_Poster" /tr "%TASK_CMD%" /sc daily /st 08:30 /f

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo ✅ [成功] 每日發文排程已成功註冊到 Windows 工作排程器！
    echo 執行時間: 每天 08:30
    echo 執行腳本: scripts\daily_poster.cjs
    echo 產出位置: daily_posts\latest.md 與 public\daily-post.json
    echo ========================================================
) else (
    echo.
    echo ⚠️ 建立排程時遇到問題，若需權限請對此 .bat 按右鍵選擇「以系統管理員身分執行」。
)

echo.
pause
