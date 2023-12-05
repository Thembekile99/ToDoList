import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user'
import { Tasks } from '../interface/tasks';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  remove(id: any) {
    throw new Error('Method not implemented.');
  }
private baseUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

// register function
register(user:User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}/auth/register`, user
);
}

// login function
login(user:User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}/auth/login`, user
);
} 

getalltaskFunc():Observable<any>{ 
  return this.http.get(`${this.baseUrl}/read`)
}

createFunc(task:Tasks) : Observable<any>{
  return this.http.post<Tasks>(`${this.baseUrl}/add`,task)
}

deletefunc(id:string): Observable<any>{
  return this.http.delete(`${this.baseUrl}/task/${id}`)
}

updatefunc(id:string, task:Tasks):Observable<any>{
  return this.http.put(`${this.baseUrl}/task/${id}`,task)
}
}
