import { Employee } from './../model/Employee';
import { UserService } from './../service/UserService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  employees: Employee[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAll()
      .subscribe(data => {
        this.employees = data.map(d => {
          return {
            id: d.payload.doc.id,
            ...d.payload.doc.data()
          } as Employee;
        })
      });
  }


  createEmployee() {
    let emp: Employee = {
      id: 1,
      firstName: 'kuba',
      lastName: 'kuba2',
      position: 'jakas',
      birth: new Date(),
      hired: new Date()
    };

    this.userService.create(emp);
    console.log('saved')
  }

}
