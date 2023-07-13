//Write a function which receives two strings
//and removes appearances of the second string from the first one. 



let str = 'Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather';

function removeStr(){
  return str.replace(/o/g , '')
}
console.log(removeStr())