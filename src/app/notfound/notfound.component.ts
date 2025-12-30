import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {
  constructor(private _Router:Router){}

  isLoggedin(){
    if(localStorage.getItem('_token')){
      this._Router.navigate(['/products'])
    }else{
      this._Router.navigate(['/login'])
    }
  }
}
