import { Component } from '@angular/core';
import { Tasks } from 'src/app/interface/tasks';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  tasks: Tasks[] = [];
  id: any;
  
  constructor(private usersService: UsersService) { }

  name: string = '';
  number: string = '';


  form = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
  })



  ngOnInit() {

    /// this is to display everything that is coming from the database/// 
    this.usersService.getalltaskFunc().subscribe((data: any) => {
      this.tasks = data
      console.log(this.tasks);
      
    })

  }

  ////create
  create() {

    let task = {
      name: this.form.value.name || '',
      number: this.form.value.number || ''
    }

    this.usersService.createFunc(task).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    })
  }

  //////delete
  delete(id: any) {

    this.usersService.deletefunc(id).subscribe((res: any) => {
      window.location.reload();
    })
  }


  ////update
  update(id: any) {
    let task = {
      name: this.name || '',
      number: this.number || '',
    }
    this.usersService.updatefunc(id, task).subscribe((res: any) => {
      console.log(res);
    })
  }

}
