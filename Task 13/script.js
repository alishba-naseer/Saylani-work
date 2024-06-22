
//? 1.Write a program that takes a user's input and calculates the length of the input string using the length property.
//   let str = prompt("Enter a string :");  
//   let inputLength = str.length;
//   console.log(`String length is : ${strLength}`);

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
//   function extractSubstring(){
//    let userInput = prompt("Enter a string :");
//    let startInputIndex = prompt("Enter the start index :");
//    let startIndex = parseInt(startInputIndex);
//    let endInputIndex = prompt("Enter the end index :");
//    let endIndex = parseInt(endInputIndex);
//    if(isNaN(startIndex) || isNaN(endIndex) || startIndex < 0 || endIndex >= userInput.length || startIndex > endIndex) {
//       alert("Invalid Indices! Please enter valid start and end indices within the range of string.");
//    }
//    let substring = userInput.substring(startIndex , endIndex +1);
//    console.log(substring);
//   }
//   extractSubstring();

//? 4.Take a sentence as input and split it into words using the split() method. Count and display the number of words in the sentence.
//   function countWordInsentence(){
//    let sentence = prompt("Enter a sentence :");
//    let words = sentence.split(/\s+/);
//    let wordsCount = words.length;
//    console.log(`Number of words in a senetnce is = ${wordsCount}`);
//   }
//   countWordInsentence();

//? 5.Create a program that takes a sentence and allows the user to search for a word or phrase and replace it with another word or phrase using the replace() method.
  function searchAndReplace(){
   let sentence = prompt("Enter a sentence :");
   let searchWord = prompt("Enter the word or phrase to search for :");
   let replaceWord = prompt("Enter the word or phrase to replace with :");
   let modifiedSentence = sentence.replace(new RegExp(searchWord, 'gi'), replaceWord);
   console.log(modifiedSentence);
  }
 searchAndReplace();