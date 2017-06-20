import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PeticionesService {
  public url:string;
  constructor(private _http:Http) { 
    this.url="https://jsonplaceholder.typicode.com/posts";
  }
  getPrueba(){
    return 'Desde El servicio';
  }
  //peticiones Get.
  getArticulos(){
    //_http.get hace la peticion a la url
    //.map((res)=> res.json()) Captura la respuesta de la url
    //.json() transforma a a un objeto 
    return this._http.get(this.url).map((res)=>res.json());
  }

}
