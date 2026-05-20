const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/data/articles.tsx', 'utf-8');
const urls = [];
const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"']*/g;
let match;
while ((match = regex.exec(content)) !== null) {
  urls.push(match[0]);
}

const uniqueUrls = [...new Set(urls)];
console.log(`Found ${uniqueUrls.length} unique URLs`);

uniqueUrls.forEach(url => {
    https.get(url, (res) => {
        console.log(res.statusCode, url);
        res.resume();
    }).on('error', (e) => {
        console.error(e);
    });
});
