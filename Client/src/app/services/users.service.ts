import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private baseUrl = 'http://localhost:3000/api/auth/register'
  constructor(private http: HttpClient) { }

// register function
register(user:User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}`, user
);
}


}
