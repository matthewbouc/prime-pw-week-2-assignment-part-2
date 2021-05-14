// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it to a string, 'Dane'
// We check to see if name is an exact match for the string 'Mary'
// If name is 'Mary', we console log 'Hi, Mary!'
// If name is not 'Mary', we console log 'How do you do?'
//
// Dane != Mary
// The code will console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We conjure a variable, secret, into existence but don't assign it to anything.
// We then summon another variable, code, and assign it to the integer 123.
// If code is the number 123 (not a string), then we assign 'super' to secret; additionally,
    // we change the value of code to 2 times itself, which will be the integer 246.
// If the value of code is greater than 250, we change the value of secret to 'duper'
//
// code === 123 but (code = code * 2) < 250
// console.log will be 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create variables: isStudent with the boolean value true, age as the number 34, and zip as the number 55407
// if isStudent is the boolean value true AND zip is greater than 80000, then we console.log 'You're a
  // student on the West Coast!'
// if the above statement is not true and if isStudent is falsy OR age is less than 30, we console.log 'What are your hobbies'
// if the above two statements are not true and if isStudent is truthy, we console.log 'Welcome to Prime!'
// if all the statements above are false, we've completely embarrased ourselves and simply console.log 'How about the weather?'
//
// zip < 80000 so we continue through the first If statement
// isStudent is truthy and age is > 30 so we continue through the second if statement
// isStudent is truthy
// The console.log will be 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - variables are assigned the wrong colors. Correct: colorOne = 'blue'; colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX - colorTwo needs to be assigned to 'purple' (along with colorOne)
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - time was assigned as a constant.  Should be a variable: let time = 4;
const time = 4;

// FIX - the code should be AND not OR.  Replace || with &&.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX - minAge should be a variable, not constant.  let minAge = 21;
const minAge = 21;

// FIX - evaluation should be: if(age >= minAge)
if(minAge <= age) {
// FIX - change console.log to 'entry' when age >= minAge
  console.log('no entry');
// FIX - change console.log to 'no entry' for else.
} else {
  console.log('enter');
}
*/
