import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  addServiceToFeature,
  checkServiceExclusivity,
} from 'src/database/features.controller';
import { IFeature, IService } from 'src/interfaces';

@Component({
  selector: 'app-new-service-modal',
  templateUrl: './new-service-modal.component.html',
  styleUrls: ['./new-service-modal.component.css'],
})
export class NewServiceModalComponent {
  public newServiceForm: FormGroup = this.fb.group({
    method: ['', [Validators.required]],
    endpoint: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^\/(?:[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*(?:\/:[a-zA-Z0-9_-]+)?)+(?!\/|:)$/
        ),
      ],
    ],
    description: [''],
  });

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,

    public dialogRef: MatDialogRef<NewServiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  create(): void {
    try {
      if (this.data.feature) {
        addServiceToFeature(this.data.feature, this.newServiceForm.value);
      } else {
        checkServiceExclusivity(this.newServiceForm.value);
        this.data.push(this.newServiceForm.value);
      }
      this.snackbar.open('Service added', undefined, {
        duration: 1500,
      });
      this.cancel();
    } catch (error: any) {
      this.snackbar.open(error.message, undefined, {
        duration: 3000,
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
