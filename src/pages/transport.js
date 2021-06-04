import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/Seo"
import styled from "styled-components"

import { styles, PageHeader, Banner, Title, Section, ContentWrapper, CustomedHeader } from "../utils"

import ButtonBestia from "../customedItems/ButtonBestia"
const TransportPage = ({ data }) => {

  const { img, firstPhoto, secondPhoto } = useStaticQuery(
    graphql`
query {
  firstPhoto: file(relativePath: { eq: "opona.jpg" }) {
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
);

const backgroundImage = getImage(img);
const firstImage = getImage(firstPhoto);
const secondImage = getImage(secondPhoto);


  return (
    <Layout>
            <SEO title="Kopalnia Gnejsu - transport" />
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
      <Title title="transport" subtitle="dowiedz się więcej na temat transportu" />
      <TransportContentWrapper>
      <h3>Dajemy Państwu możliwość dostarczenia naszego kruszywa w dwojaki sposób:</h3>

      <TransportContent>
        <TransportContentBox>
        <div><span>Transportem samochodowym</span> <p>około 3000 ton na 24h</p></div>
        <TransportImage image={firstImage} />
        </TransportContentBox>

        <TransportContentBox>
        <TransportImage image={secondImage} />
        <div><span>Transportem kolejowym</span> <p>Z własnej bocznicy ze stacji Doboszowice, bezpośrednio połączeniej z liniami kolejowymi w kierunku Wrocławia, Opola i Śląska</p><h6>Oferujemy dostawy kruszyw transportem kolejowym: węglarka, dumpcar, hoopfer-dozator</h6></div>
        
        </TransportContentBox>

      </TransportContent>
      </TransportContentWrapper>
      </Section>

    </Layout>
  )
}

export default TransportPage

const TransportImage = styled(GatsbyImage)`
  order: 1;
  width: 80%;
  margin: auto;


  @media (min-width: ${({ theme }) => theme.device.m}) {
  width: 400px;
  order: inherit;
}

`

const TransportContentWrapper = styled(ContentWrapper)`
  h3 {
    font-size: ${({ theme }) => theme.colors.transportH3FS};
    color: ${({ theme }) => theme.colors.transportH3};
    line-height: 1.7em;
    text-align: center;
  }
`

const TransportContent = styled.section`

`

const TransportContentBox = styled.div`
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
    font-weight: bold;
    color: ${({ theme }) => theme.colors.transportP};
    margin-top: 2em;
  }
`
