import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { articlesData, CATEGORIES } from '../data/articles';
import { Link, useSearchParams } from 'react-router-dom';
import { Library, BookOpen, Sparkles } from 'lucide-react';

export default function ArticlesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All';
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const articlesPerPage = 6;

  const filteredArticles = useMemo(() => {
    if (currentCategory === 'All') return articlesData;
    return articlesData.filter(a => a.category === currentCategory);
  }, [currentCategory]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  const handleCategoryClick = (category: string) => {
    setSearchParams(category === 'All' ? {} : { category });
  };

  const handlePageChange = (newPage: number) => {
    const newParams: Record<string, string> = { page: newPage.toString() };
    if (currentCategory !== 'All') newParams.category = currentCategory;
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTitle = currentCategory === 'All' 
    ? '日韓廉航攻略與旅遊避坑專欄文章庫 | 黑白飛 Fly B&W'
    : `【${currentCategory}】旅遊專欄攻略文章 | 黑白飛 Fly B&W`;

  const pageDescription = '匯整黑白飛全系列日韓廉航特價觀測、行李超重避雷、桃機免費設施、日本空手觀光、外幣換匯與各國最新入境規定，專為小資族量身打造的精選指南。';

  // CollectionPage Schema.org 結構化資料
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": "https://flybw.qzz.io/articles",
    "isPartOf": {
      "@type": "WebSite",
      "name": "黑白飛 Fly B&W",
      "url": "https://flybw.qzz.io"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": currentArticles.map((article, idx) => ({
        "@type": "ListItem",
        "position": (currentPage - 1) * articlesPerPage + idx + 1,
        "url": `https://flybw.qzz.io/articles/${article.id}`,
        "name": article.title.replace(/<[^>]+>/g, '')
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://flybw.qzz.io/articles" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://flybw.qzz.io/articles" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="黑白飛 Fly B&W" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify(collectionSchema)}
        </script>
      </Helmet>

      <section className="space-y-8 animate-in fade-in duration-500">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold inline-flex items-center gap-3 sketch-border px-8 py-3 bg-white">
            <Library className="w-8 h-8" /> 探索文章
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            從行程規劃、便宜機票到最新交通情報，所有你需要的旅遊攻略都在這裡。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => handleCategoryClick('All')}
            className={`px-5 py-2 font-bold sketch-border transition-colors text-sm md:text-base ${currentCategory === 'All' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
          >
            全部文章 ({articlesData.length})
          </button>
          {CATEGORIES.map(category => {
            const count = articlesData.filter(a => a.category === category).length;
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-5 py-2 font-bold sketch-border transition-colors text-sm md:text-base border-2 ${currentCategory === category ? 'bg-indigo-600 text-white border-indigo-800' : 'bg-white text-black hover:bg-gray-100 border-black'}`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        {currentArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentArticles.map((article, idx) => (
              <Link to={`/articles/${article.id}`} key={article.id} className="block h-full group">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="sketch-border bg-white p-5 flex flex-col h-full sketch-border-hover relative"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-200 opacity-50 rotate-3 sketch-border z-10 hidden md:block"></div>
                  
                  <div className="mb-4 overflow-hidden sketch-border relative border-2 border-black border-r-4 border-b-4 h-48"> 
                    <div className="absolute top-2 left-2 bg-indigo-600 text-white font-bold px-2 py-1 text-xs sketch-border -rotate-[2deg] z-10 shadow-sm">
                        {article.category}
                      </div>
                    {article.badge && (
                      <div className="absolute top-2 right-2 bg-black text-white font-bold px-3 py-1 text-xs sketch-border rotate-[5deg] z-10 shadow-sm">
                        {article.badge}
                      </div>
                    )}
                    <img 
                      src={article.image} 
                      alt={article.imageAlt} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-indigo-700 transition-colors line-clamp-2" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-dashed border-gray-200 text-sm">
                    <span className="font-bold text-gray-500">{article.author}</span>
                    <span className="font-bold text-indigo-600 underline decoration-wavy underline-offset-2">閱讀全文 &rarr;</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 sketch-border max-w-2xl mx-auto">
            <p className="text-xl font-bold text-gray-500">這個分類目前還沒有文章喔！</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12 pt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 sketch-border bg-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              &larr; 上一頁
            </button>
            
            <div className="font-bold text-lg">
              {currentPage} / {totalPages}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 sketch-border bg-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              下一頁 &rarr;
            </button>
          </div>
        )}
      </section>
    </>
  );
}
