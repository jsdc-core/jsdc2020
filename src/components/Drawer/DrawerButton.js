import React, { useState } from 'react';
import styled from 'styled-components';
import Img from '../Img';
import DrawerContainer from './DrawerContainer';

export default function DrawerButton() {
  const [showDrawer, setShowDrawer] = useState(true);

  return (
    <>
      <Main onClick={() => setShowDrawer(true)}>
        <Menu/>
      </Main>
      {showDrawer && <DrawerContainer onClose={() => setShowDrawer(false)}/>}
    </>
  );
}

const Main = styled.div`
  display: none;
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media ${props => props.theme.mediaSize.laptop} {
    display: flex;
  }
`;
const Menu = styled(Img).attrs({
  src: '/images/common/menu.svg',
  width: 32,
  height: 32,
})``;
