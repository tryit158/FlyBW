import { Plane } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pb-6 border-b-2 border-black border-dashed mt-4 md:mt-0">
      <Link to="/" className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left w-full md:w-auto hover:opacity-80 transition-opacity">
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
      </Link>
      <nav className="flex gap-2 md:gap-6 text-sm md:text-lg font-bold flex-wrap justify-center bg-white sketch-border px-3 md:px-4 py-2 mt-2 md:mt-0 border-2 border-black border-r-4 border-b-4 w-full md:w-auto">
        <Link to="/#observatory" className="hover:underline decoration-wavy underline-offset-4 flex-shrink-0">本日票價</Link>
        <Link to="/articles" className="hover:underline decoration-wavy underline-offset-4 flex-shrink-0">必讀攻略</Link>
        <Link to="/#baggage" className="hover:underline decoration-wavy underline-offset-4 flex-shrink-0">行李圖解</Link>
        <Link to="/#calendar" className="hover:underline decoration-wavy underline-offset-4 hidden md:inline-block">行事曆</Link>
        <Link to="/#checklist" className="hover:underline decoration-wavy underline-offset-4 flex-shrink-0">清單下載</Link>
      </nav>
    </header>
  );
}
