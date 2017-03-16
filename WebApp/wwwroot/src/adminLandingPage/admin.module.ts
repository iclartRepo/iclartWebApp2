import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AdminService } from './adminService.service';
import { CompetitorAdminComponent } from './competitorAdmin/competitorAdmin.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'competitors', component: CompetitorAdminComponent }
    ]), SharedModule],
    declarations: [CompetitorAdminComponent],
    providers: [AdminService]
})
export class AdminModule { }
