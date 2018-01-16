import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent, PersonDetailComponent } from "./components";


const routes: Routes = [
  { path: '', redirectTo: '/starwars/people', pathMatch: 'full' },
  { path: 'people', component: PersonListComponent },
  { path: 'person/:id', component: PersonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }