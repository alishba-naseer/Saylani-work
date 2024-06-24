
//? 1. Write a JavaScript program to declare a variable name and assign it a string value. Print the value of the name variable to the console.
 let name = "Alishba Naseer";
 console.log(name);
  
//? 2.Write a JavaScript program to declare two variables num1 and num2 and assign them numerical values. Calculate the sum of num1 and num2 and store the result in a variable called sum. Print the value of sum to the console.
 let num1 = 10;
 let num2 = 5;
 let sum = num1 + num2;
 console.log("The sum of",num1,"and",num2,"is :",sum);

 
//? 3. Write a JavaScript program to declare a constant variable PI and assign it the value of 3.14159. Declare another variable radius and assign it a numerical value. Calculate the area of a circle using the formula area = PI * radius * radius and store the result in a variable called circle Area. Print the value of circle Area to the console
 const PI = 3.14159;
 let radius = 5;
 let circleArea = PI * radius * radius;
 console.log("The area of the circle with radius",radius,"is :",circleArea);

//? 4. Write a JavaScript program that takes a number as input and checks if it is positive, negative, or zero. Print an appropriate message to the console based on the input. 
 function checkNumber(number) {
    if (number > 0) {
        console.log( number +" is positive");
    }else if(number < 0) {
        console.log(number +" is negative");
    } else {
        console.log("The number is zero");
    }
 } 
 let userInput = prompt("Enter a number :");
 let number = parseFloat(userInput);
 if(!isNaN(number)){
    checkNumber(number);
 } else {
    console.log("Invalid input. Please enter a valid number.");
 }

//? 5. Write a JavaScript program using a while loop to print the numbers from 1 to 10 to the console. 
 let num = 1;
 while (num <= 10) {
    console.log("While loop", num);
   num++;
 }

//?  6. Write a JavaScript program using a for loop to print the numbers from 1 to 10 to the console. 
 for (let i = 1; i <= 10; i++) {
  console.log("Using for loop",i);
 }