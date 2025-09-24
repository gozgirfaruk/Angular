import { Component } from '@angular/core';
import { List } from '../list/list';

@Component({
  selector: 'app-products',
  imports: [List],
  template:`<h1>Products Component</h1>
  <hr>
  <app-list [products]="products" />`
})
export class Products {

  products:any[]=[
  { 
    isim:"Computer",
    price:10000
  },
  {
    isim:"Phone",
    price:22500
  },
  {
    isim:"Macbook",
    price:17200
  }
  ]
}