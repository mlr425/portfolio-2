import React from 'react'
//css that belongs to mylinks.js is in hero.css

import {SiLeetcode} from 'react-icons/si'
import { FaLinkedin, FaGithub, FaAt, FaRegNewspaper} from 'react-icons/fa'
export default function MyLinks() {
    return (
        <div className="links-main">
                    <ul className="links-container">
                      {/* <li className="hero-social-card">
                        <a className="social-link" href="https://leetcode.com/mlr425/" target="_blank"> 
                          <SiLeetcode className="icons"></SiLeetcode> 
                          <div>LeetCode</div> 
                        </a>
                      </li> */}

                      <li className="hero-social-card">
                        <a className="social-link" href="/" target="_blank"> 
                          <FaGithub className="icons"></FaGithub>
                          <div>Github</div> 
                        </a>
                      </li>

                      <li className="hero-social-card">
                        <a className="social-link" href="/" target="_blank"> 
                          <FaLinkedin className="icons"></FaLinkedin>
                          <div>LinkedIn</div> 
                        </a>
                      </li>

                      <li className="hero-social-card">
                        <a className="social-link" href="/" target="_blank"> 
                          <FaAt className="icons"></FaAt>
                          <div>Email</div> 
                        </a>
                      </li>

                      <li className="hero-social-card">
                        <a className="social-link" href="/" target="_blank"> 
                          <FaRegNewspaper className="icons"></FaRegNewspaper>
                          <div>Resume</div> 
                        </a>
                      </li>

                      
                      
                      
                    </ul>
                </div>
    )
}
