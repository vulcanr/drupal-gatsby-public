import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import "./blog.css"
import SEO from "../components/seo"

const ArticlesPage = () => (
    <StaticQuery
      query={graphql`
        query {
            allNodeArticle(filter: {status: {eq: true}}, sort: {order: DESC, fields: created})  {
                edges {
                    node {
                      title
                      created(formatString: "MMMM Do YYYY")
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
          
          <div className= { `posts posts--blog` }>
          <h1>BLOG</h1>
          <SEO title="Blog" keywords={[`gatsby`, `application`, `react`, `drupal`, `frontend`, `theming`]} />
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
export default ArticlesPage