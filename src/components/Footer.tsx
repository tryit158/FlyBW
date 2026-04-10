import { Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t-2 border-black border-dashed text-center space-y-4">
      <div className="flex justify-center">
        <Plane className="w-6 h-6 stroke-[1.5]" />
      </div>
      <p className="font-bold">黑白飛 Fly B&W &copy; {new Date().getFullYear()}</p>
      <p className="text-sm text-gray-500">
        本站票價與資訊僅供參考，實際價格以各大航空公司與訂票平台為準。<br/>
        部分連結為聯盟行銷連結，您的點擊將支持我們持續創作黑白插畫！
      </p>
    </footer>
  );
}
