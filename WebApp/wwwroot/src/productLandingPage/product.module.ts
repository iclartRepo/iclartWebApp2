import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductService } from './productService.service';

import { MainProductPageComponent } from './mainProductPage/mainProductPage.component';
import { ProductCategoryComponent } from './productCategory/productCategory.component';
import { ProductListComponent } from './productList/productList.component';
import { ProductFormComponent } from './productForm/productForm.component';
import { ProductViewComponent } from './viewProduct/viewProduct.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'products', component: MainProductPageComponent },
        { path: 'products/:tabNum', component: MainProductPageComponent },
        { path: 'productForm', component: ProductFormComponent },
        { path: 'productForm/:id', component: ProductFormComponent },
        { path: 'product/:id', component: ProductViewComponent }
    ]), SharedModule],
    declarations: [MainProductPageComponent, ProductCategoryComponent, ProductListComponent, ProductFormComponent, ProductViewComponent],
    providers: [ProductService]
})
export class ProductModule { }
