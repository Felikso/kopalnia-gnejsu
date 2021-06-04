import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DesktopNavMenu from "../DesktopNav/DesktopNav"
import MobileNavMenu from "../MobileNav/MobileNav"

const Header = ({ siteTitle, links }) => {
  return (
    <>
      <DesktopNavMenu links={links}/>
      <MobileNavMenu links={links} />
    </>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
