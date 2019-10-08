import React from "react"
import styled from "styled-components"
import Img from "~/components/Img"

export default function Modal(props) {
  const { image, name, subject, outline } = props
  return (
    <Container>
      <Avatar src={image} />
      <Name>{name}</Name>
      <Subject>{subject}</Subject>
      <Outline
        dangerouslySetInnerHTML={{ __html: outline || "噓！講者保密到家。" }}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 0 30px;
`

const Avatar = styled(Img)`
  border-radius: 50%;
  margin: 20px auto;
  display: flex;
  width: 130px;
  height: 130px;
`

const Name = styled.span`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #595959;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  word-wrap: break-word;
  text-transform: none;
  margin: 10px 0;
`

const Subject = styled.span`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 22.5px;
  font-weight: 500;
  color: #0099b4;
  margin: 10px 0;
`

const Outline = styled.p`
  max-height: 150px;
  overflow-y: auto;
  text-align: left;
  padding: 10px 10px;
  font-size: 18px;
  font-weight: 300;
  line-height: 28.8px;
  white-space: pre-line;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.3);
  }
`
