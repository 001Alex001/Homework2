//Write a function that calculates sum, difference, multiplication
//and division between given array elements depending on passed 
//operation symbol. Write appropriate function for each operation.



let arr = [1,2,3,4,5,6];
let sum = 0;
let difference = 1;
let multiplication = 1;
let division  = 0;
function numbers(){
    for(let i = 0; i < arr.length; i++){
       sum = sum + arr[i];
       multiplication = multiplication * arr[i];
       difference = difference - arr[i];
       division = division / arr[i];
    }
  let result = {
    sum,
    multiplication,
    difference,
    division 
  }
    return result
}
console.log(numbers())


