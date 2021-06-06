import styled from "styled-components"

export const ContentWrapper = styled.section`
width: 90%;
margin: 2rem auto;

.text {
  line-height: 2rem;
  color: black;
  word-spacing: 0.2rem;
}

h3 {
  font-size: ${({ theme }) => theme.colors.sectionContentWrapperH3FSsmall};
  color: ${({ pColor, theme }) => pColor ? pColor : theme.colors.sectionContentWrapperH3};
  text-align: center;
  line-height: 2em;
}

@media (min-width: ${({ theme }) => theme.device.m}) {

  h3 {
    font-size: ${({ theme }) => theme.colors.sectionContentWrapperH3FS};
  }
}
`