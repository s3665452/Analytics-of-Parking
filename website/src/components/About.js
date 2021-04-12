// LIBRARY + REACT IMPORTS
import { Link } from 'react-router-dom'
import React, { useState } from "react";

// CSS
import '../css/About.css';

function About() {



    return (
        <>

            <div className="about-wrapper">
                <h1>ABOUT THE PROJECT</h1>
                <div className="about-paragraph">
                    <p>In collaboration with VicRoads, we at DDS are using the latest machine learning technology to predict and map the worst offending parking spaces in and around Melbourne. In this, we plan to provide the best outcomes for travellers, whether you're a worker, taking a leisure visit to the city or a tourist. <br /> <br />
                    We've taken thousands of entries to find areas that would benefit from longer parking durations, or even more parking spaces. VicRoads is committed to this collaboration, by promising more parking opportunities to worst-affected areas, benefiting all Melbournians and encouraging travel into the city on your terms.</p>
                    <button className="results-button">Click Here to See the Results</button>
                </div>
            </div>
        </>
    )
}

export default About;