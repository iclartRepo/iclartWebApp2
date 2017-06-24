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
var common_1 = require('@angular/common');
var sos_service_1 = require('../sos.service');
var clientService_service_1 = require('../../clientLandingPage/clientService.service');
var productService_service_1 = require('../../productLandingPage/productService.service');
var SOSFormComponent = (function () {
    function SOSFormComponent(_sosService, _location, _clientService, _productService) {
        this._sosService = _sosService;
        this._location = _location;
        this._clientService = _clientService;
        this._productService = _productService;
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.resultClients = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.resultProducts = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.resultProductCategories = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.productList = [];
        this.unitOptions = [];
        this.selectedClient = {
            Office_Address: ''
        };
    }
    //@ViewChild('sosForm') currentForm: NgForm;
    //ngAfterViewChecked() {
    //    this.formChanged();
    //}
    //formChanged() {
    //    if (this.currentForm === this.clientForm) { return; }
    //    this.clientForm = this.currentForm;
    //    if (this.clientForm) {
    //        this.clientForm.valueChanges
    //            .subscribe(data => this.onValueChanged(data));
    //    }
    //}
    //onValueChanged(data?: any) {
    //    if (!this.clientForm) { return; }
    //    const form = this.clientForm.form;
    //    for (const field in this.formErrors) {
    //        // clear previous error message (if any)
    //        this.formErrors[field] = '';
    //        const control = form.get(field);
    //        if (control && control.dirty && !control.valid) {
    //            const messages = this.validationMessages[field];
    //            for (const key in control.errors) {
    //                this.formErrors[field] += messages[key] + ' ';
    //            }
    //        }
    //    }
    //}
    //formErrors = {
    //    'name': '',
    //    'telephoneNumber': '',
    //    'discountScheme': '',
    //    'contactsOrder': '',
    //    'creditLimit': ''
    //};
    //validationMessages = {
    //    'name': {
    //        'required': 'Client Name is required.'
    //    },
    //    'telephoneNumber': {
    //        'required': 'Telephone Number is required.'
    //    },
    //    'discountScheme': {
    //        'required': 'Discount Scheme is required.'
    //    },
    //    'contactsOrder': {
    //        'required': 'Contact Persons from Sales is required.'
    //    },
    //    'creditLimit': {
    //        'required': 'Credit Limit is required.'
    //    }
    //};
    SOSFormComponent.prototype.filterProducts = function () {
        this.productList = [];
        var categoryName = "";
        for (var _i = 0, _a = this.resultProducts.ResultList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.ProductCategory.Id == this.selectedProductCategory) {
                categoryName = entry.ProductCategory.Name;
                this.productList.push(entry);
            }
        }
        if (categoryName == "Continuous Form") {
            this.selectedUnit = 'Box';
        }
        else if (categoryName == "Paper Bag") {
            this.selectedUnit = 'Bundle';
        }
        else if (categoryName == "POS Rolls") {
            this.selectedUnit = "Roll";
        }
        else {
            this.selectedUnit = "Roll";
        }
    };
    SOSFormComponent.prototype.clearStandardProductFields = function () {
        this.selectedProductCategory = null;
        this.selectedProduct = null;
        this.selectedUnit = null;
        this.productPrice = null;
    };
    SOSFormComponent.prototype.getListClients = function () {
        var _this = this;
        this._clientService.getClients()
            .subscribe(function (peoples) { return _this.resultClients = peoples; }, function (error) { return _this.errorMessage = error; });
    };
    SOSFormComponent.prototype.getProducts = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) {
            _this.resultProducts = products;
            for (var _i = 0, _a = _this.resultProducts.ResultList; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.productList.push(entry);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    SOSFormComponent.prototype.getProductCategories = function () {
        var _this = this;
        this._productService.getProductCategories()
            .subscribe(function (categories) {
            _this.resultProductCategories = categories;
        }, function (error) { return _this.errorMessage = error; });
    };
    SOSFormComponent.prototype.initializeUnits = function () {
        this.unitOptions.push("Box");
        this.unitOptions.push("Roll");
        this.unitOptions.push("Bundle");
    };
    SOSFormComponent.prototype.onBack = function () {
        this._location.back();
    };
    SOSFormComponent.prototype.getBestStandardPrice = function () {
        var _this = this;
        this._productService.getPrice(this.selectedClient.Id, this.selectedProduct)
            .subscribe(function (result) {
            _this.productPrice = result;
        }, function (error) { return _this.errorMessage = error; });
    };
    /* Initializer and Native Functions */
    SOSFormComponent.prototype.ngOnInit = function () {
        this.getListClients();
        this.getProducts();
        this.getProductCategories();
        this.initializeUnits();
        this.selectedClient.Office_Address = "";
    };
    SOSFormComponent = __decorate([
        core_1.Component({
            selector: 'web-sos-form',
            templateUrl: 'wwwroot/src/sosLandingPage/sosForm/sosForm.component.html'
        }), 
        __metadata('design:paramtypes', [sos_service_1.SosService, common_1.Location, clientService_service_1.ClientService, productService_service_1.ProductService])
    ], SOSFormComponent);
    return SOSFormComponent;
}());
exports.SOSFormComponent = SOSFormComponent;
//# sourceMappingURL=sosForm.component.js.map