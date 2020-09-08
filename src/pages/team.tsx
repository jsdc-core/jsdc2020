import React from "react"
import styled from "styled-components"
import Img from "~/components/Img"
import teamData from '~/data/team'
import PageTitle from '../components/PageTitle'
import Aspect from '~/components/Aspect'

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
          <>
            <Team>{key}</Team>
            <TeamMembers>
              {members.map(member => (
                <MemberBox
                  image={`/images/teams/${member.img}`}
                  name={member.name}
                />
              ))}
            </TeamMembers>
          </>
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
  color: ${props => props.theme.colors.title1};

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    width: calc((100% - 72px - 64px * 2) / 2);
    background-color: ${props => props.theme.colors.title1};

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
    background-color: ${props => props.theme.colors.title1};

    @media ${props => props.theme.mediaSize.laptop} {
      width: calc((100% - 72px - 64px) / 2);
    }
  }
`
const TeamMembers = styled.div`
  margin: 0 ${props => props.theme.vars.mainHorizontalMargin}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${props => props.theme.mediaSize.laptop} {
    margin: 20px 5%;
  }
`
const Member = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 0 25px;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.mediaSize.laptopL} {
    width: 20%;
  }
  @media ${props => props.theme.mediaSize.tablet} {
    width: 50%;
  }
`
const Avatar = styled(Img)`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.white};
`
const Name = styled.span`
  padding: 20px 0px;
  font-size: 14px;
  font-weight: 300;
`
const StyledAspect = styled(Aspect)`
  width: 100%;
`;