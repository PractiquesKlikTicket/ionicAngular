import { Component } from '@angular/core';
import { DatosPropComponent} from '../datos-prop/datos-prop.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  
   inputPrueba="";
   textPrueba="s"

  constructor() {};

  logForm(){
   
this.textPrueba=this.inputPrueba;
console.log(this.inputPrueba)
  }

}
