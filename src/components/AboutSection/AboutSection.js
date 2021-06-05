import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import styled from "styled-components"

import { styles, PageHeader, Banner, Title, Section, ContentWrapper, CustomedHeader, FluidSection, SectionContentBox } from "../../utils"

import { BiMailSend } from "@react-icons/all-files/bi/BiMailSend";
import { FaFax } from "@react-icons/all-files/fa/FaFax";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import ContactIconsBox from "../../customedItems/ContactIconsBox"

import MapComponent from "../MapComponent/MapComponent"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'



const AboutSection = ({ data }) => {

  const { firstPhoto, secondPhoto } = useStaticQuery(
    graphql`
query {
  firstPhoto: file(relativePath: { eq: "koparka.png" }) {
    childImageSharp {
      gatsbyImageData(
          quality: 60, 
          webpOptions: {quality: 75})
      }
    }
  

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


const firstImage = getImage(firstPhoto);
const bgImage = convertToBgImage(firstImage)

const secondImage = getImage(secondPhoto);
const bg2Image = convertToBgImage(secondImage)

/* const image = getImage(placeholderImage)

const bgImage = convertToBgImage(image) */


  return (

      <FluidSection>

      <Title title="o nas" subtitle="poznaj nas lepiej" />
      <AboutSectionContentWrapper>
      
      <AboutSectionContent>
        <SectionContentBox
          data-sal="fade-in"
          data-sal-delay="0"
          data-sal-easing="ease"
          id="o-nas"
          >
        <h3>o firmie:</h3>
          <p><strong>Kopalnia Gnejsu Pomianów-Doboszowice</strong> znajduje się w województwie dolnośląskim w miejscowości Doboszowice niedaleko Kamieńca Ząbkowickiego i Paczkowa. <strong>Nasza firma zajmuje się produkcją gnejsowych kruszyw drogowych i kolejowych</strong>.</p>

          <p>Wydobycie i produkcja prowadzona jest w ZG Doboszowice posiadającym własną bocznicę kolejową.</p>

          <p>Kopalnia Gnejsu Pomianów-Doboszowice sp. z o.o. próbuje sprostać oczekiwaniom naszych klientów i stale się rozwija osiągając coraz wyższe możliwości produkcyjne oraz lepszą jakość kruszyw.</p>
        </SectionContentBox>
        
        <SectionContentBox
          data-sal="fade-in"
          data-sal-delay="300"
          data-sal-easing="ease"
          >
        <h3>w naszej ofercie:</h3>
          <ul>
            <li>kruszywa gnejsowe klasa I, gatunek I</li>
            <li>tłuczeń kolejowy 31,5-50 dopuszczony do budowy linii kolejowych dużych prędkoci powyżej 200 km/h</li>
            <li>dysponujemy stałym dostępem do specjalistycznego <strong>przewozu kolejowego</strong></li>
            <li>wykaz certyfikatów zgodności oraz świadectw kwalifikacji</li>
          </ul>
          <h6>Bezpośrednie połączenie z liniami kolejowymi w kierunku Wrocławia, Opola i Śląska</h6>
        </SectionContentBox>
      </AboutSectionContent>

      <AboutSectionContact>
      <SectionContentBox
                data-sal="fade-in"
                data-sal-delay="0"
                data-sal-easing="ease"
                id="kontakt">
      <h3>dane kontaktowe:</h3>
      <IconsBox>
      <ContactIconsBox
        href="mailto:lg@ozdobne.kopalniagnejsu.pl"
        content="lg@ozdobne.kopalniagnejsu.pl"
      >
            <BiMailSend />
      </ContactIconsBox>

      <ContactIconsBox
        href="tel:748177015"
        content="+ 74 817 70 15"
      >
            <FiPhoneCall />
      </ContactIconsBox>

      <ContactIconsBox
        href="fax:665065210"
        content="665-065-210"
      >
            <FaFax />
      </ContactIconsBox>
      </IconsBox>
        </SectionContentBox>

 <SectionContentBox
           data-sal="fade-in"
           data-sal-delay="300"
           data-sal-easing="ease">
 <AboutSectionContentInfo>
          <BackgroundImage
              Tag="section"
              {...bgImage}
              preserveStackingContext
            >
        
        <h3>dane firmowe:</h3>

          <p><strong>Kopalnia Gnejsu Pomianów-Doboszowice sp. z o.o.</strong></p>

          <p>Pomianów Górny 47.</p>

          <p>57-230 Kamieniec Ząbkowicki</p>

          <h4>NIP: 887-16-46-910</h4>
          
          </BackgroundImage>
          </AboutSectionContentInfo>
          
        </SectionContentBox>

      </AboutSectionContact>
      <SectionContentBox
                data-sal="fade-in"
                data-sal-delay="0"
                data-sal-easing="ease">
        <MapComponent />
        </SectionContentBox>
      </AboutSectionContentWrapper>
      </FluidSection>
  )
}

export default AboutSection

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


const AboutSectionContentInfo = styled.div`
 /*  position: absolute; */
 height: 100%;
`

const AboutImage = styled(GatsbyImage)`
    position: absolute;
    bottom: 0;
    z-index: -1;
    transition: 2s;
`

const IconsBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;


@media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1fr 1fr;
}

@media (min-width: ${({ theme }) => theme.device.l}) {
  grid-template-columns: 1fr;
}
`

const IconBox = styled.a`
    background: ${({ theme }) => theme.colors.aboutSectionLinkBg}; 
    padding: 10px;
      text-decoration: none;
      text-align: center;
      font-size: 50px;
      display: grid;
      grid-gap: 10px;
      color: ${({ theme }) => theme.colors.aboutSectionLink};
      transition: ease 500ms;

      &:hover{
        filter: brightness(150%);
      }

      svg{
        color: ${({ theme }) => theme.colors.aboutSectionIcon};
        margin: auto;

        @media (min-width: ${({ theme }) => theme.device.l}) {
          margin: 0;
        }
      }

      h5 {
        text-decoration: none; 
        position: relative; 
      }   
 
     h5:after {
         position: absolute;
         content: '';
         height: 2px;
       /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
         bottom: -4px; 
 
 
        /****** 
        optional values below 
        ******/
         
         /* center - (optional) use with adjusting width   */
         margin: 0 auto;
       left: 0;
         right: 0;
       width: 50%;
       background: green;
       
       /* optional animation */
       -o-transition:.5s;
         -ms-transition:.5s;
         -moz-transition:.5s;
         -webkit-transition:.5s;
         transition:.5s;
     }
    
 
    /* optional hover classes used with anmiation */
     h5:hover:after {
       width: 80%;
       background: orange;
     }


/*       h5{
        font-size: 20px;
        position: relative;
      }

      h5:after {
        position: absolute;
        content: '';
        height: 4px;
        bottom: -4px; 
        margin: 0 auto;
      left: 0;
        right: 0;
      background: ${({ theme }) => theme.colors.aboutSectionUnderline};
      -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition:.5s;
      }

      h5:after:hover {
        width: auto;
      } */

      @media (min-width: ${({ theme }) => theme.device.l}) {
        font-size: 30px;
        text-align: start;
        display: flex;
        align-items: baseline;
        h5{
          font-size: 16px;
        }
      }
`

const AboutSectionImage = styled(GatsbyImage)`

  width: 250px;
  margin: auto;

  @media (min-width: ${({ theme }) => theme.device.m}) {
  width: 400px;
}

`

const AboutSectionContentWrapper = styled(ContentWrapper)`

h3 {
  text-decoration: none; 
  position: relative;
  font-size: ${({ theme }) => theme.colors.aboutSectionH3FS};
  color: ${({ theme }) => theme.colors.aboutSectionH3};
}   

h3:after {
   position: absolute;
   content: '';
   height: 4px;
   bottom: -8px; 
   margin: 0;
   left: 0;
   right: 0;
 width: 100px;
 background: ${({ theme }) => theme.colors.aboutSectionUnderline};

 -o-transition:.5s;
   -ms-transition:.5s;
   -moz-transition:.5s;
   -webkit-transition:.5s;
   transition:.5s;
}

h3:hover:after {
 width: 150px;
 background: ${({ theme }) => theme.colors.aboutSectionUnderlineHover};

`

const AboutSectionContent = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.device.l}) {
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 10px;
  }

`

const AboutSectionContact = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.device.l}) {
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 10px;
  }

`

const AboutSectionContentBox = styled.div`
color: ${({ theme }) => theme.colors.aboutSectionColor};
background: ${({ theme }) => theme.colors.aboutSectionBg};
margin-bottom: 10px;
padding: 10px 20px;
position: relative;
/*   display: flex;
  flex-direction: column; */
/*   align-items: center;
  text-align: center; */
}

  @media (min-width: ${({ theme }) => theme.device.m}) {
/*     flex-direction: row;
    justify-content: space-between; */
  }

  li{

    font-style: italic;
    font-size: ${({ theme }) => theme.colors.aboutSectionLiFS};
  }

  span{
    font-size: ${({ theme }) => theme.colors.aboutSectionSpanFS};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.aboutSectionSpan};
  }

  p{
    font-size: ${({ theme }) => theme.colors.aboutSectionPFS};
    color: ${({ theme }) => theme.colors.aboutSectionP};
    margin-top: 2em;
  }

  h6{
    line-height: 2em;
    text-align: center;
  }
`
