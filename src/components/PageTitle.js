import React from "react"
import styled from "styled-components"
import DividerLine from "~/components/DividerLine"

const Container = styled.div`
  width: 100%;
`
const Title = styled.h2`
  width: 100%;
  font-size: 2em;
  line-height: 1.5em;
  text-align: center;
  margin: 0 0 1em 0;
`

export default props => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <DividerLine />
    </Container>
  )
}
