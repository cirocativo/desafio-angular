import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { getFeatureById } from 'src/database/features.controller';
import { IFeature } from 'src/interfaces';
import { NewServiceModalComponent } from '../modals/new-service-modal/new-service-modal.component';
import { EditServiceModalComponent } from '../modals/edit-service-modal/edit-service-modal.component';
import { DeleteServiceConfirmationModalComponent } from '../modals/delete-service-confirmation-modal/delete-service-confirmation-modal.component';
import { DeleteFeatureConfirmationModalComponent } from '../modals/delete-feature-confirmation-modal/delete-feature-confirmation-modal.component';
import { EditFeatureModalComponent } from '../modals/edit-feature-modal/edit-feature-modal.component';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  description: string;
  id: string;
  index: number;
  method: string;
}
interface FeatureNode {
  name: string;
  description: string;
  id: string;
  index: number;
  method: string;
  children?: FeatureNode[];
}

@Component({
  selector: 'app-feature-tree',
  templateUrl: './feature-tree.component.html',
  styleUrls: ['./feature-tree.component.css'],
})
export class FeatureTreeComponent {
  @Input() data: FeatureNode[] = [];

  @Output() treeChanged: EventEmitter<FeatureNode[]> = new EventEmitter();

  onTreeChanged() {
    this.treeChanged.emit();
  }

  private _transformer = (node: FeatureNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      description: node.description,
      id: node.id,
      index: node.index,
      method: node.method,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
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

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.dataSource.data = this.data;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  openFeatureDetails(node: ExampleFlatNode) {
    try {
      const feature: IFeature = getFeatureById(node.id);
      const dialogRef = this.dialog.open(EditFeatureModalComponent, {
        data: feature,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.onTreeChanged();
      });
    } catch (e) {
      if (e instanceof Error)
        this.snackBar.open(e.message, undefined, {
          duration: 1500,
        });
    }
  }

  addService(node: ExampleFlatNode) {
    try {
      const feature: IFeature = getFeatureById(node.id);

      const dialogRef = this.dialog.open(NewServiceModalComponent, {
        data: { feature: feature },
      });

      dialogRef.afterClosed().subscribe(() => {
        this.onTreeChanged();
      });
    } catch (e) {
      if (e instanceof Error)
        this.snackBar.open(e.message, undefined, {
          duration: 1500,
        });
    }
  }

  openServiceDetails(node: ExampleFlatNode) {
    try {
      const feature: IFeature = getFeatureById(node.id);
      console.log(feature, node.index);
      const dialogRef = this.dialog.open(EditServiceModalComponent, {
        data: {
          feature: feature,
          serviceIndex: node.index,
        },
      });

      dialogRef.afterClosed().subscribe(() => {
        this.onTreeChanged();
      });
    } catch (e) {
      if (e instanceof Error)
        this.snackBar.open(e.message, undefined, {
          duration: 1500,
        });
    }
  }

  deleteService(node: ExampleFlatNode) {
    try {
      const feature: IFeature = getFeatureById(node.id);

      const dialogRef = this.dialog.open(
        DeleteServiceConfirmationModalComponent,
        {
          data: {
            feature: feature,
            serviceIndex: node.index,
          },
        }
      );

      dialogRef.afterClosed().subscribe(() => {
        this.onTreeChanged();
      });
    } catch (e) {
      if (e instanceof Error)
        this.snackBar.open(e.message, undefined, {
          duration: 1500,
        });
    }
  }

  deleteFeature(node: ExampleFlatNode): void {
    try {
      const feature: IFeature = getFeatureById(node.id);
      const dialogRef = this.dialog.open(
        DeleteFeatureConfirmationModalComponent,
        {
          data: feature,
        }
      );

      dialogRef.afterClosed().subscribe(() => {
        this.onTreeChanged();
      });
    } catch (e) {
      if (e instanceof Error)
        this.snackBar.open(e.message, undefined, {
          duration: 1500,
        });
    }
  }
}
