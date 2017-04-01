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
var MainProductPageComponent = (function () {
    function MainProductPageComponent(_router, _route) {
        this._router = _router;
        this._route = _route;
        this.tabNum = 1;
    }
    /* Navigation */
    MainProductPageComponent.prototype.setTab = function (id) {
        this.tabNum = id;
    };
    /* Initializer and Native Functions */
    MainProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var tab = +params['tabNum'];
            console.log(tab);
            if (!isNaN(tab)) {
                _this.tabNum = 1;
            }
            else {
                _this.tabNum = 1;
            }
        });
    };
    MainProductPageComponent = __decorate([
        core_1.Component({
            selector: 'web-view-product',
            templateUrl: 'wwwroot/src/productLandingPage/mainProductPage/mainProductPage.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], MainProductPageComponent);
    return MainProductPageComponent;
}());
exports.MainProductPageComponent = MainProductPageComponent;
//# sourceMappingURL=mainProductPage.component.js.map