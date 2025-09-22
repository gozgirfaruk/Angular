import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Renklendir } from './renklendir';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Renklendir],
  template:`
  <h1 renklendir>Directive</h1>
  <form>
    <input id="name" (keyup)="checkInputValidation($event)" type="text" required minlength="3">
    <div></div>
    <button type="submit">Send</button>
  </form>
  `,
  styleUrl: './app.css'
})
export class App {
  checkInputValidation(event:any){
    const valid = event.target.validity.valid;
    const id = event.target.id;
    const divEl = document.querySelector(`#${id} + div`);
    if(!valid){
      event.target.className = "invalid";
      divEl!.innerHTML = event.target.validationMessage;
    }
    else{
      event.target.className="";
      divEl!.innerHTML = "";
    }
  }
}
