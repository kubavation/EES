import { UserService } from './../service/UserService';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from './../model/Employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {

    this.employeeForm = this.formBuilder
        .group({
            firstName: '',
            lastName: '',
            birth: new Date(),
            hired: new Date(),
            position: ''
        });
   }

  ngOnInit() {
  }


  onSubmit(employeeData) {
    this.userService
        .create(this.toEmployee(employeeData))
        .catch(e => console.log(e));
  }


  toEmployee(employeeData) {
    return {id: '', ...employeeData};
  }

}
