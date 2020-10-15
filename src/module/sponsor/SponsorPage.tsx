import React from 'react';
import styled from 'styled-components';
import Aspect from '~/components/Aspect';
import HyperLink from '~/components/HyperLink';
import PageTitle from '~/components/PageTitle';
import SPONSORS from '~/data/sponsor';

const SPONSOR_RATIO = 138 / 48;

export default function SponsorPage() {
  return (
    <Main>
      <PageTitle title='合作夥伴'/>
      <SponsorContainer>
        <SponsorLevelSection>
          <SponsorLevel>特別感謝</SponsorLevel>
          <SponsorSection>
            {SPONSORS.special.map(special => (
              <SponsorCard key={special.company}>
                <StyledAspect ratio={SPONSOR_RATIO}>
                  <HyperLink href={special.link}>
                    <SponsorCardInner title={special.description}>
                      <Img
                        heightPercent={special.height}
                        widthPercent={special.width}
                        src={`/images/sponsor/${special.logo}`}/>
                    </SponsorCardInner>
                  </HyperLink>
                </StyledAspect>
              </SponsorCard>
            ))}
          </SponsorSection>
        </SponsorLevelSection>
      </SponsorContainer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;
const SponsorContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
`;
const SponsorLevelSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;
const SponsorSection = styled.div`
  display: grid;
  grid-row-gap: 14px;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 1fr;
  padding: 20px 38px 0;
  width: 100%;

  @media ${props => props.theme.mediaSize.tablet} {
    padding: 20px 18px 0;
  }
`;
const SponsorCard = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
`;
const SponsorCardInner = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;
const SponsorLevel = styled.div`
  ${props => props.theme.font.title2};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  width: calc(100% - 24px);
  max-width: 954px;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    width: calc(50% - 36px - 41px);
    background-color: ${props => props.theme.colors.primary};
  }

  &::after {
    position: absolute;
    content: '';
    right: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    width: calc(50% - 36px - 41px);
    background-color: ${props => props.theme.colors.primary};
  }
`;
const StyledAspect = styled(Aspect)`
  width: 100%;
`;
const Img = styled.img<{ heightPercent?: string; widthPercent?: string; }>`
  height: ${props => props.heightPercent};
  width: ${props => props.widthPercent};
`;
