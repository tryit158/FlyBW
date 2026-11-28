import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Mail, Send, MessageCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>聯絡我們 | 黑白飛 Fly B&W 合作洽詢與建議反饋</title>
        <meta name="description" content="有任何廉航機票問題、合作提案或內容建議？歡迎隨時與黑白飛 Fly B&W 編輯團隊聯繫。" />
        <link rel="canonical" href="https://flybw.qzz.io/contact" />
        <meta name="robots" content="index, follow" />
      </Helmet>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto sketch-border bg-white p-8 md:p-12 animate-in fade-in"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">聯絡我們</h1>
      <p className="text-gray-700 leading-relaxed text-center mb-8">
        有任何廉航問題、行程規劃諮詢、合作提案，或是想分享您的旅行故事？歡迎隨時與我們聯絡！
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="sketch-border p-6 bg-emerald-50 border-2 border-black flex flex-col items-center text-center">
          <MessageCircle className="w-8 h-8 mb-3 text-emerald-600" />
          <h3 className="font-bold text-lg mb-1">官方 LINE 客服</h3>
          <p className="text-gray-600 text-xs mb-3">最快回覆！出國行李避坑與行程諮詢：</p>
          <a 
            href="https://line.me/R/ti/p/@349bnumb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-sm px-4 py-2 sketch-border transition-colors"
          >
            <span>加入 LINE (@349bnumb)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="sketch-border p-6 bg-gray-50 flex flex-col items-center text-center">
          <Mail className="w-8 h-8 mb-3 text-indigo-600" />
          <h3 className="font-bold text-lg mb-1">電子郵件</h3>
          <p className="text-gray-600 text-xs mb-3">商業合作邀約與品牌推廣：</p>
          <a href="mailto:Tryit158@gmail.com?subject=%E3%80%90%E9%BB%91%E7%99%BD%E9%A3%9B%E5%90%88%E4%BD%9C%E6%B4%BD%E8%A9%A2%E3%80%91" className="text-indigo-600 font-bold hover:underline text-sm mt-auto">Tryit158@gmail.com</a>
        </div>
      </div>

      <div className="sketch-border p-8 border-2 border-black border-r-4 border-b-4">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Send className="w-6 h-6"/> 傳送訊息</h3>
        <form 
          className="space-y-4" 
          onSubmit={(e) => { 
            e.preventDefault(); 
            const form = e.currentTarget;
            const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
            const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
            const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
            const subject = encodeURIComponent(`【黑白飛網站留言】來自 ${name} 的訊息`);
            const body = encodeURIComponent(`姓名：${name}\n電子信箱：${email}\n\n留言內容：\n${message}`);
            window.location.href = `mailto:Tryit158@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <div>
            <label className="block text-sm font-bold mb-2">您的姓名 (必填)</label>
            <input name="name" type="text" required className="w-full sketch-border bg-white p-3 outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_#4f46e5] transition-all" placeholder="例如：王小明" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">電子郵件 (必填)</label>
            <input name="email" type="email" required className="w-full sketch-border bg-white p-3 outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_#4f46e5] transition-all" placeholder="例如：yourname@example.com" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">訊息內容 (必填)</label>
            <textarea name="message" required rows={5} className="w-full sketch-border bg-white p-3 outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_#4f46e5] transition-all" placeholder="請寫下您的問題或合作建議..."></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-bold text-lg py-3 sketch-border hover:bg-gray-800 transition-colors mt-2 flex items-center justify-center gap-2">
            <Send className="w-5 h-5" /> 送出訊息（開啟郵件發送）
          </button>
        </form>
      </div>
    </motion.div>
    </>
  );
}
