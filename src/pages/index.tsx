import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "~/components/Img"
import { useStaticQuery, graphql } from 'gatsby'
import HyperLink from '~/components/HyperLink'

interface SiteTitleQuery {
  site: {
    siteMetadata: {
      title: string;
    }
  }
}

export default () => {
  const data: SiteTitleQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <SEO title={data.site.siteMetadata.title}/>
      <MainContainer>
        <LogoImg src="/images/logo/mainLogo.png" />
        <Info>
          JSDC 2020 開發者年會 活動時間：10/17
          <InvitationButton href='https://forms.gle/yWDkcxdRezsdUpLU6'>
            活動熱烈徵稿中
          </InvitationButton>
        </Info>
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh -
    ${({ theme }) => theme.vars.headerHeight
      + theme.vars.footerHeight
      + theme.vars.footerMargin}px
  );
`
const LogoImg = styled(Img)`
  max-width: 640px;
  width: 100%;
  height: auto;
  margin: 0 ${props => props.theme.vars.mainHorizontalMargin}px;
  object-fit: contain;
`
const Info = styled.div`
  ${props => props.theme.font.title3};
  display: grid;
  place-items: center;
  grid-gap: 20px;
  word-break: break-word;
  text-align: center;
  margin: 20px ${props => props.theme.vars.mainHorizontalMargin}px 0;
  padding: 26px 0;
  color: ${props => props.theme.colors.white};
`;
const InvitationButton = styled(HyperLink)`
  outline: none;
  max-width: 310px;
  padding: 10px 70px;
  border: 1px solid ${props => props.theme.colors.mainPink};
  border-radius: 5px;
  color: ${props => props.theme.colors.mainPink};
  box-shadow: 0 5px 0 0 ${props => props.theme.colors.mainPink};

  @media ${props => props.theme.mediaSize.tablet} {
    padding: 5px 34px;
    max-width: 212px;
  }
`;
