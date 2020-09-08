import React from "react"
import styled from "styled-components"

export default function PageTitle({ title }: { title: string }) {
  return (
    <Main>
      {title}
    </Main>
  )
}

const Main = styled.h1`
  ${props => props.theme.font.title1};

  margin: 66px auto 32px;
  height: 60px;
  padding: 8px 60px;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 30px;
`;
