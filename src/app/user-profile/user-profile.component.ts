import { Employee } from './../model/Employee';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input()
  employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
