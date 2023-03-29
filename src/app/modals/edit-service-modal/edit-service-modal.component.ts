import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
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
export class EditServiceModalComponent implements AfterViewInit {
  service: IService = {} as IService;
  endpointError: string | null = null;
  hasClickedOnEndpoint = false;
  hasClickedOnDescription = false;

  @ViewChild('endpointInput', { static: false })
  endpointInput: ElementRef<HTMLInputElement>;

  @ViewChild('descriptionTextarea', { static: false })
  descriptionTextarea: ElementRef<HTMLTextAreaElement>;

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
    private elementRef: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data: IServiceHandler
  ) {
    const sourceService = data.feature.services[data.serviceIndex];

    Object.assign(this.service, sourceService);

    this.endpointInput =
      this.elementRef.nativeElement.querySelector('#endpointInput');

    this.descriptionTextarea = this.elementRef.nativeElement.querySelector(
      '#descriptionTextarea'
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateServiceForm.get('endpoint')?.setErrors(null);
    });
  }

  editEndpoint() {
    this.hasClickedOnEndpoint = true;
    setTimeout(() => {
      this.endpointInput.nativeElement.focus();
    });
  }
  updateEndpoint() {
    if (
      this.updateServiceForm.get('endpoint')?.getError('repeatedEndpoint') ||
      this.updateServiceForm.get('method')?.getError('repeatedEndpoint')
    ) {
      this.updateServiceForm.get('endpoint')?.setErrors(null);
      this.updateServiceForm.get('method')?.setErrors(null);
      this.endpointError = null;
    }
    try {
      if (!this.updateServiceForm.get('endpoint')?.errors) {
        this.update();
        if (!this.endpointError) {
          this.hasClickedOnEndpoint = false;
        }
      } else {
        console.log(
          'pegamos no erro',
          this.updateServiceForm.get('endpoint')?.errors
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        this.updateServiceForm
          .get('endpoint')
          ?.setErrors({ repeatedEndpoint: true });
        this.updateServiceForm
          .get('method')
          ?.setErrors({ repeatedEndpoint: true });
        this.endpointError = error.message;
      }
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
      this.update();
      this.hasClickedOnDescription = false;
    } catch (e) {
      console.error(e);
    }
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
      this.updateServiceForm.get('endpoint')?.setErrors(null);
      this.updateServiceForm.get('method')?.setErrors(null);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      this.snackbar.open(error.message, undefined, {
        duration: 3000,
      });

      throw new Error(error.message);
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
