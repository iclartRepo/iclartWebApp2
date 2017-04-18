import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-view-account',
    templateUrl: 'wwwroot/src/accountManagement/accountLandingPage/account.component.html'
})
export class AccountManagementComponent implements OnInit {

    tabNum: number = 1;

    setTab(tab: number): void {
        this.tabNum = tab;
    }

    /* Initializer and Native Functions */
    ngOnInit(): void {
     
    }
}
