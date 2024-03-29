import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
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
import { SearchBoxComponent } from './search-box/search-box.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { FeatureLayoutComponent } from './layouts/feature-layout/feature-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

import { HttpClientModule } from '@angular/common/http';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';

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
    SearchBoxComponent,
    HeaderComponent,
    SideNavComponent,
    FeatureLayoutComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    ErrorLayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTreeModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
