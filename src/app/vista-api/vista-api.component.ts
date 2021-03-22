import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';




@Component({
  selector: 'app-vista-api',
  templateUrl: './vista-api.component.html',
  styleUrls: ['./vista-api.component.scss'],
 
})
export class VistaApiComponent implements OnInit {
arrayIMG=[];



  constructor(public apiService: ApiService) { }

  ngOnInit() {

    for (let index = 0; index < 10; index++) {
      
      this.apiService.getDog().subscribe(data=>{
        this.arrayIMG.push(data)
      });
    };
     console.log(this.arrayIMG)
     
  }

}
