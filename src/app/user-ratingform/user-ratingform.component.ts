import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/UserService';
import { Employee } from 'app/model/Employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-ratingform',
  templateUrl: './user-ratingform.component.html',
  styleUrls: ['./user-ratingform.component.css']
})
export class UserRatingformComponent implements OnInit {

  
  private employee: Employee;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initUser();
  }



  initUser() {
    this.route.params.subscribe(params => {
      this.userService.findById(params['id']).subscribe(res => {
          this.employee = {
            ...res
          } as Employee;
      });
    });
  }

}
