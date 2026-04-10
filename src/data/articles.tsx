import { ReactNode } from 'react';

export interface Article {
  id: string;
  title: string;
  author: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
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
  }
];
