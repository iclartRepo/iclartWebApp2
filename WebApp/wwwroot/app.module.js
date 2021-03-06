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
/* Main Components */
var app_component_1 = require('./src/app/app.component');
var header_component_1 = require('./src/header/header.component');
var mainLandingPage_component_1 = require('./src/mainLandingPage/mainLandingPage.component');
/* Modules */
var client_module_1 = require('./src/clientLandingPage/client.module');
var admin_module_1 = require('./src/adminLandingPage/admin.module');
var product_module_1 = require('./src/productLandingPage/product.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: mainLandingPage_component_1.MainComponent }
                ]),
                http_1.HttpModule,
                client_module_1.ClientModule,
                admin_module_1.AdminModule,
                product_module_1.ProductModule],
            declarations: [app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                mainLandingPage_component_1.MainComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map