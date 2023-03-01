import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFeature } from 'src/interfaces';
import { DeleteConfirmationModalComponent } from '../modals/delete-confirmation-modal/delete-confirmation-modal.component';
import { FeatureDetailsModalComponent } from '../modals/feature-details-modal/feature-details-modal.component';

@Component({
  selector: 'feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css'],
})
export class FeatureCardComponent {
  @Input() feature: IFeature = {} as IFeature;

  constructor(public dialog: MatDialog) {}

  openDetailsModal(): void {
    const dialogRef = this.dialog.open(FeatureDetailsModalComponent, {
      data: this.feature,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openDeleteConfirmationModal(): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
      data: this.feature,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
