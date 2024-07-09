let userName: string;

let userAge = 34;
let isValid = true;

let userId: string | number = "abc1";
userId = 123;

function add(a: number, b: number): number {
  const res = a + b;
  return res;
}
//------------type aliases----------------------------------------------------------
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 4, add);
//----------------------------------------------------------------------------------

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  name: "max",
  age: 34,
  isAdmin: true,
  id: 123
};
//--------------------------------------------
//Interfaces
// -------------------------------------------
interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;
creds = {
  password: "abc",
  email: "test@example.com"
};
//---------------------------------------------
//Custom types
//---------------------------------------------
class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials());
//---------------------------------------------
//Merging Types
//---------------------------------------------
type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

let admin: AppAdmin = {
  permissions: ["login"],
  userName: "Max"
};
//---------------------------------------------
//Adding Type  Guards
//---------------------------------------------
type Role = "admin" | "user" | "editor";

let role: Role;

function performAction(action: string, role: Role) {
  if (role === "admin" && typeof action === "string") {
    //.....................
  }
}
//typeGaurd ->if statements that check which concerete type is being used..
//---------------------------------------------
//Making Sense of Generic Types
//---------------------------------------------

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data)
  }
};


const userStorage:DataStorage<User>={
    storage:[],
    add(user){}
}