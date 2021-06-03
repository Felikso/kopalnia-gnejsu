

import React from "react"
import styled from 'styled-components'

const MainHeader = ({ children, height, mobileHeight, linearGradient }) => {

  return (
<HomeHeader
    css={`
        background: ${linearGradient}; 
        height: ${mobileHeight};
        @media (min-width: ${({ theme }) => theme.device.m}) {
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
