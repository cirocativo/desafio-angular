import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { updateFeatureServiceFromIndex } from 'src/database/features.controller';
import { IService, IServiceHandler } from 'src/interfaces';

@Component({
  selector: 'app-edit-service-modal',
  templateUrl: './edit-service-modal.component.html',
  styleUrls: ['./edit-service-modal.component.css'],
})
export class EditServiceModalComponent {
  service: IService;

  public updateServiceForm: FormGroup = this.fbFeature.group({
    method: ['', [Validators.required]],
    endpoint: ['', [Validators.required]],
    description: [''],
  });

  constructor(
    private fbFeature: FormBuilder,
    public dialogRef: MatDialogRef<EditServiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IServiceHandler
  ) {
    this.service = data.feature.services[data.serviceIndex];
  }

  update() {
    updateFeatureServiceFromIndex(
      this.data.feature,
      this.data.serviceIndex,
      this.updateServiceForm.value
    );

    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
