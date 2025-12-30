import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }


  logIn(email:string, password:string):Observable<any>{
    return this._HttpClient.get('https://6954286b1cd5294d2c7c0d56.mockapi.io/users/users')
  }
}
