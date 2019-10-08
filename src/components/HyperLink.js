import React from "react"
import styled from "styled-components"

export default function HyperLink(props) {
  return (
    <StyledLink href={props.href} target="_blank" rel="noopener" {...props} />
  )
}

const StyledLink = styled.a`
  text-decoration-line: none;
`
