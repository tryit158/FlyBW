import { Plane } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pb-6 border-b-2 border-black border-dashed mt-4 md:mt-0">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left w-full md:w-auto">
        <motion.div
          whileHover={{ rotate: -15, scale: 1.1, x: -5, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-1 md:p-2 sketch-border bg-white"
        >
          <Plane className="w-8 h-8 stroke-[1.5]" />
        </motion.div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-wider leading-tight">
            <span className="sr-only">日韓廉航機票比價與旅遊指南 - </span>
            黑白飛
          </h1>
          <p className="text-xs md:text-sm tracking-widest uppercase">Fly B&W</p>
        </div>
      </div>
      <nav className="flex gap-2 md:gap-6 text-sm md:text-lg font-bold flex-wrap justify-center bg-white sketch-border px-3 md:px-4 py-2 mt-2 md:mt-0 border-2 border-black border-r-4 border-b-4 w-full md:w-auto">
        <a href="#observatory" className="hover:underline decoration-wavy underline-offset-4 flex-shrink-0">本日票價</a>
        <a href="#article" className="hover:underline decoration-wavy underline-offset-4 flex-shrink-0">必讀攻略</a>
        <a href="#baggage" className="hover:underline decoration-wavy underline-offset-4 flex-shrink-0">行李圖解</a>
        <a href="#calendar" className="hover:underline decoration-wavy underline-offset-4 hidden md:inline-block">行事曆</a>
        <a href="#checklist" className="hover:underline decoration-wavy underline-offset-4 flex-shrink-0">清單下載</a>
      </nav>
    </header>
  );
}
