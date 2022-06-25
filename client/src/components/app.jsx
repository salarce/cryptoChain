import React, { Component } from 'react';
import axios from 'axios';
import Blocks from './blocks';
import { Link } from 'react-router-dom';

class App extends Component {

    state = {walletInfo: {address: "", balance: ""}}

    async componentDidMount(){
        const response = await axios.get(`${document.location.origin}/api/wallet-info`);
        this.setState({walletInfo: response.data});
    }

    render() { 
        return <>
        <div className="header">
            <img src="/images/cryptochain.svg" alt="cryptochain" />
            <h1>CryptoChain</h1>
        </div>
        <div className="wallet">
            <div><img src="/images/wallet.png" alt="Wallet" /></div>
            <div>
                <h1>Your Wallet</h1>
                <div className="address">
                    <i className='fas fa-key'></i>
                    Address: {this.state.walletInfo.address}
                </div>
                <div className="balance">
                    <i className='fas fa-coins'></i>
                    Balance: {this.state.walletInfo.balance}
                </div>
                <Link to='/transact'><button><i class="fa-solid fa-money-bill-transfer"></i>Send Money</button></Link>
                <Link to='/transaction-pool'><button><i class="fa-solid fa-water-ladder"></i>Transactions Pool</button></Link>
            </div>
        </div>
        <Blocks/>
        <footer>
            <div>
                <p>made by &#64;salarce ,for more information check my <a href="https://github.com/salarce" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
        </footer>
        </>;
    }
}
 
export default App;