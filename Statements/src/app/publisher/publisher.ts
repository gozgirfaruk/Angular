import { Component } from '@angular/core';
import { Books } from '../books/books';

@Component({
  selector: 'app-publisher',
  imports: [Books],
  template: `
    <p>{{ name }}</p>
    <hr />
    <app-books [name]="name" (myEvent)="save($event)"></app-books>
  `,
})
export class Publisher {
  name: string = 'Horror';

  save(event: any) {
    console.log(event);
  }
}
