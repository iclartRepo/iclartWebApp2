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
var ProductViewComponent = (function () {
    function ProductViewComponent(_router, _route, _service) {
        this._router = _router;
        this._route = _route;
        this._service = _service;
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
    }
    /* Navigation Functions */
    ProductViewComponent.prototype.back = function () {
        this._router.navigate(['/products', 1]);
    };
    ProductViewComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._service.getProduct(id).subscribe(function (result) {
            _this.result = result;
        }, function (error) { return _this.errorMessage = error; });
    };
    /* Initializer and Native Functions */
    ProductViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.productId = id;
            _this.getProduct(id);
        });
    };
    ProductViewComponent = __decorate([
        core_1.Component({
            selector: 'web-view-product',
            templateUrl: 'wwwroot/src/productLandingPage/viewProduct/viewProduct.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, productService_service_1.ProductService])
    ], ProductViewComponent);
    return ProductViewComponent;
}());
exports.ProductViewComponent = ProductViewComponent;
//# sourceMappingURL=viewProduct.component.js.map