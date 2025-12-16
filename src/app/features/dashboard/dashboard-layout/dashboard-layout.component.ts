import { Component } from '@angular/core';
import { Sidebar } from "../../../core/layout/sidebar/sidebar";
import { RouterOutlet } from "@angular/router";
import { Header } from "../../../core/layout/header/header";

@Component({
  selector: 'app-dashboard-layout',
  imports: [Sidebar, RouterOutlet, Header],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayoutComponent {

}
