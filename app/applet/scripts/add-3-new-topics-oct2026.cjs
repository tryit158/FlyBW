const fs = require('fs');

const articlesFilePath = '/app/applet/src/data/articles.tsx';
let articlesContent = fs.readFileSync(articlesFilePath, 'utf8');

// Ensure MapPin is imported from lucide-react if not present
if (!articlesContent.includes('MapPin')) {
  articlesContent = articlesContent.replace(
    "} from 'lucide-react';",
    ", MapPin } from 'lucide-react';"
  );
}

// Prepare 3 new articles
const newArticlesCode = `  {
    id: 'japan-paypay-taiwan-cross-border-payment-guide-2026',
    category: '必讀攻略',
    title: '【2026 日本 PayPay 跨境電子支付全攻略】不換日幣現鈔也能爽買！街口／全支付／玉山 Wallet 掃碼實測對決：免 1.5% 海外手續費、匯率陷阱與小店避雷教學',
    author: '黑白飛省錢精算組',
    readTime: '11 分鐘',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
    imageAlt: '日本超商與居酒屋使用台灣電子支付掃碼PayPay付款實測',
    excerpt: '去日本旅遊還在帶厚重零錢包數 1 日圓銅板？2026 台灣人遊日最夯支付革命！只要用台灣手機裡的「街口支付」、「全支付」或「玉山 Wallet」，就能直接掃日本市佔第一的「PayPay」QR Code。不僅免收 1.5% 國際信用卡交易手續費，還享超甜即期匯率與現金回饋！本篇全面實測綁定帳戶教學、居酒屋路邊攤「主掃 vs 被掃」成功率、點數折抵省錢法與三大踩雷禁忌。',
    badge: '2026旅日神級支付',
    content: (
      <>
        <div className="bg-yellow-50 border-2 border-black sketch-border p-6 mb-8 text-black">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-600" /> 日本零錢地獄解脫！台灣三大支付直接掃 PayPay，免 1.5% 手續費還倒賺回饋
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            以前在京都老店、淺草路邊攤或路邊居酒屋，最怕看到「現金 Only」，常常結帳時手忙腳亂找 1 円、5 円銅板；現在日本全國超過數百萬家貼有 <strong>PayPay</strong> 標誌的店家，台灣旅客只要打開大家手機裡早有的 <strong>街口支付、全支付、玉山 Wallet</strong>，就能直接掏出手機掃碼付款！最猛的是：<strong>走跨境清算機制，完全不收一般海外信用卡常見的 1.5% 交易手續費</strong>，換算下來的即時匯率往往比銀行臨櫃換現鈔還要甜！
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <CreditCard className="w-6 h-6 text-indigo-600" /> 1. 台灣三大支付掃 PayPay 核心規格大對決
        </h3>
        <p className="mb-4 text-gray-700">
          台灣目前有三大電子支付體系與 PayPay 官方系統介接（由日本 HIVEX 跨國清算網路串接），各自的扣款方式、手續費與回饋優勢各有巧妙：
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-2 border-black sketch-border bg-white text-sm text-left">
            <thead className="bg-gray-100 border-b-2 border-black">
              <tr>
                <th className="p-3 font-bold border-r border-black">評比項目</th>
                <th className="p-3 font-bold border-r border-black">街口支付 (JKOPAY)</th>
                <th className="p-3 font-bold border-r border-black">全支付 (PXPay Plus)</th>
                <th className="p-3 font-bold">玉山 Wallet</th>
              </tr>
            </thead>
            <tbody className="divide-y border-black">
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">扣款來源</td>
                <td className="p-3 border-r border-black">街口帳戶 / 綁定台灣各銀行帳戶（不支援一般信用卡海外刷）</td>
                <td className="p-3 border-r border-black">全支付帳戶 / 綁定銀行帳戶 / 指定國泰與玉山信用卡</td>
                <td className="p-3">玉山銀行存款帳戶 / 玉山信用卡 / 玉山 Wallet 電支餘額</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">海外交易手續費</td>
                <td className="p-3 border-r border-black text-emerald-700 font-bold">0% 免收手續費！</td>
                <td className="p-3 border-r border-black text-emerald-700 font-bold">0% 免收手續費！</td>
                <td className="p-3 text-emerald-700 font-bold">0% 免收手續費！</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">即期結匯匯率</td>
                <td className="p-3 border-r border-black">台新銀行當日營業牌告即期賣出價（優於現鈔賣出）</td>
                <td className="p-3 border-r border-black">華泰商業銀行合作即時匯率，每筆交易螢幕即時試算</td>
                <td className="p-3">玉山銀行當日即期牌告價，玉山網銀優惠匯率同步適用</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">主掃 / 被掃支援度</td>
                <td className="p-3 border-r border-black">支援「正掃條碼（用戶掃店家）」＋「被掃條碼（超商刷你）」</td>
                <td className="p-3 border-r border-black">主掃條碼＋被掃條碼全面開通</td>
                <td className="p-3">主掃條碼全面支援，大型連鎖支援出示條碼被掃</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">回饋福利亮點</td>
                <td className="p-3 border-r border-black">街口幣直接折抵下一筆消費，指定銀行帳戶加碼 2%~5% 回饋</td>
                <td className="p-3 border-r border-black">全點 1 點折抵 1 元，搭配國泰/玉山活動常有破 8% 限時回饋</td>
                <td className="p-3">熊本熊卡 / 雙幣卡額外加碼，綁玉山帳戶扣款筆筆回饋</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <QrCode className="w-6 h-6 text-emerald-600" /> 2. 實戰結帳兩大情境：看懂「正掃」與「被掃」
        </h3>
        <p className="mb-4 text-gray-700">
          日本店家使用 PayPay 有兩種典型型態，在櫃台結帳時一定要留意口訣，才不會跟店員大眼瞪小眼：
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-indigo-700">
              <Smartphone className="w-5 h-5" /> 情境 A：用戶正掃（店家擺立牌 QR Code）
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>常見場合</strong>：個人居酒屋、拉麵小店、計程車司機、神社御守販售處、築地/錦市場攤商。
            </p>
            <ol className="text-xs text-gray-600 space-y-1.5 list-decimal pl-4">
              <li>結帳時跟店員說：<code className="bg-gray-100 px-1 py-0.5 rounded font-bold">PayPay（發音：佩佩）</code>。</li>
              <li>打開台灣的街口或全支付，點選首頁右上角的<strong>「掃描條碼」</strong>。</li>
              <li>鏡頭對準桌上的 PayPay 壓克力立牌 QR Code。</li>
              <li>手機螢幕會出現輸入金額畫面，<strong>請依照收銀機日幣總金額自行輸入數字（日圓）</strong>。</li>
              <li>App 會自動換算為新台幣扣款金額，確認後按下「確認付款」。</li>
              <li>將跳出「付款成功」的畫面與日幣金額<strong>展示給店員看</strong>，聽到音效即完成！</li>
            </ol>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-emerald-700">
              <QrCode className="w-5 h-5" /> 情境 B：被掃條碼（收銀台槍刷你手機）
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>常見場合</strong>：Bic Camera、驚安殿堂唐吉訶德、松本清、7-11、全家超商、LOFT。
            </p>
            <ol className="text-xs text-gray-600 space-y-1.5 list-decimal pl-4">
              <li>結帳前將 App 所在地區<strong>手動切換至「日本」</strong>（通常會依 GPS 自動提醒切換）。</li>
              <li>點選<strong>「出示付款條碼」</strong>，確認條碼上方有出現 PayPay 或 HIVEX 跨境標籤。</li>
              <li>店員拿起掃描槍「嗶」一聲，直接精確扣款，無需手動輸入金額。</li>
              <li>付款收據直接留存於 App 交易明細中，每一筆都標註精確台幣扣款與即時匯率。</li>
            </ol>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <AlertTriangle className="w-6 h-6 text-amber-600" /> 3. 台灣旅客旅日掃 PayPay 實測四大避雷守則
        </h3>
        <div className="space-y-4 mb-8">
          <div className="sketch-border p-4 bg-amber-50 border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-700" /> 避雷點 1：必須在台灣先完成「實名認證」與「銀行帳戶綁定」！
            </h4>
            <p className="text-sm text-gray-700">
              跨國電子支付受金融法規監管，<strong>絕不能到了日本成田機場才臨時下載 App 註冊</strong>！因為綁定台灣銀行帳戶需要收台灣手機簡訊 OTP 認證碼，人在海外如果用的是純上網 eSIM 卡（沒有台灣門號漫遊簡訊），就會卡死在驗證畫面。強烈建議在出國前一週就先在台灣完成升級至最高權限會員。
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <Coins className="w-5 h-5 text-indigo-700" /> 避雷點 2：部分極偏遠老店若使用 LINE Pay 轉入之舊條碼可能無法辨識
            </h4>
            <p className="text-sm text-gray-700">
              雖然目前日本 95% 以上店家已全面整併為標準版 PayPay QR Code，但少數偏遠山區或溫泉鄉老舖若立牌是十年前未更換的「純舊版店家碼」，少數會出現「條碼無法辨識」的錯誤。出發時皮夾內仍建議常備 1~2 萬日圓現鈔作為最後防線備用。
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-700" /> 避雷點 3：大額電器免稅消費，請算清楚「刷高回饋信用卡」vs「PayPay」
            </h4>
            <p className="text-sm text-gray-700">
              PayPay 主打的是免 1.5% 手續費與免帶零錢，最適合在<strong>超商、咖啡店、小吃攤、拉麵店、計程車等小額日常消費</strong>。但如果你是在 Bic Camera 買 15 萬日圓的 Dyson 或單眼相機，由於部分台灣海外消費信用卡（如富邦 J 卡、吉鶴卡、玉山熊本熊）常有 8%~10% 的高額專屬活動登錄回饋，刷專屬卡可能比 PayPay 回饋上限更香，建議大額購物前精算對比！
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <Wifi className="w-5 h-5 text-purple-700" /> 避雷點 4：手機網路斷線無法顯示動態條碼
            </h4>
            <p className="text-sm text-gray-700">
              台灣電支生成海外付款條碼需即時連線認證（安全防盜刷機制每 60 秒刷新一次），<strong>不支援離線付款</strong>。地下鐵深處或偏僻地下室居酒屋若網路收訊不良，請務必先連上店家 Wi-Fi 或出地面後再完成付款。
            </p>
          </div>
        </div>

        <AffiliateFooter />
      </>
    ),
  },
  {
    id: 'korea-travel-pass-climate-card-namane-wowpass-2026',
    category: '票券攻略',
    title: '【2026 韓國自由行交通卡大亂鬥】氣候同行卡 vs WOWPASS vs NAMANE vs T-Money！首爾釜山怎麼搭地鐵公車最省錢？購買地點、地鐵退押金與退稅機實測指南',
    author: '黑白飛雙城特派員',
    readTime: '13 分鐘',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80',
    imageAlt: '首爾地鐵與韓國氣候同行卡WOWPASS實戰評測指南',
    excerpt: '2026 去首爾、釜山旅遊還在無腦買 T-Money？首爾市政府引爆狂潮的「氣候同行卡 (Climate Card)」觀光短期券推出後，只要 5,000 韓元起即可無限次搭乘首爾地鐵與公車！究竟該買氣候同行卡、能刷卡換匯的 WOWPASS、可印客製偶像照片的 NAMANE 卡，還是傳統 T-Money？本篇全面拆解適用交通工具範圍、仁川機場領卡、現金加值陷阱與划算搭乘次數門檻！',
    badge: '韓國交通神卡實測',
    content: (
      <>
        <div className="bg-yellow-50 border-2 border-black sketch-border p-6 mb-8 text-black">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-600" /> 韓國交通卡改朝換代！首爾地鐵吃到飽神券「氣候同行卡」顛覆出國預算
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            過去台灣旅客去韓國首爾幾乎人手一張傳統 <strong>T-Money</strong>，但自從首爾市政府全面推廣 <strong>「氣候同行卡 (기후동행카드 / Climate Card)」觀光客專用定期券（1日/2日/3日/5日/7日券）</strong> 以來，首爾市內地鐵與市區公車進入<strong>「無限次搭乘吃到飽」</strong>新時代！再加上能當預付簽帳卡、在自助機直接把新台幣現鈔換成韓元儲值的 <strong>WOWPASS</strong>，以及韓星迷妹必備可印客製自選照片的 <strong>NAMANE 卡</strong>，到底怎麼搭配買最划算？這篇 2026 終極比較直接為你解惑！
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Train className="w-6 h-6 text-emerald-600" /> 1. 2026 韓國四大熱門交通卡功能規格總評比
        </h3>
        <p className="mb-4 text-gray-700">
          這四張卡在韓國的定位完全不同，請先看一眼核心定位，避免買錯卡花冤枉錢：
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-2 border-black sketch-border bg-white text-sm text-left">
            <thead className="bg-gray-100 border-b-2 border-black">
              <tr>
                <th className="p-3 font-bold border-r border-black">比較項目</th>
                <th className="p-3 font-bold border-r border-black">首爾氣候同行卡</th>
                <th className="p-3 font-bold border-r border-black">WOWPASS 機場卡</th>
                <th className="p-3 font-bold border-r border-black">NAMANE 客製卡</th>
                <th className="p-3 font-bold">傳統 T-Money 卡</th>
              </tr>
            </thead>
            <tbody className="divide-y border-black">
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">計費本質</td>
                <td className="p-3 border-r border-black text-emerald-700 font-bold">定額日票（無限次搭到飽）</td>
                <td className="p-3 border-r border-black">計次扣款（內建 T-Money 晶片）</td>
                <td className="p-3 border-r border-black">計次扣款（交通＋消費雙錢包）</td>
                <td className="p-3">純計次扣款交通電子票證</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">卡片售價</td>
                <td className="p-3 border-r border-black">空卡 3,000 韓元（可重複加值）</td>
                <td className="p-3 border-r border-black">發卡費 5,000 韓元（常有套票優惠）</td>
                <td className="p-3 border-r border-black">自印客製卡約 7,000 韓元</td>
                <td className="p-3">空卡約 3,000~4,000 韓元</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">觀光票價方案</td>
                <td className="p-3 border-r border-black">1日 5,000W / 2日 8,000W / 3日 10,000W / 5日 15,000W</td>
                <td className="p-3 border-r border-black">依每次搭乘實際金額自交通錢包扣款</td>
                <td className="p-3 border-r border-black">依每次搭乘實際金額自交通錢包扣款</td>
                <td className="p-3">每趟單程約 1,400 韓元起</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">適用範圍</td>
                <td className="p-3 border-r border-black text-rose-700 font-bold">僅限「首爾市管轄」地鐵、市區公車（不含新盆唐線）</td>
                <td className="p-3 border-r border-black text-emerald-700 font-bold">全韓國皆可搭（含首爾、釜山、大邱、濟州島）</td>
                <td className="p-3 border-r border-black text-emerald-700 font-bold">全韓國皆可搭（首爾/釜山地鐵公車通吃）</td>
                <td className="p-3 text-emerald-700 font-bold">全韓國皆可搭乘交通工具</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-50 border-r border-black">消費支付功能</td>
                <td className="p-3 border-r border-black">無商店消費扣款功能（純交通）</td>
                <td className="p-3 border-r border-black text-emerald-700 font-bold">超強！可當韓國一般簽帳卡刷遍各大店家</td>
                <td className="p-3 border-r border-black">可作為一般預付卡在韓國實體店刷卡</td>
                <td className="p-3">僅支援超商及少數特定合作門市小額扣款</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <BadgePercent className="w-6 h-6 text-indigo-600" /> 2. 算給你看：首爾氣候同行卡到底幾趟才回本？
        </h3>
        <p className="mb-4 text-gray-700">
          目前首爾地鐵使用一般 T-Money 單趟基本車資為 <strong>1,400 韓元</strong>。我們來做個簡單的數學題：
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base mb-1 text-indigo-800">1 日券（5,000 韓元）</h4>
            <p className="text-xs text-gray-600 mb-2">平均需搭乘 <strong>3.6 趟地鐵</strong></p>
            <p className="text-xs text-gray-700">
              一天內只要「飯店出發 ➔ 景點A ➔ 午餐B ➔ 景點C ➔ 回飯店」共 4 趟，當天車資就立刻倒賺！非常適合安排高密度景點踩點的自由行旅客。
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base mb-1 text-emerald-800">3 日券（10,000 韓元）</h4>
            <p className="text-xs text-gray-600 mb-2">平均每天僅需 <strong>2.4 趟地鐵</strong></p>
            <p className="text-xs text-gray-700">
              性價比最高天花板！三天只要搭滿 8 趟就回本。在首爾逛弘大、聖水洞、明洞、東大門，一天隨便轉乘都超過 3 趟，無腦首選！
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base mb-1 text-purple-800">5 日券（15,000 韓元）</h4>
            <p className="text-xs text-gray-600 mb-2">平均每天僅需 <strong>2.1 趟地鐵</strong></p>
            <p className="text-xs text-gray-700">
              首爾 5 天 4 夜經典自由行最省神器。搭錯方向出站再刷進站完全不用心痛補扣款，路痴與新手必備保險！
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <AlertTriangle className="w-6 h-6 text-rose-600" /> 3. 氣候同行卡必知的「四大踩雷地雷」
        </h3>
        <div className="space-y-4 mb-8">
          <div className="sketch-border p-4 bg-rose-50 border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-rose-600" /> 地雷 1：機場鐵路 (AREX)「不能」在仁川機場出站！
            </h4>
            <p className="text-sm text-gray-700">
              這是台灣旅客最常被罰款的痛點！<strong>仁川機場位於仁川廣域市，不屬於首爾市管轄範圍！</strong>雖然你可以在首爾站使用氣候同行卡刷進 AREX 一般列車，但到了仁川機場第一/二航廈時<strong>閘門會亮紅燈無法出站</strong>，站務員會依規定要求補繳整段單程票價！正確做法是：機場到首爾市區這段搭乘 AREX 請用一般信用卡/T-Money 購票，進了首爾市區再開始用氣候同行卡。
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> 地雷 2：新盆唐線 (Shinbundang Line) 完全不適用
            </h4>
            <p className="text-sm text-gray-700">
              新盆唐線（如江南站通往板橋的路線）為私人營運高鐵路網，全線不適用氣候同行卡。若行程中包含這段，需自備備用交通卡。
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <Coins className="w-5 h-5 text-indigo-600" /> 地雷 3：實體卡儲值機「只能吃韓元現金」
            </h4>
            <p className="text-sm text-gray-700">
              目前外國旅客無韓國電話號碼無法使用手機版 App，必須在地鐵站購買實體空卡（3,000 韓元）。<strong>地鐵站內的定期券加值機目前只收韓元紙鈔，不能刷海外信用卡！</strong>因此抵達首爾市區後，身上務必先準備好韓幣現金紙鈔加值。
            </p>
          </div>
        </div>

        <AffiliateFooter />
      </>
    ),
  },
  {
    id: 'taiwan-airport-egate-speed-customs-pass-2026',
    category: '必讀攻略',
    title: '【2026 台灣出國出入境通關全圖解】桃機塞爆不怕！第四代 e-Gate 自動查驗通關註冊、同行兒童規定、登機報到與行李安檢 10 分鐘通關秘笈',
    author: '黑白飛飛行守護團',
    readTime: '10 分鐘',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&q=80',
    imageAlt: '桃園國際機場最新第四代eGate自動通關閘門與出境安檢排隊實測',
    excerpt: '連假假期桃園機場第一、第二航廈出境安檢總是大排長龍，出境隨便排都要 40 分鐘起跳？2026 最新啟用「第四代 e-Gate 自動查驗通關系統」閘門全面升級，免事前預約、直接「閘門內臉部即時辨識＋晶片護照」3 秒鐘絲滑出境！帶未滿 12 歲兒童該怎麼走？外國籍配偶如何註冊？本篇奉上桃機 10 分鐘通關動線、托運行李安檢避雷與快速過關終極攻略。',
    badge: '桃機快速通關秘笈',
    content: (
      <>
        <div className="bg-yellow-50 border-2 border-black sketch-border p-6 mb-8 text-black">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-600" /> 桃機出境不用再乾等！最新第四代 e-Gate 3 秒完成臉部感應絲滑通關
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            每逢暑假、春節連假、中秋雙十假期，桃園機場第一航廈（廉航大本營）與第二航廈的出境大廳總是擠滿人潮。許多人以為自動通關一定要先去移民署櫃檯排隊壓指紋，其實內政部移民署全面上線的 <strong>第四代 e-Gate 自動查驗通關系統</strong>，結合高解析度鏡頭與多功能護照讀卡機，年滿 12 歲且持有晶片護照的台灣旅客，<strong>直接走到閘門前刷護照＋拍照，不用任何事前人工註冊手續，3 秒鐘直接過關！</strong>
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" /> 1. 第四代 e-Gate 全新功能升級亮點與適用對象
        </h3>
        <p className="mb-4 text-gray-700">
          第四代 e-Gate 相比舊款二代/三代閘門有大幅技術革新，通關速度提升超過 40%：
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base mb-1 text-indigo-700 flex items-center gap-1">
              <Zap className="w-5 h-5" /> 閘道內即時註冊
            </h4>
            <p className="text-xs text-gray-600 mb-2">不再需要人工預先排隊採集生物特徵</p>
            <p className="text-xs text-gray-700">
              第一次使用自動通關的新手，直接在閘門刷晶片護照，螢幕按下同意註冊，鏡頭同時拍照比對，通關同時「註冊與驗證一次搞定」！
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base mb-1 text-emerald-700 flex items-center gap-1">
              <Sparkles className="w-5 h-5" /> 動態臉部光感辨識
            </h4>
            <p className="text-xs text-gray-600 mb-2">化妝、戴一般眼鏡也能精確對焦</p>
            <p className="text-xs text-gray-700">
              升級 AI 3D 面部活體偵測，只要脫下口罩與遮陽帽，不用把眼鏡刻意拿下（非粗框或反光墨鏡），鏡頭 1~2 秒精確掃描放行。
            </p>
          </div>
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base mb-1 text-purple-700 flex items-center gap-1">
              <Scale className="w-5 h-5" /> 閘門空間加大
            </h4>
            <p className="text-xs text-gray-600 mb-2">手提登機箱推車推入更寬敞</p>
            <p className="text-xs text-gray-700">
              舊代閘門常常卡住 20 吋登機箱或嬰兒推車，新式閘門加寬並改善感應光幕，拉登機箱通關不再動不動觸發防夾逼逼警報。
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <Clock className="w-6 h-6 text-indigo-600" /> 2. 桃機從抵達大廳到登機門：10 分鐘極速通關 4 步走
        </h3>
        <p className="mb-4 text-gray-700">
          遇到桃機人潮高峰時，只要按照以下黃金動線，就能大幅節省 30~50 分鐘的排隊時間：
        </p>

        <div className="space-y-4 mb-8">
          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white inline-flex items-center justify-center text-xs font-bold">1</span>
              提前 24~48 小時完成「線上預辦登機 (Online Check-in)」＋手機電子登機證
            </h4>
            <p className="text-sm text-gray-700">
              不管是搭長榮、華航，還是台灣虎航、樂桃、酷航，出發前 24~48 小時先在官網或 App 完成 Check-in。如果只有手提行李，<strong>抵達機場直接跳過實體報到櫃檯，直奔 3 樓出境安檢入口</strong>；如果有託運行李，走「自助託運 (Self Bag Drop)」或「已辦登機專用行李托運通道」，排隊時間直接減少一半。
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white inline-flex items-center justify-center text-xs font-bold">2</span>
              出境隨身安檢排隊時：提前「脫外套、掏筆電、清空口袋」
            </h4>
            <p className="text-sm text-gray-700">
              安檢隊伍前進慢，80% 是因為有人在輸送帶前才開始手忙腳亂找電腦。在排隊等待的最後 2 分鐘，請先將<strong>外套脫下、行動電源與筆記型電腦/平板從後背包拿出來</strong>，身上的硬幣與鑰匙全部丟進隨身包內。輪到你時只需 5 秒鐘放好兩個塑膠籃，快速通過金屬探測門。
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white inline-flex items-center justify-center text-xs font-bold">3</span>
              證照查驗區：避開人工排隊海，勇敢走向綠燈 e-Gate 閘道
            </h4>
            <p className="text-sm text-gray-700">
              許多長輩或新手看到人工櫃檯排隊就跟著排，只要年滿 12 歲、身高 140 公分以上且持有中華民國晶片護照，直接走到旁邊一整排空蕩蕩的 e-Gate。護照照片頁朝下平貼於感應區，抬頭看鏡頭微笑，第一道門開、走進去第二道門開，耗時僅 3~5 秒！
            </p>
          </div>

          <div className="sketch-border p-4 bg-white border-2 border-black">
            <h4 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white inline-flex items-center justify-center text-xs font-bold">4</span>
              親子家庭必讀：帶未滿 12 歲小朋友怎麼走？
            </h4>
            <p className="text-sm text-gray-700">
              依現行法規，<strong>未滿 12 歲兒童無法使用 e-Gate 自動通關</strong>。若全家人一起出國，同行父母請勿走 e-Gate 將孩子落單，而是直接走<strong>「親子友善 / 愛心通道（公務或人工櫃檯最外側專用道）」</strong>。地勤與移民署官員會優先引導家庭旅客快速查驗，同樣不必跟著大部隊人擠人！
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 inline-flex items-center gap-2 sketch-border px-4 py-1.5 bg-gray-100">
          <HelpCircle className="w-6 h-6 text-purple-600" /> 3. 常見疑問：護照沒蓋「出境章」回國有差嗎？
        </h3>
        <p className="mb-4 text-gray-700">
          許多第一次走自動通關的人會問：「護照上沒蓋出境戳章，會不會影響回國或申請外國簽證？」答案是：<strong>完全不影響！</strong>移民署系統已全面電子化登錄入出境紀錄。如果個人因為報帳、收集紀念或特定需求一定要蓋章，走過 e-Gate 閘門後旁邊均設有「公務戳章補蓋處」，向執勤移民署警員出示護照即可免費當場補蓋當日出入境日期戳章。
        </p>

        <AffiliateFooter />
      </>
    ),
  },
`;

// Insert the new articles into articlesData array right after `export const articlesData: Article[] = [\n`
const targetMarker = 'export const articlesData: Article[] = [\n';
if (!articlesContent.includes(targetMarker)) {
  console.error('Could not find targetMarker in articles.tsx');
  process.exit(1);
}

articlesContent = articlesContent.replace(targetMarker, targetMarker + newArticlesCode);
fs.writeFileSync(articlesFilePath, articlesContent, 'utf8');
console.log('✅ 3 new articles successfully added to src/data/articles.tsx!');
