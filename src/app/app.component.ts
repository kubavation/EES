import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabGroup } from '@angular/material';
import { Employee } from './model/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
        {
          label: 'Strona główna',
          link: './',
          closable: false,
          index: 0
        }, {
            label: 'Lista pracowników',
            link: './employees',
            closable: false,
            index: 1
        }, {
            label: 'Dodaj pracownika',
            link: './addEmployee',
            closable: false,
            index: 2
        }, {
            label: 'Coś innego',
            link: './third',
            closable: false,
            index: 3
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      console.log("??")
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      console.log(this.activeLinkIndex);
  });
}

  test(event) {
    console.log("SXD")
    this.activeLinkIndex = 2;
  }
  
  addTab(emp: Employee) {
    console.log('xx')
    this.navLinks.push({
      label: 'Dodane!',
      closable: true,
      link: './employees/CSJ9EMYNUHaanPLRgHV8',
      index: this.navLinks.length - 1
    })
  }

}
