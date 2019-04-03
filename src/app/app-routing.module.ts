import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'app/modules/core/components/login.component';
// import { DashboardComponent, HeroDetailComponent, HeroComponent } from "app/modules/hero/components";

const routes: Routes = [
  { path: '', redirectTo: '/hero/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'hero', loadChildren: 'app/modules/hero/hero.module#HeroModule' },
  {
    path: 'product',
    loadChildren: 'app/modules/product/product.module#ProductModule',
  },
  {
    path: 'state-example',
    loadChildren:
      'app/modules/state-example/state-example.module#StateExampleModule',
  },
  {
    path: 'starwars',
    loadChildren: 'app/modules/starwars/starwars.module#StarwarsModule',
  },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
