import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HyperLink from "~/components/HyperLink"
import { Location } from "@reach/router"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledHyperLink = styled(HyperLink)`
  cursor: pointer;
  padding: 0 15px;
  line-height: 50px;
  transition: color 0.2s ease-in-out;
  word-break: keep-all;
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  text-decoration: none;
`

export default ({ location, className, href, children }) => {
  return (
    <StyledLink to={href}>
      <Location>
        {({ location }) => {
          return (
            <StyledHyperLink active={location.pathname === href}>
              {children}
            </StyledHyperLink>
          )
        }}
      </Location>
    </StyledLink>
  )
}
