export class Employee {
    firstName: string;
    lastName: string;
    birth: Date;
    hired: Date;
    position: string;

    constructor(firstName, lastName, birth, hired, position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth = birth;
        this.hired = hired;
        this.position = position;
    }
}
