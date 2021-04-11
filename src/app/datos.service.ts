import { Injectable } from '@angular/core';

@Injectable()

export class DatosService {

  private formDatos={
    input:"payaso",
    select:"ss",
    check:"ss"
  }
  constructor() { }


  public getDatos(){
    return this.formDatos;
  }

  public setDatos(datos){
    this.formDatos.input=datos.input;
    this.formDatos.select=datos.select;
    this.formDatos.check=datos.checkbox;
  }


}
export interface formDatos{
  input:string;
  select:string;
  check:string;
}
