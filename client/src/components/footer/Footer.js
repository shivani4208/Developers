import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import './footer.css'
// import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="footer-icon">
                <svg height="80" width="80">
                    <circle cx="27" cy="40" r="25" stroke="white" strokeWidth="2" fill="none"></circle>
                </svg>
                <FaInstagram className="i main-icon"/>
            </div>

            <div className="footer-icon">
                <svg height="80" width="80">
                    <circle cx="27" cy="40" r="25" stroke="white" strokeWidth="2" fill="none"></circle>
                </svg>
                <FaFacebook className="i main-icon"/>
            </div>

            <div className="footer-icon">
                <svg height="80" width="80">
                    <circle cx="27" cy="40" r="25" stroke="white" strokeWidth="2" fill="none"></circle>
                </svg>
                <FaTwitter className="i main-icon"/>
            </div>

            <div className="footer-icon">
                <svg height="80" width="80">
                    <circle cx="27" cy="40" r="25" stroke="white" strokeWidth="2" fill="none"></circle>
                </svg>
                <FaWhatsapp className="i main-icon"/>
            </div>
        </div>
        // <footer className="footer mt-auto py-3 bg-secondary">
        //     <div className="container">
        //         <span className="d-flex align-items-center justify-content-center m-3" style={{color:"white"}}>Copyright © 2020-2021 | Crypto</span>
        //     </div>
        // </footer>
    )
}

export default Footer
