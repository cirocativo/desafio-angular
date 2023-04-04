import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFeature } from 'src/interfaces';
import { FeatureTreeComponent } from './feature-tree/feature-tree.component';
import { NewFeatureModalComponent } from './modals/new-feature-modal/new-feature-modal.component';
import { FeaturesService } from './services/features.service';
import { SideNavComponent } from './side-nav/side-nav.component';

interface FeatureNode {
  name: string;
  description: string;
  id: string;
  index: number;
  method: string;
  children?: FeatureNode[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: FeatureNode[] = [];
  searchText = '';
  addButtonTooltip = 'Add Feature';

  @ViewChild(FeatureTreeComponent) featureTreeComponent!: FeatureTreeComponent;
  @ViewChild(SideNavComponent) sideNavComponent!: SideNavComponent;

  constructor(
    public dialog: MatDialog,
    private featuresService: FeaturesService
  ) {
    setTimeout(() => {
      this.refreshData();
    });
  }

  onSearchTextChanged(text: string) {
    this.searchText = text;
    this.refreshData();
  }
  addNewFeature(): void {
    const dialogRef = this.dialog.open(NewFeatureModalComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.refreshData();
    });
  }

  refreshData(): void {
    const features = this.featuresService
      .getFeatures()
      .filter((feature) =>
        feature.name
          .toLocaleLowerCase()
          .includes(this.searchText.toLocaleLowerCase())
      );

    this.data = this.transformToTree(features);

    this.featureTreeComponent.dataSource.data = this.data;
  }
  transformToTree(features: IFeature[]): FeatureNode[] {
    const transformedData: FeatureNode[] = [];

    features.forEach((feature) => {
      const featureNode = {} as FeatureNode;
      featureNode.name = feature.name;
      featureNode.description = feature.description;
      featureNode.id = feature.id;
      const services: FeatureNode[] = [];
      feature.services.forEach((service, index) => {
        const serviceNode = {} as FeatureNode;
        serviceNode.name = service.method + ' ' + service.endpoint;
        serviceNode.description = service.description || '';
        serviceNode.id = feature.id;
        serviceNode.index = index;
        serviceNode.method = service.method?.toLowerCase() || '';
        services.push(serviceNode);
      });
      featureNode.children = services;
      transformedData.push(featureNode);
    });

    return transformedData;
  }
}
