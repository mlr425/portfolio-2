import React from 'react'
import Img from "gatsby-image"
// import { graphql, useStaticQuery } from "gatsby"
import {VscDebugBreakpointData,VscSourceControl} from 'react-icons/vsc'
import {GrResources} from 'react-icons/gr'
import {Link} from 'gatsby'
import {navigate} from 'gatsby'; 
import Image from '../components/ImageProvider'

export default function Projects() {
    // const query = graphql`
    // {
    //   file(relativePath: {eq: "abc.jpg"}) {
    //     childImageSharp {
    //         fixed (height:200,width:300){
    //         ...GatsbyImageSharpFixed
            
    //       }
    //     }
    //   }
    // }
    // `

    // const {
    //     file:{
    //       childImageSharp:{fixed},
    //     },
    //   } = useStaticQuery(query)

    //   function editPage(index) {
    //     navigate('/projects'); //navigate to edit page
    //   }

      return (
        <>
            <h2 className="main-project-title"><span>Featured Projects</span></h2>
            <div className="projects-container">
                {/* add links/buttons to see all projects */}
                <div className="project bgcolor1">
                    <div className="col-1">
                        <h3 className="project-name">Web Scraper and Job Title Classification CNN for Indeed</h3>
                        <div className="project-picture">
                        <div className="project-picture-container">
                            <Image fileName="cnnPic.png" style={{ width: '100%' }} alt="" />
                        </div>
                            <div className="project-links">
                                <a className="grey-out"><GrResources></GrResources> Live Preview  </a>
                                <a className="grey-out"><VscSourceControl></VscSourceControl> View Source</a>
                            </div>
                        </div>
                        <div className="project-tech"> 
                            <h4>Technologies Used</h4>
                            <ul className="project-tech-list">
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Python</span>
                                    </div>
                                </li>
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Google Colab</span>
                                    </div>
                                </li><li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Keras</span>
                                    </div>
                                </li><li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>BeautifulSoup4</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="project-details">
                            <h3 className="project-details-title">Project Overview </h3>
                            <p className="project-details-text">
                            During my internship at Computing for All, I was a part of the data science team, and I worked on two projects: a web scraper and a multi-label text classification convolutional neural network (CNN).
                            </p>
                            <p className="project-details-text">
                            The web scraper involved creating data to be used for the CNN. I wrote a script to scrape 19 attributes from job postings found on Indeed.com, including job title, URL, salary, and so on. The purpose of the second project was to take the user-defined job title, which may contain spelling errors, unique naming’s, and other discrepancies, and classify it into a general job title.
                            </p>
                            
                        </div>
                        <button className="more-projects-btn medbtn" onClick={() => {navigate('/projects')}} >More Details</button>
                    </div>
                </div>
                
                <div className="project bgcolor2">
                    <div className="col-1">
                        <h3 className="project-name">My Portfolio</h3>
                        <div className="project-picture">
                        <div className="project-picture-container">
                            <Image fileName="project1.jpg" style={{ width: '100%' }} alt="" />
                        </div>
                            <div className="project-links">
                                <a className="grey-out"><GrResources></GrResources> Live Preview  </a>
                                <a href="https://github.com/mlr425/portfolio-2" target="_blank"><VscSourceControl></VscSourceControl> View Source</a>
                            </div>
                        </div>
                        <div className="project-tech"> 
                            <h4>Technologies Used</h4>
                            <ul className="project-tech-list">
                                
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>GatsbyJS</span>
                                    </div>
                                </li><li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>GraphQL</span>
                                    </div>
                                </li><li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>CSS3</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="project-details">
                            <h3 className="project-details-title">Project Overview </h3>
                            <p className="project-details-text">
                                This is my portfolio; its purpose is to provide an area where you can find my previous projects and information about me.
                            </p>
                            
                        </div>
                        <button className="more-projects-btn medbtn" onClick={() => {navigate('/projects')}} >More Details</button>
                    </div>
                </div>
                <button className="more-projects-btn medbtn" onClick={() => {navigate('/projects')}}>More Projects</button>
            </div>
        </>
    )
}
