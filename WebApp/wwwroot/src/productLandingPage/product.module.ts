import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductService } from './productService.service';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './productList/productList.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'products', component: ProductListComponent }
    ]), SharedModule],
    declarations: [ProductListComponent],
    providers: [ProductService]
})
export class ProductModule { }
