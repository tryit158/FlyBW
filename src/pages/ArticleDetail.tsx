import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { articlesData, AffiliateFooter } from '../data/articles';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articlesData.find(a => a.id === id);

  useEffect(() => {
    if (article) {
      document.title = `${article.title.replace(/<[^>]+>/g, '')} | 黑白飛 Fly B&W`;
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
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
          className="w-full h-auto max-h-[500px] object-cover sketch-border shadow-md"
        />
      </div>

      <div className="space-y-6 text-lg leading-relaxed text-gray-800 markdown-body">
        {article.content}
      </div>

      <footer className="mt-16 pt-8 border-t-2 border-black border-dashed">
        <AffiliateFooter />
      </footer>
    </motion.article>
  );
}
