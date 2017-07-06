import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { TestModuleMetadata } from "@angular/core/testing";
import { APP_BASE_HREF } from '@angular/common';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from "app/modules/core/services/in-memory-data.service";
import { HeroService } from "app/modules/hero/services";
import { HeroRoutingModule } from "app/modules/hero/hero-routing.module";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "app/modules/angular-material/angularMaterial.module";
import { AppRoutingModule } from "app/app-routing.module";
import { ProductListComponent } from "app/modules/product/components";
import { ProductRoutingModule } from "app/modules/product/product-routing.module";
import { ProductService } from "app/modules/product/services/product.service";


const components = [
  ProductListComponent
];

export const metaData: TestModuleMetadata = {
  declarations: [
    ...components
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AngularMaterialModule,
    RouterModule,
    AppRoutingModule,
    ProductRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
  ],
  // exports: [...components],
  providers: [
    ProductService,
    {provide: APP_BASE_HREF, useValue: '/' }]
};