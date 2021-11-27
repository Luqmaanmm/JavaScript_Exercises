//Exercise 1 - Favorite Color
let me = ["my","favorite","color","is","blue"]
console.log(me.join(" "));


//Exercise 2 - Mixup
//Method 1 - Too advance for the moment
let str1 =   'mix'; //'Hello';
let str2 =   'pod'; //'World';

let str3 = str2.slice(0,2).concat(str1.slice(2))
console.log(str3);

let str4 = str1.slice(0,2).concat(str2.slice(2))
console.log(str4);

console.log(str3 + " " + str4);

//Method 2 - More easy to understand
let str1a = "Hello"; //"mix";
let str2a = "World"; //"pod";

// Can also use substring
let start1 = str1a.slice(0, 2);
console.log(start1);
let start2 = str2a.slice(0, 2);
console.log(start2);

let end1 = str1a.slice(2);
console.log(end1);
let end2 = str2a.slice(2);
console.log(end2);

let str_mixed = start2 + end1 + " " + start1 + end2;
console.log(str_mixed);


//Exercise 3 - Calculator
//https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l
let num1 = prompt("Enter First Number");
let num2 = prompt("Enter Second Number");
//let sum = +num1 + +num2; //+num mean convert num1 and num2 from string to number

sum = number(num1) + number(num2)
alert ("Answer = " + sum)

//Regular Expression - RegEx
https://regex101.com/r/ed6ZUO/1/
https://regexr.com/
