import { Component, AfterViewChecked, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../accountServices/authService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    templateUrl: 'wwwroot/src/accountManagement/accountChangePassword/accountChangePassword.component.html'
})
export class AccountChangePasswordFormComponent implements OnInit {

    constructor(private _router: Router, private _route: ActivatedRoute, private _location: Location, private _authService: AuthService) {

    }
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;
    oldPassword: string;
    newPassword: string;
    /* Form Validations */
    changePasswordForm: NgForm;
    @ViewChild('changePasswordForm') currentForm: NgForm;

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.changePasswordForm) { return; }
        this.changePasswordForm = this.currentForm;
        if (this.changePasswordForm) {
            this.changePasswordForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.changePasswordForm) { return; }
        const form = this.changePasswordForm.form;

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
        'oldPassword': '',
        'newPassword': ''
    };

    validationMessages = {
        'oldPassword': {
            'required': 'Old Password is required.'
        },
        'newPassword': {
            'required': 'New Password is required.'
        }
    };

    changePassword(): void {
        this._authService.changePassword(this.oldPassword, this.newPassword)
            .subscribe(change => {
                this.result = change;
                if (this.result.isError == false) {
                    this._location.back();
                }
            });
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
