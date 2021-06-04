import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import logo from "./kopalnia-gnejsu-logo.png"
import styled from "styled-components"
import FullLogo from "../CustomedSiteComponents/FullLogo"

const DesktopNavMenu = ({links}) => {
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
    <StyledHeader background={background}>
      <ul>
        <li>
          <Link to="/">
            <FullLogo background={background}/>
          </Link>
          
        </li>
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
    </StyledHeader>
  )
}

export default DesktopNavMenu

const StyledHeader = styled.header`
  display: none;
  @media (min-width: ${({ theme }) => theme.device.l}) {
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    padding: 0.5rem;
    transition: background 300ms;
    background: ${({ background }) => (background ? "rgba(255,255,255,0.8)" : "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%);")};

    ul {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-around;
      margin: 0;

      li {
        list-style: none;
        margin: 0;

        a {
          text-decoration: none;
          color: ${({ background }) => (background ? "black" : "white")};
          transition: color 300ms;

          :hover {
            color: ${({ theme }) => theme.colors.hoverLinks};
          }
        }
      }
    }
  }
`