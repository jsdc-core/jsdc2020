import styled from 'styled-components';

export const Company = styled.p`
  grid-area: company;
  ${props => props.theme.font.body5};
  color: ${props => props.theme.colors.subtitle};
  margin: 0;

  @media ${props => props.theme.mediaSize.laptop} {
    ${props => props.theme.font.body6};
  }
`;
