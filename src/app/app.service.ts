import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAI(prompt : string){
    return this.http.post("http://localhost:3000/ai", {prompt: prompt});
  }
}
