import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import {tools} from "../tools";

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
                <h1>Languages % Tools</h1>
                <CardList tools={filteredTools}/>
            </div>
        );
    }
}

export default App; 