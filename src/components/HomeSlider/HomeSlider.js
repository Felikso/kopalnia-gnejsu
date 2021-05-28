import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import BackgroundSlider from 'gatsby-image-background-slider'

import BackgroundCustomedSlider from './customed-slider-show'

const HomeSlider = ({ children }) => (
  <>
    <main>{children}</main>
    <BackgroundCustomedSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(filter: {sourceInstanceName: {eq: "backgrounds"}}) {
            nodes {
              relativePath
              childImageSharp {
                gatsbyImageData
              }
            }
          }
      }
      `)}
    />
  </>
)  

export default HomeSlider