import { Injectable } from '@angular/core';
import {http}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private httpClient: HttpClient, private router: Router) { }
}
