import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeaturesService } from 'src/app/services/features.service';
import { IServiceHandler, IServiceHttp, IFeatureHttp } from 'src/interfaces';

@Component({
  selector: 'app-delete-service-confirmation-modal',
  templateUrl: './delete-service-confirmation-modal.component.html',
  styleUrls: ['./delete-service-confirmation-modal.component.css'],
})
export class DeleteServiceConfirmationModalComponent {
  feature: IFeatureHttp;
  service: IServiceHttp = {} as IServiceHttp;
  constructor(
    private snackbar: MatSnackBar,
    private featuresService: FeaturesService,
    public dialogRef: MatDialogRef<DeleteServiceConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IServiceHandler
  ) {
    console.log(data);

    this.feature = data.feature;
    const service = data.feature.services.find(
      (service) => service.id === data.serviceId
    );
    Object.assign(this.service, service);
  }
  cancel(): void {
    this.dialogRef.close();
  }
  delete(): void {
    this.featuresService
      .deleteServiceFromFeature(this.feature.id, this.service.id)
      .subscribe({
        next: () => {
          this.snackbar.open('Service deleted successfully!', undefined, {
            duration: 1500,
          });
          this.cancel();
        },
        error: (error) => {
          this.snackbar.open(error, undefined, {
            duration: 3000,
          });
          this.cancel();
        },
      });
  }
}
