import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
serviceURL : String ;
  constructor( private http :HttpClient) {
    this.serviceURL = "http://localhost:3000/tasks"

   }
  
}
