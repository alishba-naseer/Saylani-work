//?      Maximum number in an array
 const maxArr = [3,7,2,9,5];
 const maxOutput = maxArr.reduce((prev , curr) => {
    return prev > curr ? prev : curr ;
 });
 console.log("Maximum number =",maxOutput);

//?      Sum of even numbers
 const evenArr = [1,2,3,4,5,6];
 const evenOutput = evenArr.reduce((prev , curr) => {
    return prev + curr ;
 });
 console.log("Sum of even number =",evenOutput);