import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface data{
  
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get('https://ipapi.co/json/')
  }
}
