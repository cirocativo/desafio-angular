import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { DeleteFeatureConfirmationModalComponent } from './modals/delete-feature-confirmation-modal/delete-feature-confirmation-modal.component';
import { NewFeatureModalComponent } from './modals/new-feature-modal/new-feature-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewServiceModalComponent } from './modals/new-service-modal/new-service-modal.component';
import { DeleteServiceConfirmationModalComponent } from './modals/delete-service-confirmation-modal/delete-service-confirmation-modal.component';
import { EditFeatureModalComponent } from './modals/edit-feature-modal/edit-feature-modal.component';
import { EditServiceModalComponent } from './modals/edit-service-modal/edit-service-modal.component';
import { FeatureTreeComponent } from './feature-tree/feature-tree.component';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,
    DeleteFeatureConfirmationModalComponent,
    NewFeatureModalComponent,
    NewServiceModalComponent,
    DeleteServiceConfirmationModalComponent,
    EditFeatureModalComponent,
    EditServiceModalComponent,
    FeatureTreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTreeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
