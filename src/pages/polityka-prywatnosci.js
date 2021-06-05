import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/Seo"
import styled from "styled-components"

import { styles, PageHeader, Banner, Title, Section, ContentWrapper, CustomedHeader, SectionContentBox } from "../utils"

import ButtonBestia from "../customedItems/ButtonBestia"
const CookiesPage = ({ data }) => {

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
  

  img:  file(relativePath: { eq: "PageHeaders/cookies2.jpg" }) {
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
            <SEO title="Kopalnia Gnejsu - polityka prywatności" />
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
      <Title title="polityka prywatności" />
      <CookiesContentWrapper>
          <SectionContentBox>
          <h3>Stosowane definicje:</h3>

<li>Ciasteczka - pliki pobierane oraz przechowywane na urządzeniu Użytkownika odwiedzającego stronę, wiążące się z informacjami dotyczącymi sposobu korzystania z odwiedzanej witryny internetowej.</li>
<li>Użytkownik - osoba odwiedzająca stronę.</li>
<li>Administrator - osoba odpowiedzialna za bezpieczne przechowywanie danych osobowych na temat Użytkowników witryny internetowej, zajmująca się ich analizą oraz przetwarzaniem zgodnym z wcześniej wdrożonymi postanowieniami.</li>
<li>Strona – witryna internetowa odwiedzana przez Użytkownika.</li>

          <h3>Postanowienia ogólne:</h3>

          <li>Strona wykorzystuje Ciasteczka do celów statystycznych oraz marketingowych. Zastosowanie to umożliwia spersonalizowanie oferty w celu uzyskania jak najlepszego zadowolenia potencjalnego Odbiorcy produktu/usługi.</li>

          <h3>Cele wykorzystania Ciasteczek:</h3>

          <li>Na stronie wdrożone jest narzędzie analityczne Yandex Metrica, umożliwiające badanie rotacji Użytkowników na stronie oraz ich zachowań na poszczególnych podstronach. Wyniki badań umożliwiają Administratorowi oraz osobom postronnym poprawienie wydajności odwiedzanej witryny internetowej oraz dostosowywanie odpowiedniej oferty dla potencjalnego Odbiorcy produktu/usługi.</li>

          <h3>Zgodna na wykorzystanie Ciasteczek:</h3>

          <li>Użytkownik korzystając ze strony bezpośrednio wyraża zgodę na wykorzystanie Ciasteczek wyżej wymienionych celach marketingowych.</li>


          <h3>Postanowienia końcowe:</h3>

          <li>Administrator zastrzega sobie prawo do możliwości wprowadzania zmian w przedstawionej Polityce Ciasteczek, zobowiązując się jednocześnie do bezzwłocznego upublicznienia wdrożonych przekształceń.</li>
          </SectionContentBox>
      </CookiesContentWrapper>
      </Section>

    </Layout>
  )
}

export default CookiesPage

const CookiesImage = styled(GatsbyImage)`
  order: 1;
  width: 80%;
  margin: auto;


  @media (min-width: ${({ theme }) => theme.device.m}) {
  width: 400px;
  order: inherit;
}

`

const CookiesContentWrapper = styled(ContentWrapper)`
  h3 {
    font-size: ${({ theme }) => theme.colors.transportH3FS};
    color: ${({ theme }) => theme.colors.transportH3};
    line-height: 1.7em;
    text-align: center;
  }
`

const CookiesContent = styled.section`

`

const CookiesContentBox = styled.div`
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
