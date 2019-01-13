import { Component } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  latitude: string ='';
  longitude: string ='';

  location: Object;

  constructor(private map: MapService){}

  ngOnInit(){
    this.map.getLocation().subscribe(data =>{
      console.log(data);
      this.latitude = data.latitude;
      this.longitude = data.longitude;
    })
  }
}
