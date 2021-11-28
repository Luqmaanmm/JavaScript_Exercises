//Exercise 1 - Keyless Car
ageString = prompt('Please enter your age');
let age = Number(ageString); //Convert string to number

if (age < 18) {
  alert('Sorry, you are too young to drive this car. Powering off');
} else if (age == 18) {
  alert('Congratulations on your first year of driving. Enjoy the ride!');
} else {
  alert('Powering On. Enjoy the ride!');
}


//Exercise 2 - Guess the results 1
let a = 2 + 2; // a = 4

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4: //case executed
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
//expected output: Exactly!


//Exercise 3 - Guess the results 2
let b = 2 + 2; // a = 4

switch (b) {
  case 4: //case executed
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
//expected output: Right!
