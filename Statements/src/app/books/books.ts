import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="name" />
    <button (click)="save()">Save</button>
  `,
})
export class Books {
  @Input() name = '';
  @Output() myEvent = new EventEmitter<string>();

  save() {
    this.myEvent.emit(this.name);
  }
}
