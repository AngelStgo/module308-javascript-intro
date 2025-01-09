let x = '0';
switch (x) {
   case '1':
       // do something...
       break;
   case '2':
       // do something...
       break;
   default:
       // do something...
       break;
}


// === EXAMPLE ===

 x = 5; //re-assign the value since x is already a value.
let y = 4;
let operand = "*";
switch (operand) {
   case "+":
       console.log(x + y);
       break;
   case "-":
       console.log(x - y);
       break;
   case "*":
       console.log(x * y);
       break
   case "/":
       console.log(x / y);
       break;
   default:
       console.log("Invalid Operand")
       break;
}

let statusCode = 200;

switch(statusCode) {
    case 200:
        console.log("Request was successful");
        break;
    case 404:
        console.log("Not found!");
        break;
    case 500:
        console.log("Server Error!");
        break;
    default:
        console.log("Invalid Status Code");
}