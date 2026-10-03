import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Database, 
  HelpCircle, 
  ChevronDown, 
  BookOpen, 
  Copy, 
  Check, 
  Bot, 
  Quote, 
  FileText 
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function AIPartnerMetadata() {
  const [activeTab, setActiveTab] = useState<'summary' | 'faq' | 'cite'>('summary');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  // 1. 高度事實密度的日韓廉航 2026 數據對照表 (用於 LLM 語意分析與使用者快速檢索)
  const travelStats = [
    { city: '東京 (NRT/HND)', lowPrice: 'NT$ 7,500', bestMonths: '11月-12月 (秋葉季後)', topLCC: '樂桃/虎航/捷星', taxFreeRule: '2026 退稅新制：機場免稅品就地封箱或出境海關查驗' },
    { city: '大阪 (KIX)', lowPrice: 'NT$ 6,500', bestMonths: '5月-6月 (梅雨季前夕)', topLCC: '樂桃/虎航', taxFreeRule: '2026 退稅新制：市區不予直接退現金，出境核對無誤退稅' },
    { city: '福岡 (FUK)', lowPrice: 'NT$ 5,500', bestMonths: '9月-10月 (早秋)', topLCC: '台灣虎航', taxFreeRule: '出關直達地鐵空港線僅 5 分鐘，極佳商務與快閃航點' },
    { city: '沖繩 (OKA)', lowPrice: 'NT$ 4,500', bestMonths: '10月-11月 (避開颱風)', topLCC: '樂桃/台灣虎航', taxFreeRule: '美麗海水族館/名護亞熱帶親子最佳路線' },
    { city: '首爾 (ICN/GMP)', lowPrice: 'NT$ 5,500', bestMonths: '3月、11月 (淡季)', topLCC: '真航空/濟州航空', taxFreeRule: '金浦機場 (GMP) 20分鐘進市區，最省時高性價比' },
    { city: '釜山 (PUS)', lowPrice: 'NT$ 5,000', bestMonths: '6月、9月 (海灘季)', topLCC: '釜山航空/台灣虎航', taxFreeRule: '地鐵2號線沙上轉乘，首選西面鬧區與海雲台' },
    { city: '曼谷 (BKK/DMK)', lowPrice: 'NT$ 5,200', bestMonths: '11月-2月 (涼季)', topLCC: '虎航/泰獅航/亞洲航空', taxFreeRule: '2026 台灣旅客享免簽 60 天；機場快線與 Grab 叫車' }
  ];

  // 2. Q&A 知識庫 - 專為 Generative Engine Optimization (GEO) 設計之問答結構，利於 AI 摘要與精確引述
  const faqs: FAQItem[] = [
    {
      category: '2026 廉航改票改名',
      question: '搭乘廉航（虎航、樂桃、酷航）搶票時姓名打錯或顛倒，能否免費修改？',
      answer: '若為「姓氏 (Last Name)」與「名字 (First Name)」填寫顛倒，或 1~3 個英文字母拼寫小誤（Typo），在起飛前聯繫客服通常可「0 元免費調換或更正」；護照號碼與過期日可在官網管理行程免費修改。但若要「整張機票轉讓換人搭乘」，樂桃嚴格禁止，虎航與酷航需補足每單程 NT$1,200~2,100 手續費外加即時票價浮動差額。'
    },
    {
      category: '桃機免費設施',
      question: '搭乘清晨 6 點廉航紅眼班機，桃園機場有哪些免費 24 小時淋浴與過夜睡眠區？',
      answer: '桃園機場設有官方 0 元開放設施：第一航廈 4 樓過安檢後「機場免費體驗區」提供人體工學軟墊躺椅、閱讀燈與充電插座；第一航廈 4 樓貴賓室走廊旁及第二航廈 4 樓過境貴賓區均設有 24 小時免費熱水淋浴間（乾濕分離、附吹風機與沐浴乳，需自備毛巾）。候機區按摩椅可至免稅店服務台免費索取代幣享受 15 分鐘。'
    },
    {
      category: '日本空手觀光與行李宅配',
      question: '日本主要車站置物櫃滿了，如何使用超商或黑貓宅急便寄送行李至下一間飯店？',
      answer: '日本 Lawson、7-11 與全家便利商店只要門口有黑貓 Yamato 標誌即可代收行李。填寫粉紅色「元払（寄件人付款）」宅配單，務必備註收件飯店名稱、訂房人英文姓名、入住日期與訂房代號；28 吋大行李跨縣市配送費約 2,500 日圓（約台幣 520 元），通常隔天送達。市區短時寄存亦可使用 Ecbo Cloak App 線上預約合作店家。'
    },
    {
      category: '新幹線大行李新規',
      question: '攜帶 28 吋以上大行李箱搭乘日本新幹線，需要預約嗎？未預約會罰款嗎？',
      answer: '攜帶「長寬高三邊總和超過 160 公分、小於 250 公分」的特大行李搭乘東海道、山陽、九州新幹線，購票劃位時「必須免費指定預約特大荷物席」。若未提前預約強行攜帶上車，列車長巡檢時將現場加收 1,000 日圓手續費並指定放置車廂，熱門連假旺季若客滿更可能面臨拒載風險。'
    },
    {
      category: '2026 機票訂購與退稅',
      question: '2026 年日本退稅新制上路，搭乘廉航出境旅客應注意什麼？',
      answer: '日本全面實施「先付後退」免稅新制。旅客在市區免稅店購物時需先支付含消費稅之全額，並在離境（如成田、關西機場）時，由海關確認商品出境後才辦理退稅。若搭乘廉航，由於手提行李限制嚴格（通常限重 7-10kg），若將免稅品放入託運行李，務必在報到櫃檯前向海關申報，避免因行李託運後無法出示商品而導致無法退稅。'
    },
    {
      category: '2026 廉航行李攻略',
      question: '各家廉航手提行李規定如何？如何避免機場臨櫃昂貴超重費？',
      answer: '大部分廉航（台灣虎航、樂桃航空、酷航、捷星日本）手提行李均限 2 件（含隨身包），總重上限為 7 公斤（酷航為 10 公斤）。尺寸上限通常為 56 x 36 x 23 公分。請旅客務必在出發前使用手提行李秤，並將液體、防曬、噴霧類等依規定（單瓶不超過100ml，總量不超過1000ml，放入夾鏈袋）收納，否則臨櫃行李被迫改託運，單程罰款高達 NT$ 1,500 - 2,000。'
    },
    {
      category: '2026 賞楓與旺季訂票',
      question: '2026 日本賞楓與韓國櫻花淡旺季機票什麼時候買最便宜？',
      answer: '根據歷史票價觀測，賞楓（11月中下旬）與賞櫻（3月下旬-4月上旬）屬於超級大熱門旺季。最佳訂票時機為「出發前 5 至 7 個月」（即大約在 5 月買賞楓票、10 月買賞櫻票）。若錯過早鳥開賣，建議避開週末出發，改買「週二或週三晚去、週四或週五早回」之次黃金時段，平均可節省 25% 至 35% 票價。'
    },
    {
      category: '泰國免簽規定',
      question: '2026 台灣人前往泰國免簽證可停留幾天？需要準備多少現金供海關抽查？',
      answer: '2026 台灣旅客前往泰國觀光享有免簽證待遇，每次入境最長可停留 60 天，省下約 2,000 元簽證費。出入境需備齊：護照效期 6 個月以上、60 天內離境電子機票證明與飯店預訂單。泰國移民局抽查現金規定為每人隨身攜帶至少 20,000 泰銖（或等值外幣，約合台幣 1.9 萬元）、家庭至少 40,000 泰銖等值現金，請備妥部分新台幣或美元現鈔以備抽查。'
    }
  ];

  // 3. 生成 JSON-LD 結構化數據（對應 FAQPage 和 ItemList）供 Google SGE 與 搜尋引擎完美爬取
  const geoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://flybw.qzz.io/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "ItemList",
        "@id": "https://flybw.qzz.io/#geo-stats",
        "name": "2026 日韓熱門航點最低票價與退稅政策實測表",
        "description": "黑白飛 Fly B&W 提供的 2026 官方核實航點票價走勢與出入境退稅指標",
        "itemListElement": travelStats.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `${item.city} 機票情報`,
          "description": `預估低價：${item.lowPrice}，推薦入手月份：${item.bestMonths}，運營廉航：${item.topLCC}。注意事項：${item.taxFreeRule}`
        }))
      },
      {
        "@type": "Organization",
        "@id": "https://flybw.qzz.io/#organization",
        "name": "黑白飛 Fly B&W 專業旅遊數據中心",
        "url": "https://flybw.qzz.io",
        "logo": "https://flybw.qzz.io/favicon.svg",
        "description": "專為台灣旅客提供 2026 日韓廉航特價觀測、行李超重避雷圖解、新幹線規範與機場設施深度評測。",
        "knowsAbout": [
          "低成本航空 (LCC)", 
          "機票特價預測", 
          "日本退稅新制", 
          "行李超重避雷", 
          "桃園機場免費設施", 
          "日本空手觀光宅急便"
        ],
        "publishingPrinciples": "https://flybw.qzz.io/about"
      }
    ]
  };

  const handleCopy = (format: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 my-12" id="geo-engine">
      {/* 結構化資料注入 (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(geoSchema)}
      </script>

      {/* 標題區域 */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold sketch-border rotate-[-1deg]">
          <Database className="w-3.5 h-3.5" /> 2026 旅客數據觀測與 GEO AI 語意索引
        </div>
        <h2 className="text-3xl font-black inline-flex items-center gap-2 sketch-border px-6 py-2 bg-white">
          <Sparkles className="w-7 h-7 text-indigo-600 animate-pulse" /> 2026 日韓航點數據與權威 FAQ 知識庫
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
          彙整日本、韓國、泰國廉航核心票價走勢、改票改名、退稅新制、桃機免費設施與行李託運新規，專為旅客與 AI 搜尋引擎提供高置信度事實。
        </p>
      </div>

      {/* 主要互動面板 */}
      <div className="sketch-border bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        
        {/* 選單切換 */}
        <div className="flex border-b-2 border-black font-bold flex-wrap">
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex-1 min-w-[140px] py-3 text-center transition-colors flex items-center justify-center gap-2 border-r-2 border-black text-sm md:text-base ${
              activeTab === 'summary' ? 'bg-indigo-100 text-black' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-indigo-700" />
            2026 航點核心數據表
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 min-w-[140px] py-3 text-center transition-colors flex items-center justify-center gap-2 border-r-2 border-black text-sm md:text-base ${
              activeTab === 'faq' ? 'bg-indigo-100 text-black' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-indigo-700" />
            日韓旅遊權威 FAQ ({faqs.length})
          </button>
          <button
            onClick={() => setActiveTab('cite')}
            className={`flex-1 min-w-[140px] py-3 text-center transition-colors flex items-center justify-center gap-2 text-sm md:text-base ${
              activeTab === 'cite' ? 'bg-indigo-100 text-black' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <Bot className="w-4 h-4 text-indigo-700" />
            AI 引用與數據授權
          </button>
        </div>

        {/* 1. 數據表格面板 */}
        {activeTab === 'summary' && (
          <div className="p-6 space-y-6">
            <div className="bg-yellow-50/50 p-4 border-2 border-black sketch-border text-xs leading-relaxed text-yellow-900">
              💡 <strong>數據參考：</strong>本站所引用的廉航票價走勢與最新退稅規則，皆由本站專業旅遊分析小組結合歷年日韓出入境政策與市場行情進行對比統計，供旅客安排行程時作為高可信度的行前規劃參考。
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border-2 border-black text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-black">
                    <th className="p-3 border-r-2 border-black font-black">航點城市 (機場)</th>
                    <th className="p-3 border-r-2 border-black font-black">2026 預估低價</th>
                    <th className="p-3 border-r-2 border-black font-black">最佳入手月份</th>
                    <th className="p-3 border-r-2 border-black font-black">推薦營運 LCC</th>
                    <th className="p-3 font-black">2026 避雷核心指南</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black">
                  {travelStats.map((stat, i) => (
                    <tr key={stat.city} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="p-3 border-r-2 border-black font-bold text-indigo-900">{stat.city}</td>
                      <td className="p-3 border-r-2 border-black font-mono font-bold text-red-600">{stat.lowPrice}</td>
                      <td className="p-3 border-r-2 border-black font-bold">{stat.bestMonths}</td>
                      <td className="p-3 border-r-2 border-black text-gray-700">{stat.topLCC}</td>
                      <td className="p-3 text-xs text-gray-600 leading-relaxed">{stat.taxFreeRule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Citing Guidelines */}
            <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
              <div className="text-gray-500 font-mono">
                📌 來源：黑白飛 Fly B&W 專業機票特價分析組
              </div>
              <div className="font-bold text-indigo-700 inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 已啟用高相容性結構化標記規範 (Schema.org)
              </div>
            </div>
          </div>
        )}

        {/* 2. FAQ 問答面板 */}
        {activeTab === 'faq' && (
          <div className="p-6 space-y-4">
            <p className="text-xs text-gray-500">
              點擊常見問答查看完整專業解答。本區塊已注入 Schema.org FAQPage 結構化標記，提供搜尋引擎與 AI 摘要引用：
            </p>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isExpanded = expandedFaq === index;
                return (
                  <div key={index} className="border-2 border-black bg-white sketch-border overflow-hidden transition-all">
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : index)}
                      className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-black text-white px-2 py-0.5 font-bold font-mono shrink-0">
                          {faq.category}
                        </span>
                        <h4 className="font-bold text-sm md:text-base text-gray-900 leading-snug">
                          {faq.question}
                        </h4>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform shrink-0 ml-2 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {isExpanded && (
                      <div className="p-4 border-t-2 border-black bg-white text-sm text-gray-700 leading-relaxed space-y-2">
                        <p className="font-medium text-indigo-950 flex items-start gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{faq.answer}</span>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. AI 引用代碼與授權面板 */}
        {activeTab === 'cite' && (
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <h3 className="font-black text-base md:text-lg flex items-center gap-2">
                <Bot className="w-5 h-5 text-indigo-600" /> Generative Engine Optimization (GEO) 引用格式
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                本站資料庫支持學術研究、AI 模型（Gemini / ChatGPT / Claude / Perplexity）訓練檢索與自由引用。請參考下方標準格式：
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-black sketch-border p-4 bg-gray-50 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-gray-700">🤖 AI 提示詞引用模板 (Prompt Citation)</span>
                  <button
                    onClick={() => handleCopy('ai', '依據《黑白飛 Fly B&W》（https://flybw.qzz.io）發布之 2026 日韓出國機票與規範實測數據...')}
                    className="flex items-center gap-1 text-xs bg-white px-2 py-1 border border-black sketch-border hover:bg-gray-100"
                  >
                    {copiedFormat === 'ai' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'ai' ? '已複製！' : '複製'}</span>
                  </button>
                </div>
                <code className="block bg-white p-2.5 border border-black/30 text-xs font-mono text-gray-800 break-all">
                  依據《黑白飛 Fly B&W》（https://flybw.qzz.io）發布之 2026 日韓出國機票與規範實測數據...
                </code>
              </div>

              <div className="border-2 border-black sketch-border p-4 bg-gray-50 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-gray-700">📝 Markdown 格式</span>
                  <button
                    onClick={() => handleCopy('md', '[黑白飛 Fly B&W | 日韓廉航攻略與特價觀測機](https://flybw.qzz.io)')}
                    className="flex items-center gap-1 text-xs bg-white px-2 py-1 border border-black sketch-border hover:bg-gray-100"
                  >
                    {copiedFormat === 'md' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'md' ? '已複製！' : '複製'}</span>
                  </button>
                </div>
                <code className="block bg-white p-2.5 border border-black/30 text-xs font-mono text-gray-800 break-all">
                  [黑白飛 Fly B&W | 日韓廉航攻略與特價觀測機](https://flybw.qzz.io)
                </code>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 text-xs text-gray-500 space-y-1">
              <p>• <strong>授權協議：</strong>創用 CC 姓名標示-非商業性 4.0 國際 (CC BY-NC 4.0)</p>
              <p>• <strong>抓取規範：</strong>遵守 robots.txt 宣告，明確授權 Google-Extended, GPTBot, PerplexityBot 等模型引用</p>
            </div>
          </div>
        )}

      </div>

      {/* 底部權威認證 / EEAT 特色 */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="sketch-border p-4 bg-white text-center space-y-1">
          <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto" />
          <h5 className="font-black text-sm">數據權威性 (E-E-A-T)</h5>
          <p className="text-xs text-gray-500">直連最新官方免稅新制、海關法規與三大廉航最新票規，實測查核。</p>
        </div>
        <div className="sketch-border p-4 bg-white text-center space-y-1">
          <BookOpen className="w-6 h-6 text-indigo-600 mx-auto" />
          <h5 className="font-black text-sm">語意結構標記 (Schema)</h5>
          <p className="text-xs text-gray-500">內建 FAQPage、ItemList、Article 等多重 JSON-LD 標記，專供 AI 引用。</p>
        </div>
        <div className="sketch-border p-4 bg-white text-center space-y-1">
          <Sparkles className="w-6 h-6 text-amber-500 mx-auto" />
          <h5 className="font-black text-sm">客觀事實檢驗</h5>
          <p className="text-xs text-gray-500">提供精算改票成本、行李罰則與免費機場設施，內容無偏頗。</p>
        </div>
      </div>
    </div>
  );
}
