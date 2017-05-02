import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AdminService } from './adminService.service';
import { CompetitorAdminComponent } from './competitorAdmin/competitorAdmin.component';

import { AuthAccessGuard } from '../routeGuards/authGuard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'competitors', component: CompetitorAdminComponent, canActivate: [AuthAccessGuard] }
    ]), SharedModule],
    declarations: [CompetitorAdminComponent],
    providers: [AdminService, AuthAccessGuard]
})
export class AdminModule { }
