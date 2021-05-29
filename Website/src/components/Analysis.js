// LIBRARY + REACT IMPORTS
import React from "react";

// CSS
import '../css/Analysis.css';

//IMAGES
import placeholder from '../images/placeholder.jpg';
import image1 from '../images/about1.png';
import image2 from '../images/about2.png';
import image3 from '../images/about3.png';

function Analysis() {

    return (
        <>
            {/* MAIN SECTION */}
            <div className="analysis-wrapper ">
                <h1>ANALYSIS</h1>
                <div className="text-wrapper">
                    <p>In our analysis, we observed the data provided to give a rounded image of problematic areas. In this analysis we found major areas such as Queensberry, Jolimont and Southbank being the major contenders with the largest number of violations compared to any other area in Melbourne’s CBD. Moving further and further into the crevices and depths of the data, we analysed streets, car IDs, parking time zones and many more variables to find out why these areas were fine hotspots.  <br /><br />

                    We also found that many people revisited these areas and received fines in the same areas multiple times. This brings us to a pattern that we needed to analyse.  <br /><br />

                    Why were these people regularly attending these areas? <br />
                    Why were they getting fined in these areas? <br />
                    Were they present in the same area when getting fined? <br />
                    Were there problematic spots where many people were fined compared to other parking spots in these areas? <br /><br />

                    What we found in our analysis was that the streets with the worst additions included:  <br /><br />

                    Lonsdale Street <br />
                    Flinders Street <br />
                    Exhibition Street <br />
                    Collins Street <br />
                    Sprint Street <br /> <br />

                    Additionally, we also found that many of the violations were in parking sports that had limits of only 1 or 2 hours. These violations also occurred during weekdays, with drivers parking just before the start of the working day, and keeping their cars parked until after the working day ended. <br /> <br />

                    This means we are dealing with a parking issue for city workers. This is why our recommendations to VicRoads and the Victorian Government now stem out to help city workers find easier access to parking, avoiding these fines and making life in the city simpler. <br />


                    </p>
                </div>
                <div className="images-wrapper">
                    <div className="image-1"><img src={image1} className="image-size" /></div>
                    <div className="image-2"><img src={image2} className="image-size" /></div>
                    <div className="image-3"><img src={image3} className="image-size"/></div>
                </div>

            </div>
        </>
    )
}

export default Analysis;