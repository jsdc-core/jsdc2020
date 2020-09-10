import React, { useCallback } from 'react';
import Overlay from '~/components/Overlay';
import { Speaker } from './types';
import styled, { keyframes } from 'styled-components';
import Img from '~/components/Img';

interface Props {
  speaker: Speaker;
  onClose: () => void;
}

export default function SpeakerModal({ speaker, onClose }: Props) {
  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  }, []);

  const renderDescription = (description: string) => {
    return description?.split('\n').map(d => <>{d}<br/></>);
  }

  return (
    <Overlay handleClick={handleClose}>
      <Wrapper onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <Main>
          <AvatarContainer>
            <Avatar src={`/images/speaker/${speaker.img}`} alt=''/>
          </AvatarContainer>
          <TitleContainer>
            {speaker.name}<br/>
            題目：{speaker.subject ?? 'TBD'}
          </TitleContainer>
          <Description>
            {!!speaker.description ? renderDescription(speaker.description) : 'TBD'}
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
  grid-template-rows: auto 22px auto 8px auto;
  grid-template-areas: 'avatar'
    '.'
    'title'
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
const TitleContainer = styled.h3`
  grid-area: title;
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
