import { Component, OnInit } from '@angular/core';

import { DatosService } from "../datos.service";

@Component({
  selector: 'app-recibir-objeto',
  templateUrl: './recibir-objeto.component.html',
  styleUrls: ['./recibir-objeto.component.scss'],
})
export class RecibirObjetoComponent implements OnInit {

formularioDatos:{input: string, select: string, check: string}

  constructor( private datosService: DatosService) { }

  ngOnInit() {


    this.formularioDatos=this.datosService.getDatos();


  }

}
