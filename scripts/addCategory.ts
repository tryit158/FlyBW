import fs from 'fs';

let text = fs.readFileSync('src/data/articles.tsx', 'utf8');

text = text.replace(/id: 'article-tigerair-shareholder-2026',/g, "id: 'article-tigerair-shareholder-2026',\n    category: '最新消息',");
text = text.replace(/id: 'article-6',/g, "id: 'article-6',\n    category: '行李圖解',");
text = text.replace(/id: 'article-5',/g, "id: 'article-5',\n    category: '最新消息',");
text = text.replace(/id: 'article-1',/g, "id: 'article-1',\n    category: '必讀攻略',");
text = text.replace(/id: 'article-2',/g, "id: 'article-2',\n    category: '必讀攻略',");
text = text.replace(/id: 'article-3',/g, "id: 'article-3',\n    category: '必讀攻略',");
text = text.replace(/id: 'article-7',/g, "id: 'article-7',\n    category: '票券攻略',");
text = text.replace(/id: 'article-4',/g, "id: 'article-4',\n    category: '最新消息',");

fs.writeFileSync('src/data/articles.tsx', text, 'utf8');
console.log('Categories added.');
