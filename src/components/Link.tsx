import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { Location } from "@reach/router"

interface IAttr {
  active: boolean;
}

const StyledLink = styled(Link)<IAttr & { activebg: boolean }>`
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

  background: ${
    props => props.activebg && props.theme.colors.drawerLinkActive
  };

  &:hover {
    color: ${props => props.theme.colors.active};
  }
`
const ActiveBorder = styled.div<IAttr>`
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

export default ({ className, href, children, showActiveBorder, showActiveBg, onClose }: React.PropsWithChildren<{
  className?: string;
  href: string;
  showActiveBorder?: boolean;
  showActiveBg?: boolean;
  onClose?: (e: React.MouseEvent) => void;
}>) => {
  const handleClick = (e: React.MouseEvent) => {
    onClose?.(e);
  }

  return (
    <Location>
      {({ location }) => {
        const active =  location.pathname === href;

        return (
          <StyledLink onClick={handleClick} className={className} to={href} active={!!showActiveBorder && active} activebg={!!showActiveBg && active}>
            {children}
            {showActiveBorder && <ActiveBorder active={active}/>}
          </StyledLink>
        )
      }}
    </Location>
  );
};
