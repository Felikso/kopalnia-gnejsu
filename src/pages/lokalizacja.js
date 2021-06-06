import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/Seo"
import styled from "styled-components"

import MapComponent from "../components/MapComponent/MapComponent"

import { styles, PageHeader, Banner, Title, Section, ContentWrapper, CustomedHeader, ButtonBestia } from "../utils"

const LocationPage = ({ data }) => {

  const { img, firstPhoto, secondPhoto } = useStaticQuery(
    graphql`
query {
  firstPhoto: file(relativePath: { eq: "mapaPolskiKopalnia.png" }) {
    childImageSharp {
      gatsbyImageData(
          quality: 60, 
          webpOptions: {quality: 75})
      }
    }
  

  secondPhoto: file(relativePath: { eq: "tory.jpg" }) {
    childImageSharp {
      gatsbyImageData(
          quality: 60, 
          webpOptions: {quality: 75})
      }
    }
  

  img:  file(relativePath: { eq: "PageHeaders/lokalizacja.jpg" }) {
      childImageSharp {
        gatsbyImageData(
            width: 1200, 
            quality: 60, 
            webpOptions: {quality: 75})
        }
      }
}
`
);

const backgroundImage = getImage(img);
const firstImage = getImage(firstPhoto);
const secondImage = getImage(secondPhoto);


  return (
    <Layout>
            <SEO title="Kopalnia Gnejsu - lokalizacja" />
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
      <Title title="lokalizacja" subtitle="sprawdź jak do nas trafić" />
      <LocationContentWrapper>
      <LocationContent>
        <LocationContentBox>
        <div><p><strong>Kopalnia Pomianów-Doboszowice</strong> znajduje się bezpośrednio przy drodze wojewódzkiej 382 łączącej Ząbkowice Śląskie z Paczkowem, na granicy województwa dolnośląskiego i opolskiego. <strong>Wyrobisko</strong> Doboszowice znajduje się przy stacji kolejowej Doboszowice. </p></div>
        <LocationImage image={firstImage} />
        </LocationContentBox>
        <MapComponent />
      </LocationContent>
      </LocationContentWrapper>
      </Section>

    </Layout>
  )
}

export default LocationPage

const LocationImage = styled(GatsbyImage)`
  order: 1;
  width: 80%;
  margin: auto;


  @media (min-width: ${({ theme }) => theme.device.m}) {
  width: 400px;
  order: inherit;
}

`

const LocationContentWrapper = styled(ContentWrapper)`
  h3 {
    font-size: ${({ theme }) => theme.colors.transportH3FS};
    color: ${({ theme }) => theme.colors.transportH3};
    line-height: 1.7em;
    text-align: center;
  }
`

const LocationContent = styled.section`

`

const LocationContentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;
  align-items: center;
  background: ${({ theme }) => theme.colors.transportSectionBg};
}

  @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1fr;
  }

  div{
    padding: 10px;
  }

  span{
    font-size: ${({ theme }) => theme.colors.transportSpanFS};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.transportSpan};
  }

  p{
    font-size: ${({ theme }) => theme.colors.transportPFS};
    color: ${({ theme }) => theme.colors.transportP};
    margin-top: 2em;
  }
`
