import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import {VistaApiComponent} from './vista-api/vista-api.component';
import { HomePage } from "./home/home.page";
import { DatosPropComponent } from "./datos-prop/datos-prop.component";
import { FormularioComponent } from "./formulario/formulario.component";
import {  RecibirObjetoComponent } from "./recibir-objeto/recibir-objeto.component";
import {DatosService} from "./datos.service"
 //Imagenes
 import {SubirImagenComponent} from "./imagenes/subir-imagen/subir-imagen.component";
 import {ServicioImgService } from "./imagenes/servicio-img.service"
 import { ListadoImagenesComponent } from "./imagenes/listado-imagenes/listado-imagenes.component"

//Importaciones Errores


@NgModule({
  declarations: [AppComponent,VistaApiComponent,HomePage, DatosPropComponent, FormularioComponent, RecibirObjetoComponent, SubirImagenComponent, ListadoImagenesComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,CommonModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DatosService, ServicioImgService],
  bootstrap: [AppComponent],
})
export class AppModule {}
