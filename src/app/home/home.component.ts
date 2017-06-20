import { Component, OnInit } from '@angular/core';
//para trabajro con router
import { Router, ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo: string = "Bienvenido al curso de Angular ";
  public saludo: string;
  public nombre: string = "";
  public parametro;
  public fecha: Date;
  public jsonVal: Object[] = [{ 'nombre': "Darwin" , 'apellido':"Rosero",'hijos':{'nombre':'Renata'}}];
  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.saludo = "Hola Bienvenido Escribe tu nombre";
    this.fecha = new Date();
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['toView'];
      console.log("el parametro pasado es " + params);
    });
  }
  public saludar(nombre: string) {
    this.nombre = nombre;
    this.saludo = "Hola Bienvenido " + nombre + ", estas dentro de mi app"
  }
}
