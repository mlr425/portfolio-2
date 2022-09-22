import React from 'react'
import {VscDebugBreakpointData} from 'react-icons/vsc'
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

//since im using the gatsby bg image on a couple of pages, should have turned it 
// into a component or somethign so i could just wrap n not copy paste each time
//todo refactor
const aboutMeBG = graphql`
    {
      file(relativePath: {eq: "split.jpg"}) {
        childImageSharp {
          fluid(quality: 100, jpegQuality: 100) {
            ...GatsbyImageSharpFluid
            
          }
        }
      }
    }
`

export default function AboutMe() {
    const {
        file:{
          childImageSharp:{fluid},
        },
    } = useStaticQuery(aboutMeBG)

    return (
        <BackgroundImage fluid={fluid} className="about-me-pg-bg">

        <div className="about-me-container">
            <div className="about-me-wrapper">
                <article className="about-me-article col1">
                    <h1 className="about-me-title">About Me</h1>
                    <p  className="about-me-p">My name is Matthew L. Rodriguez. I graduated from the University of Washington, Bothell in March of 2020 with a Bachelor of Science in Computer Science and Software Engineering.</p>
                </article>

                {/* <article className="about-me-article col2">
                    <h1 className="about-me-title">What I'm Working On</h1>
                    <ul className="working-on-list">
                        <li className="list-item"> <VscDebugBreakpointData/> <span>Finish portfolio</span> </li>
                        <li className="list-item"> <VscDebugBreakpointData/> <span>Move project content + pics to headless cms - contentful(?)</span> </li>
                        <li className="list-item"> <VscDebugBreakpointData/> <span>clean up the css for this portfolio</span> </li>
                        <li className="list-item"> <VscDebugBreakpointData/> <span>id like to add a modal/popup for my email on main pg, similar to my links</span> </li>
                        <li className="list-item"> <VscDebugBreakpointData/> <span>find a 3rd party site to host my resume for download</span> </li>
                        <li className="list-item"> <VscDebugBreakpointData/> <span>add comments to code?</span> </li>
                    </ul>
                </article> */}
            </div>
        </div>
        </BackgroundImage>
    )
}
