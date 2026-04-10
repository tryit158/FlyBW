import { Plane } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b-2 border-black border-dashed">
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: -15, scale: 1.1, x: -5, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-2 sketch-border bg-white"
        >
          <Plane className="w-8 h-8 stroke-[1.5]" />
        </motion.div>
        <div>
          <h1 className="text-3xl font-bold tracking-wider">
            <span className="sr-only">日韓廉航機票比價與旅遊指南 - </span>
            黑白飛
          </h1>
          <p className="text-sm font-bold tracking-widest uppercase">Fly B&W</p>
        </div>
      </div>
      <nav className="flex gap-6 text-lg font-bold flex-wrap justify-center">
        <a href="#observatory" className="hover:underline decoration-wavy underline-offset-4">本日票價</a>
        <a href="#article" className="hover:underline decoration-wavy underline-offset-4">必讀攻略</a>
        <a href="#baggage" className="hover:underline decoration-wavy underline-offset-4">行李圖解</a>
        <a href="#calendar" className="hover:underline decoration-wavy underline-offset-4">旅遊行事曆</a>
        <a href="#checklist" className="hover:underline decoration-wavy underline-offset-4">出國清單</a>
      </nav>
    </header>
  );
}
