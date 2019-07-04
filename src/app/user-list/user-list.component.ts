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
  showContent = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.findAll(); 
    setTimeout(
      () => this.showContent = true, 3000
    )   
  }


  createEmployee() {

    const emp: Employee = {
      id: '',
      firstName: 'kuba',
      lastName: 'kuba2',
      position: 'jakas',
      birth: new Date(),
      hired: new Date()
    };
    this.userService.create(emp);
  }

  deleteEmployee(empId: string) {
    this.userService.delete(empId);
  }

  findAll() {
    this.userService.findAll()
      .subscribe(data => {
        this.employees = data.map(d => {
            return {
              ...d.payload.doc.data(),
              id: d.payload.doc.id,
            } as Employee;
        })
      });
  }

}
