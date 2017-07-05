import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "app/modules/product/components";


const routes: Routes = [
  { path: '/product', redirectTo: '/product/product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }