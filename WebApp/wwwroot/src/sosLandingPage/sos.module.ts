import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

//Components
import { SOSListComponent } from './sosList/sosList.component';
//Services
import { SosService } from './sos.service';

import { AuthAccessGuard } from '../routeGuards/authGuard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'sos-list', component: SOSListComponent, canActivate: [AuthAccessGuard] }
    ]), SharedModule],
    declarations: [SOSListComponent],
    providers: [SosService, AuthAccessGuard]
})
export class SOSModule { }
