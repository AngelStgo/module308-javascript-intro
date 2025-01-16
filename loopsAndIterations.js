const salute = "Hello World";

// This will separate every character on your string
for (let i = 0; i < salute.length; i++) {
	console.log(salute[i]);
}

for (let i = 0; i <= 10; i++) { // i < 10 will reach only until 9 because the loops is an Array [0,1,2]
	console.log(i);
}
for (let i = 10; i >= 0; i--) { // >= to include 0 [11 in total]
	console.log(i);
}

// Odd numbers
console.log("Odd numbers");

for (let i = 0; i <= 19; i++) { 
    if (i % 2 !== 0) // this statement will print odd numbers
	console.log(i);
}
// OR
for (let i = 0; i <= 19; i+= 2) { 
	console.log(i);
}

for (let i = 0; i <= 10; i += 2) { // += 2 will add 2 per array
	console.log(i);
}

// when we work with numbers, be carefull with 0 since it can take you to an infinite loop
for (let i = 1; i <= 10; i *= 2) { // each result will be duplicated
	console.log(i);
}


// Calling even and odd numbers
console.log("Calling even and odd numbers");

let a = 1
while (a <= 20) {
	if (a % 2 == 0) // remainder 2 will go down to 0 for every number that is even 
		console.log(a, "is even");
    else 
	    console.log(a, "is odd");
	a ++; // increament by 1
}

// Output an increasing number of # symbols, from 1 to 7
console.log("Output an increasing number of # symbols, from 1 to 7");

for (let x = 1; x <= 7; x++) {
	console.log("#".repeat(x)); 
}
//           == or ==

console.log("Another option");

let hashtag = '';
for (let x = 1; x <= 7; x++) {
	hashtag += "#"
	console.log(hashtag); 
}

//Loop over an array and access each value in the array
let myArray = ["Hello", "world", "JS", "HTML"]

for (const word of myArray) {
	console.log(word);
}

// skip certain iterations
console.log("== Continue (Control Flow) ==");

const str = "Hello World";

for (let i = 0; i < str.length; i++) {
	if (str[i] == "l") {
		continue;
	}

	console.log(str[i]);
}

console.log("// =======================");

// =======================

for (const i in str) {
	if (str[i] == "l") {
		continue;
	}

	console.log(str[i]);
}

for (const c of str) {
	if (c == "l") {
		continue;
	}

	console.log(c);
}

// ===============