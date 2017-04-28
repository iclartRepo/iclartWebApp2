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
var authService_service_1 = require('../../accountServices/authService.service');
var AccountForgotPasswordFormComponent = (function () {
    function AccountForgotPasswordFormComponent(_router, _route, _location, _authService) {
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._authService = _authService;
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.formErrors = {
            'username': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Email is required.'
            }
        };
    }
    AccountForgotPasswordFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    AccountForgotPasswordFormComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.forgotPasswordForm) {
            return;
        }
        this.forgotPasswordForm = this.currentForm;
        if (this.forgotPasswordForm) {
            this.forgotPasswordForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    AccountForgotPasswordFormComponent.prototype.onValueChanged = function (data) {
        if (!this.forgotPasswordForm) {
            return;
        }
        var form = this.forgotPasswordForm.form;
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
    AccountForgotPasswordFormComponent.prototype.forgot = function () {
        var _this = this;
        this._authService.forgotPassword(this.email)
            .subscribe(function (fp) {
            _this.result = fp;
            _this._router.navigate([""]);
        }, function (error) { return _this.errorMessage = error; });
    };
    /* Navigation Functions */
    AccountForgotPasswordFormComponent.prototype.onBack = function () {
        this._location.back();
    };
    /* Initialize */
    AccountForgotPasswordFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('forgotPasswordForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], AccountForgotPasswordFormComponent.prototype, "currentForm", void 0);
    AccountForgotPasswordFormComponent = __decorate([
        core_1.Component({
            templateUrl: 'wwwroot/src/accountManagement/accountForgotPassword/accountForgotPassword.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, common_1.Location, authService_service_1.AuthService])
    ], AccountForgotPasswordFormComponent);
    return AccountForgotPasswordFormComponent;
}());
exports.AccountForgotPasswordFormComponent = AccountForgotPasswordFormComponent;
//# sourceMappingURL=accountForgotPassword.component.js.map