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
var shared_module_1 = require('../shared/shared.module');
//Components
var sosList_component_1 = require('./sosList/sosList.component');
var sosForm_component_1 = require('./sosForm/sosForm.component');
//Services
var sos_service_1 = require('./sos.service');
var clientService_service_1 = require('../clientLandingPage/clientService.service');
var productService_service_1 = require('../productLandingPage/productService.service');
var utilities_service_1 = require('../utilities/utilities.service');
var authGuard_1 = require('../routeGuards/authGuard');
var SOSModule = (function () {
    function SOSModule() {
    }
    SOSModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild([
                    { path: 'sos-list', component: sosList_component_1.SOSListComponent, canActivate: [authGuard_1.AuthAccessGuard] },
                    { path: 'sos-form', component: sosForm_component_1.SOSFormComponent }
                ]), shared_module_1.SharedModule],
            declarations: [sosList_component_1.SOSListComponent, sosForm_component_1.SOSFormComponent],
            providers: [sos_service_1.SosService, clientService_service_1.ClientService, productService_service_1.ProductService, utilities_service_1.UtilitiesService, authGuard_1.AuthAccessGuard, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], SOSModule);
    return SOSModule;
}());
exports.SOSModule = SOSModule;
//# sourceMappingURL=sos.module.js.map