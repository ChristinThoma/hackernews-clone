import React from "react";
import companyLogo from "./img/HackMack_sm.png";

const Header = (props) => {
    return (
        <header className="header">
            <img id="header-logo" src={companyLogo} alt="HackMackLogo" width="300"/>
            <div>
                <input className="search-bar" type="text" placeholder="Search" onChange={props.onEvent}/>
            </div>
        </header>
    )
}

export default Header;