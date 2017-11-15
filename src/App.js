import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import Article from "./components/Article";

const App = () => (
    <div className="container">
        <Header />
        <Search />
        <Result />
        <Article />
    </div>
    
);

export default App;
