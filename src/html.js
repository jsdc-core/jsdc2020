import React from "react"
import PropTypes from "prop-types"

function renderGoogleTranslateElementScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `function googleTranslateElementInit() {
          new google.translate.TranslateElement({
            pageLanguage: 'zh-TW',
            includedLanguages: 'en,ja,zh-TW,zh-CN',
            layout: google.translate.TranslateElement.FloatPosition.TOP_RIGHT,
            multilanguagePage: true,
          }, 'google_translate_element')
        }`,
      }}
    />
  )
}

// const googleTranslateElementScript = renderGoogleTranslateElementScript();

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel="stylesheet" type="text/css" href="css/normalize.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        <link rel="shortcut icon" type="image/png" href="static/images/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {/* {googleTranslateElementScript} */}
        {/* <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        /> */}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
