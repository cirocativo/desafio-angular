import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeaturesService } from 'src/app/services/features.service';

import { IFeature } from 'src/interfaces';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-feature-confirmation-modal.component.html',
  styleUrls: ['./delete-feature-confirmation-modal.component.css'],
})
export class DeleteFeatureConfirmationModalComponent {
  feature: IFeature;
  constructor(
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteFeatureConfirmationModalComponent>,
    private featuresService: FeaturesService,
    @Inject(MAT_DIALOG_DATA) public data: IFeature
  ) {
    this.feature = data;
  }
  cancel(): void {
    this.dialogRef.close();
  }
  delete(): void {
    this.featuresService.deleteFeature(this.feature.id).subscribe({
      next: () => {
        this.snackbar.open('Feature deleted successfully!', undefined, {
          duration: 1500,
        });
      },
      error: (error) => {
        this.snackbar.open(error, undefined, {
          duration: 3000,
        });
      },
    });
    this.cancel();
  }
}
