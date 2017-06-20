import { Component, OnInit } from '@angular/core';
//para trabajro con router
//importando los routers
import { Router, ActivatedRoute, Params } from '@angular/router'

//importando los servicios
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-dependencia',
  templateUrl: './dependencia.component.html',
  styleUrls: ['./dependencia.component.css'],
  providers:[RopaService]
})
export class DependenciaComponent implements OnInit {
  public depende: Array<string>;
  public parametro;
  public listaPrendas;
  public prendaGuardar:string;
  constructor(private _route: ActivatedRoute, private _router: Router, private ropaService:RopaService) {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['toView'];
      console.log(params);
    });
    this.depende = ["Si", "NO"];
  }

  ngOnInit() {
    console.log(this.ropaService.pruebaService("pantalon"));
    this.listaPrendas = this.ropaService.getRopa();
  }

  //Redirigir con parametros
  public redirigir() {
    this._router.navigate(['/dependencia', 'Hola']);
  }
  public toHome() {
    this._router.navigate(['/home']);
  }
  guardaPrenda(prendaGuardar){
    this.ropaService.addRopa(prendaGuardar);
    this.prendaGuardar=null;
  }
  elimiaPrenda(i:number){
    alert("eliminando "+i);
    this.ropaService.deletRopa(i);
    
  }
}
