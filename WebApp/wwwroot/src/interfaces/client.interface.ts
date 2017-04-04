﻿export interface IClient {
    Id: number,
    Name: string,
    TIN: string,
    Office_Address: string,
    Warehouse_Address: string,
    Credit_Limit: number,
    Dealer: boolean,
    Accounts_Receivables: number,
    Credit_Terms: string,
    Discount_Scheme: number,
    Agent: string,
    Contacts_Order: string,
    Contacts_Accounting: string,
    Telephone_Number: string,
    Fax_Number: string,
    Email: string,
    Rounded_Payment: boolean,
    Usual_Ordered_Item: string,
    Witholding_Tax: number,
    Vat_Exemption: boolean,
    Collection_Period: string,
    Combine_Items: boolean,
    Overpayment_Counter: number
}
