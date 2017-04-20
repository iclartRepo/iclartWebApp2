import { Component, AfterViewChecked, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';


import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    templateUrl: 'wwwroot/src/accountManagement/accountRegisterForm/accountRegisterForm.component.html'
})
export class AccountRegisterFormComponent implements OnInit {

    constructor(private _router: Router, private _route: ActivatedRoute, private _location: Location) {

    }
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };

    errorMessage: string;
  
    /* Form Validations */
    //clientForm: NgForm;
    //@ViewChild('clientForm') currentForm: NgForm;

    //ngAfterViewChecked() {
    //    this.formChanged();
    //}

    //formChanged() {
    //    if (this.currentForm === this.clientForm) { return; }
    //    this.clientForm = this.currentForm;
    //    if (this.clientForm) {
    //        this.clientForm.valueChanges
    //            .subscribe(data => this.onValueChanged(data));
    //    }
    //}

    //onValueChanged(data?: any) {
    //    if (!this.clientForm) { return; }
    //    const form = this.clientForm.form;

    //    for (const field in this.formErrors) {
    //        // clear previous error message (if any)
    //        this.formErrors[field] = '';
    //        const control = form.get(field);

    //        if (control && control.dirty && !control.valid) {
    //            const messages = this.validationMessages[field];
    //            for (const key in control.errors) {
    //                this.formErrors[field] += messages[key] + ' ';
    //            }
    //        }
    //    }
    //}

    //formErrors = {
    //    'name': '',
    //    'telephoneNumber': '',
    //    'discountScheme': '',
    //    'contactsOrder': '',
    //    'creditLimit': ''
    //};

    //validationMessages = {
    //    'name': {
    //        'required': 'Client Name is required.'
    //    },
    //    'telephoneNumber': {
    //        'required': 'Telephone Number is required.'
    //    },
    //    'discountScheme': {
    //        'required': 'Discount Scheme is required.'
    //    },
    //    'contactsOrder': {
    //        'required': 'Contact Persons from Sales is required.'
    //    },
    //    'creditLimit': {
    //        'required': 'Credit Limit is required.'
    //    }
    //};





    /* Navigation Functions */
    onBack(): void {
        this._location.back();
    }

    /* Initialize */
    ngOnInit(): void {
      
    }

    /* Function to Get Client Info */
    
}
