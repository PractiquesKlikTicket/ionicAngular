import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-datos-prop',
  templateUrl: './datos-prop.component.html',
  styleUrls: ['./datos-prop.component.scss'],
})
export class DatosPropComponent implements OnInit {

@Input() textPrueba:object;

  constructor() { }

  ngOnInit() {
    console.log(this.textPrueba)
  }

}
