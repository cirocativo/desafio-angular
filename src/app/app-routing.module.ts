import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { FeatureLayoutComponent } from './layouts/feature-layout/feature-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthGuestGuard } from './guards/authGuest.guard';
import { AuthorizationService } from './services/authorization.service';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    canActivate: [AuthGuestGuard],
  },
  {
    path: 'features',
    component: FeatureLayoutComponent,
    canActivate: [AuthGuestGuard],
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
export class AppRoutingModule {
  constructor(private authorizationService: AuthorizationService) {}
}
