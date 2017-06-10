import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { IMessageResult } from '../../interfaces/messageResult.interface';

import { SosService } from '../sos.service';
import { ClientService } from '../../clientLandingPage/clientService.service';
import { ProductService } from '../../productLandingPage/productService.service';

@Component({
    selector: 'web-sos-form',
    templateUrl: 'wwwroot/src/sosLandingPage/sosForm/sosForm.component.html'
})
export class SOSFormComponent {

    constructor(private _sosService: SosService, private _location: Location, private _clientService: ClientService, private _productService: ProductService) { }

    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    resultClients: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    resultProducts: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    resultProductCategories: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };

    productList: any[] = [];
    unitOptions: any[] = [];

    errorMessage: string;
    selectedClient: any = {
        Office_Address : ''
    };
    selectedProductCategory: any;
    selectedUnit: any;
    productPrice: any;

    /* Form Object Values */
    sosDate: Date;
    pickup: boolean;
    remarks: string;

    /* Form Validations */
    sosForm: NgForm;
    //@ViewChild('sosForm') currentForm: NgForm;

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

    filterProducts(): void {
        this.productList = [];
        for (let entry of this.resultProducts.ResultList)
        {
            if (entry.ProductCategory.Id == this.selectedProductCategory)
            {
                this.productList.push(entry);
            }
        }


    }

    getListClients(): void {
        this._clientService.getClients()
            .subscribe(peoples => this.resultClients = peoples,
            error => this.errorMessage = <any>error);
    }

    getProducts(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.resultProducts = products;
                for (let entry of this.resultProducts.ResultList) {
                    this.productList.push(entry);
                }
            },
            error => this.errorMessage = <any>error);
    }

    getProductCategories(): void {
        this._productService.getProductCategories()
            .subscribe(categories => {
                this.resultProductCategories = categories;             
            },
            error => this.errorMessage = <any>error);
    }

    initializeUnits(): void {
        this.unitOptions.push("Box");
        this.unitOptions.push("Roll");
        this.unitOptions.push("Bundle");
    }
    onBack(): void {
        this._location.back();
    }

    /* Initializer and Native Functions */
    ngOnInit(): void {
        this.getListClients();
        this.getProducts();
        this.getProductCategories();
        this.initializeUnits();
        this.selectedClient.Office_Address = "";
    }
}
