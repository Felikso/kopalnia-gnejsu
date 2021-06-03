import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import GalleryLightBox from "../components/GalleryLightBox/GalleryLightBox"


const GalleryPage = () => {
    const photos = useStaticQuery(
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
 }
 `
 )

 
const images = photos.productsGallery.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: `kopalnia gnejsu zdjęcie ${node.name}`,

}) )

  return (
    <Layout>
        <GalleryLightBox images={images} />
    </Layout>
  )
}

export default GalleryPage
