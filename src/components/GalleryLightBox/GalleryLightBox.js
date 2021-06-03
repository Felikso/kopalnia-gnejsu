import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

//transitions
/* import Aos from 'aos';
import 'aos/dist/aos.css'; */

/* import Gallery from '@browniebroke/gatsby-image-gallery' */

import Gallery from '../../customedLib/customed-gallery-lightbox/src'


export default function GalleryLightBox({images}) {

const lightboxOptions = {
  imageLoadErrorMessage: 'Przepraszamy, wystąpił problem ze zdjęciem',
  nextLabel: 'Następne zdjęcie',
  prevLabel: 'Poprzednie zdjęcie',
  zoomInLabel: 'Przybliż',
  zoomOutLabel: 'Oddal',
  closeLabel: 'Zamknij',
}

//Add callback to Lightbox onCloseRequest
const onClose = () => {
  console.log('Galeria została zamknięta')
}


const CustomWrapper = ({ children, onClick }) => (
  <GalleryLightBoxContainer onClick={onClick} >
    {children}
  </GalleryLightBoxContainer>
)

    return (
      <>
            <Gallery  
            images={images}
            lightboxOptions={lightboxOptions}
            onClose={onClose}
            rowMargin="0"
            colWidth={100}
            mdColWidth={100} 
            customWrapper={CustomWrapper}

            /> 

</>
    )
}



const GalleryLightBoxContainer = styled.div`
      width: 100%;
      cursor: pointer;
      margin: 0;
      transition: 1s;
      &:hover {
        filter: brightness(1.25);
      }
      @media (min-width: ${({ theme }) => theme.device.m}) {
        width: 100%;
        margin: 0;
      }
`