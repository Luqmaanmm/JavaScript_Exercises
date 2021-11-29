//Exercise 1 - The World Translator
language = prompt("Please enter the language that you speak");
languageLowerCase = language.toLowerCase();
//console.log(languageLowerCase);

switch (languageLowerCase) {
  case "french":
    console.log("Bonjour");
    break;

  case "english":
    console.log("Hello");
    break;

  case "hebrew":
    console.log("Shalom");
    break;

  default:
    console.log("01110011 01101111 01110010 01110010 01111001");
}


//Exercise 2 - The Grade Assigner
gradeString = prompt("Please enter your grade")
let grade = Number(gradeString);

if (grade > 90) {
  console.log('Your grade is A');
}
else if ((grade >= 80) && (grade <= 90)) {
  console.log('Your grade is B');
}
else if ((grade >= 70) && (grade <= 80)) {
  console.log('Your grade is C');
}
else if (grade <= 70) {
  console.log('Your grade is D');
}
else {
  console.log('Unexpected Error');
}


//Exercise 3 - Verbing
verb = prompt('Please enter a verb');

if ((verb.length >= 3 ) && (verb.endsWith("ing") === false)) {
  console.log(verb + "ing");
}
else if ((verb.length >= 3 ) && (verb.endsWith("ing") === true)) {
  console.log(verb + "ly");
}
else if (verb.length < 3 ) {
  console.log(verb);
}
else {
  console.log("Fatal Error");
}


//Exercise 4 - Convert from switch-case to if-else

let browser = "Opera"

if (browser === "Edge") {
  alert('You’ve got the Edge!')
}
else if ((browser === "Chrome") ||
        (browser === "Firefox") ||
        (browser === "Safari") ||
        (browser === "Opera")) {
  alert('Okay we support these browsers too')
}
else {
 alert('We hope that this page looks ok!')
}
