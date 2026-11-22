import { useState } from 'react';
import { MessageCircle, X, Sparkles, Download, Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingLineWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('@349bnumb');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* 浮動按鈕 (右下角) */}
      <aside aria-label="LINE 諮詢與手帳領取" className="fixed bottom-6 right-6 z-40 print:hidden">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#06C755] hover:bg-[#05b34c] text-white p-3.5 md:px-5 md:py-3.5 sketch-border border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-2 transition-transform font-black text-sm cursor-pointer"
          aria-label="開啟 LINE 諮詢與手帳領取視窗"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#06C755]" />
          <span className="hidden sm:inline">LINE 諮詢 ✕ 免費手帳</span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
          </span>
        </motion.button>
      </aside>

      {/* 展開之浮動導流卡片 */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-22 right-6 z-40 max-w-sm w-[calc(100vw-3rem)] print:hidden">
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="bg-white sketch-border border-3 border-black p-5 shadow-2xl space-y-4 relative"
            >
              {/* 關閉叉叉 */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-black p-1 font-bold text-sm"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">
                  ✈️
                </div>
                <div>
                  <h4 className="font-black text-base text-gray-900 leading-tight">
                    黑白飛 Fly B&W 官方 LINE
                  </h4>
                  <p className="text-xs text-gray-500">日韓旅遊避坑 ✕ 懶人行程小幫手</p>
                </div>
              </div>

              {/* 核心福利 */}
              <div className="bg-emerald-50/80 p-3 sketch-border border border-emerald-800/30 text-xs text-emerald-950 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>加入好友即享 3 大免費好康：</span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-emerald-900">
                  <li>2026 最新列印版著色行李清單 PDF</li>
                  <li>東京/關西/首爾/富國島 Google Maps 景點地圖釘選包</li>
                  <li>出國行李被刁難或行程卡關？真人一對一私訊諮詢</li>
                </ul>
              </div>

              {/* ID 複製與直達 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-gray-50 p-2 sketch-border border border-black/30 text-xs">
                  <span className="text-gray-500 font-bold">官方 LINE ID：</span>
                  <span className="font-mono font-black text-sm">@349bnumb</span>
                  <button
                    onClick={handleCopy}
                    className="p-1 px-2 bg-black text-white text-[11px] font-bold sketch-border hover:bg-gray-800 transition-colors flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? '已複製' : '複製'}</span>
                  </button>
                </div>

                <a
                  href="https://line.me/R/ti/p/@349bnumb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-sm py-2.5 sketch-border flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#06C755]" />
                  <span>開啟 LINE 立即加入好友</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
