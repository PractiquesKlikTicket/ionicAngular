import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DatosPropComponent} from '../datos-prop/datos-prop.component';

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

  
  
  formInput="";
  formSelect="";
  formCheck="";

  @ViewChild(DatosPropComponent) child;

  constructor() { }

  ngOnInit() {}

  
  logForm() {
    console.log(this.form)
    console.log(this.formSelect)

    
  }

  checkBoxCheck1(){

    this.form.checkbox=true;
  }

  checkBoxCheck(){
    console.log("cambio")
this.form.checkbox=true;


  }

}
