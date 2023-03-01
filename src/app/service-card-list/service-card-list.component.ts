import { Component, Input } from '@angular/core';
import { IFeature } from 'src/interfaces';

@Component({
  selector: 'service-card-list',
  templateUrl: './service-card-list.component.html',
  styleUrls: ['./service-card-list.component.css'],
})
export class ServiceCardListComponent {
  @Input() feature: IFeature = {} as IFeature;
}
