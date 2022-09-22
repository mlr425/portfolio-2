import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import {VscDebugBreakpointData,VscSourceControl} from 'react-icons/vsc'
import {GrResources} from 'react-icons/gr'
import Image from '../components/ImageProvider'

//was thinking about using headless cms (like sanity.io) to host all the data
//but decided against it bc the scope of the project is small
//might refactor it eventually to add it 
//would get rid of a lot of html -> or could put into a component 
//just doing small updates for now. will remake portfolio 

// const query = graphql`
//     {
//       file(relativePath: {eq: "abc.jpg"}) {
//         childImageSharp {
//             fixed (height:200,width:300){
//             ...GatsbyImageSharpFixed
            
//           }
//         }
//       }
//     }
//     `

export default function AllProjects() {

    // const {
    //     file:{
    //       childImageSharp:{fixed},
    //     },
    //   } = useStaticQuery(query)

      //remember the gatsby image is dictated by parent div size, so on pad mode, let img stretch more
      return (
        <>
            <h2 className="main-project-title"><span>Projects</span></h2>
            <div className="projects-container">
                {/* add links/buttons to see all projects */}
                <div className="project">
                    <div className="col-1">
                        <h3 className="project-name">Web Scraper And Job Title Classification CNN For Indeed</h3>
                        <div className="project-picture">
                        <div className="project-picture-container">
                            <Image fileName="cnnPic.png" style={{ width: '100%' }} alt="" />
                        </div>
                            <div className="project-links">
                                <a className="grey-out"><GrResources></GrResources> Live Preview  </a>
                                <a  className="grey-out"><VscSourceControl></VscSourceControl> View Source</a>
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
                            <h3 className="project-details-title">My Role/Overview </h3>
                            <p className="project-details-text">
                            During my internship at Computing for All, I was a part of the data science team where I worked on two projects: a web scraper and a multi-label text classification convolutional neural network (CNN). The web scraper creates data to be used for the CNN. I wrote a script to scrape 19 attributes from job postings found on Indeed.com, including job title, URL, salary, and so on. The purpose of the second project was to take the user-defined job title, which may contain spelling errors, unique naming’s, and other discrepancies, and classify it into a general job title.
                            </p>
                            <p className="project-details-text">
                            I was able to achieve multi-label text classification by using a CNN with 151 output classes associated with technical job titles. The model predictions are next sent to a lookup list for further label simplification, where they are filtered into one of 13 categories. The CNN project achieved a test accuracy of over 80%, confirming the usefulness of the model for classifying Indeed technical job titles. 
                            </p>
                            <h3 className="project-details-title">Project Difficulties </h3>
                            <p className="project-details-text">Both projects were challenging because I had no prior experience working with convolutional neural networks or developing web scrapers.</p>
                            <h3 className="project-details-title">My Solution </h3>
                            <p className="project-details-text">I watched a lot of YouTube videos and read articles about CNNs. </p>
                            <h3 className="project-details-title">What I Would do Differently </h3>
                            <ul className="all-projects-ul">
                                <li>
                                    <div className="project-details-notable-feats">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Incorporate hyperparameter tuning</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-details-notable-feats">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Test a larger global vector for word representation (gloVe) </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-details-notable-feats">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Handle the output classes differently to be more general </span>
                                    </div>
                                </li>
                                
                            </ul>
                            <h3 className="project-details-title">Notable Features </h3>
                            <ul className="all-projects-ul">
                                <li>
                                    <div className="project-details-notable-feats">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Scrapes a page from Indeed in ~1.6 seconds </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-details-notable-feats">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Takes user-defined job titles and classifies them into general job titles</span>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="project">
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
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>ReactJS</span>
                                    </div>
                                </li>
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
                            <h3 className="project-details-title">Overview </h3>
                            <p className="project-details-text">This is the second iteration of my portfolio; its purpose is to provide an area where you can find my previous projects and information about me.</p>
                            <h3 className="project-details-title">Project Difficulties </h3>
                            <p className="project-details-text">
                                <ul className="all-projects-ul">
                                    <li>
                                        <div className="project-details-notable-feats">
                                        <VscDebugBreakpointData></VscDebugBreakpointData> <span>First time using GatsbyJS</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-details-notable-feats">
                                        <VscDebugBreakpointData></VscDebugBreakpointData> <span>Planning how I wanted my pages to be/placement</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-details-notable-feats">
                                        <VscDebugBreakpointData></VscDebugBreakpointData> <span>Color theme</span>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </p>
                            <h3 className="project-details-title">My Solution </h3>
                            <p className="project-details-text">
                            To solve the Gatsby problems, I watched videos and read the documentation on parts I was stuck on.
                            </p>
                            <p className="project-details-text">
                                To iron out the placement and color theme, I took inspiration from other websites I’ve seen in the past and used Figma to create rough layout mockups.
                            </p>
                            <h3 className="project-details-title">What I Would do Differently </h3>
                            <p className="project-details-text">
                                Plan the full website with Figma before starting.
                            </p>
                            
                        </div>
                    </div>
                </div>

                {/* 2022 update */}
                <div className="project">
                    <div className="col-1">
                        <h3 className="project-name">Blue Hill Forums</h3>
                        <div className="project-picture">
                        <div className="project-picture-container">
                            <Image fileName="bhf.jpg" style={{ width: '100%' }} alt="" />
                        </div>
                            
                            <div className="project-links">
                                <a href="https://curious-sunshine-bb18a5.netlify.app/posts" target="_blank"><GrResources></GrResources> Live Preview  </a>
                                <a href="https://github.com/mlr425/blue-hill-forums" target="_blank"><VscSourceControl></VscSourceControl> View Source</a>
                            </div>
                        </div>
                        <div className="project-tech"> 
                            <h4>Technologies Used</h4>
                            <ul className="project-tech-list">
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>ReactJS</span>
                                    </div>
                                </li>
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>MongoDB</span>
                                    </div>
                                </li>
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>NodeJS</span>
                                    </div>
                                </li>
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>ExpressJS</span>
                                    </div>
                                </li>
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Material UI</span>
                                    </div>
                                </li>
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Redux</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="project-details">
                            <h3 className="project-details-title">Overview </h3>
                            <p className="project-details-text">
                                •	Developed a full stack social media application in React for users to create posts, comment, like, share, and upload images<br/>
                                •	Designed the frontend with Material UI in React with desktop and mobile responsiveness in mind<br/>
                                •	Created a RESTful API backend from the ground up using Node.js and Express to handle user accounts, comments, and posts with storage in MongoDB<br/>
                                •	Integrated authentication with support for local and Google OAuth sign-in for users to create their profiles<br/>
                                •	Deployed the application on Heroku and used Netlify's CI/CD pipeline to ensure production application deployed without issue<br/>
                            </p>
                            <h3 className="project-details-title">Project Difficulties </h3>
                            <p className="project-details-text">
                                <ul className="all-projects-ul">
                                    <li>
                                        <div className="project-details-notable-feats">
                                        <VscDebugBreakpointData></VscDebugBreakpointData> <span>Using Redux for the first time</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-details-notable-feats">
                                        <VscDebugBreakpointData></VscDebugBreakpointData><span>Setting up local auth and Google OAuth 2.0 for the first time</span>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <div className="project-details-notable-feats">
                                        <VscDebugBreakpointData></VscDebugBreakpointData> <span> </span>
                                        </div>
                                    </li> */}
                                    
                                </ul>
                            </p>
                            <h3 className="project-details-title">My Solution </h3>
                            <p className="project-details-text">
                                Watching Youtube videos, reading documentation, and looking for examples
                            </p>
                            <h3 className="project-details-title">What I Would do Differently </h3>
                            <p className="project-details-text">
                                I jumped into the project with the plan to just display posts anonymously but then quickly decided on adding a lot of new features like auth, user profiles, likes, etc. I should have planned out what features I really want to see so I can have a defined final application. Right now, I feel like this is a cool project because I can add a lot of features like user profile pictures, a leaderboard for likes, video posts, adding comment chains, and more. 
                            </p>
                            
                        </div>
                    </div>
                </div>
                {/* end */}

                <div className="project">
                    <div className="col-1">
                        <h3 className="project-name">Shopify Buy SDK Practice Website</h3>
                        <div className="project-picture">
                        <div className="project-picture-container">
                            <Image fileName="kanyeklothes.png" style={{ width: '100%' }} alt="" />
                        </div>
                            
                            <div className="project-links">
                                <a href="https://dreamy-goldberg-09635e.netlify.app/" target="_blank"><GrResources></GrResources> Live Preview  </a>
                                <a href="https://github.com/mlr425/shopify-react-practice" target="_blank"><VscSourceControl></VscSourceControl> View Source</a>
                            </div>
                        </div>
                        <div className="project-tech"> 
                            <h4>Technologies Used</h4>
                            <ul className="project-tech-list">
                                
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>ReactJS</span>
                                    </div>
                                </li><li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>SemanticUI</span>
                                    </div>
                                </li><li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Shopify Buy SDK</span>
                                    </div>
                                </li>
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>CSS3</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="project-details">
                            <h3 className="project-details-title">Overview </h3>
                            <p className="project-details-text">This project was aimed at learning about the Shopify Buy SDK, I fetch the product photos from an example storefront and present them to the page. </p>
                            <h3 className="project-details-title">Project Difficulties </h3>
                            <p className="project-details-text">
                                In this project, I experimented with using extra libraries on top of React like Semantic UI and two different image carousels (react-responsive-carousel and react-elastic-carousel). Learning how to use Semantic UI’s features and special things about it was a little bit of a learning curve. 
                            </p>
                            <h3 className="project-details-title">My Solution </h3>
                            <p className="project-details-text"> 
                                Read the documentation for Semantic UI and watched videos 
                            </p>
                            <p className="project-details-text">
                                I used the responsive carousel because it looked better out of the box and the whole reason, I was using premade components is to speed up development of the site.

                            </p>
                            <h3 className="project-details-title">What I Would do Differently </h3>
                            <p className="project-details-text">I would have experimented with a different library (Atomize, because I like the style) and used GatsbyJS because of its image handling.</p>
                            <h3 className="project-details-title">Notable Features </h3>
                            <ul className="all-projects-ul">
                                <li>
                                    <div className="project-details-notable-feats">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Search bar for products</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-details-notable-feats">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Cart system</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-details-notable-feats">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>Image carousel</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="col-1">
                        <h3 className="project-name">Fan Haircut Website</h3>
                        <div className="project-picture">
                        <div className="project-picture-container">
                            <Image fileName="fancycuts.png" style={{ width: '100%' }} alt="" />
                        </div>
                            
                            <div className="project-links">
                                <a href="https://admiring-tereshkova-9b2cc6.netlify.app/" target="_blank"><GrResources></GrResources> Live Preview  </a>
                                <a href="https://github.com/mlr425/haircutPractice1" target="_blank"><VscSourceControl></VscSourceControl> View Source</a>
                            </div>
                        </div>
                        <div className="project-tech"> 
                            <h4>Technologies Used</h4>
                            <ul className="project-tech-list">
                                <li> 
                                    <div className="project-tech-center">
                                    <VscDebugBreakpointData></VscDebugBreakpointData> <span>ReactJS</span>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="project-details">
                            <h3 className="project-details-title">Overview </h3>
                            <p className="project-details-text">This is one of the first websites I made and the first project I incorporated ReactJS in. I made a simple fan page for a local haircut shop. Only the index page has content, the other pages are filler. </p>
                            <h3 className="project-details-title">Project Difficulties </h3>
                            <p className="project-details-text">
                                <ul className="all-projects-ul">
                                    <li>
                                        <div className="project-details-notable-feats">
                                        <VscDebugBreakpointData></VscDebugBreakpointData> <span>Picking a color theme</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-details-notable-feats">
                                        <VscDebugBreakpointData></VscDebugBreakpointData> <span>Image quality</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-details-notable-feats">
                                        <VscDebugBreakpointData></VscDebugBreakpointData> <span>Overall design</span>
                                        </div>
                                    </li>
                                </ul>
                            </p>
                            <h3 className="project-details-title">What I learned moving forward </h3>
                            <p className="project-details-text">Through watching Youtube videos, reading articles, and so on, I practiced building websites and during the process I learned designs (that I applied in the future) and useful websites that provide places to find high quality free images, icons, and fonts.
                            </p>
                            <h3 className="project-details-title">What I Would do Differently </h3>
                            <p className="project-details-text">If I were to redo the site today, I would take it as an opportunity to try out different things, I would use GatsbyJS because we'll be loading example images of hair styles and use some library with prebuilt and styled components for quick development.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
