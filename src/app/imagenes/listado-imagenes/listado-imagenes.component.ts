import { Component, OnInit } from '@angular/core';
import { ServicioImgService  } from "../servicio-img.service";

@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrls: ['./listado-imagenes.component.scss'],
})
export class ListadoImagenesComponent implements OnInit {

  

  constructor(public photoService: ServicioImgService) { }

  ngOnInit() {

    this.photoService.loadSaved();
  }

}
