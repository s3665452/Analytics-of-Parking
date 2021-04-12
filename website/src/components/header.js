// LIBRARY + REACT IMPORTS
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import * as AiIcon from "react-icons/ai";

// CSS
import '../css/header.css';

// IMAGES
import logoMain from "../images/logo-full.png";

function Header() {

    const [Header, setSideNavBar] = useState(false)
    const showSideNavBar = () => setSideNavBar(!Header)

    return (
        <>

            <div className="headerContainer">
                <img src={logoMain} className="logoMain"></img>

                {/* SIDE NAV BAR */}
                <AiIcon.AiOutlineMore size={40} style={{ fill: '#e6dfd9'}}  className="dropDownPos" onClick={showSideNavBar}/>
                {/* NAVIGATION BAR */}
                <div className = "topNavBar">
                    <ul className="nav">
                        
                        <li><a href="/" className="nav-button">HOME</a></li>
                        <li><a href="/about" className="nav-button">ABOUT</a></li>
                        <li><a href="/analysis" className="nav-button">ANALYSIS</a></li>
                        <li><a href="/collaboration" className="nav-button">COLLABORATION</a></li>
                        <li><a href="/contact" className="nav-button">CONTACT</a></li>
                    </ul>
                </div>

            </div>

            {/* SIDE NAV BAR */}
            <div id="menu" className={Header ? 'nav-menu-active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideNavBar} >
                    <li className="navbar-toggle" >
                        <Link to="#" className='menu-bars' ><AiOutlineClose size={25} style={{ fill: 'white' }} /> </Link >
                    </li>
                        <li><a href="/" href="#top" name="top" className="nav-text">HOME</a></li>
                        <li><a href="/about" className="nav-text">ABOUT</a></li>
                        <li><a href="/analysis" className="nav-text">ANALYSIS</a></li>
                        <li><a href="/collaboration" className="nav-text">COLLABORATION</a></li>
                        <li><a href="/contact" className="nav-text">CONTACT</a></li>

                </ul>
            </div>
        </>
    )
}

export default Header;