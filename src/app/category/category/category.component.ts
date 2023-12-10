import { Component, OnInit } from '@angular/core';

import { DemoserviceService } from '../../demoservice.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  mysterys : any;
  kids : any;
  novels : any;
  religions : any;
  bios: any;
  
  constructor ( private _demoservice: DemoserviceService, private el: Router) {}

  ngOnInit(){
    this._demoservice.getDetails().subscribe( data => this.mysterys = data.filter(d => d.categoryId == 1));

    this._demoservice.getDetails().subscribe( data => this.kids = data.filter(d => d.categoryId == 2));

    
    this._demoservice.getDetails().subscribe( data => this.novels = data.filter(d => d.categoryId == 3));

    this._demoservice.getDetails().subscribe( data => this.religions = data.filter(d => d.categoryId == 4));

    this._demoservice.getDetails().subscribe( data => this.bios = data.filter(d => d.categoryId == 5));
  }


  names = [];
  // items = Array = [];

  addCart(name: any){
    // console.log(this.name.push = name);
    return this.names = name; 
  }
}
