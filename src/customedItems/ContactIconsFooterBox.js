import React from "react"
import styled from "styled-components"

const ContactIconsFooterBox = ({ children, href, bg, hoverBg, content }) => {

  return (
        <IconFooterBox href={href}>
            {children}
            <h5>{content}</h5>
        </IconFooterBox>
  )
}

export default ContactIconsFooterBox

const IconFooterBox = styled.a`
margin-top: 10px;
      text-decoration: none;
      text-align: center;
      font-size: 28px;
      display: grid;
      grid-gap: 10px;
      color: ${({ theme }) => theme.colors.aboutSectionLink};
      transition: ease 500ms;

      &:hover{
        filter: brightness(150%);
      }

      svg{
        color: ${({ theme }) => theme.colors.aboutSectionIcon};
        margin: auto;

        @media (min-width: ${({ theme }) => theme.device.l}) {
          margin: 0;
        }
      }

      h5 {
        text-decoration: none; 
        position: relative; 
      }   
 
     h5:after {
         position: absolute;
         content: '';
         height: 2px;
         bottom: -4px; 

         margin: 0 auto;
       left: 0;
         right: 0;
       width: 50%;
       background: green;

       -o-transition:.5s;
         -ms-transition:.5s;
         -moz-transition:.5s;
         -webkit-transition:.5s;
         transition:.5s;
     }
    
     h5:hover:after {
       width: 80%;
       background: orange;
     }

      @media (min-width: ${({ theme }) => theme.device.l}) {
        font-size: 28px;
        text-align: start;
        display: flex;
        align-items: baseline;
        h5{
          font-size: 10px;
        }
      }
`



