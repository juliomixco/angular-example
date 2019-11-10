import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './state-example-routing.module';
import { ProductListComponent } from './components';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'app/modules/product/services/product.service';
import { SwitchProductDisplayModeComponent } from './components/switch-product-display-mode/switch-product-display-mode.component';
import { CardItemDirective } from './directives/card-item.directive';
import { ListItemDirective } from './directives/list-item.directive';
import { TableItemDirective } from './directives/table-item.directive';
import { TableHeaderItemDirective } from './directives/table-header-item.directive';
import { AngularMaterialModule } from 'app/modules/angular-material/angularMaterial.module';

const components = [ProductListComponent, SwitchProductDisplayModeComponent];
const directives = [
  CardItemDirective,
  TableItemDirective,
  ListItemDirective,
  TableHeaderItemDirective,
];
@NgModule({
  declarations: [...components, ...directives],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductRoutingModule,
    AngularMaterialModule,
  ],
  // exports: [...components],
  providers: [ProductService],
})
export class StateExampleModule { }
