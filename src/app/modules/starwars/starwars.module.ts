import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StarwarsRoutingModule } from './starwars-routing.module';
import { PersonService } from './services/person.service';
import { PersonListComponent, PersonDetailComponent } from 'app/modules/starwars/components';



const components = [
  PersonListComponent,
  PersonDetailComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    StarwarsRoutingModule,
  ],
  // exports: [...components],
  providers: [PersonService]
})
export class StarwarsModule { }
