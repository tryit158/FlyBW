import { ReactNode } from 'react';

export interface Article {
  id: string;
  title: string;
  author: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  badge?: string;
  content: ReactNode;
}

export const articlesData: Article[] = [
  {
    id: 'article-1',
    title: '2026 日韓機票怎麼買最省？淡旺季完全攻略',
    author: '黑白飛主編',
    readTime: '3 分鐘',
    image: 'https://picsum.photos/seed/airport/800/400?grayscale',
    imageAlt: '日韓機票攻略',
    excerpt: '大家都想飛日本吃和牛、飛韓國吃烤肉，但每次打開購票網站，看到那精美的價格是不是又默默把網頁關掉？其實，買機票就像買股票...',
    content: (
      <>
        <p>
          大家都想飛日本吃和牛、飛韓國吃烤肉，但每次打開購票網站，看到那精美的價格是不是又默默把網頁關掉？其實，買機票就像買股票，<strong>「進場時機」決定了你的荷包厚度！</strong>
        </p>

        <h4 className="text-xl font-bold mt-8 mb-4 inline-block sketch-border px-3 py-1 bg-gray-50">
          💣 絕對要避開的「三大地雷區」
        </h4>
        <p>
          如果你不是非得在這時候出國，請把這三個時段從你的行事曆上劃掉：
        </p>
        <ul className="list-none space-y-3 pl-2">
          <li className="flex gap-3">
            <span className="shrink-0">❌</span>
            <span><strong>2月農曆春節：</strong> 全台灣都在放假，機票絕對是天價，而且機場人山人海，光排隊就飽了。</span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0">❌</span>
            <span><strong>5月初日本黃金週：</strong> 日本人的國旅大爆發！這時候去日本，不僅機票貴，連飯店都訂不到，熱門景點全都是人。</span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0">❌</span>
            <span><strong>7-8月暑假：</strong> 學生放假潮，加上天氣炎熱，除非有帶小孩的剛需，否則真的不建議這時候去人擠人。</span>
          </li>
        </ul>

        <h4 className="text-xl font-bold mt-8 mb-4 inline-block sketch-border px-3 py-1 bg-gray-50">
          ✨ 內行人才知道的「黃金撿漏期」
        </h4>
        <p>
          想買到來回含稅 5,000 元有找的神價？鎖定這兩個月份就對了：
        </p>
        <ul className="list-none space-y-3 pl-2">
          <li className="flex gap-3">
            <span className="shrink-0">☔</span>
            <span><strong>6月梅雨季：</strong> 雖然容易下雨，但只要安排好「室內行程」（如：逛百貨、水族館、吃美食），這時候的機票跟住宿簡直便宜到不可思議！</span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0">🍂</span>
            <span><strong>11月中下旬：</strong> 剛好卡在賞楓季尾聲與滑雪季開始前的空檔。天氣微涼舒服，遊客相對較少，是個非常適合悠哉散步的完美時機。</span>
          </li>
        </ul>

        <h4 className="text-xl font-bold mt-8 mb-4 inline-block sketch-border px-3 py-1 bg-gray-50">
          💡 搶廉航促銷的 3 個必勝心法
        </h4>
        <ol className="list-decimal list-inside space-y-3 font-bold">
          <li>先把護照英文姓名、效期、出生年月日存在手機記事本，搶票時直接複製貼上！</li>
          <li>不要猶豫「要不要加買行李」，先搶到裸票，行李之後再加購就好。</li>
          <li>善用本站的<a href="#observatory" className="underline decoration-wavy underline-offset-4 hover:text-gray-500 mx-1">本日最低價觀測儀</a>，每天看一眼，培養對價格的敏銳度！</li>
        </ol>

        <div className="mt-10 p-6 bg-gray-50 sketch-border text-center">
          <p className="font-bold mb-2">準備好出發了嗎？</p>
          <p className="text-sm text-gray-600 mb-4">別忘了下載我們為您準備的超可愛手繪行李清單！</p>
          <a href="#checklist" className="inline-block sketch-border bg-white px-6 py-2 font-bold hover:bg-gray-100 transition-colors">
            前往下載行李清單 &rarr;
          </a>
        </div>
      </>
    )
  },
  {
    id: 'article-2',
    title: '2026 暑假機票最後上車機會！7-8 月萬元以下廉航總整理',
    author: '黑白飛特派員',
    readTime: '2 分鐘',
    image: 'https://picsum.photos/seed/summerbeach/800/400?grayscale',
    imageAlt: '暑假機票最後上車機會',
    excerpt: '暑假想出國，但看到傳統航空動輒 1.5 萬起跳的票價實在下不了手？別放棄得太早！經過我們地毯式搜索，7-8 月其實還有一些隱藏版的「萬元以下」廉航機票...',
    content: (
      <>
        <p>
          暑假想出國，但看到傳統航空動輒 1.5 萬起跳的票價實在下不了手？別放棄得太早！經過我們地毯式搜索，<strong>7-8 月其實還有一些隱藏版的「萬元以下」廉航機票</strong>，這真的是最後上車機會了！
        </p>

        <h4 className="text-xl font-bold mt-8 mb-4 inline-block sketch-border px-3 py-1 bg-gray-50">
          🔥 萬元以下航線大公開
        </h4>
        <ul className="list-none space-y-4 pl-2">
          <li className="flex gap-3">
            <span className="shrink-0">🐯</span>
            <div>
              <strong>虎航 (Tigerair)：台北 ✈️ 沖繩 (約 NT$ 8,500)</strong>
              <p className="text-sm text-gray-600 mt-1">鎖定 8 月下旬！避開 7 月初的放假第一波高峰，8 月底準備開學前，沖繩的票價會出現一波小回檔，非常適合抓緊夏天的尾巴去玩水。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0">🍑</span>
            <div>
              <strong>樂桃 (Peach)：台北 ✈️ 大阪 (約 NT$ 9,200)</strong>
              <p className="text-sm text-gray-600 mt-1">紅眼航班是你的好朋友！樂桃的晚去早回雖然累，但省下來的錢剛好可以去環球影城買快速通關。建議鎖定 7 月中旬的週二、週三出發。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0">🟡</span>
            <div>
              <strong>酷航 (Scoot)：台北 ✈️ 東京 (約 NT$ 9,800)</strong>
              <p className="text-sm text-gray-600 mt-1">酷航的大飛機坐起來相對舒適！目前 7 月底還有零星的萬元以下機票，但通常不含行李，適合背包客或只帶登機箱的輕裝旅人。</p>
            </div>
          </li>
        </ul>

        <h4 className="text-xl font-bold mt-8 mb-4 inline-block sketch-border px-3 py-1 bg-gray-50">
          🎒 暑假搭廉航的省錢秘訣
        </h4>
        <ol className="list-decimal list-inside space-y-3 font-bold">
          <li><strong>行李共用制：</strong> 如果跟朋友一起去，去程可以只買一個 20kg 托運行李一起塞，回程再各自買，省下單程的行李費！</li>
          <li><strong>自備空水壺與零食：</strong> 廉航上連水都要錢，過完安檢後記得裝滿水壺，帶點小餅乾解饞。</li>
        </ol>

        <div className="mt-10 p-6 bg-gray-50 sketch-border text-center">
          <p className="font-bold mb-2">還在猶豫？機票可是不等人的！</p>
          <p className="text-sm text-gray-600 mb-4">趕快去查查最新的機票價格吧！</p>
          <a href="#observatory" className="inline-block sketch-border bg-white px-6 py-2 font-bold hover:bg-gray-100 transition-colors">
            查看本日最低價 &rarr;
          </a>
        </div>
      </>
    )
  },
  {
    id: 'article-3',
    title: '2026 東京自由行 5 天 4 夜終極攻略：不走回頭路，吃好買滿！',
    author: '黑白飛主編',
    readTime: '5 分鐘',
    image: 'https://picsum.photos/seed/tokyo/800/400?grayscale',
    imageAlt: '東京自由行攻略',
    excerpt: '第一次去東京不知道怎麼排行程？想去澀谷看十字路口、去淺草穿和服，又想去迪士尼？這篇為你整理了 2026 最新版東京 5 天 4 夜完美路線，附帶省錢交通票券與網卡推薦！',
    badge: '🏷️ 旅展限時特價中',
    content: (
      <>
        <p>
          第一次去東京不知道怎麼排行程？想去澀谷看十字路口、去淺草穿和服，又想去迪士尼？這篇為你整理了 2026 最新版東京 5 天 4 夜完美路線，跟著走準沒錯！
        </p>

        <h4 className="text-xl font-bold mt-8 mb-4 inline-block sketch-border px-3 py-1 bg-gray-50">
          🎒 出發前：這兩樣東西先買好！
        </h4>
        <p className="mb-4">東京交通複雜、網路依賴度極高，出發前強烈建議先把網卡和保險準備好：</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href="https://afflink.one/s/J1H4B" target="_blank" rel="noopener noreferrer" className="flex-1 sketch-border p-4 hover:bg-gray-50 transition-colors text-center group">
            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">📱</span>
            <span className="font-bold underline decoration-wavy underline-offset-4">日本上網吃到飽網卡 / eSIM</span>
            <p className="text-sm text-gray-600 mt-2">找路、查電車時刻表必備，隨插即用不斷線！</p>
          </a>
          <a href="https://afflink.one/s/RzcX0" target="_blank" rel="noopener noreferrer" className="flex-1 sketch-border p-4 hover:bg-gray-50 transition-colors text-center group">
            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">🛡️</span>
            <span className="font-bold underline decoration-wavy underline-offset-4">旅遊不便險 / 平安險</span>
            <p className="text-sm text-gray-600 mt-2">班機延誤、行李遺失都不怕，花小錢買大保障！</p>
          </a>
        </div>

        <h4 className="text-xl font-bold mt-8 mb-4 inline-block sketch-border px-3 py-1 bg-gray-50">
          🗺️ 5 天 4 夜「不走回頭路」完美路線
        </h4>

        <div className="space-y-8 mt-6">
          {/* Day 1 */}
          <div className="sketch-border p-6 bg-white relative">
            <div className="absolute -top-3 -left-3 bg-black text-white font-bold px-3 py-1 sketch-border rotate-[-5deg]">Day 1</div>
            <h5 className="font-bold text-lg mb-4 ml-6">淺草雷門 ＆ 晴空塔夜景</h5>
            <img src="https://picsum.photos/seed/asakusa/600/300?grayscale" alt="淺草" className="w-full h-48 object-cover sketch-border mb-4" />
            <p>抵達東京後，第一站直奔充滿江戶風情的「淺草」。穿上和服在雷門前打卡，沿著仲見世通吃人形燒。傍晚散步到「晴空塔」，在觀景台俯瞰整個東京市區的璀璨夜景。</p>
          </div>

          {/* Day 2 */}
          <div className="sketch-border p-6 bg-white relative">
            <div className="absolute -top-3 -left-3 bg-black text-white font-bold px-3 py-1 sketch-border rotate-[-5deg]">Day 2</div>
            <h5 className="font-bold text-lg mb-2 ml-6">東京迪士尼樂園 夢幻一日遊</h5>
            <p>請把整整一天的時間留給迪士尼！建議提早下載官方 App 抽 Standby Pass。無論是陸地還是海洋，都能讓你找回童年的感動。記得穿一雙最好走的鞋子！</p>
          </div>

          {/* Day 3 */}
          <div className="sketch-border p-6 bg-white relative">
            <div className="absolute -top-3 -left-3 bg-black text-white font-bold px-3 py-1 sketch-border rotate-[-5deg]">Day 3</div>
            <h5 className="font-bold text-lg mb-4 ml-6">築地吃海鮮 ＆ 澀谷 Shibuya Sky</h5>
            <img src="https://picsum.photos/seed/shibuya/600/300?grayscale" alt="澀谷" className="w-full h-48 object-cover sketch-border mb-4" />
            <p>早上到「築地場外市場」大啖新鮮海鮮丼與玉子燒。下午前往年輕人的潮流聖地「澀谷」，親眼目睹世界最繁忙的十字路口，傍晚登上超人氣的 Shibuya Sky 觀景台拍網美照！</p>
          </div>

          {/* Day 4 & 5 */}
          <div className="sketch-border p-6 bg-white relative">
            <div className="absolute -top-3 -left-3 bg-black text-white font-bold px-3 py-1 sketch-border rotate-[-5deg]">Day 4-5</div>
            <h5 className="font-bold text-lg mb-2 ml-6">明治神宮 ＆ 上野阿美橫町大採買</h5>
            <p>第四天到原宿的「明治神宮」吸收芬多精，接著逛表參道與新宿。最後一天前往「上野阿美橫町」，把藥妝、零食一次買齊，搭乘 Skyliner 輕鬆直達機場，滿載而歸！</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gray-50 sketch-border text-center">
          <p className="font-bold mb-2">機票還沒買？</p>
          <p className="text-sm text-gray-600 mb-4">現在就來看看飛東京的最新神價！</p>
          <a href="#observatory" className="inline-block sketch-border bg-white px-6 py-2 font-bold hover:bg-gray-100 transition-colors">
            查看東京機票價格 &rarr;
          </a>
        </div>
      </>
    )
  }
];
