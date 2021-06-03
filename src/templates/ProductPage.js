import React from "react"
import { graphql } from "gatsby"
import {  GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "../components/Layout/Layout"
import GalleryLightBox from "../components/GalleryLightBox/GalleryLightBox"
import styled from 'styled-components'

import { CustomedHeader, Section, Title, LinkButton } from "../utils"



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

  return (
    <Layout>
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
              <LinkButton css={`
              position: absolute;
              `}>
                Powrót do oferty
              </LinkButton>
      
      <Section>
      <Title title={productData.name}/>
        <div className="test">
{/*             {
                productData.gallery.map((item, i) => {
                    console.log(item)
                    return(
                        <GatsbyImage
                        key={key}
                        image={item.image.childImageSharp.gatsbyImageData}
                        alt={`kopalnia-gnejsu-${productData.name}`}
                        load="lazy"
          />
                    )
                })
            } */}
        </div>

        <section>
          <GalleryLightBox 
          images={images}
           />
        </section>

        <section>
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
        </section>

        </Section>
    </Layout>
  )
}

export default ProductPage

