import styled from 'styled-components'
import Img from '~/components/Img'

export const TeamMembers = styled.div`
  margin: 0 ${props => props.theme.vars.mainHorizontalMargin}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${props => props.theme.mediaSize.laptop} {
    margin: 20px 5%;
  }
`
export const Member = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 0 25px;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.mediaSize.laptopL} {
    width: 20%;
  }
  @media ${props => props.theme.mediaSize.laptop} {
    width: 30%;
  }
  @media ${props => props.theme.mediaSize.tablet} {
    width: 40%;
  }
  @media ${props => props.theme.mediaSize.mobileL} {
    width: 50%;
  }
`
export const Avatar = styled(Img)`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.white};
`
export const Name = styled.span`
  padding: 20px 0px;
  font-size: 14px;
  font-weight: 300;
`
