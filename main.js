import { sleep } from "./sleep.js";
import { getRandom } from "./random.js";
import { Person } from "./person.js";

async function demo() {
  console.log("Kutishdan oldin");
  await sleep(getRandom());
  const person1 = new Person('Ali Valiyev', 1990);
  console.log(person1.getInfo()); 
  // console.log(person1.age); 
}

demo();