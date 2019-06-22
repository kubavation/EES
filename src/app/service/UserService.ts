import { Employee } from './../model/Employee';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    users: Employee[];

    constructor() {
        this.users = [
            new Employee('jakub','jakubiak',new Date(), new Date(), 'position 1'),
            new Employee('jakub2','jakubiak2',new Date(), new Date(), 'position 2'),
            new Employee('jakub3','jakubiak3',new Date(), new Date(), 'position 3')
        ];
    }


    findAll() {
        return this.users;
    }

    

}