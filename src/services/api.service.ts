import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host: string = 'https://soulskill-backend.herokuapp.com'

  constructor(public http: HttpClient) { }
  submit(user: any) {
    return this.http.post(`${this.host}/submit`, user)
  }

  upload(resumeFile: any) {
    let formData: FormData = new FormData();
    formData.append('resume', resumeFile);
    return this.http.post(`${this.host}/upload`, formData)
  }
}
