//===========DESTRUCTURING ARRAYS ===========================
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23",
  categories: ["Italian", "Bruschetta", "Garlic", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Organic"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      close: 24
    }
  },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta WITH ${ing1}, ${ing2}, and ${ing3}`
    );
  }
};

restaurant.orderDelivery({
  time: "22.30",
  address: "Via el sole,21",
  mainIndex: 2,
  starterIndex: 2
});
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z); //2 3 4

const [first, second] = restaurant.categories;
console.log(first, second); //Italian Bruschetta

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary); //Bruschetta Italian

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //Garlic Pizza

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); //2 5 6

//Default values
const [p = 1, q = 1, r = 7] = [8, 9];
console.log(p, q, r); //8 9 7
//====================DESTRUCTURING OBJECTS=================================
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}}
// ['Italian', 'Bruschetta', 'Garlic', 'Organic']

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}}
// ['Italian', 'Bruschetta', 'Garlic', 'Organic']

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// ['Focaccia', 'Bruschetta', 'Garlic', 'Organic']

//Nested Objects
const {
  fri: { open: o, close: c }
} = openingHours;
console.log(o, c);
// 11 23
//====================SPREAD OPERATOR=======================================
const arr1 = [7, 8, 9];
// const badNewArr =[1,2,arr1[0],arr1[1],arr1[2]];
const newArr = [1, 2, ...arr1];
console.log(newArr); //[1, 2, 7, 8, 9]
console.log(...newArr); //1 2 7 8 9

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']

//Join 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1); //) ['Focaccia', 'Bruschetta', 'Garlic', 'Organic', 'Pizza', 'Pasta', 'Risotto']

//Iterables:arrays,strings,maps,sets,NOT objects
const str = "jonas";
const letters = [...str, "", "S."];
// console.log(letters); ['j', 'o', 'n', 'a', 's', '', 'S.']
console.log(...str); //j o n a s

const ingredients = [
  //   prompt("Let's make pasta! Ingredient[1]?"),
  //   prompt("Ingredient[2]?"),
  //   prompt("Ingredients[3]")
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
//============REST PATTERNS AND PARAMETERS===================================
const arr3 = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
//1
//2
//[3,4,5]
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood); //['Focaccia', 'Bruschetta', 'Garlic', 'Organic']
//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //{thu: {…}, fri: {…}}
//functions
const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3); //[2, 3]
add(5, 3, 7, 2); // [5, 3, 7, 2]
add(8, 5, 6, 7, 8, 9, 2, 1, 3); //[8, 5, 6, 7, 8, 9, 2, 1, 3]
//============SHORT CURCUITING=======
console.log(3 || "Jonas"); //3
console.log("" || "Jonas"); //Jonas
console.log(true || 0); //true
console.log(undefined || 0 || "" || "Hello" || 23 || null); //Hello

console.log("---AND----");
console.log(0 && "Jonas"); //0
console.log(7 && "Jonas"); //Jonas
console.log("hello" && 23 && null && "jonas"); //null
//========NULLISH COALESCING OPERATOR===========
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //10