import React, { Component } from "react";
import "./Search.css";
import API from "../../utils/API.js";

class Form extends Component {
    state = {
        search: "",
        results : []
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        const query = e.target.elements.topic.value;
        API.search(query).then(response => {
            const result = response.data.response.docs;
            console.log(result);
        })
        
    }

    render() {
        return(
            <form className="form" onSubmit={this.onFormSubmit} >
                <h4>Topic</h4>
                <div className="">
                    <input type="text" className="form-control" name="topic" />
                </div>

                <h4>Start year</h4>
                <div className="">
                    <input type="text" className="form-control" />
                </div>

                <h4>End year</h4>
                <div className="">
                    <input type="text" className="form-control" />
                </div>
                <button className="btn btn-primary">Search</button>
            </form>
        );
    }
}

class Search extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading"><h3>Search</h3></div>
                <div className="panel-body">
                    <Form />
                </div>
                {/* end panel body */}
            </div>
        );
    }
}

export default Search;