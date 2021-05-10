
// LIBRARY + REACT IMPORTS
import { Link } from 'react-router-dom'
import React, { useState } from "react";

// CSS
import '../css/Contact.css';

function Contact() {



    return (
        <>
            {/* MAIN SECTION CONTACT */}
            <div className="contact-wrapper">
                <h1>CONTACT US</h1>
               <p className="description-wrapper">Have more questions about the project? Contact DDS below:</p> 
                <div className="contact-grid">

                    {/* STATIC DETAILS CONTACT SECTION */}
                    <div className="contact-details">
                        <div className="static-text">
                            <p className="title">PHONE</p> 
                            <p className="filler">0284 247 539 24</p>
                            <p className="title">EMAIL</p> 
                            <p className="filler">ENQUIRIES@DDS.COM.AU</p>
                            <p className="title">OFFICE</p> 
                            <p className="filler">1 MARSHTEST STREET, MELBOURNE CBD, 3000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;