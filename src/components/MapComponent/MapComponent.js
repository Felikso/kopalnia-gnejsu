import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import styled from "styled-components"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'



const MapComponent = ({ data }) => {

  const { firstPhoto, secondPhoto } = useStaticQuery(
    graphql`
query {
  secondPhoto: file(relativePath: { eq: "lokalizacja2.png" }) {
    childImageSharp {
      gatsbyImageData(
          quality: 60, 
          webpOptions: {quality: 75})
      }
    }
  }
  
`
);

const secondImage = getImage(secondPhoto);
const bg2Image = convertToBgImage(secondImage)

/* const image = getImage(placeholderImage)

const bgImage = convertToBgImage(image) */


  return (


        <MapHref href="https://www.google.pl/maps/dir//Kopalnia+gnejsu/@50.4993277,16.8963918,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x470e20eadc4f0217:0x19ce455603782150!2m2!1d16.9664319!2d50.4992395" target="_blank">
        <BackgroundImage
              Tag="section"
              {...bg2Image}
              preserveStackingContext
            >
          <MapBox>
            <h4>kliknij i sprawdź dojazd</h4>
          </MapBox>
          </BackgroundImage>
        </MapHref>
  )
}

export default MapComponent

const MapBox = styled.div`
  position: relative;
  height: 200px;
  background: rgba(84,58,0,0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 500ms;

  &:hover{
    background: rgba(84,58,0,0);
  }
`

const MapImage = styled(GatsbyImage)`
  height: 200px;
  width: 100%;
  position: absolute;
  transition: 2s;
`

const MapHref = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.aboutSectionMapLink}; 

`



