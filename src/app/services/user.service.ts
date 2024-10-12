import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // HttpClient sigue siendo necesario
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getRandomUser(): Observable<any> {
    return this.http.get('https://randomuser.me/api/');
  }
}
