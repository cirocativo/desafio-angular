import { Component } from '@angular/core';
import { features } from 'src/assets/features';

@Component({
  selector: 'feature-card-list',
  templateUrl: './feature-card-list.component.html',
  styleUrls: ['./feature-card-list.component.css'],
})
export class FeatureCardListComponent {
  features = features;
}
