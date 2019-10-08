import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import Img from "~/components/Img"
import HyperLink from "~/components/HyperLink"

export default function AuthorCard(props) {
  const {
    image,
    name,
    company,
    description,
    about,
    github,
    twitter,
    facebook,
  } = props
  return (
    <Container>
      {image && (
        <AvatarContainer>
          <Avatar src={image} />
        </AvatarContainer>
      )}
      <Content>
        <Header>
          <Name>{name}</Name>
          <Organization>{company}</Organization>
          <LinkList>
            {twitter && <IconLink icon={faTwitter} href={twitter} />}
            {github && <IconLink icon={faGithub} href={github} />}
            {facebook && <IconLink icon={faFacebook} href={facebook} />}
          </LinkList>
        </Header>
        <Bio>
          {about && <HyperLink href={about.link}>{about.text}</HyperLink>}
          {description}
        </Bio>
      </Content>
    </Container>
  )
}

const IconLink = props => (
  <Link target="_blank" href={props.href}>
    <FontAwesomeIcon icon={props.icon} color="#ffc525" />
  </Link>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  padding: 25px 15px 0;
  @media ${props => props.theme.deviceSize.laptopL} {
    max-width: 33.33%;
  }
  @media ${props => props.theme.deviceSize.laptop} {
    max-width: 50%;
  }
  @media ${props => props.theme.deviceSize.tablet} {
    max-width: 100%;
  }
`

const AvatarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Avatar = styled(Img)`
  width: 100%;
  height: auto;
  transition: all 0.3s ease-out 0s;
`

const Content = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: black;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
`

const Name = styled.span`
  font-size: 18px;
  line-height: 23px;
  font-weight: 500;
  text-align: center;
`

const Organization = styled.span`
  font-size: 14px;
  line-height: 23px;
  font-weight: 300;
  margin: 0 0 10px;
`

const LinkList = styled.div`
  display: flex;
  justify-content: center;
`
const Link = styled.a`
  font-size: 16px;
  padding: 0px 5px;
`

const Bio = styled.p`
  font-size: 14px;
  line-height: 23px;
  font-weight: 300;
  text-align: center;
  height: 100px;
  overflow: auto;
  padding: 0px 20px;
  padding-bottom: 10px;
  margin: 0px;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
  }
`
