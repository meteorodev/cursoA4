import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { AmigoComponent } from './amigo/amigo.component';
import { DependenciaComponent } from './dependencia/dependencia.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { Form1Component } from './formstest/form1/form1.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

@NgModule({
  declarations: [
    AppComponent,
    AmigoComponent,
    DependenciaComponent,
    ErrorComponent,
    HomeComponent,
    ConversorPipe,
    Form1Component,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
