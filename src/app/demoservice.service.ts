import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Demointerface } from './demointerface'

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  url : string =  "assets/data/data.json"
  addCart: any;

  constructor( private http : HttpClient) { }

  getDetails(): Observable<Demointerface[]>{
    return this.http.get<Demointerface[]>(this.url)
  }
}
