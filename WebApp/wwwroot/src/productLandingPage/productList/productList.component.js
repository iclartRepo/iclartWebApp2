"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var productService_service_1 = require('../productService.service');
var ProductListComponent = (function () {
    function ProductListComponent(_route, _service) {
        this._route = _route;
        this._service = _service;
        this.productName = "";
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.resultDeletion = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
    }
    /* CRUD Functionalities */
    ProductListComponent.prototype.searchProduct = function () {
        var _this = this;
        this._service.searchProduct(this.productName)
            .subscribe(function (product) {
            _this.result = product;
            _this.productName = "";
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.setProduct = function (id) {
        this.productToDelete = id;
    };
    ProductListComponent.prototype.deleteProduct = function () {
        var _this = this;
        this._service.deleteProduct(this.productToDelete)
            .subscribe(function (products) { _this.getClients(); }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.getClients = function () {
        var _this = this;
        this._service.getProducts()
            .subscribe(function (products) { return _this.result = products; }, function (error) { return _this.errorMessage = error; });
    };
    /* Initialize Functions */
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getProducts()
            .subscribe(function (products) { return _this.result = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'web-product-list',
            templateUrl: 'wwwroot/src/productLandingPage/productList/productList.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, productService_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=productList.component.js.map