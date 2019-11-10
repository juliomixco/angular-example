import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'app/modules/core/components/login.component';
// import { DashboardComponent, HeroDetailComponent, HeroComponent } from "app/modules/hero/components";

const routes: Routes = [
  { path: '', redirectTo: '/hero/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'hero',
    loadChildren: () =>
      import('app/modules/hero/hero.module').then(m => m.HeroModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('app/modules/product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'state-example',
    loadChildren: () =>
      import('app/modules/state-example/state-example.module').then(
        m => m.StateExampleModule,
      ),
  },
  {
    path: 'starwars',
    loadChildren: () =>
      import('app/modules/starwars/starwars.module').then(
        m => m.StarwarsModule,
      ),
  },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
