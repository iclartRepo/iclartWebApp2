import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IMessageResult } from '../interfaces/messageResult.interface';

@Injectable()

export class ProductService {
    private baseUrl: string = "/Product/";
    constructor(private _http: Http) { }

    getProductCategories(): Observable<IMessageResult> {
        return this._http.get(this.baseUrl + "GetProductCategories")
            .map((response: Response) => <IMessageResult>response.json())
            .catch(this.handleError);
    }
    addProductCategory(name: string): Observable<IMessageResult> {
        return this._http.post(this.baseUrl + "AddProductCategory", { name: name })
            .map((response: Response) => <IMessageResult>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    deleteProductCategory(id: number): Observable<IMessageResult> {
        return this._http.delete(this.baseUrl + "DeleteProductCategory?id=" + id)
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

