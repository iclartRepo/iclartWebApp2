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
var shared_module_1 = require('../shared/shared.module');
var account_component_1 = require('./accountLandingPage/account.component');
var rolesList_component_1 = require('./rolesList/rolesList.component');
var accountRegisterForm_component_1 = require('./accountRegisterForm/accountRegisterForm.component');
var authGuard_1 = require('../routeGuards/authGuard');
var AccountManagementModule = (function () {
    function AccountManagementModule() {
    }
    AccountManagementModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild([
                    { path: "accounts", component: account_component_1.AccountManagementComponent, canActivate: [authGuard_1.AuthAccessGuard] },
                    { path: "add-account", component: accountRegisterForm_component_1.AccountRegisterFormComponent, canActivate: [authGuard_1.AuthAccessGuard] }
                ]), shared_module_1.SharedModule],
            declarations: [account_component_1.AccountManagementComponent, rolesList_component_1.RolesListComponent, accountRegisterForm_component_1.AccountRegisterFormComponent],
            providers: [authGuard_1.AuthAccessGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AccountManagementModule);
    return AccountManagementModule;
}());
exports.AccountManagementModule = AccountManagementModule;
//# sourceMappingURL=account.module.js.map