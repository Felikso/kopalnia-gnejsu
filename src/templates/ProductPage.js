import React from "react"
import { graphql } from "gatsby"
import {  GatsbyImage } from 'gatsby-plugin-image'
import Gallery from '@browniebroke/gatsby-image-gallery'
import Layout from "../components/layout"
import GalleryLightBox from "../components/GalleryLightBox/GalleryLightBox"
import styled from 'styled-components'



export const query = graphql`
  query($slug: String!) {
    productDataJson(slug: { eq: $slug }) {
      name
      fraction {
        size
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
      <h1>{productData.name}</h1>
      <GatsbyImage
                      key={key}
                      image={productData.image.childImageSharp.gatsbyImageData}
                      alt={`lwowskie-smaki-menu-${productData.name}`}
                      load="lazy"
        />
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
            productData.fraction.map((item, i) =>(
              <p key={i}>{item.size}</p>
            ))
          }
          <h6>Kolor</h6>
          <p>{productData.color}</p>
          <h6>Dodatkowe informacje</h6>
          <p>{productData.moreInfo}</p>
        </section>


    </Layout>
  )
}

export default ProductPage

