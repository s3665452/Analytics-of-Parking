// LIBRARY + REACT IMPORTS
import React, { useState } from "react";

// CSS
import '../css/home.css';


//Images
import placeholder from '../images/placeholder.jpg';
import image1 from '../images/fp_image1.png';

function Home() {



    return (
        <>
            <div className="home-wrapper">
                
                {/* MAIN DESCRIPTION */}
                <h1>SICK OF PARKING?</h1>
                <h2>We're sick of it too.</h2>
                <div className="description-home"><p className="paragraph-home">That's why we, in collaboration with VicRoads, are planning new parking developments in and around Melbourne's CBD. <br />
                We're here for helping Melbournians have easy access to parking, <br />making transportation easier for those not close to public transport. < br/>
                The best thing yet, is that with our proposed plan, parking violations will fall in and around these development areas.<br />
                How good is that?</p>
                </div>
                {/* ANALYSIS LINK */}
                <div className="findings-wrapper">
                    <div className="findings-pic">
                        <img src={image1} className="graph-image" />
                    </div>
                    <div className="findings-desc">

                        <a href="/analysis">
                            <button className="verdictButton">See the Analysis Process!</button>
                        </a>
                    </div>
                </div>
                

                {/* COLLABORATION LINK */}
                <div className="collaborations-wrapper">
                <p className="paragraph-collab">Do you want to know more about the collaboration? < br /> Click here to see who we've partnered up with to help fix Melbourne's parking!</p>
                    <div className="vertical-center">
                    <a href="/collaboration" >
                        <button className="collabButton">Collab</button>
                    </a> </div>               
                </div>
            </div>
        </>
    )
}

export default Home;