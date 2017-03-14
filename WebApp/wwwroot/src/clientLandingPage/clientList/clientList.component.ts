import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../clientService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-client-list',
    templateUrl: 'wwwroot/src/clientLandingPage/clientList/clientList.component.html'
})
export class ClientListComponent implements OnInit {

    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;

    constructor(private _route: Router,
        private _clientService: ClientService) {
    }

    addClient(): void {
        this._route.navigate(['/client-form']);
    }

    ngOnInit(): void {
        this._clientService.getClients()
            .subscribe(peoples => this.result = peoples,
            error => this.errorMessage = <any>error);
       
    }
}
