import { motion } from 'motion/react';
import { Printer, Download, FileText, Smartphone, Shirt, Backpack, Plane, ShoppingBag, ShieldCheck, CheckCircle2 } from 'lucide-react';

const checklistItems = [
  { category: '重要文件', icon: <FileText className="w-5 h-5 inline-block mr-1"/>, items: ['護照 (效期>6個月)', '機票行程單', '住宿確認信', '日幣/韓元現金', '信用卡 (海外回饋高)'] },
  { category: '電子產品', icon: <Smartphone className="w-5 h-5 inline-block mr-1"/>, items: ['手機 & 充電線', '行動電源 (放手提)', '萬用轉接頭', '網卡/eSIM', '相機 & 備用電池'] },
  { category: '衣物與盥洗', icon: <Shirt className="w-5 h-5 inline-block mr-1"/>, items: ['換洗衣物', '好走的鞋子', '外套/保暖衣物', '牙刷/牙膏 (環保)', '保養品/化妝品'] },
  { category: '出遊小物', icon: <Backpack className="w-5 h-5 inline-block mr-1"/>, items: ['常備藥品', '輕便雨衣/雨傘', '環保購物袋', '太陽眼鏡/遮陽帽', '水壺'] },
];

export default function Checklist() {
  return (
    <section id="checklist" className="space-y-8 print:space-y-0 print:m-0 print:p-0">
      <div className="text-center space-y-2 print:hidden">
        <h2 className="text-3xl font-bold inline-block sketch-border px-6 py-2 bg-white">出國行李檢查表</h2>
        <p className="text-gray-600">專為親子設計！列印出來讓小孩學習整理行李並塗色吧～</p>
      </div>

      <div className="sketch-border bg-white p-8 relative max-w-4xl mx-auto print:p-6 print:border-black print:border-2 print:rounded-none">
        {/* Decorative tape - hide on print */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-200 opacity-50 rotate-2 sketch-border print:hidden"></div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b-4 border-black pb-4 gap-4">
          <div>
            <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Plane className="w-8 h-8" strokeWidth={2.5} />
              2026 日韓旅遊行李清單
            </h3>
            <p className="text-lg font-bold">小主人姓名：_________________</p>
          </div>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 sketch-border px-4 py-2 hover:bg-gray-100 transition-colors font-bold text-sm bg-yellow-100 print:hidden"
          >
            <Download className="w-5 h-5" />
            下載黑白著色版 (PDF)
          </button>
        </div>

        <div className="text-center mb-6 hidden print:block text-sm border-2 border-dashed border-gray-400 p-2">
          <strong>爸媽小叮嚀：</strong> 請讓小朋友自己檢查行李，有帶好的在框框內打勾 <CheckCircle2 className="inline-block w-4 h-4"/> ，邊整理還可以邊把圖案塗上喜歡的顏色喔！
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 print:grid-cols-2 print:gap-x-12">
          {checklistItems.map((group) => (
            <div key={group.category} className="space-y-4">
              <h4 className="text-xl font-bold bg-gray-100 inline-flex items-center px-3 py-1 sketch-border print:bg-transparent print:border-2 print:border-black">
                {group.icon} {group.category}
              </h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 font-bold text-lg">
                    <div className="w-6 h-6 border-2 border-black rounded-md shrink-0 cursor-pointer hover:bg-gray-200 transition-colors print:border-black relative">
                       {/* Space for checkmark filling */}
                    </div>
                    <span className="flex-1 border-b border-dashed border-gray-300 print:border-black">{item}</span>
                  </li>
                ))}
                {/* Empty slots for custom items */}
                <li className="flex items-center gap-4 font-bold text-lg">
                  <div className="w-6 h-6 border-2 border-black rounded-md shrink-0 print:border-black"></div>
                  <span className="flex-1 border-b border-dashed border-gray-300 print:border-black text-transparent">自訂物品</span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center hidden print:block">
           <h4 className="text-2xl font-bold mb-4">準備好出發去日本 / 韓國囉！</h4>
           <p className="text-gray-500 font-hand text-sm">Download more at flybw.com • © 黑白飛自助旅行</p>
        </div>

        {/* Affiliate Links Section - Only visible on web */}
        <div className="mt-12 pt-6 border-t-2 border-dashed border-gray-300 print:hidden">
          <p className="text-center font-bold mb-4 text-lg md:inline-flex items-center justify-center gap-2 w-full hidden md:flex">
            <ShoppingBag className="w-5 h-5"/> 爸媽看過來！出國神隊友裝備 (買了再打勾！)
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://afflink.one/s/J1H4B" 
              target="_blank" 
              rel="noopener"
              title="購買出國上網吃到飽網卡或eSIM"
              className="sketch-border px-4 py-3 text-center font-bold hover:bg-yellow-50 bg-white flex items-center justify-center gap-2 w-full md:w-auto text-sm md:text-base"
            >
              <Smartphone className="w-5 h-5 shrink-0" /> 亞洲多國上網網卡 / eSIM
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://afflink.one/s/RzcX0" 
              target="_blank" 
              rel="noopener"
              title="購買旅遊不便險與平安險"
              className="sketch-border px-4 py-3 text-center font-bold hover:bg-yellow-50 bg-white flex items-center justify-center gap-2 w-full md:w-auto text-sm md:text-base"
            >
              <ShieldCheck className="w-5 h-5 shrink-0" /> 海外旅遊不便險 / 平安險
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
