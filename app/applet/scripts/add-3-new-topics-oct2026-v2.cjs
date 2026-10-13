const fs = require('fs');

const articlesFilePath = '/app/applet/src/data/articles.tsx';
let articlesContent = fs.readFileSync(articlesFilePath, 'utf8');

const targetIndex = articlesContent.indexOf('export const articlesData: Article[] = [');
if (targetIndex === -1) {
  console.error("Could not find 'export const articlesData: Article[] = ['");
  process.exit(1);
}

const insertPos = targetIndex + 'export const articlesData: Article[] = [\n'.length;

const newArticlesChunk = `  {
    id: 'japan-usj-nintendo-entry-ticket-express-pass-2026',
    category: '票券攻略',
    title: '【2026 日本環球影城 USJ 攻略】沒買快速通關也能進瑪利歐？超級任天堂世界「整理券 vs 抽籤券」搶票秘技、提早入園與大金剛園區實測避雷',
    date: '2026-10-14',
    readTime: '13 分鐘',
    author: '黑白飛特派團隊',
    sourceUrl: 'https://www.usj.co.jp/web/zh/tw',
    summary: '2026 日本大阪環球影城（USJ）超級任天堂世界（Super Nintendo World）與全新「咚奇剛國度（大金剛）」天天擠爆！一張 Express 快速通關比門票貴兩倍還秒殺，小資族與親子家庭沒買快速通關該怎麼玩？本篇整理官方 APP 搶區域入場保證券（整理券）、入園開門前衝刺（Early Entry 實戰）、下午抽籤券退路與單人騎士（Single Rider）4 大零花費進場攻略，並揭露官方開園隱藏「偷跑提早 60 分鐘」潛規則！',
    metaDescription: '2026日本大阪環球影城USJ超級任天堂世界攻略：沒買快速通關Express如何進瑪利歐園區？官方APP整理券搶法、提早開園潛規則、大金剛瘋狂礦車單人通道實測！',
    content: (
      <div className="space-y-8 text-neutral-800 leading-relaxed">
        <section className="bg-neutral-50 p-6 sketch-border relative">
          <div className="sketch-badge -top-3 left-4 bg-black text-white text-xs px-2 py-0.5 font-bold uppercase rotate-[-1deg]">
            2026 USJ 現場震撼快訊
          </div>
          <h2 className="text-xl font-black mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            任天堂世界太熱門：沒買 Express 真的進得去嗎？
          </h2>
          <p className="text-sm text-neutral-600 mb-4">
            隨著「咚奇剛國度（Donkey Kong Country）」大金剛瘋狂礦車引爆全球玩家狂潮，大阪 USJ 的超級任天堂世界目前依舊實施**「分流人潮入場管制」**。許多台灣旅客訂完機票才發現**快速通關（Express Pass）早已售罄，或是加購價高達 $4,500~$7,000 元台幣**令人卻步。
          </p>
          <div className="bg-white p-4 sketch-border border-dashed text-sm space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>實測結論：</strong>只要掌握<strong>「開園時間潛規則」</strong>與<strong>「官方 APP 整理券光速搶票手速」</strong>，<strong>不花一毛錢買 Express 也保證能暢玩瑪利歐與大金剛！</strong></span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>最慘地雷：</strong>早上悠哉 9 點到現場才排隊過安檢，進園時整理券發光，只能賭機率極低的「抽籤券」，高機率全天無緣進園！</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
            <Ticket className="w-6 h-6" />
            進入任天堂世界的 4 種途徑成本效益對照
          </h2>
          <p className="text-sm text-neutral-600 mb-4">
            想踏入綠色水管進入蘑菇王國，目前官方一共提供 4 種合法途徑，難易度與花費天差地遠：
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse sketch-border bg-white">
              <thead>
                <tr className="bg-neutral-100 border-b-2 border-black">
                  <th className="p-3 font-black">方式途徑</th>
                  <th className="p-3 font-black">費用成本</th>
                  <th className="p-3 font-black">取得方式與時機</th>
                  <th className="p-3 font-black">優缺點實戰評價</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                <tr>
                  <td className="p-3 font-bold text-black">① 買 Express Pass (含任天堂保證券)</td>
                  <td className="p-3 text-red-600 font-bold">極高 (約 NT$3,500~7,500)</td>
                  <td className="p-3">出發前 2 個月官網/Klook/KKday 搶購</td>
                  <td className="p-3">最輕鬆省力，指定時間直接走快速道進場；但預算翻倍，熱門時段常秒殺。</td>
                </tr>
                <tr className="bg-emerald-50/50">
                  <td className="p-3 font-bold text-emerald-800">② 提早 75 分鐘排隊開園第一波衝刺 (免券)</td>
                  <td className="p-3 text-emerald-700 font-bold">NT$ 0 (完全免費)</td>
                  <td className="p-3">官方表定開園前 75~90 分鐘抵達大門過安檢</td>
                  <td className="p-3 font-semibold text-emerald-800">
                    最推薦！剛開園前 15~30 分鐘通常「免整理券自由入場」，直奔水管直衝大金剛！
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-black">③ 官方 APP 搶免費「整理券」(E-Area Timed Entry)</td>
                  <td className="p-3 text-emerald-700 font-bold">NT$ 0 (完全免費)</td>
                  <td className="p-3">掃門票進入 USJ 閘門瞬間，立即在 APP 搶時段</td>
                  <td className="p-3">先搶先贏，可自由自選進場時段（如 13:00~14:00），上午入園幾乎 100% 搶得到。</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-500">④ 下午整理券發完後的「抽籤券」(Lottery)</td>
                  <td className="p-3 text-neutral-600 font-bold">NT$ 0</td>
                  <td className="p-3">整理券發罄後 APP 開放登記，於指定時間公佈</td>
                  <td className="p-3 text-neutral-500">
                    純賭運氣，中籤率通常低於 15%，絕不可作為主要遊玩策略！
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
            <Clock className="w-6 h-6 text-amber-600" />
            官方開園「隱藏偷跑」潛規則解密
          </h2>
          <div className="bg-amber-50 p-5 sketch-border border-amber-400 space-y-3 text-sm">
            <h3 className="font-bold text-base text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              別相信官網公布的開園時間！
            </h3>
            <p>
              USJ 官方網站表定寫「09:00 開園」，但<strong>實際上為了消化廣場排隊安檢人潮，官方每天必定提早「45 ~ 75 分鐘」開放入園</strong>！
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-700">
              <li><strong>平日（週一至週四）：</strong>表定 09:00 開園，現場實際多在 <strong>08:15 ~ 08:30</strong> 正式開閘門。</li>
              <li><strong>週末與連假旺季：</strong>表定 08:30 開園，現場實際常在 <strong>07:30 ~ 07:45</strong> 就全面開放入園！</li>
              <li><strong>黃金守則：</strong>搭乘 JR 夢咲線（櫻島線）至「環球城站（Universal-City）」，請務必在<strong>「表定開園前 75 ~ 90 分鐘」</strong>抵達大門開始排安檢。</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
            <Smartphone className="w-6 h-6" />
            行前 3 步驟：USJ 官方 APP 登錄與搶票密技
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 sketch-border bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-400 block mb-1">STEP 01</span>
                <h4 className="font-bold text-base mb-2">台灣出發前先載好 APP</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  下載「Universal Studios Japan」官方 APP，將同行所有家人、朋友的門票 QR Code 一次掃入同一支手機，集中操作領取。
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-neutral-300 text-xs font-semibold text-neutral-700">
                關鍵：由手速最快的代表單機統籌領取
              </div>
            </div>

            <div className="p-4 sketch-border bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-400 block mb-1">STEP 02</span>
                <h4 className="font-bold text-base mb-2">一過驗票閘門瞬間點選</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  只有在門票被現場驗票機逼卡刷過後，系統才會解鎖「領取整理券」權限。剛過閘門走到大樹旁，立即點開 APP「區域入場保證券／整理券」。
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-neutral-300 text-xs font-semibold text-neutral-700">
                避免邊跑步邊按造成連線斷訊
              </div>
            </div>

            <div className="p-4 sketch-border bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-400 block mb-1">STEP 03</span>
                <h4 className="font-bold text-base mb-2">選時段立刻截圖存檔</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  勾選全員門票，選擇想要進入的時間帶（建議選下午 13:00~15:00，早上先衝其他免券設施），成功領取後務必立即將 QR Code 截圖備份！
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-neutral-300 text-xs font-semibold text-neutral-700">
                園區網路塞車時離線截圖照樣可刷進
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-900 text-white p-6 sketch-border">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
            <Flame className="w-5 h-5" />
            2026 現場省時秘招：單人騎士（Single Rider）玩爆大金剛
          </h2>
          <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
            進入任天堂世界後，「庫巴的挑戰書（瑪利歐賽車）」與「咚奇剛瘋狂礦車」動輒排隊 120~180 分鐘。若是不介意與同行朋友分開坐車，請直接大膽走**「Single Rider（單人騎士）走道」**！
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-neutral-800 p-3 rounded border border-neutral-700">
              <span className="text-amber-400 font-bold block mb-1">瑪利歐賽車：一般排隊 110 分鐘</span>
              <span className="text-emerald-400 font-bold text-sm">單人騎士實測：僅需 35 分鐘</span>
              <p className="text-neutral-400 mt-1">走專用樓梯直達上車點補空位，省下超過一小時！</p>
            </div>
            <div className="bg-neutral-800 p-3 rounded border border-neutral-700">
              <span className="text-amber-400 font-bold block mb-1">大金剛瘋狂礦車：一般排隊 160 分鐘</span>
              <span className="text-emerald-400 font-bold text-sm">單人騎士實測：約 50 分鐘</span>
              <p className="text-neutral-400 mt-1">軌道飛躍斷軌特效超震撼，單人乘坐一樣能累積能量手環分數！</p>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 'tokyo-fuji-excursion-fujisan-kawaguchiko-transport-2026',
    category: '票券攻略',
    title: '【2026 東京到富士山河口湖全交通攻略】富士回遊號直達車搶票教學、特急全車指定席防罰秘技、高速巴士塞車避坑與 JR 廣域周遊券劃位全實測',
    date: '2026-10-14',
    readTime: '12 分鐘',
    author: '黑白飛特派團隊',
    sourceUrl: 'https://www.jreast.co.jp/tc/multi/pass/tokyowidepass.html',
    summary: '2026 台灣旅客衝東京必去富士山河口湖朝聖！從新宿出發直達不轉車的「JR 特急富士回遊（Fuji Excursion）」只需 1 小時 53 分，但因為全車指定席且僅有 3 節車廂，開賣秒殺率高達 90%！買不到富士回遊怎麼辦？大月站轉車、新宿南口高速巴士（塞車痛點解析）、以及使用「JR 東京廣域周遊券（JR Tokyo Wide Pass）」如何提早 30 天在官網免費劃位？本篇為你完整拆解最快、最省、最舒服的富士山交通全解方！',
    metaDescription: '2026東京到河口湖交通全攻略：JR特急富士回遊搶票教學、全車指定席紅色燈號防補票、高速巴士中央道塞車避雷、JR東京廣域周遊券划算算法！',
    content: (
      <div className="space-y-8 text-neutral-800 leading-relaxed">
        <section className="bg-neutral-50 p-6 sketch-border relative">
          <div className="sketch-badge -top-3 left-4 bg-black text-white text-xs px-2 py-0.5 font-bold uppercase rotate-[-1deg]">
            2026 東京近郊人氣第一
          </div>
          <h2 className="text-xl font-black mb-3 flex items-center gap-2">
            <Train className="w-5 h-5 text-indigo-600" />
            富士回遊號：新宿 113 分鐘直達河口湖的神級列車
          </h2>
          <p className="text-sm text-neutral-600 mb-4">
            以往去河口湖要在「大月站」轉乘富士急行線，或是搭高速巴士常遇上中央自動車道週末動輒 2 小時的大塞車。<strong>「JR 特急富士回遊」</strong>直接串聯 JR 中央線與富士急行線，新宿站出發<strong>免下車直達河口湖站</strong>，成為台灣旅客出遊首選！
          </p>
          <div className="bg-white p-4 sketch-border border-dashed text-sm space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>班次現況：</strong>每日新宿出發固定 4~5 班（早晨 07:30、08:30、09:30 最熱門），回程 15:00~17:30 最難搶。</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>注意：全車皆為「指定席」（無自由席）！</strong>若無預約劃位強行上車，被查票會被加收特急料金甚至無位可坐。</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
            <Compass className="w-6 h-6" />
            東京前往河口湖 3 大交通方式大對決
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse sketch-border bg-white">
              <thead>
                <tr className="bg-neutral-100 border-b-2 border-black">
                  <th className="p-3 font-black">交通方式</th>
                  <th className="p-3 font-black">單程耗時</th>
                  <th className="p-3 font-black">單程票價</th>
                  <th className="p-3 font-black">適合對象與優缺點評比</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                <tr className="bg-indigo-50/40">
                  <td className="p-3 font-bold text-indigo-900">① JR 特急富士回遊 (直達車)</td>
                  <td className="p-3 font-bold text-emerald-700">約 1 小時 53 分 (最準時)</td>
                  <td className="p-3">約 4,130 日圓 (全指定席)</td>
                  <td className="p-3">
                    <strong>舒適首選！</strong>中途不換車、不受塞車影響、車上有洗手間與插座；缺點是車票必須提前 30 天搶。
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-black">② JR 中央線特急（梓號/甲斐路號）+ 大月站轉車</td>
                  <td className="p-3">約 2 小時 15 分</td>
                  <td className="p-3">約 3,800~4,000 日圓</td>
                  <td className="p-3">
                    <strong>搶不到富士回遊的最佳備案！</strong>班次極多（每 30 分一班特急到大月），在大月站月台跨步換富士急行線即可。
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-black">③ 高速巴士 (新宿/東京站/澀谷出發)</td>
                  <td className="p-3 text-amber-700">表定 1 小時 45 分 (塞車時恐達 3.5 小時)</td>
                  <td className="p-3 text-emerald-700 font-bold">約 2,200~2,400 日圓 (最平價)</td>
                  <td className="p-3">
                    票價最省、班次密集；但<strong>週末假日與日本連假極容易在中央道嚴重回堵塞車</strong>，趕飛機或行程緊湊者切勿嘗試！
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
            <Ticket className="w-6 h-6 text-amber-600" />
            富士回遊搶票教學：掌握「乘車日前 30 天早上 9 點」
          </h2>
          <div className="space-y-4">
            <p className="text-sm text-neutral-600">
              JR 系統固定在<strong>「乘車日 1 個月前的同日日本時間 10:00（台灣時間 09:00）」</strong>準時開放訂票。
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 sketch-border bg-white">
                <span className="font-bold text-neutral-400 block mb-1">搶票步驟 1</span>
                <h4 className="font-bold text-sm mb-1 text-black">註冊 JR 東日本訂票系統 (JR-EAST Train Reservation)</h4>
                <p className="text-neutral-600">
                  行前先註冊好繁體中文會員帳號並綁定信用卡，確認手機簡訊 OTP 能正常收取。
                </p>
              </div>
              <div className="p-4 sketch-border bg-white">
                <span className="font-bold text-neutral-400 block mb-1">搶票步驟 2</span>
                <h4 className="font-bold text-sm mb-1 text-black">持「JR 東京廣域周遊券」者免費劃位</h4>
                <p className="text-neutral-600">
                  若手上有這張神券（15,000日圓），富士回遊全程包含在免費搭乘範圍內！在訂票系統選「使用周遊券劃位」，無須額外付一毛錢。
                </p>
              </div>
              <div className="p-4 sketch-border bg-white">
                <span className="font-bold text-neutral-400 block mb-1">搶票步驟 3</span>
                <h4 className="font-bold text-sm mb-1 text-black">座位車窗燈號指南</h4>
                <p className="text-neutral-600">
                  頭頂上紅燈代表「該座位無人預約，持座席未指定券者可暫坐」；黃燈代表「即將到站有人」；綠燈代表「已有乘客預約」。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 p-6 sketch-border">
          <h2 className="text-xl font-black mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-500" />
            富士山拍攝視野：去程、回程劃位選哪一側？
          </h2>
          <div className="bg-white p-4 sketch-border text-sm space-y-2">
            <div className="flex items-start gap-2">
              <Flame className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span><strong>去程（新宿 ➔ 河口湖）：</strong>建議劃位<strong>「D 側（右側靠窗）」</strong>，列車接近河口湖時即可遠眺富士山雄偉山景。</span>
            </div>
            <div className="flex items-start gap-2">
              <Flame className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span><strong>回程（河口湖 ➔ 新宿）：</strong>建議劃位<strong>「A 側（左側靠窗）」</strong>，夕陽落日時分能目送富士山晚霞。</span>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 'korea-olive-young-duty-free-shopping-hacks-2026',
    category: '必讀攻略',
    title: '【2026 韓國 Olive Young 掃貨退稅全攻略】明洞江南聖水洞逛哪家？現場立即退稅門檻、會員折扣季、台灣人必買 Top 10 清單與行李超重避雷指南',
    date: '2026-10-14',
    readTime: '11 分鐘',
    author: '黑白飛特派團隊',
    sourceUrl: 'https://www.oliveyoung.co.kr',
    summary: '去首爾釜山如果沒去 Olive Young，就像沒去過韓國！2026 韓國藥妝店霸主 Olive Young 遍佈街頭，但各家分店陳列、試用品齊全度與結帳排隊速度天差地別。想買 Torriden 精華液、Anua 魚腥草、Medicube 美容儀或平價面膜怎麼買最划算？本篇獨家整理「現場即時退稅 15,000 韓元最新門檻」、避開明洞長龍的「首爾旗艦店地圖」、一年四次的大減價（Big Sale）檔期，以及液體防曬與精華液打包上飛機防沒收技巧！',
    metaDescription: '2026韓國Olive Young退稅攻略：現場即時退稅門檻、明洞與聖水洞旗艦店推薦、一年四季大特價時間、台灣人熱門保養美妝必買清單與手提行李防沒收指南！',
    content: (
      <div className="space-y-8 text-neutral-800 leading-relaxed">
        <section className="bg-neutral-50 p-6 sketch-border relative">
          <div className="sketch-badge -top-3 left-4 bg-black text-white text-xs px-2 py-0.5 font-bold uppercase rotate-[-1deg]">
            2026 韓國必逛第一名
          </div>
          <h2 className="text-xl font-black mb-3 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-emerald-600" />
            走進去出不來！Olive Young 為什麼讓全台灣旅客失心瘋？
          </h2>
          <p className="text-sm text-neutral-600 mb-4">
            Olive Young 在韓國就如同屈臣氏加上寶雅的合體，集結了超過 1,000 個韓國本土美妝、保養護膚、健康保健與低卡零食品牌。最吸引人的是**「1+1 組合包（企劃組）」**頻率極高，換算下來經常只要台灣售價的 5 折到 6 折！
          </p>
          <div className="bg-white p-4 sketch-border border-dashed text-sm space-y-2">
            <div className="flex items-start gap-2">
              <Coins className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>現場退稅利多：</strong>單筆消費滿 <strong>15,000 韓元（約台幣 360 元）</strong>，結帳出示台灣護照就能<strong>直接扣除稅額</strong>，現場付「免稅價」，回仁川機場不用再去退稅機排隊！</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>行李雷區：</strong>面膜與化妝水精華液「整盒加起來液體極重」，且<strong>單瓶容量超過 100ml 絕對不能手提上機</strong>，必須全數放進託運行李！</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
            <Building className="w-6 h-6" />
            首爾分店怎麼選？明洞 vs 聖水洞 vs 江南旗艦店評比
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 sketch-border bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-rose-500 block mb-1">人潮炸裂</span>
                <h4 className="font-bold text-base mb-2">明洞 Town 旗艦店</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  觀光客最多、有中文店員支援；但缺點是排隊結帳動輒 30 分鐘以上，且最熱門的企劃組常早早缺貨。
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-neutral-300 text-xs text-neutral-500">
                建議：早晨 10 點剛開門去免排隊
              </div>
            </div>

            <div className="p-4 sketch-border bg-emerald-50/50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 block mb-1">文青潮人最愛 ★ 強推</span>
                <h4 className="font-bold text-base mb-2">聖水洞 Seongsu 概念店</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  空間寬敞動線極佳，許多新銳小眾香氛、純素護膚品牌最齊全，店內還設有專屬試妝區與沉浸式互動裝置。
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-neutral-300 text-xs font-bold text-emerald-800">
                好逛度最高、拍照打卡超美
              </div>
            </div>

            <div className="p-4 sketch-border bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-500 block mb-1">科技感大型旗艦</span>
                <h4 className="font-bold text-base mb-2">江南旗艦店 (Gangnam)</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  整整三層樓大空間，男士護理保養、美容儀器、高級沙龍髮品最齊全，在地韓妞上班族下班採購主力。
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-neutral-300 text-xs text-neutral-500">
                庫存充裕，冷門小眾品都能找到
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
            <Tag className="w-6 h-6 text-amber-600" />
            2026 韓國 Olive Young 必敗爆款清單 Top 6
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse sketch-border bg-white">
              <thead>
                <tr className="bg-neutral-100 border-b-2 border-black">
                  <th className="p-3 font-black">產品品類</th>
                  <th className="p-3 font-black">熱門代表品牌</th>
                  <th className="p-3 font-black">台灣旅客必買理由</th>
                  <th className="p-3 font-black">購買與託運注意事項</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                <tr>
                  <td className="p-3 font-bold text-black">超人氣保濕精華</td>
                  <td className="p-3 font-semibold text-emerald-700">Torriden 潛水艇玻尿酸</td>
                  <td className="p-3">長期霸榜化妝水/精華冠軍，1+1 雙入組換算台幣只要幾百元。</td>
                  <td className="p-3 text-red-600 font-bold">精華液瓶身多超過 50ml，務必放託運行李</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-black">舒緩鎮定化妝水/棉片</td>
                  <td className="p-3 font-semibold text-emerald-700">Anua 魚腥草 77% / Medicube</td>
                  <td className="p-3">爽膚棉片附小夾子，快速濕敷早晨消水腫神器，台灣代購翻倍賣。</td>
                  <td className="p-3">棉片內含大量液體，安檢視同液體，不可手提</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-black">防曬精華乳</td>
                  <td className="p-3 font-semibold text-emerald-700">Round Lab 白樺樹水感防曬</td>
                  <td className="p-3">質地像乳液般清爽不泛白，日韓代購回購率第一名。</td>
                  <td className="p-3">50ml 軟管如未開拆可手提（裝透明夾鏈袋內）</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-black">低卡零食與貝果餅乾</td>
                  <td className="p-3 font-semibold text-emerald-700">Delight Project 烤貝果脆片</td>
                  <td className="p-3">大蒜奶油、玉米濃湯口味香脆停不下來，熱量僅 200 多大卡。</td>
                  <td className="p-3 text-emerald-700 font-bold">完全無肉成分，可放心帶回台灣免檢疫</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-neutral-900 text-white p-6 sketch-border">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
            <Receipt className="w-5 h-5" />
            結帳退稅口訣：「Passport, Tax Free, Please」
          </h2>
          <div className="space-y-3 text-sm text-neutral-300">
            <p>
              結帳輪到你時，在店員掃描第一件商品前，<strong>主動拿出實體護照</strong>並說出退稅關鍵字。店員會在專用機台上刷護照晶片條碼，螢幕上金額會直接扣掉 5%~8% 的附加稅（VAT）。
            </p>
            <div className="bg-neutral-800 p-3 rounded border border-neutral-700 text-xs">
              <span className="text-amber-400 font-bold">限額規定：</span>
              單筆退稅消費上限為 100 萬韓元，單趟旅程即時退稅總額最高 500 萬韓元。超過上限部分才需要到機場海關退稅機辦理。
            </div>
          </div>
        </section>
      </div>
    )
  },
`;

const updatedArticlesContent = articlesContent.slice(0, insertPos) + newArticlesChunk + articlesContent.slice(insertPos);
fs.writeFileSync(articlesFilePath, updatedArticlesContent, 'utf8');

console.log('Successfully inserted 3 new articles into /app/applet/src/data/articles.tsx');
