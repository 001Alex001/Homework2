//Given an object. Invert it (keys become values and values become keys). 
//If there is more than key for that given value create an array.

let obj = {
    asd: '1',
    dsa: '2'
  }
  function invert(){
    let result = {};
    for(let key in obj){
      result[obj[key]] = key
    }
    return result;
  }
  console.log(invert(obj))
  