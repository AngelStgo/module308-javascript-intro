// === Ternary Operators ===

(conditional) ? (value_if_true) : (value_if_false)
// let x = 10;
// let isTen = x == 10 ? true : false;


// let x = 10;
// let isTen;

// if (x == 10) {
// 	isTen = true;
// } else {
// 	isTen = false;
// }
// console.log(x);

let isAuthenticated = false;

let authorized = isAuthenticated ? "Granted" : "Denied";
console.log(authorized);