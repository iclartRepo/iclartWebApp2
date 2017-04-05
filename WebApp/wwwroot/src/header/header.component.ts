import { Component, OnInit } from '@angular/core';

import { AuthService } from '../accountServices/authService.service';
@Component({
    selector: 'web-header',
    templateUrl: 'wwwroot/src/header/header.component.html'
})
export class HeaderComponent {

    isAuthenticated: boolean;
    errorMessage: string;

    constructor(private _authService: AuthService) {
    }

    ngOnInit(): void {
        this._authService.isAuthenticated()
            .subscribe(authenticated => this.isAuthenticated = authenticated,
            error => this.errorMessage = <any>error);

    }

}
