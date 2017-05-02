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

import { AuthAccessGuard } from '../routeGuards/authGuard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'client-form/:id', component: ClientFormComponent, canActivate: [AuthAccessGuard] },
        { path: 'client-info/:id', component: ClientViewComponent, canActivate: [AuthAccessGuard] },
        { path: 'client-form', component: ClientFormComponent, canActivate: [AuthAccessGuard] },
        { path: 'clients', component: ClientListComponent, canActivate: [AuthAccessGuard] }
    ]), SharedModule],
    declarations: [ClientListComponent,
        ClientFormComponent,
        ClientViewComponent],
    providers: [ClientService, AdminService, AuthAccessGuard]
})
export class ClientModule { }
