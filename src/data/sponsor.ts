interface Company {
  company: string;
  logo: string;
  height?: string;
  width?: string;
  description: string;
  link: string;
}

type SponsorType =
  'titanium' |
  'platinum' |
  'gold' |
  'silver' |
  'special';

const SPONSORS: Record<SponsorType, Company[]> = {
  titanium: [],
  platinum: [],
  gold: [],
  silver: [],
  special: [
    {
      company: 'Dcard',
      logo: 'dcard.png',
      height: '65%',
      description: 'Dcard 成立於 2011 年，是在年輕族群有極高滲透率與影響力的社群平台，每月不重複訪客高達 1500 萬。獨特的「抽卡」功能讓各大專院校學生可在午夜 12 點隨機配對，Dcard 也是全台灣最大匿名論壇，讓使用者能自由自在地說出想法與交流意見。 \n 我們致力於打造一個讓分享更自由、讓資訊流動更美好，更讓每個人都能在這裡找到共鳴的平台。未來我們希望持續為這個社會創造價值及可能性，因此希望可以有更多夥伴加入，跟我們一起加快前進的速度，一起做出更多有趣具改變性的事情。不要猶豫了，加入我們吧!',
      link: 'https://join.dcard.today/',
    },
    {
      company: 'iThome',
      logo: 'ithome.svg',
      height: '100%',
      description: '',
      link: 'https://www.ithome.com.tw/',
    },
    {
      company: 'ALPHA Camp',
      logo: 'alphaCamp.png',
      width: '80%',
      description: 'ALPHA Camp 的使命是透過線上科技教育，幫助人們持續建立在數位時代成功所需的技能，思維以及社群。自 2014 年以來，我們以台灣和新加坡為教學據點，培訓超過 5000 名學員。校友遍及台灣、新加坡、中國，並加入如 Facebook, Line, Grab 等知名科技新創與全球五百大企業。',
      link: 'https://tw.alphacamp.co/',
    },
    {
      company: 'JetBrains',
      logo: 'jetbrains.png',
      height: '90%',
      description: 'JetBrains 是知名 IntelliJ IDEA、ReSharper、GoLand、PyCharm、WebStorm、PhpStorm…等 IDE 工具及 Kotlin 程式語言背後的公司。過去 20 年來我們專注於生產能提升開發效率的工具，透過智能提示、快速修正，自動化地處理繁瑣且重複性高的任務，讓開發者有更多時間和精神專注在創新、設計、架構及更多美好的事物上。目前全球已有超過 800 萬使用者、225 多個國家信任我們的產品。',
      link: 'https://www.jetbrains.com/',
    },
  ],
}

export default SPONSORS;
