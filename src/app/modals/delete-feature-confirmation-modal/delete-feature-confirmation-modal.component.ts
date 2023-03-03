import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { deleteFeature } from 'src/database/features.controller';

import { IFeature } from 'src/interfaces';

@Component({
  selector: 'delete-confirmation-modal',
  templateUrl: './delete-feature-confirmation-modal.component.html',
  styleUrls: ['./delete-feature-confirmation-modal.component.css'],
})
export class DeleteFeatureConfirmationModalComponent {
  feature: IFeature;
  constructor(
    public dialogRef: MatDialogRef<DeleteFeatureConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFeature
  ) {
    this.feature = data;
  }
  cancel(): void {
    this.dialogRef.close();
  }
  delete(): void {
    deleteFeature(this.feature);

    this.cancel();
  }
}
