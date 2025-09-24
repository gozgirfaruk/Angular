import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  template:`
  <table>
    <thead>
      <tr>
        <td>#</td>
        <td>Name</td>
        <td>Price</td>
      </tr>
    </thead>
    <tbody>
      @for (item of products; track products) {
      <tr>
        <td>{{$index}}</td>
        <td>{{item.isim}}</td>
        <td>{{item.Price}}</td>
      </tr>
      }
    </tbody>
  </table>
  `
})
export class List {
  @Input() products : any[]=[];
}
