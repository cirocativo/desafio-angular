import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { deleteFeatureServiceFromIndex } from 'src/database/features.controller';
import { IServiceHandler, IFeature, IService } from 'src/interfaces';

@Component({
  selector: 'app-delete-service-confirmation-modal',
  templateUrl: './delete-service-confirmation-modal.component.html',
  styleUrls: ['./delete-service-confirmation-modal.component.css'],
})
export class DeleteServiceConfirmationModalComponent {
  serviceIndex: number;
  feature: IFeature;
  service: IService;
  constructor(
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteServiceConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IServiceHandler
  ) {
    this.serviceIndex = data.serviceIndex;
    this.feature = data.feature;
    this.service = data.feature.services[this.serviceIndex];
  }
  cancel(): void {
    this.dialogRef.close();
  }
  delete(): void {
    deleteFeatureServiceFromIndex(this.feature, this.serviceIndex);
    this.snackbar.open('Service deleted successfully!', undefined, {
      duration: 1500,
    });
    this.cancel();
  }
}
