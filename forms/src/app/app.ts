import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="group" (ngSubmit)="save()">
      <div>
        Title : <input formControlName="title" name="title" />
      </div>
      <div>
        Completed : <input formControlName="completed" name="completed" type="checkbox" />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  `,
})
export class App {
  group = new FormGroup({
    title: new FormControl("",[Validators.required, Validators.minLength(2)]),
    completed: new FormControl(false),
  });

  // Set Default Value
  constructor(){
    this.group.setValue({title:"Default",completed:true});
    this.group.controls["title"].setValue("Default2");
  }

  save() {
    console.log(this.group.valid);
    console.log(this.group.value);
    this.group.reset();
  }
}
