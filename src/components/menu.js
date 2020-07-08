import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./menu.css"


const StyledNavigation = styled.div`
  margin-top: 0;
  @media screen and (min-width: 1025px) {
    border-top: 1px solid var(--grey-light);
    background: transparent;
    border-bottom: 1px solid var(--grey-light);
  }
//   .header__content-links {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     right: -100%;
//     width: 60%;
//     padding-left: 0;
//     margin-bottom: 0;
//     background: var(--white);
//     z-index: 2;
//     transition: all 200ms linear;
//     padding-top: 4rem;

//     &.menu__items--expanded {
//       right: 0;
//       z-index: 5;
//     }

//     @media screen and (min-width: 1024px) {
//       width: 100%;
//       position: relative;
//       padding-top: 0;
//       right: initial;
//       padding: 0;
//       margin: 0;
//       left: initial;
//       background: transparent;
//       li {
//         display: inline-block;
//       }
//     }
//     .menu__item {
//       display: block;
//       @media screen and (min-width: 1025px) {
//         display: inline-block;
//       }
//     }

//     .menu__item--mobile {
//       display: block;
//       background: transparent;
//       @media screen and (min-width: 1025px) {
//         display: none;
//       }
//     }
//     a {
//       padding: 0.75rem 1.5rem;
//       color: #494949;
//       font-weight: 700;
//       text-decoration: none;
//       display: block;
//       &:hover,
//       &:active {
//         background: var(--grey-light);
//       }
//       @media screen and (min-width: 1025px) {
//         color: var(--grey-dark);
//         padding: 0.75rem 1.5rem;
//         border-top: 3px solid transparent;
//         border-bottom: 3px solid transparent;
//         font-weight: 400;
//         display: block;
//         text-decoration: none;
//         &:hover {
//           border-bottom: 3px solid #494949;
//           background: transparent;
//           color: #494949;
//         }
//         &:focus {
//           text-decoration: underline;
//           background: transparent;
//         }
//       }
//     }
//   }

//   .geader__overlay--visible {
//     background: rgba(0, 0, 0, 0.5);
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 5;
//     transition: all 200ms linear;
//   }
//   .menu__toggle {
//     width: 25px;
//     height: 25px;
//     margin: 3rem 0 0 0;
//     background: var(--white);
//     -webkit-transform: rotate(0deg);
//     -moz-transform: rotate(0deg);
//     -o-transform: rotate(0deg);
//     transform: rotate(0deg);
//     -webkit-transition: 0.5s ease-in-out;
//     -moz-transition: 0.5s ease-in-out;
//     -o-transition: 0.5s ease-in-out;
//     transition: 0.5s ease-in-out;
//     cursor: pointer;
//     display: block;
//     position: absolute;
//     top: 0;
//     z-index: 10;
//     right: 2.5rem;
//     appearance: none;
//     border: none;
//     @media screen and (min-width: 1025px) {
//       display: none;
//     }
//   }

//   .menu__toggle--expanded {
//     top: 1.5rem;
//     right: 1.5rem;
//   }

//   .menu__toggle span {
//     display: block;
//     position: absolute;
//     height: 3px;
//     width: 100%;
//     background: #494949;
//     border-radius: 9px;
//     opacity: 1;
//     left: 0;
//     -webkit-transform: rotate(0deg);
//     -moz-transform: rotate(0deg);
//     -o-transform: rotate(0deg);
//     transform: rotate(0deg);
//     -webkit-transition: 0.25s ease-in-out;
//     -moz-transition: 0.25s ease-in-out;
//     -o-transition: 0.25s ease-in-out;
//     transition: 0.25s ease-in-out;
//   }

//   .menu__toggle span:nth-child(1) {
//     top: 0px;
//   }

//   .menu__toggle span:nth-child(2),
//   .menu__toggle span:nth-child(3) {
//     top: 8px;
//   }

//   .menu__toggle span:nth-child(4) {
//     top: 16px;
//   }

//   .menu__toggle.menu__toggle--expanded {
//     margin-top: 0;
//   }

//   .menu__toggle.menu__toggle--expanded span:nth-child(1) {
//     top: 18px;
//     width: 0%;
//     left: 50%;
//   }

//   .menu__toggle.menu__toggle--expanded span:nth-child(2) {
//     -webkit-transform: rotate(45deg);
//     -moz-transform: rotate(45deg);
//     -o-transform: rotate(45deg);
//     transform: rotate(45deg);
//   }

//   .menu__toggle.menu__toggle--expanded span:nth-child(3) {
//     -webkit-transform: rotate(-45deg);
//     -moz-transform: rotate(-45deg);
//     -o-transform: rotate(-45deg);
//     transform: rotate(-45deg);
//   }

//   .menu__toggle.menu__toggle--expanded span:nth-child(4) {
//     top: 18px;
//     width: 0%;
//     left: 50%;
//   }
`

const mobileMenu = () => {
    const menu = document.querySelector(".header__content-links")
    const menuOverlay = document.querySelector(".header__overlay")
    const menuToggle = document.querySelector(".menu__toggle")
    menu.classList.toggle("header__content-links--expanded")
    menuOverlay.classList.toggle("header__overlay--visible")
    menuToggle.classList.toggle("menu__toggle--expanded")
    
  }

const Menu = props => (
    <StyledNavigation>
        <button className="menu__toggle" onClick={mobileMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div className={`header__overlay`}></div>
    <div className={`header__content-links`}>
        
    <ul>
    <li>
    <Link to="/" className={`header__content-link`}>
        HOME
    </Link>
    </li>
    <li>
        <Link to="/blog" className={`header__content-link`}>
        BLOG
        </Link>
    </li>
    <li>
        <Link to="/about" className={`header__content-link`}>
        ABOUT
        </Link>
    </li>
    <li>
        <Link to="/contact" className={`header__content-link`}>
        WHERE TO FIND ME
        </Link>
    </li>
    </ul>
</div>
</StyledNavigation>
)

export default Menu