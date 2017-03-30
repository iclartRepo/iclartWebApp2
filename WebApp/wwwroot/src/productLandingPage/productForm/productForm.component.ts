﻿import { Component, AfterViewChecked, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { ProductService } from "../productService.service";
import { AdminService } from "../../adminLandingPage/adminService.service";

import { IProduct } from '../../interfaces/product.interface';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    templateUrl: 'wwwroot/src/productLandingPage/productForm/productForm.component.html'
})
export class ProductFormComponent implements OnInit {

    constructor(private _router: Router, private _route: ActivatedRoute, private _service: ProductService, private _location: Location, private _adminService: AdminService) {

    }
    /* Competitor Price Variables */
    competitorPrices: any[] = [];
    competitorPrice: any = {};
    selectedCompetitor: any;
    selectedPrice: number;
    selectedCategory: any;
    resultCompetitors: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    resultCategories: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    realListCompetitors: any[];
    editForm: any = {};
    editFormData: any = {};

    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;
    product: IProduct = {
        Id: 0,
        Name: "",
        CompanyPrice: 0,
        IsDeleted: false
    }
    

    /* Form Validations */
    productForm: NgForm;
    @ViewChild('productForm') currentForm: NgForm;

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.productForm) { return; }
        this.productForm = this.currentForm;
        if (this.productForm) {
            this.productForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.productForm) { return; }
        const form = this.productForm.form;

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
        'name': '',
        'category': ''
    };

    validationMessages = {
        'name': {
            'required': 'Product Name is required.'
        },
        'category': {
            'required': 'Product Category is required.'
        }  
    };

    /* Pagination Functions */
   

    /* CRUD Functions */
    addCompetitorPrice(): void {
        this.competitorPrice = {
            "CompetitorId": this.selectedCompetitor.Id,
            "Name": this.selectedCompetitor.Name,
            "Price": this.selectedPrice,
            "Competitor": this.selectedCompetitor
        };
        this.editForm[this.selectedCompetitor.Id] = false;
        this.editFormData[this.selectedCompetitor.Id] = this.selectedPrice;
        this.removeFromCompetitorList(this.selectedCompetitor.Id);
        this.competitorPrices.push(this.competitorPrice);
        this.selectedCompetitor = null;
        this.selectedPrice = null;       
    }
    edit(id: number): void {
        this.editForm[id] = true;
    }
    updatePrice(id: number): void {
        this.competitorPrices.forEach((item, index) => {
            if (item.CompetitorId == id) {
                item.Price = this.editFormData[id];
            }
        });
        this.editForm[id] = false;
    }
    saveProduct(): void {
       
        var productForm: any = {
            "Product": this.product,
            "ProductCategory": this.selectedCategory,
            "CompetitorPrices": this.competitorPrices
        };
        console.log(productForm);
        this._service.addProduct(productForm)
            .subscribe(product => {
                this.result = product;
                if (this.result.isError == false) {
                    this._router.navigate(['/products', 2]);
                }
            },
            error => this.errorMessage = <any>error);
    }
    removeFromCompetitorList(id: number): void {
        this.resultCompetitors.ResultList.forEach((item, index) => {
            if (item.Id == id) {
                this.resultCompetitors.ResultList.splice(index, 1);
            }
        });
    }
    
    /*  Navigation */
    onBack(): void {
        this._location.back();
    }
    /* Initialize */
    ngOnInit(): void {
        this._adminService.getCompetitors()
            .subscribe(
            result => {
                this.resultCompetitors = result;
                this.realListCompetitors = result.ResultList;
            },
            error => this.errorMessage = <any>error);
        this._service.getProductCategories()
            .subscribe(
            result => {
                this.resultCategories = result;
            },
            error => this.errorMessage = <any>error);
    }

   
}
