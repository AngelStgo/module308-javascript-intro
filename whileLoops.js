// === Count down to 0 from a given number. ===
let x = 30;
//  x = parseInt(prompt("enter a number"))

while (x >= 0) {
    console.log(`x is ${x}`);
    x--
}

// === Log integers in multiples of 3 as long as they are less than 35. ===

let i = 3;

while (i < 35) {
    console.log(i);
    i += 3;
}

// === Print integers in multiples of 5 as long as they are less than 100. ===

i = 5;
while (i < 100) {
    console.log(i);
    i += 5;
}

// Print integers between 0 and 20 with the following conditions:
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

i = 1;

while (i < 20) {
    if (i % 2 === 0) {
     i *=3;
     console.log(i);
    }
  i++
}

let str = "ABCD";

for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    
    for (let j = 0; j < str.length; j++) {
        // console.log(str[i] + str[j]);

        for (let x = 0; x < str.length; x++) {
            // console.log(str[i] + str[j] + str[x]);

             for (let z = 0; z < str.length; z++) {
                console.log(str[i] + str[j] + str[x] + str[z]); // all posible combinations with all of the letters of "str" string
             }
        }
    }   
}

// === PRIME ===

// class example
for (let i = 2; i < 100; i++) {
    let isPrime = true; //flag

    for (j = 2; j < i; j++) {
       
        if (i % j === 0) {
            isPrime = false;
            console.log(`${i} is Not Prime`);
            break;
        } 
    }
    if (isPrime) {
        console.log(`${i} Is Prime`);
        
    }
    
}