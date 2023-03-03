import { Component, Input } from '@angular/core';
import { IService } from 'src/interfaces';

@Component({
  selector: 'service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
})
export class ServiceCardComponent {
  @Input() service: IService = {} as IService;
}
