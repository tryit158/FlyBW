import { motion } from 'motion/react';
import { Printer } from 'lucide-react';

const checklistItems = [
  { category: '重要文件', items: ['護照 (效期>6個月)', '機票行程單', '住宿確認信', '日幣/韓元現金', '信用卡 (海外回饋高)'] },
  { category: '電子產品', items: ['手機 & 充電線', '行動電源 (放手提)', '萬用轉接頭', '網卡/eSIM', '相機 & 備用電池'] },
  { category: '衣物與盥洗', items: ['換洗衣物', '好走的鞋子', '外套/保暖衣物', '牙刷/牙膏 (環保)', '保養品/化妝品'] },
  { category: '其他好物', items: ['常備藥品', '雨傘/輕便雨衣', '環保袋', '太陽眼鏡', '旅遊平安險證明'] },
];

export default function Checklist() {
  return (
    <section id="checklist" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold inline-block sketch-border px-6 py-2 bg-white">出國行李檢查表</h2>
        <p className="text-gray-600">印出來自己塗色！打勾勾就不會忘記帶東西啦～</p>
      </div>

      <div className="sketch-border bg-white p-8 relative max-w-3xl mx-auto">
        {/* Decorative tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-200 opacity-50 rotate-2 sketch-border"></div>
        
        <div className="flex justify-between items-end mb-8 border-b-4 border-black pb-4">
          <div>
            <h3 className="text-2xl font-bold font-hand">My Travel Checklist</h3>
            <p className="text-sm font-hand mt-1">Destination: _______________</p>
          </div>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 sketch-border px-4 py-2 hover:bg-gray-100 transition-colors font-bold text-sm"
          >
            <Printer className="w-4 h-4" />
            列印清單
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {checklistItems.map((group) => (
            <div key={group.category} className="space-y-3">
              <h4 className="text-lg font-bold bg-gray-100 inline-block px-2 py-1 sketch-border">{group.category}</h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-hand text-lg">
                    <div className="w-5 h-5 sketch-border shrink-0 cursor-pointer hover:bg-gray-200 transition-colors"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Affiliate Links Section */}
        <div className="mt-12 pt-6 border-t-2 border-dashed border-gray-300">
          <p className="text-center font-bold mb-4">出國必備推薦 (買了再打勾！)</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://klook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              title="購買出國上網吃到飽網卡或eSIM"
              className="sketch-border px-6 py-3 text-center font-bold hover:bg-gray-100"
            >
              📱 吃到飽網卡 / eSIM
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://kkday.com" 
              target="_blank" 
              rel="noopener noreferrer"
              title="購買旅遊不便險與平安險"
              className="sketch-border px-6 py-3 text-center font-bold hover:bg-gray-100"
            >
              🛡️ 旅遊不便險 / 平安險
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
