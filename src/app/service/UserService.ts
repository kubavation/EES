import { Employee } from './../model/Employee';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(public db: AngularFirestore) {}

    findAll() {
        return this.db.collection('Employee').snapshotChanges();
    }

    create(emp: Employee) {
        return this.db.collection('Employee').add(emp);
    }

    update(emp: Employee) {
        delete emp.id;
        return this.db.doc('Employee/' + emp.id).update(emp);
    }

    delete(empId: string) {
        this.db.doc('Employee/' + empId).delete();
    }

    findById(empId: string) {
        return this.db.doc('Employee/' + empId).valueChanges();
    }

    findById2(empId: string) {
        return this.db.doc('Employee/' + empId).snapshotChanges();
    }

}