// // === Ternary Operators ===

// (conditional) ? (value_if_true) : (value_if_false)
// let x = 10;
// let isTen = x == 10 ? true : false;


//  x = 10;
//  isTen;

// if (x == 10) {
// 	isTen = true;
// } else {
// 	isTen = false;
// }
// console.log(x);

// // ==== ====

// let isAuthenticated = false;

// let authorized = isAuthenticated ? "Granted" : "Denied";
// console.log(authorized);

// === Try and Catch ===
 let x = 10;

try {
	if (x < 0) {
		console.log("Negative!");
	} else {
		throw "Error - I don't know what I'm doing.";
	}
} catch (error) {
	console.log(error);
}

console.log("Does this log?");



let orderAmount = 100;

try {
	// Any error will pass to the Catch block
	if (orderAmount < 0) {
		console.log("Try Again!");
	}	else  {
		throw "Error with payment"	// <-----	
	}

} catch (error) {
	// access the error in the "error" variable
	console.log(error); // <----

	alert(`Amount ${orderAmount} not valid`)
}