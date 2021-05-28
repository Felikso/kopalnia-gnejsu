

import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHeader from "../components/MainHeader/MainHeader"

import styled from 'styled-components'

import BackgroundCustomedSlider from "../customedLib/customed-slider-show"
import { breakpoints } from "../utils/breakpoints"

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

    backgrounds: allFile(filter: {sourceInstanceName: {eq: "backgrounds"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData
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
{/*       <HomeSlider/> */}
    <MainHeader
    height="90vh"
    mobileHeight="80vh"
    linearGradient="linear-gradient(0deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 62%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.8) 90%, rgba(0,0,0,1) 100%)"
    >
        <BackgroundCustomedSlider 
              query={data}
            />
            <HeroBox>
            <h1>Kopalnia gnejsu</h1>
            <HeroBtnsBox>
              <HeroButton to="/o-nas">
                dowiedz się więcej
              </HeroButton>
              <HeroButton to="/kontakt">
                kontakt
              </HeroButton>
            </HeroBtnsBox>
            </HeroBox>
            
    </MainHeader>
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

const HeroBox = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;
  padding: 5rem;
  @media ${breakpoints.md} {
    flex-direction: row;
  }

  h1{
    color: black;
    margin-bottom: 1em;
    font-size: 3em;
  }

`

const HeroBtnsBox = styled.div`
  display: flex;

`

const HeroButton = styled(Link)`
  color: #005e13;
  margin: 0 1em;
  font-size: 1.2em;
  transition: text-decoration 500ms;
  text-decoration: none;

  &:hover{
    text-decoration: revert;
  }

`
