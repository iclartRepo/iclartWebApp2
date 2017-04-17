import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductService } from './productService.service';

import { MainProductPageComponent } from './mainProductPage/mainProductPage.component';
import { ProductCategoryComponent } from './productCategory/productCategory.component';
import { ProductListComponent } from './productList/productList.component';
import { ProductFormComponent } from './productForm/productForm.component';
import { ProductViewComponent } from './viewProduct/viewProduct.component';

import { AuthAccessGuard } from '../routeGuards/authGuard';
@NgModule({
    imports: [RouterModule.forChild([
        { path: 'products', component: MainProductPageComponent, canActivate: [AuthAccessGuard] },
        { path: 'products/:tabNum', component: MainProductPageComponent, canActivate: [AuthAccessGuard] },
        { path: 'productForm', component: ProductFormComponent, canActivate: [AuthAccessGuard] },
        { path: 'productForm/:id', component: ProductFormComponent, canActivate: [AuthAccessGuard] },
        { path: 'product/:id', component: ProductViewComponent, canActivate: [AuthAccessGuard] }
    ]), SharedModule],
    declarations: [MainProductPageComponent, ProductCategoryComponent, ProductListComponent, ProductFormComponent, ProductViewComponent],
    providers: [ProductService, AuthAccessGuard]
})
export class ProductModule { }
