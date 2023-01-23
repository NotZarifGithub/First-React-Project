import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {tools} from "./tools";

class App extends Component {
    constructor() {
        super()
        this.state = {
        tools: [],
        searchfield: ''
      }
    }
    
    componentDidMount() {
        this.setState({ tools: tools});
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render() {
        const filteredTools = this.state.tools.filter(tools => {
            return tools.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <div>
                    <span>Languages % Tools</span>
                </div>
                <CardList tools={filteredTools}/>
            </div>
        );
    }
}

export default App; 