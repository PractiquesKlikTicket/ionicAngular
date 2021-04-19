import { Component, OnInit } from '@angular/core';

import { ServicioImgService  } from "../servicio-img.service";

import { Router } from "@angular/router";



@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.scss'],
})
export class SubirImagenComponent implements OnInit {

  constructor(public photoService: ServicioImgService, private router: Router) { }

  ngOnInit() {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  navigationGalery(){
    this.router.navigate(['galeria']);
  }

}


