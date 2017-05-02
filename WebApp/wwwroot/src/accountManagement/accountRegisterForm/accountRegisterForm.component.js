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
var AccountRegisterFormComponent = (function () {
    function AccountRegisterFormComponent(_router, _route, _location, _authService) {
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
        this.resultRoles = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.formErrors = {
            'email': '',
            'role': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.'
            },
            'role': {
                'required': 'Role is required.'
            }
        };
    }
    AccountRegisterFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    AccountRegisterFormComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.registerForm) {
            return;
        }
        this.registerForm = this.currentForm;
        if (this.registerForm) {
            this.registerForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    AccountRegisterFormComponent.prototype.onValueChanged = function (data) {
        if (!this.registerForm) {
            return;
        }
        var form = this.registerForm.form;
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
    AccountRegisterFormComponent.prototype.register = function () {
        var _this = this;
        this._authService.registerUser(this.accountEmail, this.selectedRole)
            .subscribe(function (register) {
            _this.result = register;
            if (_this.result.isError == false) {
                _this._location.back();
            }
        });
    };
    /* Navigation Functions */
    AccountRegisterFormComponent.prototype.onBack = function () {
        this._location.back();
    };
    /* Initialize */
    AccountRegisterFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getAllRoles()
            .subscribe(function (roles) {
            _this.resultRoles = roles;
        });
    };
    __decorate([
        core_1.ViewChild('registerForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], AccountRegisterFormComponent.prototype, "currentForm", void 0);
    AccountRegisterFormComponent = __decorate([
        core_1.Component({
            templateUrl: 'wwwroot/src/accountManagement/accountRegisterForm/accountRegisterForm.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, common_1.Location, authService_service_1.AuthService])
    ], AccountRegisterFormComponent);
    return AccountRegisterFormComponent;
}());
exports.AccountRegisterFormComponent = AccountRegisterFormComponent;
//# sourceMappingURL=accountRegisterForm.component.js.map