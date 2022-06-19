import React, { Component } from 'react';
import axios from 'axios';

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
                        return <div key={block.hash} className="block">{block.hash}</div>
                    })
                }
            </div>
        )
    }
}
 
export default Blocks;