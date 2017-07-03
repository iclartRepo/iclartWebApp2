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
    resultOperation: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };

    productList: any[] = [];
    unitOptions: any[] = [];
    pointerMarker: number = 0;
    errorMessage: string;
    selectedClient: any = {
        Office_Address: '',
        Combine_Items: false
    };
    productsView: any[] = [];
    selectedProductCategory: any;
    selectedUnit: any;
    productPrice: any;
    selectedProduct: any;
    productQuantity: any;

    /* Form Object Values */
    sosDate: Date = new Date();
    pickup: boolean = false;
    remarks: string = "";
    standardProducts: any[] = [];
    customProducts: any[] = [];

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
        var categoryName = "";
        for (let entry of this.resultProducts.ResultList)
        {           
            if (entry.ProductCategory.Id == this.selectedProductCategory)
            {
                categoryName = entry.ProductCategory.Name;
                this.productList.push(entry);
            }
        }
        if (categoryName == "Continuous Form")
        {
            this.selectedUnit = 'Box';
        }
        else if (categoryName == "Paper Bag")
        {
            this.selectedUnit = 'Bundle';
        }
        else if (categoryName == "POS Rolls")
        {
            this.selectedUnit = "Roll";
        }
        else
        {
            this.selectedUnit = "Roll";
        }
    }

    clearStandardProductFields(): void {
        this.selectedProductCategory = null;
        this.selectedProduct = null;
        this.selectedUnit = null;
        this.productPrice = null;
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

    getBestStandardPrice(): void {
        this._productService.getPrice(this.selectedClient.Id, this.selectedProduct.Id)
            .subscribe(result => {
                this.productPrice = result;
            },
            error => this.errorMessage = <any>error);
    }

    addStandardProduct(): void {
        this.pointerMarker += 1;
        var standardProduct = {
            "Id": this.pointerMarker,
            "ProductId": this.selectedProduct.Id,
            "Quantity": this.productQuantity,
            "Price": this.productPrice
        };
        this.standardProducts.push(standardProduct);

        var productView = {
            "Id": this.pointerMarker,
            "Quantity": this.productQuantity,
            "ItemDescription": this.selectedProduct.Name,
            "Price": this.productPrice,
            "TotalPrice": this.productQuantity * this.productPrice,
            "Custom": false
        }

        this.productsView.push(productView);
    }

    addQuantity(id: number, custom:boolean): void {
        
        let searchResult = this.productsView.filter(item => item.Id == id)[0];
        searchResult.Quantity += 1;
        searchResult.TotalPrice = searchResult.Quantity * searchResult.Price;

        if (custom == false)
        {
            let realProductSearch = this.standardProducts.filter(item => item.Id == id)[0];
            realProductSearch.Quantity += 1;
        }
    }

    subtractQuantity(id: number, custom:boolean): void {
        let searchResult = this.productsView.filter(item => item.Id == id)[0];
        searchResult.Quantity -= 1;
        searchResult.TotalPrice = searchResult.Quantity * searchResult.Price;

        if (custom == false) {
            let realProductSearch = this.standardProducts.filter(item => item.Id == id)[0];
            realProductSearch.Quantity -= 1;
        }
    }

    removeProduct(id: number, custom: boolean): void {
        this.productsView = this.productsView.filter(item => item.Id !== id);

        if (custom == false) {
            this.standardProducts = this.standardProducts.filter(item => item.Id != id);
        }

    }


    //Saving and updating Functionalities
    saveSos(): void {

        var sosModel = {
            "ClientId": this.selectedClient.Id,
            "Sos_Date": this.sosDate,
            "Remarks": this.remarks,
            "Status": false,
            "Pickup": this.pickup,
            "Exported": false
        };
        var dataModel = {
            "Sos": sosModel,
            "StandardOrders": this.standardProducts,
            "CustomOrders": this.customProducts
        };

        this._sosService.addSos(dataModel)
            .subscribe(result => {
                this.resultOperation = result;
                if (this.resultOperation.isError == false)
                {
                    this._location.back();
                }
            },
            error => this.errorMessage = <any>error);

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
