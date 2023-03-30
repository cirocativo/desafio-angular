import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeaturesService } from 'src/app/services/features.service';
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
  hasClickedOnDescription = false;

  @ViewChild('descriptionTextarea', { static: false })
  descriptionTextarea: ElementRef<HTMLTextAreaElement>;

  @ViewChild('titleInput', { static: false })
  titleInput: ElementRef<HTMLInputElement>;

  public updateFeatureForm: FormGroup = this.fbFeature.group({
    name: ['', [Validators.required, hasValidCharactersValidator]],
    description: [''],
  });

  constructor(
    private fbFeature: FormBuilder,
    private snackbar: MatSnackBar,
    private featuresService: FeaturesService,
    public dialogRef: MatDialogRef<EditFeatureModalComponent>,
    private elementRef: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data: IFeature
  ) {
    Object.assign(this.feature, data);
    this.descriptionTextarea = this.elementRef.nativeElement.querySelector(
      '#descriptionTextarea'
    );
    this.titleInput =
      this.elementRef.nativeElement.querySelector('#titleInput');
  }

  editTitle() {
    this.hasClickedOnTitle = true;
    setTimeout(() => {
      this.titleInput.nativeElement.focus();
    });
  }
  updateTitle() {
    try {
      if (!this.updateFeatureForm.get('name')?.errors) {
        const name = this.updateFeatureForm.get('name')?.value;
        this.update({ name });
        this.hasClickedOnTitle = false;
      }
    } catch (e) {
      console.error(e);
    }
  }

  editDescription() {
    this.hasClickedOnDescription = true;
    setTimeout(() => {
      this.descriptionTextarea.nativeElement.focus();
    });
  }
  updateDescription() {
    try {
      const description = this.updateFeatureForm.get('description')?.value;
      this.update({ description });
      this.hasClickedOnDescription = false;
    } catch (e) {
      console.error(e);
    }
  }

  update(data: IFeatureUpdate) {
    try {
      const feature_id: string = this.data.id;

      this.featuresService.updateFeature(feature_id, data);

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
