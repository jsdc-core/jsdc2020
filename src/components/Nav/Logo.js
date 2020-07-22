import styled from 'styled-components';
import Img from '../Img';

const Logo = styled(Img).attrs(props => ({
  src: '/images/logo/logo.svg',
  height: props.theme.vars.headerLogoHeight,
}))``;
export default Logo;
