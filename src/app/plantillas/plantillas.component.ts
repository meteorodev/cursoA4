import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  public titulo:string;
  public administrador:boolean;
  constructor() { 

  }

  ngOnInit() {
    this.titulo="Plantillas ngTemplate en Angular 4";
    this.administrador=true;
  }
  changeAdmin(){
    this.administrador = !this.administrador;
  }
}
