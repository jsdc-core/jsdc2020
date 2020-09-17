import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Agenda } from '../types';
import SpeakerModal from '~/module/speaker/SpeakerModal';

function AgendaRowComponent({ agenda }: { agenda: Agenda }) {
  const [open, setOpen] = useState(false);
  const openable = !!agenda.title && !!agenda.speaker;
  const handleOpen = () => {
    if (openable) setOpen(true);
  }

  return (
    <AgendaRow>
      <AgendaCell>
        {agenda.time}
      </AgendaCell>
      <AgendaCell>
        <Title onClick={handleOpen} openable={openable}>{agenda.title || 'TBD'}</Title>
        {agenda.speaker && <Speaker>{agenda.speaker.name}</Speaker>}
      </AgendaCell>
      {agenda.speaker && open && <SpeakerModal
        agenda={agenda}
        speaker={agenda.speaker}
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
  border-bottom: 1px solid ${props => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
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
