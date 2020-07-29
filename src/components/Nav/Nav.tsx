import React from "react"
import styled from "styled-components"
import Link from "../Link"
import { LINKS } from "../../constant"
import DrawerButton from '../Drawer'
import Logo from './Logo'
import linksWithPrefix from '../../utils/linksWithPrefix'

const Nav = () => {
  return (
    <Main>
      <Inner>
        <DrawerButton/>
        <Link href="/">
          <LogoContainer>
            <Logo/>
          </LogoContainer>
        </Link>
        <CollapseContent>
          {linksWithPrefix(LINKS).map((link, i) => (
            <Link key={i} href={link.href} showActiveBorder>
              {link.name}
            </Link>
          ))}
          {/* <GoogleTranslatePicker id="google_translate_element" /> */}
        </CollapseContent>
      </Inner>
    </Main>
  )
}

export default Nav

const Main = styled.nav`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: ${props => props.theme.vars.headerHeight}px;
  color: ${props => props.theme.colors.text};
  box-shadow: ${props => props.theme.colors.shadow};
  background-color: ${props => props.theme.colors.white};
  min-width: ${props => props.theme.deviceSize.mobileM}px;

  ${props => props.theme.font.title4};
`
const Inner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 30px;

  @media ${props => props.theme.mediaSize.laptop} {
    justify-content: center;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const CollapseContent = styled.div`
  display: flex;
  height: ${props => props.theme.vars.headerHeight}px;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;

  @media ${props => props.theme.mediaSize.laptop} {
    display: none;
  }
`
// const GoogleTranslatePicker = styled.div`
//   @media ${props => props.theme.mediaSize.laptop} {
//     position: relative !important;
//   }
// `;
