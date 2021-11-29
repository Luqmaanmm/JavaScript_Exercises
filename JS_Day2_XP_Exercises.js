//Exercise 1 - Simple if/else statement
let x = 5;
let y = 2;

if (x > y) {
  console.log("x is the biggest number");
}
else {
  console.log("x is not the biggest number");
}


//Exercise 2 - Chihuahua
let newDog = 'Chihuahua' // QUESTION 1

console.log(newDog.length); // QUESTION 2

console.log(newDog.toUpperCase()); // QUESTION 3
console.log(newDog.toLowerCase());

if (newDog === 'Chihuahua') {  // QUESTION 4
  console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
console.log("I dont care, I prefer cats");
}


//Exercise 3 - Even or Odd
numberString = prompt("Please enter a number")
let number = Number(numberString)
divisibleBy2 = number % 2 //check if divisible by 2

if (divisibleBy2 === 0) {
  console.log(number + " is an even number");

}
else if (divisibleBy2 === 1) {
  console.log(number + " is an odd number");
}
else {
  console.log("Expected Error");
}


//Exercise 4 - Group Chat
let users = ["Luqmaan Musthan", "Ashiita", "Damien Mallet", "Emilie Lamaletie", "Megane Dreyfuss", "Renaud Azema", "Rheema Azema"]
let onlineCount = users.length;
let onlineRemaining = onlineCount - 2;
//console.log(onlineCount);

if (onlineCount === 0) {
  console.log('no one is online');
}
else if (onlineCount === 1) {
  console.log(users[0]+ " is online");
}
else if (onlineCount === 2) {
  console.log(users[0] + ", " + users[1] + " are online");
}
else {
  console.log(users[0] + ", " + users[1] + " and " + onlineRemaining + " more are online");
}
