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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/share');
var LocalStorageService = (function () {
    function LocalStorageService() {
        var _this = this;
        this.storage = localStorage;
        this._collection = "Unauthorized";
        this.collection$ = new Observable_1.Observable(function (observer) {
            _this._collectionObserver = observer;
        }).share();
    }
    LocalStorageService.prototype.retrieve = function (key) {
        var item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        if (key == "IsAuthenticated") {
            this._collection = value;
            this._collectionObserver.next(this._collection);
        }
        this.storage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.prototype.load = function () {
        this._collectionObserver.next(this._collection);
    };
    LocalStorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=localStorageService.service.js.map