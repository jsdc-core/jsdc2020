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
    primaryOld: '#ffc825',
    primary: '#18A57E',
    active: '#1487BA',
    darkPrimary: '#ddb32d',
    text: '#464646',
    subtitle: '#707070',
    lightText: '#BEBEBE',
    white: '#FFFFFF',
    bg: '#F7F7F7',
    imgBg: '#DEDEDE',
    drawerHeaderBorder: '#EFEFEF',
    drawerLinkActive: '#F7F7F7',
    dividerLine: '#ececec',
    shadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
    overlayBg: 'rgba(0, 0, 0, 0.4)',
    avatarBg: 'rgba(0, 0, 0, 0.2)',
    mainBg: '#001A29',
    mainPink: '#FD4680',
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
      line-height: 33px;
      font-weight: 500;
    `,
    title3: `
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
    `,
    title4: `
      font-size: 18px;
      line-height: 25px;
      font-weight: 500;
    `,
    title5: `
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
    `,
    body5: `
      font-size: 16px;
      line-height: 22px;
      font-weight: 400;
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
