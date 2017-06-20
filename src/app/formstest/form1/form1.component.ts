import { Component, OnInit } from '@angular/core';
import { Formm } from './formm'
import { PeticionesService } from '../../services/peticiones.service';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  providers:[PeticionesService]
})
export class Form1Component implements OnInit {
  public formm:Formm;
  public articulos;
  constructor(private _peticionesServices:PeticionesService) {
    this.formm = new Formm("","",null);
   }

  ngOnInit() {
    console.log(this._peticionesServices.getPrueba());
    //Llama  a subscribe para capturar la respusta del servicio via Observable
    //permite capturar el resultado o el error mediante callback con funcion flecha
    this._peticionesServices.getArticulos().subscribe(
      result =>{
        console.log(result);
        this.articulos=result;
        if(!this.articulos){
          console.log("ERROR DEL SERVIDOR")
        }
      },
      error => {
        var errorMessage = <any> error;
        console.log(errorMessage);
      }
    );
  }
  onSubmit(){
    console.log(this.formm);
    this.formm = new Formm("","",null);
  }

}
