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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var productService_service_1 = require("../productService.service");
var adminService_service_1 = require("../../adminLandingPage/adminService.service");
var ProductFormComponent = (function () {
    function ProductFormComponent(_router, _route, _service, _location, _adminService) {
        this._router = _router;
        this._route = _route;
        this._service = _service;
        this._location = _location;
        this._adminService = _adminService;
        /* Competitor Price Variables */
        this.competitorPrices = [];
        this.competitorPrice = {};
        this.resultCompetitors = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.resultCategories = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.editForm = {};
        this.editFormData = {};
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.product = {
            Id: 0,
            Name: "",
            CompanyPrice: 0,
            IsDeleted: false
        };
        this.formErrors = {
            'name': '',
            'category': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Product Name is required.'
            },
            'category': {
                'required': 'Product Category is required.'
            }
        };
    }
    ProductFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    ProductFormComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.productForm) {
            return;
        }
        this.productForm = this.currentForm;
        if (this.productForm) {
            this.productForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    ProductFormComponent.prototype.onValueChanged = function (data) {
        if (!this.productForm) {
            return;
        }
        var form = this.productForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    /* Pagination Functions */
    /* CRUD Functions */
    ProductFormComponent.prototype.addCompetitorPrice = function () {
        this.competitorPrice = {
            "CompetitorId": this.selectedCompetitor.Id,
            "Name": this.selectedCompetitor.Name,
            "Price": this.selectedPrice,
            "Competitor": this.selectedCompetitor
        };
        this.editForm[this.selectedCompetitor.Id] = false;
        this.editFormData[this.selectedCompetitor.Id] = this.selectedPrice;
        this.removeFromCompetitorList(this.selectedCompetitor.Id);
        this.competitorPrices.push(this.competitorPrice);
        this.selectedCompetitor = null;
        this.selectedPrice = null;
    };
    ProductFormComponent.prototype.edit = function (id) {
        this.editForm[id] = true;
    };
    ProductFormComponent.prototype.updatePrice = function (id) {
        var _this = this;
        this.competitorPrices.forEach(function (item, index) {
            if (item.CompetitorId == id) {
                item.Price = _this.editFormData[id];
            }
        });
        this.editForm[id] = false;
    };
    ProductFormComponent.prototype.saveProduct = function () {
        var _this = this;
        var productForm = {
            "Product": this.product,
            "ProductCategory": this.selectedCategory,
            "CompetitorPrices": this.competitorPrices
        };
        console.log(productForm);
        this._service.addProduct(productForm)
            .subscribe(function (product) {
            _this.result = product;
            if (_this.result.isError == false) {
                _this._router.navigate(['/products', 2]);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductFormComponent.prototype.removeFromCompetitorList = function (id) {
        var _this = this;
        this.resultCompetitors.ResultList.forEach(function (item, index) {
            if (item.Id == id) {
                _this.resultCompetitors.ResultList.splice(index, 1);
            }
        });
    };
    /*  Navigation */
    ProductFormComponent.prototype.onBack = function () {
        this._location.back();
    };
    /* Initialize */
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._adminService.getCompetitors()
            .subscribe(function (result) {
            _this.resultCompetitors = result;
            _this.realListCompetitors = result.ResultList;
        }, function (error) { return _this.errorMessage = error; });
        this._service.getProductCategories()
            .subscribe(function (result) {
            _this.resultCategories = result;
        }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.ViewChild('productForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], ProductFormComponent.prototype, "currentForm", void 0);
    ProductFormComponent = __decorate([
        core_1.Component({
            templateUrl: 'wwwroot/src/productLandingPage/productForm/productForm.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, productService_service_1.ProductService, common_1.Location, adminService_service_1.AdminService])
    ], ProductFormComponent);
    return ProductFormComponent;
}());
exports.ProductFormComponent = ProductFormComponent;
//# sourceMappingURL=productForm.component.js.map