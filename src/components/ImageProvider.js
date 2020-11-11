import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

//https://stackoverflow.com/questions/56437205/how-do-i-query-multiple-images-with-gatsby-image
const Image = ({ fileName, alt, style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName).fluid;

  return (
    <figure>
      <Img fluid={fluid} alt={alt} style={style} />
    </figure>
  )
}

export default Image;