/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet, MetaProps } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface IProps {
  title?: string;
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  path?: string;
  enableTitleTemplate?: boolean;
}

function SEO({ description, lang, meta = [], title, path, enableTitleTemplate }: IProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            copyright
            keywords
            name
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteTitle = site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defaultTitle={siteTitle}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: 'author',
          content: site.siteMetadata.author,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `copyright`,
          content: site.siteMetadata.copyright,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          name: `itemprop`,
          content: site.siteMetadata.name,
        },
        {
          itemprop: `itemprop`,
          content: site.siteMetadata.name,
        },
        {
          property: `og:title`,
          content: title ? `${title} | ${siteTitle}` : siteTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `http://2020.jsdc.tw${path}`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.name,
        },
        {
          property: 'og:image',
          content: 'https://2020.jsdc.tw/images/official/ogImage.jpg',
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:width',
          content: '628',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:site`,
          content: '@jsdc_tw',
        },
        {
          name: `twitter:title`,
          content: title ? `${title} | ${siteTitle}` : siteTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `zh-Hant-TW`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
