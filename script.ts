import fs from 'fs';

let text = fs.readFileSync('src/data/articles.tsx', 'utf8');

// 1. Remove the block from article-3
const startToRemove = `          {/* Okinawa Fun Pass Special Block */}`;
const endToRemove = `          {/* Day 4 */}`;

const startIndex = text.indexOf(startToRemove);
const endIndex = text.indexOf(endToRemove, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    text = text.substring(0, startIndex) + text.substring(endIndex);
}

// 2. Add the new article-7 before article-4
const newArticle = `  {
    id: 'article-7',
    title: '【深度解析】美麗海水族館門票怎麼買？Okinawa Fun Pass 真實評測與使用教學',
    author: '黑白飛主編',
    readTime: '8 分鐘',
    image: 'https://images.unsplash.com/photo-1544257121-6d772921fe7c?w=800&h=400&fit=crop&q=80&sat=-100', // Need replace if dead, but we will use the working one
    imageAlt: 'Okinawa Fun Pass',
    excerpt: '「要去美麗海水族館，門票到底怎麼買最划算？」這幾乎是所有沖繩新手都會在出發前 Google 的問題。透過最真實深度的實戰分析，教你如何買對票券，既省錢又不變成斯巴達行軍！',
    badge: '🎫 票券攻略',
    content: (
      <>
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p className="text-lg">
            「要去美麗海水族館，門票到底怎麼買最划算？」這幾乎是所有沖繩新手都會在出發前 Google 的問題。目前市面上有現場購票、旅遊平台單買、以及套票形式的<strong>「Okinawa Fun Pass（好好玩沖繩護照）」</strong>和<strong>「Okinawa Enjoy Pass」</strong>。在 2026 年的現在，各式數位票券百花齊放，到底哪一張才符合你的「真實實用性」？
          </p>
          <p className="text-lg">
            這裡我們直接幫你破解盲點，透過最真實深度的實戰分析，教你如何買對票券，既省錢又不變成斯巴達行軍！
          </p>
          
          <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=400&fit=crop&q=80&sat=-100" alt="美麗海水族館" className="grayscale w-full h-64 object-cover sketch-border border-2 border-black my-6" />

          <h5 className="font-bold text-xl mt-8 mb-4 text-indigo-700 flex items-center gap-2"><div className="w-2 h-6 bg-indigo-600"></div> 1. 什麼是 Okinawa Fun Pass？</h5>
          <p>
            <strong>Okinawa Fun Pass</strong> 是一種「景點＋餐飲＋購物」三合一的電子通行證。它主打讓你用一個 App 的 QR Code 就能搞定熱門景點門票，同時還附帶了像是 Blue Seal 冰淇淋、Zooton\\'s 手工漢堡等熱門餐飲，甚至有松本清或大國藥妝的折扣優惠。你可以把它想像成沖繩版的「遊樂園快速通關 ＋ 餐券 ＋ 購物折價券」。有別於傳統「吃到飽」的景點通票，它更講求彈性與不會過勞的度假感。
          </p>

          <h5 className="font-bold text-xl mt-8 mb-4 text-indigo-700 flex items-center gap-2"><div className="w-2 h-6 bg-indigo-600"></div> 2. Okinawa Fun Pass vs Enjoy Pass 終極比較圖</h5>
          <p>為了不讓你被一堆複雜的通票名稱搞混，我們整理了這張「2026 水族館套票終極比較表」，讓你一眼就看出差異：</p>
          
          <div className="overflow-x-auto my-6 border-2 border-black sketch-border bg-white outline-none">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-indigo-100 text-indigo-900 border-b-2 border-black">
                  <th className="border-r-2 border-black p-4 font-black">比較項目</th>
                  <th className="border-r-2 border-black p-4 font-black">現場購票 / 網路單買</th>
                  <th className="border-r-2 border-black p-4 font-black text-indigo-700">Okinawa Fun Pass (推)</th>
                  <th className="p-4 font-black text-red-700">Okinawa Enjoy Pass</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border-r-2 border-black p-4 font-bold bg-gray-100 w-1/4">適合對象</td>
                  <td className="border-r-2 border-black p-4 text-gray-700 w-1/4">只去水族館，其他行程隨性只想在海邊廢</td>
                  <td className="border-r-2 border-black p-4 font-semibold text-indigo-800 w-1/4">喜歡精算，吃冰且會搭配 1~2 個知名大景點</td>
                  <td className="p-4 text-gray-700 w-1/4">體力無限、狂走景點不嫌累的超強大腿</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border-r-2 border-black p-4 font-bold bg-gray-100">涵蓋景點</td>
                  <td className="border-r-2 border-black p-4 text-gray-700">單一景點</td>
                  <td className="border-r-2 border-black p-4 font-semibold text-indigo-800">美麗海水族館 + 2 至 3 個自選景點</td>
                  <td className="p-4 text-gray-700">美麗海水族館 + 11 個景點 (吃到飽)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border-r-2 border-black p-4 font-bold bg-gray-100">特色附加價值</td>
                  <td className="border-r-2 border-black p-4 text-gray-700">通常無附加優惠</td>
                  <td className="border-r-2 border-black p-4 font-semibold text-indigo-800">包含 Blue Seal 冰淇淋 / 指定餐飲 / 藥妝折扣</td>
                  <td className="p-4 text-gray-700">純粹打卡景點的通票，無特殊餐飲折抵</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border-r-2 border-black p-4 font-bold bg-gray-100">開卡效期</td>
                  <td className="border-r-2 border-black p-4 text-gray-700">該日或指定時段有效</td>
                  <td className="border-r-2 border-black p-4 font-semibold text-indigo-800">開卡後 5 天內有效 (極度彈性)</td>
                  <td className="p-4 text-gray-700">開卡後 5 天內有效</td>
                </tr>
                <tr className="bg-indigo-50 hover:bg-indigo-100 transition-colors">
                  <td className="border-r-2 border-black p-4 font-bold bg-gray-100">疲累指數 (真實)</td>
                  <td className="border-r-2 border-black p-4">★☆☆☆☆ (極度休閒)</td>
                  <td className="border-r-2 border-black p-4 text-indigo-600 font-bold">★★★☆☆ (節奏剛好、彈性極佳)</td>
                  <td className="p-4 text-red-600 font-bold">★★★★★ (斯巴達式打卡行軍)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="font-bold text-xl mt-8 mb-4 text-indigo-700 flex items-center gap-2"><div className="w-2 h-6 bg-indigo-600"></div> 3. 殘酷的真實實用性：你真的需要買 Pass 嗎？</h5>
          <p>
            我們看過太多旅客，為了把 <strong>Enjoy Pass</strong> 的 12 個景點「吃乾抹淨」，硬生生把美好的海島度假變成了「斯巴達行軍」。帶小孩的爸媽為了趕下一個景點不給午休，小提琴在後座崩潰大哭；情侶為了多去一個琉球村，放棄了在海邊發呆看夕陽的浪漫。<strong>強烈建議：出來度假，不要被無盡的票券清單綁架。</strong>
          </p>
          <p>
            <strong>Okinawa Fun Pass</strong> 的出現，其實完美解決了這個痛點。它採取「核心水族館 + 自選少數亮點」的輕量設定。這意味著什麼？
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-700 bg-white p-6 border-2 border-black sketch-border">
            <li><span className="font-bold text-black border-b-2 border-indigo-400">✅ 完美契合 5 天 4 夜節奏：</span> 在去水族館那天，順路安插一個「名護動植物園 (Neo Park)」，隔天從中北部南下時，再去「沖繩世界文化王國」看天然鐘乳石洞。一天排一個大景點，剛好夠精彩，又預留了下午茶與購物的廢人時間。</li>
            <li><span className="font-bold text-black border-b-2 border-indigo-400">✅ 餐飲折抵才是隱藏的王牌：</span> Fun Pass 最殺的優勢是它包含了你<strong>本來就打算自費吃的</strong>「Blue Seal 冰淇淋」。想像一下，當你把這幾百塊台幣的餐點費用扣掉後，水族館加上另外兩個樂園景點的門票，幾乎等同於買一送一。這才是真實的聰明省錢大法！</li>
            <li><span className="font-bold text-black border-b-2 border-indigo-400">✅ 免排隊換票的無價體驗：</span> 每逢暑假旺季，美麗海水族館的售票口人龍絕對會讓你立刻懷疑人生。使用電子 Pass，你只需打開手機讓工作人員掃描 QR Code，三秒快速入場。在別人還在烈日下揮汗排隊拿著日幣找零時，你已經在吹冷氣看著巨大的鯨鯊了。這個特權，無價。</li>
          </ul>

          <h5 className="font-bold text-xl mt-8 mb-4 text-indigo-700 flex items-center gap-2"><div className="w-2 h-6 bg-indigo-600"></div> 4. 給新手的購買與使用指引 (Step by Step 教學)</h5>
          <p>雖然 App 完全數位化非常方便，但有幾個「防笨雷區」請務必避開，以下是真實的血淚經驗：</p>
          
          <div className="bg-yellow-50 p-6 sketch-border border-2 border-black inline-block w-full mt-4">
            <ol className="list-decimal pl-6 space-y-4 font-medium text-gray-800">
              <li><strong>出發前先買好：</strong> 在台灣的旅遊電商平台 (如 Klook 或 KKday) 提前結帳，通常能避開海外刷卡手續費或匯率浮動。</li>
              <li><strong>在飯店預先下載與綁定 App：</strong> <strong>【極度重要】</strong>切記在有穩定 Wi-Fi 的地方（機場或飯店房間），先下載好專屬的「Okinawa Fun Pass」App。接著打開電子郵件信箱找到憑證，將兌換碼一一綁定到 App 中載入完畢。千萬別到了景點大門口才發覺當地 4G 網路大塞車，連 App 都無法下載。</li>
              <li><strong>開卡的計時陷阱：</strong> 注意！當你進入「第一個景點」（或者換了第一支免費冰淇淋）並讓人員掃描 QR Code 的那一瞬間，<strong>5 天（120小時）的效期就開始倒數了！</strong><br/>
              <span className="text-indigo-700 font-bold block mt-1">✨ 聰明用法：</span> 建議把所有想去的景點集中在 Day 2 到 Day 4。如果您 Day 1 傍晚剛抵達那霸，千萬別急著跑去國際通換一隻免費的冰淇淋而觸發了開卡，這會導致您 Day 5 想去 DMM 水族館時，票券竟然已經過期了！</li>
              <li><strong>⚠️ 最大雷區警告：「一人代表制」：</strong> 這點官方說明通常寫得很隱晦！Okinawa Fun Pass 原則上是認「手機裝置」的。如果您幫同行家人或朋友買了例如 4 張票，<strong>請把它們通通綁定在「同一個人的手機 App 裡」！</strong>絕對不要每個人分開綁定。為什麼呢？因為入場時，只要用總召的那支手機，滑動螢幕顯示 4 張票給工作人員點擊即可，三秒快速通關。如果 4 個人分開綁，光是在大門口手忙腳亂各自切換網路、尋找並打開 QR Code，絕對會拖慢進場速度並被後面的排隊人潮翻白眼。通通交給家裡最懂 3C 的人保管就對了！</li>
            </ol>
          </div>

          <h5 className="font-bold text-xl mt-8 mb-4 text-indigo-700 flex items-center gap-2"><div className="w-2 h-6 bg-indigo-600"></div> 5. 最終結論：你該買哪一種？</h5>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#f2f4ff] p-6 sketch-border border-2 border-indigo-200 shadow-[4px_4px_0px_0px_#4f46e5]">
              <h6 className="font-black text-indigo-800 text-lg mb-3 flex items-center gap-2">🎯 直接入手 Okinawa Fun Pass</h6>
              <ul className="list-disc pl-5 text-gray-800 space-y-2 font-medium">
                <li>行程已經 100% 確定一定會去美麗海水族館。</li>
                <li>除了水族館，至少還打算順路去名護動植物園、古宇利海洋塔或世界文化王國（至少去其中之一）。</li>
                <li>這趟旅程，不管天氣多熱，都一定會去買一隻 Blue Seal 冰淇淋來吃。</li>
                <li>極度討厭在烈日下排隊買票，享受專屬快速通關的尊榮感。</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 sketch-border border-2 border-gray-300 shadow-[4px_4px_0px_0px_#9ca3af]">
              <h6 className="font-black text-gray-800 text-lg mb-3 flex items-center gap-2">🏖️ 乖乖單買實體門票就好</h6>
              <ul className="list-disc pl-5 text-gray-800 space-y-2 font-medium">
                <li>出國心態超級隨性，可能隔天起床嫌累就不想去任何樂園了。</li>
                <li>除了去一趟水族館打卡之外，其他時間只想癱在海景飯店的陽台耍廢一整天。</li>
                <li>完全不想費神安排任何收費行程，走到哪玩到哪的終極佛系特休達人。</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 p-6 bg-blue-50 sketch-border text-center relative overflow-hidden mb-10">
            <div className="absolute -bottom-4 -right-4 opacity-20 text-6xl">🐳</div>
            <p className="font-bold mb-2 text-xl">心動不如馬上行動</p>
            <p className="text-gray-700 mb-6">點擊下方按鈕，了解最新的 Okinawa Fun Pass 票價與優惠！</p>
            <a href="#observatory" className="inline-block sketch-border bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              查看 Okinawa Fun Pass 優惠 &rarr;
            </a>
          </div>

          <AffiliateFooter />
        </div>
      </>
    )
  },
`;

newArticle.replace('https://images.unsplash.com/photo-1544257121-6d772921fe7c?w=800&h=400&fit=crop&q=80&sat=-100', 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=400&fit=crop&q=80&sat=-100'); // the cover image for article 7

let textToInsert = newArticle;
textToInsert = textToInsert.replace(
  "image: 'https://images.unsplash.com/photo-1544257121-6d772921fe7c?w=800&h=400&fit=crop&q=80&sat=-100',",
  "image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=400&fit=crop&q=80&sat=-100',"
);

const insertIndex = text.indexOf("    id: 'article-4',");
text = text.substring(0, insertIndex - 4) + textToInsert + text.substring(insertIndex - 4);

fs.writeFileSync('src/data/articles.tsx', text, 'utf8');
