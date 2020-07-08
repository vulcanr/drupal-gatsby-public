// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import "./footer.css"

const Footer = ({ siteTitle }) => (
    <footer className= { `container` }>
    © {new Date().getFullYear()}, Built with 
    {` `}
    <a href="https://www.gatsbyjs.org" className={`link-gatsby`} title={`GatsbyJS`}>Gatsby</a>
    {` `}  -- Powered by
    {` `}
    <a href="https://www.drupal.org" className={`link-drupal`} title={`Drupal 9`}>Drupal</a>

  </footer>
)

export default Footer
