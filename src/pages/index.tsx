import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "~/components/Img"
import { string } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

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
      <LogoContainer>
        <LogoImg src="/images/logo/logo.svg" />
      </LogoContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh -
    ${({ theme }) => theme.vars.headerHeight
      + theme.vars.footerHeight
      + theme.vars.footerMargin}px
  );
`
const LogoImg = styled(Img)`
  max-width: 485px;
  width: 100%;
  height: auto;
  margin: 0 ${props => props.theme.vars.mainHorizontalMargin}px;
`
