import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Plane, 
  Calendar, 
  TrendingUp, 
  MessageCircle,
  HelpCircle,
  Clock,
  ArrowRight,
  Lock,
  KeyRound
} from 'lucide-react';
import defaultPrices from '../data/dailyPrices.json';

interface DailyPostData {
  date: string;
  generatedAt: string;
  featuredArticle: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
  };
  prices: {
    tokyo: { price: number; status: string };
    osaka: { price: number; status: string };
    seoul: { price: number; status: string };
    busan: { price: number; status: string };
  };
  posts: {
    threads: string;
    facebook: string;
    line: string;
  };
}

export default function DailyPostHub() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem('flybw_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<'threads' | 'facebook' | 'line'>('threads');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [postData, setPostData] = useState<DailyPostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/daily-post.json?t=' + Date.now())
      .then(res => res.json())
      .then(data => {
        setPostData(data);
        setIsLoading(false);
      })
      .catch(() => {
        // Fallback default generator
        const today = new Date().toISOString().split('T')[0];
        const tokyo = defaultPrices.destinations.find(d => d.city === '東京') || { price: 6890, status: '激省' };
        const osaka = defaultPrices.destinations.find(d => d.city === '大阪') || { price: 6350, status: '可入手' };
        const seoul = defaultPrices.destinations.find(d => d.city === '首爾') || { price: 6120, status: '可入手' };
        const busan = defaultPrices.destinations.find(d => d.city === '釜山') || { price: 4580, status: '激省' };

        const fallbackThreads = `去日本韓國玩，千萬不要傻傻買破萬機票！\n\n今天黑白飛大數據觀測到的「真實全額含稅」甜甜買點：\n🗼 東京：NT$ ${tokyo.price.toLocaleString()}（${tokyo.status}）\n🐙 大阪：NT$ ${osaka.price.toLocaleString()}（${osaka.status}）\n🇰🇷 首爾：NT$ ${seoul.price.toLocaleString()}（${seoul.status}）\n🏖️ 釜山：NT$ ${busan.price.toLocaleString()}（${busan.status}・激省必搶）\n\n🔥 今日精選避坑攻略：\n【2026-2027 北九州自由行全攻略】福岡/熊本/阿蘇/由布院黃金大環線！\n\n👇\n💬 留言「+1」或私訊我，直接傳送完整避坑地圖與手繪行程手帳給你！\n🔗 完整比價大盤：https://flybw.qzz.io\n\n#日本自由行 #廉航特價 #日韓旅遊 #機票比價 #黑白飛`;

        const fallbackFb = `✈️【黑白飛 Fly B&W】${today} 每日日韓廉航行情與避坑快報 📢\n\n買機票千萬別只看未稅價，結帳加上機場稅燃油費差點吐血！\n黑白飛航班情報中心今日實測，為大家抓出「100% 可開票、全額含稅」的真實入手價位：\n\n📊 今日日韓熱門航線甜甜價指標：\n🗼 台北 ⇄ 東京：NT$ ${tokyo.price.toLocaleString()} 起【${tokyo.status}】\n🐙 台北 ⇄ 大阪：NT$ ${osaka.price.toLocaleString()} 起【${osaka.status}】\n🇰🇷 台北 ⇄ 首爾：NT$ ${seoul.price.toLocaleString()} 起【${seoul.status}】\n🏖️ 台北 ⇄ 釜山：NT$ ${busan.price.toLocaleString()} 起【${busan.status}】\n\n👇 完整觀測大盤與深度攻略：\nhttps://flybw.qzz.io\n\n🎁 加入官方 LINE（搜尋 ID：@349bnumb），輸入「機票」免費領取旅遊避坑手帳！`;

        const fallbackLine = `✈️ 黑白飛今日特價速報 (${today}) ✈️\n\n今日日韓廉航甜甜價已更新！\n今日釜山只要 NT$ ${busan.price.toLocaleString()}、東京只要 NT$ ${tokyo.price.toLocaleString()}！\n\n點擊下方連結立即查看今日全站觀測大盤：\nhttps://flybw.qzz.io/#observatory`;

        setPostData({
          date: today,
          generatedAt: new Date().toISOString(),
          featuredArticle: {
            id: 'northern-kyushu-fukuoka-kumamoto-aso-yufuin-guide-2026',
            title: '【2026-2027 北九州自由行全攻略】福岡/熊本/阿蘇/由布院黃金大環線！',
            excerpt: '台積電熊本廠帶動直飛熱潮，北九州成為 2026-2027 全台搜尋成長率第一名的日本勝地！',
            category: '必讀攻略'
          },
          prices: { tokyo, osaka, seoul, busan },
          posts: {
            threads: fallbackThreads,
            facebook: fallbackFb,
            line: fallbackLine
          }
        });
        setIsLoading(false);
      });
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(type);
    setTimeout(() => setCopiedTab(null), 2500);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === '8888') {
      sessionStorage.setItem('flybw_admin_auth', 'true');
      setIsUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white sketch-border text-center space-y-6">
        <Helmet>
          <title>內部營運管理 | 黑白飛 Fly B&W</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto sketch-border shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <Lock className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-2xl font-black">內部營運管理中心</h2>
          <p className="text-xs text-gray-500 mt-1">此為非公開內部行銷工作台，請輸入管理 PIN 碼解鎖</p>
        </div>
        <form onSubmit={handleUnlock} className="space-y-4">
          <div>
            <input
              type="password"
              value={pinInput}
              onChange={e => { setPinInput(e.target.value); setPinError(false); }}
              placeholder="請輸入 PIN 碼 (預設: 8888)"
              className="w-full px-4 py-3 border-2 border-black rounded-lg text-center font-mono tracking-widest text-lg outline-none focus:ring-2 focus:ring-black"
              autoFocus
            />
          </div>
          {pinError && (
            <p className="text-red-500 text-xs font-bold">
              ⚠️ PIN 碼不正確，請重新輸入！
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-black text-white font-black py-3 px-6 rounded-lg sketch-border hover:bg-gray-800 transition shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2"
          >
            <KeyRound className="w-4 h-4" /> 解鎖進入工作台
          </button>
        </form>
      </div>
    );
  }

  const currentText = postData ? postData.posts[activeTab] : '';

  return (
    <>
      <Helmet>
        <title>每日自動發文工作台 ✕ 社群推廣中心 | 黑白飛 Fly B&W</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8 py-6">
        {/* 頂部標題 */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-1 text-xs font-black uppercase sketch-border rotate-[-1deg] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            社群流量自動化飛輪
          </div>
          <h1 className="text-3xl md:text-4xl font-black">
            📢 每日自動發文工作台
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            每天 08:30 自動整合最新機票真實行情與精選攻略，一鍵複製 3 大社群高轉化爆款文案，輕鬆獲取精準旅遊客群！
          </p>
        </div>

        {/* 今日即時情資摘要看板 */}
        {postData && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-white p-3 sketch-border border border-black shadow-xs">
              <div className="text-xs text-gray-500 font-bold">今日基準日</div>
              <div className="text-base font-black text-black">{postData.date}</div>
            </div>
            <div className="bg-white p-3 sketch-border border border-black shadow-xs">
              <div className="text-xs text-gray-500 font-bold">東京成田/羽田</div>
              <div className="text-base font-black text-emerald-600">
                NT$ {postData.prices.tokyo.price.toLocaleString()} ({postData.prices.tokyo.status})
              </div>
            </div>
            <div className="bg-white p-3 sketch-border border border-black shadow-xs">
              <div className="text-xs text-gray-500 font-bold">釜山金海</div>
              <div className="text-base font-black text-red-600">
                NT$ {postData.prices.busan.price.toLocaleString()} ({postData.prices.busan.status})
              </div>
            </div>
            <div className="bg-white p-3 sketch-border border border-black shadow-xs">
              <div className="text-xs text-gray-500 font-bold">首爾 / 大阪</div>
              <div className="text-base font-black text-indigo-600">
                NT$ {postData.prices.seoul.price.toLocaleString()} 起
              </div>
            </div>
          </div>
        )}

        {/* 平台切換分頁 */}
        <div className="bg-white p-6 sketch-border border-2 border-black space-y-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap gap-2 border-b-2 border-black pb-4">
            <button
              onClick={() => setActiveTab('threads')}
              className={`px-4 py-2 font-black text-sm transition-all sketch-border cursor-pointer flex items-center gap-2 ${
                activeTab === 'threads'
                  ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              🧵 Threads / IG 爆款文案
              <span className="text-xs bg-red-500 text-white px-1.5 py-0.2 rounded-full font-bold">最吸睛</span>
            </button>

            <button
              onClick={() => setActiveTab('facebook')}
              className={`px-4 py-2 font-black text-sm transition-all sketch-border cursor-pointer flex items-center gap-2 ${
                activeTab === 'facebook'
                  ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              📘 Facebook 社團 / 粉專深度文
            </button>

            <button
              onClick={() => setActiveTab('line')}
              className={`px-4 py-2 font-black text-sm transition-all sketch-border cursor-pointer flex items-center gap-2 ${
                activeTab === 'line'
                  ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              💬 LINE 官方帳號推播 / VOOM
            </button>
          </div>

          {/* 文案預覽與複製區 */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-neutral-50 p-3 sketch-border border border-black">
              <div className="text-xs text-gray-700 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-black" />
                <span>文案特點：</span>
                <span className="font-bold text-black">
                  {activeTab === 'threads' && '短小精悍、反直覺痛點、內嵌「留言 +1」互動誘餌（推薦直接貼在 Threads）'}
                  {activeTab === 'facebook' && '排版精緻、完整價格行情對比、條理清晰（適合貼在日本自由行討論社團）'}
                  {activeTab === 'line' && '官方口吻、專屬福利通知、引導點擊領取手帳'}
                </span>
              </div>

              <button
                onClick={() => handleCopy(currentText, activeTab)}
                className={`w-full sm:w-auto px-5 py-2.5 font-black text-sm sketch-border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  copiedTab === activeTab
                    ? 'bg-emerald-600 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-yellow-300 hover:bg-yellow-400 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {copiedTab === activeTab ? (
                  <>
                    <Check className="w-4 h-4" />
                    已成功複製文案！
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    一鍵複製此文案 ➔
                  </>
                )}
              </button>
            </div>

            {/* 文字預覽框 */}
            <div className="relative">
              <textarea
                readOnly
                value={currentText}
                rows={14}
                className="w-full p-4 font-mono text-xs md:text-sm bg-neutral-900 text-green-400 sketch-border border-2 border-black rounded leading-relaxed focus:outline-none select-all"
              />
            </div>

            {/* 快速直達社群發文按鈕 */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <span className="text-xs text-gray-500 font-bold">複製後直接開啟：</span>
              {activeTab === 'threads' && (
                <a
                  href="https://www.threads.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-bold rounded sketch-border hover:opacity-80"
                >
                  前往 Threads 發布 <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {activeTab === 'facebook' && (
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2] text-white text-xs font-bold rounded sketch-border hover:opacity-80"
                >
                  前往 Facebook 發布 <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {activeTab === 'line' && (
                <a
                  href="https://manager.line.biz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#06C755] text-white text-xs font-bold rounded sketch-border hover:opacity-80"
                >
                  開啟 LINE 官方管理後台 <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 爆款技巧秘訣指南 */}
        <section className="bg-yellow-50 p-6 sketch-border border-2 border-black space-y-4">
          <h3 className="text-lg font-black text-black flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-yellow-700" />
            社群演算法自動推廣黃金 3 鐵則（如何達成破萬瀏覽？）
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-xs text-gray-800">
            <div className="bg-white p-3.5 sketch-border">
              <div className="font-bold text-black mb-1">1. 善用「留言 +1」演算法引爆</div>
              <p className="text-gray-600">
                社群平台（特別是 Threads）最喜歡留言互動率高的貼文。文案結尾一定要附上「留言 +1 私訊發避坑手帳」，只要累積 10 則留言，系統就會自動推播給上千位陌生旅客！
              </p>
            </div>
            <div className="bg-white p-3.5 sketch-border">
              <div className="font-bold text-black mb-1">2. 鎖定黃金發文時間</div>
              <p className="text-gray-600">
                最佳發文時段為平日<strong>通勤時段（08:00~09:00）</strong>與<strong>夜間放鬆時段（20:30~22:30）</strong>。上班族在捷運上刷手機看到甜甜價機票，點擊率最高。
              </p>
            </div>
            <div className="bg-white p-3.5 sketch-border">
              <div className="font-bold text-black mb-1">3. 沉澱至 LINE 私域名單</div>
              <p className="text-gray-600">
                網友留言 +1 後，引導他們加入 LINE 官方帳號（`@349bnumb`）。一旦成為好友，未來每次有大促銷就能免費群發，打造屬於您的長期客群池！
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
