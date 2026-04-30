import { motion } from 'motion/react';

export default function Terms() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto sketch-border bg-white p-8 md:p-12 animate-in fade-in"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">服務條款</h1>

      <div className="space-y-6 text-base leading-relaxed text-gray-800">
        <p className="text-gray-500 text-sm">最後更新日期：{new Date().getFullYear()}年1月1日</p>
        
        <p>
          歡迎使用「黑白飛 Fly B&W」（以下簡稱本網站）。請您在使用本網站各項服務之前仔細閱讀以下條款：
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-black pl-3">一、服務條款之接受</h2>
        <p>
          當您使用本網站時，即表示您已閱讀、瞭解並同意接受本服務條款之所有內容。如果您不同意本服務條款的內容，或者您所屬的國家或地域排除本服務條款內容之全部或部分時，您應立即停止使用本網站。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-black pl-3">二、免責聲明</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>本網站所提供的機票價格、航班資訊、旅遊攻略等資料僅供參考。實際價格與規定請以各大航空公司與訂票平台之官方公告為準。</li>
          <li>本網站不保證資訊之正確性、即時性與完整性，對於您依據本網站資訊進行任何交易或決策所致之直接或間接損失，本網站概不負責。</li>
          <li>本網站部分連結可能為聯盟行銷（Affiliate Program）連結，但這不會影響您購買商品的價格。</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-black pl-3">三、智慧財產權</h2>
        <p>
          本網站上所有內容，包括但不限於文字、圖片、插畫、網站架構、設計等，均由本網站或其他權利人依法擁有其智慧財產權。非經本網站或其他權利人事前書面同意，任何人不得逕自使用、修改、重製、公開播送、改作、散布、發行、公開發表、進行還原工程、解編或反向組譯。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-black pl-3">四、服務之停止與中斷</h2>
        <p>
          本網站將依一般合理之技術及方式，維持系統及服務之正常運作。但於以下各項情況時，本網站有權可以停止、中斷提供本服務：
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>本網站電子通信設備進行必要之保養及施工時。</li>
          <li>發生突發性之電子通信設備故障時。</li>
          <li>天災等不可抗力之因素或其他不可歸責於本網站致使本網站無法提供服務時。</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-black pl-3">五、準據法與管轄法院</h2>
        <p>
          本服務條款之解釋與適用，以及與本服務條款有關的爭議，均應依照中華民國法律予以處理，並以台灣台北地方法院為第一審管轄法院。
        </p>

      </div>
    </motion.div>
  );
}
