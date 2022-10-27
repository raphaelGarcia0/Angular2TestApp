import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  constructor(private _httpClient: HttpClient) { }

  get(url: string): Observable<any> {
    return this._httpClient.get(url)
  }
  getcurrent(url:string,id:number):Observable<any>{
    return  this._httpClient.get(url+id)
    }


  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model)
    // let httpheader = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpClient.post(url, model)
  }

  delete(url:string,id:number):Observable<any>{
  
    return  this._httpClient.delete(url+id)
    }

  update(url:string,id:number,data:any):Observable<any>{
  
    return  this._httpClient.put(url+id,data)
    }
}
