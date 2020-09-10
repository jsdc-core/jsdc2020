import React from "react"
import styled from "styled-components"

import teamData from '~/data/team'
import PageTitle from '../components/PageTitle'
import Aspect from '~/components/Aspect'
import { Member, Avatar, Name, TeamMembers } from '~/module/team/styles'

const MemberBox = (props: { image: string; name: string }) => {
  return (
    <Member>
      <StyledAspect ratio={1}>
        <Avatar src={props.image} />
      </StyledAspect>
      <Name>{props.name}</Name>
    </Member>
  )
};

export default function TeamPage() {
  return (
    <Main>
      <PageTitle title='工作團隊'/>
      {Object.keys(teamData).map((key: string) => {
        const members = teamData[key];
        return (
          <React.Fragment key={key}>
            <Team>{key}</Team>
            <TeamMembers>
              {members.map(member => (
                <MemberBox
                  key={member.name}
                  image={`/images/teams/${member.img}`}
                  name={member.name}
                />
              ))}
            </TeamMembers>
          </React.Fragment>
        )
      })}
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`
const Team = styled.h2`
  ${props => props.theme.font.title2};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - ${props => props.theme.vars.mainHorizontalMargin * 2}px);
  margin: ${({ theme: { vars } }) => `${vars.title2Margin}px ${vars.mainHorizontalMargin}px`};
  color: ${props => props.theme.colors.primary};

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    width: calc((100% - 72px - 64px * 2) / 2);
    background-color: ${props => props.theme.colors.primary};

    @media ${props => props.theme.mediaSize.laptop} {
      width: calc((100% - 72px - 64px) / 2);
    }
  }

  &::after {
    position: absolute;
    content: '';
    right: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    width: calc((100% - 72px - 64px * 2) / 2);
    background-color: ${props => props.theme.colors.primary};

    @media ${props => props.theme.mediaSize.laptop} {
      width: calc((100% - 72px - 64px) / 2);
    }
  }
`
const StyledAspect = styled(Aspect)`
  width: 100%;
`;
