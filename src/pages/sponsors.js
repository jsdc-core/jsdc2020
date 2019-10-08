import React from "react"
import styled from "styled-components"
import PageTitle from "~/components/PageTitle"
import Img from "~/components/Img"
import HyperLink from "~/components/HyperLink"
import sponsorCategory from "~/data/sponsorCategory"
import sponsorsData from "~/data/sponsors"

export default function SponsorPage() {
  return (
    <Container>
      <StyledPageTitle title={sponsorCategory.titanium.name} />
      {sponsorsData["titanium"].map(sponsor => (
        <SponsorBox
          description={sponsor.description}
          logo={`/images/sponsors/${sponsor.logo}`}
          link={sponsor.link}
        />
      ))}
      <StyledPageTitle title={sponsorCategory.gold.name} />
      {sponsorsData["gold"].map(sponsor => (
        <SponsorBox
          description={sponsor.description}
          logo={`/images/sponsors/${sponsor.logo}`}
          link={sponsor.link}
        />
      ))}
      <StyledPageTitle title={sponsorCategory.special.name} />
      <SpecialList>
        {sponsorsData["special"].map(sponsor => (
          <SpecialSponsor>
            <SponsorLogoLink
              src={`/images/sponsors/${sponsor.logo}`}
              link={sponsor.link}
            />
          </SpecialSponsor>
        ))}
      </SpecialList>
    </Container>
  )
}
const SponsorLogoLink = ({ src, link }) => (
  <HyperLink href={link}>
    <SponsorLogo src={src} />
  </HyperLink>
)

const SponsorBox = ({ category, link, logo, description }) => (
  <Sponsor category={category}>
    <SponsorLogoLink src={logo} link={link} description />
    {description && <Description>{description}</Description>}
  </Sponsor>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10% 70px 10%;
`

const StyledPageTitle = styled(PageTitle)`
  margin-bottom: 20px;
`

const Sponsor = styled.div`
  width: 25%;
  padding: 25px 15px 0 15px;
  margin-bottom: 30px;
  @media ${props => props.theme.deviceSize.laptop} {
    width: 35%;
  }
  @media ${props => props.theme.deviceSize.tablet} {
    width: 50%;
  }
`

const SponsorLogo = styled(Img)`
  width: 100%;
  height: auto;
`

const Description = styled.p`
  height: 320px;
  overflow: auto;
  line-height: 23px;
  text-align: center;
  padding-right: 10px;
  white-space: pre-line;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.8);
  }
`

const SpecialList = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media ${props => props.theme.deviceSize.laptop} {
    /* display: block; */
    flex-direction: column;
  }
`

const SpecialSponsor = styled.div`
  margin: 15px 10px;
  display: flex;
  width: 130px;
  height: 90px;
  justify-content: center;
  align-items: center;
`
