import { Component } from '@angular/core';
import { Coche } from './coches';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.scss'
})
export class CochesComponent {
    public coche: Coche;

    constructor() {
      this.coche = new Coche("Audi", "cien")
    }
}
