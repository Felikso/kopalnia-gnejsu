import React from "react"
import styled from "styled-components"

import { styles } from "../utils"

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

export function HomeBanner({ title, subtitle1, subtitle2, motto, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle1.address}</h3>
      <h3 className="subtitle">{subtitle1.phone}</h3>

      {subtitle2 && (
        <>
          <h3 className="subtitle">&</h3>
          <h3 className="subtitle">{subtitle2.address}</h3>
          <h3 className="subtitle">{subtitle2.phone}</h3>
        </>
      )}
            {motto && (
              <>
              <div className="underline" />
                <h4>{motto.excerption1}</h4>
                <h5>{motto.excerption2}</h5>
              </>
      )}
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  z-index: 1;


  .title {
    color: ${({ theme }) => theme.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: ".75rem" })}
  }
  .subtitle {
    color: ${({ theme }) => theme.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.mainOrange}; 
    margin: 0.5rem auto;
  }

  h4 {
    color: ${({ theme }) => theme.colors.mainGrey};
  }

  h5 {
    color: ${({ theme }) => theme.colors.mainGrey};
  }
`

Banner.defaultProps = {
  title: "Default Title",
}
