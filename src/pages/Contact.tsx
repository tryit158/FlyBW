import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto sketch-border bg-white p-8 md:p-12 animate-in fade-in"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">聯絡我們</h1>
      <p className="text-gray-700 leading-relaxed text-center mb-8">
        有任何問題、合作提案，或是想分享您的旅行故事嗎？歡迎隨時與我們聯絡！
      </p>

      <div className="max-w-md mx-auto mb-10">
        <div className="sketch-border p-6 bg-gray-50 flex flex-col items-center text-center">
          <Mail className="w-8 h-8 mb-4 text-indigo-600" />
          <h3 className="font-bold text-lg mb-2">電子郵件</h3>
          <p className="text-gray-600 mb-2">合作邀約與一般問題：</p>
          <a href="mailto:hello@flybnw.com" className="text-indigo-600 font-bold hover:underline">hello@flybnw.com</a>
        </div>
      </div>

      <div className="sketch-border p-8 border-2 border-black border-r-4 border-b-4">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Send className="w-6 h-6"/> 傳送訊息</h3>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('訊息已送出，我們將盡快回覆您！'); }}>
          <div>
            <label className="block text-sm font-bold mb-2">您的姓名 (必填)</label>
            <input type="text" required className="w-full sketch-border bg-white p-3 outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_#4f46e5] transition-all" placeholder="例如：王小明" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">電子郵件 (必填)</label>
            <input type="email" required className="w-full sketch-border bg-white p-3 outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_#4f46e5] transition-all" placeholder="例如：yourname@example.com" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">訊息內容 (必填)</label>
            <textarea required rows={5} className="w-full sketch-border bg-white p-3 outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_#4f46e5] transition-all" placeholder="請寫下您的問題或建議..."></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-bold text-lg py-3 sketch-border hover:bg-gray-800 transition-colors mt-2">
            送出訊息
          </button>
        </form>
      </div>
    </motion.div>
  );
}
