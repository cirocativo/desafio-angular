import { FlatTreeControl } from '@angular/cdk/tree';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { MatPaginator } from '@angular/material/paginator';

import { FeatureNode } from 'src/interfaces';
import { NewServiceModalComponent } from '../modals/new-service-modal/new-service-modal.component';
import { EditServiceModalComponent } from '../modals/edit-service-modal/edit-service-modal.component';
import { DeleteServiceConfirmationModalComponent } from '../modals/delete-service-confirmation-modal/delete-service-confirmation-modal.component';
import { DeleteFeatureConfirmationModalComponent } from '../modals/delete-feature-confirmation-modal/delete-feature-confirmation-modal.component';
import { EditFeatureModalComponent } from '../modals/edit-feature-modal/edit-feature-modal.component';
import { FeaturesService } from '../services/features.service';

interface IFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  description: string;
  id: string;
  featureId: string;
  index: number;
  method: string;
  hasServices: boolean;
  isFalseService: boolean;
}

@Component({
  selector: 'app-feature-tree',
  templateUrl: './feature-tree.component.html',
  styleUrls: ['./feature-tree.component.css'],
})
export class FeatureTreeComponent {
  @Input() data: FeatureNode[] = [];

  @Output() treeChanged: EventEmitter<FeatureNode[]> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  onTreeChanged() {
    this.treeChanged.emit();
  }

  private _transformer = (node: FeatureNode, level: number) => {
    const isFeature = !node.featureId;

    return {
      expandable: isFeature,
      name: node.name,
      level: level,
      description: node.description,
      id: node.id,
      featureId: node.featureId,
      index: node.index,
      method: node.method,
      hasServices: node.hasServices,
      isFalseService: node.isFalseService,
    };
  };

  treeControl = new FlatTreeControl<IFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private featuresService: FeaturesService
  ) {
    this.dataSource.data = this.data;
  }

  hasChild = (_: number, node: IFlatNode) => node.expandable;

  isFalseService = (_: number, node: IFlatNode) => node.isFalseService;

  openFeatureDetails(node: IFlatNode) {
    this.featuresService.getFeature(node.id).subscribe({
      next: (feature) => {
        const dialogRef = this.dialog.open(EditFeatureModalComponent, {
          data: feature,
        });
        dialogRef.afterClosed().subscribe(() => {
          this.onTreeChanged();
        });
      },
      error: (error) => {
        this.snackBar.open(error, undefined, {
          duration: 1500,
        });
      },
    });
  }

  addService(node: IFlatNode) {
    this.featuresService.getFeature(node.id).subscribe({
      next: (feature) => {
        const dialogRef = this.dialog.open(NewServiceModalComponent, {
          data: feature,
        });
        dialogRef.afterClosed().subscribe(() => {
          this.onTreeChanged();
        });
      },
      error: (error) => {
        this.snackBar.open(error, undefined, {
          duration: 1500,
        });
      },
    });
  }

  openServiceDetails(node: IFlatNode) {
    this.featuresService.getFeature(node.featureId).subscribe({
      next: (feature) => {
        const dialogRef = this.dialog.open(EditServiceModalComponent, {
          data: {
            feature: feature,
            serviceId: node.id,
          },
        });
        dialogRef.afterClosed().subscribe(() => {
          this.onTreeChanged();
        });
      },
      error: (e) => {
        this.snackBar.open(e, undefined, {
          duration: 1500,
        });
      },
    });
  }

  deleteService(node: IFlatNode) {
    this.featuresService.getFeature(node.featureId).subscribe({
      next: (feature) => {
        const dialogRef = this.dialog.open(
          DeleteServiceConfirmationModalComponent,
          {
            data: {
              feature: feature,
              serviceId: node.id,
            },
          }
        );
        dialogRef.afterClosed().subscribe(() => {
          this.onTreeChanged();
        });
      },
      error: (e) => {
        this.snackBar.open(e, undefined, {
          duration: 1500,
        });
      },
    });
  }

  deleteFeature(node: IFlatNode): void {
    this.featuresService.getFeature(node.id).subscribe({
      next: (feature) => {
        const dialogRef = this.dialog.open(
          DeleteFeatureConfirmationModalComponent,
          {
            data: feature,
          }
        );

        dialogRef.afterClosed().subscribe(() => {
          this.onTreeChanged();
        });
      },
      error: (error) => {
        this.snackBar.open(error, undefined, {
          duration: 3000,
        });
      },
    });
  }
}
