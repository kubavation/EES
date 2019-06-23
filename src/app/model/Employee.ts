export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    birth: Date;
    hired: Date;
    position: string;

    constructor(id, firstName, lastName, birth, hired, position) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth = birth;
        this.hired = hired;
        this.position = position;
    }
}
