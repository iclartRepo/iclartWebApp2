import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IMessageResult } from '../../interfaces/messageResult.interface';

import { SosService } from '../sos.service';
@Component({
    selector: 'web-sos-list',
    templateUrl: 'wwwroot/src/sosLandingPage/sosList/sosList.component.html'
})
export class SOSListComponent {

    constructor(private _sosService: SosService) { }

    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;

    /* Initializer and Native Functions */
    ngOnInit(): void {
        this._sosService.getSosList()
            .subscribe(sos => {
                this.result = sos;
            },
            error => this.errorMessage = <any>error);
    }
}
