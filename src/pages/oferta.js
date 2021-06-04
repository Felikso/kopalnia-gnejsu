import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import styled from "styled-components"
import { styles, PageHeader, Banner, Title, Section, ContentWrapper, CustomedHeader, FluidSection } from "../utils"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/Seo"

import OfferContactSection from "../components/OfferContactSection/OfferContactSection"
import ButtonBestia from "../customedItems/ButtonBestia"

const Product = ({ data }) => {

  const { img, productData } = useStaticQuery(
    graphql`
query {
  img:  file(relativePath: { eq: "PageHeaders/oferta.jpg" }) {
      childImageSharp {
        gatsbyImageData(
            width: 1200, 
            quality: 60, 
            webpOptions: {quality: 75})
        }
      }

    productData:  allProductDataJson {
    nodes {
      price
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

  const backgroundImage = getImage(img);

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
            <SEO title="Kopalnia Gnejsu - oferta" />
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
  <Link to="/">
              <ButtonBestia>
                Powrót do strony głównej
              </ButtonBestia>
  </Link>
</Section>
    <OfferContactSection />
    <Link to="/">
        </Link>
      <FluidSection>

      <Title title="oferta" subtitle="dowiedz się więcej na temat naszej oferty" />
      {productData.nodes.map(product => {
         const firstImage = getImage(product.image.childImageSharp.gatsbyImageData);
        const bgImage = convertToBgImage(firstImage)
          return(



          <OfferItemBg
              Tag="section"
              {...bgImage}
              preserveStackingContext
              data-sal="fade-in"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
           <OfferItemBox>
          <Link to={`/oferta/${product.slug}`}>
            <ButtonBestia>{product.name}</ButtonBestia>
            </Link>
          </OfferItemBox>
          </OfferItemBg>


      )})}

      </FluidSection>

    </Layout>
  )
}

export default Product



const OfferItemBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 40vh;
`
const OfferItemBg = styled(BackgroundImage)`

`