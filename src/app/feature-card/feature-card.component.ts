import { Component, Input } from '@angular/core';
import { IFeature } from 'src/interfaces';

@Component({
  selector: 'feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css'],
})
export class FeatureCardComponent {
  @Input() feature: IFeature = {} as IFeature;
}
