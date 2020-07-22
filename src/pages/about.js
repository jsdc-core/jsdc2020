import React from "react"
import WordPageLayout from '../components/WordPageLayout'

export default () => {
  return (
    <WordPageLayout
      title='關於我們'
      imgSrc='/images/group.jpg'>
      JavaScript 開發者年會 (JavaScript Developer Conference，簡稱 JSDC)
      是台灣最大的 JavaScript 年度性技術研討會，旨在提供台灣中高階 JavaScript
      技術人才與世界最新 JavaScript 相關技術討論與分享。
      <br />
      <br />
      JSDC 由 2011
      年底開始，由三個台灣開發者社群共同發起，近年各式開發者社群蓬勃發展Front-End
      Developer、 Angular.tw、 ReactJS.tw 等新興社群⼀⼀成立，我們期許 JSDC
      能成為每年網⾴技術開發者的中⾼階技術交流活動，整合來自獨立開發者、企業、組織及機構的科技力量，並致力於知識全球化，讓參與者重新認識
      JavaScript。
    </WordPageLayout>
  )
}
