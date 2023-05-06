import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseServerUrl = 'https://localhost:44342/api/';

  registerUser(user: Array<string>){
   return this.http.post(
    this.baseServerUrl + 'User/CreateUser',
   {
    FisrtName: user[0],
    LastName: user[1],
    Email: user[2],
    Telefone:user[3],
    genero: user[4],
    Pwd: user[5]
  },
   {
    responseType: 'text',
   }
   );
 }
}
