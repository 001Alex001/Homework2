//Given an array of numbers.Write a function
//to separate odd and even number in different arrays. 

let arr = [45,12,3,6,17,0];
let arrEven = [];
let arrOdd = [];

function separate(){
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 === 0){
      arrEven.push(arr[i])
    }else{
      arrOdd.push(arr[i])
    }
  }
  let result = {
    arrEven,
    arrOdd
  }
  return result;
}

console.log(separate())
