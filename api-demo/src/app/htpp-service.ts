import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtppService {
  
  readonly #http=inject(HttpClient);

  get<T>(endpoint:string,callback:(res:T)=> void,errorCallback?:(err:HttpErrorResponse)=>void){
    this.#http.get<T>(endpoint).subscribe({
      next:(res)=>{ callback(res)},
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        if(errorCallback) {errorCallback(err);}
      }
    });
  }
}
