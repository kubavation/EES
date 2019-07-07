import { UserService } from './../service/UserService';
import { Employee } from './../model/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public employee: Employee;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.initEmployee();
  }


  initEmployee() {
    // this.route.params.subscribe(params => {
    //   this.userService.findById(params['id']).subscribe(res => {
    //       this.employee = {
    //         ...res
    //       } as Employee;
    //   });
    // });

    this.route.params.subscribe(params => {
      this.userService.findById2(params['id']).subscribe( r => {
          this.employee = {
            ...r.payload.data(),
            id: r.payload.id
          } as Employee;
      });
    });

  }


}
