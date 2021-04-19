import { Component, OnInit } from '@angular/core';
import { ServicioImgService  } from "../servicio-img.service";
import { CommonModule } from "@angular/common";


import { Router } from "@angular/router";
import { ModalController,IonRouterOutlet } from '@ionic/angular';
import { PaginaModeloComponent  } from "../pagina-modelo/pagina-modelo.component";



@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrls: ['./listado-imagenes.component.scss'],

})


export class ListadoImagenesComponent implements OnInit {



  constructor(public photoService: ServicioImgService, private router: Router, public modalController: ModalController, private routerOutlet: IonRouterOutlet) { }



  async ngOnInit() {

   await this.photoService.loadSaved();
  }
  navigationImport(){
    this.router.navigate(['subirimagen']);
  }

  async presentModal(photo) {
    const modal = await this.modalController.create({
      component: PaginaModeloComponent ,
      cssClass: 'my-custom-class',
      componentProps: {
        'photo': photo,
      },
      swipeToClose: true,
      presentingElement: await this.modalController.getTop()
    });
    return await modal.present();
  }



}
