import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import styled from "styled-components"

import { styles, PageHeader, Banner, Title, Section, ContentWrapper, CustomedHeader, FluidSection } from "../../utils"

import { BiMailSend } from "@react-icons/all-files/bi/BiMailSend";
import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'



const OfferContactSection = ({ data }) => {

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



  return (

      <FluidSection>

      <Title title="dział oferty"/>
{/*       <OfferContactSectionContentWrapper> */}
      <OfferContactSectionContentBox
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease">
      <h3>dane kontaktowe:</h3>
      <IconsBox>
          <IconBox href="mailto:lg@ozdobne.kopalniagnejsu.pl">
          <BiMailSend />
          <h5>lg@ozdobne.kopalniagnejsu.pl</h5>
          </IconBox>
          <IconBox href="tel:+48600184208">
            <FiPhoneCall />
            <h5>+48 600 184 208</h5>
          </IconBox>
          <IconBox href="https://www.facebook.com/Kopalnia-Gnejsu-Pomian%C3%B3w-Doboszowice-sp-z-oo-300349376653944/">
          <AiOutlineFacebook />
          <h5>profil na Facebook'u</h5>
          </IconBox>
      </IconsBox>
        </OfferContactSectionContentBox>
{/*       </OfferContactSectionContentWrapper> */}
      </FluidSection>
  )
}

export default OfferContactSection


const IconsBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;


@media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1fr 1fr;
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
         bottom: -4px; 

         margin: 0 auto;
       left: 0;
         right: 0;
       width: 50%;
       background: green;

       -o-transition:.5s;
         -ms-transition:.5s;
         -moz-transition:.5s;
         -webkit-transition:.5s;
         transition:.5s;
     }
    
     h5:hover:after {
       width: 80%;
       background: orange;
     }

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


const OfferContactSectionContentWrapper = styled(ContentWrapper)`

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

const OfferContactSectionContentBox = styled.div`
color: ${({ theme }) => theme.colors.aboutSectionColor};
background: ${({ theme }) => theme.colors.aboutSectionBg};
margin-bottom: 10px;
padding: 10px 20px;
position: relative;
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
