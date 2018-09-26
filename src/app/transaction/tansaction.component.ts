import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import ethereumTx = require('ethereumjs-tx');
import { TransactionsService } from '../common/services/transactions.service';

@Component({
    selector: 'transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
    public txForm: FormGroup;
    private privateKey: Buffer;

    constructor(
        private transactionsService: TransactionsService
    ) {}

    ngOnInit() {
        this.privateKey = Buffer.from('priv_key', 'hex');
    }

    public submit(txForm: FormGroup) {
        const txParams = {
            nonce: '0x00', 
            gasPrice: '0x000000000001', 
            gasLimit: '0x27100', 
            to: '0xFD00A5fE03CB4672e4380046938cFe5A18456Df4', 
            value: '0x00', 
            data: '0x', 
            // EIP 155 chainId - mainnet: 1, ropsten: 3 
            chainId: 1 
        }
        
        const tx = new ethereumTx(txParams);
        tx.sign(this.privateKey);

        const serializedTx = tx.serialize();
        const hexTx = '0x' + serializedTx.toString('hex');

        this.transactionsService.sendTx(hexTx)
            .subscribe(result => {
                console.log(result);
            });
    }
}
