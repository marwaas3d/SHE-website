import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router: Router){}

  isLoggedin:boolean =  false



  logInForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required ,Validators.email]),
    password: new FormControl('',[Validators.required  ]),
  });


loggin() {
  if (this.logInForm.invalid) return; 

  const email = this.logInForm.value.email;
  const password = this.logInForm.value.password;

  this._AuthService.logIn(email, password).subscribe(users => {

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      const fakeToken = 'fake-jwt-token-' + user.id;

      localStorage.setItem('_token', fakeToken);
      // console.log(fakeToken);
      this.isLoggedin = false; 
      this._Router.navigate(['/products']);
    } else {
      this.isLoggedin= true
    }
  });
}


}
