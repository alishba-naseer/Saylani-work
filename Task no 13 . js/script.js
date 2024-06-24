
//? 1.Write a program that takes a user's input and calculates the length of the input string using the length property.
  // let str = prompt("Enter a string :");  
  // let inputLength = str.length;
  // console.log(`String length is : ${inputLength}`);

//? 2.Create a program that prompts the user for a string and an index. Then, use the charAt() method to display the character at that index.
//   function displayCharacterAtIndex(){
//    let userInput = prompt("Enter a string :");
//    let indexInput = prompt("Enter an index (0-based) :");
//    let index = parseInt(indexInput);
//    if(isNaN(index) || index < 0 || index >= userInput.length){
//       alert("Invalid index! Please enter a valid index within the range of string.");
//       return;
//    } 
//    let character = userInput.charAt(index);
//    console.log(`Character at index ${index} is : ${character}`);
//   }
//  displayCharacterAtIndex();

//? 3.Write a program that takes a string and two indices (start and end). Use the substring() method to extract and display the substring between the given indices.
  // function extractSubstring(){
  //  let userInput = prompt("Enter a string :");
  //  let startInputIndex = prompt("Enter the start index :");
  //  let startIndex = parseInt(startInputIndex);
  //  let endInputIndex = prompt("Enter the end index :");
  //  let endIndex = parseInt(endInputIndex);
  //  if(isNaN(startIndex) || isNaN(endIndex) || startIndex < 0 || endIndex >= userInput.length || startIndex > endIndex) {
  //     alert("Invalid Indices! Please enter valid start and end indices within the range of string.");
  //  }
  //  let substring = userInput.substring(startIndex , endIndex +1);
  //  console.log(substring);
  // }
  // extractSubstring();

// ? 4.Take a sentence as input and split it into words using the split() method. Count and display the number of words in the sentence.
  // function countWordInsentence(){
  //  let sentence = prompt("Enter a sentence :");
  //  let words = sentence.split(/\s+/);
  //  let wordsCount = words.length;
  //  console.log(`Number of words in a senetnce is = ${wordsCount}`);
  // }
  // countWordInsentence();

//? 5.Create a program that takes a sentence and allows the user to search for a word or phrase and replace it with another word or phrase using the replace() method.
//  function searchAndReplace(){
//    let sentence = prompt("Enter a sentence :");
//    let searchWord = prompt("Enter the word or phrase to search for :");
//    let replaceWord = prompt("Enter the word or phrase to replace with :");
//    let modifiedSentence = sentence.replace(new RegExp(searchWord, 'gi'), replaceWord);
//    console.log(modifiedSentence);
//   }
//  searchAndReplace();

//? 6.Write a program that takes a string and a character as input. Use the indexOf() method to find and display the index of the first occurrence of that character in the string.

  // let heroes = ["Antman","Spiderman","Thor","Aquaman","Ironman","Hulk"];
  // console.log(heroes);
  // console.log("Thor is at the Idx of =", heroes.indexOf("Thor"));
  // console.log("Ironman is at the Idx of =", heroes.indexOf("Ironman"));

//? 7. Implement a program that reverses a given string using string manipulation methods.
  // function reverseString(inputString){
  //   return inputString.split('').reverse('').join('');
  // }
  // let inputString = prompt("Enter a string to reverse :");
  // let reversedString = reverseString(inputString);
  // console.log(`The reversed string of ${inputString} is = ${reversedString}`);

//? 8. Write a program that checks if a given string is a palindrome (reads the same forwards and backwards) using string methods.

function isPalindrome(inputString) {
  let cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
}
let inputString = prompt("Enter a string to check for palindrome:");
let result = isPalindrome(inputString);

if (result) {
  console.log(`'${inputString}' is a palindrome.`);
} else {
  console.log(`'${inputString}' is not a palindrome.`);
}