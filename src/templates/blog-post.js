import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import getParagraph from "./paragraphs/paragraphHelpers";
import "./blog-post.css"
import SEO from "../components/seo"
// import Img from 'gatsby-image'

export default ({ data }) => {
  const post = data.nodeArticle
  const building_blocks = post.relationships.field_building_blocks.map(getParagraph);
  return (
    <Layout>
      <SEO
          title={post.title}
          description={post.field_teaser_text}
          meta={[
            {
              property: `og:description`,
              content: `${post.field_teaser_text}`,
            },
            {
              property: `og:title`,
              content: `${post.title}`,
            },
            {
              name: `twitter:title`,
              content: `${post.title}`,
            },
            {
              name: `twitter:description`,
              content: `${post.field_teaser_text}`,
            },
          ]}
        />
      <div className={`post`}>
        <h1>{ post.title }</h1>
        <p className={`post__date`}>{ post.created }</p>
        <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}>
          { building_blocks }
        </div>
      </div>
      <div className={`container back-button-holder`}>
        <Link to="/blog" className={`back-button`}>&#x21E6; Back to Blog</Link>
      </div>
    </Layout>
  )
}

export const articleQuery = graphql`
  query($slug: String!) {
    nodeArticle( fields: {slug: {eq: $slug}} ) {
        title
        created(formatString: "MMMM Do YYYY")
        field_teaser_text
        relationships {
            field_building_blocks {
            type: __typename
            ...ParagraphText
            ...ParagraphCode
            ...ParagraphImage
            }
            field_tags {
              name
            }
        }
    }
  }
`