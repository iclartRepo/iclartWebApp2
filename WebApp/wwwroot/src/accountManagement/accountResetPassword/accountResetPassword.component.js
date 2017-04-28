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
var AccountResetPasswordFormComponent = (function () {
    function AccountResetPasswordFormComponent(_router, _route, _location, _authService) {
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
            'newPassword': ''
        };
        this.validationMessages = {
            'newPassword': {
                'required': 'New Password is required.'
            }
        };
    }
    AccountResetPasswordFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    AccountResetPasswordFormComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.resetPasswordForm) {
            return;
        }
        this.resetPasswordForm = this.currentForm;
        if (this.resetPasswordForm) {
            this.resetPasswordForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    AccountResetPasswordFormComponent.prototype.onValueChanged = function (data) {
        if (!this.resetPasswordForm) {
            return;
        }
        var form = this.resetPasswordForm.form;
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
    AccountResetPasswordFormComponent.prototype.reset = function () {
        var _this = this;
        this._authService.resetPassword(this.encodedEmail, this.newPassword)
            .subscribe(function (reset) {
            _this.result = reset;
            if (_this.result.isError == false) {
                _this._router.navigate([""]);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    /* Navigation Functions */
    AccountResetPasswordFormComponent.prototype.onBack = function () {
        this._location.back();
    };
    /* Initialize */
    AccountResetPasswordFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var name = params['id'];
            _this.encodedEmail = name;
        });
    };
    __decorate([
        core_1.ViewChild('resetPasswordForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], AccountResetPasswordFormComponent.prototype, "currentForm", void 0);
    AccountResetPasswordFormComponent = __decorate([
        core_1.Component({
            templateUrl: 'wwwroot/src/accountManagement/accountResetPassword/accountResetPassword.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, common_1.Location, authService_service_1.AuthService])
    ], AccountResetPasswordFormComponent);
    return AccountResetPasswordFormComponent;
}());
exports.AccountResetPasswordFormComponent = AccountResetPasswordFormComponent;
//# sourceMappingURL=accountResetPassword.component.js.map