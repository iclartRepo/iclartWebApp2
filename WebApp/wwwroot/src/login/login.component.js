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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var authService_service_1 = require('../accountServices/authService.service');
var localStorageService_service_1 = require('../universal/localStorageService.service');
var LoginComponent = (function () {
    function LoginComponent(_authService, _localStorageService, _router) {
        this._authService = _authService;
        this._localStorageService = _localStorageService;
        this._router = _router;
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.formErrors = {
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Email is required.'
            },
            'password': {
                'required': 'Password is required.'
            }
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var loginForm = {
            "Email": this.email,
            "Password": this.password
        };
        this._authService.login(loginForm)
            .subscribe(function (login) {
            _this.result = login;
            if (_this.result.isError == false) {
                _this._localStorageService.setItem("IsAuthenticated", "Authorized");
                _this._router.navigate(['/home']);
                localStorage.setItem("ticket", _this.result.Result);
            }
            else {
                _this._localStorageService.setItem("IsAuthenticated", "Unauthorized");
                localStorage.setItem("ticket", _this.result.Result);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    LoginComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.loginForm) {
            return;
        }
        this.loginForm = this.currentForm;
        if (this.loginForm) {
            this.loginForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    LoginComponent.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm.form;
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
    __decorate([
        core_1.ViewChild('loginForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], LoginComponent.prototype, "currentForm", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'web-login',
            templateUrl: 'wwwroot/src/login/login.component.html'
        }), 
        __metadata('design:paramtypes', [authService_service_1.AuthService, localStorageService_service_1.LocalStorageService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map