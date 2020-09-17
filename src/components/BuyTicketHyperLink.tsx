import React from 'react';
import styled from 'styled-components';

import HyperLink from './HyperLink';

export default function BuyTicketHyperLink() {
  return (
    <Main href='https://www.accupass.com/event/2009050225034992799020'>
      立即購票
    </Main>
  );
}

const Main = styled(HyperLink)`
  ${props => props.theme.font.title5};
  display: grid;
  place-items: center;
  width: 103px;
  height: 39px;
  background-color: ${props => props.theme.colors.mainPink};
  border-radius: 50px;
  color: ${props => props.theme.colors.white};

  @media ${props => props.theme.mediaSize.laptop} {
    width: 110px;
  }
`;
