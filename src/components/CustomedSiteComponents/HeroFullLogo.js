import React from "react"
import logo from "./kopalnia-gnejsu-logo.png"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"

const HeroFullLogo = ({background, fontColor, subtitleColor}) => {


  return (
            <HeroLogoBox background={background} subtitleColor={subtitleColor}>
                <HeroBrandName background={background}>
                  <HeroLogoImg src={logo} />
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

const HeroLogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h6{
    font-size: 10px;
    color: ${({ theme }) => theme.colors.heroLogoSubtitle};
  }

  @media ${breakpoints.md} {
    display: none;
  }
`

const HeroBrandName = styled.div`
  display: flex;
  align-items: center;
`

const HeroLogoImg = styled.img`
  padding: 0;
  margin: 0;
  height: 8vh;

`

const HeroBrandNameTitle = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    text-transform: uppercase;
    font-size: 20px;
    line-height: 0;
    color: ${({ theme }) => theme.colors.heroLogoBrandName};
  }

  h2:last-child{
    align-self: flex-end;
  }


`
