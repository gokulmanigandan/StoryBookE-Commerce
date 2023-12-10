import { Component } from '@angular/core';

import{ FormControl, FormGroup, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  signupForm : any;
  constructor(){
   this.signupForm =  new FormGroup({
      'name' : new FormControl ('', [Validators.required, Validators.minLength(3)]),
      'phnumber' : new FormControl ('', [Validators.required, Validators.pattern("^((//+91-?)|0)?[0-9]{10}$")]),
      'email' : new FormControl ('', [Validators.required, Validators.email]),
      'pwd' : new FormControl ('', [Validators.required, Validators.minLength(6)]),
      'country' : new FormControl ('', [Validators.required]),
      'state' : new FormControl ('', [Validators.required]),
      'gender' : new FormControl ('', [Validators.required])

    })
  }

  submitForm(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
      
    }
  }
}
