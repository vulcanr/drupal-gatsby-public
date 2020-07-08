import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
            allNodeArticle(sort: {order: DESC, fields: created}) {
                edges {
                    node {
                        title
                        created(formatString: "MMMM Do YYYY")
                        id
                        field_teaser_text
                        fields {
                          slug
                        }
                        relationships {
                          field_tags {
                            name
                          }
                        }
                    }
                }
            }
        }
      `}
      render={data => (
        <Layout>
          <SEO
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          meta={[
            {
              property: `og:description`,
              content: `${data.site.siteMetadata.description}`,
            },
            {
              property: `og:title`,
              content: `${data.site.siteMetadata.title}`,
            },
            {
              name: `twitter:title`,
              content: `${data.site.siteMetadata.title}`,
            },
            {
              name: `twitter:description`,
              content: `${data.site.siteMetadata.description}`,
            },
          ]}
        />
          <div className= { `information` }>
            <h2>Hello!</h2>
            <p>My name is Juanluis Lozano, I'm a <h1>Drupal Front End Developer</h1> who enjoys tackling projects using the latest available technologies and best practices.</p>
          </div>
          <div className= { `posts posts--homepage` }>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            {data.allNodeArticle.edges.map(edge => (
              <>
                <Link to={ edge.node.fields.slug } className={`post--teaser__link`}>
                  <div className={`post--teaser`}>
                    <h2><Link to={ edge.node.fields.slug }>{ edge.node.title }</Link></h2>
                    <div className={`post--teaser__date`}>
                      { edge.node.created }
                    </div>
                    <div className={`post--teaser__tags`}>
                    { edge.node.relationships.field_tags.map(tag => (
                        <span className={`post--teaser__tags-item`}>
                        { tag.name }
                        </span>
                      ))}
                    </div>
                    <div className={`post--teaser__text`}>
                      <p>{ edge.node.field_teaser_text }</p>
                    </div>
                  </div>
                </Link>
              </>
              ))}
            </div>
        </Layout>
      )}
    />
  )
export default IndexPage