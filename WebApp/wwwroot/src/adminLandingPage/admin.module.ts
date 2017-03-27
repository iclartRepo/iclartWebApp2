import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-highcharts'; 
import { SharedModule } from '../shared/shared.module';

import { AdminService } from './adminService.service';
import { CompetitorAdminComponent } from './competitorAdmin/competitorAdmin.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'competitors', component: CompetitorAdminComponent }
    ]), SharedModule, ChartModule.forRoot(require('highcharts'))],
    declarations: [CompetitorAdminComponent],
    providers: [AdminService]
})
export class AdminModule { }
