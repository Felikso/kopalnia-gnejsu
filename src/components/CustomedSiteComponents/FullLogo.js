import React from "react"
import logo from "./kopalnia-gnejsu-logo.png"
import styled from "styled-components"

import { ReactComponent as BrandLogo } from "./kopalnia-gnejsu-logo-svg.svg"


const FullLogo = ({background, fontColor, subtitleColor}) => {


  return (
            <NavLogoBox background={background} subtitleColor={subtitleColor}>
                <NavBrandName background={background}>
                  {/* <LogoImg src={logo} /> */}
                  <BrandLogo />
                  <NavBrandNameTitle background={background} fontColor={fontColor} >
                    <h2>kopalnia</h2>
                    <h2> gnejsu</h2>
                  </NavBrandNameTitle>
                </NavBrandName >
              <h6>Pomianów-Doboszowice sp. z o. o.</h6>
            </NavLogoBox>
  )
}

export default FullLogo

const NavLogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h6{
    font-size: 10px;
    color: ${({ background, subtitleColor }) => (subtitleColor ? subtitleColor : background ? "black" : "#bdbdbd")};
  }
`

const NavBrandName = styled.div`
  display: flex;
  align-items: center;
`

const LogoImg = styled.img`
  padding: 0;
  margin: 0;
  height: 50px;
  width: auto;

`

const NavBrandNameTitle = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    text-transform: uppercase;
    font-size: 20px;
    line-height: 0;
    color: ${({ background, fontColor }) => (fontColor ? fontColor : background ? "black" : "white")};
  }

  h2:last-child{
    align-self: flex-end;
  }
`
