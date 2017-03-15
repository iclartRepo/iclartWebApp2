﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ClientService } from '../clientService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-client-list',
    templateUrl: 'wwwroot/src/clientLandingPage/clientList/clientList.component.html'
})
export class ClientListComponent implements OnInit {

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
        private _clientService: ClientService,
        private titleService: Title) {
    }

    /* CRUD Functionalities */
    addClient(): void {
        this._route.navigate(['/client-form']);
    }
    deleteClient(id: number): void {
        this._clientService.deleteClient(id)
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
            .subscribe(peoples => this.result = peoples,
            error => this.errorMessage = <any>error);
    }

    /* Initialize Functions */
    ngOnInit(): void {
        this._clientService.getClients()
            .subscribe(peoples => this.result = peoples,
            error => this.errorMessage = <any>error);
        this.titleService.setTitle("Client List");
    }
}
