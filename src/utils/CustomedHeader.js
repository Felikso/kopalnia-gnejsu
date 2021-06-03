import React from "react"
/* import image from "../images/bcg/homeBcg.jpeg" */
import styled from "styled-components"
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import BgImgBridge from './BgImgBridge'
import BgImg from './BgImg'

export function CustomedHeader({ backgroundImage, afterOpacity, image, headerBg, children, bgImage, HeroHeight, HeroWidthMedia, HeroHeightMedia  }) {
  return (
    <SimplyHeader 
          css={`
          background: ${headerBg};
          `}
          >
          <BgImg
                backgroundImage={backgroundImage}
                headerBg={headerBg}
                afterOpacity={afterOpacity}
                HeroHeight={HeroHeight}
                HeroWidthMedia={HeroWidthMedia}
                HeroHeightMedia={HeroHeightMedia}
>
          </BgImg>
        {children}
    </SimplyHeader>
  )
}

export function PageHeader({ 
  image, 
  headerBg, 
  children, 
  bgImage, 
  HeroHeight, 
  HeroWidthMedia, 
  HeroHeightMedia,
  bgHeight,
  afterOpacity  }) {
  return (
    <CustomHeader 
          css={`
          background: ${headerBg};
          `}
          >
          <BgImgBridge
        bgImage={bgImage}
        bgHeight={bgHeight}
        afterOpacity={afterOpacity}
        css={`
        height: ${HeroHeight};
        @media screen and (max-width: 768px) {
            height: ${HeroWidthMedia}; 
          } 
          @media screen and (max-height: 500px) {
            height: ${HeroHeightMedia}; 
        }
          `}>
          </BgImgBridge>
        {children}
    </CustomHeader>
  )
}

const SimplyHeader = styled.header`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

//this component inherits all of the styles from the styled component passed in, other than the changed contained
const CustomHeader = styled(SimplyHeader)`
  min-height: 60vh;
`
//setting up default prop, in case image (or something else) is not passed in
/* CustomedHeader.defaultProps = {
  image: image,
}
CustomHeader.defaultProps = {
  image: image,
}
 */