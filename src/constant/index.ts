export interface ILink {
  href: string;
  name: string;
}

export const LINKS: ILink[] = [
  { href: "/", name: "首頁" },
  { href: "/about", name: "關於我們" },
  // { href: "/venue", name: "會場" },
  { href: "/speaker", name: "講者" },
  // { href: "/agenda", name: "議程" },
  // { href: "/sponsors", name: "合作夥伴" },
  { href: "/team", name: "工作團隊" },
  { href: "/conduct", name: "行為準則" },
]

export const ACTIVITIES = {
  CONFERENCE: {
    key: "CONFERENCE",
    name: "主年會",
    date: "10/26",
    title: "JavaScript 穩定之後，然後呢？",
    location: "富邦國際會議中心",
  },
  WORKSHOP: {
    key: "WORKSHOP",
    name: "工作坊",
    date: "9/28",
    title: "JavaScript 新技術的入門與導入",
    location: "M Space 共享空間",
  },
}
