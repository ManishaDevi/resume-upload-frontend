import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host: string = 'http://127.0.0.1:3000'
  constructor(public http: HttpClient) {
    console.log('Hello ApiService');
  }
  user: any = {}
  submit(user: any) {
    return this.http.post(`${this.host}/submit`, user)
  }
}
