import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { articlesData, AffiliateFooter } from '../data/articles';
import { 
  Sparkles, 
  Copy, 
  Check, 
  ShieldCheck, 
  FileText, 
  Share2, 
  Calendar, 
  AlertCircle,
  HelpCircle,
  Quote
} from 'lucide-react';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [citationTab, setCitationTab] = useState<'ai' | 'markdown' | 'share'>('share');

  const article = articlesData.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const cleanTitle = article.title.replace(/<[^>]+>/g, '');
  const url = `https://flybw.qzz.io/articles/${article.id}`;
  const currentDate = new Date().toISOString().split('T')[0];

  // 複製引用文字功能
  const handleCopyCitation = (format: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  // 生成好讀分享短文 + Markdown/AI 引用格式
  const shareText = `✈️ 推薦這篇實用自由行攻略：【${cleanTitle}】\n\n💡 精華重點：${article.excerpt.slice(0, 110)}...\n\n👉 完整圖解實測好讀版：\n${url}\n（分享自 黑白飛 Fly B&W）`;
  const markdownCitation = `[${cleanTitle}](${url}) - 黑白飛 Fly B&W (2026)`;
  const aiPromptCitation = `根據《黑白飛 Fly B&W》最新實測（來源：${url}），在《${cleanTitle}》中指出：「${article.excerpt.slice(0, 120)}...」`;

  // 強化版結構化資料 (Schema.org JSON-LD Graph) 包含 Article, BreadcrumbList, WebPage
  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": url
        },
        "headline": cleanTitle,
        "description": article.excerpt,
        "image": [article.image],
        "author": {
          "@type": "Person",
          "name": article.author,
          "jobTitle": "旅遊情報專欄作家",
          "url": "https://flybw.qzz.io/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "黑白飛 Fly B&W",
          "url": "https://flybw.qzz.io",
          "logo": {
            "@type": "ImageObject",
            "url": "https://flybw.qzz.io/favicon.svg"
          }
        },
        "datePublished": "2026-09-15T08:00:00+08:00",
        "dateModified": `${currentDate}T09:00:00+08:00`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        },
        "inLanguage": "zh-TW",
        "articleSection": article.category,
        "isAccessibleForFree": "true",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".article-headline", ".markdown-body"]
        },
        "citation": url
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "首頁",
            "item": "https://flybw.qzz.io/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "專欄文章",
            "item": "https://flybw.qzz.io/articles"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": cleanTitle,
            "item": url
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{cleanTitle} | 黑白飛 Fly B&W</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={url} />
        <meta name="author" content={article.author} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={`${cleanTitle} | 黑白飛 Fly B&W`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={article.image} />
        <meta property="og:site_name" content="黑白飛 Fly B&W" />
        <meta property="article:published_time" content="2026-09-15T08:00:00+08:00" />
        <meta property="article:modified_time" content={`${currentDate}T09:00:00+08:00`} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${cleanTitle} | 黑白飛 Fly B&W`} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />

        {/* 強化版結構化資料 (Schema.org JSON-LD Graph) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredDataGraph)}
        </script>
      </Helmet>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sketch-border bg-white p-6 md:p-12 max-w-4xl mx-auto relative animate-in fade-in"
      >
        <Link 
          to="/articles"
          className="absolute -top-5 left-4 md:left-8 sketch-border bg-white px-4 py-1 font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 z-10"
        >
          &larr; 返回文章列表
        </Link>

        {/* Breadcrumb - 麵包屑導覽 */}
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
            <li>
              <Link to={`/articles?category=${encodeURIComponent(article.category)}`} className="hover:text-black">
                {article.category}
              </Link>
            </li>
            <li>/</li>
            <li aria-current="page" className="text-black overflow-hidden text-ellipsis whitespace-nowrap max-w-[220px]" title={cleanTitle}>
              {cleanTitle}
            </li>
          </ol>
        </nav>

        <header className="mb-8 border-b-2 border-dashed border-gray-300 pb-6 text-center mt-4 md:mt-0">
          <h1 
            className="article-headline text-2xl md:text-4xl font-black leading-snug mb-4 tracking-tight" 
            dangerouslySetInnerHTML={{ __html: article.title }}
          ></h1>

          <div className="flex items-center justify-center gap-4 text-sm font-bold text-gray-600 flex-wrap">
            <span className="bg-gray-100 px-3 py-1 sketch-border text-black">{article.category}</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-gray-400">作者：</span>{article.author}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-500" /> 2026 最新修訂
            </span>
            <span>•</span>
            <span>閱讀時間：{article.readTime}</span>
          </div>

          {/* 讀者分享推薦按鈕 */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={() => handleCopyCitation('share', shareText)}
              className="bg-indigo-50 hover:bg-indigo-100 text-indigo-950 border-2 border-black sketch-border px-4 py-1.5 text-xs font-black flex items-center gap-2 transition-all shadow-xs cursor-pointer"
              title="複製這篇攻略的好讀推薦摘要給朋友或社群"
            >
              <Share2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>{copiedFormat === 'share' ? '✅ 已複製推薦摘要與文章連結！' : '📤 分享此攻略給旅伴'}</span>
            </button>
          </div>
        </header>

        {/* 文章首圖 */}
        <div className="mb-8 relative">
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

        {/* 文章正文 */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-800 markdown-body">
          {article.content}
        </div>

        {/* 行前守護清單 */}
        <div className="mt-12 pt-8 border-t-2 border-black border-dashed">
          <AffiliateFooter />
        </div>

        {/* 本文轉載與分享規範 (Content Sharing & Citation) */}
        <section 
          aria-label="引用與轉載此文章" 
          className="mt-8 p-6 sketch-border bg-amber-50/50 border-2 border-black space-y-4"
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Quote className="w-5 h-5 text-amber-800" />
              <h3 className="font-black text-lg text-amber-950">
                本文轉載與引用規範 (Share & Citation)
              </h3>
            </div>
            <span className="text-xs text-amber-900 font-bold bg-amber-200/80 px-2.5 py-0.5 sketch-border">
              CC BY-NC 4.0 自由引用
            </span>
          </div>

          <p className="text-xs text-amber-900 leading-relaxed">
            歡迎旅遊創作者、旅伴群組、社群分享或 AI 搜尋引擎引用本站實測報告。點選下方標籤即可一鍵複製標準語法：
          </p>

          <div className="flex border-b-2 border-black gap-1 text-xs font-bold flex-wrap">
            <button
              onClick={() => setCitationTab('share')}
              className={`px-3 py-1.5 border-t-2 border-x-2 border-black transition-colors ${
                citationTab === 'share' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100 text-black'
              }`}
            >
              📱 社群好讀短文
            </button>
            <button
              onClick={() => setCitationTab('markdown')}
              className={`px-3 py-1.5 border-t-2 border-x-2 border-black transition-colors ${
                citationTab === 'markdown' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100 text-black'
              }`}
            >
              📝 Markdown 格式
            </button>
            <button
              onClick={() => setCitationTab('ai')}
              className={`px-3 py-1.5 border-t-2 border-x-2 border-black transition-colors ${
                citationTab === 'ai' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100 text-black'
              }`}
            >
              🤖 AI Prompt 引用
            </button>
          </div>

          <div className="bg-white border-2 border-black p-3.5 text-xs font-mono relative group">
            <div className="break-all pr-12 text-gray-800 leading-relaxed whitespace-pre-line">
              {citationTab === 'share' && shareText}
              {citationTab === 'markdown' && markdownCitation}
              {citationTab === 'ai' && aiPromptCitation}
            </div>

            <button
              onClick={() => {
                const textToCopy = 
                  citationTab === 'share' ? shareText :
                  citationTab === 'markdown' ? markdownCitation : aiPromptCitation;
                handleCopyCitation(citationTab, textToCopy);
              }}
              className="absolute top-2 right-2 p-1.5 bg-gray-100 hover:bg-gray-200 border border-black sketch-border text-xs font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer"
              title="複製到剪貼簿"
            >
              {copiedFormat === citationTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">已複製！</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>複製</span>
                </>
              )}
            </button>
          </div>

          {/* 事實查核與來源聲明 */}
          <div className="grid md:grid-cols-3 gap-3 pt-2 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>事實查核：</strong>編輯團隊人工覆核</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
              <span><strong>數據版本：</strong>2026 最新官方規定</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-amber-600 shrink-0" />
              <span><strong>資料來源：</strong>官方公告與特派員實測核驗</span>
            </div>
          </div>
        </section>

        <footer className="mt-12 pt-6 border-t-2 border-black border-dashed flex justify-between items-center flex-wrap gap-4">
          <Link 
            to="/articles" 
            className="sketch-border bg-black text-white px-5 py-2.5 font-bold text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            &larr; 返回專欄文章列表
          </Link>
          <span className="text-xs text-gray-500 font-hand">
            黑白飛 Fly B&W 編輯部實測
          </span>
        </footer>
      </motion.article>
    </>
  );
}
