import React, { Component } from "react";
import "./Search.css"

class Form extends Component {
    render() {
        return(
            <form className="form">
                <h4>Topic</h4>
                <div className="">
                    <input type="text" className="form-control" />
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