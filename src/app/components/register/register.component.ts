import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(){ }

  ngOnInit(): void {
  }

  registerform = new FormGroup({
    firstname: new FormControl("",[validators.required]),
    lastname: new FormControl(""),
    email: new FormControl(""),
    telefone: new FormControl(""),
    genero: new FormControl(""),
    pwd: new FormControl(""),
    rpwd: new FormControl(""),
  });
  registerSubmited(){
    console.log(this.registerform.get("firstname"));
  }


}