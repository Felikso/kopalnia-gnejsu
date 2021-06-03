import styled from "styled-components"
import { Link } from 'gatsby'
import { styles } from "../utils"

// These are the default styles I would like to use for the buttons.  If I want to change a few things for a specfici context (for example position), I can do that directly onto the component as a prop, as in use in-line styling on the <Component />
const BannerButton = styled.button`
  display: block;
  color: ${({ theme }) => theme.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
  ${styles.border({ color: `${({ theme }) => theme.colors.mainWhite};` })};
  margin-bottom: 1rem;
  ${styles.transition({})};

  &:hover {
    background: ${({ theme }) => theme.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};

  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${({ theme }) => theme.colors.fourthColor};
  }
`

const MenuButton = styled(SectionButton)`
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
`

const LinkButton = styled(Link)`

display: block;
color: ${styles.colors.linkButtonBorder};
${styles.border({ color: `${styles.colors.linkButtonBorder}` })};
background: transparent;
padding: 0.5rem 1rem;
text-align: center;
text-transform: uppercase;
font-size: 1.1rem;
letter-spacing: 0.2rem;
font-weight: 700;
${styles.border({ color: `${styles.colors.linkButtonBorder}` })};
margin-bottom: 1rem;
${styles.transition({})};
/* position: absolute;
top: 0;
left: 0; */
text-decoration: none;

&:hover {
  background: ${styles.colors.linkButtonBg};
  color: ${styles.colors.linkButtonBorder};
  cursor: pointer;
}
`

const HeroLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.heroBtnsLink};
    font-weight: bold;
    font-size: 1.7em;
    position: relative;
    padding: 14px;
    margin: 1em;
    background: transparent;
    transition: all 0.3s ease;

    &:before, &:after{
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      transition: all 0.3s ease;
    }
    &:before{
      top: -2.5%;
      left: -1%;
      border-top: 4px solid ${({ theme }) => theme.colors.heroBtnsLink};
      border-left: 4px solid ${({ theme }) => theme.colors.heroBtnsLink};
    }
    &:after{
      bottom: -2.5%;
      right: -1%;
      border-bottom: 4px solid ${({ theme }) => theme.colors.heroBtnsLink};
      border-right: 4px solid ${({ theme }) => theme.colors.heroBtnsLink};
    }
    &:hover:before, &:hover:after{
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;
    }

    &:hover{
      background: ${({ theme }) => theme.colors.heroBtnsBg};
    }
    
`


export { BannerButton, SectionButton, MenuButton, LinkButton, HeroLink }
