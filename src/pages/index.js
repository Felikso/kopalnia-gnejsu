

import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSlider from "../components/HomeSlider/HomeSlider"

export const query = graphql`
  query {
    allProductDataJson {
      nodes {
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

const IndexPage = ({ data }) => {
  const productData = data.allProductDataJson

  return (
    <Layout>
      <SEO title="Home" />
      <HomeSlider/>
      {productData.nodes.map(product => {
         console.log(product.image.childImageSharp.gatsbyImageData)
          return(
        <div>
          <Link to={`/oferta/${product.slug}`}>{product.name}</Link>
        <GatsbyImage
            image={product.image.childImageSharp.gatsbyImageData}
            alt={product.name}
          />
        </div>
      )})}
    </Layout>
  )
}

export default IndexPage
