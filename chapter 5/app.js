// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// Declare variables
let num3 = 10;
let num4 = 5;

// Subtraction
let difference = num3 - num4;
document.write("The difference of " + num1 + " and " + num2 + " is: " + difference + "<br>");

// Multiplication
let product = num1 * num2;
document.write("The product of " + num1 + " and " + num2 + " is: " + product + "<br>");

// Division
let quotient = num1 / num2;
document.write("The quotient of " + num1 + " and " + num2 + " is: " + quotient + "<br>");

// Modulus
let remainde = num1 % num2;
document.write("The remainder of " + num1 + " divided by " + num2 + " is: " + remainde + "<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
let myVariable;


// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("Value after variable declaration is: " + myVariable + "<br>");


// c. Initialize the variable with some number.
myVariable = 5;


// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("Initial value: " + myVariable + "<br>");


// e. Increment the variable.
myVariable++;


// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("Value after increment is: " + myVariable + "<br>");


// g. Add 7 to the variable.
myVariable += 7;


// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write("Value after addition is: " + myVariable + "<br>");


// i. Decrement the variable.
myVariable--;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
let remainder = myVariable % 3;

// l. Output : “The remainder is : 0”.
document.write("The remainder is: " + remainder + "<br>");


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
let ticketPrice = 600;
let totalCos = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCos + " PKR<br>");



// 5. Write a script to display multiplication table of any
// number in your browser. E.g
let numbe = 5; // You can change this to any number you want
document.write("<h2>Multiplication Table of " + numbe + "</h2>");
for (let i = 1; i <= 10; i++) {
    document.write(numbe + " x " + i + " = " + (numbe * i) + "<br>");
}


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
let celsiusTemp = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
let fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");


// c. Now store a Fahrenheit temperature into a variable.
fahrenheitTemp = 77;


// d. Convert it to Celsius & output “NNoF is NNoC”.
celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C<br>");

// Conversion Formulae:

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

let priceItem1 = 650;
let priceItem2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shippingCharges = 100;

let totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br>");
document.write("Total cost of your order is " + totalCost + "<br>");



// Compute the total cost & show the receipt in your browser.

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
let totalMarks = 980;
let marksObtained = 804;

let percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Marks Sheet</h2>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
let usDollars = 10;
let saudiRiyals = 25;
let totalPKR = (usDollars * 104.80) + (saudiRiyals * 28);

document.write("<h2>Currency in PKR</h2>");
document.write("Total Currency in PKR: " + totalPKR + "<br>");



// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
let number = 10; // Initial number
let result = ((number + 5) * 10) / 2;

document.write("Result: " + result + "<br>");


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
let currentYear = 2024;
let birthYear = 1990;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.write("They are either " + age1 + " or " + age2 + " years old.<br>");

// Output them to the screen like so: “They are either NN or NN
// years old”.

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
let radius = 10;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
let favoriteSnack = "chocolate chip cookies";
let currentAge = 25;
let maxAge = 80;
let amountPerDay = 3;

let totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;
document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".<br>");
