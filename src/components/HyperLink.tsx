import React from "react"
import styled from "styled-components"

export default function HyperLink(props: { href: string; className?: string }) {
  return (
    <StyledLink target="_blank" rel="noopener" {...props} />
  )
}

const StyledLink = styled.a`
  text-decoration-line: none;
`
