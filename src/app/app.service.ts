import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}
  sendIt(data) {
    return this.http.post('http://localhost:3000', data);
  }
}
