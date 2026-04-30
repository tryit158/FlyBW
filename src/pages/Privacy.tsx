import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto sketch-border bg-white p-8 md:p-12 animate-in fade-in"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">隱私權政策</h1>

      <div className="space-y-6 text-base leading-relaxed text-gray-800">
        <p className="text-gray-500 text-sm">最後更新日期：{new Date().getFullYear()}年1月1日</p>
        
        <p>
          非常歡迎您光臨「黑白飛 Fly B&W」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-indigo-600 pl-3">一、隱私權保護政策的適用範圍</h2>
        <p>
          隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-indigo-600 pl-3">二、個人資料的蒐集、處理及利用方式</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。</li>
          <li>本網站在您使用客服信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。</li>
          <li>於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-indigo-600 pl-3">三、資料之保護</h2>
        <p>
          本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將受相關法律處分。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-indigo-600 pl-3">四、網站對外的相關連結</h2>
        <p>
          本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-indigo-600 pl-3">五、與第三人共用個人資料之政策</h2>
        <p>
          本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-l-4 border-indigo-600 pl-3">六、Cookie之使用</h2>
        <p>
          為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行。
        </p>

      </div>
    </motion.div>
  );
}
