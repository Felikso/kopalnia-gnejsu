/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../style/GlobalStyle";
import { theme } from "../../style/theme.js";


import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import "./layout.css"

const Layout = ({ children }) => {
  if (typeof window !== `undefined`){
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
}

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteData = data.site.siteMetadata

  return (
    <>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
            >
              <main>{children}</main>
              <Footer siteData={siteData} />
            </div>
         </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
