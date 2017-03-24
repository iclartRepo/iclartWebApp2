import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'web-view-product',
    templateUrl: 'wwwroot/src/productLandingPage/mainProductPage/mainProductPage.component.html'
})
export class MainProductPageComponent implements OnInit {

    tabNum: number = 1;


    constructor(private _router: Router) {
    }

    /* Navigation */
    setTab(id: number): void 
    {
        this.tabNum = id;
    }
    /* Initializer and Native Functions */
    ngOnInit(): void {
       
    }
}
