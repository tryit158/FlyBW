import { motion } from 'motion/react';
import { Gift, Flower2, Wind, CloudRain, Sun, Leaf, TreeDeciduous } from 'lucide-react';
import { ReactNode } from 'react';

const months: { month: string; event: string; type: string; desc: string; icon: ReactNode }[] = [
  { month: '2月', event: '農曆新年', type: '避開', desc: '機票最貴，人擠人', icon: <Gift className="w-8 h-8 text-red-500" /> },
  { month: '4月', event: '櫻花季', type: '旺季', desc: '提早半年買機票', icon: <Flower2 className="w-8 h-8 text-pink-500" /> },
  { month: '5月', event: '日本黃金週', type: '避開', desc: '日本國旅大爆發', icon: <Wind className="w-8 h-8 text-blue-500" /> },
  { month: '6月', event: '梅雨季', type: '便宜', desc: '機票便宜，適合室內行程', icon: <CloudRain className="w-8 h-8 text-gray-500" /> },
  { month: '8月', event: '暑假', type: '避開', desc: '機票貴，天氣炎熱', icon: <Sun className="w-8 h-8 text-orange-500" /> },
  { month: '10月', event: '楓葉季', type: '旺季', desc: '秋高氣爽，提早卡位', icon: <Leaf className="w-8 h-8 text-red-600" /> },
  { month: '11月', event: '淡季', type: '便宜', desc: '賞楓後、滑雪前，最划算', icon: <TreeDeciduous className="w-8 h-8 text-amber-600" /> },
];

export default function TravelCalendar() {
  return (
    <section id="calendar" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold inline-block sketch-border px-6 py-2 bg-white">2026 日韓旅遊行事曆</h2>
        <p className="text-gray-600">什麼時候去最便宜？跟著這張表買機票</p>
      </div>

      <div className="sketch-border bg-white p-6 md:p-8">
        <div className="grid gap-4">
          {months.map((m, idx) => (
            <motion.div 
              key={m.month}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-3 border-b-2 border-dashed border-gray-200 last:border-0 group"
            >
              <div className="w-16 h-16 shrink-0 flex flex-col items-center justify-center sketch-border bg-gray-50 group-hover:bg-gray-100 transition-colors">
                <span className="text-sm font-bold mb-1">{m.month}</span>
                {m.icon}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold">{m.event}</h3>
                  <span className={`text-xs px-2 py-0.5 sketch-border font-bold ${
                    m.type === '避開' ? 'bg-gray-800 text-white' : 
                    m.type === '便宜' ? 'bg-gray-100' : 'bg-white'
                  }`}>
                    {m.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{m.desc}</p>
              </div>
              <div className="hidden md:block">
                <a 
                  href="https://linkgo.one/s/ujSbR" 
                  target="_blank" 
                  rel="noopener"
                  title={`${m.month}${m.event}早鳥票券`}
                  className="text-sm font-bold underline decoration-wavy underline-offset-4 hover:text-gray-600 truncate"
                >
                  早鳥票券 &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://onelink.one/s/j7GYr" 
            target="_blank" 
            rel="noopener"
            title="查看所有早鳥優惠票券與行程"
            className="inline-block sketch-border px-8 py-3 font-bold hover:bg-gray-100 transition-colors"
          >
            查看所有早鳥優惠
          </a>
        </div>
      </div>
    </section>
  );
}
