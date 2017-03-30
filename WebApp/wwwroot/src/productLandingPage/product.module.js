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
var shared_module_1 = require('../shared/shared.module');
var productService_service_1 = require('./productService.service');
var mainProductPage_component_1 = require('./mainProductPage/mainProductPage.component');
var productCategory_component_1 = require('./productCategory/productCategory.component');
var productList_component_1 = require('./productList/productList.component');
var productForm_component_1 = require('./productForm/productForm.component');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild([
                    { path: 'products', component: mainProductPage_component_1.MainProductPageComponent },
                    { path: 'products/:tabNum', component: mainProductPage_component_1.MainProductPageComponent },
                    { path: 'productForm', component: productForm_component_1.ProductFormComponent }
                ]), shared_module_1.SharedModule],
            declarations: [mainProductPage_component_1.MainProductPageComponent, productCategory_component_1.ProductCategoryComponent, productList_component_1.ProductListComponent, productForm_component_1.ProductFormComponent],
            providers: [productService_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map