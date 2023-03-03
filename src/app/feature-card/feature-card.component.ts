import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFeature } from 'src/interfaces';
import { DeleteFeatureConfirmationModalComponent } from '../modals/delete-feature-confirmation-modal/delete-feature-confirmation-modal.component';
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

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDeleteConfirmationModal(): void {
    const dialogRef = this.dialog.open(
      DeleteFeatureConfirmationModalComponent,
      {
        data: this.feature,
      }
    );

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
