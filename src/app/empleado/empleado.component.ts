import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.scss'
})
export class EmpleadoComponent {
  public title = "Bienvenido empleado";
  public empleado: Empleado;
  //public trabajador: Array<any>;

  constructor() {
    this.empleado = new Empleado("Pedro", "Martin", 44)
    //this.trabajador = [new Empleado("Jose", "Gomez", 22)]
  }
  ngOnInit() {
    console.log(this.empleado)
  }
}
