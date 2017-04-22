import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../accountServices/authService.service';
import { LocalStorageService } from "../universal/localStorageService.service";
import { IMessageResult } from '../interfaces/messageResult.interface';
@Component({
    selector: 'web-header',
    templateUrl: 'wwwroot/src/header/header.component.html'
})
export class HeaderComponent {
    isAuthenticated: boolean;
    errorMessage: string;
    ticket: string;
    rolesOfUser: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };

    //Roles
    isAdmin: boolean = false;

    constructor(private _authService: AuthService, private _localStorageService: LocalStorageService, private _router: Router) {
    }

    logOut(): void {
        this.ticket = localStorage.getItem("ticket");       
        this._authService.logout(this.ticket)
            .subscribe(result => {
                if (result.isError == false) {
                    this._localStorageService.setItem("IsAuthenticated", "Unauthorized");
                    this._authService.getNewToken()
                        .subscribe(token => {
                            localStorage.setItem("ticket", token.Result);
                            this._router.navigate(["/"]);
                        });
                   
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
                this._authService.getRolesOfUser()
                    .subscribe(roles => {
                        this.rolesOfUser = roles;
                        if (this.rolesOfUser.ResultList.some(x => x == "Admin"))
                        {
                            this.isAdmin = true;
                        }
                    },
                    error => this.errorMessage = <any>error);
                this._router.navigate(['/home']);
            }
            else
            {
                this.isAuthenticated = false;
            }
        });

    }

}
