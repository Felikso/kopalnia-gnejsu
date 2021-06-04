import React from "react"
import { graphql, Link } from "gatsby"
import {  GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "../components/Layout/Layout"
import GalleryLightBox from "../components/GalleryLightBox/GalleryLightBox"
import styled from 'styled-components'

import { CustomedHeader, Section, Title, LinkButton } from "../utils"

import ButtonBestia from "../customedItems/ButtonBestia"



export const query = graphql`
  query($slug: String!) {
    productDataJson(slug: { eq: $slug }) {
      name
      fraction {
        size
        uniqueName
      }
      color
      moreInfo
      gallery {
        name
        size
        image {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 340
              height: 340
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          
        }
        }
      }
      image {
        childImageSharp {
          gatsbyImageData
        }

      }
      
    }
  }
`

const ProductPage = ({ data, key }) => {
  const productData = data.productDataJson
  const backgroundImage = getImage(productData.image);

  const images = productData.gallery.map((item) => {
    console.log(item)
    return({
      ...item.image.childImageSharp,
      caption: `Kopalnia Gnejsu`,
      underCaptionName: item.name,
      underCaptionSize: item.size,
      fontColorName: 'green',
  
  })
  } )


  const offerLinks = [
    {
      id: 1,
      path: "/oferta/gnejs-ozdobny",
      name: "gnejs ozdobny",
    },
    {
      id: 2,
      path: "/oferta/plytka",
      name: "płytka"
    },
    {
      id: 3,
      path: "/oferta/szpilka",
      name: "szpilka"
    },
    {
      id: 4,
      path: "/oferta/glaz",
      name: "głaz"
    },
    {
      id: 5,
      path: "/oferta/gnejs-ozdobny-gabionowy",
      name: "gnejs ozdobny gabionowy"
    },
    {
      id: 6,
      path: "/oferta/gnejs-ciety",
      name: "gnejs cięty"
    },
  ]

  return (
    <Layout offerLinks={offerLinks}>
              <CustomedHeader
                        bgImage={backgroundImage}
                        headerBg="rgba(0,0,0,0.5)"
                        afterOpacity="0.3 !important"
                        HeroHeight="55vh"
                        HeroWidthMedia="65vh"
                        HeroHeightMedia="55vh"
                        backgroundImage={backgroundImage}
                        >
              </CustomedHeader>

      
      <Section>
        <Link to="/oferta">
      <ButtonBestia>
                Powrót do oferty
      </ButtonBestia>
      </Link>
      <Title title={productData.name}/>

          <GalleryLightBox 
          images={images}
           />

        <OfferItemsBox>
          <h3>Specyfikacja</h3>
          <h6>Frakcja</h6>
          {
            productData.fraction.map((item, i) =>{
              if(item.uniqueName){
                return(
                  <>
                  <h2 key={i}>{item.uniqueName}</h2>
                  <p key={i}>{item.size}</p>
                  </>
                )
              }
                return(
                <p key={i}>{item.size}</p>
              )})
          }
          <h6>Kolor</h6>
          <p>{productData.color}</p>
          <h6>Dodatkowe informacje</h6>
          <p>{productData.moreInfo}</p>
        </OfferItemsBox>

        </Section>
    </Layout>
  )
}

export default ProductPage

const OfferItemsBox = styled.section`
  background: ${({ theme }) => theme.colors.offerItemsBoxBg};
  padding: 10px 20px;

  h3{
    color: ${({ theme }) => theme.colors.offerItemsBoxH3};
    font-size: ${({ theme }) => theme.colors.offerItemsBoxH3FS};
  }

  h6{
    color: ${({ theme }) => theme.colors.offerItemsBoxH6};
    font-size: ${({ theme }) => theme.colors.offerItemsBoxH6FS};
  }

  h2{
    font-size: ${({ theme }) => theme.colors.offerItemsBoxH6FS};
  }
`

