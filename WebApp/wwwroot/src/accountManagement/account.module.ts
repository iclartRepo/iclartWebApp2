import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AccountManagementComponent } from './accountLandingPage/account.component';

import { AuthAccessGuard } from '../routeGuards/authGuard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: "accounts", component: AccountManagementComponent, canActivate: [AuthAccessGuard] }
    ]), SharedModule],
    declarations: [AccountManagementComponent],
    providers: [AuthAccessGuard]
})
export class AccountManagementModule { }

