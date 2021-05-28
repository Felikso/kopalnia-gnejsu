

import React from "react"

import styled from 'styled-components'
import { breakpoints } from "../../utils/breakpoints"

const MainHeader = ({ children, height, mobileHeight, linearGradient }) => {

  return (
<HomeHeader
    css={`
        background: ${linearGradient}; 
        height: ${mobileHeight};
        @media ${breakpoints.md} {
            height: ${height};
          }
    `}
    >
    {children}
</HomeHeader>

  )
}

export default MainHeader

const HomeHeader = styled.header`
  height: 60vh;
  width: 100%;
  position: relative;
`
