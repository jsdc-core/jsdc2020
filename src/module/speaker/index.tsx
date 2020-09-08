import React from "react"
import styled from "styled-components"
import Aspect from '~/components/Aspect';
import { Member, Avatar, TeamMembers } from '../team/styles';
import PageTitle from '~/components/PageTitle';

const MemberBox = (props: { image: string; name: string }) => {
  return (
    <StyledMember>
      <StyledAspect ratio={1}>
        <StyledAvatar src={props.image} />
      </StyledAspect>
      <Info>
        <SpeakerName>{props.name}</SpeakerName>
        <Company>狄卡科技</Company>
        <SocialLinkContainer>
          <img src='/images/common/github.svg' alt=''/>
          <img src='/images/common/twitter.svg' alt=''/>
        </SocialLinkContainer>
      </Info>
    </StyledMember>
  )
};

export default function Speaker() {
  return (
    <Main>
      <PageTitle title='講者介紹'/>
      <TeamMembers>
        <MemberBox
          image={'/images/teams/logo.svg'}
          name='jsdc'
        />
      </TeamMembers>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledAspect = styled(Aspect)`
  width: 100%;
`;
const Info = styled.div`
  padding: 20px 0;
  display: grid;
  place-items: center;
  grid-auto-flow: row;
  grid-template-rows: auto 4px auto 8px auto;
  grid-template-areas: 'name'
    '.'
    'company'
    '.'
    'socialLink';
`;
const SpeakerName = styled.h3`
  grid-area: name;
  ${props => props.theme.font.title4};
  color: ${props => props.theme.colors.text};
  margin: 0;
`;
const Company = styled.p`
  grid-area: company;
  ${props => props.theme.font.body5};
  color: ${props => props.theme.colors.subtitle};
  margin: 0;
`;
const SocialLinkContainer = styled.div`
  grid-area: socialLink;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
`;
const StyledAvatar = styled(Avatar)`
  box-shadow: 0 0 15px 0 transparent;
  border: 3px solid transparent;
  transition: box-shadow .3s, border .3s;
`;
const StyledMember = styled(Member)`
  cursor: pointer;
  &:hover {
    ${StyledAvatar} {
      box-shadow: 0 0 15px 0 ${props => props.theme.colors.avatarBg};
      border: 3px solid ${props => props.theme.colors.primary};
    }
  }
`;