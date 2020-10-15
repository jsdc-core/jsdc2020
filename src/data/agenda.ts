import { Agenda } from '~/module/agenda/types';
import { SpeakerObj } from './speaker';

const AgendaData: {
  morning: Agenda[];
  afternoon: Agenda[];
} = {
  morning: [{
    time: '09:00 - 09:40',
    title: 'Remote Team',
    description: '曾經身為公司的研發長/產品長/開發主管，隨時都在忙碌會議或是解決問題的路上，團隊成員有著各種不同的問題，如何透過工具跟思維進行[不一定在現場]的管理。\n\n這個議程要跟大家聊聊團隊管理跟遠距工作的各種可能/風險，以及我的一些挑戰經驗。\n\n遠端有非常多種樣態，管理者是遠端，成員是遠端，可能多數時候是部分部分，有些人在家有些人在辦公室，甚至分地方分辦公室有些人在台北、有些人在新竹等。\n\n\n\n本議程主要討論筆者的一些管理經驗，並且深入討論遠距工作的挑戰與艱難之處。讓有意對這件事情多了解的人，少走些冤枉路。',
    speaker: SpeakerObj.Tony1223, // TonyQ (王景弘)
  }, {
    time: '09:40 - 10:00',
    title: '用 API mocking 讓前端不再苦苦等待',
    description: '"在開發上比較理想的狀況是後端先行，等後端 API 差不多以後前端再進來，這時候就可以直接串接 API。但現實上很常發生前後端同步開發的狀況，有時候前端就必須等後端開發完畢，才能開始進行後續動作。\n\n為了避免這種苦苦等待的狀況，我會介紹一些好用的 API mocking library，讓大家自己先 mock API，讓前端超前部署！',
    speaker: SpeakerObj.aszx87410, // Huli
  }, {
    time: '10:00 - 10:20',
    title: '自己的工具自己造，咱們重頭來造 React hooks！',
    description: '說起 React hooks 應該無人不知無人不曉，在去年轟轟烈烈的出世，是 React 16.8 中增加的新功能。\n\n以往只能在 class 裡寫 states，在能夠使用 hooks 以後， function 裡也可以操作 states 了。傑克，這真是太神奇了！\n\n這讓原本寫 class components 的人紛紛改轉寫 functional components，也更能掌握 components 的渲染時機，減少不必要的渲染次數。究竟這些神奇的 hooks 是怎麼實做出來的？\n\n本講座將帶大家一同推測常使用的 useEffect 以及 useState 的 hooks 實作原理。',
    speaker: SpeakerObj.MindyTai, // Mindy
  }, {
    time: '10:20 - 10:30',
    title: '休息時間',
  }, {
    time: '10:30 - 10:50',
    title: '本科 / 遠端 / 新創 經驗分享',
    description: '這個議程會做三部分的經驗分享，分別是\n- 做為本科畢業生，是否該就讀研究所？\n- 遠端工作經驗分享\n- 美國種子輪新創工作文化分享',
    speaker: SpeakerObj.noootown, // 邱弘毅 (沒一村)
  }, {
    time: '10:50 - 11:10',
    title: '外商公司的生存之道與黃金手拷',
    description: '將會依據自己在外商大型公司的觀察經驗，分享在外商的生存之道與職涯發展，提供有志於往大型外商公司發展職涯的人一些規劃與建議，同時也會將許多在外商工作的美麗與哀愁娓娓道來，幫助你評估自己是否適合這樣的環境，以及進入之後該如何規劃更寬闊的發展',
    speaker: SpeakerObj.ericsk, // Eric ShangKuan
  }, {
    time: '11:10 - 11:30',
    title: '你喜歡寫程式嗎？為自己學習寫程式',
    description: '人生是個沒有對錯的選擇題，發掘自己寫程式最純粹的樂趣',
    speaker: SpeakerObj.rexchen, // Rex Chen
  }, {
    time: '11:30 - 12:00',
    title: '【職涯座談】新創公司跟大企業之間該怎麼選擇？',
    multiSpeaker: '邱弘毅 x Eric ShangKuan x Rex Chen',
  }],
  afternoon: [{
    time: '14:00 - 14:40',
    title: 'AMP & the missing parts Google doesn\'t tell',
    speaker: SpeakerObj.meistudioli, // Paul Li (mei)
  }, {
    time: '14:40 - 15:00',
    title: 'Lerna 的套件管理術',
    description: '拆分模組是軟體開發的重點之一。常言道模組拆得好，開發、Debug 沒煩惱。本節將介紹拆分模組的依據、Lerna 指令、CICD 等結合。',
    speaker: SpeakerObj.FongX777, // Fong
  }, {
    time: '15:00 - 15:20',
    title: '用錯非同步，服務一樣會卡住',
    description: 'JavaScript 是單線程的程式語言，為了避免程式阻塞，多鼓勵使用非同步的 API 來進行操作，但非同步的 API 是否都能夠避免阻塞呢？到底非同步、單執行緒這之間的關係是什麼？在場短講中，將釐清這些每天在用卻可能似懂非懂的概念',
    speaker: SpeakerObj.pjchender, // 陳柏融（PJCHENder）
  }, {
    time: '15:20 - 15:40',
    title: '跨平台(IOS/Android/Web)開發共用策略 - react-native-web',
    description: 'react-native 讓前端工程師可以寫出跨平台的應用程式，但 web 還是需要支援，從以往 web 為主，app 為輔，到現在 app 為主，web 為輔的需求模式，開發者如何因應？',
    speaker: SpeakerObj.blackbing, // Bingo Yang
  }, {
    time: '15:40 - 15:50',
    title: '休息時間',
  }, {
    time: '15:50 - 16:10',
    title: '用不用 TypeScript 隨便你，反正我是用了',
    description: '無論你是前端或後端工程師，都逃不開 JavaScript 的魔掌，但是 JS 先天的弱型別特性，確實對千千萬萬開發者帶來不小的困擾。本次演講將著重在導入 TypeScript 的各種經驗分享，告訴你為什麼導入 TypeScript 之後，可以幫助你提升生命品質，過著比別人更好的生活。',
    speaker: SpeakerObj.doggy8088, // Will 保哥
  }, {
    time: '16:10 - 16:30',
    title: '採用 TypeScript 前你該考慮的十件事',
    description: '世界上有許多種風格迥異的 type system，而 Typescript 是目前 web 界最熱門的選擇之一，但就像所有 type system 一般它也有不同的優缺點，本場次將帶大家從高層次實務觀點瞭解採用 Typescript 帶來的好處與成本，並檢視是否有其它更好的選擇。',
    speaker: SpeakerObj.coodoo, // Jeremy Lu
  }, {
    time: '16:30 - 17:00',
    title: '【技術座談】現代專案，該不該導入 TypeScript？',
    multiSpeaker: 'Will 保哥 x Jeremy Lu',
  }],
};

export default AgendaData;
