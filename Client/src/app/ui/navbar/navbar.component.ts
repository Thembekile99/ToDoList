import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  searchText: string = "";

  characters = [
    'going to the gym',
    '12 pack of milk',
    '3 beers'

  ]


}
