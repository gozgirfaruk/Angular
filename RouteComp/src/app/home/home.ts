import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
constructor(private activated:ActivatedRoute){
  this.activated.params.subscribe((res)=>{
    console.log(res);
  })
}
}
