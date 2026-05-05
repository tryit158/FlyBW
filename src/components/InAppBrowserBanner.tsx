import { useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';

export default function InAppBrowserBanner() {
  const [isInApp, setIsInApp] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isLine = /Line/i.test(ua);
    const isFB = /FBAN|FBAV/i.test(ua);
    const isIG = /Instagram/i.test(ua);
    
    // Many in-app browsers have restricted cookie contexts
    if (isLine || isFB || isIG) {
      setIsInApp(true);
    }
  }, []);

  if (!isInApp || dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 border-b-4 border-black text-white p-4 shadow-[0_8px_0_0_rgba(0,0,0,1)] animate-in slide-in-from-top print:hidden">
      <div className="max-w-5xl mx-auto flex items-start gap-4">
        <div className="mt-1 bg-white text-red-600 rounded-full p-1 sketch-border">
          <ExternalLink size={24} />
        </div>
        <div className="flex-1">
          <p className="font-bold text-lg mb-1 tracking-wider">⚠️ 社群瀏覽器警告！</p>
          <p className="text-sm md:text-base leading-relaxed">
            您目前使用的是 IG / Threads / FB / Line 等內建瀏覽器，這會導致優惠連結出現 <strong>403 Forbidden 錯誤</strong>且無法結帳。<br/>
            👉 <strong>解法：</strong> 請點擊畫面 <strong>右上角 (或右下角) 的「•••」</strong>，然後選擇  
            <span className="font-bold bg-yellow-300 text-black px-1 mx-1 sketch-border">以系統瀏覽器開啟</span> (Chrome 或 Safari)
          </p>
        </div>
        <button 
          onClick={() => setDismissed(true)} 
          className="p-1 mt-1 hover:bg-red-700 transition-colors sketch-border bg-black text-white"
          aria-label="Close warning"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
