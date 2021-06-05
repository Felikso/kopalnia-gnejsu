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

import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";


import Header from "../Header/Header"
import ScrollBtn from "../../interactions/ScrollBtn"
import CookiesBanner from "../CookiesBanner/CookiesBanner"
import Footer from "../Footer/Footer"

import "./layout.css"

const Layout = ({ children, offerLinks }) => {
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

  const links = [
    {
      id: 1,
      path: "/oferta/",
      name: "oferta",
      scrollId: "our-offer-section",
    },
    {
      id: 2,
      path: "/galeria/",
      name: "aranżacje",
      scrollId: "about-us-section",
    },
    {
      id: 3,
      path: "/transport/",
      name: "transport",
      scrollId: "contact-us-section",
    },
    {
      id: 4,
      path: "/lokalizacja/",
      name: "lokalizacja",
      scrollId: "contact-us-section",
    }
  ]

  return (
    <>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} links={offerLinks ? offerLinks : links}/>
            <ScrollBtn showBelow={250} />
            <CookiesBanner showBelow={250} />
              <main>{children}</main>

              <Footer siteData={siteData} />

         </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
