import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  implements OnInit{




  ngOnInit(): void {
  this.register();
  }


constructor (private service:UsersService, private router:Router){}

form: FormGroup = new FormGroup({
  firstname: new FormControl(''),
  lastname: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),

})

register(){

  this.service.register(this.form.value).subscribe((res:any)=> {
    console.log(res);
  })
}

}
