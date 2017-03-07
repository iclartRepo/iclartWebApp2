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
var ClientFormComponent = (function () {
    function ClientFormComponent(_route) {
        this._route = _route;
        this.tabNum = 1;
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
            Discount_Scheme: "",
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
    }
    /* Pagination Functions */
    ClientFormComponent.prototype.setTab = function (tabNumber) {
        this.tabNum = tabNumber;
    };
    /* Styling Functions */
    /* Navigation Functions */
    ClientFormComponent.prototype.onBack = function () {
        this._route.navigate(['/clients']);
    };
    ClientFormComponent = __decorate([
        core_1.Component({
            templateUrl: 'wwwroot/src/clientLandingPage/clientForm/clientForm.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ClientFormComponent);
    return ClientFormComponent;
}());
exports.ClientFormComponent = ClientFormComponent;
//# sourceMappingURL=clientForm.component.js.map