import React from "react"
import styled from "styled-components"

interface IProps extends React.PropsWithChildren<{}> {
  href: string;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

export default function HyperLink({ children, ...props}: IProps) {
  return (
    <StyledLink target="_blank" rel="noopener" {...props}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.a`
  text-decoration-line: none;
`
