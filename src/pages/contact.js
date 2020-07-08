import React from "react"
import { graphql, StaticQuery } from "gatsby" 
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const WherePage = () => (
  <StaticQuery
    query={graphql`
      query {
        drupal:imageSharp(fluid: {originalName: {eq: "drupal-logo.png"}}) {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
        linkedin: imageSharp(fluid: {originalName: {eq: "linkedin-logo.png"}}) {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
        github: imageSharp(fluid: {originalName: {eq: "github-logo.png"}}) {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
        twitter: imageSharp(fluid: {originalName: {eq: "twitter-logo.png"}}) {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => (
  <Layout>
    <div className= {`contact`}>
    <SEO title="Contact" keywords={[`frontend`, `developer`, `react`, `drupal`, `croatia`, `theming`, `annertech`]}/>
        
        <div className={`container`}>
        <h1>Where to find me</h1>
        <div className={`contact__links`}>
          <div className={`contact__links-item`}>
            <a href="https://www.twitter.com/vulcanr">
              <img src={ data.twitter.fluid.src } alt="Twitter logo"/>
            </a>
          </div>
          <div className={`contact__links-item`}>
          <a href="https://www.drupal.org/u/vulcanr">
            <img src={ data.drupal.fluid.src } alt="Drupal Logo"/>    
          </a>
          </div>
          <div className={`contact__links-item`}>
          <a href="https://www.github.com/vulcanr">
            <img src={ data.github.fluid.src } alt="Github logo"/>
          </a>
          </div>
          <div className={`contact__links-item`}>
          <a href="https://www.linkedin.com/in/juanluislozano/">
            <img src={ data.linkedin.fluid.src } alt="Linkedin logo"/>
          </a>
          </div>
        </div>
        </div>
    </div>
  </Layout>
    )}
 />
 )

export default WherePage
