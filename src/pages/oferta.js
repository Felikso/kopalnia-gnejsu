import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from "../components/layout"

export const query = graphql`
  query {
    allProductDataJson {
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

const Product = ({ data }) => {
  const productData = data.allProductDataJson

  return (
    <Layout>
      <h1>Products</h1>
      {productData.nodes.map(product => {
         console.log(product.image.childImageSharp.gatsbyImageData)
          return(
        <div>
          <Link to={`/oferta/${product.slug}`}>{product.name}</Link>
          <p>{product.price}lololo</p>
        <GatsbyImage
            image={product.image.childImageSharp.gatsbyImageData}
            alt={product.name}
          />
        </div>
      )})}
    </Layout>
  )
}

export default Product
