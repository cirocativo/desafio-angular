import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { updateFeature } from 'src/database/features.controller';
import { IFeature, IFeatureUpdate } from 'src/interfaces';
import { hasValidCharactersValidator } from 'src/validators';

@Component({
  selector: 'app-edit-feature-modal',
  templateUrl: './edit-feature-modal.component.html',
  styleUrls: ['./edit-feature-modal.component.css'],
})
export class EditFeatureModalComponent {
  feature: IFeature = {} as IFeature;
  hasClickedOnTitle = false;

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

  editTitle() {
    this.hasClickedOnTitle = true;
  }
  updateTitle() {
    try {
      const name = this.updateFeatureForm.get('name')?.value;
      this.update({ name });
      this.hasClickedOnTitle = false;
    } catch (e) {
      console.error(e);
    }
  }
  updateDescription() {
    try {
      const description = this.updateFeatureForm.get('description')?.value;
      this.update({ description });
      //this.hasClickedOnTitle = false;
    } catch (e) {
      console.error(e);
    }
  }

  update(data: IFeatureUpdate) {
    try {
      const feature_id: string = this.data.id;

      updateFeature(feature_id, data);

      this.snackbar.open('Feature updated successfully!', undefined, {
        duration: 1500,
      });
      //this.cancel();
    } catch (error) {
      if (error instanceof Error) {
        this.snackbar.open(error.message, undefined, {
          duration: 3000,
        });
      }
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
