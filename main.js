const { getRandomMilliseconds } = require('./random.js');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
async function main() {
  const ms = getRandomMilliseconds();
  console.log(`Sleeping for ${ms} milliseconds...`);

  await sleep(ms);

  const person = new Person('Ali', 30);
  console.log(person.getInfo());
}
main();
