import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../productService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-view-product-category',
    templateUrl: 'wwwroot/src/productLandingPage/productCategory/productCategory.component.html'
})
export class ProductCategoryComponent implements OnInit {

    newCategory: string = "";
    editForm: any = {};
    editFormData: any = {};
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    resultForm: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;



    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _service: ProductService) {
    }

    /* Initializer and Native Functions */
    ngOnInit(): void {
    
    }
}
