import { Component, AfterViewChecked, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../accountServices/authService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    templateUrl: 'wwwroot/src/accountManagement/accountForgotPassword/accountForgotPassword.component.html'
})
export class AccountForgotPasswordFormComponent implements OnInit {
    email: string;
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
    forgotPasswordForm: NgForm;
    @ViewChild('forgotPasswordForm') currentForm: NgForm;

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.forgotPasswordForm) { return; }
        this.forgotPasswordForm = this.currentForm;
        if (this.forgotPasswordForm) {
            this.forgotPasswordForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.forgotPasswordForm) { return; }
        const form = this.forgotPasswordForm.form;

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
        'username': ''
    };

    validationMessages = {
        'username': {
            'required': 'Email is required.'
        }
    };

    forgot(): void {
        this._authService.forgotPassword(this.email)
            .subscribe(fp => {
                this.result = fp;
                this._router.navigate([""]);
            },
            error => this.errorMessage = <any>error);
    }

    /* Navigation Functions */
    onBack(): void {
        this._location.back();
    }

    /* Initialize */
    ngOnInit(): void {

    }

    /* Function to Get Client Info */

}
