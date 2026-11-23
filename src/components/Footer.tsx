import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t-2 border-black border-dashed text-center space-y-4">
      <div className="flex justify-center">
        <Plane className="w-6 h-6 stroke-[1.5]" />
      </div>
      <p className="font-bold">黑白飛 Fly B&W &copy; {new Date().getFullYear()}</p>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm font-bold sketch-border bg-white inline-flex px-4 py-2 my-2">
        <Link to="/about" className="hover:underline decoration-wavy underline-offset-4">關於我們</Link>
        <Link to="/contact" className="hover:underline decoration-wavy underline-offset-4">聯絡我們</Link>
        <Link to="/privacy" className="hover:underline decoration-wavy underline-offset-4">隱私權政策</Link>
        <Link to="/terms" className="hover:underline decoration-wavy underline-offset-4">服務條款</Link>
      </div>

      <p className="text-sm text-gray-500 max-w-2xl mx-auto">
        本站票價與資訊僅供參考，實際價格以各大航空公司與訂票平台為準。<br/>
        部分連結為聯盟行銷連結，您的點擊將支持我們持續創作黑白插畫！
      </p>
    </footer>
  );
}
