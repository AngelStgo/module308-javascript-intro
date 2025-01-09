// external js output
console.log("Hello from external javascript")

// variables
let userName ="user123";
let age = 35 ;
console.log(userName);


// absent values

// let password = null;
// console.log(password);


// constant variables
const PI = 3.14;
console.log(PI);


if(true) {
    //this is a scope,inside curly brakets
}

let x = 10;
// Here x is 10
console.log(x);

{
  let x = 2;
  // Within this block, x is now 2
  console.log(x);
}

// Outside of the block, x is still 10


// ====Arithmetic Operators====

let thisNumbers = 16 / 8;
console.log(thisNumbers);

let z = 25 % 14;
console.log(z);

let a = 5;
let b = 3;
let c = 8;
let d = 15;
let e = 20;

let f = a - d;
let g = d - a;

console.log(d + e);

{
    console.log(a * c);
    console.log(d / a);
    console.log(c % b);
    console.log(f);
    console.log(g);
}

// == Concatenate ==

let companyName = "Lazy Porkchop";
let companyWorkers = 40;
let companyLocation = "Deep Fry City";

console.log(companyName);
console.log(companyLocation);

let someUserName = "Mrs. Ma'm";
const yearBorn = 1990;

console.log(someUserName, "was born in" , yearBorn);

console.log(someUserName + " works at " + companyName + " in " + companyLocation);

console.log(someUserName + " been working at " + companyName + " for over " + c + " years.")

// ==More Operators==

let newNumber = 9;
newNumber -= 3; // newNumber is now equal to 6
newNumber /= 3; // newNumber is now equal to 3
newNumber *= 3; // newNumber is now equal to 
newNumber %= 3; // newNumber is now equal to 0
console.log(newNumber) 

console.log(6 + "5"); // integer + string = 65
console.log(6 + 5); // integer + integer = 11
console.log("6" + "5"); // this will equal 65 because string dont read number as quantity but just a text.


// === Comparison Operators ===

// === Logical Operators ===

// === String Access ===

const nameOne = "Sebastian" ;
console.log(nameOne.length); // = 9 (0 -> 9)
console.log(nameOne[6]); //Array pulling from string = i

// let password = "Password123!"
// let userPassword = prompt("Please enter your password");

// if (password === userPassword) {
//   console.log("Welcome back!");
// }
//  else {
//   console.log("Wrong password :(");
// }


// === syntax ${expression} ===

let myName = "Angel" ;
let myLastname = "Santiago";
let fullName = myName + " " + myLastname;
console.log(fullName.length); // 14
console.log(fullName[7]);
console.log(`Welcome back ${fullName}`); // ` Some Text ${someCode} `


// === if Statements ===
let total = 9;
console.log(total);

if (total === 10) {
  console.log(`Your total is ${total}`);
} 
else {
  console.log("Your total doesn't match 10");
}

// == Truthy & Falsy ==
let secretCode ; // no value defined = false
                // when assign a value then = true
                // every value is set as true by default

if (secretCode) {
  console.log("true");
} else {
  console.log("false");
}

// === nested if...else statements ===
let userAge;
let paidUser;

if (userAge >= 18) {
  console.log("Everyone over 18: Access Granted");
  // ...

  // nested conditional
  if (paidUser) {
    console.log("Unlimited music");
  } else { 
    console.log("Watch add every 30 minutes");
  }
} else {
  console.log("Access denied")
}

// === multiple if...else if... ===

userAge = 29;

if (userAge <= 10) {
  console.log("Kids Team");
} 
else if (userAge < 18) {
  console.log("Teenagers Team");
}
 else if (userAge >= 18) {
  console.log("Adult Team");
}
else if (userAge > 59) {
  console.log("Senior Team");
}
else {
  console.log("Age is not Valid");
}

console.log("End of script");



// === Exercise 1 ===

 let num = 1 ;
// let num = prompt("Enter your number")

if (num >= 100) {
  console.log("Positive & Greater");
 }
  else if (num > 0) {
    console.log("Less but Positive");
  }
else  {
  console.log("NEGATIVE");
}
// console.log(num);



// === Exercise 2 ===
let learnerScore = 46;

if (learnerScore >= 90) {
  console.log("A");
} 
else if (learnerScore >= 80) {
  console.log("B");
}
else if (learnerScore >= 70) {
  console.log("C");
}
else if (learnerScore >= 55) {
  console.log("D");
}
else {
  console.log("F");
}
// console.log(learnerScore);