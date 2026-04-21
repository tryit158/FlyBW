import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import defaultPriceData from '../data/dailyPrices.json';
import { Telescope } from 'lucide-react';
import Papa from 'papaparse';

// ===== 教學設定重點 =====
// 將您的 Google 試算表發布到網路後，請將 CSV 網址貼在下方引號內
// (若保持為空白，則會自動讀取原 json 檔)
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0TTBXWhSUVFw2L5jF80IoxS_eswnOwpCSSSXPt1AW1haaXl0OBQIEH7IHaQTqPtYS5KbFvh_vBF-3/pub?output=csv";

const getRotation = (status: string) => {
  switch (status) {
    case '激省': return -60;
    case '可入手': return 0;
    case '再等等': return 60;
    default: return 0;
  }
};

export default function PriceObservatory() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [priceData, setPriceData] = useState(defaultPriceData);

  useEffect(() => {
    if (!GOOGLE_SHEET_CSV_URL) return;

    Papa.parse(GOOGLE_SHEET_CSV_URL, {
      download: true,
      header: false,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const rows = results.data as any[][];
          // 支援有加表頭或沒加表頭的狀況：如果第一列第一格是 'city'，就把它過濾掉
          const dataRows = rows.filter(row => row[0] && row[0].toString().toLowerCase() !== 'city');

          const newDestinations = dataRows.map(row => ({
            city: row[0] || '未知',
            price: Number(row[1]) || 0,
            status: row[2] || '可入手',
            link: row[3] || '#'
          }));
          
          if (newDestinations.length > 0) {
            setPriceData({
              lastUpdated: new Date().toISOString().split('T')[0],
              destinations: newDestinations
            });
          }
        } catch (error) {
          console.error("解析 Google Sheet CSV 錯誤:", error);
        }
      }
    });
  }, []);

  return (
    <section id="observatory" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold inline-flex items-center gap-2 sketch-border px-6 py-2 bg-white">
          <Telescope className="w-6 h-6" /> 本日最低價觀測儀
        </h2>
        <p className="text-gray-600">看看今天的機票氣壓計，決定要不要手滑！</p>
        <p className="text-xs font-bold text-gray-400 mt-2">最後更新：{priceData.lastUpdated}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
        {/* Barometer Illustration */}
        <div className="relative flex justify-center items-center p-8 sketch-border bg-white">
          <svg viewBox="0 0 200 120" className="w-full max-w-xs">
            {/* Dial background */}
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 5" />
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeOpacity="0.1" strokeLinecap="round" />
            
            {/* Labels */}
            <text x="30" y="80" fontSize="12" fontWeight="bold" transform="rotate(-45 30 80)">激省</text>
            <text x="100" y="20" fontSize="12" fontWeight="bold" textAnchor="middle">可入手</text>
            <text x="170" y="80" fontSize="12" fontWeight="bold" transform="rotate(45 170 80)">再等等</text>

            {/* Needle */}
            <motion.g
              initial={{ rotate: 0 }}
              animate={{ 
                rotate: hoveredIndex !== null ? getRotation(priceData.destinations[hoveredIndex].status) : 0 
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              style={{ transformOrigin: "100px 100px" }}
            >
              <path d="M 95 100 L 100 30 L 105 100 Z" fill="#1a1a1a" />
              <circle cx="100" cy="100" r="8" fill="#1a1a1a" />
              <circle cx="100" cy="100" r="3" fill="#fff" />
            </motion.g>
          </svg>
        </div>

        {/* Prices */}
        <div className="grid grid-cols-2 gap-4">
          {priceData.destinations.map((dest, idx) => (
            <motion.a
              key={dest.city}
              href={dest.link}
              target="_blank"
              rel="noopener noreferrer"
              title={`前往查詢 ${dest.city} 便宜機票`}
              className="block sketch-border bg-white p-4 text-center cursor-pointer sketch-border-hover relative group overflow-hidden"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-bold mb-2">{dest.city}</h3>
              <div className="text-2xl font-bold mb-1">
                <span className="text-sm align-top">NT$</span>
                {dest.price.toLocaleString()}
              </div>
              <div className="text-sm font-bold border-t-2 border-dashed border-gray-300 pt-2 mt-2">
                {dest.status}
              </div>
              
              {/* Hover Animation Element (Plane taking off) */}
              <motion.div 
                className="absolute -bottom-8 -right-8 opacity-0 group-hover:opacity-100"
                initial={{ x: -20, y: 20, opacity: 0 }}
                whileHover={{ x: -40, y: -40, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5.5-4 4-2.5-.5-1.5 1.5 4 2 2 4 1.5-1.5-.5-2.5 4-4 5.5 6l1.2-.7c.4-.2.7-.6.6-1.1z"/>
                </svg>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Early Bird Call to Action */}
      <div className="flex justify-center mt-8">
        <a 
          href="https://linkgo.one/s/ujSbR" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sketch-border bg-yellow-300 hover:bg-yellow-400 text-black px-8 py-4 font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative group"
        >
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rotate-12 sketch-border">Hot!</span>
          🎉 查看所有日韓早鳥優惠及早鳥票券 &rarr;
        </a>
      </div>
    </section>
  );
}
