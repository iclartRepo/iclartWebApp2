import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

//Components
import { SOSListComponent } from './sosList/sosList.component';
import { SOSFormComponent } from './sosForm/sosForm.component';

//Services
import { SosService } from './sos.service';
import { ClientService } from '../clientLandingPage/clientService.service';
import { ProductService } from '../productLandingPage/productService.service';
import { UtilitiesService } from '../utilities/utilities.service';

import { AuthAccessGuard } from '../routeGuards/authGuard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'sos-list', component: SOSListComponent, canActivate: [AuthAccessGuard] },
        { path: 'sos-form', component: SOSFormComponent }
    ]), SharedModule],
    declarations: [SOSListComponent, SOSFormComponent],
    providers: [SosService, ClientService, ProductService, UtilitiesService, AuthAccessGuard, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class SOSModule { }
