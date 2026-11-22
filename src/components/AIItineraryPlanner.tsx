import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Compass, 
  Clock, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  MessageCircle, 
  Ticket, 
  Hotel, 
  Wifi, 
  AlertCircle, 
  Coffee, 
  Car, 
  ShieldCheck, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp,
  Plane,
  HeartHandshake,
  Share2
} from 'lucide-react';

// 目的地設定
export type DestinationKey = 'tokyo' | 'kansai' | 'okinawa' | 'hokkaido' | 'fukuoka' | 'seoul' | 'busan' | 'phuquoc';
export type CompanionType = 'family' | 'couple' | 'friends' | 'elderly' | 'solo';
export type FocusType = 'attractions' | 'shopping_food' | 'onsen_nature' | 'ski_winter';

interface DestinationOption {
  key: DestinationKey;
  name: string;
  tag: string;
  country: string;
}

const DESTINATIONS: DestinationOption[] = [
  { key: 'tokyo', name: '東京 (Tokyo)', tag: '潮流/樂園/美食', country: '日本' },
  { key: 'kansai', name: '關西 (京阪神)', tag: 'USJ/古都寺廟/美食', country: '日本' },
  { key: 'okinawa', name: '沖繩 (Okinawa)', tag: '自駕/海景/青之洞窟', country: '日本' },
  { key: 'hokkaido', name: '北海道 (Hokkaido)', tag: '雪景/溫泉/帝王蟹', country: '日本' },
  { key: 'fukuoka', name: '福岡 (九州)', tag: '由布院/拉麵/購物', country: '日本' },
  { key: 'seoul', name: '首爾 (Seoul)', tag: '聖水洞/韓服/Olive Young', country: '韓國' },
  { key: 'busan', name: '釜山 (Busan)', tag: '膠囊列車/海景咖啡/海鮮', country: '韓國' },
  { key: 'phuquoc', name: '富國島 (Phu Quoc)', tag: '台灣免簽證/跨海纜車', country: '越南' },
];

const COMPANIONS = [
  { key: 'family' as CompanionType, label: '親子家庭', icon: '👨‍👩‍👧', desc: '推車友善、樂園體驗、節奏寬鬆' },
  { key: 'couple' as CompanionType, label: '情侶夫妻', icon: '💑', desc: '浪漫夜景、打卡美照、高質感美食' },
  { key: 'friends' as CompanionType, label: '小資閨蜜/朋友', icon: '👭', desc: '瘋狂血拚、網美咖啡廳、排隊名店' },
  { key: 'elderly' as CompanionType, label: '孝親帶長輩', icon: '👵', desc: '少爬樓梯、溫泉景觀、營養定食' },
  { key: 'solo' as CompanionType, label: '小資獨旅特攻', icon: '🎒', desc: '極限紅眼、早出晚歸、高效率打卡' },
];

const FOCUSES = [
  { key: 'attractions' as FocusType, label: '主題樂園 + 必去地標', icon: '🎢' },
  { key: 'shopping_food' as FocusType, label: '購物挖寶 + 在地美食', icon: '🛍️' },
  { key: 'onsen_nature' as FocusType, label: '溫泉放鬆 + 自然絕景', icon: '♨️' },
];

interface ItineraryDay {
  day: number;
  title: string;
  theme: string;
  morning: string;
  afternoon: string;
  evening: string;
  stayArea: string;
  proTip: string;
  ticketLink?: { title: string; url: string; platform: string; priceHint: string };
  hotelLink?: { title: string; url: string; area: string };
}

// 預載八大熱門目的地專家級行程數據 (可動態組裝 4/5/6 天)
const ITINERARY_DATA: Record<DestinationKey, ItineraryDay[]> = {
  tokyo: [
    {
      day: 1,
      title: '抵達東京 ➔ 入住市區 ➔ 澀谷 SHIBUYA SKY 絕美夜景',
      theme: '現代潮流啟程',
      morning: '搭乘紅眼或上午航班降落成田/羽田機場，搭乘 Skyliner / 機場巴士直達市區',
      afternoon: '飯店辦理 Check-in 置放行李，前往澀谷十字路口朝聖八公像與宮下公園',
      evening: '預約黃金時段登上「SHIBUYA SKY」360度俯瞰東京鐵塔夜景，晚餐享用極味屋炸漢堡排',
      stayArea: '建議住宿：澀谷、新宿或上野周邊',
      proTip: 'SHIBUYA SKY 門票務必在出發前 28 天的午夜 00:00 準時搶日落時段！現場一律買不到票。',
      ticketLink: { title: 'SHIBUYA SKY 展望台即時預訂門票', url: 'https://afflink.one/s/J1H4B', platform: 'Klook / KKday', priceHint: '提早卡位免排隊' },
      hotelLink: { title: '搜尋澀谷/新宿高 CP 值近地鐵飯店', url: 'https://afflink.one/s/ujSbR', area: '澀谷/新宿' }
    },
    {
      day: 2,
      title: '東京迪士尼樂園 / 迪士尼海洋（一日沉浸夢幻世界）',
      theme: '夢幻冒險狂歡',
      morning: '提早 1 小時到達舞濱站入園排隊！入園立刻開官方 App 搶 DPA 預約快速通關',
      afternoon: '全天暢玩人氣設施：美女與野獸 / 玩具總動員 / 夢幻泉鄉新園區',
      evening: '卡位灰姑娘城堡觀賞壯麗夜間煙火秀與星光大遊行，採購限定爆米花桶與周邊',
      stayArea: '建議住宿：舞濱迪士尼度假區或搭 JR 京葉線直達東京站周邊',
      proTip: '進入迪士尼前請先綁定好信用卡至官方 App，入園通過閘門瞬間立刻刷 DPA 與預約等候卡！',
      ticketLink: { title: '東京迪士尼一日護照 (保證入園電子票)', url: 'https://afflink.one/s/J1H4B', platform: '官方直營通路', priceHint: '掃 QR Code 秒入園' }
    },
    {
      day: 3,
      title: '淺草寺雷門散策 ➔ 晴空塔展望台 ➔ 秋葉原/銀座商圈',
      theme: '江戶下町與動漫風情',
      morning: '早晨前往淺草寺避開人潮，雷門前大燈籠拍美照，仲見世通品嚐炸饅頭與抹茶冰淇淋',
      afternoon: '沿著隅田川水上巴士漫步至晴空塔 (Tokyo Skytree)，登高俯瞰關東平原與富士山遠景',
      evening: '傍晚前往秋葉原電器動漫街挖寶，或移步銀座步行者天國享受奢華百貨與平價旗艦店',
      stayArea: '建議住宿：上野、淺草周邊 (交通轉乘極度便利)',
      proTip: '淺草寺若想拍空景，強烈建議早上 07:30 前抵達！仲見世通小吃請勿邊走邊吃，店門旁吃完再走。',
      ticketLink: { title: '東京晴空塔門票 + 墨田水族館套票', url: 'https://afflink.one/s/J1H4B', platform: 'Klook 獨家優惠', priceHint: '免排購票隊伍' }
    },
    {
      day: 4,
      title: '富士山河口湖絕景一日遊（大石公園 ➔ 新倉山淺間神社 ➔ 忍野八海）',
      theme: '富士聖山巡禮',
      morning: '搭乘特急「富士回遊號」或預約一日遊包車直奔河口湖，抵達新倉山淺間公園拍五重塔+富士山',
      afternoon: '前往大石公園欣賞湖畔花海與富士倒影，順遊名水之鄉忍野八海品嚐名泉豆腐',
      evening: '搭乘河口湖天上山全景纜車敲響天上之鐘，傍晚返回東京市區品嚐暖胃黑毛和牛壽喜燒',
      stayArea: '建議住宿：返回東京市區或河口湖溫泉一泊二食旅館',
      proTip: '富士回遊號全車指定席，出發前一個月開放劃位時若沒搶到，直接訂中文一日遊巴士省去轉乘煩惱！',
      ticketLink: { title: '富士山經典一日遊：河口湖+新倉山+忍野八海 (中文導遊)', url: 'https://afflink.one/s/J1H4B', platform: '一日遊保證出團', priceHint: '懶人免轉車神隊友' }
    },
    {
      day: 5,
      title: '築地場外市場海鮮早餐 ➔ 明治神宮 ➔ 原宿竹下通/表參道血拚',
      theme: '潮流市集與購物狂歡',
      morning: '清晨直奔築地場外市場，大啖黑鮪魚大腹握壽司、現烤和牛串與玉子燒',
      afternoon: '走進明治神宮森林享受芬多精洗禮，順遊原宿竹下通、貓街與表參道精品名店',
      evening: '新宿歌舞伎町朝聖哥吉拉地標，伊勢丹百貨與 Bic Camera 大肆採購電器（使用退稅+折價券）',
      stayArea: '建議住宿：新宿、上野 (便於隔日搭 Skyliner 去成田)',
      proTip: '日本買電器單筆滿 5,000 日圓享 10% 退稅，出示手機 Bic Camera 7% 折價券享折上折最高 17%！'
    },
    {
      day: 6,
      title: '上野恩賜公園 ➔ 阿美橫町最後衝刺補貨 ➔ 滿載賦歸機場',
      theme: '完美收官滿載而歸',
      morning: '上野公園散步賞景，前往阿美橫町二木之菓子、松本清藥妝店最後大掃貨',
      afternoon: '京成上野站搭乘 Skyliner 特急僅 41 分鐘飆速直達機場，先秤行李防超重',
      evening: '成田/羽田機場免稅店掃貨白色戀人、東京芭娜娜伴手禮，登機返回溫暖的家',
      stayArea: '返抵台灣',
      proTip: '廉航在登機門前常會突襲秤手提行李（限額 7kg，免稅店提袋合併計算），請務必提早整併妥當！'
    }
  ],
  kansai: [
    {
      day: 1,
      title: '抵達關西機場 ➔ 搭乘 HARUKA 直達京都 ➔ 祇園花見小路夜遊',
      theme: '古都千年風雅',
      morning: '抵達關西機場 (KIX)，持預購電子票刷 QR code 兌換 JR HARUKA 直達京都',
      afternoon: '入住京都車站周邊飯店，前往四條河原町、鴨川納涼床旁悠閒散步',
      evening: '夜遊祇園花見小路探訪傳統町家建築，八坂神社觀賞提燈夜景，享用道地湯豆腐懷石料理',
      stayArea: '建議住宿：京都車站前或四條烏丸',
      proTip: 'HARUKA 特急票在 Klook/KKday 提早買只要官方原價 6 折，且支援台灣護照專用 Kiosk 自助取票！',
      ticketLink: { title: '關西機場特快 HARUKA 優惠車票 (往返京都/大阪)', url: 'https://afflink.one/s/J1H4B', platform: '特價交通票', priceHint: '比現場買省 40%' }
    },
    {
      day: 2,
      title: '清水寺 ➔ 二年坂三年坂 ➔ 伏見稻荷千本鳥居',
      theme: '世界遺產深度行',
      morning: '清晨早起直奔世界遺產清水寺，避開人潮拍清水舞台空景，音羽之瀑祈求健康學業',
      afternoon: '漫步二年坂、三年坂石板路，探訪特色榻榻米星巴克，午後搭京阪電車前往伏見稻荷大社',
      evening: '走入綿延萬座的朱紅「千本鳥居」震撼秘境，傍晚移步大阪入住心齋橋/難波商圈',
      stayArea: '建議住宿：大阪心齋橋、難波或梅田',
      proTip: '伏見稻荷山路樓梯較多，帶長輩或推嬰兒車建議走到千本鳥居奧社即可折返，不必爬完全山。'
    },
    {
      day: 3,
      title: '日本環球影城 USJ 全日狂歡（超級任天堂世界 + 哈利波特魔法世界）',
      theme: '世界級主題樂園熱血衝刺',
      morning: '開園前 70 分鐘抵達現場排隊！開門瞬間透過 USJ App 抽「任天堂世界整理券」或直接衝馬力歐賽車',
      afternoon: '敲打金幣問號箱喝能量飲料，深入大金剛新園區，午後前往哈利波特禁忌之旅體驗飛天魔毯',
      evening: '享用三根掃帚奶油啤酒，觀賞夜間好萊塢特技大秀，選購超萌小小兵與瑪利歐周邊商品',
      stayArea: '建議住宿：大阪市區或環球影城港灣酒店',
      proTip: 'USJ 熱門季節入園人潮極多，若想保證進任天堂世界，強烈建議出發前 2 個月搶購「快速通關 Express Pass」！',
      ticketLink: { title: '日本環球影城一日門票 + 快速通關 Express Pass', url: 'https://afflink.one/s/J1H4B', platform: '官方官方直連授權', priceHint: '保證入園任天堂' }
    },
    {
      day: 4,
      title: '奈良神鹿公園散策 ➔ 東大寺 ➔ 道頓堀固力果跑跑人大啖美食',
      theme: '古寺小鹿與大阪吃貨',
      morning: '搭乘近鐵直奔奈良，在奈良公園購買鹿仙貝與野生鞠躬小鹿親密互動',
      afternoon: '參觀世界最大的木造建築東大寺參拜大佛，午後搭車返回大阪心齋橋大血拚',
      evening: '在道頓堀大橋與巨大「固力果跑跑人」合影，晚餐連吃一蘭拉麵、章魚燒、元祖串炸',
      stayArea: '建議住宿：難波或心齋橋周邊'
    },
    {
      day: 5,
      title: '黑門市場海鮮早餐 ➔ 大阪城天守閣 ➔ 關西機場滿載賦歸',
      theme: '海鮮盛宴與收官采購',
      morning: '大阪人的廚房「黑門市場」吃現烤巨無霸扇貝、生蠔與黑門三平新鮮生魚片',
      afternoon: '登大阪城天守閣俯瞰護城河與古城歷史，午後前往臨空城 Outlet (Rinku Premium Outlets) 最後掃貨',
      evening: '搭南海電鐵直達關西機場第一航廈，免稅店採購神戶布丁與關西限定甜點，搭機返台',
      stayArea: '返抵台灣'
    }
  ],
  okinawa: [
    {
      day: 1,
      title: '抵達那霸機場 ➔ 機場取車自駕 ➔ 瀨長島海景鬆餅 ➔ 國際通夜市',
      theme: '海風初探輕旅行',
      morning: '降落那霸機場，搭乘接駁車至租車行領車（確認日文譯本與駕照正本）',
      afternoon: '開車直奔「瀨長島 Umikaji Terrace」，地中海純白建築吃幸福鬆餅看飛機起降',
      evening: '入住國際通市區飯店，晚上漫步國際通商店街，品嚐暖暮拉麵或琉球和牛燒肉',
      stayArea: '建議住宿：那霸市區國際通附近',
      proTip: '台灣人在日本開車只需攜帶「台灣駕照正本 + 監理站 NT$100 日文譯本」，國際駕照日本不能用！',
      ticketLink: { title: '沖繩高性價比租車自駕比價預訂 (中文導航/含免責險)', url: 'https://afflink.one/s/J1H4B', platform: '自駕神隊友', priceHint: '一鍵比較各車行' }
    },
    {
      day: 2,
      title: '美麗海水族館黑潮之海 ➔ 古宇利大橋心形岩 ➔ 恩納村渡假村',
      theme: '壯闊海洋奇景',
      morning: '沿沖繩高速公路北上，探訪「美麗海水族館」，欣賞震撼的黑潮之海巨型水槽鯨鯊餵食秀',
      afternoon: '跨越全長近 2 公里的碧藍「古宇利大橋」，登古宇利海洋塔，朝聖嵐廣告心形岩',
      evening: '入住恩納村私人海灘渡假酒店，晚餐享用阿古豬涮涮鍋與沖繩道地海葡萄定食',
      stayArea: '建議住宿：恩納村海景渡假酒店',
      proTip: '美麗海水族館下午 4 點有鯨鯊直立進食秀，是全館最震撼的瞬間，務必算好時間前往！',
      ticketLink: { title: '沖繩美麗海水族館電子門票 (掃碼即入園)', url: 'https://afflink.one/s/J1H4B', platform: '優惠門票', priceHint: '比現場購票更划算' }
    },
    {
      day: 3,
      title: '恩納村真榮田岬「青之洞窟」浮潛/潛水 ➔ 美國村夢幻日落',
      theme: '寶石藍洞與異國風情',
      morning: '預約真榮田岬「青之洞窟（藍洞）」浮潛或水肺體驗，在神秘透明藍光中與熱帶魚平視共游',
      afternoon: '返回飯店稍作盥洗休息，前往北谷「美國村」，逛特色美式復古小店與巨大摩天輪',
      evening: '在日落海灘欣賞太平洋金色晚霞，晚餐享用 Red Lobster 龍蝦大餐或美式手作漢堡',
      stayArea: '建議住宿：美國村海灘渡假飯店或那霸市區',
      proTip: '不會游泳也能參加青之洞窟浮潛！教練會拉浮板帶路，請務必挑選有「中文教練」的合格合格店家。',
      ticketLink: { title: '沖繩青之洞窟浮潛/水肺體驗 (中文教練/免費水底拍照)', url: 'https://afflink.one/s/J1H4B', platform: '人氣水上活動', priceHint: '免費送水底寫真' }
    },
    {
      day: 4,
      title: '波上宮懸崖神社 ➔ 港川外人住宅甜點 ➔ 那霸機場滿載賦歸',
      theme: '琉球信仰與美味終章',
      morning: '前往佇立於珊瑚礁懸崖之上的「波上宮」參拜求平安御守，俯瞰波之上海灘',
      afternoon: '前往浦添「港川外人住宅街」，在美軍眷舍改建的手作甜點店品嚐法式水果塔 oHacorté',
      evening: '開車返回租車行還車（記得加滿油），搭接駁車至那霸機場，免稅店採買紅芋塔與海鹽餅乾搭機回國',
      stayArea: '返抵台灣'
    }
  ],
  hokkaido: [
    {
      day: 1,
      title: '降落新千歲機場 ➔ 札幌電視塔與大通公園 ➔ 薄野拉麵橫丁',
      theme: '雪國北境啟程',
      morning: '抵達新千歲機場，JR 快速 Airport 號直奔札幌市區飯店 Check-in',
      afternoon: '漫步大通公園與時計台，登札幌電視塔俯瞰棋盤狀雪白街景',
      evening: '前往薄野「拉麵橫丁」大啖濃郁味噌拉麵，晚餐續攤品嚐北海道名物成吉思汗烤羊肉',
      stayArea: '建議住宿：札幌車站前或大通公園周邊',
      proTip: '冬季造訪北海道防滑鞋套是必備救命神物！雪地行走腳步請放慢，重心向前微傾，避免踩結冰黑冰。'
    },
    {
      day: 2,
      title: '小樽運河浪漫漫步 ➔ 北一硝子館 ➔ LeTAO 起司蛋糕雙層享受',
      theme: '百年運河復古情懷',
      morning: '搭乘 JR 沿著石狩灣海岸線前往浪漫海港「小樽」，運河旁紅磚倉庫合影留念',
      afternoon: '逛童話十字路口的蒸氣鐘、北一硝子玻璃工藝館與小樽音樂盒堂',
      evening: '在 LeTAO 總店品嚐招牌雙層乳酪蛋糕與下午茶，傍晚運河瓦斯燈點亮如夢似幻，返回札幌',
      stayArea: '建議住宿：札幌市區',
      ticketLink: { title: 'JR 北海道鐵路周遊券 (暢遊札幌/小樽/旭川/函館)', url: 'https://afflink.one/s/J1H4B', platform: 'JR 官方授權', priceHint: '搭乘特急必備神券' }
    },
    {
      day: 3,
      title: '定山溪溫泉一日舒壓 ➔ 札幌二條市場豪邁海鮮丼',
      theme: '暖湯雪景療癒身心',
      morning: '清晨直奔二條市場，享用鋪滿海膽、鮭魚卵與帝王蟹腳的三色痛風海鮮丼',
      afternoon: '搭乘河童巴士直達「定山溪溫泉」，體驗雪中露天日歸溫泉與紅色二見吊橋溪谷絕景',
      evening: '返回札幌狸小路商店街血拚藥妝與名產，晚餐享用北海道頂級毛蟹懷石料理',
      stayArea: '建議住宿：定山溪溫泉旅館或札幌市區'
    },
    {
      day: 4,
      title: '白色戀人觀光工廠 ➔ 新千歲機場最後狂吃甜點 ➔ 返台',
      theme: '甜蜜甜點巡禮',
      morning: '造訪英倫莊園風的「白色戀人公園」，參觀巧克力生產線並製作專屬紀念餅乾',
      afternoon: '提早 3 小時抵達新千歲機場（號稱全日本最好逛機場！內建多啦A夢樂園、Royce巧克力工廠）',
      evening: '在機場免稅店大肆採買六花亭草莓巧克力、薯條三兄弟與哈密瓜果凍，登機返台',
      stayArea: '返抵台灣'
    }
  ],
  fukuoka: [
    {
      day: 1,
      title: '抵達福岡機場 ➔ 15分鐘進博多市區 ➔ 運河城水舞 ➔ 屋台夜市',
      theme: '九州玄關超速抵達',
      morning: '抵達福岡機場，搭乘地鐵僅需 5 分鐘即抵達博多站，效率全日本第一！',
      afternoon: '入住博多車站旁飯店，前往「博多運河城」欣賞壯麗立體水舞與拉麵競技館',
      evening: '體驗福岡在地文化「中洲屋台街」，坐在路邊攤棚內吃博多一口餃子、明太子玉子燒與牛雜鍋',
      stayArea: '建議住宿：博多車站或天神商圈',
      proTip: '福岡機場到市區只要 10~15 分鐘！是日本所有大城市中離市區最近的機場，不用太早提心吊膽趕飛機。'
    },
    {
      day: 2,
      title: '太宰府天滿宮參拜 ➔ 暖暮拉麵 ➔ 天神地下街大血拚',
      theme: '學問之神與九州潮流',
      morning: '搭乘西鐵觀光列車「旅人號」前往太宰府天滿宮，摸御神牛頭祈求開智慧，吃現烤熱呼呼梅枝餅',
      afternoon: '返回天神商圈，挑戰號稱全九州最大的「天神地下街」，連通各大型百貨無懼颳風下雨',
      evening: '前往一蘭拉麵本社總本店朝聖大紅提燈整棟建築，吃限定的「方碗拉麵」，宵夜續吃居酒屋',
      stayArea: '建議住宿：天神商圈或博多站前',
      ticketLink: { title: '太宰府柳川西鐵觀光套票 (含乘車券+柳川遊船)', url: 'https://afflink.one/s/J1H4B', platform: '特惠交通套票', priceHint: '一次暢遊兩大名勝' }
    },
    {
      day: 3,
      title: '搭乘「由布院之森」直奔由布院 ➔ 金鱗湖晨霧 ➔ 湯之坪童話街道',
      theme: '溫泉森林夢幻仙境',
      morning: '搭乘全木造墨綠色景觀列車「由布院之森」，沿途欣賞田園溪流，品嚐特色列車便當',
      afternoon: '抵達由布院（湯布院），漫步湯之坪童話小鎮，造訪史努比茶屋、吉卜力橡子共和國',
      evening: '散步至奇蹟般的「金鱗湖」，欣賞湖底湧出的冷泉與溫泉交織出的飄渺夢幻晨霧，入住頂級溫泉旅館',
      stayArea: '建議住宿：由布院頂級露天溫泉一泊二食',
      proTip: '由布院之森全車指定席且極度搶手！務必在一個月前日本時間早上 10:00 準時在 JR 官網劃位。'
    },
    {
      day: 4,
      title: '別府地獄溫泉巡禮 ➔ 返回博多最後採買伴手禮 ➔ 搭機返台',
      theme: '地獄奇景圓滿歸途',
      morning: '順遊別府觀賞蔚藍的海地獄與血紅的血池地獄，品嚐地獄蒸布丁與溫泉蛋',
      afternoon: '搭乘特急列車返回博多車站，在「博多銘品藏」掃貨福太郎明太子仙貝與努努雞',
      evening: '搭乘地鐵 5 分鐘抵達機場，免稅店採買九州限定草莓甜點，滿載幸福回台灣',
      stayArea: '返抵台灣'
    }
  ],
  seoul: [
    {
      day: 1,
      title: '抵達仁川機場 ➔ 搭乘 AREX 直達首爾站 ➔ 明洞商圈掃貨換匯',
      theme: '首爾心臟地帶啟航',
      morning: '仁川機場 (ICN) 入境，提前註冊 SeS 或 e-Arrival 電子入境卡絲滑出關，搭 AREX 直達首爾站',
      afternoon: '明洞「大使館換錢所」以台幣現鈔兌換韓元，入住明洞飯店置放行囊',
      evening: '直衝「明洞 Olive Young 旗艦店」現場滿額退稅大採購，邊逛街邊吃路邊攤辣炒年糕、糖葫蘆',
      stayArea: '建議住宿：明洞、弘大或東大門',
      proTip: '2026 韓國退稅新制：Olive Young 單筆滿 15,000 韓元即可在結帳櫃檯直接折抵免稅額，護照必隨身帶！',
      ticketLink: { title: '首爾機場快線 AREX 直通車票 (仁川機場 ➔ 首爾站 43分鐘)', url: 'https://afflink.one/s/J1H4B', platform: '必買交通票', priceHint: '直達免換車最省心' }
    },
    {
      day: 2,
      title: '景福宮韓服體驗 ➔ 三清洞北村韓屋村 ➔ 益善洞復古咖啡廳',
      theme: '朝鮮王朝穿越時空',
      morning: '早晨挑選華麗韓服與編髮造型，穿著韓服享景福宮免費入場！在興禮門前拍古裝大片',
      afternoon: '步行至北村韓屋村與三清洞文藝街，探訪傳統瓦頂老宅與現代設計選品店',
      evening: '走進「益善洞韓屋村」，在迷宮小巷中享用排隊名店「小夏鹽田」鹽麵包與蒸麵包，晚餐吃醬蟹定食',
      stayArea: '建議住宿：弘大或明洞',
      ticketLink: { title: '首爾景福宮西花韓服租借 (含精緻編髮/配件配飾)', url: 'https://afflink.one/s/J1H4B', platform: 'Klook 人氣韓服', priceHint: '穿韓服免門票入宮' }
    },
    {
      day: 3,
      title: '潮流聖地「聖水洞」探店 ➔ 首爾林文青漫步 ➔ 弘大夜生活街頭表演',
      theme: 'K-Trend 與潮流設計',
      morning: '前往首爾最夯工業風時尚聖地「聖水洞」，打卡 Dior 概念店與 Gentle Monster 旗艦巨型裝置',
      afternoon: '逛聖水洞各大型設計師快閃店 (Tamburins, Rockfish)，順遊首爾林綠意公園散步拍美照',
      evening: '傍晚前往「弘大商圈」，感受年輕街頭舞團熱力表演，晚餐吃荒謬的生肉烤五花肉吃到飽',
      stayArea: '建議住宿：弘大入口站周邊 (夜生活極度便利)'
    },
    {
      day: 4,
      title: '樂天世界主題樂園或星空圖書館 ➔ 東大門設計廣場 DDP',
      theme: '浪漫奇景與現代建築',
      morning: '前往蠶室「樂天世界」，穿韓國高中校服租借打卡室內夢幻城堡，玩西班牙海盜船',
      afternoon: '逛 COEX MALL 朝聖高達 13 公尺巨型書架的「星空圖書館 (Starfield Library)」',
      evening: '前往東大門 DDP 欣賞扎哈·哈迪德未來感飛碟建築與夜間玫瑰燈海，宵夜來碗陳玉華一隻雞',
      stayArea: '建議住宿：弘大或東大門',
      ticketLink: { title: '首爾樂天世界一日通票 (含水族館門票優惠)', url: 'https://afflink.one/s/J1H4B', platform: '主題樂園優惠', priceHint: '室內免日曬雨淋' }
    },
    {
      day: 5,
      title: '首爾站樂天超市最後衝刺 ➔ 預辦登機空手直奔機場 ➔ 返台',
      theme: '零行李逛街完美收尾',
      morning: '首爾站樂天超市 (Lotte Mart) 大買泡麵、海苔、杏仁果與人蔘伴手禮',
      afternoon: '在首爾站 AREX 預辦登機託運行李並通過出境審查！空手逛街到最後一刻再搭快線直奔機場',
      evening: '仁川機場使用 SmartPass 刷臉快速通過專用通道出境，登機前悠閒逛免稅店回台',
      stayArea: '返抵台灣',
      proTip: '搭乘華航/長榮/星宇或大韓搭 AREX 直通車，可在「首爾站地下一樓」直接預辦登機掛行李，省下拖大箱子的力氣！'
    }
  ],
  busan: [
    {
      day: 1,
      title: '降落金海機場 ➔ 地鐵直達海雲台 ➔ 海雲台沙灘與傳統市場海鮮煎餅',
      theme: '海港都會浪漫初遇',
      morning: '抵達釜山金海機場 (PUS)，搭乘輕軌與地鐵 2 號線直奔美麗的「海雲台」海灘',
      afternoon: '海雲台海景飯店 Check-in，沿著海灘步道散步餵海鷗，造訪冬柏島 APEC 世峰樓',
      evening: '逛「海雲台傳統市場」，品嚐名物盲鰻、辣炒年糕、魚糕串，晚餐享用伍班長烤肉',
      stayArea: '建議住宿：海雲台海景飯店',
      proTip: '購買「釜山通行證 (Visit Busan Pass) 24/48 小時版」，可免費進入超過 30 個頂級付費景點，性價比極高！',
      ticketLink: { title: '釜山通行證 Visit Busan Pass (實體卡/電子卡自由選)', url: 'https://afflink.one/s/J1H4B', platform: '釜山自由行神券', priceHint: '現省數千台幣門票' }
    },
    {
      day: 2,
      title: '海雲台天空膠囊列車 ➔ 青沙浦紅白燈塔 ➔ 廣安里無人機無敵夜景',
      theme: 'IG 爆紅夢幻海岸線',
      morning: '搭乘超萌彩色「海雲台天空膠囊列車 (Sky Capsule)」，在空中復古木軌道上俯瞰蔚藍大海',
      afternoon: '抵達青沙浦拍灌籃高手平交道空景，造訪紅白雙子燈塔與海景烤貝咖啡店',
      evening: '前往廣安里海水浴場，找家面海景觀咖啡廳卡位，週六晚間觀賞「廣安大橋無人機燈光秀」',
      stayArea: '建議住宿：海雲台或廣安里海景飯店',
      ticketLink: { title: '海雲台藍線公園天空膠囊列車 / 海岸列車指定席預約', url: 'https://afflink.one/s/J1H4B', platform: '熱門預訂', priceHint: '提早卡位海景側包廂' }
    },
    {
      day: 3,
      title: '甘川洞文化村探訪小王子 ➔ 白淺灘文化村 ➔ 影島海景咖啡街',
      theme: '童話彩色聚落與懸崖蔚藍',
      morning: '造訪韓國馬丘比丘「甘川洞文化村」，穿梭彩色階梯彩繪巷弄，排隊與小王子狐狸雕像背影合影',
      afternoon: '前往影島「白淺灘文化村」，沿著海邊峭壁白藍相間的步道漫步，打卡懸崖海景洞穴隧道',
      evening: '在影島工業風廢墟改建的巨大海景咖啡館 P.ARK 喝下午茶，晚餐享用南浦洞人參雞湯',
      stayArea: '建議住宿：南浦洞或釜山站前'
    },
    {
      day: 4,
      title: '松島海上透明纜車 ➔ 札嘎其海鮮市場 ➔ 樂天百貨光復店返台',
      theme: '海陸全景與海鮮告別',
      morning: '搭乘松島海上纜車水晶車廂橫越海面，走訪松島龍宮雲橋天空步道感受懸空刺激',
      afternoon: '前往全韓國最大的「札嘎其海鮮市場」，一樓現挑長腳蟹生魚片，二樓立刻現煮大快朵頤',
      evening: '樂天百貨光復店採買伴手禮並欣賞室內室內音樂噴泉秀，搭乘地鐵回金海機場滿載回國',
      stayArea: '返抵台灣'
    }
  ],
  phuquoc: [
    {
      day: 1,
      title: '直飛富國島 (台灣免簽證) ➔ 入住五星海灘渡假村 ➔ 日落海灘酒吧',
      theme: '熱帶秘境奢華度假',
      morning: '搭乘星宇/越捷直飛富國島國際機場 (PQC)，享受全越南「唯一台灣 30 天免簽證」絲滑入境！',
      afternoon: '入住奢華海景渡假村私人沙灘（物價只要泰國峇里島的一半！），游泳池畔放空享用迎賓椰子汁',
      evening: '前往 OCSEN Beach Bar & Club 躺在沙灘橘色懶人沙發上看落日晚霞與火舞秀表演',
      stayArea: '建議住宿：中部楊東鎮或南部日落小鎮五星渡假村',
      proTip: '富國島免簽僅限直飛或在富國島轉機直出！若要入境越南本島轉機必須先申辦越南電子簽證 (E-Visa)。'
    },
    {
      day: 2,
      title: '珍珠野生動物園 Safari ➔ 珍珠奇幻樂園 VinWonders 巨大海龜水族館',
      theme: '非洲野生動物與奇幻世界',
      morning: '造訪全亞洲最大的「富國島珍珠野生動物園」，搭乘防彈遊園車零距離觀賞獅子、長頸鹿與犀牛',
      afternoon: '前往「珍珠奇幻樂園 (VinWonders)」，打卡全世界最大的巨型海龜造型水族館與水上樂園',
      evening: '晚上觀賞耗資億萬的城堡前奇幻水舞光影秀，漫步歐式彩色童話小鎮享用越式河粉',
      stayArea: '建議住宿：北部珍珠度假村或中部飯店',
      ticketLink: { title: '富國島珍珠奇幻樂園 + 野生動物園雙園超值聯票', url: 'https://afflink.one/s/J1H4B', platform: '官方直營套票', priceHint: '一日暢玩雙樂園' }
    },
    {
      day: 3,
      title: '世界最長跨海纜車 ➔ 太陽世界香島自然公園 ➔ 地中海日落小鎮',
      theme: '金氏世界紀錄跨海奇景',
      morning: '搭乘金氏世界紀錄全長 7,899 公尺的「太陽世界跨海纜車」，在空中 360 度俯瞰絕美七彩漁村海景',
      afternoon: '在香島水上樂園狂玩漂漂河與滑水道，午後返回安泰碼頭旁的「地中海日落小鎮」',
      evening: '走上富國島最新地標「親吻之橋 (Kiss Bridge)」，夜間欣賞國際級多媒體水舞煙火大秀《海洋之吻》',
      stayArea: '建議住宿：日落小鎮或楊東鎮渡假飯店',
      ticketLink: { title: '太陽世界跨海纜車 + 香島自然公園門票', url: 'https://afflink.one/s/J1H4B', platform: '優惠門票', priceHint: '含水上樂園' }
    },
    {
      day: 4,
      title: '海星沙灘浮潛 / 快艇跳島 ➔ 富國夜市大啖平價海鮮 ➔ 越式SPA按摩',
      theme: '海島冒險與夜市狂歡',
      morning: '包車前往白沙細軟的秘密海灘，欣賞淺灘可愛野生海星，或搭快艇前往指甲島透明海域浮潛',
      afternoon: '享受道地 90 分鐘越式熱石草藥精油 SPA 按摩，徹底洗去一身出遊疲憊（台幣千元有找！）',
      evening: '殺進熱鬧非凡的「富國夜市 (Phu Quoc Night Market)」，品嚐炭烤海膽、炒冰、花生酥與胡椒粉伴手禮',
      stayArea: '建議住宿：楊東鎮中心'
    },
    {
      day: 5,
      title: '渡假村無邊際泳池晨泳 ➔ 金剛超市最後掃貨 ➔ 免稅直飛回台',
      theme: '海島慢活收官之作',
      morning: '早晨在渡假村享用豐盛的越式自助早餐與滴漏冰咖啡，泳池畔享受最後悠閒時光',
      afternoon: '前往富國島最大的「金剛超市 (King Kong Mart)」，大肆採買富國島頂級黑胡椒、腰果、魚露與越式咖啡',
      evening: '專車接駁至富國島機場免稅店，直飛返回台灣，結束夢幻無比的平價海島假期',
      stayArea: '返抵台灣'
    }
  ]
};

export default function AIItineraryPlanner() {
  const [selectedDest, setSelectedDest] = useState<DestinationKey>('tokyo');
  const [selectedDays, setSelectedDays] = useState<number>(5);
  const [selectedCompanion, setSelectedCompanion] = useState<CompanionType>('family');
  const [selectedFocus, setSelectedFocus] = useState<FocusType>('attractions');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [showLineModal, setShowLineModal] = useState<boolean>(false);
  const [modalAction, setModalAction] = useState<'maps' | 'pdf' | 'custom'>('maps');
  const [copiedId, setCopiedId] = useState<boolean>(false);

  // 當前選中的目的地行程列表 (依天數裁剪)
  const fullItinerary = ITINERARY_DATA[selectedDest] || ITINERARY_DATA.tokyo;
  const currentItinerary = useMemo(() => {
    return fullItinerary.slice(0, Math.min(selectedDays, fullItinerary.length));
  }, [fullItinerary, selectedDays]);

  const currentDestObj = DESTINATIONS.find(d => d.key === selectedDest)!;

  // 模擬觸發「AI 重新生成/微調」動態效果
  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setExpandedDay(1);
    }, 400);
  };

  const handleOpenModal = (action: 'maps' | 'pdf' | 'custom') => {
    setModalAction(action);
    setShowLineModal(true);
  };

  const handleCopyLineId = () => {
    navigator.clipboard.writeText('@449fhwsb');
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="itinerary" className="space-y-8 scroll-mt-24">
      {/* 區塊頂部標題 */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border-2 border-black sketch-border px-4 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_#000]">
          <Sparkles className="w-4 h-4 text-indigo-600 animate-spin" />
          <span>黑白飛 3B 懶人專屬 ✕ AI 智能行程引擎</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">
          【AI 智能客製行程規劃師】
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          不想動腦排行程？點選你的出國城市、天數與同行成員，<strong>1 秒自動生成專屬順遊路書、交通換乘與避坑秘笈！</strong>
        </p>
      </div>

      {/* 控制面板：條件選取器 */}
      <div className="sketch-border bg-white p-6 md:p-8 border-2 border-black border-r-4 border-b-4 relative shadow-sm">
        {/* 裝飾膠帶 */}
        <div className="absolute -top-3 left-8 w-28 h-6 bg-yellow-200/80 rotate-[-2deg] sketch-border z-10"></div>

        <div className="space-y-6">
          {/* 1. 目的地選擇 */}
          <div>
            <label className="flex items-center gap-2 font-bold text-lg mb-3">
              <MapPin className="w-5 h-5 text-red-500" /> 第一步：選擇想去的城市 / 國家
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {DESTINATIONS.map((dest) => (
                <button
                  key={dest.key}
                  onClick={() => { setSelectedDest(dest.key); handleRegenerate(); }}
                  className={`p-3 text-left sketch-border border-2 transition-all flex flex-col justify-between ${
                    selectedDest === dest.key
                      ? 'bg-black text-white shadow-[3px_3px_0px_0px_#4f46e5] translate-x-[-1px] translate-y-[-1px]'
                      : 'bg-gray-50 hover:bg-yellow-50 text-gray-900 border-black'
                  }`}
                >
                  <span className="font-bold text-base leading-snug">{dest.name}</span>
                  <span className={`text-xs mt-1 font-medium ${selectedDest === dest.key ? 'text-gray-300' : 'text-gray-500'}`}>
                    {dest.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. 旅遊天數 & 同行成員 */}
          <div className="grid md:grid-cols-2 gap-6 pt-2 border-t-2 border-dashed border-gray-200">
            {/* 天數 */}
            <div>
              <label className="flex items-center gap-2 font-bold text-base mb-2.5">
                <Calendar className="w-4 h-4 text-blue-600" /> 第二步：預計遊玩天數
              </label>
              <div className="flex gap-2">
                {[4, 5, 6].map((days) => (
                  <button
                    key={days}
                    onClick={() => { setSelectedDays(days); handleRegenerate(); }}
                    className={`flex-1 py-2.5 px-3 font-bold sketch-border border-2 transition-all text-sm ${
                      selectedDays === days
                        ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                        : 'bg-white hover:bg-gray-100 text-gray-800'
                    }`}
                  >
                    {days} 天 {days - 1} 夜
                  </button>
                ))}
              </div>
            </div>

            {/* 同行成員 */}
            <div>
              <label className="flex items-center gap-2 font-bold text-base mb-2.5">
                <Users className="w-4 h-4 text-emerald-600" /> 第三步：同行隊友組合
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {COMPANIONS.map((comp) => (
                  <button
                    key={comp.key}
                    onClick={() => { setSelectedCompanion(comp.key); handleRegenerate(); }}
                    className={`py-2 px-2.5 font-bold sketch-border border-2 text-xs flex items-center justify-center gap-1.5 transition-all ${
                      selectedCompanion === comp.key
                        ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                        : 'bg-white hover:bg-gray-100 text-gray-800'
                    }`}
                    title={comp.desc}
                  >
                    <span>{comp.icon}</span>
                    <span>{comp.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. 核心遊玩風格 */}
          <div className="pt-2 border-t-2 border-dashed border-gray-200">
            <label className="flex items-center gap-2 font-bold text-base mb-2.5">
              <Compass className="w-4 h-4 text-amber-600" /> 第四步：旅遊重點風格
            </label>
            <div className="flex flex-wrap gap-2.5">
              {FOCUSES.map((f) => (
                <button
                  key={f.key}
                  onClick={() => { setSelectedFocus(f.key); handleRegenerate(); }}
                  className={`py-2 px-4 font-bold sketch-border border-2 text-xs md:text-sm flex items-center gap-2 transition-all ${
                    selectedFocus === f.key
                      ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                      : 'bg-white hover:bg-gray-100 text-gray-800'
                  }`}
                >
                  <span>{f.icon}</span>
                  <span>{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 智能生成結果展示區塊 */}
      <div className="relative">
        {isGenerating ? (
          <div className="sketch-border bg-white p-12 text-center space-y-4">
            <div className="inline-block animate-spin text-3xl">✈️</div>
            <p className="font-bold text-lg">AI 智能引擎正在為您計算最佳地鐵路徑與避坑時刻表...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* 行程總覽橫幅 */}
            <div className="bg-neutral-900 text-white p-5 md:p-6 sketch-border border-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-yellow-400 text-black text-xs font-black px-2 py-0.5 sketch-border">
                    AI 專屬推薦
                  </span>
                  <span className="text-gray-300 text-xs font-bold">
                    已依「{COMPANIONS.find(c => c.key === selectedCompanion)?.label}」調校最佳步行步頻
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  【{currentDestObj.name}】{selectedDays} 天 {selectedDays - 1} 夜黃金客製行程
                </h3>
              </div>

              {/* 雙軌變現核心按鈕：Google Maps 匯出 ＋ 下載 PDF ＋ LINE 諮詢 */}
              <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
                <button
                  onClick={() => handleOpenModal('maps')}
                  className="flex-1 md:flex-initial bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs md:text-sm px-3.5 py-2 sketch-border flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-4 h-4" /> 匯入 Google Maps
                </button>
                <button
                  onClick={() => handleOpenModal('pdf')}
                  className="flex-1 md:flex-initial bg-white hover:bg-gray-100 text-black font-black text-xs md:text-sm px-3.5 py-2 sketch-border flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-4 h-4" /> 下載 PDF 路書
                </button>
                <button
                  onClick={() => handleOpenModal('custom')}
                  className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs md:text-sm px-3.5 py-2 sketch-border flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> LINE 專人微調
                </button>
              </div>
            </div>

            {/* 每日詳細時間軸列表 */}
            <div className="space-y-4">
              {currentItinerary.map((dayPlan) => {
                const isOpen = expandedDay === dayPlan.day;
                return (
                  <div 
                    key={dayPlan.day}
                    className="sketch-border bg-white border-2 border-black overflow-hidden transition-all shadow-sm"
                  >
                    {/* 折疊標題列 */}
                    <button
                      onClick={() => setExpandedDay(isOpen ? null : dayPlan.day)}
                      className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 md:gap-4 flex-1">
                        <div className="bg-black text-white font-black text-sm md:text-base px-3 py-1.5 sketch-border shrink-0">
                          DAY {dayPlan.day}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-black text-base md:text-lg text-gray-900 truncate">
                            {dayPlan.title}
                          </h4>
                          <span className="text-xs text-indigo-600 font-bold hidden sm:inline-block">
                            📌 主題：{dayPlan.theme}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 shrink-0">
                        <span className="text-xs font-bold hidden md:inline">
                          {isOpen ? '收合' : '查看詳情'}
                        </span>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-black" /> : <ChevronDown className="w-5 h-5 text-black" />}
                      </div>
                    </button>

                    {/* 展開之行程內容 */}
                    {isOpen && (
                      <div className="p-4 md:p-6 border-t-2 border-black border-dashed bg-stone-50/50 space-y-5">
                        {/* 晨間、午後、夜間三段時間軸 */}
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-white p-3.5 sketch-border border border-black/40 space-y-1">
                            <span className="text-xs font-black bg-amber-100 text-amber-900 px-2 py-0.5 sketch-border inline-block">
                              🌅 上午行程
                            </span>
                            <p className="text-xs md:text-sm text-gray-800 leading-relaxed font-medium pt-1">
                              {dayPlan.morning}
                            </p>
                          </div>

                          <div className="bg-white p-3.5 sketch-border border border-black/40 space-y-1">
                            <span className="text-xs font-black bg-blue-100 text-blue-900 px-2 py-0.5 sketch-border inline-block">
                              ☀️ 下午行程
                            </span>
                            <p className="text-xs md:text-sm text-gray-800 leading-relaxed font-medium pt-1">
                              {dayPlan.afternoon}
                            </p>
                          </div>

                          <div className="bg-white p-3.5 sketch-border border border-black/40 space-y-1">
                            <span className="text-xs font-black bg-indigo-100 text-indigo-900 px-2 py-0.5 sketch-border inline-block">
                              🌙 晚間美食/夜景
                            </span>
                            <p className="text-xs md:text-sm text-gray-800 leading-relaxed font-medium pt-1">
                              {dayPlan.evening}
                            </p>
                          </div>
                        </div>

                        {/* 黑白飛避坑秘笈 (Pro Tip) */}
                        <div className="bg-yellow-50 border-2 border-black sketch-border p-3.5 flex items-start gap-3 shadow-xs">
                          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                          <div className="text-xs md:text-sm text-amber-950 leading-relaxed">
                            <strong>💡 黑白飛在地避坑密技：</strong>
                            {dayPlan.proTip}
                          </div>
                        </div>

                        {/* 聯盟行銷轉化卡片 (軌道 3A 輕量自主預訂) */}
                        <div className="pt-2 flex flex-wrap gap-2.5">
                          {dayPlan.ticketLink && (
                            <a
                              href={dayPlan.ticketLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-3.5 py-2 sketch-border transition-colors group"
                            >
                              <Ticket className="w-3.5 h-3.5 text-yellow-300" />
                              <span>{dayPlan.ticketLink.title}</span>
                              <span className="bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
                                {dayPlan.ticketLink.priceHint}
                              </span>
                              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          )}

                          {dayPlan.hotelLink ? (
                            <a
                              href={dayPlan.hotelLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs px-3.5 py-2 sketch-border border border-black transition-colors"
                            >
                              <Hotel className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{dayPlan.hotelLink.title}</span>
                              <ExternalLink className="w-3 h-3 text-gray-400" />
                            </a>
                          ) : (
                            <div className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 sketch-border">
                              <Hotel className="w-3.5 h-3.5 text-gray-500" />
                              <span>{dayPlan.stayArea}</span>
                            </div>
                          )}

                          <a
                            href="https://afflink.one/s/J1H4B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-gray-700 hover:text-black font-bold px-3 py-1.5 sketch-border bg-white ml-auto"
                          >
                            <Wifi className="w-3.5 h-3.5 text-blue-500" />
                            <span>日韓免換卡 eSIM 吃到飽</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 底部行動呼籲：私域流量池沉澱 (步驟四 名單收集) */}
            <div className="sketch-border bg-emerald-50 border-2 border-black p-6 md:p-8 text-center space-y-4">
              <div className="inline-flex items-center gap-2 text-emerald-900 font-black text-lg md:text-xl">
                <HeartHandshake className="w-6 h-6 text-emerald-700" />
                <span>想要保存此行程，或有特殊需求想微調？</span>
              </div>
              <p className="text-emerald-950 text-sm max-w-xl mx-auto leading-relaxed">
                加入【黑白飛 Fly B&W】官方 LINE，立即免費取得：
                <strong>全套 Google Maps 景點地圖釘選包</strong>、<strong>高解析度可列印手帳 PDF</strong>，
                或是由黑白飛團隊為您與家人提供 1 對 1 行李超重與行程避坑建議！
              </p>
              <div className="flex justify-center gap-3 flex-wrap pt-2">
                <button
                  onClick={() => handleOpenModal('custom')}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base px-6 py-3 sketch-border shadow-[3px_3px_0px_0px_#000] flex items-center gap-2 transition-all"
                >
                  <MessageCircle className="w-5 h-5" /> 加入 LINE 立即領取 / 諮詢
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* LINE 導流與名單捕捉彈窗 (Lead Capture Modal) */}
      <AnimatePresence>
        {showLineModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white sketch-border border-4 border-black p-6 md:p-8 max-w-lg w-full relative space-y-5 shadow-2xl"
            >
              {/* 關閉按鈕 */}
              <button
                onClick={() => setShowLineModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-xl p-1"
              >
                ✕
              </button>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black">
                  {modalAction === 'maps' && '📲 一鍵匯入 Google Maps'}
                  {modalAction === 'pdf' && '📄 免費下載高解析度列印版 PDF'}
                  {modalAction === 'custom' && '💬 LINE 專人客製行程諮詢'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {modalAction === 'maps' && '我們已將此行程全部景點與地鐵站標註在地圖中！加入 LINE 發送關鍵字即可秒開。'}
                  {modalAction === 'pdf' && '包含每日詳細時程表、打包行李清單與小資記帳頁面，列印出來隨身帶！'}
                  {modalAction === 'custom' && '出國有帶長輩或幼兒？直接告訴我們您的需求，團隊為您進行專屬路線優化。'}
                </p>
              </div>

              {/* LINE 官方帳號資訊卡片 */}
              <div className="sketch-border border-2 border-black bg-gray-50 p-4 text-center space-y-3">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  黑白飛 Fly B&W 官方 LINE 服務窗口
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl font-mono font-black bg-white px-3 py-1 sketch-border border border-black">
                    @449fhwsb
                  </span>
                  <button
                    onClick={handleCopyLineId}
                    className="p-1.5 bg-black text-white sketch-border hover:bg-gray-800 transition-colors text-xs font-bold flex items-center gap-1"
                  >
                    {copiedId ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId ? '已複製' : '複製 ID'}</span>
                  </button>
                </div>
                <p className="text-xs text-gray-600">
                  加入好友後請傳送訊息：<strong>「{currentDestObj.name} 行程」</strong>，系統將自動回傳下載載點！
                </p>
              </div>

              {/* 直達按鈕 */}
              <div className="space-y-2 pt-2">
                <a
                  href="https://line.me/R/ti/p/@449fhwsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-base py-3 sketch-border flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" /> 開啟 LINE App 加入好友
                </a>
                <button
                  onClick={() => setShowLineModal(false)}
                  className="w-full text-center text-xs text-gray-500 hover:text-gray-800 font-bold py-1"
                >
                  稍後再說，先繼續瀏覽網頁
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
