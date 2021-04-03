import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import * as AiIcon from "react-icons/ai";
import '../css/header.css';

function Header() {

    const [Header, setSideNavBar] = useState(false)
    const showSideNavBar = () => setSideNavBar(!Header)

    return (
        <>

            <div className="headerContainer">

                {/* LOGO */}
                <AiIcon.AiOutlineMore size={40} style={{ fill: '#e6dfd9'}}  className="dropDownPos" onClick={showSideNavBar}/>

                {/* NAVIGATION BAR */}
                <div className = "topNavBar">
                    <ul className="nav">
                        <li><Link to="/" className="nav-button">HOME</Link></li>
                        <li><Link to="/" className="nav-button">ABOUT</Link></li>
                        <li><Link to="/" className="nav-button">ANALYSIS</Link></li>
                        <li><Link to="/" className="nav-button">COLLABORATION</Link></li>
                        <li><Link to="/" className="nav-button">CONTACT</Link></li>
                    </ul>
                </div>

            </div>

            {/* SIDE NAV BAR */}
            <div id="menu" className={Header ? 'nav-menu-active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideNavBar} >
                    <li className="navbar-toggle" >
                        <Link to="#" className='menu-bars' ><AiOutlineClose size={25} style={{ fill: 'white' }} /> </Link >
                    </li>
                        <li><Link to="/" href="#top" name="top" className="nav-text">HOME</Link></li>
                        <li><Link to="/" className="nav-text">ABOUT</Link></li>
                        <li><Link to="/" className="nav-text">ANALYSIS</Link></li>
                        <li><Link to="/" className="nav-text">COLLABORATION</Link></li>
                        <li><Link to="/" className="nav-text">CONTACT</Link></li>

                </ul>
            </div>
        </>
    )
}

export default Header;