import React, {Component} from "react";

const Header = (props) => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Newyork Times Article Scrubber</h1>
                <h2 className="text-center">Search for and annotate articles on interest</h2>                
            </div>
        </div>
    );
}

export default Header;