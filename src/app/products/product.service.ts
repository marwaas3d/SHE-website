import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient: HttpClient) { }

  getProducts() :Observable<any>{
     return this._HttpClient.get(`https://6953df0aa319a928023cf23c.mockapi.io/she/products`)
  }
}
