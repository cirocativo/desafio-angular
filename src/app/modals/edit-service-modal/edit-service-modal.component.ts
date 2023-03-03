import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { updateFeatureServiceFromIndex } from 'src/database/features.controller';
import { IService, IServiceHandler } from 'src/interfaces';

@Component({
  selector: 'app-edit-service-modal',
  templateUrl: './edit-service-modal.component.html',
  styleUrls: ['./edit-service-modal.component.css'],
})
export class EditServiceModalComponent {
  service: IService = {} as IService;

  public updateServiceForm: FormGroup = this.fbFeature.group({
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
    private fbFeature: FormBuilder,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<EditServiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IServiceHandler
  ) {
    const sourceService = data.feature.services[data.serviceIndex];

    Object.assign(this.service, sourceService);
  }

  update() {
    try {
      updateFeatureServiceFromIndex(
        this.data.feature,
        this.data.serviceIndex,
        this.updateServiceForm.value
      );
      this.snackbar.open('Service updated successfully!', undefined, {
        duration: 1500,
      });
      this.cancel();
    } catch (error) {
      this.snackbar.open(
        'There was an error. Please verify your informations and try again',
        undefined,
        {
          duration: 3000,
        }
      );
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
