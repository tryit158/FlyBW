const fs = require('fs');

const articlesFilePath = 'src/data/articles.tsx';
let articlesContent = fs.readFileSync(articlesFilePath, 'utf8');

// Ensure ShowerHead, Moon, HelpCircle, Truck are in the lucide-react import
if (!articlesContent.includes('ShowerHead')) {
  articlesContent = articlesContent.replace(
    /from 'lucide-react';/,
    ", ShowerHead, Moon, HelpCircle, Truck } from 'lucide-react';"
  );
}

const newArticlesJSX = `  {
    id: 'budget-airline-ticket-change-refund-rules-2026',
    category: '必讀攻略',
    title: '【2026 廉航改票改名與取消退款全攻略】姓名拼音打錯能改嗎？虎航、樂桃、酷航「手續費＋差價」大對決！生病取消、颱風警報免費改退實測避坑手冊',
    author: '黑白飛機票精算師',
    readTime: '12 分鐘',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    imageAlt: '廉價航空登機證與機票改票手續費防坑指南',
    excerpt: '搶到千元廉航促銷機票，結果手滑姓名拼錯、姓跟名打反，到底會不會直接變成廢票？臨時生病、家中有事不能去，或是遇到颱風停飛該如何求償自救？本篇實測台灣三大熱門廉航（台灣虎航、樂桃航空、酷航）改名改票手續費、護照號碼0元修正秘訣、生病取消代金券申請與颱風警報免手續費改退全SOP！',
    badge: '廉航退改防坑秘技',
    content: (
      <>
        <div className="bg-yellow-50 border-2 border-black sketch-border p-6 mb-8 text-black">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-600" /> 搶到促銷票手滑打錯字？先別慌，搞清楚「更正拼音」與「換人轉讓」是兩碼子事！
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            廉航特價大促搶票時，大家往往手速如飛，心跳加速，結果結帳後定睛一看——<strong>姓和名顛倒了、護照英文拼音少了一個字母、甚至護照號碼填到舊護照</strong>！許多網友第一時間慌張上網求助：「這張機票是不是直接報廢了？」先告訴你結論：<strong>護照號碼填錯可以 0 元免費改；姓名小拼錯通常能免費或低價更正；但「整張機票換另一個人搭」在多數廉航是完全禁止或代價極高的！</strong>
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <UserCheck className="w-6 h-6 text-blue-600" /> 1. 姓名拼音打錯／顛倒拯救 SOP：三大情況判定
        </h3>
        <p className="mb-4 text-gray-700">
          廉航機票上的旅客姓名必須與「有效護照」上的英文拼音一模一樣。若有出入，地勤依規定有權拒絕登機發放登機證。但打錯時依情況處理方式天差地別：
        </p>

        <div className="space-y-4 mb-8">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 情況一：姓 (Last / Family Name) 與 名 (First / Given Name) 填顛倒
            </h4>
            <p className="text-sm text-gray-700">
              例如護照是 <code>CHEN / DA-MING</code>，你買票時系統填成 <code>DA-MING / CHEN</code>。只要英文拼字完全正確僅僅是欄位反了，在<strong>台灣虎航、樂桃航空、酷航</strong>只要出發前致電客服或聯繫在線文字客服，都能<strong>免費調換更正</strong>，地勤報到時系統即可正常印出正確登機證。
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 情況二：英文字母輕微拼錯（1～3 個字母以內）
            </h4>
            <p className="text-sm text-gray-700">
              例如 <code>HSIAO</code> 打成 <code>SIAO</code>、<code>WANG</code> 打成 <code>WANGG</code>。若讀音相近且顯然是手誤輸入錯誤（Typo），在起飛前向客服出示護照影本，多數航司允許一次免費或收取少額行政工本費更正。<strong>切記：千萬不要直接在機場櫃檯才反應，現場可能會面臨無權限處理或被加收昂貴臨櫃手續費！</strong>
            </p>
          </div>

          <div className="sketch-border p-4 bg-rose-50 border-2 border-black">
            <h4 className="font-bold text-base text-red-800 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" /> 情況三：想把機票轉讓給朋友（完全換人）
            </h4>
            <p className="text-sm text-red-900">
              這是大家最常誤解的！<strong>廉航機票基本上禁止直接轉讓改名</strong>：
              <br />• <strong>樂桃航空 (Peach)：</strong>嚴格禁止更換乘客姓名！機票不可轉給他人。
              <br />• <strong>台灣虎航 (Tigerair)：</strong>部分票種允許改名，但需收取每人每單程 NT$1,200～1,500 改名手續費，並補足目前當下機票浮動差額，加起來往往比重買一張新機票還貴！
              <br />• <strong>酷航 (Scoot)：</strong>允許改名，但手續費約 NT$1,500～2,100 起＋當前機票差額。
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Ticket className="w-6 h-6 text-purple-600" /> 2. 護照號碼、出生日期、效期填錯？別花冤枉錢！
        </h3>
        <p className="mb-4 text-gray-700">
          很多旅客在搶促銷票時，新護照還沒辦好，先拿舊護照號碼頂替，或是效期隨便猜一個日期。下訂後非常緊張：「天啊，改護照號碼要不要收幾千元手續費？」
        </p>
        <div className="sketch-border p-4 bg-emerald-50 border-2 border-black mb-6">
          <p className="text-sm text-emerald-950 leading-relaxed font-medium">
            💡 <strong>安心定心丸：</strong>機票合約認證的核心是「旅客英文姓名」與「性別」，<strong>護照號碼、發照國家、護照到期日</strong>在國際航空系統中屬於「行程資訊 (APIS)」，在起飛前 24 小時~48 小時內登入航司官網「管理訂單 (Manage Booking)」都能<strong>0 元免費自行編輯更新</strong>！即使忘記改，出發當天在台灣機場地勤臨櫃刷護照時也會自動刷入正確晶片資料。完全不需要付任何手續費！
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Scale className="w-6 h-6 text-amber-600" /> 3. 台灣三大熱門廉航「改期／改票／退款」收費大對決
        </h3>
        <p className="mb-4 text-gray-700">
          臨時想要改去別天，或是提早／延後回台？廉航改期究竟要花多少錢？請看 2026 最新官方規定與成本試算對照：
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border-2 border-black sketch-border text-sm bg-white">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-black">
                <th className="p-3 border-r-2 border-black font-bold">航空公司</th>
                <th className="p-3 border-r-2 border-black font-bold">一般特價票改期手續費</th>
                <th className="p-3 border-r-2 border-black font-bold">票價差額規定</th>
                <th className="p-3 font-bold">自願取消能否退款？</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black">
                <td className="p-3 border-r-2 border-black font-bold text-yellow-800">台灣虎航<br/><span className="text-xs font-normal text-gray-500">(tigerlight 票種)</span></td>
                <td className="p-3 border-r-2 border-black">每人每單程 NT$1,200 起</td>
                <td className="p-3 border-r-2 border-black">新舊航班若有票價差需全額補齊（若新票價較低恕不退差額）</td>
                <td className="p-3 text-red-600 font-semibold">不可退機票款（僅可申請退回未使用之機場服務稅）</td>
              </tr>
              <tr className="border-b border-black bg-purple-50">
                <td className="p-3 border-r-2 border-black font-bold text-purple-900">樂桃航空<br/><span className="text-xs font-normal text-gray-500">(Simple Peach)</span></td>
                <td className="p-3 border-r-2 border-black">每航段 NT$1,080 (官網手續費)</td>
                <td className="p-3 border-r-2 border-black">新航班票價較高需補差價；票價較便宜恕不退款</td>
                <td className="p-3 text-red-600 font-semibold">完全不可取消退款（若是 Prime 票種則可扣除手續費退 Peach Points）</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-3 border-r-2 border-black font-bold text-amber-700">酷航 (Scoot)<br/><span className="text-xs font-normal text-gray-500">(Fly 促銷票種)</span></td>
                <td className="p-3 border-r-2 border-black">每航段約 NT$1,500 ~ 2,100</td>
                <td className="p-3 border-r-2 border-black">需補票價差額（未補足無法完成改票）</td>
                <td className="p-3 text-red-600 font-semibold">不可退票（除非購票時加購安心取消保證）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sketch-border p-4 bg-amber-50 border-2 border-black mb-8">
          <h4 className="font-bold text-base text-amber-900 mb-2 flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-700" /> 精算師試算：為什麼有時候「重新買一張新機票」反而更省？
          </h4>
          <p className="text-xs text-amber-950 leading-relaxed">
            假設你原本買了台北飛東京單程特價票 <strong>NT$2,200</strong>。現在想要改到後天出發，而後天當前官網即時票價是 <strong>NT$4,500</strong>。<br />
            • <strong>改票支出：</strong>改票手續費 NT$1,200 + 補票價差額 NT$2,300 (4,500 - 2,200) = <strong>NT$3,500</strong>！<br />
            • <strong>重新買一張：</strong>如果你直接重買另一家廉航晚班特價機票可能只要 <strong>NT$2,800</strong>，原本舊票還能申請退還機場稅 NT$500。因此遇到改期，務必先計算「手續費 + 浮動差額」是否真的划算！
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <HeartPulse className="w-6 h-6 text-red-600" /> 4. 生病住院／近親喪事：廉航特殊不可抗力退票秘訣
        </h3>
        <p className="mb-4 text-gray-700">
          廉航雖然標榜不退票，但多數航空公司具有人道考量機制。若因<strong>突發嚴重傷病無法搭機（有醫師診斷證明載明不宜搭乘飛機）</strong>，或<strong>二等親以內親屬不幸身故</strong>，可在起飛前申請專案審核：
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
          <li><strong>檢附文件：</strong>區域醫院或醫學中心開立之中文／英文診斷證明書（正本或清晰掃描檔，需有醫師戳章與醫院印信），且就診日期需涵蓋航程出發期間。</li>
          <li><strong>退款形式：</strong>核准後通常不會直接退現金到信用卡，而是退為<strong>「航空公司會員帳戶代金券 (Credit Voucher)」或「樂桃點數」</strong>，效期通常為 180 天至 1 年，供下次購票折抵使用。</li>
          <li><strong>同行者規定：</strong>部分航司允許同一訂單內之直系親屬（需附戶籍謄本或身分證佐證）一併申請退代金券。</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <CloudRain className="w-6 h-6 text-blue-600" /> 5. 颱風來襲／航班停飛延誤：記住 3 步驟別被坑！
        </h3>
        <p className="mb-4 text-gray-700">
          台灣夏季秋季常有颱風警報。只要航空公司發出官方<strong>「航班異動公告（豁免公告）」</strong>，遊戲規則瞬間逆轉：
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <div className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">1</span> 絕對不要自己按改票
            </div>
            <p className="text-xs text-gray-600">
              在航司尚未正式宣布取消或允許免費改票前，千萬別衝動自行上網按改期，會被扣一般手續費！務必靜待官網發布「特別應變代碼」。
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <div className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">2</span> 免手續費改期／換航點
            </div>
            <p className="text-xs text-gray-600">
              一旦啟動豁免，通常允許在 7～14 天內免費更改同航線航班（甚至有些航司允許改大阪飛福岡等鄰近航點），且免收任何手續費與票價差。
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <div className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">3</span> 全額退款至原信用卡
            </div>
            <p className="text-xs text-gray-600">
              若假期泡湯不想去了，只要航班被取消或大幅變更時間（多為超過 4 小時以上），可要求原路退回 100% 票款至信用卡，包含託運行李與選位費！
            </p>
          </div>
        </div>

        <AffiliateFooter />
      </>
    )
  },
  {
    id: 'taoyuan-airport-free-showers-lounge-sleep-zones-2026',
    category: '必讀攻略',
    title: '【2026 桃園機場免費設施全圖解】搭廉航紅眼沒貴賓室也能躺平洗澡！一二航廈 24H 免費淋浴間、隱藏睡眠區、景觀台與按摩椅全攻略',
    author: '黑白飛紅眼生存特派員',
    readTime: '11 分鐘',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&q=80',
    imageAlt: '桃園國際機場免費休息體驗區與過境設施',
    excerpt: '搭乘清晨 6 點起飛的日韓廉航，半夜 2 點就得抵達桃機，不想花幾千元訂機場飯店或買貴賓室門票？其實桃園機場藏著超多五星級「完全免費隱藏福利」！本篇實測整理第一航廈與第二航廈 24 小時免費熱水淋浴間位置、隱藏版舒壓睡眠躺椅、免消費免費領代幣爽按 15 分鐘電動按摩椅、飲水機泡麵補給與高速充電樁地圖！',
    badge: '桃機免費爽睡指南',
    content: (
      <>
        <div className="bg-yellow-50 border-2 border-black sketch-border p-6 mb-8 text-black">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-600" /> 半夜抵達桃機只能坐硬鐵椅發呆？出國小資族必學的桃機「免費白嫖大法」！
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            搭乘清晨 6:00 起飛的沖繩、東京、釜山廉航航班，或是深夜 11:00 抵達台北的紅眼班機，常常陷入「回家睡不到三小時，住過境旅館又噴幾千元」的尷尬處境。其實桃園機場（T1 / T2）曾被評選為全球前十大好睡機場，正是因為它擁有許多<strong>「不限搭乘艙等、不需信用卡資格、完全 0 元免費開放」</strong>的隱藏設施！洗個舒服的熱水澡、躺平補眠、甚至爽按按摩椅，一篇帶你全掌握！
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <ShowerHead className="w-6 h-6 text-cyan-600" /> 1. 桃機 24 小時免費淋浴間完全地圖（含水壓與吹風機實測）
        </h3>
        <p className="mb-4 text-gray-700">
          夏天下班直奔機場全身汗流浹背？或是冬天搭長程過境想洗去一身疲憊？桃機在第一航廈與第二航廈均設有乾淨明亮的「免費淋浴間 (Free Showers)」：
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-2 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" /> 第一航廈 (T1) 免費淋浴點
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>出境管制區 4 樓：</strong>位於華航與國泰貴賓室長廊旁（過安檢後上 4F），共有多間獨立淋浴間，乾濕分離、水壓充足，開放時間為 24 小時！</li>
              <li>• <strong>入境大廳 1 樓南側／2 樓轉機區：</strong>回台灣領完行李後或轉機時，也有提供淋浴設施。</li>
              <li>• <strong>設備備品：</strong>內附洗髮乳、沐浴乳及吹風機，但<strong>需自備毛巾</strong>（或在免稅商店投幣機購買隨身毛巾組）。每人建議使用時間 15~20 分鐘。</li>
            </ul>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-2 flex items-center gap-2">
              <Plane className="w-5 h-5 text-indigo-600" /> 第二航廈 (T2) 免費淋浴點
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>出境管制區 4 樓過境貴賓區：</strong>緊鄰環亞貴賓室 (Plaza Premium Lounge) 旁！許多人以為整層都要收費，其實中間走道旁設有<strong>機場官方提供的免費淋浴間</strong>，環境媲美飯店。</li>
              <li>• <strong>入境 1 樓大廳南側：</strong>回國入境後若需立即梳洗前往上班，這裡也是熱門秘密據點。</li>
              <li>• <strong>無障礙友善：</strong>配有寬敞的無障礙淋浴間與嬰兒更衣台，帶小朋友旅行也超方便。</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Moon className="w-6 h-6 text-purple-600" /> 2. 隱藏版「免費平躺睡眠休息區」：三大神仙級位置
        </h3>
        <p className="mb-4 text-gray-700">
          候機室的椅子中間有把手無法躺平？別傻傻坐在地板上，快走去這三個經過官方認證的免費補眠天堂：
        </p>

        <div className="space-y-4 mb-8">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" /> ① 第一航廈 4 樓「機場免費體驗區 (Airport Experience Zone)」
            </h4>
            <p className="text-sm text-gray-700">
              過安檢後搭手扶梯上 4 樓貴賓室長廊，在環亞貴賓室隔壁有一大片「無人驗票」的開放木質休閒空間。這裡配備了<strong>人體工學軟墊長躺椅、低照度溫馨黃光閱讀燈、獨立充電插座（含 USB/Type-C）</strong>。深夜環境非常安靜，完全不輸收費貴賓室！
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" /> ② 第二航廈 3 樓 D 區候機長廊底「躺椅候機區」
            </h4>
            <p className="text-sm text-gray-700">
              沿著 D 區登機門往最末端走，靠近 D7-D10 區域設有一整排面向停機坪的大型斜躺皮椅。白天可以看飛機起降滑行，深夜則是視野極佳又少有人走動的靜音補眠區。
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" /> ③ 第二航廈 5 樓「南北側戶外觀景台」室內休憩區
            </h4>
            <p className="text-sm text-gray-700">
              搭乘 3 樓出境大廳電梯可直達 5 樓。除了戶外看飛機景觀平台（開放到晚上 22:30），室內區域設有大面積沙發與木質座椅，且有便利商店（7-11 / 全家）進駐，半夜覓食補給極度便利。
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Zap className="w-6 h-6 text-amber-600" /> 3. 隱藏福利：免稅店「免費領代幣爽按 15 分鐘電動按摩椅」
        </h3>
        <p className="mb-4 text-gray-700">
          逛免稅店逛到腳酸？許多人不知道桃機候機區的 Tokuyo 或 OSIM 高階電動按摩椅是可以<strong>完全免費使用</strong>的！
        </p>

        <div className="sketch-border p-4 bg-amber-50 border-2 border-black mb-6">
          <h4 className="font-bold text-base text-amber-900 mb-2 flex items-center gap-2">
            <Tag className="w-5 h-5 text-amber-700" /> 領取代幣 3 步驟密技：
          </h4>
          <ol className="text-sm text-amber-950 space-y-1.5 list-decimal pl-5">
            <li><strong>步驟 1：</strong>找到按摩椅專區（一航廈 A/B 區候機室旁，或二航廈 C/D 區候機長廊）。</li>
            <li><strong>步驟 2：</strong>走進旁邊的<strong>昇恆昌 (Everrich) 或采盟 (Tasa Meng) 免稅店服務台</strong>。</li>
            <li><strong>步驟 3：</strong>親切向店員說：「您好，我想索取按摩椅代幣。」店員就會<strong>直接免費贈送專用代幣 1 枚</strong>（不需任何消費證明或登機證檢查）！投幣即可享受 15 分鐘全身氣壓舒壓按摩。</li>
          </ol>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Coffee className="w-6 h-6 text-emerald-600" /> 4. 24H 補給站：熱水泡麵、萬國充電孔與高速 Wi-Fi
        </h3>
        <p className="mb-4 text-gray-700">
          紅眼候機三寶：充電、泡麵、滑手機。以下細節請先筆記：
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-sm text-gray-950 mb-1 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-emerald-600" /> 溫熱飲水機泡麵
            </h4>
            <p className="text-xs text-gray-600">
              桃機所有洗手間外均設有冷熱飲水機，熱水水溫高達 90~95°C，泡一碗台灣泡麵綽綽有餘！自備泡麵出境安檢（乾泡麵粉包可過安檢，禁止帶含水液體布丁）。
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-sm text-gray-950 mb-1 flex items-center gap-1.5">
              <BatteryCharging className="w-4 h-4 text-blue-600" /> 充電插座隨處充
            </h4>
            <p className="text-xs text-gray-600">
              各登機門座椅旁、4 樓體驗區長桌均設有 110V 台灣標準三孔插座與 USB 充電孔，筆電與手機隨插隨充，無需轉接頭。
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-sm text-gray-950 mb-1 flex items-center gap-1.5">
              <Wifi className="w-4 h-4 text-purple-600" /> 免密碼高速 Wi-Fi
            </h4>
            <p className="text-xs text-gray-600">
              搜尋 <code>Airport Free WiFi</code>，點擊「同意使用條款」即可連線，無時間限制，看 4K YouTube 影片順暢無比。
            </p>
          </div>
        </div>

        <div className="sketch-border p-4 bg-rose-50 border-2 border-black mb-8">
          <h4 className="font-bold text-base text-red-900 mb-1 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" /> 桃機過夜生存 3 大安全心法
          </h4>
          <p className="text-xs text-red-950 leading-relaxed">
            ① <strong>冷氣超強務必帶外套：</strong>桃機半夜室溫多維持在 20~22°C 甚至更冷，請隨身攜帶輕薄羽絨或厚外套防感冒。<br />
            ② <strong>行李鎖上隨身背帶：</strong>睡覺時將背包背帶套在手腕或腳踝上，或將行李箱輪子用外套遮擋鎖定，防範宵小。<br />
            ③ <strong>設定至少 3 個手機鬧鐘：</strong>舒服躺椅太好睡，不少旅客睡過頭錯過登機門廣播！建議設定起飛前 60 分鐘鬧鈴。
          </p>
        </div>

        <AffiliateFooter />
      </>
    )
  },
  {
    id: 'japan-hands-free-travel-luggage-delivery-storage-2026',
    category: '行李圖解',
    title: '【2026 日本空手觀光全攻略】車站置物櫃爆滿救星！超商跨縣市寄行李飯店、機場黑貓宅急便 Yamato、Ecbo Cloak 預約與新幹線大行李防罰指南',
    author: '黑白飛日本流浪狂',
    readTime: '13 分鐘',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80',
    imageAlt: '日本京都東京車站旅行行李宅配與空手觀光',
    excerpt: '2026 日本觀光人潮大爆發，新宿、東京、京都與大阪梅田車站的投幣置物櫃常常上午 10 點前就全數秒殺！拖著 28 吋大行李箱逛景點、擠地鐵、爬樓梯簡直是體力地獄。本篇完整傳授日本超夯「空手觀光 (Hands-Free Travel)」神技：日本超商寄行李到下一間飯店填單教學、機場黑貓宅急便當日送達實測、Ecbo Cloak 預約置物免排隊，以及搭新幹線大件行李未預約罰 1,000 日圓防雷規範！',
    badge: '日本空手觀光神技',
    content: (
      <>
        <div className="bg-yellow-50 border-2 border-black sketch-border p-6 mb-8 text-black">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-600" /> 拖著 28 吋大箱在京都石板路爬坡？別再折磨自己的手臂與腰椎！
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            很多台灣旅客去日本玩時都有過這場惡夢：退房後拖著兩個裝滿戰利品的沉重行李箱來到車站，發現<strong>所有能塞進 28 吋以上的大型置物櫃（Coin Locker）全部亮紅燈</strong>！轉乘找不到電梯只能硬扛爬樓梯，到了餐廳沒地方放箱子被店員白眼，整天行程全被行李綁架。其實日本擁有全世界最成熟的「空手觀光」服務，一件行李花約 400~500 元台幣，就能直接空手搭車，行李比你更早抵達下一間飯店！
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Truck className="w-6 h-6 text-amber-600" /> 1. 日本超商（Lawson / 7-11 / 全家）寄行李到下一間飯店保姆級教學
        </h3>
        <p className="mb-4 text-gray-700">
          只要日本街頭的便利商店門口貼有「黑貓 Yamato (ヤマト運輸)」或「佐川急便」標誌，就具備行李代收寄件功能：
        </p>

        <div className="sketch-border p-6 bg-white border-2 border-black mb-6">
          <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" /> 寄件 4 步驟實戰流程：
          </h4>
          <ol className="space-y-3 text-sm text-gray-700 list-decimal pl-5">
            <li>
              <strong>步驟 1：向店員領取宅配單</strong>
              <br />走到超商櫃檯，向店員出示行李箱並說：<code>「宅急便をお願いします (Takkyubin o-negai-shimasu)」</code>，店員會拿出一張<strong>粉紅色的「元払 (Motobarai，寄件人先付款)」單據</strong>。
            </li>
            <li>
              <strong>步驟 2：填寫宅配單核心欄位（最關鍵！）</strong>
              <br />• <strong>お届け先（收件地址）：</strong>寫下一間飯店的完整日文或英文地址、飯店電話、飯店完整名稱。
              <br />• <strong>ご依頼主（寄件人）：</strong>寫你自己的英文護照姓名、台灣手機號碼（加國碼 +886）。
              <br />• <strong>品名（物品名稱）：</strong>寫 <code>Clothes / Luggage (衣類・旅行用品)</code>，請勿寫貴重物品或鋰電池。
              <br />• <strong>【極重要必填備註】：</strong>在品名欄下方加註 <code>宿泊者：[護照英文姓名] / Check-in Date: [入住日期] / Booking ID: [訂房編號]</code>。若沒填寫入住人姓名與日期，飯店櫃檯查不到訂單可能直接拒收退回！
            </li>
            <li>
              <strong>步驟 3：店員丈量尺寸與秤重</strong>
              <br />店員會用皮尺測量行李箱的「長 + 寬 + 高」三邊總和。一般 24~26 吋行李箱約為 140 規格，28~30 吋大行李箱約為 160 規格。
            </li>
            <li>
              <strong>步驟 4：現場結帳付款（現金／Suica／信用卡均可）</strong>
              <br />店員刷條碼結帳後會給你「收執聯（傳票控え）」，上面有 12 碼追蹤號碼，可隨時在黑貓官網查詢行李即時物流狀態。
            </li>
          </ol>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <DollarSign className="w-6 h-6 text-emerald-600" /> 2. 超商與黑貓寄行李費用與配送天數一覽
        </h3>
        <p className="mb-4 text-gray-700">
          究竟要花多少錢？會不會幾天後才送到？請看 2026 日本本州常規配送行情：
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border-2 border-black sketch-border text-sm bg-white">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-black">
                <th className="p-3 border-r-2 border-black font-bold">寄送路線</th>
                <th className="p-3 border-r-2 border-black font-bold">行李尺寸規格</th>
                <th className="p-3 border-r-2 border-black font-bold">費用 (日圓/台幣約)</th>
                <th className="p-3 font-bold">抵達天數與建議</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black">
                <td className="p-3 border-r-2 border-black font-bold">東京市區 ⇋ 東京市區 (同城)</td>
                <td className="p-3 border-r-2 border-black">160 規格 (約 28-30 吋)</td>
                <td className="p-3 border-r-2 border-black">約 2,100~2,300 円<br/><span className="text-xs text-gray-500">(約 NT$ 440~480)</span></td>
                <td className="p-3">上午交件隔日抵達（部分服務可當日送達）</td>
              </tr>
              <tr className="border-b border-black bg-blue-50">
                <td className="p-3 border-r-2 border-black font-bold">東京 ⇋ 京都／大阪 (跨縣市)</td>
                <td className="p-3 border-r-2 border-black">160 規格 (大行李箱，重量 25kg 內)</td>
                <td className="p-3 border-r-2 border-black">約 2,500~2,700 円<br/><span className="text-xs text-gray-500">(約 NT$ 520~570)</span></td>
                <td className="p-3 font-semibold text-blue-900">通常為「隔天送達」！建議隨身背包留一套過夜換洗衣物</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-3 border-r-2 border-black font-bold">本州 ⇋ 北海道／沖繩</td>
                <td className="p-3 border-r-2 border-black">160 規格</td>
                <td className="p-3 border-r-2 border-black">約 3,200~4,200 円<br/><span className="text-xs text-gray-500">(約 NT$ 670~880)</span></td>
                <td className="p-3">需 2~3 天（經由航空或海運配送）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Smartphone className="w-6 h-6 text-purple-600" /> 3. 置物櫃全滿神救星：Ecbo Cloak 手機 App 預約置物
        </h3>
        <p className="mb-4 text-gray-700">
          如果你只是當天在市區觀光幾個小時，下午就要搭車離開，不需要過夜寄到下一間飯店，那麼這款<strong>日本最大的民間行李寄存平台「Ecbo Cloak」</strong>絕對是手機必裝神器：
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600" /> 合作據點無所不在
            </h4>
            <p className="text-xs text-gray-600">
              車站附近的特色咖啡館、居酒屋、腳踏車租借店、旅行社、商務飯店都是合作置物點，打破傳統置物櫃容量限制。
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600" /> 提前在手機上預約保留
            </h4>
            <p className="text-xs text-gray-600">
              不必賭運氣搶置物櫃！出發前或在電車上就能透過 App 查看周邊空位並直接預約，保留專屬存放空間。
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600" /> 價格透明線上扣款
            </h4>
            <p className="text-xs text-gray-600">
              背包規格約 500 円/天，大行李箱約 800~900 円/天，與大型置物櫃同價，支援 Apple Pay 與台灣信用卡直接結帳。
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Train className="w-6 h-6 text-red-600" /> 4. 搭新幹線注意：特大行李未提前預約「現場重罰 1,000 日圓」！
        </h3>
        <p className="mb-4 text-gray-700">
          若選擇自己帶著大行李搭乘新幹線（如東京往返京都、大阪、名古屋、博多），JR 官方有一條嚴格硬規定：
        </p>

        <div className="sketch-border p-5 bg-rose-50 border-2 border-black mb-8">
          <h4 className="font-bold text-base text-red-950 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" /> JR「特大荷物」規範三大重點：
          </h4>
          <ul className="text-xs text-red-900 space-y-2 list-disc pl-5">
            <li>
              <strong>尺寸標準：</strong>行李「長 + 寬 + 高」三邊合計<strong>超過 160 公分、250 公分以下</strong>（通常約 28 吋~32 吋以上大型行李箱），屬於「特大荷物」。
            </li>
            <li>
              <strong>預約免費，未預約強徵手續費：</strong>搭乘東海道、山陽、九州、西九州新幹線時，買票/劃位時<strong>「指定預約特大荷物座位」是不需要加收任何額外費用的</strong>。但若未預約就直接扛上車，車長巡檢時將<strong>強制收取 1,000 日圓手續費</strong>，並由車長安排移置指定車廂存放！
            </li>
            <li>
              <strong>座位數量有限：</strong>每節車廂只有最後一排椅背後方的空間供特大行李存放，黃金週、櫻花季與楓葉季極易滿座，建議提前在 Smart EX 官網或 JR 綠色窗口完成劃位。
            </li>
          </ul>
        </div>

        <AffiliateFooter />
      </>
    )
  },
`;

// Insert the new articles at the beginning of articlesData array
const articlesDataMarker = 'export const articlesData: Article[] = [\n';
if (!articlesContent.includes(articlesDataMarker)) {
  console.error('Could not find articlesData marker in articles.tsx');
  process.exit(1);
}

articlesContent = articlesContent.replace(
  articlesDataMarker,
  articlesDataMarker + newArticlesJSX
);

fs.writeFileSync(articlesFilePath, articlesContent, 'utf8');
console.log('Successfully added 3 new articles to src/data/articles.tsx');

// Now update Home.tsx to include the 3 new IDs in priorityIds
const homeFilePath = 'src/pages/Home.tsx';
let homeContent = fs.readFileSync(homeFilePath, 'utf8');

const newPriorityIds = [
  "'budget-airline-ticket-change-refund-rules-2026'",
  "'taoyuan-airport-free-showers-lounge-sleep-zones-2026'",
  "'japan-hands-free-travel-luggage-delivery-storage-2026'"
];

const priorityIdsRegex = /const priorityIds = \[([\s\S]*?)\];/;
const priorityMatch = homeContent.match(priorityIdsRegex);

if (priorityMatch) {
  const innerContent = priorityMatch[1];
  const updatedInner = '\n      ' + newPriorityIds.join(',\n      ') + ',' + innerContent;
  homeContent = homeContent.replace(priorityIdsRegex, `const priorityIds = [${updatedInner}];`);
  fs.writeFileSync(homeFilePath, homeContent, 'utf8');
  console.log('Successfully updated priorityIds in src/pages/Home.tsx');
} else {
  console.warn('Could not find priorityIds in Home.tsx');
}
