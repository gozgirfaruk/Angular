import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template:`
    <h1>ToDo App</h1>
@if(!isUpdateworkActive){   <div>
      <label>Work :</label>
      <input [(ngModel)]="work" type="text">
    <button (click)="Itemsave()">Save</button>    
    </div>}
    @else{   <div>
      <label>Update Work :</label>
      <input [(ngModel)]="updateWork" type="text">
    <button (click)="ItemUpdate()">Update</button>    
    </div>}
 
    <hr>
    <div>
      <ul>
        @for (item of todos; track item) {
          <li>
            {{item}}
            @if(!isUpdateworkActive){
               <button (click)="ItemDelete($index)">Delete</button>
              <button (click)="get($index)">Update</button>
            }
            </li>
        }
        
      </ul>
    </div>
  `
})
export class App {
  work:string = "";
  todos:string[]=[];
  updateWork:string="";
  updateIndex:number=0;
  isUpdateworkActive : boolean =false;

  Itemsave(){
    this.todos.push(this.work);
    this.work="";
  }

  ItemDelete(index:number){
    this.todos.splice(index,1);
  }


  get(index:number){
    this.updateIndex=index;
    this.updateWork = this.todos[index];
    this.isUpdateworkActive=true;
  }

  ItemUpdate(){
    this.todos[this.updateIndex] = this.updateWork;
    this.isUpdateworkActive=false;
  }
}
