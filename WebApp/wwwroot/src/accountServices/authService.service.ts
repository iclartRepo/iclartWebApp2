﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IMessageResult } from '../interfaces/messageResult.interface';

@Injectable()

export class AuthService {
    private baseUrl: string = "/Account/";
    antiForgeryToken: any;
    constructor(private _http: Http) {
        this.antiForgeryToken = document.getElementsByName("__RequestVerificationToken")[0];
    }

    isAuthenticated(): Observable<boolean> {
        return this._http.get(this.baseUrl + "IsAuthenticated")
            .map((response: Response) => <boolean>response.json())
            .catch(this.handleError);
    }
    getUsers(): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "GetUsers", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    searchUser(userName:string): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "userName": userName
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "SearchUsers", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getAllRoles(): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "GetRoles", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
 
    getRolesOfUser(): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "GetRolesofUser", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    forgotPassword(email: string): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "email": email
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "ForgotPassword", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    resetPassword(username: string, newPassword:string): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "username": username,
            "newPassword": newPassword
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "ResetPassword", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    registerUser(email:string, role:string): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "email": email,
            "role" : role
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "Register", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    changePassword(oldPassword: string, newPassword: string): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "oldPassword": oldPassword,
            "newPassword": newPassword
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "ChangePassword", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    deleteUser(id:number): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "id": id
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "DeleteUser", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    login(loginForm: any): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value,
            "username": loginForm.Email,
            "password": loginForm.Password
        };
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest' });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "Login", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    logout(): Observable<IMessageResult> {
        var postedData = {
            "__RequestVerificationToken": this.antiForgeryToken.value
        };
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest' });
        let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = this.serialize(postedData);
        return this._http.post(this.baseUrl + "LogOff", params, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    serialize(obj: any) {
        let params: URLSearchParams = new URLSearchParams();
        for (var key in obj) {
          
                if (obj.hasOwnProperty(key)) {
                    var element = obj[key];

                    params.set(key, element);
                }
          
          
        }

        return params;
    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}

