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
var clientService_service_1 = require("../clientService.service");
var adminService_service_1 = require("../../adminLandingPage/adminService.service");
var ClientFormComponent = (function () {
    function ClientFormComponent(_router, _route, _service, _location, _adminService) {
        this._router = _router;
        this._route = _route;
        this._service = _service;
        this._location = _location;
        this._adminService = _adminService;
        /* Competitor Discount Schemes Variables */
        this.competitorDiscountSchemes = [];
        this.competitorDs = {};
        this.resultCompetitors = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.tabNum = 1;
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.client = {
            Id: 0,
            Name: "",
            TIN: "",
            Office_Address: "",
            Warehouse_Address: "",
            Credit_Limit: 0,
            Dealer: false,
            Accounts_Receivables: 0,
            Credit_Terms: "",
            Discount_Scheme: 0,
            Agent: false,
            Contacts_Order: "",
            Contacts_Accounting: "",
            Telephone_Number: "",
            Fax_Number: "",
            Email: "",
            Rounded_Payment: false,
            Usual_Ordered_Item: "",
            Witholding_Tax: 0,
            Vat_Exemption: false,
            Collection_Period: "",
            Combine_Items: true,
            Overpayment_Counter: 0
        };
        this.formErrors = {
            'name': '',
            'telephoneNumber': '',
            'discountScheme': '',
            'contactsOrder': '',
            'creditLimit': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Client Name is required.'
            },
            'telephoneNumber': {
                'required': 'Telephone Number is required.'
            },
            'discountScheme': {
                'required': 'Discount Scheme is required.'
            },
            'contactsOrder': {
                'required': 'Contact Persons from Sales is required.'
            },
            'creditLimit': {
                'required': 'Credit Limit is required.'
            }
        };
    }
    ClientFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    ClientFormComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.clientForm) {
            return;
        }
        this.clientForm = this.currentForm;
        if (this.clientForm) {
            this.clientForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    ClientFormComponent.prototype.onValueChanged = function (data) {
        if (!this.clientForm) {
            return;
        }
        var form = this.clientForm.form;
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
    ClientFormComponent.prototype.setTab = function (tabNumber) {
        this.tabNum = tabNumber;
    };
    /* CRUD Functions */
    ClientFormComponent.prototype.addClient = function () {
        var _this = this;
        if (this.clientId > 0) {
            this._service.updateClient(this.client)
                .subscribe(function (client) {
                _this.result = client;
                if (_this.result.isError == false) {
                    _this._location.back();
                }
            }, function (error) { return _this.errorMessage = error; });
        }
        else {
            var clientForm = {
                "Client": this.client,
                "CompetitorDiscountSchemes": this.competitorDiscountSchemes
            };
            this._service.addClient(clientForm)
                .subscribe(function (client) {
                _this.result = client;
                if (_this.result.isError == false) {
                    _this._location.back();
                }
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    ClientFormComponent.prototype.addCompetitorDS = function () {
        this.competitorDs = {
            "CompetitorId": this.selectedCompetitor.Id,
            "Name": this.selectedCompetitor.Name,
            "DiscountScheme": this.selectedDs,
            "Competitor": this.selectedCompetitor
        };
        this.removeFromCompetitorList(this.selectedCompetitor.Id);
        this.competitorDiscountSchemes.push(this.competitorDs);
        this.selectedCompetitor = null;
        this.selectedDs = null;
    };
    ClientFormComponent.prototype.removeFromCompetitorList = function (id) {
        var _this = this;
        this.resultCompetitors.ResultList.forEach(function (item, index) {
            if (item.Id == id) {
                _this.resultCompetitors.ResultList.splice(index, 1);
            }
        });
    };
    ClientFormComponent.prototype.deleteCompetitorDS = function (id, competitor) {
        var _this = this;
        this.competitorDiscountSchemes.forEach(function (item, index) {
            if (item.CompetitorId == id) {
                _this.competitorDiscountSchemes.splice(index, 1);
            }
        });
        this.resultCompetitors.ResultList.push(competitor);
    };
    /* Navigation Functions */
    ClientFormComponent.prototype.onBack = function () {
        this._location.back();
    };
    /* Initialize */
    ClientFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.clientId = +params['id'];
            if (_this.clientId != 0 && !isNaN(_this.clientId)) {
                _this.getClient(_this.clientId);
            }
        });
        this._adminService.getCompetitors()
            .subscribe(function (result) { _this.resultCompetitors = result; _this.realListCompetitors = result.ResultList; }, function (error) { return _this.errorMessage = error; });
    };
    /* Function to Get Client Info */
    ClientFormComponent.prototype.getClient = function (id) {
        var _this = this;
        this._service.getClientInfo(id).subscribe(function (result) { _this.result = result; _this.client = _this.result.Result; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.ViewChild('clientForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], ClientFormComponent.prototype, "currentForm", void 0);
    ClientFormComponent = __decorate([
        core_1.Component({
            templateUrl: 'wwwroot/src/clientLandingPage/clientForm/clientForm.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, clientService_service_1.ClientService, common_1.Location, adminService_service_1.AdminService])
    ], ClientFormComponent);
    return ClientFormComponent;
}());
exports.ClientFormComponent = ClientFormComponent;
//# sourceMappingURL=clientForm.component.js.map