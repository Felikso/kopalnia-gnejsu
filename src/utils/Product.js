import React from "react"
import { Link } from 'gatsby'

import styled from "styled-components"
/* import { styles } from "./index"

import Img from "gatsby-image" */
import {  GatsbyImage } from 'gatsby-plugin-image'

// destructring the product off of props, so we don't have to keep writing props.product
export default function Product({ product, img, key }) {
  const { name, price, desc, slug } = product
/*   console.log(img)
  const imageData = getImage(img)

  console.log(imageData) */
/*   const img = img
  const key = key */
/*   const { fixed } = product.image */
  return (
    <ProductWrapper>
<Link to=""></Link>
<Link to={`/menu/${product.slug}`}>{product.name}</Link>
{                <ProductImg
                      key={key}
                      image={img}
                      alt={`lwowskie-smaki-menu-${name}`}
                      load="lazy"
                   />}
                  {/*  <img src={image}/> */}
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="info">{desc}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .img {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  .name,
  .price {
    color: ${({ theme }) => theme.colors.fourthColor};
    margin-top: 0.5rem;
  }
  .info {
    margin-top: 0.5rem;
    word-spacing: 0.3rem;
    text-transform: lowercase;
  }
`
export const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }

  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
const ProductImg = styled(GatsbyImage)`
  height: 200px;
  width: 200px;

  @media (min-width: 992px) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 576px) {
    height: 250px;
    width: 100%;
  }
`
