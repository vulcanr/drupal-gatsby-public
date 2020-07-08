import React from "react"
import { graphql, StaticQuery } from "gatsby" 
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        picture:imageSharp(fluid: {originalName: {eq: "me.jpeg"}}) {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => (
  <Layout>
    <h2 class="h1 about__title">ABOUT ME</h2>
    <div className= {`about`}>
    <SEO title="About" keywords={[`frontend`, `developer`, `react`, `drupal`, `croatia`, `theming`, `annertech`]}/>
        
        <p>Hello, my name is Juanluis Lozano, I'm a <h1>Drupal FrontEnd Developer</h1> at <Link to={ `https://www.annertech.com` } title={`Annertech`}>Annertech</Link> where 
        we create awesome Digital Experiences for our clients.</p>
        <p>Based in Rijeka, Croatia. Originally from Venezuela, roots made me come back to this beautiful country where I live now with my wife and my 2 daughters.</p>
        <p>Usually I will be searching for new and interesting technologies, gadgets, and of course, trying to make my life as a developer easier,
          with new tools, snippets or workflow.</p>
        <p>When I'm not doing the things above, I'll be more likely spending time with my family, playing board games with my wife and kids or <i><b>dancing baby shark with my older daughter.</b></i></p>

        <img src={ data.picture.fluid.src } alt="Me and my family" />
        <small>Me and my family.</small>
    </div>
  </Layout> )}
 />
 )
export default AboutPage
