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
}

function SEO({ description, lang, meta = [], title }: IProps) {
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
  const tempTitle = site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
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
          content: tempTitle,
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
          content: `http://2020.jsdc.tw/`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.name,
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
          content: tempTitle,
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
