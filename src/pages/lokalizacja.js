import React from "react"
import { graphql, Link } from "gatsby"

import {  GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from "../components/Layout/Layout"

import styled from "styled-components"

import { useDestinations } from '../hooks';


const LocationPage = ({ data }) => {

  const { destinations } = useDestinations();
  console.log('destinations', destinations);
  return (
    <Layout>
      <h1>lokalizacja</h1>
{/*       <MapUl>
  { destinations.map(destination => {
    const { id, name } = destination;
    return <li key={id}>{ name }</li>
  })}
</MapUl> */}
    </Layout>
  )
}

export default LocationPage

const MapUl = styled.ul`

  list-style: none;
  padding: 0;
  margin: 1.2em 0;
`
