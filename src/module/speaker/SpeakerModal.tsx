import React, { useCallback } from 'react';
import Overlay from '~/components/Overlay';
import { Speaker } from './types';
import styled, { keyframes } from 'styled-components';
import Img from '~/components/Img';
import { Company as Subtitle } from './styles';
import renderDescription from '~/utils/renderDescription';
import { Agenda } from '../agenda/types';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  avatar: string;
  onClose: () => void;
}

export default function SpeakerModal({ title, subtitle, description, avatar, onClose }: Props) {
  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  }, []);

  return (
    <Overlay handleClick={handleClose}>
      <Wrapper onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <Main>
          <AvatarContainer>
            <Avatar src={`/images/speaker/${avatar}`} alt=''/>
          </AvatarContainer>
          <Title>
            {title}
          </Title>
          <br/>
          <Subtitle>{subtitle}</Subtitle>
          <Description>
            {!!description ? renderDescription(description) : 'TBD'}
          </Description>
          <Close onClick={handleClose}/>
        </Main>
      </Wrapper>
    </Overlay>
  )
}

const popup = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 30px), -50%);
  width: fit-content;
  max-width: 800px;
  max-height: 482px;
  margin: 0 30px;
`;
const Main = styled.div`
  position: relative;
  padding: 50px;
  background-color: ${props => props.theme.colors.white};
  animation: ${popup} .15s;
  border-radius: 20px;
  display: grid;
  grid-template-rows: auto 22px auto 4px auto 8px auto;
  grid-template-areas: 'avatar'
    '.'
    'name'
    '.'
    'company'
    '.'
    'description';
  place-items: center;

  @media ${props => props.theme.mediaSize.tablet} {
    padding: 14px 18px;
  }
`;
const AvatarContainer = styled.div`
  grid-area: avatar;
  display: flex;
  justify-content: center;
  min-width: 190px;
  margin: auto;

  @media ${props => props.theme.mediaSize.tablet} {
    min-width: 150px;
  }

  @media ${props => props.theme.mediaSize.mobileL} {
    min-width: 150px;
  }

  @media ${props => props.theme.mediaSize.mobileM} {
    min-width: 120px;
  }
`;
const Avatar = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.white};
  margin-top: calc(-50% - 50px);
  object-fit: cover;

  @media ${props => props.theme.mediaSize.tablet} {
    margin-top: calc(-50% - 14px);
  }

  @media ${props => props.theme.mediaSize.mobileL} {
    width: 150px;
    height: 150px;
  }

  @media ${props => props.theme.mediaSize.mobileM} {
    width: 120px;
    height: 120px;
  }
`;
const Title = styled.h3`
  grid-area: name;
  margin: 0;
  ${props => props.theme.font.title4};
  text-align: center;
`;
const Description = styled.p`
  grid-area: description;
  margin: 0;
  max-height: 287px;
  overflow: auto;
`;
const Close = styled(Img).attrs({
  src: '/images/common/close.svg',
})`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;

  @media ${props => props.theme.mediaSize.tablet} {
    width: 15px;
    height: 15px;
  }
`;
