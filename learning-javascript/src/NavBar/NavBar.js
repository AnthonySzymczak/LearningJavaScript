import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  //function to show on mobile
  const showButton = () => {
    if (window.innerwidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/" className="navbar-logo">
            <i class="fas fa-cocktail"/><i class="fas fa-hat-wizard"/>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i
              className={
                click ? "fas fa-angle-double-down" : "fas fa-bars"
              }
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Welcome
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Intro"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Intro
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/IntroAlgorithms"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Intro Algorithms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/IntroAlgorithmsCont"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Intro Algorithms 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/IntroAlgorithmsComplex"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Complex Algorithms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/LearningReact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Learn React
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/DeepDive"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Deeper Dive
              </Link>
            </li>
          </ul>
         {button && <Button buttonStyle="btn--outline">Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;