import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IFeatureService } from 'src/interfaces';

@Component({
  selector: 'app-new-service-modal',
  templateUrl: './new-service-modal.component.html',
  styleUrls: ['./new-service-modal.component.css'],
})
export class NewServiceModalComponent {
  public newServiceForm: FormGroup = this.fb.group({
    method: ['', [Validators.required]],
    endpoint: ['', [Validators.required]],
    description: [''],
  });

  constructor(
    private fb: FormBuilder,

    public dialogRef: MatDialogRef<NewServiceModalComponent>
  ) {}

  create() {
    console.log(this.newServiceForm.value);
    //createFeature(this.newFeatureForm.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
