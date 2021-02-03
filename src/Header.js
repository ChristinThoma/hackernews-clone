import React from "react";


const Header = () => {
return(
    <header className="header">
        <h1 className="title">Hack Mack</h1>
        <div>
            <input className="search-bar"type="text" placeholder="Search"></input>
            <img src="/Users/reza/Documents/hackernews-clone/public/images/search.png" />
            
        </div>
        
    </header>
)
}

export default Header;