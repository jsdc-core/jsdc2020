//- name: 講者名字, description: 作者介紹, image: 照片
// ## option ##
//- company: 公司/組織
//- 額外連結們: github, twitter, link, linkedin

const mainSpeakers = {
  ashi: {
    name: "ashi",
    isKeynote: false,
    company: "",
    description: "",
    image: "ashi.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/queerviolet",
      twitter: "https://twitter.com/rakshesha",
    },
    abouts: {
      link: "https://ashi.io",
      text: "About Me",
    },
  },
  Carlos: {
    name: "Carlos Rufo",
    isKeynote: false,
    company: "GraphQL Hong Kong",
    description:
      "Carlos is a passionate developer and speaker aficionado. While he codes with different B/FE techs, his go-to for every project is his crush: GraphQL. He is very active in the GraphQL ecosystem where he has collaborated with across numerous internal & external projects, such as SpaceX GraphQL API and recently, organizing GraphQL Hong Kong.",
    image: "carlos.jpg",
    agenda: {
      title: "End-to-end Type-Safe GraphQL Apps",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "Discover all the benefits for adding End-to-end Type-Safety to your GraphQL Apps with this demo-based talk.<br/> You’ll want to refactor your codebase in order to take the advantages of TypeScript, GraphQL & React working together. Apollo GraphQL Server/Client, auto-generated TypeScript types & React Hooks would build the pillars of a SpaceX demo.",
    },
    links: {
      github: "https://github.com/swcarlosrj",
      twitter: "https://twitter.com/swcarlosrj",
    },
  },
  Chi: {
    name: "七念/吴敏琦",
    isKeynote: false,
    company: "阿里巴巴",
    description:
      "2012年從 IBM 加入淘寶，曾負責淘寶前端數據產品和創新技術產品團隊，後負責 Node.js 基礎架構團隊，並擔任阿里巴巴前端委員會 Node.js 方向負責人。推動 Node.js 應用的穩定性治理，推動無服務器技術落地前端場景。同時也是節點地下鐵線下沙龍創始人。",
    image: "chi.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {},
  },
  David: {
    name: "David Khourshid",
    isKeynote: false,
    company: "Microsoft",
    description:
      "David Khourshid is a Microsoft software engineer with a passion for innovative user interfaces, animations, software modeling, and cutting-edge front-end technologies. He's the creator of XState, a library that brings state machines and statecharts to the modern web and enables app logic to be visualized, simulated, tested, analyzed, and more. He's also half of the Keyframers, a weekly coding live-stream where imaginative user interfaces are brought to life. When not speaking around the world or coding behind a laptop keyboard, he's usually behind a piano keyboard.",
    image: "david.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/davidkpiano",
      twitter: "https://twitter.com/davidkpiano",
    },
  },
  dexteryy: {
    name: "dexteryy 楊揚",
    isKeynote: false,
    company: "ByteDance（字節跳動）",
    description:
      "06年之前是中國最大D＆D / TRPG資料站「最深的地下城」的站長，美漫漢化組創始人和網設計師，此後一直是JS Hacker和Web App開發者（開發+設計+產品）。先後在土豆網，豆瓣，Flipboard，引人注目的負責JS基礎工程和創新產品，最喜歡的產品有2D虛擬世界社區「阿爾法城」，全球最快的EOS區塊鏈瀏覽器eosx.io。一直努力推動JS技術和Web開發技術的演進，為此做過OzJS，DarkDOM / CardKit，WebCube，“現代Web開發咒語大全”等開源項目，目前在字節跳動負責Web Dev Engine方向，打造下一代框架和工具產品。",
    image: "dexteryy.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/dexteryy",
      twitter: "https://twitter.com/dexteryy",
    },
  },
  Erik: {
    name: "Erik Rasmussen",
    isKeynote: false,
    company: "",
    description:
      " American expat JavaScript developer in Spain, author of Redux Form and React Final Form.",
    image: "erik.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/https://github.com/erikras",
      twitter: "https://twitter.com/erikras",
    },
  },
  Jan: {
    name: "Jan-Niklas Wortmann",
    isKeynote: false,
    company: "E.ON SE",
    description:
      "Jan-Niklas Wortmann is an IT consultant mostly working on Angular projects. He helps companies in designing and implementing large scaled applications. Developing clean and maintainable code is one of his main goals. Additionally, Jan-Niklas is a member of the RxJS Core Team targeting the developer experience by improving the docs. Besides he organizes the NgNiederrhein Meetup.",
    image: "jan.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/JWO719",
      twitter: "https://twitter.com/niklas_wortmann",
    },
  },
  Jesse: {
    name: "Jesse",
    isKeynote: false,
    company: "LINE Fukuoka",
    description:
      "前 KKBOX Video Department 到 KKTV 早期網頁版的唯一開發者。現居福岡，持續著上班前去衝浪的興趣",
    image: "jesse.jpeg",
    agenda: {
      title: "",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/ddhp",
    },
  },
  Johann: {
    name: "鍾恆",
    isKeynote: false,
    company: "tubitv",
    description:
      "曾在騰訊，阿里巴巴，360入職。專注於大型前端軟件和視頻播放領域。",
    image: "johann.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/toxic-johann",
      twitter: "https://twitter.com/toxic_johann",
    },
  },
  Maya: {
    name: "Maya Shavin",
    isKeynote: false,
    company: "Cloudinary",
    description:
      "Maya is a Senior Frontend Developer @Cloudinary, founder and organiser of VueJS Israel, core maintainer of StorefrontUI and blogger on Frontend Weekly and Ultimate Courses where she mainly writes articles about JavaScript tutorials and good practices. She has been developing web apps with Angular, VueJS and recently ReactJS. She loves to learn and experiment with new framework, while believing that a strong Vanilla JavaScript knowledge is necessary for being a good web developer. When not coding, she enjoys traveling, reading manga, and sketching.",
    image: "maya.png",
    agenda: {
      title: "",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/mayashavin",
      twitter: "https://twitter.com/MayaShavin",
    },
  },
  Paipo: {
    name: "Paipo",
    isKeynote: false,
    company: "Mercari",
    description: "A frontend engineer who does sports and philosophy.",
    image: "paipo.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/pptang",
      twitter: "https://twitter.com/pptang17",
    },
  },
  //- Perfect: {
  //-   name: 'Perfect Makanju',
  //-   isKeynote: false,
  //-   company: 'Terminal Systems',
  //-   description: 'Experienced Software Engineer with interests in decentralized applications.',
  //-   image: 'perfact.jpg',
  //-   agenda: {
  //-     title: '',
  //-     levels: [],
  //-     lang: 'EN',
  //-     type: '',
  //-     youtube: '',
  //-     slide: '',
  //-     outline_E: '',
  //-     outline: ''
  //-   },
  //-   links: {
  //-     github: 'https://github.com/perfectmak',
  //-     twitter:'https://twitter.com/Perfectmak'
  //-   }
  //- },
  Tun: {
    name: "吞吞",
    isKeynote: false,
    company: "YodaOS Project",
    description:
      "吞吞/ @ legendecas /語言愛好者/喜歡貓/不救公主只顧瞎逛炸魚/ Node.js Core 貢獻者",
    image: "tun.png",
    agenda: {
      title: "",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/legendecas",
    },
  },
  Tzu: {
    name: "黃慈霖 Tzu-Lin Huang",
    isKeynote: false,
    company: "LINE Fukuoka",
    description:
      "誤打誤撞在完全不會日文的狀況下來到日本福岡工作的台灣人 (絶賛勉強中)",
    image: "tzu.jpeg",
    agenda: {
      title: "",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/dwi2",
    },
  },
  Vladimir: {
    name: "Vladimir Mutafov",
    isKeynote: false,
    company: "Pusher",
    description:
      "Vladimir Mutafov is a software engineer on the NativeScript team at Progress Software. He's working on the NativeScript Android Runtime which provides all the high-performant JS to Java communication support.",
    image: "vladimir.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/vmutafov",
      twitter: "https://twitter.com/VladimirMutafov",
    },
  },
  Yorkie: {
    name: "Yorkie",
    isKeynote: false,
    company: "Rokid",
    description:
      "Rokid 研發工程師，開源愛好者，Node.js Collaborator，ShadowNode 作者，目前主攻：Node.js 在 AIoT 領域的應用，並負責 YodaOS 的社區推廣工作。五年 JavaScript 開發經驗，曾就職於：SeedMail，Pixbi，阿里巴巴，目前就職於 Rokid 基礎平台研發中心，主要工作方向為基於 JavaScript 的物聯網操作系統。近年來參與並負責 YodaOS 項目，將 IoT 和 AI 能力開放給 Node.js 社區，並實現了 Node.js 在 IoT 場景的產品級落地。同時也是 Node.js Collaborator，ShadowNode 和 TensorFlow-Node.js 作者，開源發燒友，目前給 60 個開源項目貢獻過代碼。",
    image: "yorkie.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/yorkie",
      twitter: "https://twitter.com/yorkienell",
    },
  },
}

const workshopSpeakers = {
  Fred: {
    name: "Fred",
    isKeynote: false,
    company: "Brobridge",
    description:
      "傲嬌的開放原始碼開發者，曾為 LXDE 核心開發者，醉心於系統程式、Linux 核心、桌面應用程式及各類 Web技術，時而公開貢獻各種開發成果或心得於網路上。也是一個打不死的創業者，這些年陸續參與許多團隊與創業計畫，接觸過各類 App 開發、線上服務、遊戲開發甚至是區塊鏈技術，現在投入金融領域的 IT 技術解決方案。過去曾協助各種社群活動，並成立黑客松台灣以推廣黑客松文化，也協助企業組織推動內部創新革命和開放分享精神。",
    image: "fred.jpg",
    agenda: {
      title: "微服務架構告訴我粗大不一定好，短小精幹才是王道",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "現在主流的軟體架構趨勢之下，Node.js 所扮演的角色為何？我們怎麼使用 Node.js 來實現新的架構？",
    },
    links: {
      github: "https://github.com/cfsghost/",
    },
  },
  Irene: {
    name: "Irene",
    isKeynote: false,
    company: "Google Taiwan",
    description:
      "現任 Google Taiwan - Assistant Mobile Solutions Consultant (Temp)，致力於推廣 Mobile Web 相關技術，包括 Accelerate Mobile Pages (AMP), Progressive Web App (PWA), User Experience (UX) 與 web optimization 等。平面設計出身，4 年網頁設計與開發經歷。咖啡成癮的貓奴，喜歡撞球和小酌。",
    image: "irene.jpg",
    agenda: {
      title: "先別管大亂鬥了，你聽過 AMP 嗎？",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "AMP 是 Google 根據開放原始碼格式所設計的網頁開發框架，能夠加快網頁載入速度進而提升使用者體驗。本議程將簡單介紹 AMP 是什麼與其特色。",
    },
    links: {
      github: "https://github.com/irene84111",
      facebook: "https://www.facebook.com/irene.yayin",
    },
  },
  Kuro: {
    name: "Kuro",
    isKeynote: false,
    company: "Vue.js Taiwan",
    description: "Vue.js Taiwan 雜工",
    image: "kurohsu.jpg",
    agenda: {
      title: "我有一堆選擇 Vue 開發框架的理由",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide:
        "https://speakerdeck.com/kurotanshi/jsdc2019-wo-you-dui-xuan-ze-vue-kai-fa-kuang-jia-de-li-you ",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/kurotanshi/",
      facebook: "https://www.facebook.com/kurotanshi/ ",
    },
  },
  Paul: {
    name: "mei",
    isKeynote: false,
    company: "Verizon Media",
    description: "",
    image: "paul.png",
    agenda: {
      title: "the Rising",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "https://blog.lalacube.com/mei/Reveal_the_rising.php",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/meistudioli/",
      facebook: "https://www.facebook.com/mei.studio.li",
    },
  },
  SamLee: {
    name: "Sam Lee (山姆大叔)",
    isKeynote: false,
    company: "趨勢科技",
    description: "熱衷於前後端的技術, 希望 Javascript 統一天下",
    image: "sam.png",
    agenda: {
      title: "給我一個放棄 React 開發框架的理由",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide:
        "https://drive.google.com/open?id=0B3C-AM4bC8JFOGs2eFFubWt1OG10V0lFMGdVMWhjQkJZbDJv ",
      outline_E: "",
      outline:
        "為什麼要使用 React ? <br/> 什麼時候使用 React ? <br/> 你真的適合 React? <br/> 從不同的角度與面向來分享 React 這條路",
    },
    links: {
      facebook: "https://www.facebook.com/leeabc",
    },
  },
  W: {
    name: "Will 保哥",
    isKeynote: true,
    company: "多奇數位創意有限公司",
    description:
      "現任多奇數位創意有限公司技術總監。2019 榮獲 Microsoft Regional Director (RD)、2018 年榮獲 Angular/Web GDE (Google Developer Expert) 開發專家。連續 12 度當選微軟最有價值專家 (Developer Technologies)。熟悉 Web 開發技術、網站效能調校、.NET/C# 開發技術、SQL Server 資料庫開發、Docker 與 Kubernetes。曾擔任 Visual Studio 2010 上市發表會講師、MSDN 講座講師、TechDays Taiwan 2010~2015 講師、TechEd China 2011, 2013 講師，出版著作有 ASP.NET MVC 2 開發實戰、Windows Phone 開發實戰、ASP.NET MVC 4 開發實戰等書籍。2013 年曾獲選第 6 屆iT邦幫忙鐵人賽年度大獎與開發技術組年度鐵人。",
    image: "will.png",
    agenda: {
      title: "給我一個拒絕 Angular 開發框架的理由",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide:
        "https://drive.google.com/open?id=0B3C-AM4bC8JFbklZXzBEM3hkd0lFYzVJaFh4NkJqc3UybUE0 ",
      outline:
        "許多前端開發人員經常面臨前端框架的選擇問題，這個場次我將分享多年來在 Angular 開發、導入、教學方面的實務經驗，幫助大家評斷自身團隊是否適用 Angular 開發框架。",
      outline_E: "",
    },
    links: {
      github: "https://github.com/doggy8088/",
      facebook: "https://www.facebook.com/will.fans",
    },
  },
}

const speakers = {
  Fred: {
    name: "Fred",
    isKeynote: false,
    company: "Brobridge",
    description:
      "傲嬌的開放原始碼開發者，曾為 LXDE 核心開發者，醉心於系統程式、Linux 核心、桌面應用程式及各類 Web技術，時而公開貢獻各種開發成果或心得於網路上。也是一個打不死的創業者，這些年陸續參與許多團隊與創業計畫，接觸過各類 App 開發、線上服務、遊戲開發甚至是區塊鏈技術，現在投入金融領域的 IT 技術解決方案。過去曾協助各種社群活動，並成立黑客松台灣以推廣黑客松文化，也協助企業組織推動內部創新革命和開放分享精神。",
    image: "fred.jpg",
    agenda: {
      title: "微服務架構告訴我粗大不一定好，短小精幹才是王道",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "現在主流的軟體架構趨勢之下，Node.js 所扮演的角色為何？我們怎麼使用 Node.js 來實現新的架構？",
    },
    links: {
      github: "https://github.com/cfsghost/",
    },
  },
  Kuro: {
    name: "Kuro",
    isKeynote: false,
    company: "Vue.js Taiwan",
    description: "Vue.js Taiwan 雜工",
    image: "kurohsu.jpg",
    agenda: {
      title: "我有一堆選擇 Vue 開發框架的理由",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide:
        "https://speakerdeck.com/kurotanshi/jsdc2019-wo-you-dui-xuan-ze-vue-kai-fa-kuang-jia-de-li-you ",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/kurotanshi/",
      facebook: "https://www.facebook.com/kurotanshi/ ",
    },
  },
  Paul: {
    name: "mei",
    isKeynote: false,
    company: "Verizon Media",
    description: "",
    image: "paul.png",
    agenda: {
      title: "the Rising",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "https://blog.lalacube.com/mei/Reveal_the_rising.php",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/meistudioli/",
      facebook: "https://www.facebook.com/mei.studio.li",
    },
  },
  SamLee: {
    name: "Sam Lee (山姆大叔)",
    isKeynote: false,
    company: "趨勢科技",
    description: "熱衷於前後端的技術, 希望 Javascript 統一天下",
    image: "sam.png",
    agenda: {
      title: "給我一個放棄 React 開發框架的理由",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide:
        "https://drive.google.com/open?id=0B3C-AM4bC8JFOGs2eFFubWt1OG10V0lFMGdVMWhjQkJZbDJv ",
      outline_E: "",
      outline:
        "為什麼要使用 React ? <br/> 什麼時候使用 React ? <br/> 你真的適合 React? <br/> 從不同的角度與面向來分享 React 這條路",
    },
    links: {
      facebook: "https://www.facebook.com/leeabc",
    },
  },
  W: {
    name: "Will 保哥",
    isKeynote: true,
    company: "多奇數位創意有限公司",
    //- description: '',

    description:
      "現任多奇數位創意有限公司技術總監。2019 榮獲 Microsoft Regional Director (RD)、2018 年榮獲 Angular/Web GDE (Google Developer Expert) 開發專家。連續 12 度當選微軟最有價值專家 (Developer Technologies)。熟悉 Web 開發技術、網站效能調校、.NET/C# 開發技術、SQL Server 資料庫開發、Docker 與 Kubernetes。曾擔任 Visual Studio 2010 上市發表會講師、MSDN 講座講師、TechDays Taiwan 2010~2015 講師、TechEd China 2011, 2013 講師，出版著作有 ASP.NET MVC 2 開發實戰、Windows Phone 開發實戰、ASP.NET MVC 4 開發實戰等書籍。2013 年曾獲選第 6 屆iT邦幫忙鐵人賽年度大獎與開發技術組年度鐵人。",
    image: "will.png",
    agenda: {
      title: "給我一個拒絕 Angular 開發框架的理由",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide:
        "https://drive.google.com/open?id=0B3C-AM4bC8JFbklZXzBEM3hkd0lFYzVJaFh4NkJqc3UybUE0 ",
      outline:
        "許多前端開發人員經常面臨前端框架的選擇問題，這個場次我將分享多年來在 Angular 開發、導入、教學方面的實務經驗，幫助大家評斷自身團隊是否適用 Angular 開發框架。",
      outline_E: "",
    },
    links: {
      github: "https://github.com/doggy8088/",
      facebook: "https://www.facebook.com/will.fans",
    },
  },
  Chi: {
    name: "七念/吴敏琦",
    isKeynote: false,
    company: "阿里巴巴",
    description:
      "2012年從 IBM 加入淘寶，曾負責淘寶前端數據產品和創新技術產品團隊，後負責 Node.js 基礎架構團隊，並擔任阿里巴巴前端委員會 Node.js 方向負責人。推動 Node.js 應用的穩定性治理，推動無服務器技術落地前端場景。同時也是節點地下鐵線下沙龍創始人。",
    image: "chi.jpg",
    agenda: {
      title: "Let’s go serverless",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {},
  },
  David: {
    name: "David Khourshid",
    isKeynote: false,
    company: "Microsoft",
    description:
      "David Khourshid is a Microsoft software engineer with a passion for innovative user interfaces, animations, software modeling, and cutting-edge front-end technologies. He's the creator of XState, a library that brings state machines and statecharts to the modern web and enables app logic to be visualized, simulated, tested, analyzed, and more. He's also half of the Keyframers, a weekly coding live-stream where imaginative user interfaces are brought to life. When not speaking around the world or coding behind a laptop keyboard, he's usually behind a piano keyboard.",
    image: "david.jpg",
    agenda: {
      title: "Mind-Reading with Adaptive and Intelligent User Interfaces",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "What if you could predict user behavior with smart UIs? In this talk, we will explore how we can make adaptive and intelligent user interfaces that learn from how individual users use your apps, and personalize the interface and features just for them, in real-time. With probability-driven statecharts, decision trees, reinforcement learning and more, UIs can be developed in such a way that it automatically adapts to the user's behavior.",
    },
    links: {
      github: "https://github.com/davidkpiano",
      twitter: "https://twitter.com/davidkpiano",
    },
  },
  Erik: {
    name: "Erik Rasmussen",
    isKeynote: false,
    company: "",
    description:
      " American expat JavaScript developer in Spain, author of Redux Form and React Final Form.",
    image: "erik.jpg",
    agenda: {
      title: "Modern Forms in React",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "If the new React Context API and Suspense killed Redux (they didn't), surely Hooks kill the need for a form library, right? Well, not exactly. Managing form state is more than just holding your current values in state; it's about sync and async validation errors, and much more! But that doesn't mean that Hooks are irrelevant to the situation. </br> Hooks make building forms in React easier than ever before.",
    },
    links: {
      github: "https://github.com/https://github.com/erikras",
      twitter: "https://twitter.com/erikras",
    },
  },
  Jan: {
    name: "Jan-Niklas Wortmann",
    isKeynote: false,
    company: "E.ON SE",
    description:
      "Jan-Niklas Wortmann is an IT consultant mostly working on Angular projects. He helps companies in designing and implementing large scaled applications. Developing clean and maintainable code is one of his main goals. Additionally, Jan-Niklas is a member of the RxJS Core Team targeting the developer experience by improving the docs. Besides he organizes the NgNiederrhein Meetup.",
    image: "jan.jpg",
    agenda: {
      title: "RxJS - Practice makes Perfect",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "RxJS is pretty complicated at the beginning. <br> I used to be there as well. But I noticed, that exercising with RxJS helps a lot in understanding the concept of reactive programming. <br> Trying is the best way to get used to it! <br> To support you on this way, this talk will demonstrate developing a component reactively from scratch.<br>  With the power of RxJS we will improve the maintainability and resilience of our components.",
    },
    links: {
      github: "https://github.com/JWO719",
      twitter: "https://twitter.com/niklas_wortmann",
    },
  },
  Johann: {
    name: "鍾恆",
    isKeynote: false,
    company: "tubitv",
    description:
      "現 tubitv 高級研發工程師，曾在騰訊，阿里巴巴，360入職。專注於大型前端軟件和視頻播放領域。",
    image: "johann.jpg",
    agenda: {
      title: "前端項目上 Web Worker 實踐",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "該分享主要解答以下幾個問題：<br> 1.什麼情況下適合在前端項目中引入Web Worker？ <br> 2.引入Web Worker後我們要注意什麼？如何改動我們的代碼？ <br> 3.在落地Web Worker的時候我們會遇到什麼問題，如何預防及解決？",
    },
    links: {
      github: "https://github.com/toxic-johann",
      twitter: "https://twitter.com/toxic_johann",
    },
  },
  Maya: {
    name: "Maya Shavin",
    isKeynote: false,
    company: "Cloudinary",
    description:
      "Maya is a Senior Frontend Developer @Cloudinary, founder and organiser of VueJS Israel, core maintainer of StorefrontUI and blogger on Frontend Weekly and Ultimate Courses where she mainly writes articles about JavaScript tutorials and good practices. She has been developing web apps with Angular, VueJS and recently ReactJS. She loves to learn and experiment with new framework, while believing that a strong Vanilla JavaScript knowledge is necessary for being a good web developer. When not coding, she enjoys traveling, reading manga, and sketching.",
    image: "maya.png",
    agenda: {
      title: "CSS-in-JS: The Good, the Bad, and the Ugly",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "The rise of modern JS frameworks brought in more efficient concept of Front End programming. <br> These inspired new approaches, such as CSS Module and CSS-in-JS, more scoped in working with CSS. <br> It’s always a debate which is the best practice among these approaches.<br>  Some claimed CSS-in-JS eliminates developer’s most fear when dealing with CSS (the CSS file) with more dynamic approach. Some disagreed. <br> If you are keen to know about CSS-in-JS and what should be considered when it comes to work with CSS, this talk is for you.",
    },
    links: {
      github: "https://github.com/mayashavin",
      twitter: "https://twitter.com/MayaShavin",
    },
  },
  Vladimir: {
    name: "Vladimir Mutafov",
    isKeynote: false,
    company: "Pusher",
    description:
      "Vladimir Mutafov is a software engineer on the NativeScript team at Progress Software. He's working on the NativeScript Android Runtime which provides all the high-performant JS to Java communication support.",
    image: "vladimir.jpg",
    agenda: {
      title: "Embedding V8 in NativeScript ",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "V8 is the JavaScript engine powering Google Chrome, Node.js, and NativeScript.<br>  NativeScript embeds V8 to process JavaScript and dynamically call Android APIs.<br>  This enables developers to write Android applications in JavaScript and directly access the underlying OS.<br>  Come to this session to learn what challenges the NativeScript team met embedding V8 in a mobile framework and how they were solved.",
    },
    links: {
      github: "https://github.com/vmutafov",
      twitter: "https://twitter.com/VladimirMutafov",
    },
  },
  Yorkie: {
    name: "Yorkie",
    isKeynote: false,
    company: "Rokid",
    description:
      "Rokid 研發工程師，開源愛好者，Node.js Collaborator，ShadowNode 作者，目前主攻：Node.js 在 AIoT 領域的應用，並負責 YodaOS 的社區推廣工作。五年 JavaScript 開發經驗，曾就職於：SeedMail，Pixbi，阿里巴巴，目前就職於 Rokid 基礎平台研發中心，主要工作方向為基於 JavaScript 的物聯網操作系統。近年來參與並負責 YodaOS 項目，將 IoT 和 AI 能力開放給 Node.js 社區，並實現了 Node.js 在 IoT 場景的產品級落地。同時也是 Node.js Collaborator，ShadowNode 和 TensorFlow-Node.js 作者，開源發燒友，目前給 60 個開源項目貢獻過代碼。",
    image: "yorkie.jpg",
    agenda: {
      title: "YodaOS: Resolving IoT fragmentation by Node.js, NPM or Web?",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "隨著 5G 與 AI 技術越來越成熟，IoT 給用戶帶來的能量將會越來越大，不過相較於智能手機時代，物聯網設備所面臨的碎片化將更加嚴重，那麼 YodaOS 就是使用 JavaScript 來解決這個問題的一次嘗試。<br>本次分享將以 YodaOS 的發展歷程，一步步帶領大家了解到當 JavaScript 在 IoT 場景中遇到的問題與解決的問題，同時也會討論 YodaOS 在開源1年期間，分別對 Node.js、NPM 和 Web 生態在物聯網場景下所做的嘗試與掙扎。",
    },
    links: {
      github: "https://github.com/yorkie",
      twitter: "https://twitter.com/yorkienell",
    },
  },
  Tun: {
    name: "吞吞",
    isKeynote: false,
    company: "YodaOS Project",
    description:
      "吞吞/ @ legendecas /語言愛好者/喜歡貓/不救公主只顧瞎逛炸魚/ Node.js Core 貢獻者",
    image: "tun.png",
    agenda: {
      title: "Optimize Node.js Performance with fork(2)",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "啟動一個Node.js進程，通常我們可以直接通過Node.js ChildProcess API啟動;如果希望將這個進程的運行環境隔離，我們可以通過cgroups控制進程資源，或者更進一步，可以通過容器服務來創建隔離沙箱。<br> 而在需要頻繁啟動Javascript / Node.js運行時，100ms以上的進程/容器冷啟動速度可能並不會讓人滿意：如果我們希望每個運行時有毫秒級的啟動速度，各個運行環境之間又有較好的隔離，我們可以選擇哪種方案，或者新方案？",
    },
    links: {
      github: "https://github.com/legendecas",
    },
  },
  Perfect: {
    name: "Perfect Makanju",
    isKeynote: false,
    company: "Terminal Systems",
    description:
      "Experienced Software Engineer with interests in decentralized applications.",
    image: "perfact.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/perfectmak",
      twitter: "https://twitter.com/Perfectmak",
    },
  },
  all: {
    name: "Sam Lee、Kuro、Will 保哥",
    isKeynote: false,
    company: "",
    description: "",
    image: "logo.jpg",
    agenda: {
      title: "讓我們一起來談談前端 - React、Vue、Angular 框架大亂鬥",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {},
  },
  dexteryy: {
    name: "楊揚",
    isKeynote: false,
    company: "ByteDance（字節跳動）",
    description:
      "06年之前是中國最大D＆D / TRPG資料站「最深的地下城」的站長，美漫漢化組創始人和網設計師，此後一直是JS Hacker和Web App開發者（開發+設計+產品）。先後在土豆網，豆瓣，Flipboard，引人注目的負責JS基礎工程和創新產品，最喜歡的產品有2D虛擬世界社區「阿爾法城」，全球最快的EOS區塊鏈瀏覽器eosx.io。一直努力推動JS技術和Web開發技術的演進，為此做過OzJS，DarkDOM / CardKit，WebCube，“現代Web開發咒語大全”等開源項目，目前在字節跳動負責Web Dev Engine方向，打造下一代框架和工具產品。",
    image: "dexteryy.jpg",
    agenda: {
      title: "",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline: "",
    },
    links: {
      github: "https://github.com/dexteryy",
      twitter: "https://twitter.com/dexteryy",
    },
  },
  Paipo: {
    name: "Paipo",
    isKeynote: false,
    company: "Mercari",
    description: "A frontend engineer who does sports and philosophy.",
    image: "paipo.jpg",
    agenda: {
      title: "Re-Architecture Transaction Page and Sleep Well",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "As a marketplace app, transaction page is a must-have page along the user journey.<br>  It involves heavy business logic and affects the company's Gross Merchandise Volumes.<br>  I'm gonna demonstrate some possible challenges and approaches we've applied while re-architecturing this critical page.",
    },
    links: {
      github: "https://github.com/pptang",
      twitter: "https://twitter.com/pptang17",
    },
  },
  Line: {
    name: "黃慈霖 Tzu-Lin Huang、Jesse",
    isKeynote: false,
    company: "Mercari",
    description: "A frontend engineer who does sports and philosophy.",
    image: "line.jpg",
    agenda: {
      title: "如何共用元件 - 從開發LINE隨你填貼圖來談",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "LINE 的組織龐大，旗下有相當多的產品，因此在實作前端元件時，是否能夠重複使用是很重要的考量因素。<br>  這次嘗試使用後起之秀 - Custom Elements，好處是現代瀏覽器原生支援，因此可以相容絕大部分的前端函式庫。 <br> 議程的第一段會先介紹開發 Custom Elements 的經驗談。第二段則會探討 Vue.js 中仍存在的共用作法 - Mixins：為何 React 提出 HOC (Higher Order Component) 來取代 Mixin api，及最後發展出 Render props 的技巧。",
    },
    links: {
      github: "https://github.com/pptang",
      twitter: "https://twitter.com/pptang17",
    },
  },
  ashi: {
    name: "ashi",
    isKeynote: false,
    company: "",
    description: "",
    image: "ashi.jpg",
    agenda: {
      title: "Deep Learning in JS",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "It's clear by now that the robots are coming for us. <br/> <br/>Breakthroughs in AI fill our streams and news feeds, themselves the products of machine learning, the echoing algorithmic screams of a new kind of mind being born.  <br/> <br/> Using deeplearn.js, we'll find out how deep learning systems learn and examine how they think. The fundamental building blocks of AI have never been more accessible. Let's explore the architecture of these new minds, which are growing to mediate our every interaction.",
    },
    links: {
      github: "https://github.com/queerviolet",
      twitter: "https://twitter.com/rakshesha",
    },
    abouts: {
      link: "ashi.io",
      text: "About Me",
    },
  },
  Irene: {
    name: "Irene",
    isKeynote: false,
    company: "Google Taiwan",
    description:
      "現任 Google Taiwan - Assistant Mobile Solutions Consultant (Temp)，致力於推廣 Mobile Web 相關技術，包括 Accelerate Mobile Pages (AMP), Progressive Web App (PWA), User Experience (UX) 與 web optimization 等。<br/>平面設計出身，4 年網頁設計與開發經歷。咖啡成癮的貓奴，喜歡撞球和小酌。",
    image: "irene.jpg",
    agenda: {
      title: "先別管大亂鬥了，你聽過 AMP 嗎？",
      levels: [],
      lang: "CH",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "AMP 是 Google 根據開放原始碼格式所設計的網頁開發框架，能夠加快網頁載入速度進而提升使用者體驗。本議程將簡單介紹 AMP 是什麼與其特色。",
    },
    links: {
      github: "https://github.com/irene84111",
      facebook: "https://www.facebook.com/irene.yayin",
    },
  },
  Carlos: {
    name: "Carlos Rufo",
    isKeynote: false,
    company: "GraphQL Hong Kong",
    description:
      "Carlos is a passionate developer and speaker aficionado. While he codes with different B/FE techs, his go-to for every project is his crush: GraphQL. He is very active in the GraphQL ecosystem where he has collaborated with across numerous internal & external projects, such as SpaceX GraphQL API and recently, organizing GraphQL Hong Kong.",
    image: "carlos.jpg",
    agenda: {
      title: "End-to-end Type-Safe GraphQL Apps",
      levels: [],
      lang: "EN",
      type: "",
      youtube: "",
      slide: "",
      outline_E: "",
      outline:
        "Discover all the benefits for adding End-to-end Type-Safety to your GraphQL Apps with this demo-based talk.<br/> You’ll want to refactor your codebase in order to take the advantages of TypeScript, GraphQL & React working together.<br/> Apollo GraphQL Server/Client, auto-generated TypeScript types & React Hooks would build the pillars of a SpaceX demo.",
    },
    links: {
      github: "https://github.com/swcarlosrj",
      twitter: "https://twitter.com/swcarlosrj",
    },
  },
}

export default {
  workshopSpeakers,
  speakers,
  mainSpeakers,
}
