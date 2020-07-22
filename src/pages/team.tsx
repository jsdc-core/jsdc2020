import React from "react"
import styled from "styled-components"
import Img from "~/components/Img"
import teamData from '~/data/team'
// import PageTitle from '../components/PageTitle'

const TeamPage = () => {
  return (
    <Main>
      {/* <PageTitle title='工作團隊'/> */}
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

const MemberBox = props => {
  return (
    <Member>
      <Avatar src={props.image} />
      <Name>{props.name}</Name>
    </Member>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
`

const Team = styled.span`
  text-align: center;
  margin-bottom: 28px;
  font-size: 28px;
`

const TeamMembers = styled.div`
  margin: 20px 10%;
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
  padding: 25px;
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
  width: 100%;
  height: auto;
  border-radius: 50%;
`

const Name = styled.span`
  padding: 20px 0px;
  font-size: 14px;
  font-weight: 300;
`

export default TeamPage
