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
    categoryFilter: string = "Select Product Category";
    categories: string[] = [];
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
        this.categoryFilter = "Select Product Category";
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
            .subscribe(products => { this.getProducts(); },
            error => this.errorMessage = <any>error);
    }
    getProducts(): void {
        this._service.getProducts()
            .subscribe(products => this.result = products,
            error => this.errorMessage = <any>error);
    }
    clearFilter(): void {
        this.categoryFilter = "Select Product Category";
        this.getProducts();
    }
    filterProducts(): void {
        if (this.categoryFilter == "Select Product Category")
        {
            this.getProducts();
        }
        else
        {
            this._service.filterProducts(this.categoryFilter)
                .subscribe(products => this.result = products,
                error => this.errorMessage = <any>error);
        }        
    }
    checkIfExists(name: string): boolean {
        if (this.categories.length == 0)
        {
            return false;
        }
        else
        {
            var exists = false;
            for (let entry of this.categories) {
                if (entry == name)
                {
                    exists = true;
                }
            }
            return exists;
        }       
    }
    /* Initialize Functions */
    ngOnInit(): void {
        this._service.getProducts()
            .subscribe(products => {
                this.result = products;
                for (let entry of this.result.ResultList) {
                    var exists: boolean = this.checkIfExists(entry.ProductCategory.Name);
                    if (exists == false)
                    {
                        this.categories.push(entry.ProductCategory.Name);
                    }
                }
            },
            error => this.errorMessage = <any>error);
        

    }
}
