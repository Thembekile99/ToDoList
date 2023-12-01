import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user'
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private baseUrl = 'http://localhost:3000/api/auth'
  constructor(private http: HttpClient) { }

// register function
register(user:User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}/register`, user
);
}

// login function
login(user:User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}/login`, user
);
} 

addTask(task:Task): Observable<Task> {
  return this.http.post<Task>(`${this.baseUrl}/addtask`,task);
}

getallTask(task:Task): Observable<Task[]> {
  return this.http.post<Task[]>(`${this.baseUrl}/addtask`,task);
}
deleteTask(task:Task): Observable<Task> {
  return this.http.post<Task>(`${this.baseUrl}/addtask`,task);
}
}
