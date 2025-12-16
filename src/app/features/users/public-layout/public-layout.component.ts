import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Navbar } from "../../../core/layout/navbar/navbar";

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss',
})
export class PublicLayoutComponent {

}
