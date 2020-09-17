import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PageTitle from '~/components/PageTitle';
import AgendaData from '~/data/agenda';
import AgendaSection from './AgendaSection';

export default function AgendaPage() {
  const [active, setActive] = useState<'morning' | 'afternoon'>('morning');

  return (
    <Main>
      <PageTitle title='大會議程'/>
      <AgendaContainer>
        <AgendaTabList>
          <AgendaTab onClick={() => setActive('morning')} active={active === 'morning'}>
            上午場 | 道場
          </AgendaTab>
          <AgendaTab onClick={() => setActive('afternoon')} active={active === 'afternoon'}>
            下午場 | 術場
          </AgendaTab>
        </AgendaTabList>
        <AgendaSection agendas={
          active === 'morning'
            ? AgendaData.morning
            : AgendaData.afternoon
        }/>
      </AgendaContainer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;
const AgendaContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
`;
const AgendaTabList = styled.div`
  display: grid;
  grid-auto-flow: column;
`;
const AgendaTab = styled.h2<{ active: boolean }>`
  display: grid;
  place-items: center;
  padding: 16px 60px;
  margin: 0;
  cursor: pointer;
  min-height: 60px;
  ${props => !props.active && css`
    background-color: ${props => props.theme.colors.deactivated};
  `};
  ${props => props.theme.font.title3};

  @media ${props => props.theme.mediaSize.tablet} {
    ${props => props.theme.font.title5};
    padding: 16px 12px;
  }
`;
