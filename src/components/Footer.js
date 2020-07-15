import React from "react"
import styled from "styled-components"

export default () => {
  return (
    <Container>
      © 2020
      <LinkText href="http://jsdc.tw" target="_blank">
        JSDC.tw
      </LinkText>
      &nbsp;| 宅斯迪西股份有限公司 (JSDC Corp.)
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.vars.footerMargin}px;
  width: 100%;
  color: ${props => props.theme.colors.lightText};
`;
const LinkText = styled.a`
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  text-decoration: none;
  color: ${props => props.theme.colors.darkPrimary};
  margin-left: 5px;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
