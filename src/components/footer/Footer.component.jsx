import React from "react";
import "./Footer.style.css"
import Logo from "../../assets/images/soundz_logo2.png";


const Footer = () => {
    return(
        <div className="footer">
            <img src={Logo} alt="soundz logo" className="logo"/>
            <p>&copy; 2020. Created by W3vops</p>
        </div>
    )
}

export default Footer;