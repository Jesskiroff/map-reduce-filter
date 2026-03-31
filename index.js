var numbers = [3, 56, 2, 48, 5];

// function double(x){
//     return x *2;
// }


// const newNumbers = numbers.map(double);
// console.log(newNumbers)

// const newNumbers = numbers.filter(function(num){
//     return num <10
// });

// var newNumber = numbers.reduce(function(accumulator, currentNumber){
//     console.log("accumulator = " + accumulator);
//     console.log("currentNumber = " + currentNumber);
//         return accumulator + currentNumber;
// })

// console.log(newNumber)
var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map((x) => {
//     return x * x;
// });

// console.log(newNumbers)

// const newNumbers = numbers.map( x => x * 2);

// const newNumbers = numbers.filter(num => num < 10);

const newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

console.log(newNumber)