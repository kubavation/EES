import { Employee } from './../model/Employee';
import { Component, OnInit } from '@angular/core';
import { FormControl }
 
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  employee: Employee;

  ngOnInit() {
  }


  createEmployee() {
    console.log(this.employee);
  }

}
