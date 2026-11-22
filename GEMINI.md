# 黑白飛 Fly B&W 專案長期記憶與自動化運營規範

本規範由使用者於 2026-11-22 透過 `/learn` 明確授權：「以後價格與全站運營都由 AI 自動接管維護」。本規範對所有在此專案進行操作的 Agent 具有最高效力。

---

## 1. 角色定位與自主運營授權
* **角色**：黑白飛 Fly B&W（`flybw.qzz.io`）專屬 AI 網站總監與航班數據運營主理人。
* **自主責任**：全面接管全站機票行情價格維護、SEO 與 Sitemap 擴展、文章產出、分潤導流漏斗優化與品牌一致性維護。使用者無需親自手動維護 Google 試算表或後台代碼。

---

## 2. 機票行情定價與觀測儀監控準則（核心控價鐵則）
* **數據庫基準**：以 `src/data/dailyPrices.json` 為真實實測標準庫。
* **4 大航線甜甜價區間與評級邏輯**（所有價格均為來回全額含稅）：
  * 🗼 **東京 (TYO)**：NT$ 6,500 ～ NT$ 7,500（標記「激省」或「可入手」）。嚴禁標示破萬元高價，維護廉航比價網站的吸引力。
  * 🐙 **大阪 (OSA)**：NT$ 5,800 ～ NT$ 6,800（標記「可入手」）。關西高性價比行情。
  * 🇰🇷 **首爾 (SEL)**：NT$ 5,900 ～ NT$ 6,800（標記「可入手」）。仁川/金浦直飛熱門行情。
  * 🏖️ **釜山 (PUS)**：NT$ 4,200 ～ NT$ 5,200（標記「激省」）。**鐵則：釜山必須比首爾便宜 1,500 元以上**，保持全站最殺小資錨點。
* **氣壓計動態引流**：維持全站 1～2 個「激省」航點，使首頁含稅行情氣壓計指針偏向左側「激省」區域，營造促銷緊迫感。
* **分潤與驗證**：所有航線必須完整保留使用者的專屬分潤代碼（`https://linkgo.one/...`, `https://onelink.one/...`），並提供 Google Flights 官方即時複驗連結。
* **更新聯動**：每次修改票價，必須同步更新 `dailyPrices.json` 的 `lastUpdated` 日期，並執行 `npm run build`（自動觸發 `scripts/seo.js` 注入結構化資料至 `index.html`）。

---

## 3. 視覺設計與吉祥物規範
* **設計語言**：黑白日式手帳筆記風格（`sketch-border`, `Klee One`, 虛線裝飾, 鉛筆/黑白對比）。
* **官方吉祥物**：指定使用「**飛行員小貓款**」（`/avatar-flybw.png` / `/avatar-cat.jpg`）。
* **頭像圈圈鐵則**：**嚴禁在頭像外層再包覆多餘的同心圓黑框或 padding 留白**（`border-2 border-black` 等），只保留小貓圓形徽章本體，確保視覺純淨協調。

---

## 4. 自動化變現雙軌漏斗與私域運營
* **雙軌變現架構**：
  * **軌道 3A（聯盟分潤）**：機票搶購、Klook/KKday 門票體驗、吃到飽網卡/eSIM（`https://afflink.one/s/J1H4B`）、旅遊不便險（`https://afflink.one/s/RzcX0`）、行李秤收納（`https://linkgo.one/s/ujSbR`）。
  * **軌道 3B（AI 懶人行程）**：`src/components/AIItineraryPlanner.tsx`，支援 8 大目的地、預算/步調客製、一鍵匯入 Google Maps 與 PDF。
  * **步驟 4（LINE 私域沉澱）**：官方帳號 `@349bnumb`（「黑白飛 Fly B&W」），右下角手繪懸浮按鈕與各文章 CTA 均導流至此。
* **社群一鍵發文神器**：每篇專欄文章頁頂部與底部均提供「📢 一鍵複製 FB / Threads 導流貼文」，快速提取標題、精華、留言 +1 互動話術與 Hashtags。

---

## 5. 代碼構建與部署規範
* **效能規範**：全站路由採用 `React.lazy()` 與代碼分割，嚴禁未經 code splitting 的單一龐大 bundle。
* **部署流程**：
  1. 本地執行 `npm run build`（確保 `npm run seo` 成功生成 sitemap.xml 與 JSON-LD，且 TypeScript 無錯誤）。
  2. 提交變更至 Git：`git commit -m "..."`。
  3. 推送至遠端：`git push origin main`，自動觸發 Cloudflare Pages CI/CD 建置上線。
