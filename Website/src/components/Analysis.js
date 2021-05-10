// LIBRARY + REACT IMPORTS
import React from "react";

// CSS
import '../css/Analysis.css';

//IMAGES
import placeholder from '../images/placeholder.jpg';
function Analysis() {

    return (
        <>
            {/* MAIN SECTION */}
            <div className="analysis-wrapper ">
                <h1>ANALYSIS</h1>
                <div className="text-wrapper">
                    <p>This is a description about analysis 1</p>
                </div>
                <div className="images-wrapper">
                    <div className="image-1"><img src={placeholder} className="image-size" /></div>
                    <div className="image-2"><img src={placeholder} className="image-size" /></div>
                    <div className="image-3"><img src={placeholder} className="image-size"/></div>
                </div>

            </div>
        </>
    )
}

export default Analysis;