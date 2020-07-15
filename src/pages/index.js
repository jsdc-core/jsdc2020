import React from "react"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import Img from "~/components/Img"

export default () => (
  <Container>
    <LogoContainer>
      <InvisibleLogo>
        <LogoImg src="/images/official/jsdcmain-line.png" />
      </InvisibleLogo>
      <FadeOutLogo>
        <LogoImg src="/images/official/jsdcmain-line.png" />
      </FadeOutLogo>
      <FadeInLogo>
        <LogoImg src="/images/official/jsdcmain.png" />
      </FadeInLogo>
    </LogoContainer>
    <Title>The 8th JavaScript Developer Annual Conference in Taiwan</Title>

    <HighlightSpan>JSDC 2020 活動</HighlightSpan>
    <HighlightSpan>
      2019/9/28 (六) 技術工作坊：「 JavaScript 新技術的入門與導入」
    </HighlightSpan>
    <HighlightSpan>
      2019/10/26 (六) 主年會：「 JavaScript 穩定之後，然後呢？」
    </HighlightSpan>

    <Division />

    <DescriptionSpan>
      JavaScript 近年從 ES6 的出世到前端框架的競逐，帶動了一連串的革命，
    </DescriptionSpan>
    <DescriptionSpan>
      也同時在後端、行動裝置，甚至是 IoT，機器學習等領域大放異彩。
    </DescriptionSpan>
    <DescriptionSpan>
      如名言「任何可用 JavaScript 編寫的應用程序，最終將用 JavaScript 編寫」
    </DescriptionSpan>

    <HighlightSpan>我們期待 JavaScript 的未來！</HighlightSpan>
    <Button>BUY NOW</Button>
  </Container>
)

const Container = styled.div`
  padding: 20px 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  @media ${props => props.theme.mediaSize.laptop} {
    margin-bottom: 20px;
  }
`
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
const LogoImg = styled(Img)`
  max-width: 1440px;
  width: 100%;
  height: auto;
`
const InvisibleLogo = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  display: block;
  max-width: 1440px;
`
const FadeOutLogo = styled.div`
  opacity: 0;
  position: absolute;
  margin: auto;
  width: 100%;
  max-width: 1440px;
  animation: ${fadeOut} 2s ease-out;
`
const FadeInLogo = styled.div`
  position: absolute;
  margin: auto;
  width: 100%;
  max-width: 1440px;
  animation: ${fadeIn} 2s linear;
`
const Title = styled.p`
  font-size: 25px;
  line-height: 25px;
  text-align: center;
  text-size-adjust: 100%;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 35px;
  @media ${props => props.theme.mediaSize.laptop} {
    font-size: 1.2rem;
    line-height: 180%;
  }
`
const HighlightSpan = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  line-height: 35px;
  text-align: center;
  @media ${props => props.theme.mediaSize.laptop} {
    font-size: 0.8rem;
  }
`
const DescriptionSpan = styled.span`
  font-size: 16px;
  line-height: 35px;
  text-align: center;
  @media ${props => props.theme.mediaSize.laptop} {
    font-size: 0.8rem;
  }
`
const Division = styled.div`
  margin-bottom: 35px;
`
const Button = styled.button`
  margin-top: 50px;
  width: 50%;
  height: 44px;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.text};
  border-radius: 5px;
  letter-spacing: 0.125em;
  font-weight: 400;
  &:hover {
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.bg};
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  }
`
