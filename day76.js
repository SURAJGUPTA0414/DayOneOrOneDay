console.log('day76 started');

console.log('start')

//1
// Find missing number (1 to N)

// function missingNum(arr) {
//     let n = arr.length + 1; // actual range size
//     let expectedSum = (n * (n + 1)) / 2;
//     let actualSum = arr.reduce((a, b) => a + b, 0);

//     return expectedSum - actualSum;
// }

// console.log(missingNum([1, 3, 4])); // 2

//2
// Count frequency of elements
// function frequencyofelememt(str){
//     let obj = {
        
//     }
//     for(let dd of str){
//         if(obj[dd]){
//             obj[dd] = obj[dd]+1
//         }else{
//             obj[dd] = 1
//         }
//     }
//     return obj
    
// }
// console.log(frequencyofelememt('surajs'))

//3
// Find intersection of arrays

// function intersectManual(a, b) {
//   let result = [];

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         result.push(a[i]);
//         break;
//       }
//     }
//   }
//   return result;
// }


// console.log(intersectManual([1,3,2,4],[1,4,2]))

//4
// Array.prototype.myFilter = function(callback){
    
//     let result = []
    
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i])){
//             result.push(this[i])
//         }
//     }
//     return result
    
// }

// let arr = [1,4,2];

// console.log(arr.myFilter((a)=>a>2))

//5

Array.prototype.myMap = function(callback){
    
    let result = []
    
    for(let i=0;i<this.length;i++){
       
            result.push(callback(this[i]))
        
    }
    return result
    
}

let arr = [1,4,2];

console.log(arr.myMap((a)=>a*2))



console.log('day76 ended')