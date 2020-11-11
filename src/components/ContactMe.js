import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'


const col1BG = graphql`
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


    

export default function ContactMe() {

    const {
        file:{
          childImageSharp:{fluid},
        },
      } = useStaticQuery(col1BG)
    
    
   

    return (
        <BackgroundImage fluid={fluid} className="contact-me-pg-bg">
            <div className="contact-page">
                <article className="contact-form">
                    <h3>Get In Touch</h3>
                    <form action="https://formspree.io/f/xeqpknvn" method="POST">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" className="form-control"></input>
                            <input type="email" name="email" placeholder="Email" className="form-control"></input>
                            <textarea name="message" placeholder="Message" rows="5" className="form-control" ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </article>
            </div>
        </BackgroundImage>
    )
}
