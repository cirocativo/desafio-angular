import { Component } from '@angular/core';
import { FeatureNode, IFeature } from 'src/interfaces';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  data: FeatureNode[] = [];
  searchText = '';

  constructor(private featuresService: FeaturesService) {}

  onSearchTextChanged(text: string) {
    this.searchText = text;
    this.refreshData();
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

    // this.featureTreeComponent.dataSource.data = this.data;
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
