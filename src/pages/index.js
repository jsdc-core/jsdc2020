import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "~/components/Img"

export default () => (
  <Container>
    <SEO/>
    <LogoContainer>
      <LogoImg src="/images/logo/logo.svg" />
    </LogoContainer>
  </Container>
)

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh -
    ${({ theme }) => theme.vars.headerHeight
      + theme.vars.footerHeight
      + theme.vars.footerMargin}px
  );
  justify-content: center;
`
const LogoImg = styled(Img)`
  max-width: 485px;
  width: 100%;
  height: auto;
`
