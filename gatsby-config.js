module.exports = {
  siteMetadata: {
    title: `JSDC 2020`,
    description: `臺灣 JavaScript 開發者年會 ( JavaScript Developer Conference Taiwan，簡稱 JSDC ) 是台灣最⼤的 JavaScript 年度性技術研討會，旨在提供台灣中⾼階 JavaScript 技術人才與世界最新 JavaScript 相關技術討論與分享。`,
    author: `JSDC Member`,
    copyright: 'JSDC Taiwan',
    keywords: 'website, javascript, conference, developers, js, JSDC, 2020',
    name: 'JSDC 2020',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/jsdc-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
