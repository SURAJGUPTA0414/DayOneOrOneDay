console.log('day81 started');

//1
function debouncing(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

//2
function throttling(fn, delay) {
  let lastcall = 0;

  return function (...args) {
    let now = Date.now()

   if(now-lastcall<delay){
       return
   }
   lastcall = now;
   return fn(...args)
  };
}

//3
let arr = [1,4,2,4,6];

Array.prototype.myMap = function (callback){
    
    let result = [];
    
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i]))
    }
    return result
    
}


//4
// Array.prototype.myFilter = function (callback){
    
//     let result = [];
    
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i])){
//             result.push(this[i])
//         }
//     }
//     return result
    
// }

//5
Array.prototype.myReduce = function (callback,initialvalue){
    
    let acc = initialvalue;
    let start = 0;
    
    if(acc === undefined){
        acc = this[0];
        start = 1
    }
    
    for(let i=0;i<this.length;i++){
       acc = callback(acc,this[i])
    }
    return acc
    
}

console.log(arr.myReduce((a,b)=>a+b))



console.log('day81 ended');