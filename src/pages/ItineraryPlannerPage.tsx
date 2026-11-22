import { Helmet } from 'react-helmet-async';
import AIItineraryPlanner from '../components/AIItineraryPlanner';
import { motion } from 'motion/react';
import { Sparkles, Compass, ShieldCheck, Map } from 'lucide-react';

export default function ItineraryPlannerPage() {
  return (
    <>
      <Helmet>
        <title>AI 智能行程規劃師 | 黑白飛 Fly B&W 日韓東南亞懶人客製路書</title>
        <meta name="description" content="黑白飛 AI 智能行程規劃師：不想動腦排行程？一鍵自選東京、關西、沖繩、首爾、釜山、富國島，自動生成順遊時間軸、在地避坑秘笈、門票比價與 Google Maps 景點包！" />
        <link rel="canonical" href="https://flybw.qzz.io/itinerary-planner" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI 智能行程規劃師 | 黑白飛 Fly B&W 日韓東南亞懶人客製路書" />
        <meta property="og:description" content="專為小資與親子設計！一秒產出東京、關西、首爾、富國島每日行程表、交通換乘與避坑秘笈。" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12 max-w-5xl mx-auto"
      >
        {/* 頂部導言 */}
        <div className="sketch-border bg-white p-6 md:p-8 border-2 border-black border-r-4 border-b-4 relative">
          <div className="absolute -top-3 left-6 bg-black text-white text-xs font-black px-3 py-1 sketch-border rotate-[-1deg]">
            2026 最新旅遊黑科技
          </div>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-3xl font-black mb-3 flex items-center gap-2">
              <Compass className="w-7 h-7 text-indigo-600" />
              黑白飛 ✕ 旅遊雙軌漏斗「AI 客製行程規劃專區」
            </h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              排行程查到眼花撩亂？帶著小孩怕行程太硬，帶著長輩怕樓梯太多？
              黑白飛編輯團隊結合<strong>多年日韓自由行實測大數據</strong>與<strong>AI 智能演算法</strong>，
              為您量身打造最順路、不繞路、避開排隊人潮的完美行程！
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t-2 border-dashed border-gray-200 text-xs font-bold text-gray-700">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>避雷官方實測核驗</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Map className="w-4 h-4 text-blue-600" />
              <span>最佳地鐵動線規劃</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>秒導出 Google Maps</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-mono font-black text-sm">LINE</span>
              <span>支援真人免費諮詢</span>
            </div>
          </div>
        </div>

        {/* 核心 AI 行程組件 */}
        <AIItineraryPlanner />
      </motion.div>
    </>
  );
}
