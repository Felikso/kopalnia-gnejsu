

import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/Seo"
import MainHeader from "../components/MainHeader/MainHeader"
import HeroFullLogo from "../components/CustomedSiteComponents/HeroFullLogo"
import { styles, PageHeader, Banner, Title, FluidSection, Section, HeroLink } from "../utils"
import AboutSection from "../components/AboutSection/AboutSection"

import styled from 'styled-components'

import BackgroundCustomedSlider from "../customedLib/customed-slider-show"

import SimplySlider from "../components/SimplySlider/SimplySlider"

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

    backgrounds: allFile(filter: {
    sourceInstanceName: {eq: "backgrounds"},
    extension: {regex: "/(jpg)|(png)|(jpeg)/"}
  }) {
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

  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />

    <MainHeader
    height="100vh"
    mobileHeight="100vh"
    linearGradient="linear-gradient(0deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 62%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.8) 90%, rgba(0,0,0,1) 100%)"
    >
        <BackgroundCustomedSlider 
              query={data}
            />
            <HeroBox>
            <HeroFullLogo />
            <HeroBtnsBox>
              <HeroLink to="/o-nas">
                dowiedz się więcej
              </HeroLink>
              <HeroLink to="/kontakt">
                kontakt
              </HeroLink>
            </HeroBtnsBox>
            </HeroBox>
            
    </MainHeader>

    <AboutSection />
    
<FluidSection>
    <Title title="oferta" subtitle="poznaj naszą ofertę" />
{/*     <SimplySlider /> */}
    {/* <OfferSlider /> */}
    {/* <OfferButton to="/oferta">sprawdź całą ofertę</OfferButton> */}
</FluidSection>

<FluidSection>

{/*       {productData.nodes.map(product => {
         console.log(product.image.childImageSharp.gatsbyImageData)
          return(
        <OfferSection>
          <Link to={`/oferta/${product.slug}`}>{product.name}</Link>
        <OfferImage
            image={product.image.childImageSharp.gatsbyImageData}
            alt={product.name}
          />
        </OfferSection>
      )})} */}
</FluidSection>
<div
  data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease"
  >
<img src="https://ocdn.eu/pulscms-transforms/1/iW-k9kpTURBXy9mOTk1NzZhNTY3YjhlYjljZWQ3MDcxMGJjNWEzZTZhNy5qcGeTlQMAFs0C1M0Bl5MFzQMUzQG8kwmmNTk2MTk0BoGhMAE/gettyimages-954867550.jpg" />
</div>

<div
  data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease"
  >
<img src="https://ocdn.eu/pulscms-transforms/1/iW-k9kpTURBXy9mOTk1NzZhNTY3YjhlYjljZWQ3MDcxMGJjNWEzZTZhNy5qcGeTlQMAFs0C1M0Bl5MFzQMUzQG8kwmmNTk2MTk0BoGhMAE/gettyimages-954867550.jpg" />
</div>

<div
  data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease"
  >
<img src="https://ocdn.eu/pulscms-transforms/1/iW-k9kpTURBXy9mOTk1NzZhNTY3YjhlYjljZWQ3MDcxMGJjNWEzZTZhNy5qcGeTlQMAFs0C1M0Bl5MFzQMUzQG8kwmmNTk2MTk0BoGhMAE/gettyimages-954867550.jpg" />
</div>

<div
  data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease"
  >
<img src="https://ocdn.eu/pulscms-transforms/1/iW-k9kpTURBXy9mOTk1NzZhNTY3YjhlYjljZWQ3MDcxMGJjNWEzZTZhNy5qcGeTlQMAFs0C1M0Bl5MFzQMUzQG8kwmmNTk2MTk0BoGhMAE/gettyimages-954867550.jpg" />
</div>

<div
  data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease"
  >
<img src="https://ocdn.eu/pulscms-transforms/1/iW-k9kpTURBXy9mOTk1NzZhNTY3YjhlYjljZWQ3MDcxMGJjNWEzZTZhNy5qcGeTlQMAFs0C1M0Bl5MFzQMUzQG8kwmmNTk2MTk0BoGhMAE/gettyimages-954867550.jpg" />
</div>

<div
  data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease"
  >
<img src="https://ocdn.eu/pulscms-transforms/1/iW-k9kpTURBXy9mOTk1NzZhNTY3YjhlYjljZWQ3MDcxMGJjNWEzZTZhNy5qcGeTlQMAFs0C1M0Bl5MFzQMUzQG8kwmmNTk2MTk0BoGhMAE/gettyimages-954867550.jpg" />
</div>
    </Layout>
  )
}

export default IndexPage

const OfferButton = styled(HeroLink)`
display: block;
text-align: center;
line-height: 1.4em;
margin: 2em auto;
width: 300px;
`


const HeroBox = styled.section`
  width: 100%;
  height: 100%;
  display: flex;

  align-items: flex-end;
  justify-content: flex-end;

  flex-direction: column;
  padding: 5rem;
  @media (min-width: ${({ theme }) => theme.device.m}) {
    flex-direction: row;
    padding: 0;
  }

  h1{
    color: black;
    margin-bottom: 1em;
    font-size: 3em;
  }

`

const HeroBtnsBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
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



const OfferSection = styled.div`
  width: 100%;
  position: relative;
  height: 80vh;
`

const OfferImage = styled(GatsbyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
`