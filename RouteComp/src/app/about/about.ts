import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  constructor(private myRoute:Router){

  }
method(){
this.myRoute.navigate(["contact"]);
//this.myRoute.navigateByUrl("/about");
}
}
