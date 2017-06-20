import { Injectable } from '@angular/core';
//servicio de ropa
//Prueba de servicios.
@Injectable()
export class RopaService {
  public nombrePrenda = 'pantalones';
  public prendas = ["pantalon blanco","camisa roja"]
  constructor() {

  }
  pruebaService(nombrePrenda) {
    return nombrePrenda;
  }
  addRopa(prenda:string){
    this.prendas.push(prenda);
    return this.getRopa();
  }
  getRopa():Array<string>{
    return this.prendas;
  }
  deletRopa(i:number){
    this.prendas.splice(i,1);
    return this.getRopa();
  }

}
