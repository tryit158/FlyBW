import { motion } from 'motion/react';
import { useState } from 'react';
import { articlesData } from '../data/articles';

export default function FeaturedArticle() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (expandedId) {
    const article = articlesData.find(a => a.id === expandedId);
    if (!article) return null;

    return (
      <section id="article" className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold inline-block sketch-border px-6 py-2 bg-white">📝 編輯精選專欄</h2>
        </div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sketch-border bg-white p-8 md:p-12 max-w-3xl mx-auto relative"
        >
          {/* Back Button */}
          <button 
            onClick={() => setExpandedId(null)}
            className="absolute -top-5 left-4 md:left-8 sketch-border bg-white px-4 py-1 font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 z-10"
          >
            &larr; 返回文章列表
          </button>

          {/* Decorative Tape */}
          <div className="absolute -top-4 right-8 w-24 h-8 bg-gray-200 opacity-50 rotate-6 sketch-border hidden md:block"></div>

          <header className="mb-8 border-b-2 border-dashed border-gray-300 pb-6 text-center mt-4 md:mt-0">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-4" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
            <div className="flex items-center justify-center gap-4 text-sm font-bold text-gray-500 font-hand">
              <span>By {article.author}</span>
              <span>•</span>
              <span>閱讀時間：{article.readTime}</span>
            </div>
          </header>

          <div className="mb-8">
            <img 
              src={article.image} 
              alt={article.imageAlt} 
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover sketch-border shadow-md"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            {article.content}
          </div>
        </motion.article>
      </section>
    );
  }

  return (
    <section id="article" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold inline-block sketch-border px-6 py-2 bg-white">📝 編輯精選專欄</h2>
        <p className="text-gray-600">三分鐘讀懂，拒當機票冤大頭！</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {articlesData.map((article, idx) => (
          <motion.div 
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="sketch-border bg-white p-6 flex flex-col h-full group cursor-pointer sketch-border-hover relative"
            onClick={() => setExpandedId(article.id)}
          >
            {/* Decorative Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-200 opacity-50 rotate-2 sketch-border z-10"></div>

            <div className="mb-4 overflow-hidden sketch-border">
              <img 
                src={article.image} 
                alt={article.imageAlt} 
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <h3 className="text-xl font-bold mb-2 leading-snug group-hover:text-gray-600 transition-colors" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
            
            <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-dashed border-gray-200">
              <span className="text-xs font-bold text-gray-400 font-hand">{article.readTime}</span>
              <span className="text-sm font-bold underline decoration-wavy underline-offset-4 group-hover:text-gray-500">
                閱讀全文 &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
