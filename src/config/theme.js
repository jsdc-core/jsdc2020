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
    bg: '#fff',
    dividerLine: '#ececec',
    shadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
  },
  font: {
    fontFamily: 'PingFang TC, Microsoft JhengHei, Open Sans, sans-serif',
    fontSize: '14px',
    lineHeight: '22px',
    title2: `
      font-size: 16px;
      link-height: 22px;
      font-weight: 500;
    `
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
    headerHeight: 78,
    footerHeight: 22,
    footerMargin: 20,
  }
}
