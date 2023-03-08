import React from 'react'
import { FaGithubSquare, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <div className='footer'>
            <ScrollToTop smooth />
            <h2 className='footer-text'>Design by team | Made With ❤️</h2>
            <div className='footer-socials'>
                <a href='https://github.com/sibasish934' className='github'>
                    <FaGithubSquare />
                </a>
                <a href='https://www.linkedin.com/in/sibasish-satapathy-9a603a206/' className='link'>
                    <FaLinkedinIn />
                </a>
                <a href='https://www.instagram.com/iamraj_934/?hl=en' className='insta'>
                    <FaInstagramSquare />
                </a>
            </div>
        </div>
    )
}

export default Footer;