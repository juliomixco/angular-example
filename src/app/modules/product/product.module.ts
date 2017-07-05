import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductListComponent } from "./components";
import { FormsModule } from "@angular/forms";



const components = [
  ProductListComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ProductRoutingModule,
  ],
  // exports: [...components],
  providers: []
})
export class ProductModule { }
