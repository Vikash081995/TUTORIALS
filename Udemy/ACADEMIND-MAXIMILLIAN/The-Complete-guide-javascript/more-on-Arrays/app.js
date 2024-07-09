//Adding arrays using concat
const testResults = [1, 5.3, 1.5, 19.99, -5, 10];

const storedResults = testResults.concat([3.99, 2]);

console.log(storedResults, testResults);
//[1, 5.3, 1.5, 19.99, -5, 10, 3.99, 2] (6) [1, 5.3, 1.5, 19.99, -5, 10]

//====Retrieving Indexes with indexOf and lastIndexOf

console.log(testResults.indexOf(1.5)); //2

const personData = [{ name: "Max" }, { name: "Manuel" }];
console.log(personData.indexOf({ name: "Manuel" }));
const manuel = personData.find((person, index, persons) => {
  return person.name === "Manuel";
});

manuel.name = "Anna";
console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === "Max";
});

console.log(maxIndex); //0
// ========================================
//alternative to for loop - The forEach() method
// ========================================
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);
//sorting() and reversing();
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices.reverse()); //) (4) [10.99, 6.59, 5.99, 3.99]

//filtering with filter()
const filteredArray = prices.filter((p) => p > 6);
console.log(filteredArray); // [10.99, 6.59]
//==============================================
// let sum = 0;

// prices.forEach((price) => {
//     sum += price;
// });
// console.log(sum); //27.560000000000002
//==============================================
const sum = prices.reduce((prevValue, curValue, curIndx, prices) => {
  return prevValue + curValue;
}, 0);
console.log(sum); //27.560000000000002
//============================================
const data = "new york;10.99;2000";
const transformedData = data.split(";");
console.log(transformedData); // ['new york', '10.99', '2000']
//================================
const nameFragments = ["Max", "Schwarz"];
const name = nameFragments.join();
console.log(name); //Max,Schwarz
//=====================================
//spread operators
const copiedNameFragments = [...nameFragments];
console.log(copiedNameFragments); // ['Max', 'Schwarz']

const persons = [
  { name: "Max", age: 30 },
  { name: "Manuel", age: 31 }
];

const copiedPersons = [...persons];
persons.push({ name: "Anna", age: 29 });
console.log(persons, copiedPersons);
//[{name:'Max',age:30},{name:'Manuel',age:31},{name:'Anna',age:29}]
// [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 }
// ];
const copiedNewPerson = [
  ...persons.map((person) => ({ name: person.name, age: person.age }))
];

console.log(persons, copiedNewPerson);
//========================================================
//array desctructuring
const [first, second] = [1, 2];
console.log(first, second); //1 2

const namedData = ["Vijay3guys", "ezsnippet", "puravjha", "harsh"];
const [firstName, secondName, ...restNames] = namedData;
console.log(firstName); //Vijay3guys
console.log(secondName); //ezsnippet
console.log(restNames); //['puravjha', 'harsh']
//=========================
//MAPS and SETS 