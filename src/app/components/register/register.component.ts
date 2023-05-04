import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")
    ]),
    lastname: new FormControl("",  [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern("[a-zA-Z].*")
    ]),
    email: new FormControl("",  [
      Validators.required,
      Validators.email
    ]),
    telefone: new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    genero: new FormControl("", [Validators.required]),
    pwd: new FormControl("",  [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    rpwd: new FormControl(""),
  });
  registerSubmited(){
    console.log(this.registerform.get("firstname"));
  }
  get FirstName(): FormControl {
    return this.registerform.get("firstname") as FormControl;
  }
  get LastName(): FormControl {
    return this.registerform.get("lastname") as FormControl;
  }
  get Email(): FormControl {
    return this.registerform.get("email") as FormControl;
  }
  get Telefone(): FormControl {
    return this.registerform.get("telefone") as FormControl;
  }
  get Genero(): FormControl {
    return this.registerform.get("genero") as FormControl;
  }
  get PWD(): FormControl {
    return this.registerform.get("pwd") as FormControl;
  }

}
