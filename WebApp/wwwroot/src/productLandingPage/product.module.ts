import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductService } from './productService.service';

import { MainProductPageComponent } from './mainProductPage/mainProductPage.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'products', component: MainProductPageComponent}
    ]), SharedModule],
    declarations: [MainProductPageComponent],
    providers: [ProductService]
})
export class ProductModule { }
