import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { articlesData, AffiliateFooter } from '../data/articles';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articlesData.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const cleanTitle = article.title.replace(/<[^>]+>/g, '');
  const url = `https://flybw.com/articles/${article.id}`; // 假設的網站網址

  // 結構化資料 (JSON-LD) 用於有助 SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": cleanTitle,
    "image": [
      article.image
    ],
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "黑白飛 Fly B&W",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flybw.com/logo.png"
      }
    },
    "description": article.excerpt,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <>
      <Helmet>
        <title>{cleanTitle} | 黑白飛 Fly B&W</title>
        <meta name="description" content={article.excerpt} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={cleanTitle} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={article.image} />
        <meta property="og:site_name" content="黑白飛 Fly B&W" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={cleanTitle} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />

        {/* 結構化資料 (Schema.org JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sketch-border bg-white p-8 md:p-12 max-w-3xl mx-auto relative animate-in fade-in"
      >
        <Link 
          to="/articles"
          className="absolute -top-5 left-4 md:left-8 sketch-border bg-white px-4 py-1 font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 z-10"
        >
          &larr; 返回文章列表
        </Link>

        {/* Breadcrumb - 麵包屑導覽也有助於 SEO */}
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500 font-bold hidden md:block mt-8">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-black">首頁</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/articles" className="hover:text-black">專欄文章</Link>
            </li>
            <li>/</li>
            <li aria-current="page" className="text-black overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]" title={cleanTitle}>
              {cleanTitle}
            </li>
          </ol>
        </nav>

        <div className="absolute -top-4 right-8 w-24 h-8 bg-gray-200 opacity-50 rotate-6 sketch-border hidden md:block"></div>

        <header className="mb-8 border-b-2 border-dashed border-gray-300 pb-6 text-center mt-4 md:mt-0">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4" dangerouslySetInnerHTML={{ __html: article.title }}></h1>
          <div className="flex items-center justify-center gap-4 text-sm font-bold text-gray-500 font-hand flex-wrap">
            <span className="bg-gray-100 px-3 py-1 sketch-border text-black">{article.category}</span>
            <span>By {article.author}</span>
            <span>•</span>
            <span>閱讀時間：{article.readTime}</span>
          </div>
        </header>

        <div className="mb-10 relative">
          {article.badge && (
            <div className="absolute -top-3 -right-3 bg-black text-white font-bold px-4 py-2 sketch-border rotate-[5deg] z-10 shadow-sm text-sm">
              {article.badge}
            </div>
          )}
          <img 
            src={article.image} 
            alt={article.imageAlt} 
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[500px] object-cover sketch-border shadow-md grayscale"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-gray-800 markdown-body">
          {article.content}
        </div>

        <footer className="mt-16 pt-8 border-t-2 border-black border-dashed">
          <AffiliateFooter />
        </footer>
      </motion.article>
    </>
  );
}
