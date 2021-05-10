// REACT IMPORTS
import React, { useState } from "react";

// CSS IMPORTS
import '../css/footer.css';

// IMAGES
import logoMain from "../images/logo-full.png";
import vicRoadsLogo from "../images/vicroadsLogo.png";

function Footer() {
    return (
        <>

            {/* main wrapper for footer */}
            <div className="footer-wrapper">

                {/* LINKS SECTION */}
                <div className="Links-wrapper-1">
                    <h3>Links</h3>
                    <ul className="linksList">
                        <a href="/"><li>Home</li></a>
                        <a href="/about"><li>About</li></a>
                    </ul>
                </div>
                <div className="Links-wrapper-2">
                    <ul className="linksList">
                        <a href="/analytics"><li>Analysis</li></a>
                        <a href="/collaboration"><li>Collaboration</li></a>
                        <a href="/contact"><li>Contact</li></a>
                    </ul>
                </div>

                {/* COLLABORATION SECTION */}
                <div className="collabInfo-wrapper">
                    <h4>In collaboration with</h4>
                    <img src={vicRoadsLogo} className="VicRoads"></img>
                </div>

                {/* BOTTOM LOGO */}
                <div className="logoSection">
                    <img src={logoMain}></img>
                </div>
            </div>
        </>
    )
}

export default Footer;