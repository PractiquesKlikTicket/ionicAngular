import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { ServicioImgService  } from "../servicio-img.service";

@Component({
  selector: 'app-pagina-modelo',
  templateUrl: './pagina-modelo.component.html',
  styleUrls: ['./pagina-modelo.component.scss'],
})
export class PaginaModeloComponent implements OnInit {
  @Input() photo: object;


  constructor(private router: Router, public modalController: ModalController, public alertController: AlertController, public photoService: ServicioImgService) { }

  ngOnInit() {}



  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirma!!!',
      message: 'Estas seguro de eliminar la imagen?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelado');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.borrarDeBase();
          }
        }
      ]
    });

    await alert.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  eliminar(){
console.log("Mayor")
this.presentAlertConfirm();
  }

  return(){
    this.router.navigate(['galeria'])
  }

  borrarDeBase(){
    this.photoService.deleteImage(this.photo)

    this.dismiss();
  }

}
