import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Agenda } from '../types';
import SpeakerModal from '~/module/speaker/SpeakerModal';
import HyperLink from '~/components/HyperLink';

function AgendaRowComponent({ agenda }: { agenda: Agenda }) {
  const [open, setOpen] = useState(false);
  const speaker = agenda.speaker;
  const openable = !!agenda.title && !!speaker;
  const handleOpen = () => {
    if (openable) setOpen(true);
  }

  return (
    <AgendaRow>
      <AgendaCell>
        {agenda.time}
      </AgendaCell>
      <AgendaCell>
        {agenda.slide && <Tag><HyperLink href={agenda.slide}>Slide</HyperLink></Tag>}
        <Title onClick={handleOpen} openable={openable}>{agenda.title || 'TBD'}</Title>
        {(speaker || agenda.multiSpeaker) && <Speaker>{speaker?.name ?? agenda.multiSpeaker}</Speaker>}
      </AgendaCell>
      {speaker && open && <SpeakerModal
        avatar={speaker.img}
        title={agenda.title}
        subtitle={speaker.name}
        description={agenda.description ?? ''}
        onClose={() => setOpen(false)}/>}
    </AgendaRow>
  );
}

export default function AgendaSection({ agendas }: { agendas: Agenda[] }) {
  return (
    <Main>
      {agendas.map(agenda => (
        <AgendaRowComponent key={agenda.time} agenda={agenda}/>
      ))}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const AgendaRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid ${props => props.theme.colors.border};
`;
const AgendaCell = styled.div`
  display: grid;
  align-items: center;
  grid-row-gap: 4px;
  padding: 16px 60px;
  min-height: 85px;
  ${props => props.theme.font.title4};

  @media ${props => props.theme.mediaSize.tablet} {
    ${props => props.theme.font.title6};
    padding: 18px 12px;
  }
`;
const Title = styled.h3<{ openable: boolean }>`
  ${props => props.theme.font.title4};
  margin: 0;
  ${props => props.openable && css`
    text-decoration: underline;
    cursor: pointer;
  `};

  @media ${props => props.theme.mediaSize.tablet} {
    ${props => props.theme.font.title6};
  }
`;
const Speaker = styled.p`
  ${props => props.theme.font.body5};
  margin: 0;
  color: ${props => props.theme.colors.subtitle};

  @media ${props => props.theme.mediaSize.tablet} {
    ${props => props.theme.font.body6};
  }
`;
const Tag = styled.div`
  ${props => props.theme.font.body6};
  display: grid;
  place-items: center;
  justify-self: start;
  padding: 4px 6px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 10px;

  & > a {
    color: ${props => props.theme.colors.white};
    width: 100%;
    height: 100%;
  }
`;
