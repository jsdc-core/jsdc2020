import React from "react"
import { useState } from "react"
import styled from "styled-components"
import Link from "./Link"
import { LINKS } from "../constant"
import Img from "./Img"

const linksWithPrefix = links =>
  links.map(link => ({
    ...link,
    href: `${link.href}`,
  }))

const Nav = () => {
  return (
    <Main>
      <Link href="/">
        <Logo>
          <Img src="/images/logo/logo.svg" width="100" />
        </Logo>
      </Link>
      <CollapseContent>
        {linksWithPrefix(LINKS).map((link, i) => (
          <Link key={i} href={link.href} showActive>
            {link.name}
          </Link>
        ))}
        {/* <GoogleTranslatePicker id="google_translate_element" /> */}
      </CollapseContent>
    </Main>
  )
}

export default Nav

const Main = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 78px;
  padding: 0 30px;
  color: ${props => props.theme.colors.text};
  box-shadow: ${props => props.theme.colors.shadow};
  background-color: ${props => props.theme.colors.bg};

  @media ${props => props.theme.mediaSize.laptop} {
    justify-content: center;
  }

  ${props => props.theme.font.title2};
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const CollapseContent = styled.div`
  display: flex;
  height: 78px;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  @media ${props => props.theme.mediaSize.laptop} {
    display: none;
  }
`

const GoogleTranslatePicker = styled.div`
  @media ${props => props.theme.mediaSize.laptop} {
    position: relative !important;
  }
`;
