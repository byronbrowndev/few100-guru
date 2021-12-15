export class Employee {

  private _salary: number;
  firstName = '';
  lastName = '';

  constructor(startingSalary: number) {
    this._salary = startingSalary;
  }

  get fullName() {
    return `${this.lastName}, ${this.firstName}`;
  }

  get salary() {
    return this._salary;
  }

  giveRaise(amount: number) {
    this._salary += amount;
  }
}
