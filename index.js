var numbers = [3, 56, 2, 48, 5];

// function double(x){
//     return x *2;
// }


// const newNumbers = numbers.map(double);
// console.log(newNumbers)

const newNumbers = numbers.filter(function(num){
    return num <10
});

console.log(newNumbers)