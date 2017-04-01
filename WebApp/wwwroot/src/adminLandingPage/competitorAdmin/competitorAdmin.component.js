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
var adminService_service_1 = require('../adminService.service');
var CompetitorAdminComponent = (function () {
    function CompetitorAdminComponent(_router, _route, _service) {
        this._router = _router;
        this._route = _route;
        this._service = _service;
        this.newCompetitor = "";
        this.editForm = {};
        this.editFormData = {};
        this.result = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
        this.resultForm = {
            isError: false,
            Result: null,
            ResultList: null,
            Message: ''
        };
    }
    /* CRUD Functionalities  */
    CompetitorAdminComponent.prototype.addCompetitor = function () {
        var _this = this;
        this._service.addCompetitor(this.newCompetitor)
            .subscribe(function (addResponse) {
            _this.resultForm = addResponse;
            if (_this.resultForm.isError == false) {
                _this.getCompetitors();
                _this.newCompetitor = "";
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    CompetitorAdminComponent.prototype.getCompetitors = function () {
        var _this = this;
        this._service.getCompetitors()
            .subscribe(function (competitors) {
            _this.result = competitors;
            _this.editForm = {};
            _this.editFormData = {};
            for (var _i = 0, _a = _this.result.ResultList; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.editForm[entry.Id] = false;
                _this.editFormData[entry.Id] = entry.Name;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    CompetitorAdminComponent.prototype.deleteCompetitor = function () {
        var _this = this;
        this._service.deleteCompetitor(this.competitorToDelete)
            .subscribe(function (deleteResponse) {
            _this.resultForm = deleteResponse;
            if (_this.resultForm.isError == false) {
                _this.getCompetitors();
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    CompetitorAdminComponent.prototype.updateCompetitor = function (id) {
        var _this = this;
        this._service.updateCompetitor(id, this.editFormData[id])
            .subscribe(function (competitor) {
            _this.editForm[id] = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    CompetitorAdminComponent.prototype.edit = function (id) {
        this.editForm[id] = true;
    };
    CompetitorAdminComponent.prototype.setCompetitor = function (id) {
        this.competitorToDelete = id;
    };
    /* Validation */
    CompetitorAdminComponent.prototype.checkIfExist = function (name, id) {
        for (var _i = 0, _a = this.result.ResultList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.Name == name && entry.Id != id) {
                return true;
            }
        }
        return false;
    };
    /* Initializer and Native Functions */
    CompetitorAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getCompetitors()
            .subscribe(function (competitors) {
            _this.result = competitors;
            for (var _i = 0, _a = _this.result.ResultList; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.editForm[entry.Id] = false;
                _this.editFormData[entry.Id] = entry.Name;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    CompetitorAdminComponent = __decorate([
        core_1.Component({
            selector: 'web-view-client',
            templateUrl: 'wwwroot/src/adminLandingPage/competitorAdmin/competitorAdmin.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, adminService_service_1.AdminService])
    ], CompetitorAdminComponent);
    return CompetitorAdminComponent;
}());
exports.CompetitorAdminComponent = CompetitorAdminComponent;
//# sourceMappingURL=competitorAdmin.component.js.map