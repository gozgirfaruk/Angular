import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl:"./login.html"
})
export class Login {
constructor(private myRoute:Router){}
  signIn(){
    this.myRoute.navigate(["/"]);
  }
}
