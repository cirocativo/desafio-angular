import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureCardComponent } from './feature-card/feature-card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FeatureCardListComponent } from './feature-card-list/feature-card-list.component';
import { FeatureDetailsModalComponent } from './modals/feature-details-modal/feature-details-modal.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceCardListComponent } from './service-card-list/service-card-list.component';
import { DeleteConfirmationModalComponent } from './modals/delete-confirmation-modal/delete-confirmation-modal.component';
import { NewFeatureModalComponent } from './modals/new-feature-modal/new-feature-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewServiceModalComponent } from './new-service-modal/new-service-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureCardComponent,
    FeatureCardListComponent,
    FeatureDetailsModalComponent,
    ServiceCardComponent,
    ServiceCardListComponent,
    DeleteConfirmationModalComponent,
    NewFeatureModalComponent,
    NewServiceModalComponent,
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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
