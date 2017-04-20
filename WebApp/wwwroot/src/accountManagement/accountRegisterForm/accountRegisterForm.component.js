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
var AccountRegisterFormComponent = (function () {
    function AccountRegisterFormComponent(_router, _route, _location) {
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
    }
    /* Form Validations */
    //clientForm: NgForm;
    //@ViewChild('clientForm') currentForm: NgForm;
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
    /* Navigation Functions */
    AccountRegisterFormComponent.prototype.onBack = function () {
        this._location.back();
    };
    /* Initialize */
    AccountRegisterFormComponent.prototype.ngOnInit = function () {
    };
    AccountRegisterFormComponent = __decorate([
        core_1.Component({
            templateUrl: 'wwwroot/src/accountManagement/accountRegisterForm/accountRegisterForm.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, common_1.Location])
    ], AccountRegisterFormComponent);
    return AccountRegisterFormComponent;
}());
exports.AccountRegisterFormComponent = AccountRegisterFormComponent;
//# sourceMappingURL=accountRegisterForm.component.js.map