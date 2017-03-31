import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../productService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-product-list',
    templateUrl: 'wwwroot/src/productLandingPage/productList/productList.component.html'
})
export class ProductListComponent implements OnInit {
    productName: string = "";
    productToDelete: number;
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    resultDeletion: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;

    constructor(private _route: Router, private _service: ProductService) {
    }
    /* CRUD Functionalities */
    searchProduct(): void {
        this._service.searchProduct(this.productName)
            .subscribe(product => {
                this.result = product;
                this.productName = "";
            },
            error => this.errorMessage = <any>error);
    }
    setProduct(id: number): void {
        this.productToDelete = id;
    }
    deleteProduct(): void {
        this._service.deleteProduct(this.productToDelete)
            .subscribe(products => { this.getClients(); },
            error => this.errorMessage = <any>error);
    }
    getClients(): void {
        this._service.getProducts()
            .subscribe(products => this.result = products,
            error => this.errorMessage = <any>error);
    }
    /* Initialize Functions */
    ngOnInit(): void {
        this._service.getProducts()
            .subscribe(products => this.result = products,
            error => this.errorMessage = <any>error);
        

    }
}
