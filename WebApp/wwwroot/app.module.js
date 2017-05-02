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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
/* Main Components */
var app_component_1 = require('./src/app/app.component');
var header_component_1 = require('./src/header/header.component');
var login_component_1 = require('./src/login/login.component');
var mainLandingPage_component_1 = require('./src/mainLandingPage/mainLandingPage.component');
var accountForgotPassword_component_1 = require("./src/accountManagement/accountForgotPassword/accountForgotPassword.component");
var accountResetPassword_component_1 = require('./src/accountManagement/accountResetPassword/accountResetPassword.component');
var accountResetExpired_component_1 = require("./src/accountManagement/accountResetExpired/accountResetExpired.component");
/* Modules */
var forms_1 = require('@angular/forms');
var client_module_1 = require('./src/clientLandingPage/client.module');
var admin_module_1 = require('./src/adminLandingPage/admin.module');
var product_module_1 = require('./src/productLandingPage/product.module');
var account_module_1 = require('./src/accountManagement/account.module');
var authService_service_1 = require('./src/accountServices/authService.service');
var localStorageService_service_1 = require('./src/universal/localStorageService.service');
var authGuard_1 = require('./src/routeGuards/authGuard');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: login_component_1.LoginComponent },
                    { path: 'home', component: mainLandingPage_component_1.MainComponent, canActivate: [authGuard_1.AuthAccessGuard] },
                    { path: 'forgot-password', component: accountForgotPassword_component_1.AccountForgotPasswordFormComponent },
                    { path: 'reset-password/:id', component: accountResetPassword_component_1.AccountResetPasswordFormComponent },
                    { path: 'reset-expired', component: accountResetExpired_component_1.AccountResetExpiredComponent }
                ]),
                http_1.HttpModule,
                forms_1.FormsModule,
                client_module_1.ClientModule,
                admin_module_1.AdminModule,
                product_module_1.ProductModule,
                account_module_1.AccountManagementModule],
            declarations: [app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                login_component_1.LoginComponent,
                mainLandingPage_component_1.MainComponent,
                accountForgotPassword_component_1.AccountForgotPasswordFormComponent,
                accountResetPassword_component_1.AccountResetPasswordFormComponent,
                accountResetExpired_component_1.AccountResetExpiredComponent],
            bootstrap: [app_component_1.AppComponent, header_component_1.HeaderComponent],
            providers: [authService_service_1.AuthService, localStorageService_service_1.LocalStorageService, authGuard_1.AuthAccessGuard, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map