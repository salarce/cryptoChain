import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConductTransaction extends Component {
    recipient = React.createRef();
    amount = React.createRef();
    state = {  } 

    handleSend = async() => {
        const recipient = this.recipient.current.value;
        const amount = this.amount.current.value;
        if(recipient && amount) {
            const response = await axios.post(`${document.location.origin}/api/transact`, {recipient, amount});
            if(response.data.type && response.data.type === 'error') {
                alert(response.data.message)
            } else {
                alert('success');
                this.props.history.replace('/transaction-pool');
            }
        } else {
            alert('please insert valid input')
        }
    }

    render() { 
        return <>
        <div className="header">
            <img src="/images/cryptochain.svg" alt="cryptochain" />
            <h1>CryptoChain</h1>
        </div>
        <div className="form">
            <h2>Transaction</h2>
            <input ref={this.recipient} placeholder='recipient' type="text" />
            <input ref={this.amount} placeholder='amount' type="number" />
            <button onClick={this.handleSend}><i class="fa-solid fa-comment-dollar"></i>Send</button>
            <Link to={'/'}><button><i class="fa-solid fa-house"></i>Home</button></Link>
        </div>
        <footer className='footer-send'>
            <div>
                <p>made by &#64;salarce ,for more information check my <a href="https://github.com/salarce" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
        </footer>
        </>;
    }
}
 
export default ConductTransaction;