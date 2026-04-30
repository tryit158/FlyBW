import { motion } from 'motion/react';
import { Info } from 'lucide-react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto sketch-border bg-white p-8 md:p-12 animate-in fade-in"
    >
      <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <Info className="w-8 h-8" /> 關於 黑白飛 Fly B&W
      </h1>

      <div className="space-y-6 text-lg leading-relaxed text-gray-800">
        <p>
          歡迎來到 <strong>黑白飛 Fly B&W</strong>。我們是一個專注於提供實用、真實且深度的旅行攻略與便宜機票資訊的平台。
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-dashed border-gray-300 pb-2">我們的使命</h2>
        <p>
          在資訊爆炸的時代，找尋便宜機票與正確的旅遊攻略變得越來越困難。我們的使命是「拒當機票冤大頭，讓每趟旅行都發揮最大價值」。透過系統化的資料整理與真實的編輯實測，我們希望幫助每一位旅行者省下時間與金錢。
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-dashed border-gray-300 pb-2">為何選擇我們？</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>真實不造假：</strong> 我們的文章皆由編輯團隊親身經歷或多方比對查證，拒絕農場文。</li>
          <li><strong>精準數據：</strong> 結合我們開發的觀測儀工具，為您追蹤機票價格變化。</li>
          <li><strong>獨家圖解：</strong> 複雜的行李限制、通關流程，我們都透過清晰可愛的黑白手繪風格為您圖解說明。</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-dashed border-gray-300 pb-2">編輯團隊</h2>
        <p>
          我們是一群熱愛旅行的工程師、設計師與文字工作者。我們相信美好的旅行體驗從小細節開始，希望能與您分享我們在旅途中看見的美好，與避開的雷區。
        </p>
      </div>
    </motion.div>
  );
}
