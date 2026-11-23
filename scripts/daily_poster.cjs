const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const pricesPath = path.join(rootDir, 'src/data/dailyPrices.json');
const articlesPath = path.join(rootDir, 'src/data/articles.tsx');
const outputDir = path.join(rootDir, 'daily_posts');
const publicJsonPath = path.join(rootDir, 'public/daily-post.json');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. 讀取機票數據
let priceData = { destinations: [] };
try {
  priceData = JSON.parse(fs.readFileSync(pricesPath, 'utf-8'));
} catch (e) {
  console.error('無法讀取機票數據:', e.message);
}

// 2. 讀取並萃取文章列表
let articles = [];
try {
  const content = fs.readFileSync(articlesPath, 'utf-8');
  const blocks = content.split(/\n\s*\{\s*\n\s*id:\s*['"]/);
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const idMatch = block.match(/^([^'"]+)['"]/);
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
    const excerptMatch = block.match(/excerpt:\s*['"]([^'"]+)['"]/);
    const categoryMatch = block.match(/category:\s*['"]([^'"]+)['"]/);

    if (idMatch && titleMatch) {
      articles.push({
        id: idMatch[1],
        title: titleMatch[1],
        excerpt: excerptMatch ? excerptMatch[1] : '',
        category: categoryMatch ? categoryMatch[1] : '必讀攻略'
      });
    }
  }
} catch (e) {
  console.error('無法讀取文章數據:', e.message);
}

// 3. 根據今日日期計算輪播主題
const now = new Date();
const dateStr = now.toISOString().split('T')[0];
const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday...
const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// 挑選今日主推文章
const featuredArticle = articles.length > 0 ? articles[dayOfYear % articles.length] : null;

// 整理機票行情文字
const tokyo = priceData.destinations.find(d => d.city === '東京') || { price: 6890, status: '激省' };
const osaka = priceData.destinations.find(d => d.city === '大阪') || { price: 6350, status: '可入手' };
const seoul = priceData.destinations.find(d => d.city === '首爾') || { price: 6120, status: '可入手' };
const busan = priceData.destinations.find(d => d.city === '釜山') || { price: 4580, status: '激省' };

// 4. 生成不同平台文案
// ===== A. Threads / IG 爆款短文 (高互動、留言 +1 鉤子) =====
const threadsPost = `去日本韓國玩，千萬不要傻傻買破萬機票！

今天黑白飛大數據觀測到的「真實全額含稅」甜甜買點：
🗼 東京成田/羽田：NT$ ${tokyo.price.toLocaleString()}（${tokyo.status}）
🐙 大阪關西機場：NT$ ${osaka.price.toLocaleString()}（${osaka.status}）
🇰🇷 首爾仁川/金浦：NT$ ${seoul.price.toLocaleString()}（${seoul.status}）
🏖️ 釜山金海機場：NT$ ${busan.price.toLocaleString()}（${busan.status}・激省必搶）

🔥 今日精選避坑攻略：
${featuredArticle ? featuredArticle.title : '日韓自由行新手防坑指南'}

很多人到現場才知道踩雷！想避開排隊人潮、省下幾千塊冤枉錢？
👇
💬 留言「+1」或私訊我，直接傳送完整避坑地圖與手繪行程手帳給你！
🔗 完整比價大盤：https://flybw.qzz.io
📖 攻略全文：https://flybw.qzz.io/articles/${featuredArticle ? featuredArticle.id : ''}

#日本自由行 #廉航特價 #日韓旅遊 #機票比價 #黑白飛 #旅遊攻略`;

// ===== B. Facebook 自由行社團 / 粉專深度貼文 =====
const fbPost = `✈️【黑白飛 Fly B&W】${dateStr} 每日日韓廉航行情與避坑快報 📢

各位旅人早安！買機票千萬別只看未稅價，結帳加上機場稅燃油費差點吐血！
黑白飛航班情報中心今日實測，為大家抓出「100% 可開票、全額含稅」的真實入手價位：

📊 今日日韓熱門航線甜甜價指標：
---------------------------------------------
🗼 台北 ⇄ 東京：NT$ ${tokyo.price.toLocaleString()} 起【${tokyo.status}】（酷航/樂桃/虎航清倉區間）
🐙 台北 ⇄ 大阪：NT$ ${osaka.price.toLocaleString()} 起【${osaka.status}】（關西經典入手價）
🇰🇷 台北 ⇄ 首爾：NT$ ${seoul.price.toLocaleString()} 起【${seoul.status}】（仁川/金浦直飛）
🏖️ 台北 ⇄ 釜山：NT$ ${busan.price.toLocaleString()} 起【${busan.status}】（全站最殺小資航點，比首爾省近 2 千！）
---------------------------------------------

💡 今日主編精選避雷必讀：
【${featuredArticle ? featuredArticle.title : ''}】
${featuredArticle ? featuredArticle.excerpt : ''}

👇 立即查看完整圖解攻略：
https://flybw.qzz.io/articles/${featuredArticle ? featuredArticle.id : ''}

👇 查看今日全站即時機票觀測大盤：
https://flybw.qzz.io/#observatory

🎁【福利免費領取】：
出國不想手忙腳亂？加入黑白飛官方 LINE（搜尋 ID：@349bnumb 或點 https://line.me/R/ti/p/@349bnumb）
輸入「機票」或「行程」，免費領取高解析度手繪地鐵圖與日韓旅遊避坑手帳！

#日韓機票 #廉價航空 #日本自由行 #韓國自由行 #出國避坑 #黑白飛`;

// ===== C. LINE 官方帳號推播 / VOOM 格式 =====
const linePost = `✈️ 黑白飛今日特價速報 (${dateStr}) ✈️

哈囉！今天的日韓廉航甜甜價已經更新囉！
今日釜山只要 NT$ ${busan.price.toLocaleString()}、東京只要 NT$ ${tokyo.price.toLocaleString()}，想快閃日韓快來看看！

本日必看攻略推薦：
👉 ${featuredArticle ? featuredArticle.title : ''}

點擊下方連結立即查看完整攻略與搶票指南：
https://flybw.qzz.io/articles/${featuredArticle ? featuredArticle.id : ''}

祝大家都能用最甜的價格飛出國！✈️✨`;

// 5. 輸出存檔
const outputMd = `# 黑白飛每日自動推廣文案 (${dateStr})

> 生成時間：${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}
> 本日精選文章：[${featuredArticle ? featuredArticle.title : ''}](https://flybw.qzz.io/articles/${featuredArticle ? featuredArticle.id : ''})
> 本日最低行情：東京 $${tokyo.price} / 釜山 $${busan.price} / 大阪 $${osaka.price} / 首爾 $${seoul.price}

---

## 📱 1. Threads / Instagram 爆款文案（建議複製直接發布）
\`\`\`text
${threadsPost}
\`\`\`

---

## 📘 2. Facebook 粉專 / 旅遊社團深度文案
\`\`\`text
${fbPost}
\`\`\`

---

## 💬 3. LINE 官方帳號群發 / VOOM 貼文文案
\`\`\`text
${linePost}
\`\`\`
`;

// 寫入當日檔案與 latest.md
const todayFile = path.join(outputDir, `${dateStr}.md`);
const latestFile = path.join(outputDir, `latest.md`);
fs.writeFileSync(todayFile, outputMd, 'utf-8');
fs.writeFileSync(latestFile, outputMd, 'utf-8');

// 寫入給前端讀取的 JSON
const postJson = {
  date: dateStr,
  generatedAt: new Date().toISOString(),
  featuredArticle,
  prices: { tokyo, osaka, seoul, busan },
  posts: {
    threads: threadsPost,
    facebook: fbPost,
    line: linePost
  }
};
fs.writeFileSync(publicJsonPath, JSON.stringify(postJson, null, 2), 'utf-8');

console.log(`✅ [每日自動發文機器人] 文案生成成功！`);
console.log(`📁 存檔路徑: ${todayFile}`);
console.log(`📁 最新捷徑: ${latestFile}`);
console.log(`🌐 前端 JSON: ${publicJsonPath}`);
console.log(`\n--- 本日 Threads 文案預覽 ---\n`);
console.log(threadsPost.slice(0, 300) + '...\n');
