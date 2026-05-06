const fs = require('fs');

const filePath = 'src/data/articles.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const newArticle = `
  {
    id: 'article-okinawa-blue-cave',
    category: '必讀攻略',
    title: '深入沖繩絕美秘境：青之洞窟（藍洞）浮潛與水肺潛水 100% 真實體驗全攻略',
    author: '黑白飛潛水客',
    readTime: '12 分鐘',
    image: 'https://images.unsplash.com/photo-1544400762-cb0d0cda24ec?auto=format&fit=crop&q=80&w=2000',
    imageAlt: '沖繩青之洞窟潛水體驗',
    excerpt: '很多人到沖繩的第一個願望清單就是「青之洞窟（藍洞）」！但不會游泳真的可以去嗎？浮潛跟水肺潛水到底差在哪？這篇完整記錄我兩次前往沖繩藍洞，分別體驗浮潛與水肺的 100% 真實心得以及防雷建議。',
    badge: '🤿 沖繩必玩',
    content: (
      <>
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6 font-medium">
            如果你問我，沖繩最推薦的水上活動是什麼？那絕對是位於恩納村真榮田岬的「青之洞窟」（又稱藍洞）。全世界只有少數幾個地方擁有這種獨特的藍色洞窟地形（像是義大利卡布里島），而距離台灣只要一小時半航程的沖繩，就能讓你親眼目睹這如夢似幻的寶石藍光芒！
          </p>
          <p className="mb-8">
            但網路上的宣傳照都很美，實際體驗究竟如何？不會游泳的「旱鴨子」真的能下水嗎？人會不會多到像下水餃？這篇文章將毫無保留地分享我兩次前往沖繩藍洞——一次體驗浮潛、一次挑戰水肺潛水的最真實心得。不賣弄專業術語，只告訴你最真實的感受，還有那些旅行社不會告訴你的防雷小撇步！
          </p>

          <h3 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6 sketch-border p-3 bg-blue-50 inline-block">
            <ShieldCheck className="w-6 h-6 text-blue-600" /> 一、旱鴨子的終極大哉問：浮潛 vs. 水肺潛水，到底怎麼選？
          </h3>
          <p className="mb-4">這是所有人在預約前最掙扎的問題。這裡幫你直接破題比較：</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="sketch-border p-6 bg-white shrink-0">
              <h4 className="text-xl font-bold mb-3 flex items-center gap-2"><Map className="w-5 h-5 text-teal-600" /> 1. 浮潛 (Snorkeling)</h4>
              <p className="mb-2 text-gray-700"><strong>真實感受：</strong> 穿著防寒衣（本身就有巨大浮力）加上救生衣，你基本上就是一塊「會呼吸的保麗龍」，想沉下去都很難。教練會拉著一個大型浮板，你只需要把手抓住浮板的邊緣，把臉埋進水裡，教練會像拖車一樣把你拖進洞窟裡。</p>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
                <li className="text-green-700"><strong>優點：</strong>心理壓力極小，幾乎不需要任何學習。適合帶著小孩（通常5歲以上）或極度怕水的長輩。</li>
                <li className="text-red-700"><strong>缺點：</strong>你是浮在水面上的，往下看會跟魚群有一段距離。人多的時候水面上會擠滿其他店家的浮板，有時會踢到別人的腳。</li>
              </ul>
            </div>
            <div className="sketch-border p-6 bg-white shrink-0">
              <h4 className="text-xl font-bold mb-3 flex items-center gap-2"><Ship className="w-5 h-5 text-indigo-600" /> 2. 水肺潛水 (Scuba Diving)</h4>
              <p className="mb-2 text-gray-700"><strong>真實感受：</strong> 這是我目前覺得最值回票價的體驗。背著氧氣瓶下潛到大概 5-8 公尺深的地方。在水底，你可以真正跟魚群平視，感受零重力的飛行體驗。</p>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
                <li className="text-green-700"><strong>優點：</strong>視角完全不同！你是在魚群裡面，而不是從上面看動物。從水底抬頭往上看藍洞的洞口時，陽光折射穿透水面的漸層藍，美得讓人忘記呼吸！</li>
                <li className="text-red-700"><strong>缺點：</strong>裝備超級重！需要背著它走一段路（除非選船潛），且需要克服心理障礙與學會耳壓平衡。</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 sketch-border border-yellow-400 mb-10 text-gray-800">
            <strong>💡 黑白飛的誠心建議：</strong> 如果你完全不怕水，強烈建議直接報名<strong>體驗潛水（水肺）</strong>！即使沒有潛水執照也可以參加，教練會全程拎著你的氣瓶，你甚至連游泳都不用會，只要會呼吸跟耳壓平衡就好了。
          </div>

          <h3 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6 sketch-border p-3 bg-blue-50 inline-block">
            <CalendarDays className="w-6 h-6 text-blue-600" /> 二、預約與報到：事前準備與停車場的血淚史
          </h3>
          <p className="mb-4">我這次是在出發前一個月，透過線上平台預訂了當地的潛水店。選擇潛水店有兩個黃金標準：</p>
          <ul className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>這關乎生命安全—語言溝通：</strong> 一定要有中文教練或英文流利的教練。水下溝通直接影響安全與體驗感，如果聽不懂日文，千萬不要隨便報名純日語的潛店。</li>
            <li><strong>登島方式—包船 / 步行：</strong> 青洞下水有兩種方式，「搭船」或是「從真榮田岬走階梯下水」。搭船較輕鬆，不用背重裝備走長台階；步行下水則充滿挑戰但也省下一筆小費用。</li>
          </ul>
          <p className="font-bold text-red-600 mb-6">⚠️ 交通血淚史：真榮田岬的排隊地獄</p>
          <p className="mb-8 text-gray-700">
            我們是租車自駕前往真榮田岬。強烈提醒大家，<strong>千萬要提早抵達！</strong> 真榮田岬的停車場位置有限，遇到夏天旺季（尤其是早上 9 點到中午），停車場外會大排長龍，有時候光排隊等車位就要花上 40 分鐘。如果遲到被取消行程通常是不能退費的！我們當天提早了快一小時到，才勉強在報到時間前停好車。
          </p>

          <h3 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6 sketch-border p-3 bg-blue-50 inline-block">
            <BedDouble className="w-6 h-6 text-blue-600" /> 三、換裝與下水前：像企鵝一樣的陸上考驗
          </h3>
          <p className="mb-4">
            到潛水店集合後，第一件事就是填寫健康狀況聲明書，接著領取防寒衣、面鏡和蛙鞋。
            防寒衣非常緊，需要把自己硬「塞」進去。教練會用流利的中文進行岸上大特訓：
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>用嘴巴呼吸：</strong> 咬住二級頭，只用嘴巴吸氣、吐氣，絕對不能用鼻子（面鏡已經把鼻子罩住了，用鼻子吐氣面鏡會進水或起霧）。</li>
            <li><strong>面鏡排水：</strong> 萬一面鏡真的進水了怎麼辦？按住面鏡上方邊緣，用力用「鼻子」哼氣，水就會從下方排出。</li>
            <li><strong>耳壓平衡：</strong> 這最重要！捏住鼻子，用力像擤鼻涕一樣把氣往耳朵送，直到聽到耳朵發出「啵」的一聲。</li>
          </ul>
          <p className="mb-8 text-gray-700">
            教學完畢後重頭戲來了：<strong>背氣瓶</strong>。一個氣瓶大約有 15-20 公斤重，加上身上的配重鉛塊。教練幫我背上去的那一瞬間，我不誇張，整個人差點往後倒。你只能像一隻笨重的企鵝，彎著腰，碎步跟著教練走到海邊。走那段大約一百多階的長階梯時，真的是滿身大汗。但請相信我，<strong>只要一泡進海裡，所有重量就會瞬間被浮力抵消！</strong> 辛苦只在陸地上。
          </p>

          <h3 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6 sketch-border p-3 bg-blue-50 inline-block">
            <Sparkles className="w-6 h-6 text-blue-600" /> 四、水下的重頭戲：潛入發光的藍色幻境
          </h3>
          <h4 className="text-xl font-bold mb-2 text-gray-800">1. 被熱帶魚包圍的震撼</h4>
          <p className="mb-4 text-gray-700">
            下潛到大約 3 公尺深時，眼前的景象瞬間豁然開朗。沖繩的海水清澈度極高，能見度隨便都有 20 公尺以上。成群的燕魚、雀鯛就在面前游來游去。教練拿出事先準備好的麵包讓我們餵魚。你只要把麵包在水裡輕輕搓揉，魚群就會像見到偶像一樣蜂擁而至，直接在你手邊啄食，甚至會感覺到小魚輕輕啄到手指，那種零距離接觸真的太讓人感動了。
          </p>

          <h4 className="text-xl font-bold mb-2 text-gray-800 mt-6">2. 難以忘懷的青之洞窟寶石藍</h4>
          <p className="mb-8 text-gray-700">
            教練從背後抓著我們氣瓶上的閥門，像拎小雞一樣控制我們的方向，慢慢牽我們游進青之洞窟的洞口。
            <br/><br/>
            洞窟深處其實暗暗的，頭頂上的岩壁偶爾有蝙蝠拍動翅膀的身影。當我們游到洞窟最深處，教練要我們轉身往洞口的方向看——那是一幅我這輩子都不會忘記的畫面。
            <br/><br/>
            外面的陽光穿透海水，經過海底白色石灰岩沙地的反射，從洞口底層透射進來。整個水底散發著一種極度不真實的、螢光般的寶石藍色！那種藍色不是任何人工顏料可以調出來的，它清澈透明且似乎自帶光源。水面上浮潛的遊客變成一個個黑色的剪影，搭配著發光的立體藍色背景，有一種置身外太空艙看著宇宙發光的感覺。
          </p>

          <div className="my-8">
             <img src="https://images.unsplash.com/photo-1544400762-cb0d0cda24ec?auto=format&fit=crop&q=80&w=2000" alt="沖繩潛水" className="w-full h-auto rounded-lg shadow-lg border-4 border-black" />
             <p className="text-center text-sm text-gray-500 mt-2">如同寶石般閃耀的海水，完全不需濾鏡。</p>
          </div>

          <h3 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6 sketch-border p-3 bg-blue-50 inline-block">
            <AlertTriangle className="w-6 h-6 text-blue-600" /> 五、真實的缺點與防雷建議（必讀！）
          </h3>
          <p className="mb-4 text-gray-700">網路上大家都在激推藍洞，但身為真實體驗者，我必須用過來人的血淚告訴你幾個需要注意的地雷：</p>
          
          <ul className="space-y-6 text-gray-700 mb-8">
            <li className="bg-white p-4 sketch-border border-red-200">
              <strong className="text-red-600 block text-lg mb-2">雷點 1：人有時候真的太多了！</strong>
              青之洞窟空間有限。在暑假旺季的早上 10 點到下午 2 點，洞窟裡面的人會多到像信義區的跨年晚會。水面浮潛的人會擠成一團，教練們甚至要在面上互相大喊借過。
              <div className="mt-2 text-blue-800 bg-blue-50 p-2 text-sm rounded"><strong>💡 防雷破解：</strong> 如果想要寧靜的體驗，強烈建議報名「早上清晨第一梯次」（通常是早上 7:00 或 7:30）。雖然要極度早起，但這時候光線最美、人煙稀少，你才能獨享藍洞甚至拍出沒有路人的完美空景！</div>
            </li>
            <li className="bg-white p-4 sketch-border border-red-200">
              <strong className="text-red-600 block text-lg mb-2">雷點 2：海況不佳會「禁游」或「改地點」</strong>
              真榮田岬的青之洞窟非常「吃天氣」。如果風浪太大，岸邊會掛起紅旗禁止所有下水活動。潛店通常會提供兩個方案：A.取消退費 / B.改去旁邊浪小的「裏真榮田」海灘。替代海灘雖然沒有藍洞，但其實沖繩水質好，外海的珊瑚跟熱帶魚依然多到爆炸，如果不想敗興而歸，去替代潛點餵魚也是很棒的選擇。
            </li>
            <li className="bg-white p-4 sketch-border border-red-200">
              <strong className="text-red-600 block text-lg mb-2">雷點 3：暈浪問題絕對不能輕視</strong>
              不管是浮潛還是水肺潛水，在海面上漂浮時，波浪不斷上下晃動很容易誘發暈浪。我同團的朋友就是在水面等待下潛時，因為看著水面晃動，直接在海裡暈吐了（吐出來的瞬間魚群全部衝過來開狂歡派對…畫面太美我不敢看）。
              <div className="mt-2 text-blue-800 bg-blue-50 p-2 text-sm rounded"><strong>💡 防雷破解：</strong> 容易暈車、暈船的人，一定要在下水前 30 分鐘吃暈船藥！另外，前一晚請睡飽，千萬不要宿醉去潛水。</div>
            </li>
          </ul>

          <h3 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6 sketch-border p-3 bg-blue-50 inline-block">
            <CheckCircle2 className="w-6 h-6 text-blue-600" /> 六、結語總結
          </h3>
          <p className="mb-6 text-gray-700">
            花了將近三個小時在真榮田岬完成這次體驗，上岸沖洗完畢、喝著潛店準備的熱茶時，真的有一種「解鎖人生新成就」的強烈感動。不用自己買超貴的防水相機或 GoPro，因為行程通常都包含了教練專業水下攝影，當天下午就能拿到上百張畫質清晰的照片跟影片，可以直接發 IG 炫耀一波。
          </p>
          <div className="bg-gray-50 p-6 sketch-border mb-10 text-center">
            <p className="text-xl font-bold mb-2">評分表：青之洞窟潛水體驗</p>
            <p className="text-lg">刺激度：⭐⭐⭐⭐ (水肺剛下水那瞬間會緊張)</p>
            <p className="text-lg">勞累度：⭐⭐⭐⭐ (氣瓶超重！強烈建議選搭船)</p>
            <p className="text-lg">推薦度：⭐⭐⭐⭐⭐ (沒去過別說你來過沖繩玩水)</p>
          </div>

          <p className="text-lg font-bold text-center mb-8">
            只要找到專業的中文潛水店，放下對海水的恐懼，把這輩子的命交給教練（笑），你絕對會愛上沖繩的這片蔚藍！
          </p>

          <AffiliateFooter />

        </div>
      </>
    )
  },
`;

content = content.replace('export const articlesData: Article[] = [', 'export const articlesData: Article[] = [' + newArticle);
fs.writeFileSync(filePath, content);
console.log('Article inserted successfully');
