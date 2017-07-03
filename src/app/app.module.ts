import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angularMaterial.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from "app/hero.service";
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from "app/app-routing.module";
// import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent,
    // ProductListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
