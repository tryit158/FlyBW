import { Helmet } from 'react-helmet-async';
import PriceObservatory from '../components/PriceObservatory';
import AIPartnerMetadata from '../components/AIPartnerMetadata';
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
    // 優先顯示 2026 泰國免簽自由行、桃機外幣ATM換匯評比、出國伴手禮打包防雷、日本賞楓等精選文章
    const priorityIds = [
      'budget-airline-ticket-change-refund-rules-2026',
      'taoyuan-airport-free-showers-lounge-sleep-zones-2026',
      'japan-hands-free-travel-luggage-delivery-storage-2026',
      'thailand-bangkok-free-visa-travel-guide-2026',
      'taiwan-foreign-currency-exchange-atm-hacks-2026',
      'souvenir-packing-carry-on-vs-checked-baggage-rules-2026',
      'japan-autumn-leaves-2026',
      'summer-travel-trends-2026',
      'japan-tax-free-2026',
      'japan-suica-card-guide-2026',
      'article-tte-2026',
      'esim-usage-guide',
      'okinawa-typhoon-guide',
      'article-3',
      'article-7',
      'okinawa-family-churaumi-dino'
    ];
    const priorityArticles = articlesData.filter(a => priorityIds.includes(a.id));
    const otherArticles = articlesData.filter(a => !priorityIds.includes(a.id));
    
    // Sort priorityArticles based on their order in priorityIds
    priorityArticles.sort((a, b) => priorityIds.indexOf(a.id) - priorityIds.indexOf(b.id));
    
    return [...priorityArticles, ...otherArticles].slice(0, 6);
  }, []);

  return (
    <>
      <Helmet>
        <title>黑白飛 Fly B&W | 2026 日韓廉航攻略、特價觀測機與空手觀光指南</title>
        <meta name="description" content="黑白飛 Fly B&W 提供 2026 最新日韓廉航機票最低價觀測、虎航樂桃行李防超重避雷圖解、桃園機場免費淋浴睡眠區、日本超商寄行李空手觀光與可列印著色行李清單。" />
        <link rel="canonical" href="https://flybw.qzz.io/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <meta property="og:title" content="黑白飛 Fly B&W | 2026 日韓廉航攻略、特價觀測機與空手觀光指南" />
        <meta property="og:description" content="不想在機場被罰錢？虎航/樂桃/酷航改票改名防坑、桃機24H免費淋浴睡覺、日本超商寄行李，還有每日便宜機票大盤觀測！" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flybw.qzz.io/" />
        <meta property="og:site_name" content="黑白飛 Fly B&W" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="黑白飛 Fly B&W | 2026 日韓廉航攻略、特價觀測機與空手觀光指南" />
        <meta name="twitter:description" content="不想在機場被罰錢？虎航/樂桃/酷航改票改名防坑、桃機24H免費淋浴睡覺、日本超商寄行李，還有每日便宜機票大盤觀測！" />
      </Helmet>

      <div className="print:hidden" id="observatory"><PriceObservatory /></div>
      <div className="print:hidden"><AIPartnerMetadata /></div>
      
      <section id="article" className="space-y-8 print:hidden">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold inline-flex items-center gap-2 sketch-border px-6 py-2 bg-white">
            <PenTool className="w-6 h-6" /> 編輯精選專欄
          </h2>
          <p className="text-gray-600">三分鐘讀懂，拒當機票冤大頭！</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
