import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { addServiceToFeature } from 'src/database/features.controller';
import { IServiceHandler, IFeature } from 'src/interfaces';
import { DeleteServiceConfirmationModalComponent } from '../modals/delete-service-confirmation-modal/delete-service-confirmation-modal.component';
import { EditServiceModalComponent } from '../modals/edit-service-modal/edit-service-modal.component';
import { NewServiceModalComponent } from '../new-service-modal/new-service-modal.component';

@Component({
  selector: 'service-card-list',
  templateUrl: './service-card-list.component.html',
  styleUrls: ['./service-card-list.component.css'],
})
export class ServiceCardListComponent {
  @Input() feature: IFeature = {} as IFeature;

  constructor(public dialog: MatDialog) {}

  editServiceClicked(feature: IFeature, serviceIndex: number) {
    const dialogRef = this.dialog.open(EditServiceModalComponent, {
      data: {
        feature: feature,
        serviceIndex: serviceIndex,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  addButtonClicked() {
    const dialogRef = this.dialog.open(NewServiceModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) addServiceToFeature(this.feature, result);
    });
  }

  deleteServiceClicked(feature: IFeature, serviceIndex: number) {
    const dialogRef = this.dialog.open(
      DeleteServiceConfirmationModalComponent,
      {
        data: {
          feature: feature,
          serviceIndex: serviceIndex,
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
