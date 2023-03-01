import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { deleteFeature } from 'src/database/controllers';

import { IFeature } from 'src/interfaces';

@Component({
  selector: 'delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.css'],
})
export class DeleteConfirmationModalComponent {
  feature: IFeature;
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationModalComponent>,
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
