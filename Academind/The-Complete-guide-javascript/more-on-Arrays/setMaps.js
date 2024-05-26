// const ids = new Set([1, 2, 3]);
// console.log(ids.has(1)); //true
// ids.add(6);
// console.log(ids); //Set(4) {1, 2, 3, 6}

// for (const entry of ids.entries()) {
//   console.log(entry);
// }

// setMaps.js:7 (2) [2, 2]
// setMaps.js:7 (2) [3, 3]
// setMaps.js:7 (2) [6, 6]

// const person1 = { name: "Max" };
// const person2 = { name: "Maxi" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
// personData.set(person2, [{ date: "two weeks ago", price: 100 }]);
// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }
// //{name: 'Max'} [{…}]
// //{name: 'Maxi'} [{…}]

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for(const value of personData.values()){
//     console.log(value);
// }
//==============================================================
let person = { name: "Max" };
const persons = new WeakSet();
persons.add(person);
person = null;
console.log(persons);
