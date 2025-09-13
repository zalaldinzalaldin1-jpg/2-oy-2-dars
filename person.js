class Person {
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
const person1 = new Person('Ali Valiyev', 1990);
console.log(person1.getInfo()); 
console.log(person1.age);      