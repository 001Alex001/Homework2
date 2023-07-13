//Given two objects. Write a function that performs shallow compare.

let obj1 = {
    asd: '1'
  }
  
  let obj2 = {
    asd: '1',
    asd: '2'
  }
  
  function compare(obj1 , obj2) {
     if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
       return false;
     }
    
     const keys1 = Object.keys(obj1); 
     const keys2 = Object.keys(obj2);
  
     if (keys1.length !== keys2.length){
       return false;
     }
    
     for(var key in obj1) {
          if(obj1[key] !== obj2[key]) {
              return false;
          }
      }
      return true;
  }
  
  console.log(compare(obj1, obj2))  