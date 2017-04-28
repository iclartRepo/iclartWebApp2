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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.baseUrl = "/Account/";
        this.antiForgeryToken = document.getElementsByName("__RequestVerificationToken")[0];
    }
    AuthService.prototype.isAuthenticated = function () {
        return this._http.get(this.baseUrl + "IsAuthenticated")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.getUsers = function () {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "GetUsers", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.searchUser = function (userName) {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "userName": userName
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "SearchUsers", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.getAllRoles = function () {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "GetRoles", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.getRolesOfUser = function () {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "GetRolesofUser", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.forgotPassword = function (email) {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "email": email
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "ForgotPassword", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.resetPassword = function (username, newPassword) {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "username": username,
            "newPassword": newPassword
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "ResetPassword", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.registerUser = function (email, role) {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "email": email,
            "role": role
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "Register", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.changePassword = function (oldPassword, newPassword) {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "oldPassword": oldPassword,
            "newPassword": newPassword
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "ChangePassword", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.deleteUser = function (id) {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "id": id
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "DeleteUser", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (loginForm) {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "username": loginForm.Email,
            "password": loginForm.Password
        };
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest' });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "Login", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value
        };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest' });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = this.serialize(postedData);
        return this._http.post(this.baseUrl + "LogOff", params, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.serialize = function (obj) {
        var params = new http_1.URLSearchParams();
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var element = obj[key];
                params.set(key, element);
            }
        }
        return params;
    };
    AuthService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=authService.service.js.map