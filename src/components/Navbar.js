import React, {useState} from "react";
// import { FaAlignRight } from 'react-icons/fa';
import {Link} from 'gatsby'
import {FaBars, FaTimes } from 'react-icons/fa'



export default function Navbar() {

  const [click,setClick] = useState(false);
  const closeMobileMenu = () => {setClick(false)};
  const handleClick = () => {setClick(!click)};

    return (
      <div className="navbar">
      <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu} > 
              Matthew L. Rodriguez
          </Link>
          <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars/>}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                      Home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                      About
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                      Projects
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                      Contact
                  </Link>
              </li>
          </ul>

      </div>
  </div>
      )
}
