import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  repeatPass: string = 'none';
  RPWD: any;


  constructor(private authService: AuthService){ }

  ngOnInit(): void {}

  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")
    ]),
    lastname: new FormControl('',  [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")
    ]),
    email: new FormControl('',  [
      Validators.required,
      Validators.email
    ]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    genero: new FormControl('', [Validators.required]),

    pwd: new FormControl('',  [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    rpwd: new FormControl(''),
  });

    registerSubmited(){
      if(this.PWD.value == this.RPWD.value){
        console.log(this.registerForm.valid);
        this.repeatPass = 'none'

        this.authService.registerUser().subscribe(res =>{
          console.log(res);
        })

      }else{
        this.repeatPass = 'inline'
      }
  }

  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get('lastname') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get Telefone(): FormControl {
    return this.registerForm.get("telefone") as FormControl;
  }
  get Genero(): FormControl {
    return this.registerForm.get("genero") as FormControl;
  }
  get PWD(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }

}
