import React, {Component} from "react";

import Header from "../Header";
import Search from "../Search";
import Result from "../Result";
import Article from "../Article";

const Content = () => (
    <div className="container">
        <Header />
        <Search />
        <Result />
        <Article />
    </div>
    
);

export default Content;
