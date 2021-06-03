import React from "react"

import styled from "styled-components"

import BgImgBridge from './BgImgBridge'

export function HomeHeader({ image, headerBg, children, bgImage, HeroHeight, HeroWidthMedia, HeroHeightMedia  }) {
  return (
    <IndexHeader 
          css={`
          background: ${headerBg};
          `}
          >
          <BgImgBridge
        bgImage={bgImage}
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
    </IndexHeader>
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
    <DefaultHeader 
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
    </DefaultHeader>
  )
}


/* export function PageHeader({ image, children }) {
  return <DefaultHeader image={image}>{children}</DefaultHeader>
}
 */
/* const IndexHeader = styled.header`
  min-height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.image}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
` */

const IndexHeader = styled.header`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

//this component inherits all of the styles from the styled component passed in, other than the changed contained
const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`
//setting up default prop, in case image (or something else) is not passed in
/* HomeHeader.defaultProps = {
  image: image,
}
DefaultHeader.defaultProps = {
  image: image,
}
 */