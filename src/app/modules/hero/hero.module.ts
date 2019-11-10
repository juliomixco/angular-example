import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {
  HeroDetailComponent,
  HeroComponent,
  DashboardComponent,
  HeroSearchComponent,
} from './components';
import { InMemoryDataService } from 'app/modules/core/services/in-memory-data.service';
import { HeroService } from 'app/modules/hero/services';
import { HeroRoutingModule } from 'app/modules/hero/hero-routing.module';

const components = [
  HeroDetailComponent,
  HeroComponent,
  DashboardComponent,
  HeroSearchComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    HeroRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
  ],
  // exports: [...components],
  providers: [HeroService],
})
export class HeroModule {}
