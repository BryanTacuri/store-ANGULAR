import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar class="main-header" color="primary">
    <a [routerLink]="['/']">My Store</a>
    <app-cart></app-cart>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  
}
