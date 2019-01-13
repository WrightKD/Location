import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface obj{
 latitude: string;
 longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<obj>('https://ipapi.co/json/')
  }
}
