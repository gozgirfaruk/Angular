import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HtppService } from './htpp-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <button (click)="get()">Get</button><router-outlet></router-outlet>`,
})
export class App {
  todos: any[] = [];
  loading:boolean=false;
  //constructor(private http:HttpClient){}
  readonly #http = inject(HttpClient);
   readonly #http2 = inject(HtppService);
  constructor(){
    this.ge2t();
  }
  get() {
    this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos',{
      headers:new HttpHeaders({
        "Content-Type":"application/json"
      }),
      params:new HttpParams().set("userId",1).set("role","admin")
    }).subscribe({
      next: (res) => {
        this.todos = res;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  post() {
    const body = {
      title: '',
      userId: 0,
    };
    this.#http
      .post<{ message: string }>('https://jsonplaceholder.typicode.com/todos', body)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
  }

  ge2t(){
    this.loading=true;
    this.#http2.get<any[]>("endpoint",(res)=>{
    });
  }

  ge3t(){
    this.loading=true;
    this.#http2.get<any[]>("endpoint",(res)=>{
      // Başarılı ise
    },(err)=>{
      //Hatalı ise 
    })
  }
}