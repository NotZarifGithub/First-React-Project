import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {tools} from "./tools";
import ParticlesBackground from "./Components/ParticlesBackground";

class App extends Component {
    constructor() {
        super()
        this.state = {
        tools: tools,
        searchfield: ''
      }
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
                <ParticlesBackground/>
                <h1> Languages % Tools </h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList tools={filteredTools}/>
            </div>
        );
    }
}

export default App; 