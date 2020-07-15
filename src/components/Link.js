import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import HyperLink from "~/components/HyperLink"
import { Location } from "@reach/router"

const StyledLink = styled(Link)`
  position: relative;
  cursor: pointer;
  padding: 0 5px;
  margin: 0 7px;
  line-height: 22px;
  transition: color 0.2s ease-in-out;
  word-break: keep-all;
  text-decoration: none;

  color: ${
    props => props.active
      ? props.theme.colors.active
      : props.theme.colors.text
  };

  &:hover {
    color: ${props => props.theme.colors.active};
  }
`
const ActiveBorder = styled.div`
  ${props => props.active && css`
    position: absolute;
    height: 2px;
    width: 100%;
    border-radius: 1px;
    left: 0;
    bottom: -4px;
    background-color: ${props => props.theme.colors.active};
  `}
`;

export default ({ location, className, href, children, showActive }) => {
  return (
    <Location>
      {({ location }) => {
        return (
          <StyledLink to={href} active={showActive && location.pathname === href}>
            {children}
            <ActiveBorder active={showActive && location.pathname === href}/>
          </StyledLink>
        )
      }}
    </Location>
  );
};
