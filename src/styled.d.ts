// ref. https://www.styled-components.com/docs/api#typescript

// import original module declarations
import 'styled-components';

import theme from '~/config/theme'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
}

type Theme = typeof theme;
