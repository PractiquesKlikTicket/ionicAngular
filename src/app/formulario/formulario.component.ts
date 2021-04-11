import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DatosPropComponent} from '../datos-prop/datos-prop.component';



import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})



export class FormularioComponent implements OnInit {
  form = {
    input: '',
    select: '',
    checkbox: false,
   
  };



  @ViewChild(DatosPropComponent) child;

  constructor(public toastController: ToastController) { }

  ngOnInit() {}

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  
  logForm() {
    console.log(this.form)


    document.getElementById('enviarForm').addEventListener('click', (event) => {
      event.preventDefault();

   if(!this.form.input || this.form.input.length<=3){

    let messageI="Introdice bien el input"

    this.presentToast(messageI);
    return;

   }if(!this.form.checkbox){

    let messageC="Acepta el Checbox"
    this.presentToast(messageC);
    return;

   }if(!this.form.select){

    let messageS="Selecciona una opcion"
    this.presentToast(messageS);
    return;

   }

    
//navigate 




    })
    
  }

  

  checkBoxCheck(){
    console.log("cambio")
this.form.checkbox=true;


  }

}
