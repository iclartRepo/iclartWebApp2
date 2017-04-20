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
var authService_service_1 = require('../../accountServices/authService.service');
var AccountManagementComponent = (function () {
    function AccountManagementComponent(_authService) {
        this._authService = _authService;
        this.tabNum = 1;
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.resultDeletion = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
    }
    AccountManagementComponent.prototype.setTab = function (tab) {
        this.tabNum = tab;
    };
    AccountManagementComponent.prototype.setUser = function (id) {
        this.accountToDelete = id;
    };
    AccountManagementComponent.prototype.searchAccount = function () {
        var _this = this;
        this._authService.searchUser(this.accountSearch)
            .subscribe(function (users) {
            _this.result = users;
        }, function (error) { return _this.errorMessage = error; });
    };
    AccountManagementComponent.prototype.deleteAccount = function () {
        var _this = this;
        this._authService.deleteUser(this.accountToDelete)
            .subscribe(function (deleteResponse) {
            _this.resultDeletion = deleteResponse;
            if (_this.resultDeletion.isError == false) {
                _this.retrieveAccounts();
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    AccountManagementComponent.prototype.retrieveAccounts = function () {
        var _this = this;
        this._authService.getUsers()
            .subscribe(function (users) {
            _this.result = users;
        }, function (error) { return _this.errorMessage = error; });
    };
    /* Initializer and Native Functions */
    AccountManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getUsers()
            .subscribe(function (users) {
            _this.result = users;
        }, function (error) { return _this.errorMessage = error; });
    };
    AccountManagementComponent = __decorate([
        core_1.Component({
            selector: 'web-view-account',
            templateUrl: 'wwwroot/src/accountManagement/accountLandingPage/account.component.html'
        }), 
        __metadata('design:paramtypes', [authService_service_1.AuthService])
    ], AccountManagementComponent);
    return AccountManagementComponent;
}());
exports.AccountManagementComponent = AccountManagementComponent;
//# sourceMappingURL=account.component.js.map