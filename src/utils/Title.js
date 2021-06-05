import React from "react"
import { styles } from "../utils"
import styled from "styled-components"

export function Title({ title, subtitle }) {
  return (
    <TitleWrapper>
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}

Title.defaultProps = {
  // subtitle: "subtitle",
  title: "title",
}

const TitleWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  .subtitle {
    font-family: ${({ theme }) => theme.textStyle.textFamily};
    font-style: italic;
    letter-spacing: ${({ theme }) => theme.textStyle.letterSpacing};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.fourthColor};
  }

  .title {
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    text-transform: uppercase;
  }

  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.mainOrange}; 
    margin: 0.5rem auto;
  }
`
