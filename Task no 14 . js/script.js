//? 1. How do you create an empty array in JavaScript?
  let emptyArr = [];
  console.log(emptyArr);

//? 2. How do you access the first and last elements of an array?
  let arr = [10,20,30,40,50];
  let firstElement = arr[0];
  console.log(arr);
  console.log(`First element of the array = ${firstElement}`);
  let lastElement = arr[arr.length - 1];
  console.log(`Last element of the array = ${lastElement}`);

//? 3. How do you add an element to the end of an array?
  let num = [1,2,3,4];
  //Adding a single element
  num.push(5);
  console.log(num)
  //Adding multiple element
  num.push(6,7,8,9,10);
  console.log(num);

//? 4. How do you remove the last element from an array?
  let numArr = [1,2,3,4];
  console.log("Array before pop =",numArr);
  let removedArr = numArr.pop();
  console.log("Removed element =",removedArr);
  console.log("Array after pop =",numArr);

//? 5. How do you loop through an array in Javascript?
//               FOR LOOP
  let array = [1, 2, 3, 4, 5];
  for (let i = 0; i < array.length ; i++){
    console.log(array[i]);
  }

//               FOR OF LOOP
  let cities = ["Faisalabad","Jarawala","Lahore","Multan"];
  for(let city of cities){
   console.log(city);
  }

//                FOR EACH
  let numVal = [2,4,5,6,8,67,84];
  numVal.forEach(function(numVal) {
    console.log("Square of",numVal,"=",numVal*numVal);
});

//? 6. How do you check if an element exists in an array?
  let arr2 = [1,2,3,4,5,6,7];
  let element = 10;
  if(arr2.includes(element)) {
    console.log(`${element} exist in the array.`)
  } else {
    console.log(`${element} does not exist in the array.`)
  };

//? 7. How do you remove an element from an array at a specific index?
  let arrIdx = [2,4,6,8,9,10];
  console.log("Array before removing Idx",arrIdx);
  arrIdx.splice(4,1);
  console.log("Array after removing idx at 4",arrIdx);

//? 8. How do you concatenate two arrays in JavaScript?
  let foodItems =["Burger","Fries","Pizza","Salat"];
  let addItems = ["Lazania","Kabab","Chocolate","Cake"];
  let concatenateArr = foodItems.concat(addItems);
  console.log("Concatenated array:",concatenateArr);

//? 9. How do you sort an array in JavaScript?
   let fruitsArr = ["Banana","Apple","Date","Cherry"];
   console.log("Before Sorted Array",fruitsArr)
   fruitsArr.sort();
   console.log("After Sorted Array",fruitsArr);

//? 10. What is the difference between .map() and .forEach()?
   let numbers = [2,4,6,8];
   numbers.forEach((val) => {
    console.log( "Square of",val,"=",val * 2);
   });

   let numb = [12,14,16,18];
   let newArray = numb.map((val) => {
    return val * 2;
    });
  console.log(newArray);