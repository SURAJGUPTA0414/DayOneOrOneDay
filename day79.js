console.log('day79 started');

Array.prototype.myFilter = function (callback){
    let result = [];
    
    for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            result.push(this[i])
        }
    }
    return result;
}


Array.prototype.maMap = function (callback){
    let result = [];
    
    for(let i=0;i<this.length;i++){
       
            result.push(callback(this[i]))
        
    }
    return result;
}

Array.prototype.myReduce = function (callback,initialvalue){
    let acc = initialvalue;
    let start = 0;
    
    if(acc === undefined){
        acc= this[0];
        start = 1
    }
    
    for(let i=0;i<this.length;i++){
       
            acc = callback(acc,this[i])
        
    }
    return acc;
}


let arr = [2,4,2,8,1];

console.log(arr.myReduce((a,b)=>a+b))


console.log('day79 ended');