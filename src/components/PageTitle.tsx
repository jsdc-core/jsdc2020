import React from "react"
import styled from "styled-components"

export default function PageTitle({ title }: { title: string }) {
  return (
    <Main>
      <Title>{title}</Title>
    </Main>
  )
}

const Main = styled.div`
  height: 61px;
  padding: 8px 60px;
`;
const Title = styled.div`
  ${props => props.theme.font.title1};
  color: ${props => props.theme.colors.title1};
`;
