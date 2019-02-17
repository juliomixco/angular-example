import {
  MatCommonModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatDialogModule,
  MatMenuModule,
  MatOptionModule,
  MatChipsModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatRippleModule,
  MatRadioModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

const imports = [
  MatCommonModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatDialogModule,
  MatMenuModule,
  MatOptionModule,
  MatChipsModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatRippleModule,
  MatRadioModule
]

@NgModule({
  imports: imports,
  exports: imports,
})
export class AngularMaterialModule { }
