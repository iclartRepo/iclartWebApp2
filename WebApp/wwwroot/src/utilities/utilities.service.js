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
var UtilitiesService = (function () {
    function UtilitiesService() {
    }
    UtilitiesService.prototype.formatDate = function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var monthString = "";
        var dayString = "";
        if (month < 10) {
            monthString = "0" + month.toString();
        }
        else {
            monthString = month.toString();
        }
        if (day < 10) {
            dayString = "0" + day.toString();
        }
        else {
            dayString = day.toString();
        }
        return year + "-" + monthString + "-" + dayString;
    };
    UtilitiesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UtilitiesService);
    return UtilitiesService;
}());
exports.UtilitiesService = UtilitiesService;
//# sourceMappingURL=utilities.service.js.map