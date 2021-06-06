import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { graphql, useStaticQuery, Link } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'
import 'react-slideshow-image/dist/styles.css'
import './slider.css'
import { ButtonBestia } from "../../utils"

import styled from 'styled-components'

const SimplySlider = () => {
  const [autoplay, setAutoplay] = useState(true);
  const fadeImages  = [
    "https://www.tuwroclaw.com/htimg/display/galbig3/?relativePath=news/52669/dreams2_5e079dfb535dd9_19825921.jpg",
    "https://www.tuwroclaw.com/htimg/display/galbig3/?relativePath=news/52669/dreams2_5e079dfb535dd9_19825921.jpg",
    "https://www.tuwroclaw.com/htimg/display/galbig3/?relativePath=news/52669/dreams2_5e079dfb535dd9_19825921.jpg"
  ];

  const { simplySliderData } = useStaticQuery(
    graphql`
query {
  simplySliderData: allProductDataJson {
    nodes {
      id
      slug
      name
      image {
          childImageSharp {
              gatsbyImageData
              }
      }
    }
  }
}
`
);


  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true
  };

  console.log(simplySliderData)

  return (
    <>
    <div>
      <div className="slide-container">
        <Slide autoplay={autoplay} {...fadeProperties}>
        {	 
		 simplySliderData.nodes.map((item, index) => {	


			 return(
        <Slider css={`
          direction: ${((item.id)%2===0) ? "direction: rtl;" : ""}
        `}>
          <SliderImage image={item.image.childImageSharp.gatsbyImageData} />
          <SliderContent>
            <SliderItemName>{item.name}</SliderItemName>
            <SliderLink to={`oferta/${item.slug}`}>  
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text"> sprawdź </span>
            </button>
            </SliderLink>
            </SliderContent>
      </Slider>
		 )})
}
        </Slide>
      </div>
    </div>

    <SliderBtnsSection>
       <span> Automatyczne przewijanie jest {autoplay ? 'włączone' : 'wyłączone'}</span>
      <SliderBtnsBox>
        <AutoPlayDiv onClick={() => setAutoplay(false)}><ButtonBestia color="black" bg="#282936">Zatrzymaj</ButtonBestia></AutoPlayDiv>
        <AutoPlayDiv onClick={() => setAutoplay(true)}><ButtonBestia color="black" bg="#acacac" hoverBg="white">Wznów</ButtonBestia></AutoPlayDiv>
      </SliderBtnsBox>
    </SliderBtnsSection>

    </>
  );
};

export default SimplySlider;

const AutoPlayDiv = styled.div`
  margin: 10px;
`

const Slider = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 50vh;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 2fr 1fr;
  }
`

const SliderImage = styled(GatsbyImage)`
/*   width: 75%; */

`

const SliderContent = styled.div`
/* width: 25%; */
color: black;
font-size: 1em;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
margin: 0;
background: ${({ theme }) => theme.colors.sliderContentBg};
flex-direction: column;
`

const SliderLink = styled(Link)`


button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
button.learn-more {
  width: 12rem;
  height: auto;
}
button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.sliderContent};
  border-radius: 1.625rem;
}
button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: ${({ theme }) => theme.colors.sliderBtnColor};
}
button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}
button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid ${({ theme }) => theme.colors.sliderBtnColor};
  border-right: 0.125rem solid ${({ theme }) => theme.colors.sliderBtnColor};
  transform: rotate(45deg);
}
button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: ${({ theme }) => theme.colors.sliderContent};
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}
button:hover .circle {
  width: 100%;
}
button:hover .circle .icon.arrow {
  background: ${({ theme }) => theme.colors.sliderBtnColor};
  transform: translate(1rem, 0);
}
button:hover .button-text {
  color: ${({ theme }) => theme.colors.sliderBtnColor};
}

`

const SliderItemName = styled.h4`
    text-transform: uppercase;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.sliderContent};
`

const SliderBtnsBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

`

const SliderBtnsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  grid-gap: 10px;
  margin: 10px auto;
`


