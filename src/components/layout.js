/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "~/config/theme"
import Nav from "~/components/Nav"
import Footer from "~/components/Footer"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.font.fontFamily};
    background: ${theme.colors.bg};
    width: 100%;
    height: 100%;
    font-size: ${theme.font.fontSize};
    color: ${theme.colors.white};
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Nav siteTitle={data.site.siteMetadata.title} />
        <PageContainer>
          <main>{children}</main>
        </PageContainer>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.white};
`

const PageContainer = styled.div`
  min-height: 95vh;
  padding-top: 100px;
`
