import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
/* Main Components */
import { AppComponent }  from './src/app/app.component';
import { HeaderComponent } from './src/header/header.component';
import { LoginComponent } from './src/login/login.component';
import { MainComponent } from './src/mainLandingPage/mainLandingPage.component';

/* Modules */
import { FormsModule } from '@angular/forms';
import { ClientModule } from './src/clientLandingPage/client.module';
import { AdminModule } from './src/adminLandingPage/admin.module';
import { ProductModule } from './src/productLandingPage/product.module';
import { AccountManagementModule } from './src/accountManagement/account.module';

import { AuthService } from './src/accountServices/authService.service';
import { LocalStorageService } from './src/universal/localStorageService.service';

import { AuthAccessGuard } from './src/routeGuards/authGuard';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            { path: '', component: LoginComponent },
            { path: 'home', component: MainComponent, canActivate: [AuthAccessGuard] }
        ]),
        HttpModule,
        FormsModule,
        ClientModule,
        AdminModule,
        ProductModule,
        AccountManagementModule],
    declarations: [AppComponent,
        HeaderComponent,
        LoginComponent,
        MainComponent],
    bootstrap: [AppComponent],
    providers: [AuthService, LocalStorageService, AuthAccessGuard]
})
export class AppModule { }
