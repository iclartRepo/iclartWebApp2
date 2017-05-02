import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../accountServices/authService.service';

import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-view-account',
    templateUrl: 'wwwroot/src/accountManagement/accountLandingPage/account.component.html'
})
export class AccountManagementComponent implements OnInit {
    accountToDelete: number;
    accountSearch: string;
    tabNum: number = 1;

    setTab(tab: number): void {
        this.tabNum = tab;
    }
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
    constructor(private _authService: AuthService) { }

    setUser(id: number): void {
        this.accountToDelete = id;
    }
    searchAccount(): void {
        this._authService.searchUser(this.accountSearch)
            .subscribe(users => {
                this.result = users;
            },
            error => this.errorMessage = <any>error);
    }
    deleteAccount(): void {
        this._authService.deleteUser(this.accountToDelete)
            .subscribe(deleteResponse => {
                this.resultDeletion = deleteResponse;
                if (this.resultDeletion.isError == false)
                {
                    this.retrieveAccounts();
                }
            },
            error => this.errorMessage = <any>error);
    }

    retrieveAccounts(): void {
        this._authService.getUsers()
            .subscribe(users => {
                this.result = users;
            },
            error => this.errorMessage = <any>error);
    }

    /* Initializer and Native Functions */
    ngOnInit(): void {
        this._authService.getUsers()
            .subscribe(users => {
                this.result = users;
            },
            error => this.errorMessage = <any>error);
    }
}
