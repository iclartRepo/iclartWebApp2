import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
/* Main Components */
import { AppComponent }  from './src/app/app.component';
import { HeaderComponent } from './src/header/header.component';
import { MainComponent } from './src/mainLandingPage/mainLandingPage.component';

/* Modules */
import { ClientModule } from './src/clientLandingPage/client.module';
import { AdminModule } from './src/adminLandingPage/admin.module';
import { ProductModule } from './src/productLandingPage/product.module';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            { path: '', component: MainComponent }
        ]),
        HttpModule,
        ClientModule,
        AdminModule,
        ProductModule],
    declarations: [AppComponent,
        HeaderComponent,
        MainComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
