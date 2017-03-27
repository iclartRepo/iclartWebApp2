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
var ProductCategoryComponent = (function () {
    function ProductCategoryComponent(_router, _route, _service) {
        this._router = _router;
        this._route = _route;
        this._service = _service;
        this.newCategory = "";
        this.editForm = {};
        this.editFormData = {};
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.resultForm = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
    }
    /* CRUD Functionalities */
    ProductCategoryComponent.prototype.addCategory = function () {
        var _this = this;
        this._service.addProductCategory(this.newCategory)
            .subscribe(function (addResponse) {
            _this.resultForm = addResponse;
            if (_this.resultForm.isError == false) {
                _this.getCategories();
                _this.newCategory = "";
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductCategoryComponent.prototype.deleteProductCategory = function () {
        var _this = this;
        this._service.deleteProductCategory(this.categoryToDelete)
            .subscribe(function (deleteResponse) {
            _this.resultForm = deleteResponse;
            if (_this.resultForm.isError == false) {
                _this.getCategories();
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductCategoryComponent.prototype.setCategoryToDelete = function (id) {
        this.categoryToDelete = id;
    };
    ProductCategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this._service.getProductCategories()
            .subscribe(function (categories) {
            _this.result = categories;
            for (var _i = 0, _a = _this.result.ResultList; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.editForm[entry.Id] = false;
                _this.editFormData[entry.Id] = entry.Name;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductCategoryComponent.prototype.edit = function (id) {
        this.editForm[id] = true;
    };
    ProductCategoryComponent.prototype.updateCategory = function (id) {
        var _this = this;
        this._service.updateProductCategory(id, this.editFormData[id])
            .subscribe(function (category) {
            _this.editForm[id] = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    /* Validation */
    ProductCategoryComponent.prototype.checkIfExist = function (name, id) {
        for (var _i = 0, _a = this.result.ResultList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.Name == name && entry.Id != id) {
                return true;
            }
        }
        return false;
    };
    /* Initializer and Native Functions */
    ProductCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getProductCategories()
            .subscribe(function (categories) {
            _this.result = categories;
            for (var _i = 0, _a = _this.result.ResultList; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.editForm[entry.Id] = false;
                _this.editFormData[entry.Id] = entry.Name;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductCategoryComponent = __decorate([
        core_1.Component({
            selector: 'web-view-product-category',
            templateUrl: 'wwwroot/src/productLandingPage/productCategory/productCategory.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, productService_service_1.ProductService])
    ], ProductCategoryComponent);
    return ProductCategoryComponent;
}());
exports.ProductCategoryComponent = ProductCategoryComponent;
//# sourceMappingURL=productCategory.component.js.map