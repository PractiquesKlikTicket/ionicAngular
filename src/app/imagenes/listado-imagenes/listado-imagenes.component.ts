import { Component, OnInit } from '@angular/core';
import { ServicioImgService  } from "../servicio-img.service";
import { CommonModule } from "@angular/common";
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router } from "@angular/router";
import { ModalController,IonRouterOutlet } from '@ionic/angular';
import { PaginaModeloComponent  } from "../pagina-modelo/pagina-modelo.component";




@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrls: ['./listado-imagenes.component.scss'],

})


export class ListadoImagenesComponent implements OnInit {



  constructor(public photoService: ServicioImgService, private router: Router, public modalController: ModalController, private routerOutlet: IonRouterOutlet, public alertController: AlertController, public actionSheetController: ActionSheetController) { }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camara',
        role: 'camara',
        icon: 'camera',
        handler: () => {
          console.log('Camera clicked');
          this.addPhotoToGallery()
        }
      }, {
        text: 'Importar',
        icon: 'duplicate-outline',
        handler: () => {
          console.log('Importar clicked');
          this.openFileSystem();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }




  async presentAlertConfirm(photo) {
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
            this.borrarDeBase(photo);
          }
        }
      ]
    });

    await alert.present();
  }


  async ngOnInit() {

   await this.photoService.loadSaved();
  }
  navigationImport(){


  this.presentActionSheet();


    
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


  borrarDeBase(photo){
    this.photoService.deleteImage(photo)

    
  }

eliminar(photo){
console.log("Mayor")
this.presentAlertConfirm(photo);
  }


  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  openFileSystem(){

    this.photoService.openFile();
  }




}
