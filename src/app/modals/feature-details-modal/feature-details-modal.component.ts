import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { IFeature } from 'src/interfaces';
import { EditFeatureModalComponent } from '../edit-feature-modal/edit-feature-modal.component';

@Component({
  selector: 'app-feature-details-modal',
  templateUrl: './feature-details-modal.component.html',
  styleUrls: ['./feature-details-modal.component.css'],
})
export class FeatureDetailsModalComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FeatureDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFeature
  ) {}

  edit(): void {
    this.dialog.open(EditFeatureModalComponent, {
      data: this.data,
    });
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
