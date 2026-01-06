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

console.log(arr.myReduce((a,b)=>a+b));

// JavaScript: Remove Duplicates from an Array

// function removeDuplicate(arr){
//     // let newArr = [...new Set(arr)];
    
//     // return newArr
    
//     let unique = [];
    
//     for(let x of arr){
//         if(!unique.includes(x)){
//             unique.push(x)
//         }
//     }
//     return unique
    
// }

// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]))

//2
// JavaScript: Reverse a String Without Using Built-in Reverse

// function reversestr(str){
//     let reverse = "";
    
//     for(let i=str.length-1;i>=0;i--){
//       reverse = reverse + str[i]
//     }
//     return reverse
    
// }

// console.log(reversestr('suraj'))

//3
// 3️⃣ JavaScript: Find Second Largest Number

// function secondLargest(arr){
//     // return arr.sort((a,b)=>b-a)[1]
//     for(let i=0;i<=arr.length-1;i++){
//         for(let j=0;i<=arr.length-1-i;i++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp
//             }
            
//         }
//     }
//     return arr[arr.length-2]
    
// }

// console.log(secondLargest([2,1,4,6,9]));

//4
// JavaScript: Count Occurrences of Each Character

function countOccurence(str){
    let obj = {
        
    }
    
    for(let dd of str){
        if(obj[dd]){
            obj[dd] = obj[dd]+1
        }else{
            obj[dd] = 1
        }
    }
    return obj
    
}

console.log(countOccurence('surajshyam'));

//5
// JavaScript: Find Missing Number in an Array

function findMissing(arr){
    let n = arr.length+1;
    
    let missing = ((n*(n+1)/2)  - (arr.reduce((a,b)=>a+b)));
    return missing
    
    
}

console.log(findMissing([1,2,5,4,3]))


console.log('day79 ended');