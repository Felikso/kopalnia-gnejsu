import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import styled from "styled-components"
import { styles, PageHeader, Banner, Title, Section, ContentWrapper, CustomedHeader } from "../utils"

import Layout from "../components/Layout/Layout"

/* export const query = graphql`
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
` */

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

      <Title title="oferta" subtitle="dowiedz się więcej na temat naszej oferty" />
      <OfferContentWrapper>
      <h3>Dajemy Państwu możliwość dostarczenia naszego kruszywa w dwojaki sposób:</h3>


      <ul>
        <li><span>Offerem samochodowym</span> <p>około 3000 ton na 24h</p></li>
        <li><span>Offerem kolejowym</span> <p>Z własnej bocznicy ze stacji Doboszowice, bezpośrednio połączeniej z liniami kolejowymi w kierunku Wrocławia, Opola i Śląska</p></li>
      </ul>
      <h6>Oferujemy dostawy kruszyw Offerem kolejowym: węglarka, dumpcar, hoopfer-dozator</h6>
      </OfferContentWrapper>
      </Section>
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

const OfferContentWrapper = styled(ContentWrapper)`
  h3 {
    color: red;
  }
`
