import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/share';

import { IMessageResult } from '../interfaces/messageResult.interface';

@Injectable()

export class LocalStorageService {
    private storage: any;

    public collection$: Observable<string>;
    private _collectionObserver: any;
    private _collection:string;

    constructor() {
        this.storage = localStorage;

        this._collection = "Unauthorized";
    
        this.collection$ = new Observable((observer:any)  => {
            this._collectionObserver = observer;
        }).share();
    }

    retrieve(key: string): any {
        var item = this.storage.getItem(key);

        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }

        return;
    }

    setItem(key: string, value: any) {
        if (key == "IsAuthenticated") 
        {
            this._collection = value;
            this._collectionObserver.next(this._collection);
        }
        this.storage.setItem(key, JSON.stringify(value));
    }

    load() {
        this._collectionObserver.next(this._collection);
    }
}

