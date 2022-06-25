import React, { Component } from 'react';
import axios from 'axios';
import Transaction from './transaction';
import { Link } from 'react-router-dom';

class TransactionPool extends Component {
    state = { transactionMap: {} } 

    async componentDidMount () {
        const response = await axios.get('http://localhost:3000/api/transaction-pool-map');
        this.setState( { transactionMap: response.data } );
    }
    render() { 
        return <>
        <div className="header">
            <img src="/images/cryptochain.svg" alt="cryptochain" />
            <h1>CryptoChain</h1>
        </div>
        <div className='transaction-pool'>
            <h2>Transaction Pool</h2>
            {
                Object.values(this.state.transactionMap).map(transaction => {
                    return (
                        <div key={transaction.id} className='block'>
                            <Transaction transaction={transaction} />
                        </div>
                    )
                })
            }
            <button><Link to='/'><i className='fas fa-home'></i>Home</Link></button>
        </div>
        <footer className='footer-send'>
            <div>
                <p>made by &#64;salarce ,for more information check my <a href="https://github.com/salarce" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
        </footer>
        </>
    }
}
 
export default TransactionPool;