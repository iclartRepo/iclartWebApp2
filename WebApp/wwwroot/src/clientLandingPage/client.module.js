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
//Components
var clientList_component_1 = require('./clientList/clientList.component');
var clientForm_component_1 = require('./clientForm/clientForm.component');
var viewClient_component_1 = require('./viewClient/viewClient.component');
//Services
var clientService_service_1 = require('./clientService.service');
var ClientModule = (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild([
                    { path: 'client-form/:id', component: clientForm_component_1.ClientFormComponent },
                    { path: 'client-info/:id', component: viewClient_component_1.ClientViewComponent },
                    { path: 'client-form', component: clientForm_component_1.ClientFormComponent },
                    { path: 'clients', component: clientList_component_1.ClientListComponent }
                ]), shared_module_1.SharedModule],
            declarations: [clientList_component_1.ClientListComponent,
                clientForm_component_1.ClientFormComponent,
                viewClient_component_1.ClientViewComponent],
            providers: [clientService_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [])
    ], ClientModule);
    return ClientModule;
}());
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map