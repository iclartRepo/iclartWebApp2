import { Component, AfterViewChecked, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../accountServices/authService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    templateUrl: 'wwwroot/src/accountManagement/accountResetPassword/accountResetPassword.component.html'
})
export class AccountResetPasswordFormComponent implements OnInit {
    newPassword: string;
    encodedEmail: string;
    constructor(private _router: Router, private _route: ActivatedRoute, private _location: Location, private _authService: AuthService) {

    }
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;

    /* Form Validations */
    resetPasswordForm: NgForm;
    @ViewChild('resetPasswordForm') currentForm: NgForm;

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.resetPasswordForm) { return; }
        this.resetPasswordForm = this.currentForm;
        if (this.resetPasswordForm) {
            this.resetPasswordForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.resetPasswordForm) { return; }
        const form = this.resetPasswordForm.form;

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
        'newPassword': ''
    };

    validationMessages = {
        'newPassword': {
            'required': 'New Password is required.'
        }
    };

    reset(): void {
        this._authService.resetPassword(this.encodedEmail, this.newPassword)
            .subscribe(reset => {
                this.result = reset;
                if (this.result.isError == false)
                {
                    this._router.navigate([""]);
                }
            },
            error => this.errorMessage = <any>error);
    }

    /* Navigation Functions */
    onBack(): void {
        this._location.back();
    }

    /* Initialize */
    ngOnInit(): void {
        this._route.params.subscribe(
            params => {
                let name = params['id'];
                this.encodedEmail = name;
                this._authService.checkResetExpiry(this.encodedEmail)
                    .subscribe(fp => {
                        this.result = fp;
                        if (this.result.isError == true) {
                            this._router.navigate(["/reset-expired"]);
                        }
                    },
                    error => this.errorMessage = <any>error);
            });

     
    }

 

}
