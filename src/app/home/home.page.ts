import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  
   inputPrueba="";
   textPrueba=""

  constructor() {};

  logForm(){
   
this.textPrueba=this.inputPrueba;
console.log(this.inputPrueba)
  }

}
