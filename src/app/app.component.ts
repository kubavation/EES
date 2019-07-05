import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
          label: 'Strona główna',
          link: './',
          index: 0
        }, {
            label: 'Lista pracowników',
            link: './employees',
            index: 1
        }, {
            label: 'Dodaj pracownika',
            link: './addEmployee',
            index: 2
        }, {
            label: 'Coś innego',
            link: './third',
            index: 3
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
