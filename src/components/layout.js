/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"
import Footer from "./footer"

// import Header from "./_header"
import "./layout.css"

const Layout = ({ children }) => {
  
  return (
    <>
      <main>
        <div className={ `header` } >
          <div className= { `container header__content` }>
            <div className= {` header__content-name `}>
            <Link to="/" className={``} title={` Juanluis Lozano - Drupal Frontend Developer` }>
              <p>Juanluis Lozano
                <span>DRUPAL FRONTEND DEVELOPER</span>
              </p>
            </Link>
            </div>
            <Menu></Menu>
          </div>
        </div>
        <div className= { `container` }>
          {children}
        </div>
      </main>
      <Footer></Footer>
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
