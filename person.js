export class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  getInfo() {
    return `${this.fullName}, ${this.age} yoshda`;
  }
  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}
     