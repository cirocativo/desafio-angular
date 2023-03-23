import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFeatureModalComponent } from './modals/new-feature-modal/new-feature-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'desafio-angular';

  constructor(public dialog: MatDialog) {}

  addNewFeature(): void {
    const dialogRef = this.dialog.open(NewFeatureModalComponent);

    dialogRef.afterClosed().subscribe();
  }
}
