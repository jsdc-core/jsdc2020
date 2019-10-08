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
    primary: "#ffc825",
    darkPrimary: "#ddb32d",
    white: "#efefef",
    bg: "#222",
    dividerLine: "#ececec",
  },
  font: {
    fontFamily: '"Microsoft JhengHei", "Open Sans", sans-serif',
    fontSize: "14px",
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
  deviceSize
}
