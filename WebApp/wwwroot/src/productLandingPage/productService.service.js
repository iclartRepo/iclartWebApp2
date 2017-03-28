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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this.baseUrl = "/Product/";
    }
    ProductService.prototype.getProductCategories = function () {
        return this._http.get(this.baseUrl + "GetProductCategories")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.addProductCategory = function (name) {
        return this._http.post(this.baseUrl + "AddProductCategory", { name: name })
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.updateProductCategory = function (id, name) {
        return this._http.put(this.baseUrl + "UpdateProductCategory", { id: id, name: name })
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProductCategory = function (id) {
        return this._http.delete(this.baseUrl + "DeleteProductCategory?id=" + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.getProducts = function () {
        return this._http.get(this.baseUrl + "GetProducts")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.searchProduct = function (name) {
        return this._http.get(this.baseUrl + "SearchProduct?name=" + name)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=productService.service.js.map