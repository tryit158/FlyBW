@echo off
chcp 65001 >nul
echo ========================================================
echo   ✈️ 黑白飛 Fly B&W - 每日自動發文產生器 (Daily Poster)
echo ========================================================
echo.
cd /d "%~dp0"
node scripts/daily_poster.cjs
echo.
echo ========================================================
echo [OK] 今日發文素材已產出！
echo 檔案位置: daily_posts\latest.md
echo 前端頁面: https://flybw.qzz.io/daily-post (或本機測試)
echo ========================================================
pause
