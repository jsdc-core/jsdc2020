import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import HyperLink from "./Link"
import { LINKS } from "../constant"
import Img from "./Img"

const linksWithPrefix = links =>
  links.map(l => ({
    ...l,
    href: `${l.href}`,
  }))

const Nav = () => {
  const [expandCollapse, setExpandCollapse] = useState(false);

  return (
    <Main>
      <NavBar>
        <Logo href="/">
          <Img src="/images/logo/logo.svg" width="100" />
        </Logo>
        <NavButton
          onClick={() => {
            setExpandCollapse(!expandCollapse)
          }}
        >
          <NavIconBar />
          <NavIconBar />
          <NavIconBar />
        </NavButton>
      </NavBar>
      <CollapseContent expandCollapse={expandCollapse}>
        {linksWithPrefix(LINKS).map((link, i) => (
          <HyperLink key={i} href={link.href}>
            {link.name}
          </HyperLink>
        ))}
        <GoogleTranslatePicker id="google_translate_element" />
      </CollapseContent>
    </Main>
  )
}

export default Nav

const Main = styled.nav`
  display: flex;
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 99999;
  background-color: ${props => props.theme.colors.bg};
  @media ${props => props.theme.mediaSize.laptop} {
    flex-direction: column;
  }
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100px;
  justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  height: 54px;
  padding: 0px 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${props => props.theme.colors.white};
  @media ${props => props.theme.mediaSize.laptop} {
    width: 100%;
    justify-content: space-between;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-right: 20px;
`

const NavButton = styled.button`
  background-color: rgba(144, 144, 144, 0.075);
  display: none;
  padding: 8px 10px;
  border-width: 0px;
  border-radius: 4px;
  &:focus {
    background-color: rgba(144, 144, 144, 0.2);
    outline: none;
  }
  @media ${props => props.theme.mediaSize.laptop} {
    display: block;
  }
`

const NavIconBar = styled.span`
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  background-color: white;
  margin: 4px 0px;
`

const CollapseContent = styled.div`
  display: flex;
  overflow: hidden;
  height: 54px;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  @media ${props => props.theme.mediaSize.laptop} {
    max-height: 0px;
    margin-left: 0px;
    ${({ expandCollapse }) =>
    expandCollapse &&
    `
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
  `}
  }
`

const GoogleTranslatePicker = styled.div`
  @media ${props => props.theme.mediaSize.laptop} {
    position: relative !important;
  }
`;