import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from  'src/app/services/users.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  


  ngOnInit(): void {
    this.login();
  
  } 
  constructor (private service:UsersService, private router:Router){}

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    
  })


login(){

  this.service.login(this.form.value).subscribe((res:any)=> {
    console.log(res);
    this.router.navigate(['/dashboard']);
 

  })
}
}
