import React from "react"
import logo from "./kopalnia-gnejsu-logo.png"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"

import { ReactComponent as BrandLogo } from "./kopalnia-gnejsu-logo-svg.svg"

const HeroFullLogo = ({background, fontColor, subtitleColor}) => {


  return (
            <HeroLogoBox background={background} subtitleColor={subtitleColor}>
                <HeroBrandName background={background}>
                <CustomedBrandLogo />
                  <HeroBrandNameTitle background={background} fontColor={fontColor} >
                    <h2>kopalnia</h2>
                    <h2> gnejsu</h2>
                  </HeroBrandNameTitle>
                </HeroBrandName >
              <h6>Pomianów-Doboszowice sp. z o. o.</h6>
            </HeroLogoBox>
  )
}

export default HeroFullLogo

const CustomedBrandLogo = styled(BrandLogo)`
height: 80px;
width: 80px;

@media (min-width: ${({ theme }) => theme.device.s}) {
  height: 100px;
  width: 100px;
}
`

const HeroLogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.heroLogoBg};
  padding: 0 10px;
  border-radius: 30px;
  margin: 30px auto;

  h6{
    font-size: 14px;
    color: ${({ theme }) => theme.colors.heroLogoSubtitle};
  }

  @media (min-width: ${({ theme }) => theme.device.s}) {
    padding: 0.5em 1.5em;

    h6{
      font-size: 20px;
    }
  }

  @media (min-width: ${({ theme }) => theme.device.l}) {
    display: none;
  }
`

const HeroBrandName = styled.div`
  display: flex;
  align-items: center;
`


const HeroBrandNameTitle = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    text-transform: uppercase;
    font-size: 26px;
    line-height: 1em;

    color: ${({ theme }) => theme.colors.heroLogoBrandName};
  }

  h2:last-child{
    align-self: flex-end;
  }

  @media (min-width: ${({ theme }) => theme.device.s}) {
    h2{
      text-transform: uppercase;
      font-size: 32px;
      line-height: 1em;
  
      color: ${({ theme }) => theme.colors.heroLogoBrandName};
    }
  }



`
