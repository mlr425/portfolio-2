import React from 'react'

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import {GoLocation} from 'react-icons/go'
import MyLinks from '../components/MyLinks'

//if you switch img, reset padding for title
export default function Hero() {
    const query = graphql`
    {
      file(relativePath: {eq: "seattle5.jpg"}) {
        childImageSharp {
          fluid(quality: 100, jpegQuality: 100,maxWidth:5000) {
            ...GatsbyImageSharpFluid
            
          }
        }
      }
    }
    `
    //fluid(quality: 100, jpegQuality: 100,maxWidth:4000,maxHeight:1500)
    // ...GatsbyImageSharpFluidLimitPresentationSize
    // const data = useStaticQuery(query)
    const {
        file:{
          childImageSharp:{fluid},
        },
      } = useStaticQuery(query)

    return (
        <div className="hero">
          <BackgroundImage fluid={fluid} className="hero-img">
            <div className="hero-center">
              <div className="hero-main">
                <div className="hero-job-info">
                  <h1 className="hero-job-title">Software Engineer</h1>
                </div>
                <div className="hero-location-info">
                  <h3> <GoLocation/> Seattle Metropolitan Area</h3>
                </div>
              </div>
              <div className="links-test">
                <MyLinks></MyLinks>
              </div>
                

            </div>
          </BackgroundImage>
        </div>
    )
}
