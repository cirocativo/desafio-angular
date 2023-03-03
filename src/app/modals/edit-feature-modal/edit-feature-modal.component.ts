import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { updateFeature } from 'src/database/features.controller';
import { IFeature } from 'src/interfaces';

@Component({
  selector: 'app-edit-feature-modal',
  templateUrl: './edit-feature-modal.component.html',
  styleUrls: ['./edit-feature-modal.component.css'],
})
export class EditFeatureModalComponent {
  public updateFeatureForm: FormGroup = this.fbFeature.group({
    name: ['', [Validators.required]],
    description: [''],
  });

  constructor(
    private fbFeature: FormBuilder,
    public dialogRef: MatDialogRef<EditFeatureModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFeature
  ) {}

  update() {
    updateFeature(this.data.id, this.updateFeatureForm.value);

    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
