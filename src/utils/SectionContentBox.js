import React from "react"
import { styles } from "../utils"
import styled from "styled-components"

export function SectionContentBox({ children, bg, fontColor, spanColor }) {
  return (
    <CustomedSection
    bg={bg}
    fontColor={fontColor}
    spanColor={spanColor}
    >
        {children}
    </CustomedSection>
  )
}



const CustomedSection = styled.div`
color: ${({ fontColor, theme }) => fontColor ? fontColor : theme.colors.sectionContentBoxColor};
background: ${({ bg, theme }) => bg ? bg : theme.colors.sectionContentBoxBg};
margin-bottom: 10px;
padding: 10px 20px;
position: relative;

}

  li{

    font-style: italic;
    font-size: ${({ theme }) => theme.colors.sectionContentBoxLiFSsmall};
  }

  span{
    font-size: ${({ theme }) => theme.colors.sectionContentBoxSpanFSsmall};
    font-weight: bold;
    color: ${({ spanColor, theme }) => spanColor ? spanColor : theme.colors.sectionContentBoxSpan};
  }

  p{
    font-size: ${({ theme }) => theme.colors.sectionContentBoxPFSsmall};
    color: ${({ pColor, theme }) => pColor ? pColor : theme.colors.sectionContentBoxP};
    margin-top: 2em;
  }

  h6{
    line-height: 2em;
    text-align: center;
  }

  h4{
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.device.m}) {
    li{

      font-style: italic;
      font-size: ${({ theme }) => theme.colors.sectionContentBoxLiFS};
    }
  
    span{
      font-size: ${({ theme }) => theme.colors.sectionContentBoxSpanFS};
      font-weight: bold;
      color: ${({ spanColor, theme }) => spanColor ? spanColor : theme.colors.sectionContentBoxSpan};
    }
  
    p{
      font-size: ${({ theme }) => theme.colors.sectionContentBoxPFS};
      color: ${({ pColor, theme }) => pColor ? pColor : theme.colors.sectionContentBoxP};
      margin-top: 2em;
    }
  
    h6{
      line-height: 2em;
      text-align: center;
    }
    
  }
    
`
