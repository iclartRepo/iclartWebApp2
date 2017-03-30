import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductService } from './productService.service';

import { MainProductPageComponent } from './mainProductPage/mainProductPage.component';
import { ProductCategoryComponent } from './productCategory/productCategory.component';
import { ProductListComponent } from './productList/productList.component';
import { ProductFormComponent } from './productForm/productForm.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'products', component: MainProductPageComponent },
        { path: 'products/:tabNum', component: MainProductPageComponent },
        { path: 'productForm', component: ProductFormComponent }
    ]), SharedModule],
    declarations: [MainProductPageComponent, ProductCategoryComponent, ProductListComponent, ProductFormComponent],
    providers: [ProductService]
})
export class ProductModule { }
