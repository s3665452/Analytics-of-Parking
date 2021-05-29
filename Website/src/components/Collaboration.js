// LIBRARY + REACT IMPORTS
import React, { useState } from "react";

// CSS
import '../css/Collaboration.css';

// IMAGES
import logoMain from "../images/logo-full.png";
import vicRoadsLogo from "../images/vicroadsLogo.png";

function Collaboration() {



    return (
        <>
            {/* MAIN SECTION */}
            <div className="collab-wrapper">
                <h1>DISCOVER THE < br />COLLABORATION...</h1>
                <div className="colab-text-wrapper">
                    <h2>COLLABORATORS</h2>
                    <h4>Data Design Solutions</h4>
                    <div className="image-n"><img src={logoMain} className="image-size" /></div>
                    <h4>VicRoads</h4>
                    <div className="image-m"><img src={vicRoadsLogo} className="image-size" /></div>

                </div>
                <div className="colab-text-wrapper-">
                    <h2>MEET THE TEAM</h2>
                    <h4>Alana</h4>
                    <p className = "desc">Alana is a data scientist passionate about finding solutions to any problem with the help of cutting edge technology.</p>
                    <h4>Anton</h4>
                    <p className = "desc">Anton is a data scientist with experience in analytics and cloud computing. He is passionate about finding scalable solutions to fit your business needs.</p>
                    <h4>Yasiru</h4>
                    <p className = "desc"> Yasiru is an advisory analyst specialising in processes, innovation and consulting.  He works closely with the technical analysts to ensure best practises for best results.</p>
                    <h4>Klarke</h4>
                    <p className = "desc">Klarke is an advisory analyst specialising in high level analysis and process building. He is passionate about forming high level solutions for clients to implement. </p>

                </div>

            </div>
        </>
    )
}

export default Collaboration;