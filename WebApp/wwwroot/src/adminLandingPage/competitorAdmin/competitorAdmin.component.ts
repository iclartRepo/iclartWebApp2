import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdminService } from '../adminService.service';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    selector: 'web-view-client',
    templateUrl: 'wwwroot/src/adminLandingPage/competitorAdmin/competitorAdmin.component.html'
})
export class CompetitorAdminComponent implements OnInit {

    newCompetitor: string = "";
    editForm: any = {};
    editFormData: any = {};
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    resultForm: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    errorMessage: string;



    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _service: AdminService) {
    }

    /* CRUD Functionalities  */
    addCompetitor(): void {
        this._service.addCompetitor(this.newCompetitor)
            .subscribe(addResponse => {
                this.resultForm = addResponse;
                if (this.resultForm.isError == false) {
                    this.getCompetitors();
                    this.newCompetitor = "";
                }
            },
            error => this.errorMessage = <any>error);
    }
    getCompetitors(): void {
        this._service.getCompetitors()
            .subscribe(competitors => {
                this.result = competitors;
                this.editForm = {};
                this.editFormData = {};
                for (let entry of this.result.ResultList) {
                    this.editForm[entry.Id] = false;
                    this.editFormData[entry.Id] = entry.Name;
                }
            },
            error => this.errorMessage = <any>error);
    }
    deleteCompetitor(id: number): void {
        this._service.deleteCompetitor(id)
            .subscribe(deleteResponse => {
                this.resultForm = deleteResponse;
                if (this.resultForm.isError == false) {
                    this.getCompetitors();
                }
            },
            error => this.errorMessage = <any>error);
    }
    updateCompetitor(id: number): void {
        this._service.updateCompetitor(id, this.editFormData[id])
            .subscribe(client => {
                this.editForm[id] = false;
            },
            error => this.errorMessage = <any>error);
    }
    edit(id: number): void {
        this.editForm[id] = true;
    }

    /* Validation */
    checkIfExist(name: string, id:number): boolean {         
        for (let entry of this.result.ResultList) {
            if (entry.Name == name && entry.Id != id) {
                return true;
            }
         }
        return false;
    }
    /* Initializer and Native Functions */
    ngOnInit(): void {
        this._service.getCompetitors()
            .subscribe(competitors => {
                this.result = competitors;
                for (let entry of this.result.ResultList) {
                    this.editForm[entry.Id] = false;
                    this.editFormData[entry.Id] = entry.Name;
                }
             },
            error => this.errorMessage = <any>error);
    }
}
