import React from "react"
import styled from "styled-components"

const DividerLine = styled.span`
  display: block;
  width: 80px;
  height: 1px;
  background: ${props => props.theme.colors.dividerLine};
  margin: 0 auto;
`

export default () => <DividerLine />
