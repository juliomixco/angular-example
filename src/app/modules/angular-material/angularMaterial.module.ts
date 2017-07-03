import {
  MdCommonModule,
  MdButtonModule,
  MdCheckboxModule,
  MdListModule,
  MdCardModule,
  MdGridListModule,
  MdToolbarModule,
  MdIconModule,
  MdCoreModule,
  MdInputModule,
  MdButtonToggleModule,
  MdExpansionModule,
  StyleModule,
  MdDialogModule,
  MdMenuModule,
  MdOptionModule,
  MaterialModule,
  MdChipsModule,
  MdDatepickerModule,
  MdSidenavModule,
  MdSelectionModule,
  MdSnackBarModule,
  MdRippleModule,
  MdRadioModule
} from '@angular/material';
import { NgModule } from '@angular/core';

const imports = [
  MdCommonModule,
  MdButtonModule,
  MdCheckboxModule,
  MdListModule,
  MdCardModule,
  MdGridListModule,
  MdToolbarModule,
  MdIconModule,
  MdCoreModule,
  MdInputModule,
  MdButtonToggleModule,
  MdExpansionModule,
  StyleModule,
  MdDialogModule,
  MdMenuModule,
  MdOptionModule,
  MaterialModule,
  MdChipsModule,
  MdDatepickerModule,
  MdSidenavModule,
  MdSelectionModule,
  MdSnackBarModule,
  MdRippleModule,
  MdRadioModule
]

@NgModule({
  imports: imports,
  exports: imports,
})
export class AngularMaterialModule { }