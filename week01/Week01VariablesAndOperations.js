/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE 01 Lab  
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 *
 */

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
var availableFlightSeats = 7;
console.log("The available seats on this plane are " + availableFlightSeats);

console.log("Step 2:  Cost of Groceries");
var totalCostOfGroceries = 120;
console.log(
  "The total cost of groceries at checkout is $" + totalCostOfGroceries
);

console.log("Step 3:  Middle Initial");
var middleInitial = "H";
console.log("Angel " + middleInitial + " Pureco");

console.log("Step 4:  Is it Hot Outside?");
var isHotOutside = true;
console.log("It's " + isHotOutside + " that it's hot outside.");

console.log("Step 5:  First Name");
var firstName = "Angel";
console.log("The customer's first name is " + firstName);

console.log("Step 6:  Street Address");
var streetAddress = "123 Main St";
console.log("Your street addres is " + streetAddress);

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 *
 *
 * */

console.log("Remove Plane Seats:");
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
console.log(
  "2 seats have been booked. The total number of seats available is " +
    (availableFlightSeats - 2) +
    "."
);

console.log("Buy a Candy Bar:");
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
console.log(
  "A Candy Bar was added to your groceries. Your total groceries cost is " +
    (totalCostOfGroceries + 2.15) +
    "."
);

console.log("Fix a Birth Certificate:");
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
middleInitial = "J";
console.log(
  "After correcting your birth certificate, the following is the name shown on it: Angel " +
    middleInitial +
    " Pureco"
);

console.log("Changing Seasons:");
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
isHotOutside = false;
console.log(
  "The weather has changed. Is it still hot outside? " + isHotOutside
);

console.log("Full Name:");
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
var fullName = firstName + " " + middleInitial + " " + "Hernandez";
console.log(fullName);

console.log("Introduce a Customer:");
//	Print a line to the console that introduces the customer
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log("This is " + fullName + " and he lives in " + streetAddress);

console.log("-----------Finished------------");
