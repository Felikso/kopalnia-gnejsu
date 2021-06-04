import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../utils"
import { ReactComponent as MobileLogo } from "./kopalnia-gnejsu-logo-svg.svg"

const MobileNavMenu = ({links}) => {
  const [menuOpen, toggleMenuOpen] = useState(false)
  const [background, setBackground] = useState(false)
  const navRef = useRef()

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <MenuBar background={background}>
      <Link to="/">
        <StyledMobileLogo/>
      </Link>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <ul>

          {
            links.map(link => {
              return (
                <li>
                <Link to={link.path} className="nav-link">{link.name}</Link>
                </li>
              )
            })
          }

        </ul>
      </MenuLinks>
    </MenuBar>
  )
}

export default MobileNavMenu

const StyledMobileLogo = styled(MobileLogo)`
  margin-top: 30px;
  margin-left: 30px;
`

const MenuBar = styled.header`
@media (min-width: ${({ theme }) => theme.device.l}) {
    display: none;
  }
/*   height: 3rem; */
  position: fixed;
  width: 100%;
  transition: background 300ms;
  background:  ${({ background, theme }) => (background ? theme.colors.navBg : "transparent")}; 
  border-bottom: "blue";
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  margin-right: 30px;
  margin-top: 30px;
  outline: thin-dotted;
  z-index: 11;

  &:focus{
    outline: none;
  }

  &:active{
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ menuOpen, theme }) => (menuOpen ? theme.colors.burgerOpen : theme.colors.burgerClose)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const MenuLinks = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ theme }) => theme.colors.openedNavBg};
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: 300ms;
  height: ${({ menuOpen }) => (menuOpen ? "350px" : 0)};

  ul {
    width: 100%;
    overflow: hidden;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;

    li {
      list-style: none;

      a {

        width: 100vw;
        text-align: center;

        display: block;
        text-decoration: none;
        padding: 0.5rem 1rem 0.5rem 1rem;
        color: ${({ theme }) => theme.colors.mobileNavLinks};
        font-weight: 700;
        text-transform: capitalize;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    
        &:hover {
          background: ${({ theme }) => theme.colors.mobileNavBg};
          color: ${({ theme }) => theme.colors.mobileNavLinksHover};
          padding: 0.5rem 1rem 0.5rem 1.3rem;
        }
      }

      
    }
  } 
`

const MenuLinksCurtain = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: blue;
  position: absolute;
  z-index: 5;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateY(0)" : "translateY(100%)"};

  ul {
    width: 100%;

    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`


/* const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }

  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};

    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${({ menuOpen, theme }) => (menuOpen ? "152px": 0)};
  overflow: hidden;
  ${styles.transObject({})};
` */
