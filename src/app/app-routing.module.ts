import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { FeatureLayoutComponent } from './layouts/feature-layout/feature-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthGuestGuard } from './guards/authGuest.guard';
import { AuthUserGuard } from './guards/authUser.guard';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';
import { ErrorGuard } from './guards/error.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthUserGuard],
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    canActivate: [AuthGuestGuard],
  },
  {
    path: 'features',
    component: FeatureLayoutComponent,
    canActivate: [AuthUserGuard],
  },
  {
    path: 'error',
    component: ErrorLayoutComponent,
    canActivate: [ErrorGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
