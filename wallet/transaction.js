const {v1} = require('uuid');
const {verifySignature} = require('../util'); 

class Transaction{
    constructor({senderWallet, recipient, amount}){
        this.id = v1();
        this.outputMap = this.createOutputMap({senderWallet, recipient, amount});
        this.input = this.createInput({senderWallet, outputMap: this.outputMap});
    }

    createOutputMap({senderWallet, recipient, amount}){
        const outputMap = {};

        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance - amount;

        return outputMap;
    }

    createInput({senderWallet, outputMap}){
        return {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(outputMap)
        }
    }

    static validTransaction(transaction){
        const {outputMap, input : {address, amount, signature}} = transaction;
        const outputTotal = Object.values(outputMap).reduce((total, outputAmount)=> total + outputAmount);
        if(amount !== outputTotal){
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        if(!verifySignature({publicKey: address, data: outputMap, signature: signature})){
            console.error(`Invalid transaction from ${address}`);
            return false;
        }

        return true;
    }

    update({senderWallet, recipient, amount}){
        this.outputMap[recipient] = amount;
        this.outputMap[senderWallet.publicKey] = this.outputMap[senderWallet.publicKey] - amount;
        
        this.input = this.createInput({senderWallet, outputMap: this.outputMap});
    }
}

module.exports = Transaction;