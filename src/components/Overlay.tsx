import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Overlay({
  handleClick,
  children,
}: React.PropsWithChildren<{
  handleClick: (e: React.MouseEvent) => void;
}>) {
  return (
    <Main onClick={handleClick}>
      {children}
    </Main>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const Main = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.overlayBg};
  animation: ${fadeIn} 0.15s;
  overflow: hidden;
`;
