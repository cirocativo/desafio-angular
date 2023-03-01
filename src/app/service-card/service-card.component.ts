import { Component, Input } from '@angular/core';
import { IFeatureService } from 'src/interfaces';

@Component({
  selector: 'service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
})
export class ServiceCardComponent {
  @Input() service: IFeatureService = {} as IFeatureService;
}
