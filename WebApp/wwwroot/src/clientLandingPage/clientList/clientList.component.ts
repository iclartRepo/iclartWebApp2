import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../clientService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-client-list',
    templateUrl: 'wwwroot/src/clientLandingPage/clientList/clientList.component.html'
})
export class ClientListComponent implements OnInit {
    clientToDelete: number;
    clientName: string = "";
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    resultDeletion: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;

    constructor(private _route: Router,
        private _clientService: ClientService) {
    }

    /* CRUD Functionalities */
    addClient(): void {
        this._route.navigate(['/client-form']);
    }
    deleteClient(): void {
        this._clientService.deleteClient(this.clientToDelete)
            .subscribe(deleteResponse => {
                this.resultDeletion = deleteResponse;
                if (this.resultDeletion.isError == false) 
                {
                    this.getListClients();
                }
            },
            error => this.errorMessage = <any>error);
    }
    getListClients(): void {
        this._clientService.getClients()
            .subscribe(peoples => this.result = peoples,
            error => this.errorMessage = <any>error);
    }
    searchClient(): void {
        this._clientService.searchClients(this.clientName)
            .subscribe(peoples => {
                this.result = peoples;
                this.clientName = "";
            },
            error => this.errorMessage = <any>error);
    }
    setClient(id: number): void {
        this.clientToDelete = id;
    }
    /* Initialize Functions */
    ngOnInit(): void {
        this._clientService.getClients()
            .subscribe(peoples => this.result = peoples,
            error => this.errorMessage = <any>error);
       
    }
}
