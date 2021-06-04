import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
/* import { ReactComponent as Logo } from './x.svg' */
import { ImFacebook2 } from "@react-icons/all-files/im/ImFacebook2";
import { SiGooglemybusiness } from "@react-icons/all-files/si/SiGooglemybusiness";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";

/* import { BiMailSend } from "@react-icons/all-files/bi/BiMailSend";
import ContactIconsFooterBox from "../../customedItems/ContactIconsFooterBox" */

import FullLogo from "../CustomedSiteComponents/FullLogo"

const Footer = ({siteData}) => {

  const footerIcons = [
    {icon: (<FaPhoneSquareAlt />), title: "telefon kontaktowy", link: "tel:748177015"},
    {icon: (<ImFacebook2 />), title: "facebook", link: "https://www.facebook.com/Kopalnia-Gnejsu-Pomian%C3%B3w-Doboszowice-sp-z-oo-300349376653944/"},
    {icon: (<SiGooglemybusiness />), title: "wizytówka google", link: "https://www.google.com/maps/place/Kopalnia+gnejsu/@50.4992395,16.9664319,15z/data=!4m5!3m4!1s0x0:0x19ce455603782150!8m2!3d50.4992395!4d16.9664319"}
]


  const footerData = [
    {title: "oferta", link: "/oferta"},
    {title: "aranżacje", link: "/galeria"},
    {title: "transport", link: "/transport"},
    {title: "lokalizacja", link: "/lokalizacja"},
]

const footerInfo = [
  {title: "Coockies", link: "/#"},
  {title: "Polityka prywatności", link: "/#"},
  {title: "Coppyright © 2021", link: "/#"},
]


return(
  <>
  <FooterUnderLine></FooterUnderLine>
  <FooterContainer>

          <FooterBox>
                    <FooterLogoBox>
                        
                        <FooterLogo>
                           <FullLogo fontColor="black" subtitleColor="#2f2f2f"/>
                        </FooterLogo>
                  
                    </FooterLogoBox>
        </FooterBox>

{/*         <FooterBox>
        <ContactIconsFooterBox
          href="mailto:lg@ozdobne.kopalniagnejsu.pl"
          content="lg@ozdobne.kopalniagnejsu.pl"
        >
        <BiMailSend />
        </ContactIconsFooterBox>

        <ContactIconsFooterBox
          href="mailto:lg@ozdobne.kopalniagnejsu.pl"
          content="lg@ozdobne.kopalniagnejsu.pl"
        >
        <BiMailSend />
        </ContactIconsFooterBox>

        <ContactIconsFooterBox
          href="mailto:lg@ozdobne.kopalniagnejsu.pl"
          content="lg@ozdobne.kopalniagnejsu.pl"
        >
        <BiMailSend />
        </ContactIconsFooterBox>

        </FooterBox> */}

        <FooterBox>
                    <FooterIconsBox>

                    {footerIcons.map((item, index)=> (
                      <FooterIcon key={index} href={item.link} title={item.title}>
                        {item.icon}
                      </FooterIcon>
                      ))}

                    </FooterIconsBox>

                    <FooterLinksBox>

                    {footerData.map((item, index)=> (
                        <FooterLink 
                          to={item.link} 
                          key={index} >
                            {item.title}
                        </FooterLink>
                      ))}
                    </FooterLinksBox>

                    <FooterInfoBox>
              
                        {footerInfo.map((item, index)=> (
                        <FooterInfo 
                          to={item.link} 
                          key={index} >
                            {item.title}
                        </FooterInfo>
                      ))}
              
                    </FooterInfoBox>
          </FooterBox>

  </FooterContainer>
  </>
)
}

export default Footer

const FooterLogo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.footerLogoIcon};
`

const FooterBox = styled.section`
  text-align: center;
  display: grid;
  grid-gap: .6em;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    padding: .5em 0;
  }
`

const FooterUnderLine = styled.div`
      width: 100%;
      height: 0.2rem;
      background: ${({ theme }) => theme.colors.footerLine}; 
`

const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: repeat( 12, minmax(300px, 1fr) ); */
    align-items: center;
/*     padding: 1em 0; */
    background: ${({ theme }) => theme.colors.footerBg}; 
    /* direction: rtl; //changes columns directions */

    @media (max-width: ${({ theme }) => theme.device.m}) {
      grid-template-columns: 1fr;
    }
`

const FooterIconsBox = styled.div`
  display: flex;
  justify-content: center;
`

const FooterIcon = styled.a`
      color: ${({ theme }) => theme.colors.footerIcon}; 
      font-size: ${({ theme }) => theme.fontSize.footerIcon}; 
      transition: ${({ theme }) => theme.transitions.transDefault}; 
      margin: 10px;

      &:hover{
        color: ${({ theme }) => theme.colors.footerIconHover}; 
         /*  filter: brightness(0.6); */
      }
`

const FooterLinksBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.footerLink}; 
`

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.footerLink}; 
  text-decoration: none;
  margin: 0 10px;
  transition: ${({ theme }) => theme.transitions.transDefault}; 
  &:hover{
    color: ${({ theme }) => theme.colors.footerLinkHover}; 
    /* filter: brightness(6.6); */
  }
`

const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.footerInfo}; 
`

const FooterInfo = styled(Link)`
    color: ${({ theme }) => theme.colors.footerInfo}; 
    text-decoration: none;
    margin: .3em;
    transition: ${({ theme }) => theme.transitions.transDefault}; 
    &:hover{
      color: ${({ theme }) => theme.colors.footerInfoHover};
      /* filter: brightness(0.6); */
    }
`

const FooterLogoBox = styled.div`
    font-size:  ${({ theme }) => theme.fontSize.footerLogoBrandName};

`
const FooterBrandName = styled.div`
    margin-bottom: .7em;
`