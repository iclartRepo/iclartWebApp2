import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../accountServices/authService.service';

import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-view-roles',
    templateUrl: 'wwwroot/src/accountManagement/rolesList/rolesList.component.html'
})
export class RolesListComponent implements OnInit {

    newRole: string = "";
    errorMessage: string;
    resultForm: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };

    constructor(private _authService: AuthService) {

    }

    /* Initializer and Native Functions */
    ngOnInit(): void {
        this._authService.getAllRoles()
            .subscribe(roles => {
                this.result = roles;
                console.log(roles);               
            },
            error => this.errorMessage = <any>error);
    }
}
