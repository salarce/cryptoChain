import axios from 'axios';
import React, { Component } from 'react';

class ConductTransaction extends Component {
    recipient = React.createRef();
    amount = React.createRef();
    state = {  } 

    handleSend = async() => {
        const recipient = this.recipient.current.value;
        const amount = this.amount.current.value;
        if(recipient && amount) {
            const response = await axios.post('http://localhost:3000/api/transact', {recipient, amount});
            if(response.data.type && response.data.type === 'error') {
                alert(response.data.message)
            } else {
                alert('success')
            }
        } else {
            alert('please insert valid input')
        }
    }

    render() { 
        return <div className="form">
            <h2>Send Transaction</h2>
            <input ref={this.recipient} placeholder='recipient' type="text" />
            <input ref={this.amount} placeholder='amount' type="number" />
            <button onClick={this.handleSend}>send</button>
        </div>;
    }
}
 
export default ConductTransaction;