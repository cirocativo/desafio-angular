import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureCardComponent } from './feature-card/feature-card.component';

import { MatButtonModule } from '@angular/material/button';
import { FeatureCardListComponent } from './feature-card-list/feature-card-list.component';

@NgModule({
  declarations: [AppComponent, FeatureCardComponent, FeatureCardListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
