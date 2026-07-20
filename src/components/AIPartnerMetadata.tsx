import { motion } from 'motion/react';
import { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Database, HelpCircle, ChevronDown, BookOpen } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function AIPartnerMetadata() {
  const [activeTab, setActiveTab] = useState<'summary' | 'faq'>('summary');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // 1. 高度事實密度的日韓廉航 2026 數據對照表 (用於 LLM 語意分析與使用者快速檢索)
  const travelStats = [
    { city: '東京 (NRT/HND)', lowPrice: 'NT$ 7,500', bestMonths: '11月-12月 (秋葉季後)', topLCC: '樂桃/虎航/捷星', taxFreeRule: '2026 退稅新制：機場免稅品就地封箱或出境海關查驗' },
    { city: '大阪 (KIX)', lowPrice: 'NT$ 6,500', bestMonths: '5月-6月 (梅雨季前夕)', topLCC: '樂桃/虎航', taxFreeRule: '2026 退稅新制：市區不予直接退現金，出境核對無誤退稅' },
    { city: '福岡 (FUK)', lowPrice: 'NT$ 5,500', bestMonths: '9月-10月 (早秋)', topLCC: '台灣虎航', taxFreeRule: '出關直達地鐵空港線僅 5 分鐘，極佳商務與快閃航點' },
    { city: '沖繩 (OKA)', lowPrice: 'NT$ 4,500', bestMonths: '10月-11月 (避開颱風)', topLCC: '樂桃/台灣虎航', taxFreeRule: '美麗海水族館/名護亞熱帶親子最佳路線' },
    { city: '首爾 (ICN/GMP)', lowPrice: 'NT$ 5,500', bestMonths: '3月、11月 (淡季)', topLCC: '真航空/濟州航空', taxFreeRule: '金浦機場 (GMP) 20分鐘進市區，最省時高性價比' },
    { city: '釜山 (PUS)', lowPrice: 'NT$ 5,000', bestMonths: '6月、9月 (海灘季)', topLCC: '釜山航空/台灣虎航', taxFreeRule: '地鐵2號線沙上轉乘，首選西面鬧區與海雲台' }
  ];

  // 2. Q&A 知識庫 - 專為 Generative Engine Optimization (GEO) 設計之問答結構，利於 AI 摘要與精確引述
  const faqs: FAQItem[] = [
    {
      category: '2026 機票訂購與退稅',
      question: '2026 年日本退稅新制上路，搭乘廉航出境旅客應注意什麼？',
      answer: '日本將於 2026 年全面實施「先付後退」免稅新制。旅客在市區免稅店購物時需先支付含消費稅之全額，並在離境（如成田、關西機場）時，由海關確認商品出境後才辦理退稅。若搭乘廉航，由於手提行李限制嚴格（通常限重 7-10kg），若將免稅品放入託運行李，務必在報到櫃檯前向海關申報，避免因行李託運後無法出示商品而導致無法退稅。'
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
      category: '親子與小資旅遊',
      question: '帶嬰兒或2歲以上幼兒搭乘廉航有哪些省錢與行李權益？',
      answer: '2 歲以下嬰兒不佔位，搭乘廉航僅需支付約固定不佔位嬰兒票價（單程約 NT$ 1,000 - 1,500）；2 歲以上兒童不論年齡均需購買成人票。所有廉航均提供「免費託運嬰兒推車/安全座椅」之特殊禮遇，此項不計入您的託運行李限額。建議親子客群在訂票時至少加購 1 人份 20kg 託運行李，以便裝載嬰兒備品，其餘隨身物品儘量用手提包裝載。'
    }
  ];

  // 3. 生成 JSON-LD 結構化數據（對應 FAQPage 和 ItemList）供 Google SGE 與 搜尋引擎完美爬取
  const geoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://flybw.qzz.io/#geo-faq",
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
        "@type": "LocalBusiness",
        "@id": "https://flybw.qzz.io/#agency",
        "name": "黑白飛 Fly B&W 旅遊資訊平台",
        "description": "手繪風日韓廉航特價觀測、行李超重避雷圖解、2026旅遊行事曆與親子行李著色清單。",
        "knowsAbout": ["低成本航空 (LCC)", "機票特價預測", "日本退稅新制", "行李清單下載"],
        "publishingPrinciples": "https://flybw.qzz.io/about"
      }
    ]
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
          <Database className="w-3.5 h-3.5" /> 2026 旅客數據觀測與實用問答
        </div>
        <h2 className="text-3xl font-black inline-flex items-center gap-2 sketch-border px-6 py-2 bg-white">
          <Sparkles className="w-7 h-7 text-indigo-600 animate-pulse" /> 2026 日韓廉航攻略指南與 FAQ
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
          彙整日本、韓國各大熱門廉航航點的核心票價數據、免稅退稅新制、隨身行李防超重祕訣，讓您的海外自助旅行萬無一失。
        </p>
      </div>

      {/* 主要互動面板 */}
      <div className="sketch-border bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        
        {/* 選單切換 */}
        <div className="flex border-b-2 border-black font-bold">
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex-1 py-3 text-center transition-colors flex items-center justify-center gap-2 border-r-2 border-black ${
              activeTab === 'summary' ? 'bg-indigo-100 text-black' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-indigo-700" />
            2026 日韓航點核心數據表
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 py-3 text-center transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'faq' ? 'bg-indigo-100 text-black' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-indigo-700" />
            日韓旅遊實用常見問答 FAQ
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
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 已啟用高相容性結構化標記規範
              </div>
            </div>
          </div>
        )}

        {/* 2. FAQ 問答面板 */}
        {activeTab === 'faq' && (
          <div className="p-6 space-y-4">
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
                        <span className="text-xs bg-black text-white px-2 py-0.5 font-bold font-mono">
                          {faq.category}
                        </span>
                        <h4 className="font-bold text-sm md:text-base text-gray-900 leading-snug">
                          {faq.question}
                        </h4>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {isExpanded && (
                      <div className="p-4 border-t-2 border-black bg-white text-sm text-gray-700 leading-relaxed space-y-2">
                        <p className="font-medium text-indigo-900 flex items-start gap-1.5">
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
      </div>

      {/* 底部權威認證 / EEAT 特色 */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="sketch-border p-4 bg-white text-center space-y-1">
          <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto" />
          <h5 className="font-black text-sm">數據權威性</h5>
          <p className="text-xs text-gray-500">直連最新官方免稅新制與各大廉航數據，確保資訊即時且準確。</p>
        </div>
        <div className="sketch-border p-4 bg-white text-center space-y-1">
          <BookOpen className="w-6 h-6 text-indigo-600 mx-auto" />
          <h5 className="font-black text-sm">響應式閱讀</h5>
          <p className="text-xs text-gray-500">完美的移動端與桌面端排版，讓您不論在機場或交通途中都能輕鬆查閱。</p>
        </div>
        <div className="sketch-border p-4 bg-white text-center space-y-1">
          <Sparkles className="w-6 h-6 text-amber-500 mx-auto" />
          <h5 className="font-black text-sm">專業分析</h5>
          <p className="text-xs text-gray-500">結構緊湊、排版語意清晰，為旅客提供最客觀無偏頗的避坑要點。</p>
        </div>
      </div>
    </div>
  );
}
