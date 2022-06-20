import React, { Component } from 'react';
import axios from 'axios';
import Block from './block';

class Blocks extends Component {
    state = { blocks: [] }
    async componentDidMount() {
        const response = await axios.get('http://localhost:3000/api/blocks');
        this.setState({blocks: response.data});
    } 
    render() { 
        return (
            <div className="blocks">
                <h2>Chain</h2>
                {
                    this.state.blocks.map((block) => {
                        return <Block key={block.hash} block={block} />
                    })
                }
            </div>
        )
    }
}
 
export default Blocks;