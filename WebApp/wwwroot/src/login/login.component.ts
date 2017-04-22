import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IMessageResult } from '../interfaces/messageResult.interface';

import { AuthService } from '../accountServices/authService.service';
import { LocalStorageService } from '../universal/localStorageService.service';

@Component({
    selector: 'web-login',
    templateUrl: 'wwwroot/src/login/login.component.html'
})
export class LoginComponent {
    email: string;
    password: string;
    errorMessage: string;
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    constructor(private _authService: AuthService, private _localStorageService: LocalStorageService, private _router: Router) {

    }

    login(): void {
        var loginForm: any =  {
            "Email": this.email,
            "Password": this.password
        };      
        this._authService.login(loginForm)
            .subscribe(login => {
                this.result = login;
                localStorage.setItem("ticket", this.result.Result);
                if (this.result.isError == false)
                {
                    this._localStorageService.setItem("IsAuthenticated", "Authorized");
                    this._router.navigate(['/home']);
                }
                else
                {
                    this._localStorageService.setItem("IsAuthenticated", "Unauthorized");
                }
            },
            error => this.errorMessage = <any>error);
    }

    loginForm: NgForm;
    @ViewChild('loginForm') currentForm: NgForm;

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.loginForm) { return; }
        this.loginForm = this.currentForm;
        if (this.loginForm) {
            this.loginForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.loginForm) { return; }
        const form = this.loginForm.form;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'username': '',
        'password': ''
    };

    validationMessages = {
        'username': {
            'required': 'Email is required.'
        },
        'password': {
            'required': 'Password is required.'
        }
    };
}
