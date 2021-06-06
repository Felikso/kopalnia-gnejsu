import React from "react"
import styled from "styled-components"

export const ButtonBestia = ({ children, color, bg, hoverBg,  }) => {

  return (
    <StyledButtonBestia bg={bg} hoverBg={hoverBg}>
        <div bg={bg}></div><span color={color}>{children}</span>
    </StyledButtonBestia>
  )
}

const StyledButtonBestia = styled.button`
    

&:focus {
	outline: none;
}


&:focus-visible {
	outline: 2px solid #443ffc;
	outline-offset: 3px;
}

	pointer-events: auto;
	cursor: pointer;
	background: ${({ bg }) => (bg ? bg : "#e7e7e7")};
	border: none;
	padding: 1.5rem 3rem;
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	position: relative;
    display: inline-block;
    
    font-family: freight-display-pro, serif;
	font-size: 1.15rem;
	color: ${({ color }) => (color ? color : "#fff")};
	background: none;
	padding: 0;


&::before,
&::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

    div {
	top: 0;
	left: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	background: ${({ bg }) => (bg ? bg : "#e7e7e7")};
	border-radius: 0.85rem;
	overflow: hidden;
	transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
}

&:hover div{
	transform: scale3d(1.2,1.2,1);
}
&::before,
&::after {
	content: '';
	position: absolute;
	background: ${({ hoverBg }) => (hoverBg ? hoverBg : "#000")};
}

div::before,
div::after {
	content: '';
	position: absolute;
	background: ${({ hoverBg }) => (hoverBg ? hoverBg : "#000")};
}

&::before {
	width: 110%;
	height: 0;
	padding-bottom: 110%;
	top: 50%;
	left: 50%;
	border-radius: 50%;
	transform: translate3d(-50%,-50%,0) scale3d(0,0,1);
}

div::before {
	width: 110%;
	height: 0;
	padding-bottom: 110%;
	top: 50%;
	left: 50%;
	border-radius: 50%;
	transform: translate3d(-50%,-50%,0) scale3d(0,0,1);
}

&:hover div::before {
	transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
	transform: translate3d(-50%,-50%,0) scale3d(1,1,1);
}

div::after {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity 0.3s;
}

&::after {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity 0.3s;
}

&:hover div::after {
	opacity: 1;
	transition-duration: 0.01s;
	transition-delay: 0.3s;
}

    span {
	display: block;
	position: relative;
	padding: 10px 20px;
	mix-blend-mode: difference;
}


`
