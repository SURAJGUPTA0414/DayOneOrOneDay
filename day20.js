console.log("day 20");
//1
// MOVES ZERO TO END

// function moveszerotoend(nums){
//     let newarr = [];
//     let zeros = nums.filter((x)=>x===0);
//     console.log(nums)
//     let rem = nums.filter((x)=>x>0)
//     console.log([...rem,...zeros])
// }

// let nums = [1,3,6,0,5,9,0,1]

// moveszerotoend(nums);

//2
// Check if a string contains only digits.

// function checkdigit(str){
//     let digit = Number(str)
//     console.log(digit)
//     // if(str === NaN){  false
//     if(isNaN(digit)){
//         return false
//     }else{
//         return true
//     }
    
// }

// checkdigit('suraj')

//3
// Find the maximum occurring character.
// var maxOccuringChar = function(s) {
//         let dd = s.split('');
//     let ff = dd.filter((x)=>dd.indexOf(x) !== dd.lastIndexOf(x))
//     // console.log(ff);
    
//     let obj = {}
    
//     for(let i of ff){
//         if(obj[i]){
//             obj[i] = obj[i] + 1
//         }else{
//             obj[i] =1
//         }
//     }
//     // console.log(obj)
    
//     const values = Object.values(obj);
//     let max = Math.max(...values)
    
//     let maxx  = Object.keys(obj).filter((key)=>obj[key]===max)
//   return maxx[0]
   
// };
//4
// Find Two Non-Repeating Elements in an Array
// function findTwoUniqueNumbers(arr){
//     let x = arr.filter((a)=>arr.indexOf(a)===arr.lastIndexOf(a))
//     console.log(x.slice(0,2))
    
// }
    
//     findTwoUniqueNumbers([1, 2, 3, 2, 4, 1,3,5,5,6,8])
//5
// Print All Factors
// function printFactors(n) {
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             console.log(i);
//         }
//     }
// }
// printFactors(12);

console.log("Day 20 ended done");