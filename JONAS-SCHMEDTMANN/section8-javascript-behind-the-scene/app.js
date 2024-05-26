let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);
//============================================
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marriage", jessica);
//{firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log("After Marriage", marriedJessica);
//{firstName: 'Jessica', lastName: 'Davis', age: 27}
//=============================================
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27
};
//Copying objects
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before Marriage:", jessica2);
//{firstName: 'Jessica', lastName: 'Williams', age: 27}
console.log("After Marriage:", jessicaCopy);
//{firstName: 'Jessica', lastName: 'Davis', age: 27}
//==============================================

const jessica3 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"]
};

const jessicaCopyAgain = Object.assign({}, jessica3);
jessicaCopyAgain.lastName = "Davis";
console.log("before Marriage", jessica3); 
//{firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(2)}
console.log("After Marriage", jessicaCopyAgain);
//{firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(2)}

jessicaCopyAgain.family.push("Mary");
jessicaCopyAgain.family.push("Join");
console.log("before Marriage", jessica3); 
//{firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(4)}
console.log("After Marriage", jessicaCopyAgain);
// {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(4)}