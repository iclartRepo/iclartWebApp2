import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

//Components
import { ClientListComponent } from './clientList/clientList.component';
import { ClientFormComponent } from './clientForm/clientForm.component';

//Services
import { ClientService } from './clientService.service';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'client-form', component: ClientFormComponent },
        { path: 'clients', component: ClientListComponent }
    ]), SharedModule],
    declarations: [ClientListComponent,
        ClientFormComponent],
    providers: [ClientService]
})
export class ClientModule { }
