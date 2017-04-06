import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../accountServices/authService.service';
import { LocalStorageService } from "../universal/localStorageService.service";
@Component({
    selector: 'web-header',
    templateUrl: 'wwwroot/src/header/header.component.html'
})
export class HeaderComponent {

    isAuthenticated: boolean;
    errorMessage: string;

    constructor(private _authService: AuthService, private _localStorageService: LocalStorageService, private _router: Router) {
    }

    logOut(): void {
        this._authService.logout()
            .subscribe(result => {
                if (result.isError == false) {
                    this._localStorageService.setItem("IsAuthenticated", "Unauthorized");
                    this._router.navigate(["/"]);
                }
            },
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this._authService.isAuthenticated()
            .subscribe(authenticated => {
                this.isAuthenticated = authenticated;
                if (this.isAuthenticated == true)
                {
                    this._localStorageService.setItem("IsAuthenticated", "Authorized");
                    this._localStorageService.load();
                }
                else
                {
                    this._localStorageService.setItem("IsAuthenticated", "Unauthorized");
                    this._localStorageService.load();
                }             
            },
            error => this.errorMessage = <any>error);

        this._localStorageService.collection$.subscribe(authenticated => {
            if (authenticated == "Authorized")
            {
                this.isAuthenticated = true;
            }
            else
            {
                this.isAuthenticated = false;
            }
        });

    }

}
