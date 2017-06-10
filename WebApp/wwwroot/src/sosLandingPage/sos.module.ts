import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

//Components
import { SOSListComponent } from './sosList/sosList.component';
import { SOSFormComponent } from './sosForm/sosForm.component';

//Services
import { SosService } from './sos.service';
import { ClientService } from '../clientLandingPage/clientService.service';
import { ProductService } from '../productLandingPage/productService.service';

import { AuthAccessGuard } from '../routeGuards/authGuard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'sos-list', component: SOSListComponent, canActivate: [AuthAccessGuard] },
        { path: 'sos-form', component: SOSFormComponent }
    ]), SharedModule],
    declarations: [SOSListComponent, SOSFormComponent],
    providers: [SosService, ClientService, ProductService, AuthAccessGuard]
})
export class SOSModule { }
