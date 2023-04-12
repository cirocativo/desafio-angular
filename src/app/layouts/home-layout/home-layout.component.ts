import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SideNavComponent } from 'src/app/side-nav/side-nav.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent {
  @ViewChild(SideNavComponent) sideNavComponent!: SideNavComponent;

  constructor(public snackbar: MatSnackBar) {}
}
