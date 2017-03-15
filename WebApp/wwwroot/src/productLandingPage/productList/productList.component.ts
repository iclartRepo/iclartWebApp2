import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../productService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-client-list',
    templateUrl: 'wwwroot/src/productLandingPage/productList/productList.component.html'
})
export class ProductListComponent implements OnInit {

    
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

    constructor(private _route: Router,
        private _productService: ProductService) {
    }

    /* CRUD Functionalities */
   

    /* Initialize Functions */
    ngOnInit(): void {
        

    }
}
