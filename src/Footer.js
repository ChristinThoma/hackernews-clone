import React from "react";
import FacebookIcon from "./img/Logos_1_Zeichenfläche 1.png";
import InstagramIcon from "./img/Logos_1-02.png";
import TwitterIcon from "./img/Logos_1-03.png";
import PinterestIcon from "./img/Logos_1-04.png";

const Footer = (props) => {
    return (
        <footer className="footer">
            <p>Want to stay up to date? Follow us!</p>
            <div className="icons">
                <a href="#"><img src={FacebookIcon} alt="Facebook"/></a>
                <a href="#"><img src={InstagramIcon} alt="Instagram"/></a>
                <a href="#"><img src={TwitterIcon} alt="Twitter"/></a>
                <a href="#"><img src={PinterestIcon} alt="Pinterest"/></a>
            </div>
        </footer>
    )
}

export default Footer;