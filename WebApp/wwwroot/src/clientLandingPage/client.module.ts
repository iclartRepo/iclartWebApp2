import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

//Components
import { ClientListComponent } from './clientList/clientList.component';
import { ClientFormComponent } from './clientForm/clientForm.component';
import { ClientViewComponent } from './viewClient/viewClient.component';

//Services
import { ClientService } from './clientService.service';
import { AdminService } from '../adminLandingPage/adminService.service';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'client-form/:id', component: ClientFormComponent },
        { path: 'client-info/:id', component: ClientViewComponent },
        { path: 'client-form', component: ClientFormComponent },
        { path: 'clients', component: ClientListComponent }
    ]), SharedModule],
    declarations: [ClientListComponent,
        ClientFormComponent,
        ClientViewComponent],
    providers: [ClientService, AdminService]
})
export class ClientModule { }
