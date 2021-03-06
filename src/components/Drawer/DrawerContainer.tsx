import React, { useCallback } from 'react';
import PropTypes from "prop-types"
import styled, { keyframes } from 'styled-components';
import Overlay from '../Overlay';
import { LINKS } from "../../constant"
import linksWithPrefix from '../../utils/linksWithPrefix';
import Link from '../Link';
import Img from '../Img';
import Logo from '../Nav/Logo';
import BuyTicketHyperLink from '../BuyTicketHyperLink';

export default function DrawerContainer({ onClose }: { onClose: () => void; }) {
  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  }, []);

  return (
    <Overlay handleClick={handleClose}>
      <Main onClick={(e: React.MouseEvent) => { e.stopPropagation() }}>
        <DrawerHeader>
          <Logo/>
          <CloseButton onClick={handleClose}>
            <Close/>
          </CloseButton>
        </DrawerHeader>
        <LinkContainer>
          <BuyTicketHyperLink/>
        </LinkContainer>
        {linksWithPrefix(LINKS).map((link, i) => (
          <StyledLink key={i} href={link.href} onClose={handleClose} showActiveBg>
            {link.name}
          </StyledLink>
        ))}
      </Main>
    </Overlay>
  );
}

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  width: 286px;
  height: 100vh;
  animation: ${slideIn} 0.15s;
`;
const DrawerHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.theme.vars.headerHeight}px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  margin: 0;
`;
const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
const Close = styled(Img).attrs({
  src: '/images/common/close.svg',
})``;
const LinkContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 24px 0 12px;
`;
