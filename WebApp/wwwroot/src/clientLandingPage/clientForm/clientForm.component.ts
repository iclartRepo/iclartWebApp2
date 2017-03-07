import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IClient } from '../../interfaces/client.interface';

@Component({
    templateUrl: 'wwwroot/src/clientLandingPage/clientForm/clientForm.component.html'
})
export class ClientFormComponent {

    tabNum: number = 1;

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
        Discount_Scheme: "",
        Agent: false,
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

    constructor(private _route: Router) {
    }    

    /* Pagination Functions */
    setTab(tabNumber: number): void {
        this.tabNum = tabNumber;
    }

    /* Styling Functions */
   

    /* Navigation Functions */
    onBack(): void {
        this._route.navigate(['/clients']);
    }
}
