import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  FeatureNode,
  IFeatureHttp,
  IGetFeaturesResponse,
} from 'src/interfaces';
import { FeatureTreeComponent } from 'src/app/feature-tree/feature-tree.component';
import { NewFeatureModalComponent } from 'src/app/modals/new-feature-modal/new-feature-modal.component';
import { FeaturesService } from 'src/app/services/features.service';
import { SideNavComponent } from 'src/app/side-nav/side-nav.component';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchBoxComponent } from 'src/app/search-box/search-box.component';

@Component({
  selector: 'app-feature-layout',
  templateUrl: './feature-layout.component.html',
  styleUrls: ['./feature-layout.component.css'],
})
export class FeatureLayoutComponent {
  data: FeatureNode[] = [];

  searchText = '';

  addButtonTooltip = 'Add Feature';

  length = 0;
  pageSizeOptions = [5, 10];

  offset = 0;
  limit = 5;

  featuresResponse!: IGetFeaturesResponse;

  @ViewChild(FeatureTreeComponent) featureTreeComponent!: FeatureTreeComponent;
  @ViewChild(SideNavComponent) sideNavComponent!: SideNavComponent;
  @ViewChild(SearchBoxComponent) searchBoxComponent!: SearchBoxComponent;

  constructor(
    public dialog: MatDialog,
    private featuresService: FeaturesService,
    private snackBar: MatSnackBar
  ) {
    setTimeout(() => {
      const searchText = localStorage.getItem('searchText');

      const pageSize = localStorage.getItem('pageSize');
      const offset = localStorage.getItem('offset');

      if (searchText) {
        this.searchText = searchText;
        this.searchBoxComponent.enteredSearchValue = searchText;
      }
      if (pageSize) this.limit = parseInt(pageSize);
      else {
        this.limit = 5;
        localStorage.setItem('pageSize', '5');
      }
      if (offset) this.offset = parseInt(offset);
      else {
        this.offset = 0;
        localStorage.setItem('offset', '0');
      }
      this.refreshDataHttp();
    });
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.offset = e.pageIndex * e.pageSize;
    this.limit = e.pageSize;

    this.refreshDataHttp();
  }

  onSearchTextChanged(text: string) {
    this.searchText = text;
    this.offset = 0;
    localStorage.setItem('searchText', text);
    this.refreshDataHttp();
  }
  addNewFeature(): void {
    const dialogRef = this.dialog.open(NewFeatureModalComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.refreshDataHttp();
    });
  }

  refreshDataHttp() {
    localStorage.setItem('pageSize', this.limit.toString());
    localStorage.setItem('offset', this.offset.toString());

    this.featuresService
      .getFeaturesBySearch(this.offset, this.limit, this.searchText)
      .subscribe({
        next: (res) => {
          this.featuresResponse = res;
          console.log(res);
          this.data = this.transformToTree(res.items);
          this.featureTreeComponent.dataSource.data = this.data;

          this.length = res.count;
        },
        error: (error) => {
          console.log('Error while refreshing data', error);
          this.snackBar.open(error, undefined, {
            duration: 3000,
          });
        },
      });
  }

  refreshDataWithSearch(text: string) {
    this.featuresService
      .getFeaturesBySearch(this.offset, this.limit, text)
      .subscribe({
        next: (res) => {
          this.featuresResponse = res;
          console.log(res);
          this.data = this.transformToTree(res.items);
          this.featureTreeComponent.dataSource.data = this.data;

          this.length = res.count;
        },
        error: (error) => {
          console.log('Error while refreshing data', error);
          this.snackBar.open(error, undefined, {
            duration: 3000,
          });
        },
      });
  }

  transformToTree(features: IFeatureHttp[]): FeatureNode[] {
    const transformedData: FeatureNode[] = [];

    features.forEach((feature) => {
      const featureNode = {} as FeatureNode;
      featureNode.name = feature.name;
      featureNode.description = feature.description;
      featureNode.id = feature.id;
      featureNode.hasServices = feature.services.length > 0;

      const services: FeatureNode[] = [];
      if (feature.services.length === 0) {
        const serviceNode: FeatureNode = {
          ...featureNode,
          isFalseService: true,
        };
        services.push(serviceNode);
      }
      feature.services.forEach((service, index) => {
        const serviceNode = {} as FeatureNode;
        serviceNode.name = service.method + ' ' + service.endpoint;
        serviceNode.description = service.description || '';
        serviceNode.id = service.id;
        serviceNode.featureId = feature.id;
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
