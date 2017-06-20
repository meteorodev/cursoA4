import { Component, OnInit } from '@angular/core';
import {Amigo} from './amigo';
@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.component.html',
  styleUrls: ['./amigo.component.css']
})
export class AmigoComponent implements OnInit {
  public listAmigos:Array<Amigo>;
  public colorSelect:string="blue";
  public amigoSelec:Amigo;
  constructor() { 
    this.listAmigos=[
      new Amigo("Rosa","Angela",30,true,"green",false),
      new Amigo("Renata","Naheli",4,true,"blue",false),
      new Amigo("Bastian","Alejandro",1,false,"red",false)
    ]
  }

  ngOnInit() {
    this.amigoSelec=this.listAmigos[0];
    this.amigoSelec.selecionado = true;
  }
  public agregaamigo(nuevo:Amigo){
    this.listAmigos[this.listAmigos.length]=nuevo;
  }
  public changeColor(color:string){

  }
  public selecAmigo(amigoSelect:Amigo){         
    this.amigoSelec.selecionado = false;
    this.amigoSelec=amigoSelect;
    this.amigoSelec.selecionado = true;
  }

  public listaramigos() {
    for(let i = 0;i<this.listAmigos.length;i++){
      console.log(this.listAmigos[i].nombre +" "+
      this.listAmigos[i].apellido +" "+
      this.listAmigos[i].edad +" "+
      this.listAmigos[i].habla +" "+
      this.listAmigos[i].color,
       this.listAmigos[i].selecionado);
    }

  }
}
