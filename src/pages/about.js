import React from "react"
import styled from "styled-components"
import PageTitle from "~/components/PageTitle"
import Img from "~/components/Img"

const Container = styled.div`
  padding: 20px 15px;
`
const Description = styled.p`
  margin: 48px auto;
  padding: 0 15px;
  max-width: 630px;
  line-height: 1.6em;
  color: #e4e4e4;
  letter-spacing: 2px;
  font-size: 14px;
  text-align: center;
`
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px;
`
const StyledImg = styled(Img)`
  width: 100%;
`

export default () => {
  return (
    <Container>
      <PageTitle title="About us" />
      <Description>
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
      </Description>
      <ImageBox>
        <StyledImg src="/images/group.jpg" />
      </ImageBox>
    </Container>
  )
}
