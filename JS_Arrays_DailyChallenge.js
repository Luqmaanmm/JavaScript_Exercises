//Exercise 1
let fruits = ["Banana", "Apple", "Orange", "Blueberries"];

fruits.shift(); // QUESTION 1
console.log(fruits);

fruits.sort(); // QUESTION 2
console.log(fruits);

fruits.push("Kiwi"); // QUESTION 3
console.log(fruits);

fruits.splice(0,1); // QUESTION 4
console.log(fruits);

fruits.reverse(); // QUESTION 5
console.log(fruits);


//Exercise 2
let moreFruits = ["Banana",
                 ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]); // QUESTION 1
