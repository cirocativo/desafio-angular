import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFeature } from 'src/interfaces';

@Component({
  selector: 'app-feature-details-modal',
  templateUrl: './feature-details-modal.component.html',
  styleUrls: ['./feature-details-modal.component.css'],
})
export class FeatureDetailsModalComponent {
  constructor(
    public dialogRef: MatDialogRef<FeatureDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFeature
  ) {}
  cancel(): void {
    this.dialogRef.close();
  }
}
