// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
let number = 10; // Example number

document.write("Number: " + number + "<br>");
document.write("Add 5: " + (number + 5) + "<br>");
document.write("Subtract 3: " + (number - 3) + "<br>");
document.write("Multiply by 10: " + (number * 10) + "<br>");
document.write("Divide by 2: " + (number / 2) + "<br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
let a = 2, b = 1;
let result = --a - --b + ++b + b--;

document.write("a: " + a + "<br>");
document.write("b: " + b + "<br>");
document.write("result: " + result + "<br>");

// Explanation
document.write("--a: " + (--a) + "<br>"); // a becomes 1
document.write("--a - --b: " + (1 - --b) + "<br>"); // b becomes 0, result is 1 - 0 = 1
document.write("--a - --b + ++b: " + (1 - 0 + ++b) + "<br>"); // b becomes 1, result is 1 - 0 + 1 = 2
document.write("--a - --b + ++b + b--: " + (1 - 0 + 1 + b--) + "<br>"); // result is 1 - 0 + 1 + 1 = 3, then b becomes 0


// 3. Write a program that takes input a name from user & greet the user.
let name = prompt("Enter your name:")
alert("Hello " + name + " ! Wellcome ! ")

4.

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
let numbe = prompt("Enter a number for the multiplication table:", "5");
numbe = numbe !== null && numbe !== "" ? Number(numbe) : 5;

document.write("<h2>Multiplication Table of " + numbe + "</h2>");
for (let i = 1; i <= 10; i++) {
    document.write(numbe + " x " + i + " = " + (numbe * i) + "<br>");
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
// Take subjects' names
let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");

// Total marks for each subject
let totalMarks = 100;

// Obtained marks
let obtainedMarks1 = prompt("Enter the obtained marks for " + subject1 + ":");
let obtainedMarks2 = prompt("Enter the obtained marks for " + subject2 + ":");
let obtainedMarks3 = prompt("Enter the obtained marks for " + subject3 + ":");

// Calculate total obtained marks and percentage
let totalObtainedMarks = Number(obtainedMarks1) + Number(obtainedMarks2) + Number(obtainedMarks3);
let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display results
document.write("<table border='1'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td colspan='2'>Total Marks</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage + "%</td></tr>");
document.write("</table>");

7.