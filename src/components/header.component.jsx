import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCloContext } from "../context";
import { Link } from 'react-router-dom';
import { HeaderContent } from './index.components';

/**header_logo-content--logo */
/**vlv-villages version 1.04 - HeaderComponent -
 * Features:
 * 
 *   --> Building navigation for header Component.
 * 
 *   --> testing the context.
 * 
 * Note: Pending to make it dynamic by implementing
 * an array with the links, and set the background 
 * image 'hero'
 */

const HeaderComponent = () => {
    
    const { mainNavLinks } = useCloContext()

    // eslint-disable-next-line
    const [background, setBackground] = useState('nav-links');

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log('value of checkbox ==>', isChecked)
      };

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < 0) {
            setBackground('nav-links nav-links--scroll-down');
          } else {
            setBackground('nav-links');
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      function handleHomeLinkClick() {
        const windowHeight = window.innerHeight; // Get the height of the viewport
        window.scrollTo({
          top: windowHeight / 2, // Scroll to half of the viewport height
          behavior: "smooth"
        });
      }   

    return(
        <header id="header">
            <WrapperHeader>
            <nav className="header_main-nav">
                <input type='checkbox'  checked={isChecked} onChange={handleCheckboxChange}/>
                <div className="header_main-nav--hamburger" ><div></div></div>
                <div className="header_main-nav--menu"> 
                    <div>
                        <div>
                            {mainNavLinks.map((link) => {
                                const {id, linkname, url } = link;
                                return(
                                    <ul key={id}>
                                        <li><Link to={url} onClick={() => {handleHomeLinkClick(); handleCheckboxChange(); }} >{linkname}</Link></li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="header_logo-content">
                <div className="background-image"/>
                
                <HeaderContent />
                
            </div>
            </WrapperHeader>
        </header>
    )
}

const WrapperHeader = styled.div`
    
    
        /*Nav**/
    /*position fixed makes the navigation fixed
    *to the scroll behavior**/
    .header_main-nav{
    position: fixed;
    top: 0;
    left: 0;
    /*this will put the navigation on top
    *of everything - fixing bug for be on top of villas section**/
    z-index: 6;
    }

    /*styling the checkbox (check the nav)**/
    .header_main-nav input[type=checkbox]{
    position: absolute;
    top: 3rem;
    left: 3rem;
    height: 5rem;
    width: 5rem;
    /*i make it not visible*/
    opacity: 0;
    cursor: pointer;
    /**using 'z-index', i place 'checkbox' on top of
    *hamburger*/
    z-index: 3;
    }

    /*this hamburger style is on top of the checkbox
    *so the user won't see the checkbox **/
    .header_main-nav--hamburger {
  position: absolute;
  top: 3rem;
  left: 3rem;
  height: 5rem;
  width: 5rem;
  border: 2px solid var(--color-sixth);
  padding: 1rem;
  background: linear-gradient(to right, var(--color-sixth), #ffa800);
  /* Places the hamburger on top */
  z-index: 2;
  display: grid;
  place-items: center;
  /* Hamburger animation */
  animation: main-nav 2s;
  /* Background transition */
  transition: background 1s;
}

.header_main-nav--hamburger:hover {
  background: linear-gradient(to right, #ffa800, var(--color-sixth));
}



    /*hamburger animation**/
    @keyframes main-nav{
    /*150rem is 1500px that's why is set like this**/
    0%{
        transform: translateX(150rem) rotate(1800deg);
        opacity: 0;
    }

    100%{
        transform: translateX(0) rotate(0);
        opacity: 1;
    }
    }

    /*Hamburger Lines**/
    /*combinator selector apply styles to direct child 'div'**/
    .header_main-nav--hamburger > div {
    position: relative;
    height: 0.3rem;
    width: 100%;
    background-color: var(--color-quarternary);
    display: grid;
    place-items: center;
    /*this transition is going to apply an animation later*/
    transition: all var(--transition-duration) ease-in-out;
    }

    /*Hamburger bottom Lines**/

    .header_main-nav--hamburger > div::before, 
    .header_main-nav--hamburger > div::after{
    content: '';
    position: absolute;
    top: -1rem;
    width: 60%;
    /*'inherit' takes 'height' value of his parent**/
    height: inherit;
    background-color: inherit;
    z-index: 2;
    }

    .header_main-nav--hamburger > div::before{
    left: 0;
    }

    .header_main-nav--hamburger > div::after{
    top: 1rem;
    right: 0;
    }

    /*Rotating the menu**/
    /*checked is a pseudo class selector**/
    /*the name of this syntax is 'attribute selector' or 'space combinator selector'*/
    .header_main-nav input[type=checkbox]:checked + .header_main-nav--hamburger > div{
    transform: rotate(135deg);
    }

    .header_main-nav input[type=checkbox]:checked + .header_main-nav--hamburger > div::before {
    left: 0;
    top:0;
    width: 100%;
    transform: rotate(270deg);
    }

    /*this is the effect over that creates the cross*/
    .header_main-nav input[type=checkbox]:checked + .header_main-nav--hamburger > div::after {
    opacity: 0;
    }

    .header_main-nav input[type=checkbox]:checked:hover + .header_main-nav--hamburger > div {
    transform: rotate(405deg);
    }

    /*Links for the menu*/
    .header_main-nav--menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    visibility: hidden;
    overflow: hidden;

    /*here i activate grid - so the links will be centered**/
    display: grid;
    place-items: center;
    }

    .header_main-nav--menu > div {
    background-color: var(--color-tertiary-dark);
    height: 200%;
    width: 200%;

    display: grid;
    place-items: center;

    transform: scaleX(0);
    transition: all var(--transition-duration) ease-in-out;
    }

    .header_main-nav--menu > div > div{
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    }

    /*displaying the menu when the checkbox is checked**/
    /* this is the general sibiling selector**/
    .header_main-nav input[type=checkbox]:checked ~ .header_main-nav--menu{
    visibility: visible;
    }

    .header_main-nav input[type=checkbox]:checked ~ .header_main-nav--menu > div {
    transform: scaleX(1);
    transition-duration: 0.5s;
    }

    .header_main-nav input[type=checkbox]:checked ~ .header_main-nav--menu > div > div{
    opacity: 1;
    }

    .header_main-nav--menu div div{
        border-radius: 0.75rem;
        margin: 1rem;
        padding: 2rem;
        background-color: var(--color-fifth-more-light);
    }

    /**this is the styles for the links --*/
    .header_main-nav--menu ul li a:link,
    .header_main-nav--menu ul li a:visited{
    
    text-transform: capitalize;
    color: var(--clr-black);
    z-index: 5;
    font-size: calc(2rem + 0.5vw);
    }

    .header_main-nav--menu ul li a:link::before,
    .header_main-nav--menu ul li a:visited::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
   
    transform: scaleY(0);
    border-radius: 0.75rem;
    border: 1px solid var(--color-fifth-dark);
    background-color: var(--color-secondary);
    transition: transform var(--transition-duration) ease-in-out;
    }

    .header_main-nav--menu ul li a:hover::before,
    .header_main-nav--menu ul li a:active::before{
    transform: scaleY(1);
    }

    .header_logo-content{
    display: grid;
    /**giving '1fr' to the sides they are going to shrink first nad the center at last using 'minmax'*/
    
    grid-template-columns: 1fr minmax(30rem, 1fr) 0.2fr;
    grid-template-rows: min-content;
    height: 90%;
    justify-items: center;
    }

    .header_logo-content--logo{
    grid-column: 2 / 3;
    letter-spacing: 0.2rem;
    }

    .header_logo-content--logo span {
    color: var(--color-tertiary);
    font-size: 3rem;
    font-family:'Times New Roman', Times, serif;
    }

    .header_logo-content--content{
    grid-column: 1 / -1;
    align-self: center;
    }

    .header_logo-content--quatation-container{
    
        border: 1.5px solid var(--color-sixth);
        border-radius: .75rem;
        margin: 1.5rem;
        padding: 1.5rem;
        background-color: var(--color-fifth-light);
    }

    .header_logo-content--title{
    display: grid;
    place-content: center;
    font-size: calc(3rem + 3vw);
    font-weight: 300;
    color: white;
    text-transform: uppercase;
    padding: 0.2rem 0 var(--font-size-title);
    }

    .header_logo-content--img{
        width: 30rem;
        height: 30rem;
    }

    .header_logo-content--quatation-container{
        display: flex;
       
    }

    i{
        color:var(--color-tertiary-light)
    }

    .header_logo-content--para{
        font-weight: 500;
        padding: 1.5vh 1.5rem 6vh var(--font-size-title);
        color: var(--font-color-brown-m-ligth);
    }

    .header_logo-content--link:link,
    .header_logo-content--link:visited {
        border-radius: 0.75rem;
        border: 1px solid var(--color-fifth-dark);
        background-color: var(--color-secondary);    
        margin-left: var(--font-size-title);
        color: var(--font-color-brown-dark);
        font-weight: 500;
    }

    .header_logo-content--link:hover{
        background-color: var(--clr-white);
        border: 1px solid var(--color-secondary);
        border-radius: 0.75rem;
        color: var(--color-sixth);
    }

    .header_logo-content--link:link::before,
    .header_logo-content--link:visited::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.45s cubic-bezier(1,0,0,1);
    z-index: -1;
    }

    .header_logo-content--link:hover::before,
    .header_logo-content--link:active::before{
    transform: scaleX(1);
    } 
`

export default HeaderComponent;