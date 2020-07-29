/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styled, { createGlobalStyle, ThemeProvider, DefaultTheme, css } from 'styled-components'
import Theme from '~/config/theme'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import { useLocation } from '@reach/router'

const theme: DefaultTheme = Theme;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.font.fontFamily};
    background: ${theme.colors.bg};
    width: 100%;
    height: 100%;
    font-size: ${theme.font.fontSize};
    line-height: ${theme.font.lineHeight};
    color: ${theme.colors.text};
    margin: 0;
  }
`

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Container mainPage={location.pathname === '/'}>
        <Nav/>
        <PageContainer>
          <main>{children}</main>
        </PageContainer>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div<{ mainPage: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  min-width: ${props => props.theme.deviceSize.mobileM}px;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.text};

  ${props => props.mainPage && css`
    background-color: ${props => props.theme.colors.mainBg};
    background-image: url('/images/common/bg.png');
    background-size: cover;
    background-position: center;
  `}
`
const PageContainer = styled.div`
  min-height: calc(100vh -
    ${({ theme }) => theme.vars.headerHeight
      + theme.vars.footerHeight
      + theme.vars.footerMargin}px
  );
  padding-top: ${props => props.theme.vars.headerHeight}px;
`
