import React from "react"
import styled from "styled-components"
import { assetPrefix } from "~/constant/globalConfig"

export default ({ children, title, imgSrc }: React.PropsWithChildren<{
  title: string;
  imgSrc: string;
}>) => {
  return (
    <Main>
      <Inner>
        <Image src={imgSrc}/>
        <Content>
          <Title>{title}</Title>
          {children}
        </Content>
      </Inner>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;
const Inner = styled.div`
  margin: 20px 0;
  max-width: 1000px;
`;
const Image = styled.div<{ src: string }>`
  width: 100%;
  height: 460px;
  background-color: ${props => props.theme.colors.imgBg};
  background-image: url('${props => assetPrefix + props.src}');
  background-position: center;
  background-size: cover;
`;
const Content = styled.div`
  max-width: 800px;
  margin: -160px 100px 0;
  padding: 30px 45px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};

  @media ${props => props.theme.mediaSize.laptop} {
    margin: -160px 12px 0;
  }
`;
const Title = styled.h1`
  ${props => props.theme.font.title1};
  color: ${props => props.theme.colors.title1};
  margin: 0 0 40px;
`;
