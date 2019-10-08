const size = {
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
  deviceSize: {
    mobileS: `(max-width: ${size.mobileS - 1}px)`,
    mobileM: `(max-width: ${size.mobileM - 1}px)`,
    mobileL: `(max-width: ${size.mobileL - 1}px)`,
    tablet: `(max-width: ${size.tablet - 1}px)`,
    laptop: `(max-width: ${size.laptop - 1}px)`,
    laptopL: `(max-width: ${size.laptopL - 1}px)`,
    desktop: `(max-width: ${size.desktop - 1}px)`,
    desktopL: `(max-width: ${size.desktop - 1}px)`,
  },
}
