import { Agenda } from '~/module/agenda/types';
import { SpeakerObj } from './speaker';

const AgendaData: {
  morning: Agenda[];
  afternoon: Agenda[];
} = {
  morning: [{
    time: '09:00 - 09:40',
    title: '',
    speaker: SpeakerObj.Tony1223,
  }, {
    time: '09:40 - 10:00',
    title: '',
    speaker: SpeakerObj.aszx87410,
  }, {
    time: '10:00 - 10:20',
    title: '自己的工具自己造，咱們重頭來造 React hooks！',
    description: '說起 React hooks 應該無人不知無人不曉，在去年轟轟烈烈的出世，是 React 16.8 中增加的新功能。\n\n以往只能在 class 裡寫 states，在能夠使用 hooks 以後， function 裡也可以操作 states 了。傑克，這真是太神奇了！\n\n這讓原本寫 class components 的人紛紛改轉寫 functional components，也更能掌握 components 的渲染時機，減少不必要的渲染次數。究竟這些神奇的 hooks 是怎麼實做出來的？\n\n本講座將帶大家一同推測常使用的 useEffect 以及 useState 的 hooks 實作原理。',
    speaker: SpeakerObj.MindyTai,
  }, {
    time: '10:20 - 10:30',
    title: '休息時間',
  }, {
    time: '10:30 - 10:50',
    title: '',
    speaker: SpeakerObj.noootown,
  }, {
    time: '10:50 - 11:10',
    title: '',
    speaker: SpeakerObj.ericsk,
  }, {
    time: '11:10 - 11:30',
    title: '',
    speaker: SpeakerObj.rexchen,
  }, {
    time: '11:30 - 12:00',
    title: '座談',
    multiSpeaker: '邱弘毅 x Eric ShangKuan x Rex Chen',
  }],
  afternoon: [{
    time: '14:00 - 14:40',
    title: '',
    speaker: SpeakerObj.meistudioli,
  }, {
    time: '14:40 - 15:00',
    title: 'Lerna 的套件管理術',
    description: '拆分模組是軟體開發的重點之一。常言道模組拆得好，開發、Debug 沒煩惱。本節將介紹拆分模組的依據、Lerna 指令、CICD 等結合。',
    speaker: SpeakerObj.FongX777,
  }, {
    time: '15:00 - 15:20',
    title: '',
    speaker: SpeakerObj.pjchender,
  }, {
    time: '15:20 - 15:40',
    title: '跨平台(IOS/Android/Web)開發共用策略 - react-native-web',
    description: 'react-native 讓前端工程師可以寫出跨平台的應用程式，但 web 還是需要支援，從以往 web 為主，app 為輔，到現在 app 為主，web 為輔的需求模式，開發者如何因應？',
    speaker: SpeakerObj.blackbing,
  }, {
    time: '15:40 - 15:50',
    title: '休息時間',
  }, {
    time: '15:50 - 16:10',
    title: '',
    speaker: SpeakerObj.doggy8088,
  }, {
    time: '16:10 - 16:30',
    title: '',
    speaker: SpeakerObj.coodoo,
  }, {
    time: '16:30 - 17:00',
    title: '座談',
    multiSpeaker: 'Will 保哥 x Jeremy Lu',
  }],
};

export default AgendaData;
