import { Component } from '@angular/core';
import { getFeatures } from 'src/database/features.controller';

@Component({
  selector: 'feature-card-list',
  templateUrl: './feature-card-list.component.html',
  styleUrls: ['./feature-card-list.component.css'],
})
export class FeatureCardListComponent {
  features = getFeatures();
}
