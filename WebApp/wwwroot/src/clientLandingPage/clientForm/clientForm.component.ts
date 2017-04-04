import { Component, AfterViewChecked, ViewChild, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { ClientService } from "../clientService.service";
import { AdminService } from "../../adminLandingPage/adminService.service";

import { IClient } from '../../interfaces/client.interface';
import { IMessageResult } from '../../interfaces/messageResult.interface';

@Component({
    templateUrl: 'wwwroot/src/clientLandingPage/clientForm/clientForm.component.html'
})
export class ClientFormComponent implements OnInit {

    constructor(private _router: Router, private _route: ActivatedRoute, private _service: ClientService, private _location: Location, private _adminService: AdminService) {
       
    }   
    /* Competitor Discount Schemes Variables */
    competitorDiscountSchemes: any[] = [];
    competitorDs: any = {};
    selectedCompetitor: any;
    selectedDs: number;
    resultCompetitors: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
    realListCompetitors: any[];
    editForm: any = {};
    editFormData: any = {};

    clientId: number;
    tabNum: number = 1;
    result: IMessageResult = {
        isError: false,
        Result: null,
        ResultList: null,
        Message: ''
    };
   
    errorMessage: string;
    client: IClient = {
        Id: 0,
        Name: "",
        TIN: "",
        Office_Address: "",
        Warehouse_Address: "",
        Credit_Limit: 0,
        Dealer: false,
        Accounts_Receivables: 0,
        Credit_Terms: "",
        Discount_Scheme: 0,
        Agent: "",
        Contacts_Order: "",
        Contacts_Accounting: "",
        Telephone_Number: "",
        Fax_Number: "",
        Email: "",
        Rounded_Payment: false,
        Usual_Ordered_Item: "",
        Witholding_Tax: 0,
        Vat_Exemption: false,
        Collection_Period: "",
        Combine_Items: true,
        Overpayment_Counter: 0
    };

    /* Form Validations */
    clientForm: NgForm;
    @ViewChild('clientForm') currentForm: NgForm;

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.clientForm) { return; }
        this.clientForm = this.currentForm;
        if (this.clientForm) {
            this.clientForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.clientForm) { return; }
        const form = this.clientForm.form;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'name': '',
        'telephoneNumber': '',
        'discountScheme': '',
        'contactsOrder': '',
        'creditLimit': ''
    };

    validationMessages = {
        'name': {
            'required': 'Client Name is required.'
        }, 
        'telephoneNumber': {
            'required': 'Telephone Number is required.'
        },
        'discountScheme': {
            'required': 'Discount Scheme is required.'
        },
        'contactsOrder': {
            'required': 'Contact Persons from Sales is required.'
        },
        'creditLimit': {
            'required': 'Credit Limit is required.'
        }
    };

    /* Pagination Functions */
    setTab(tabNumber: number): void {
        this.tabNum = tabNumber;
    }

    /* CRUD Functions */
    addClient(): void {
        if (this.clientId > 0) {
            var clientForm: any = {
                "Client": this.client,
                "CompetitorDiscountSchemes": this.competitorDiscountSchemes
            };
            this._service.updateClient(clientForm)
                .subscribe(client => {
                    this.result = client;
                    if (this.result.isError == false) {
                        this._location.back();
                    }
                },
                error => this.errorMessage = <any>error);
        } else {
            var clientForm: any = {
                "Client": this.client,
                "CompetitorDiscountSchemes": this.competitorDiscountSchemes
            };
            this._service.addClient(clientForm)
                .subscribe(client => {
                    this.result = client;
                    if (this.result.isError == false) {
                        this._location.back();
                    }
                },
                error => this.errorMessage = <any>error);
        }
       
    }
    edit(id: number): void {
        this.editForm[id] = true;
    }
    addCompetitorDS(): void {        
        this.competitorDs = {
            "CompetitorId": this.selectedCompetitor.Id,
            "Name": this.selectedCompetitor.Name,
            "DiscountScheme": this.selectedDs,
            "Competitor": this.selectedCompetitor
        };
        this.editForm[this.selectedCompetitor.Id] = false;
        this.editFormData[this.selectedCompetitor.Id] = this.selectedDs;
        this.removeFromCompetitorList(this.selectedCompetitor.Id);
        this.competitorDiscountSchemes.push(this.competitorDs);
        this.selectedCompetitor = null;
        this.selectedDs = null;        
    }
    updateDs(id: number): void {
        this.competitorDiscountSchemes.forEach((item, index) => {
            if (item.CompetitorId == id) {
                item.DiscountScheme = this.editFormData[id];
            }
        });
        this.editForm[id] = false;
        console.log(this.competitorDiscountSchemes);
    }
    removeFromCompetitorList(id: number): void {
        this.resultCompetitors.ResultList.forEach((item, index) => {
            if (item.Id == id) {
                this.resultCompetitors.ResultList.splice(index, 1);
            }
        });
    }
    deleteCompetitorDS(id: number, competitor:any): void {
        this.competitorDiscountSchemes.forEach((item, index) => {
            if (item.CompetitorId == id) {
                this.competitorDiscountSchemes.splice(index, 1);
            }
        });
        this.resultCompetitors.ResultList.push(competitor);
    }
    /* Navigation Functions */
    onBack(): void {
        this._location.back();
    }

    /* Initialize */
    ngOnInit(): void {
        this._route.params.subscribe(
            params => {
                this.clientId = +params['id'];
                if (this.clientId != 0 && !isNaN(this.clientId)) {
                    this.getClient(this.clientId);
                }
            });
        this._adminService.getCompetitors()
            .subscribe(
            result => {
                this.resultCompetitors = result;
                this.realListCompetitors = result.ResultList;
            },
            error => this.errorMessage = <any>error);
    }

    /* Function to Get Client Info */
    getClient(id: number) {
        this._service.getClientInfo(id).subscribe(
            result => {
                this.result = result;
                this.client = this.result.Result;
                var dsSchemes: any[] = this.result.Result.CompetitorDiscountSchemes;
                for (let entry of dsSchemes) {
                    this.editForm[entry.CompetitorId] = false;
                    this.editFormData[entry.CompetitorId] = entry.DiscountScheme;
                    var ds: any = {
                        "CompetitorId": entry.CompetitorId,
                        "Name": entry.CompetitorEntity.Name,
                        "DiscountScheme": entry.DiscountScheme,
                        "Competitor": entry.CompetitorEntity
                    }
                    this.competitorDiscountSchemes.push(ds);
                    this.removeFromCompetitorList(entry.CompetitorId);
                }
            },
            error => this.errorMessage = <any>error);
    }
}
