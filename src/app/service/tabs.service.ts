import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  tabs: any = [
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
      }
  ];

  constructor() { }

  addTab() {
    console.log('xx');
    this.tabs.push({
      label: 'Dodane!',
      closable: true,
      link: './employees/CSJ9EMYNUHaanPLRgHV8',
      index: this.tabs.length - 1
    });
  }


}
