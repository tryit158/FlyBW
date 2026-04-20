import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://flybw.qzz.io';
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
const indexHtmlPath = path.resolve(__dirname, '../index.html');
const pricesDataPath = path.resolve(__dirname, '../src/data/dailyPrices.json');

console.log('🚀 開始執行 SEO 自動化腳本...');

// 1. 自動更新 Sitemap 的日期為今天
const today = new Date().toISOString().split('T')[0];
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
console.log(`✅ [1/2] Sitemap.xml 已自動更新 lastmod 日期為: ${today}`);

// 2. 自動讀取當日機票資料，注入為 Schema.org 商品清單 (ItemList) 結構化語法
try {
  const pricesRaw = fs.readFileSync(pricesDataPath, 'utf-8');
  const pricesData = JSON.parse(pricesRaw);
  
  const flightsItemList = pricesData.destinations.map((dest, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": `台北飛往${dest.city}單程機票`,
      "description": `目前系統觀測為：${dest.status}`,
      "offers": {
        "@type": "Offer",
        "price": dest.price,
        "priceCurrency": "TWD",
        "url": BASE_URL
      }
    }
  }));

  const dynamicJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "今日最低廉航機票觀測",
    "description": `最新更新的日韓廉航最低票價 (${today})`,
    "itemListElement": flightsItemList
  };

  const jsonLdString = JSON.stringify(dynamicJsonLd, null, 2);
  const scriptTag = `    <!-- 自動產生的機票價格結構化資料 (Item List) -->\n    <script type="application/ld+json" id="seo-auto-jsonld">\n${jsonLdString}\n    </script>`;

  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  
  // 如果已經存在舊的動態標籤，就替換掉
  const regex = /<!-- 自動產生的機票價格結構化資料(.*?)<\/script>/s;
  if (regex.test(indexHtml)) {
    indexHtml = indexHtml.replace(regex, scriptTag.trim());
  } else {
    // 否則安插在 </head> 之前
    indexHtml = indexHtml.replace('</head>', `${scriptTag}\n  </head>`);
  }

  fs.writeFileSync(indexHtmlPath, indexHtml, 'utf-8');
  console.log(`✅ [2/2] 機票報價結構化資料 (JSON-LD) 已自動注入至 index.html`);
  
} catch (error) {
  console.error('❌ SEO 腳本執行失敗:', error);
}

console.log('🎉 SEO 自動化腳本執行完畢！\n');
