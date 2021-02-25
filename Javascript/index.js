console.log('hello world');

//VARIABLeS//
var myAge = 30;
const yourAge = 25;
console.log(myAge, yourAge);

const favePizza = 'pepperoni';
console.log(favePizza);

var myNum = 5;
let greeting = "hello world";
let wrong = false;

myAge = 21;
console.log(myAge, yourAge);

var weather;

weather = 'sunny'

//DATATYPES//
let a = "Hello, World!"; // <-- Had to get that one out of the way!
let b = 'This is JavaScript!'; // Can use single or double quotes
let c = "7"; //includes numbers, but not read as numbers 
let d = "It's Seven"; //To include quotation marks in a string, you must use a different quotation inside and outside
let e = 'It\'s Seven'; //alternatively, you can use backslashes to ignore special characters in strings

//NUMBERS//
//let a = 7;
//let b = 7.8;
//let c = 0.45;

//BOOLEAN//
//let d = true;
//let e = false;
//let f = "true"; //string// 

//Constant//
const my_fave_number = 7; // this variable cannot be changed

console.log(my_fave_number); // prints 7

let x = 10 + my_fave_number; // we can use the const
console.log(X); // prints 17

my_fave_number = 9; // error, this cannot be changed


//Implicit Coercion//
 //let y= 7 + 7 + 7 = 21;
// Straight arithmetic resulting in a Number value.

x = 7 + 7 + "7";
// The first two 7's are calculated (14), the last 7
// is concatenated onto the 14 as a string.
// resulting in a string value
// "14" + "7" = "147"

x = "7" + 7 + 7;
// The entire expression is implicitly converted
// into a string and concatenated.
// "7" + 7 = "77"; "77" + 7 = "777"

//Type Casting- different method used to perform coercion to convert frm one type to another using built-in conversion functions//
let x = parseInt("10"); // 10
x = parseFloat("10.55"); // 10.55
x = toString(10.55); // "10.55";

//If statements//
if (!raining) {
    console.log("i'll go to the park");
} else {
    console.log("no thanks, I'm staying home");
}

//if statement with else if (which tells the statement to look for other 
//true conditions and it goes down until one is met)//
if( color == "red"){
    console.log('color is red')
} else if (color == "orange"){
    console.log('color is orange')
} else if (color == "yellow"){
    console.log('color is yellow')
}
else if (color == "green"){
    console.log('color is green')
}
else if (color == "blue"){
    console.log('color is blue')
} else {
    console.log("color isn't in the rainbow");
}

//comparison operators//
let a = 7; // assign
 7 == "7" // compare - value not data type --> true
 7 === "7" // compare - value AND data type -->false bc number of 7 is not the same as string of 7

// FOR LOOP
// for (starting point; keep going until you reach a certain point; how you want to iterate through data set ) {
//     whatever code you want to run and be applied at EACH item in your loop.
// }

// how to loop through a set of numbers 0-20;
// how to add 2 to each item ONLY IF that item is an even number
for (let i = 0; i <= 20; i++) {
    console.log("current item: "+ i);

    // is it even?
    // if a number is divisible by 2 == even
    // i = current item in our loop
    // divide i by 2 and give us any remainder 
    // is the result of that division

  if (i % 2 == 0) {
    console.log(i + 2);
  } else {
    console.log("odd");
  }
}
