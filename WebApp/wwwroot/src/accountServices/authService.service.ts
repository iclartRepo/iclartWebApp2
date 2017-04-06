import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IMessageResult } from '../interfaces/messageResult.interface';

@Injectable()

export class AuthService {
    private baseUrl: string = "/Account/";
    constructor(private _http: Http) { }

    isAuthenticated(): Observable<boolean> {
        return this._http.get(this.baseUrl + "IsAuthenticated")
            .map((response: Response) => <boolean>response.json())
            .catch(this.handleError);
    }
    login(loginForm: any): Observable<IMessageResult> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.baseUrl + "Login", { "model": loginForm }, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    logout(): Observable<IMessageResult> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.baseUrl + "LogOff", {}, options)
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}

