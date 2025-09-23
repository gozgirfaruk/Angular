import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoPipe } from './todo-pipe';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TodoPipe],
  template:`<h1>Pipe</h1>
  <div>
    <input [(ngModel)]="work">
    <button (click)="save()">Save</button>
  </div>
  <div>
    <input type="search" [(ngModel)]="search" placeholder="Search something...">
    <ul>
      @for(value of todos | todo:search; track value){
        <li>{{value}}</li>
      }
    </ul>
  </div>`
})
export class App {
  work:string="";
  todos:string[]=["Domates","Armut","Elma"];
  search:string="";
  save(){
    this.todos.push(this.work);
  }
}
