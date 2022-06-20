import React, { Component } from 'react';
//import { json } from 'express/lib/response';

class Block extends Component {
    state = { displayTransaction: false }
    toggleTransaction = ()=>{
        this.setState({displayTransaction: !this.state.displayTransaction});
    } 
    render() { 
        const {timestamp, hash, data} = this.props.block;
        const hashDisplay = `${hash.substring(0,15)}...`;
        const stringifiedData = JSON.stringify(data);
        const dataDisplay = stringifiedData.length > 35 ? `${stringifiedData.substring(0,15)}...` : stringifiedData;

        return <div className="block">
            <div>Hash: {hashDisplay}</div>
            <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
            <div style={{cursor: 'pointer'}} onClick={this.toggleTransaction}>Data: {this.state.displayTransaction ? JSON.stringify(data) : dataDisplay}</div>
        </div>;
    }
}
 
export default Block;