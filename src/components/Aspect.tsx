import React from 'react';
import styled from 'styled-components';

interface IProps {
  className?: string;
  ratio: number;
}

const Main = styled.div`
  position: relative;
`;
const Fill = styled.div<{ ratio: number }>`
  visibility: hidden;
  padding-top: ${({ ratio }) => `calc(100% / ${ratio})`};
  pointer-events: none;
`;
const Content = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Aspect = ({ children, className, ratio }: React.PropsWithChildren<IProps>) => (
  <Main className={className}>
    <Content>
      {children}
    </Content>
    <Fill ratio={ratio}/>
  </Main>
);

export default Aspect;
