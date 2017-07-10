import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angularMaterial.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { DataService, EndpointsService } from "app/modules/core/services";
import { LoginComponent } from "app/modules/core/components/login.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [
    EndpointsService,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
