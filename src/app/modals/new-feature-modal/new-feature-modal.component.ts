import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewServiceModalComponent } from 'src/app/modals/new-service-modal/new-service-modal.component';
import { createFeature } from 'src/database/features.controller';
import { IService } from 'src/interfaces';
import { hasValidCharactersValidator } from '../../../validators';

@Component({
  selector: 'app-new-feature-modal',
  templateUrl: './new-feature-modal.component.html',
  styleUrls: ['./new-feature-modal.component.css'],
})
export class NewFeatureModalComponent {
  services: IService[] = [];

  public newFeatureForm: FormGroup = this.fbFeature.group({
    name: ['', [Validators.required, hasValidCharactersValidator]],
    description: [''],
    services: [this.services],
  });

  constructor(
    private fbFeature: FormBuilder,
    public dialogRef: MatDialogRef<NewFeatureModalComponent>,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  newServiceClicked(): void {
    const dialogRef = this.dialog.open(NewServiceModalComponent, {
      data: this.services,
    });

    dialogRef.afterClosed().subscribe();
  }

  deleteServiceClicked(index: number): void {
    this.services.splice(index, 1);
    this.snackbar.open('Service removed', undefined, {
      duration: 1500,
    });
  }

  create() {
    if (this.services.length === 0) {
      this.snackbar.open('You need to add at least one service', undefined, {
        duration: 2000,
      });
    } else {
      this.newFeatureForm.value.services = this.services;
      try {
        createFeature(this.newFeatureForm.value);

        this.snackbar.open('Feature created successfully!', undefined, {
          duration: 1500,
        });

        this.cancel();
      } catch (e) {
        this.snackbar.open('This feature name already exists', undefined, {
          duration: 3000,
        });
      }
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
