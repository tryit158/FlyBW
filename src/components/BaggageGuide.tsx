import { motion } from 'motion/react';

const TigerairPlane = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <g transform="rotate(-15 50 50)">
      <path d="M 20 55 L 75 55 C 85 55 90 50 90 45 C 90 40 85 35 75 35 L 25 35 Z" />
      <path d="M 75 35 C 80 35 85 38 85 45 L 75 45 Z" fill="#1a1a1a" />
      <path d="M 25 35 L 15 15 L 35 15 L 40 35" />
      <path d="M 40 55 L 30 75 L 55 75 L 60 55" />
      <rect x="45" y="55" width="15" height="10" rx="5" />
      {/* Tiger Stripes */}
      <path d="M 20 20 L 28 20 M 23 25 L 31 25 M 26 30 L 34 30" strokeWidth="3" />
    </g>
  </svg>
);

const PeachPlane = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <g transform="rotate(-15 50 50)">
      <path d="M 20 55 L 75 55 C 85 55 90 50 90 45 C 90 40 85 35 75 35 L 25 35 Z" />
      <path d="M 75 35 C 80 35 85 38 85 45 L 75 45 Z" fill="#1a1a1a" />
      <path d="M 25 35 L 15 15 L 35 15 L 40 35" />
      <path d="M 40 55 L 30 75 L 55 75 L 60 55" />
      <rect x="45" y="55" width="15" height="10" rx="5" />
      {/* Peach Heart/Leaf */}
      <path d="M 25 20 C 22 17 18 20 20 24 L 25 28 L 30 24 C 32 20 28 17 25 20 Z" fill="#1a1a1a" />
    </g>
  </svg>
);

const ScootPlane = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <g transform="rotate(-15 50 50)">
      <path d="M 20 55 L 75 55 C 85 55 90 50 90 45 C 90 40 85 35 75 35 L 25 35 Z" />
      <path d="M 75 35 C 80 35 85 38 85 45 L 75 45 Z" fill="#1a1a1a" />
      <path d="M 25 35 L 15 15 L 35 15 L 40 35" />
      <path d="M 40 55 L 30 75 L 55 75 L 60 55" />
      <rect x="45" y="55" width="15" height="10" rx="5" />
      {/* Scoot Circle/Swoosh */}
      <circle cx="25" cy="22" r="5" />
      <path d="M 25 22 L 30 17" strokeWidth="3" />
    </g>
  </svg>
);

import { Package, Briefcase, Lightbulb } from 'lucide-react';

const airlines = [
  {
    name: '虎航 Tigerair',
    weight: '10kg',
    size: '54 x 38 x 23 cm',
    items: '手提行李 + 隨身物品 (共2件)',
    planeSvg: <TigerairPlane />,
    desc: '可塞：5套夏裝、化妝包、筆電'
  },
  {
    name: '樂桃 Peach',
    weight: '7.0kg',
    size: '50 x 40 x 25 cm',
    items: '手提行李 + 隨身物品 (共2件)',
    planeSvg: <PeachPlane />,
    desc: '可塞：3套夏裝、小相機、隨身包'
  },
  {
    name: '酷航 Scoot',
    weight: '10kg',
    size: '54 x 38 x 23 cm',
    items: '手提行李 + 隨身物品 (共2件)',
    planeSvg: <ScootPlane />,
    desc: '可塞：5套夏裝、伴手禮空間'
  }
];

export default function BaggageGuide() {
  return (
    <section id="baggage" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold inline-flex items-center gap-2 sketch-border px-6 py-2 bg-white">
          <Briefcase className="w-6 h-6" /> 廉航手提行李圖解
        </h2>
        <p className="text-gray-600">7公斤到底能塞多少？各家規定一次看懂</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {airlines.map((airline, idx) => (
          <motion.div 
            key={airline.name}
            whileHover={{ y: -5 }}
            className="sketch-border bg-white p-6 relative overflow-hidden group"
          >
            {/* Mascot / Icon */}
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center sketch-border group-hover:rotate-12 transition-transform">
              {airline.planeSvg}
            </div>

            <h3 className="text-xl font-bold mb-4">{airline.name}</h3>
            
            {/* Suitcase Illustration */}
            <div className="flex justify-center my-6">
              <div className="relative">
                <svg width="100" height="120" viewBox="0 0 100 120" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="20" y="30" width="60" height="80" rx="8" />
                  <path d="M35 30 V 15 A 5 5 0 0 1 40 10 H 60 A 5 5 0 0 1 65 15 V 30" />
                  <line x1="30" y1="50" x2="70" y2="50" />
                  <line x1="30" y1="70" x2="70" y2="70" />
                  <line x1="30" y1="90" x2="70" y2="90" />
                </svg>
                {/* Weight Tag */}
                <motion.div 
                  initial={{ rotate: -10 }}
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute -right-6 top-10 bg-white sketch-border px-2 py-1 text-sm font-bold rotate-12 shadow-sm"
                >
                  {airline.weight}
                </motion.div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b-2 border-dashed border-gray-200 pb-1">
                <span className="font-bold">尺寸限制</span>
                <span>{airline.size}</span>
              </div>
              <div className="flex justify-between border-b-2 border-dashed border-gray-200 pb-1">
                <span className="font-bold">件數限制</span>
                <span>{airline.items}</span>
              </div>
              <div className="pt-2 font-bold text-gray-700 flex items-start gap-1">
                <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" /> 
                <span>{airline.desc}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
