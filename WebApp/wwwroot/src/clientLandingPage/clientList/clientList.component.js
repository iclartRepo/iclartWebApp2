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
var clientService_service_1 = require('../clientService.service');
var ClientListComponent = (function () {
    function ClientListComponent(_route, _clientService) {
        this._route = _route;
        this._clientService = _clientService;
    }
    ClientListComponent.prototype.addClient = function () {
        this._route.navigate(['/client-form']);
    };
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientService.getClients()
            .subscribe(function (peoples) { return _this.clients = peoples; }, function (error) { return _this.errorMessage = error; });
    };
    ClientListComponent = __decorate([
        core_1.Component({
            selector: 'web-client-list',
            templateUrl: 'wwwroot/src/clientLandingPage/clientList/clientList.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, clientService_service_1.ClientService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=clientList.component.js.map