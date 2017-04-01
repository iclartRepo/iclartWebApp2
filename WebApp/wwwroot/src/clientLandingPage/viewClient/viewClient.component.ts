import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientService } from '../clientService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-view-client',
    templateUrl: 'wwwroot/src/clientLandingPage/viewClient/viewClient.component.html'
})
export class ClientViewComponent implements OnInit {

    tabNum: number = 1;

    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;

    clientId: number;

    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _clientService: ClientService) {
    }  

    /* Navigation Functions */
    back(): void {
        this._router.navigate(['/clients']);
    }

    editClient(id: number): void {
        this._router.navigate(['/client-form', id]);
    }

    /* Pagination Functions */
    setTab(tabNumber: number): void {
        this.tabNum = tabNumber;
    }


    /* Function to Get Client Info */
    getClient(id: number) {
        this._clientService.getClientInfo(id).subscribe(
            result => this.result = result,
            error => this.errorMessage = <any>error);
    }

    /* Initializer and Native Functions */
    ngOnInit(): void {
        this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getClient(id);
            });
    }
}
