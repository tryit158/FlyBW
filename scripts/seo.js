import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://flybw.qzz.io';
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
const indexHtmlPath = path.resolve(__dirname, '../index.html');
const pricesDataPath = path.resolve(__dirname, '../src/data/dailyPrices.json');
const articlesDataPath = path.resolve(__dirname, '../src/data/articles.tsx');

console.log('🚀 開始執行強化版 SEO & AI 引用自動化腳本...');

// 1. 自動從 articles.tsx 萃取所有專欄文章 ID 與更新 Sitemap
const today = new Date().toISOString().split('T')[0];
let articleIds = [];

try {
  const articlesFileContent = fs.readFileSync(articlesDataPath, 'utf-8');
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = idRegex.exec(articlesFileContent)) !== null) {
    if (match[1] && !articleIds.includes(match[1])) {
      articleIds.push(match[1]);
    }
  }
  console.log(`📚 偵測到 ${articleIds.length} 篇專欄文章，準備生成全站 Sitemap...`);
} catch (err) {
  console.warn('⚠️ 讀取 articles.tsx 失敗，使用備用文章列表:', err.message);
}

const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/articles', priority: '0.9', changefreq: 'daily' },
  { path: '/about', priority: '0.5', changefreq: 'monthly' },
  { path: '/contact', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'monthly' },
  { path: '/terms', priority: '0.3', changefreq: 'monthly' },
];

let sitemapUrlsXml = staticRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

if (articleIds.length > 0) {
  const articlesXml = articleIds.map(id => `  <url>
    <loc>${BASE_URL}/articles/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');
  sitemapUrlsXml += '\n' + articlesXml;
}

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrlsXml}
</urlset>`;

fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
console.log(`✅ [1/2] Sitemap.xml 已成功更新！包含全站 ${staticRoutes.length + articleIds.length} 個路徑，lastmod 為: ${today}`);

// 2. 自動讀取當日機票資料，注入為 Schema.org 商品清單 (ItemList) 與 WebSite 結構化語法
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
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "name": "黑白飛 Fly B&W",
        "url": BASE_URL,
        "description": "2026 最新日韓廉航機票比價、手提行李尺寸避雷圖解、即時特價預測與空手觀光攻略。",
        "inLanguage": "zh-TW",
        "publisher": {
          "@type": "Organization",
          "@id": `${BASE_URL}/#organization`,
          "name": "黑白飛 Fly B&W 專業旅遊分析團隊",
          "url": BASE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/favicon.svg`
          }
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${BASE_URL}/articles?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "@id": `${BASE_URL}/#flight-prices`,
        "name": "2026 今日最低廉航機票觀測大盤",
        "description": `最新更新的日韓廉航最低票價走勢 (${today})`,
        "itemListElement": flightsItemList
      }
    ]
  };

  const jsonLdString = JSON.stringify(dynamicJsonLd, null, 2);
  const scriptTag = `    <!-- 自動產生的機票價格與全站結構化資料 (Schema.org Graph) -->\n    <script type="application/ld+json" id="seo-auto-jsonld">\n${jsonLdString}\n    </script>`;

  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  // 如果已經存在舊的動態標籤，就替換掉
  const regex = /<!-- 自動產生的機票價格結構化資料(.*?)<\/script>/s;
  const regexGraph = /<!-- 自動產生的機票價格與全站結構化資料(.*?)<\/script>/s;
  
  if (regexGraph.test(indexHtml)) {
    indexHtml = indexHtml.replace(regexGraph, scriptTag.trim());
  } else if (regex.test(indexHtml)) {
    indexHtml = indexHtml.replace(regex, scriptTag.trim());
  } else {
    // 否則安插在 </head> 之前
    indexHtml = indexHtml.replace('</head>', `${scriptTag}\n  </head>`);
  }

  fs.writeFileSync(indexHtmlPath, indexHtml, 'utf-8');
  console.log(`✅ [2/2] 機票報價與全站結構化資料 (JSON-LD Graph) 已自動注入至 index.html`);
} catch (error) {
  console.error('❌ SEO 腳本執行失敗:', error);
}

console.log('🎉 強化版 SEO & AI 引用自動化腳本執行完畢！\n');
