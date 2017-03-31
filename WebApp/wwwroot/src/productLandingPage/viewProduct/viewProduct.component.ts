import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../productService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-view-product',
    templateUrl: 'wwwroot/src/productLandingPage/viewProduct/viewProduct.component.html'
})
export class ProductViewComponent implements OnInit {

    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;

    productId: number;

    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _service: ProductService) {
    }

    /* Navigation Functions */
    back(): void {
        this._router.navigate(['/products', 1]);
    }

    getProduct(id: number): void {
        this._service.getProduct(id).subscribe(
            result => {
                this.result = result;
            },
            error => this.errorMessage = <any>error);
    }

    /* Initializer and Native Functions */
    ngOnInit(): void {
        this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.productId = id;
                this.getProduct(id);
            });
    }
}
