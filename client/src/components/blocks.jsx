import React, { Component } from 'react';
import axios from 'axios';
import Block from './block';

class Blocks extends Component {
    state = { blocks: [] }
    async componentDidMount() {
        const response = await axios.get(`${document.location.origin}/api/blocks`);
        this.setState({blocks: response.data});
    } 
    render() { 
        return <>
            <h2>Chain</h2>
            <div className="blocks">
                {
                    this.state.blocks.map((block) => {
                        return <Block key={block.hash} block={block} />;
                    })
                }
            </div></>
    }
}
 
export default Blocks;