//Function calling other function
// function cutfruitPieces(fruit) {
//   return fruit + 4;
// }

// function fuitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of OraNGE `;
// }

// console.log(fruitProcessor(2, 3));
//===========================================================
//Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  }
  return `${retirement} retires in ${retirement} years`;
};

yearsUntilRetirement(yearsUntilRetirement(1991, "Jonas"));
//============================================================
//basic array operations

const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
