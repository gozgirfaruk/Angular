import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Contact } from './contact/contact';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Contact,AboutComponent,NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');

  helloWorld:string = "Hello My Name Is `Never Mind`";
  pclassName:string ="red";
  clickMe(){
    alert("Tıklama İşlemi Gerçekleştirildi")
  };

  changeText(event:any){
      this.helloWorld = event.target.value;
  };
}
