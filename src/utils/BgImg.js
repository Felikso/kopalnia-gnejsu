import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage, convertToBgImage } from 'gbimage-bridge';

import styled from 'styled-components'

const BgImg = ({backgroundImage, children, HeroHeight, HeroWidthMedia, HeroHeightMedia }) => {


  return (
          <StyledBgImg 
          image={backgroundImage}
          css={`
          height: ${HeroHeight};
          @media screen and (max-width: 768px) {
              height: ${HeroWidthMedia}; 
            } 
            @media screen and (max-height: 500px) {
              height: ${HeroHeightMedia}; 
          }
            `}
            >
                {children}
          </StyledBgImg>
  );
};

export default BgImg

const StyledBgImg = styled(BgImage)`
    width: 100%;
`