import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { AmigoComponent } from './amigo/amigo.component';
import { DependenciaComponent } from './dependencia/dependencia.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { Form1Component } from './formstest/form1/form1.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
const appRoutes: Routes = [
    {path:'',component : HomeComponent},
    {path:'home',component : HomeComponent},
    {path:'home/:par',component : HomeComponent},
    {path:'amigo',component:AmigoComponent},
    {path:'dependencia',component:DependenciaComponent},
    {path:'dependencia/:par',component:DependenciaComponent},
    {path:'form1',component:Form1Component},
    {path:'plantillas',component:PlantillasComponent},
    {path:'error',component:ErrorComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);