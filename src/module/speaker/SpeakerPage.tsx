import React, { useState } from "react"
import styled from "styled-components"
import Aspect from '~/components/Aspect';
import { Member, Avatar, TeamMembers } from '../team/styles';
import PageTitle from '~/components/PageTitle';
import Speakers from '~/data/speaker';
import { Speaker } from './types';
import SpeakerModal from './SpeakerModal';
import HyperLink from '~/components/HyperLink';
import { Company } from './styles';

const MemberBox = ({ speaker }: { speaker: Speaker }) => {
  const [open, setOpen] = useState(false);
  const handleLinkClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <>
      <StyledMember onClick={() => setOpen(true)}>
        <StyledAspect ratio={1}>
          <StyledAvatar src={`/images/speaker/${speaker.img}`} />
        </StyledAspect>
        <Info>
          <SpeakerName>{speaker.name}</SpeakerName>
          <Company>{speaker.company}</Company>
          <SocialLinkContainer>
            {speaker.github && <HyperLink onClick={handleLinkClick} href={`https://github.com/${speaker.github}`}><img src='/images/common/github.svg'/></HyperLink>}
            {speaker.twitter && <HyperLink onClick={handleLinkClick} href={`https://twitter.com/${speaker.twitter}`}><img src='/images/common/twitter.svg'/></HyperLink>}
            {speaker.facebook && <HyperLink onClick={handleLinkClick} href={`https://www.facebook.com/${speaker.facebook}`}><img src='/images/common/facebook.svg'/></HyperLink>}
          </SocialLinkContainer>
        </Info>
      </StyledMember>
      {open && <SpeakerModal
        avatar={speaker.img}
        title={speaker.name}
        subtitle={speaker.company}
        description={speaker.description}
        onClose={() => setOpen(false)}/>}
    </>
  )
};

export default function SpeakerPage() {
  return (
    <Main>
      <PageTitle title='講者介紹'/>
      <TeamMembers>
        {Speakers.map((speaker, i) => (
          <MemberBox key={i} speaker={speaker}/>
        ))}
      </TeamMembers>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledAspect = styled(Aspect)`
  width: 100%;
`;
const Info = styled.div`
  padding: 20px 0;
  display: grid;
  place-items: center;
  text-align: center;
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

  @media ${props => props.theme.mediaSize.laptop} {
    ${props => props.theme.font.title6};
  }
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
  object-fit: cover;
`;
const StyledMember = styled(Member)`
  cursor: pointer;
  justify-content: flex-start;

  &:hover {
    ${StyledAvatar} {
      box-shadow: 0 0 15px 0 ${props => props.theme.colors.avatarBg};
      border: 3px solid ${props => props.theme.colors.primary};
    }
  }
`;