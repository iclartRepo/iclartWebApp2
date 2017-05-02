import { Component, AfterViewChecked, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../accountServices/authService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    templateUrl: 'wwwroot/src/accountManagement/accountRegisterForm/accountRegisterForm.component.html'
})
export class AccountRegisterFormComponent implements OnInit {

    constructor(private _router: Router, private _route: ActivatedRoute, private _location: Location, private _authService: AuthService) {

    }
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    resultRoles: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    accountEmail: string;
    selectedRole: string;
    errorMessage: string;
  
    /* Form Validations */
    registerForm: NgForm;
    @ViewChild('registerForm') currentForm: NgForm;

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.registerForm) { return; }
        this.registerForm = this.currentForm;
        if (this.registerForm) {
            this.registerForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.registerForm) { return; }
        const form = this.registerForm.form;

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
        'email': '',
        'role': ''
    };

    validationMessages = {
        'email': {
            'required': 'Email is required.'
        },
        'role': {
            'required': 'Role is required.'
        }
    };

    register(): void {
        this._authService.registerUser(this.accountEmail, this.selectedRole)
            .subscribe(register => {
                this.result = register;
                if (this.result.isError == false)
                {
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
        this._authService.getAllRoles()
            .subscribe(roles => {
                this.resultRoles = roles;
            });
    }

    /* Function to Get Client Info */
    
}
