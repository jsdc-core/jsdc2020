import React from "react"
import styled from "styled-components"

export default () => {
  return (
    <Container>
      <Text>
        © 2020
        <LinkText href="http://jsdc.tw" target="_blank">
          JSDC.tw
        </LinkText>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 23px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.span`
  font-size: 0.8em;
  list-style: none;
  padding: 0;
  color: ${props => props.theme.colors.text};
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
`

const LinkText = styled.a`
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  text-decoration: none;
  color: ${props => props.theme.colors.darkPrimary};
  margin-left: 5px;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
