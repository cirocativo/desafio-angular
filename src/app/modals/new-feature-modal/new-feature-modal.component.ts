import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NewServiceModalComponent } from 'src/app/new-service-modal/new-service-modal.component';
import { createFeature } from 'src/database/features.service';
import { IFeatureService } from 'src/interfaces';

@Component({
  selector: 'app-new-feature-modal',
  templateUrl: './new-feature-modal.component.html',
  styleUrls: ['./new-feature-modal.component.css'],
})
export class NewFeatureModalComponent {
  services: IFeatureService[] = [];

  public newFeatureForm: FormGroup = this.fbFeature.group({
    name: ['', [Validators.required]],
    description: [''],
    services: [this.services],
  });

  constructor(
    private fbFeature: FormBuilder,
    public dialogRef: MatDialogRef<NewFeatureModalComponent>,
    public dialog: MatDialog
  ) {}

  newServiceClicked(): void {
    const dialogRef = this.dialog.open(NewServiceModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.services.push(result);
    });
  }

  deleteServiceClicked(index: number): void {
    this.services.splice(index, 1);
  }

  create() {
    this.newFeatureForm.value.services = this.services;

    createFeature(this.newFeatureForm.value);

    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
