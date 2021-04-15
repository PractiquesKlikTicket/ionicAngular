import { Component, OnInit } from '@angular/core';

import { ServicioImgService  } from "../servicio-img.service";



@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.scss'],
})
export class SubirImagenComponent implements OnInit {

  constructor(public photoService: ServicioImgService) { }

  ngOnInit() {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
