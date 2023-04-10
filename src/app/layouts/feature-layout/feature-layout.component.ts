import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeatureNode, IFeature } from 'src/interfaces';
import { FeatureTreeComponent } from 'src/app/feature-tree/feature-tree.component';
import { NewFeatureModalComponent } from 'src/app/modals/new-feature-modal/new-feature-modal.component';
import { FeaturesService } from 'src/app/services/features.service';
import { SideNavComponent } from 'src/app/side-nav/side-nav.component';

@Component({
  selector: 'app-feature-layout',
  templateUrl: './feature-layout.component.html',
  styleUrls: ['./feature-layout.component.css'],
})
export class FeatureLayoutComponent {
  data: FeatureNode[] = [];
  searchText = '';
  addButtonTooltip = 'Add Feature';

  @ViewChild(FeatureTreeComponent) featureTreeComponent!: FeatureTreeComponent;
  @ViewChild(SideNavComponent) sideNavComponent!: SideNavComponent;

  constructor(
    public dialog: MatDialog,
    private featuresService: FeaturesService
  ) {
    console.log('aqui no features');
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
