import PriceObservatory from '../components/PriceObservatory';
import BaggageGuide from '../components/BaggageGuide';
import TravelCalendar from '../components/TravelCalendar';
import Checklist from '../components/Checklist';
import { articlesData } from '../data/articles';
import { Link } from 'react-router-dom';
import { PenTool } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo } from 'react';

export default function Home() {
  const previewArticles = useMemo(() => {
    // 優先顯示沖繩相關文章 (article-3: 沖繩 5 天 4 夜, article-7: Okinawa Fun Pass)
    const okinawaArticles = articlesData.filter(a => a.id === 'article-3' || a.id === 'article-7');
    const otherArticles = articlesData.filter(a => a.id !== 'article-3' && a.id !== 'article-7');
    return [...okinawaArticles, ...otherArticles].slice(0, 4);
  }, []);

  return (
    <>
      <div className="print:hidden" id="observatory"><PriceObservatory /></div>
      
      <section id="article" className="space-y-8 print:hidden">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold inline-flex items-center gap-2 sketch-border px-6 py-2 bg-white">
            <PenTool className="w-6 h-6" /> 編輯精選專欄
          </h2>
          <p className="text-gray-600">三分鐘讀懂，拒當機票冤大頭！</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {previewArticles.map((article, idx) => (
            <Link to={`/articles/${article.id}`} key={article.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sketch-border bg-white p-6 flex flex-col h-full group sketch-border-hover relative"
              >
                {/* Decorative Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-200 opacity-50 rotate-2 sketch-border z-10"></div>

                <div className="mb-4 overflow-hidden sketch-border relative border-2 border-black border-r-4 border-b-4">
                  {article.badge && (
                    <div className="absolute top-2 right-2 bg-black text-white font-bold px-3 py-1 text-xs sketch-border rotate-[5deg] z-10 shadow-sm">
                      {article.badge}
                    </div>
                  )}
                  <img 
                    src={article.image} 
                    alt={article.imageAlt} 
                    referrerPolicy="no-referrer"
                    className="w-full h-48 md:h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug group-hover:text-gray-600 transition-colors line-clamp-2" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
                
                <p className="text-gray-600 text-sm md:text-base mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-dashed border-gray-200">
                  <span className="text-xs font-bold text-gray-400 font-hand">{article.readTime}</span>
                  <span className="text-sm font-bold underline decoration-wavy underline-offset-4 group-hover:text-gray-500">
                    閱讀全文 &rarr;
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 pt-4">
          <Link to="/articles" className="inline-block bg-black text-white font-bold text-lg px-8 py-3 sketch-border hover:bg-gray-800 transition-colors">
            查看更多精選文章 &rarr;
          </Link>
        </div>
      </section>

      <div className="print:hidden" id="baggage"><BaggageGuide /></div>
      <div className="print:hidden" id="calendar"><TravelCalendar /></div>
      <div id="checklist"><Checklist /></div>
    </>
  );
}
