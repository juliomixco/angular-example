import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent, HeroDetailComponent, HeroComponent } from "app/modules/hero/components";


const routes: Routes = [
  { path: '', redirectTo: '/hero/dashboard', pathMatch: 'full' },
  { path: 'hero',  loadChildren: 'app/modules/hero/hero.module#HeroModule'  },
  { path: 'product',  loadChildren: 'app/modules/product/product.module#ProductModule'  },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}