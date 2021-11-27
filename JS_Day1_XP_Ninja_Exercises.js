//Exercises XP Ninja

//Exercise 1 - Find Nemo
input = prompt('Please enter a sentence containing the word “Nemo”');
let sentence = input.split(" ");
//console.log(sentence);
let position = sentence.indexOf("Nemo")

if (position == -1) {
  console.log('I can’t find Nemo');
}
else {
  console.log("I found Nemo at " + position);
}

// "I love the movie named Nemo !" ➞ "I found Nemo at 5"
// "Nemo is a cute fish" ➞ "I found Nemo at 0"
// "My fish is called Nemo , I love it" ➞ "I found Nemo at 4"


//Exercise 2 - Evaluation 1
5 >= 1            //true
0 === 1           //false
4 <= 1            //false
1 != 1            //false
"A" > "B"         //false
"B" < "C"         //true
"a" > "A"         //true
"b" < "A"         //false
true === false    //false
true != true      //false


//Exercise 3 - Evaluation 2
let c;
let a = 34;
let b = 21;

a = 2

console.log(a + b); //Answer = 23
console.log(c); //undefined
console.log(3 + 4 + '5'); //Answer = 75 String


//Exercise 4 - Ask For Numbers
listOfNumbers = prompt('Please enter a string of numbers separated by commas');

let arrayOfString = listOfNumbers.split(",");
//console.log(arrayOfString);

let arrayOfNumbers = arrayOfString.map(Number);
//console.log(arrayOfNumbers);

//Method 1 - Not Taught Yet
/*
let sum = arrayOfNumbers.reduce(function(a,b){
  return a+b;
},0);
*/

//Method 2 - Using Loop
let sum = 0;

for (var i = 0; i < arrayOfNumbers.length; i++){
  sum = sum + arrayOfNumbers[i];
}

console.log(sum);


//Exercise 5 - Boom
boomString = prompt('Please enter a number');

let boomNumber = Number(boomString); //Convert string to number
let remainder2 = boomNumber % 2; //Check if divisible by 2
let remainder5 = boomNumber % 5; //Check if divisible by 5
let exclamation = "";

if (boomNumber < 2){
  console.log('Boom');
}
else{
  let oLetter = 'o';
  let theString = 'B' + oLetter.repeat(boomNumber) + 'm';
  if (remainder2 === 0){
    exclamation = "!"
  }
  if (remainder5 === 0){
    theString = theString.toUpperCase();
  }
  console.log(theString + exclamation);
}