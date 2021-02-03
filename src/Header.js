import React from "react";

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="title">Hack Mack</h1>
            <div>
                <input className="search-bar" type="text" placeholder="Search" onChange={props.onEvent}/>
            </div>
        </header>
    )
}

export default Header;