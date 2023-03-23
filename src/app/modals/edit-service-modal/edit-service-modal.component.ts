import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { updateFeatureServiceFromIndex } from 'src/database/features.controller';
import { IService, IServiceHandler } from 'src/interfaces';
import {
  hasValidCharactersValidator,
  startsWithSlashValidator,
  hasNoSpaceValidator,
  endsWithValidCharactersValidator,
} from '../../../validators';

@Component({
  selector: 'app-edit-service-modal',
  templateUrl: './edit-service-modal.component.html',
  styleUrls: ['./edit-service-modal.component.css'],
})
export class EditServiceModalComponent {
  service: IService = {} as IService;
  endpointError: string | null = null;

  public updateServiceForm: FormGroup = this.fbFeature.group({
    method: ['', [Validators.required]],
    endpoint: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^\/(?:[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*(?:\/:[a-zA-Z0-9_-]+)?)+(?!\/|:)$/
        ),
        startsWithSlashValidator,
        hasValidCharactersValidator,
        hasNoSpaceValidator,
        endsWithValidCharactersValidator,
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      this.snackbar.open(error.message, undefined, {
        duration: 3000,
      });
    }
  }
  verifyEndpoint(): void {
    if (
      this.updateServiceForm.get('endpoint')?.hasError('hasValidCharacters')
    ) {
      this.endpointError = "You can't use special characters here";
    } else if (
      this.updateServiceForm.get('endpoint')?.hasError('startsWithSlash')
    ) {
      this.endpointError = "The endpoint must start with a '/'";
    } else if (this.updateServiceForm.get('endpoint')?.hasError('hasNoSpace')) {
      this.endpointError = "you can't use space here";
    } else if (
      this.updateServiceForm
        .get('endpoint')
        ?.hasError('endsWithValidCharacters')
    ) {
      this.endpointError = 'The endpoint cannot end with this character';
    } else if (this.updateServiceForm.get('endpoint')?.hasError('pattern')) {
      this.endpointError = "There's something wrong with the endpoint";
    } else {
      this.endpointError = null;
    }
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
