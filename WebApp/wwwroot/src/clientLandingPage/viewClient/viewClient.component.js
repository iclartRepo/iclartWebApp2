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
var ClientViewComponent = (function () {
    function ClientViewComponent(_router, _route, _clientService) {
        this._router = _router;
        this._route = _route;
        this._clientService = _clientService;
        this.tabNum = 1;
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
    }
    /* Navigation Functions */
    ClientViewComponent.prototype.back = function () {
        this._router.navigate(['/clients']);
    };
    ClientViewComponent.prototype.editClient = function (id) {
        this._router.navigate(['/client-form', id]);
    };
    /* Pagination Functions */
    ClientViewComponent.prototype.setTab = function (tabNumber) {
        this.tabNum = tabNumber;
    };
    /* Function to Get Client Info */
    ClientViewComponent.prototype.getClient = function (id) {
        var _this = this;
        this._clientService.getClientInfo(id).subscribe(function (result) { return _this.result = result; }, function (error) { return _this.errorMessage = error; });
    };
    /* Initializer and Native Functions */
    ClientViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getClient(id);
        });
    };
    ClientViewComponent = __decorate([
        core_1.Component({
            selector: 'web-view-client',
            templateUrl: 'wwwroot/src/clientLandingPage/viewClient/viewClient.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, clientService_service_1.ClientService])
    ], ClientViewComponent);
    return ClientViewComponent;
}());
exports.ClientViewComponent = ClientViewComponent;
//# sourceMappingURL=viewClient.component.js.map