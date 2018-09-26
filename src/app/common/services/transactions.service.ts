import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionsService {
    constructor(
        private http: Http
    ) {

    }

    public sendTx(tx: string) {
        return this.http.post(`http://18.221.128.6:8080/sendRawTransaction`, tx)
            .map(response => response.json());
    }
}