import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import GalleryLightBox from "../components/GalleryLightBox/GalleryLightBox"

import { CustomedHeader, Section, Title, LinkButton } from "../utils"
import OfferContactSection from "../components/OfferContactSection/OfferContactSection"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import ButtonBestia from "../customedItems/ButtonBestia"


const GalleryPage = () => {


    const { productsGallery, img } = useStaticQuery(
        graphql`
          query {
            productsGallery: 
            allFile(filter: {relativeDirectory: {eq: "productsGallery"}}) {
                edges {
                   node {
                    name
                      childImageSharp {
                        thumb: gatsbyImageData(
                          width: 270
                          height: 270
                          placeholder: BLURRED
                        )
                        full: gatsbyImageData(layout: FULL_WIDTH)
                      }
                    }
                  }
                }

                img:  file(relativePath: { eq: "PageHeaders/transport.jpg" }) {
                  childImageSharp {
                    gatsbyImageData(
                        width: 1200, 
                        quality: 60, 
                        webpOptions: {quality: 75})
                    }
                  }
 }
 `
 )

 
const images = productsGallery.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: `kopalnia gnejsu zdjęcie ${node.name}`,

}) )

const backgroundImage = getImage(img);

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
      <Section>
        <Link to="/oferta">
              <ButtonBestia>
                Powrót do oferty
              </ButtonBestia>
        </Link>
              <OfferContactSection />
              <Title title="nasze aranżacje" subtitle="serdecznie zapraszamy do zobaczenia aranżacji wykonanych z naszych produktów" />

      </Section>
        <GalleryLightBox images={images} />
    </Layout>
  )
}

export default GalleryPage
