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
var authService_service_1 = require('../accountServices/authService.service');
var localStorageService_service_1 = require("../universal/localStorageService.service");
var HeaderComponent = (function () {
    function HeaderComponent(_authService, _localStorageService, _router) {
        this._authService = _authService;
        this._localStorageService = _localStorageService;
        this._router = _router;
    }
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this._authService.logout()
            .subscribe(function (result) {
            if (result.isError == false) {
                _this._localStorageService.setItem("IsAuthenticated", "Unauthorized");
                _this._router.navigate(["/"]);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.isAuthenticated()
            .subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
            if (_this.isAuthenticated == true) {
                _this._localStorageService.setItem("IsAuthenticated", "Authorized");
                _this._localStorageService.load();
            }
            else {
                _this._localStorageService.setItem("IsAuthenticated", "Unauthorized");
                _this._localStorageService.load();
            }
        }, function (error) { return _this.errorMessage = error; });
        this._localStorageService.collection$.subscribe(function (authenticated) {
            if (authenticated == "Authorized") {
                _this.isAuthenticated = true;
            }
            else {
                _this.isAuthenticated = false;
            }
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'web-header',
            templateUrl: 'wwwroot/src/header/header.component.html'
        }), 
        __metadata('design:paramtypes', [authService_service_1.AuthService, localStorageService_service_1.LocalStorageService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map