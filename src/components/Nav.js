import React from "react"
import { useState } from "react"
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
  const [expandCollapse, setExpandCollapse] = useState(false)
  return (
    <Main>
      <NavBar>
        <Logo href="/">
          <Img src="/images/logo/logo.svg" width="100" />
        </Logo>
        <LinkList>
          {linksWithPrefix(LINKS).map((link, i) => (
            <HyperLink key={i} href={link.href}>
              {link.name}
            </HyperLink>
          ))}
        </LinkList>
        <div id="google_translate_element" />
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
      </CollapseContent>
    </Main>
  )
}

export default Nav

const Main = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 99999;
  background-color: ${props => props.theme.colors.bg};
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  height: 54px;
  padding: 0px 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${props => props.theme.colors.white};
`

const LinkList = styled.div`
  display: flex;
  flex: 1;
  width: "100%";
  margin-left: 22px;
  @media ${props => props.theme.deviceSize.laptop} {
    display: none;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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
  @media ${props => props.theme.deviceSize.laptop} {
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
  max-height: 1px;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  @media ${props => props.theme.deviceSize.laptop} {
    ${({ expandCollapse }) =>
      expandCollapse &&
      `
      min-height: 100vh;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
  `}
  }
`
