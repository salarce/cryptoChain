import React, { Component } from 'react';
import axios from 'axios';
import Blocks from './blocks';

class App extends Component {

    state = {walletInfo: {address: "", balance: ""}}

    async componentDidMount(){
        const response = await axios.get('http://localhost:3000/api/wallet-info');
        this.setState({walletInfo: response.data});
    }

    render() { 
        return <div>
            <h1>walletInfo: </h1>
            <h3>Address: {this.state.walletInfo.address}</h3>
            <h3>Balance: {this.state.walletInfo.balance}</h3>
            <br/>
            <Blocks/>

        </div>;
    }
}
 
export default App;