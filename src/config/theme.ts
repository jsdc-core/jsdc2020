const deviceSize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
}

export default {
  colors: {
    primary: '#ffc825',
    active: '#1487BA',
    darkPrimary: '#ddb32d',
    text: '#464646',
    lightText: '#BEBEBE',
    white: '#FFFFFF',
    bg: '#F7F7F7',
    imgBg: '#DEDEDE',
    drawerHeaderBorder: '#EFEFEF',
    drawerLinkActive: '#F7F7F7',
    dividerLine: '#ececec',
    shadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
    overlayBg: 'rgba(0, 0, 0, 0.4)',
    title1: '#18A57E',
  },
  font: {
    fontFamily: 'PingFang TC, Microsoft JhengHei, Open Sans, sans-serif',
    fontSize: '14px',
    lineHeight: '22px',
    title1: `
      font-size: 32px;
      line-height: 45px;
      font-weight: 500;
    `,
    title2: `
      font-size: 24px;
      height: 33px;
      font-weight: 500;
    `,
    title3: `
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
    `,
  },
  mediaSize: {
    mobileS: `(max-width: ${deviceSize.mobileS - 1}px)`,
    mobileM: `(max-width: ${deviceSize.mobileM - 1}px)`,
    mobileL: `(max-width: ${deviceSize.mobileL - 1}px)`,
    tablet: `(max-width: ${deviceSize.tablet - 1}px)`,
    laptop: `(max-width: ${deviceSize.laptop - 1}px)`,
    laptopL: `(max-width: ${deviceSize.laptopL - 1}px)`,
    desktop: `(max-width: ${deviceSize.desktop - 1}px)`,
    desktopL: `(max-width: ${deviceSize.desktop - 1}px)`,
  },
  deviceSize,
  vars: {
    mainHorizontalMargin: 30,
    headerHeight: 60,
    headerLogoHeight: 40,
    footerHeight: 22,
    footerMargin: 20,
    title2Margin: 40,
  }
}
