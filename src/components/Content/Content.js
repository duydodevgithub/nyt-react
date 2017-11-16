import React, {Component} from "react";
import API from "../../utils/API.js";
import Header from "../Header";
import Search from "../Search";
import Result from "../Result";
import Article from "../Article";

class Content extends Component {
    state = {
        search: "stock",
        begin_date: "20150606",
        end_date: "20170808",
        results:[]
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        API.search(this.state.search, this.state.begin_date, this.state.end_date).then((result) => {
            console.log(result);
            const data = result.data.response.docs;
            this.setState({
            results: data
            });
        });
    }

    render() {
        return(
            <div className="container">
                <Header />
                <Search 
                onFormSubmit={this.onFormSubmit} 
                />
                <Result renderResult={this.state.results}/>
                <Article />
            </div>
        )
    }
}

export default Content;
