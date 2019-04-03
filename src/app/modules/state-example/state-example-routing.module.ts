import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: '/state-example/product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
