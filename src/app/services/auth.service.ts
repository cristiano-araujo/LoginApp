import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: any;
  constructor(http: HttpClient) { }

  baseServerUrl = "https://localhost:7268/api/";

  registerUser(){
   return this.http.post(this.baseServerUrl + "User/CreateUser", null,
   {responseType: 'text'});
  }

}
