import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { updateFeature } from 'src/database/features.controller';
import { IFeature } from 'src/interfaces';
import { hasValidCharactersValidator } from 'src/validators';

@Component({
  selector: 'app-edit-feature-modal',
  templateUrl: './edit-feature-modal.component.html',
  styleUrls: ['./edit-feature-modal.component.css'],
})
export class EditFeatureModalComponent {
  feature: IFeature = {} as IFeature;

  public updateFeatureForm: FormGroup = this.fbFeature.group({
    name: ['', [Validators.required, hasValidCharactersValidator]],
    description: [''],
  });

  constructor(
    private fbFeature: FormBuilder,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<EditFeatureModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFeature
  ) {
    Object.assign(this.feature, data);
  }

  update() {
    try {
      updateFeature(this.data.id, this.updateFeatureForm.value);
      this.snackbar.open('Feature updated successfully!', undefined, {
        duration: 1500,
      });
      this.cancel();
    } catch (error) {
      this.snackbar.open('This feature name already exists', undefined, {
        duration: 3000,
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
