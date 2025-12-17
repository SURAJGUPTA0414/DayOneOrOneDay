console.log('day59 start');

// 1. Reverse an array
// function reversearr(arr){

//     console.log(arr.reverse());

// }

// reversearr([2,1,5,99]);

// 2. Find max number in array
// function findmax(arr){
//     let max = arr[0];
    
//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     console.log(max)

// }
// findmax([3,1,66,1])

// 3. Find min number in array
// function findmin(arr){
    
//      let min = arr[0];
    
//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]< min ){
//             min = arr[i]
//         }
//     }
//     console.log(min)

// }

//  findmin([3,1,66,1])

// 4. Find second largest number
// function secondlargest(arr){
    
//     console.log(arr.sort((a,b)=>b-a)[1]);

// }

// function secondlargest(arr) {
//     let max = -Infinity;
//     let second = -Infinity;

//     for (let num of arr) {
//         if (num > max) {
//             second = max;   // old max becomes second
//             max = num;      // new max found
//         } else if (num > second && num !== max) {
//             second = num;   // update second largest
//         }
//     }

//     console.log(second);
// }


// secondlargest([44,2,33,8])

// 5. Sum of array elements
// function sumarr(arr){
    
//     console.log(arr.reduce((a,b)=>a+b))
    

// }

// sumarr([2,3,7])

// 6. Average of array
// function avgarr(arr){
//     let x = arr.reduce((a,b)=>a+b);
//     console.log(Math.floor(x/arr.length))

// }

// avgarr([2,4,1,55,9])

// 7. Remove duplicates from array
// function removedup(arr){
//     let xx = [];
    
//     for(let x of arr){
//         if(!xx.includes(x)){
//             xx.push(x)
//         }
//     }
//     console.log(xx)

// }
// removedup([1,3,2,5,2,1])

// 8. Flatten nested array
// function flattenarr(arr){
    
//     // console.log(arr.flat(Infinity))
//     let x = arr.toString().split(',').map(Number);
//     console.log(x)

// }
// flattenarr([1,[2,2],3])

// 9. Rotate array by k steps
// function rotatearr(arr, k){
//     let finalarr = [];
    
//     for(let i=arr.length-k;i<=arr.length-1;i++){
//         finalarr.push(arr[i])
//     }
    
//     for(let i=0;i<=arr.length-1-k;i++){
//         finalarr.push(arr[i])
//     }
//     console.log(finalarr)

// }

// rotatearr([2,1,4,22,4],2) // [22,4,2,1,4]

// 10. Count frequency of each element
// function countfreqofeachelement(arr){
//     let obj = {}
//     for(let x of arr){
//         if(obj[x]){
//             obj[x] = obj[x] + 1
//         }else{
//             obj[x] = 1
//         }
//     }
//     console.log(obj)

// }
// countfreqofeachelement([3,4,"suraj",4,6,"suraj"])

// 11. Find missing number in sequence
// function findmissing(arr){
    
//     let x = (((arr.length+1)*(arr.length+2))/2 - (arr.reduce((a,b)=>a+b)))
//     console.log(x)
    

// }

// findmissing([1,2,3,4,5])

// 12. Find intersection of two arrays
// function intersectionofarr(arr1, arr2){
//     let x1 = [...new Set(arr1)]
//         let x2 = [...new Set(arr2)]
    
//     let x = [...x1,...x2];
    
//     let y = x.filter((a)=>x.indexOf(a) !== x.lastIndexOf(a));
//     console.log([... new Set(y)])
    

// }

// intersectionofarr([2,4,6,7], [3,5,6,7]);

// 13. Find union of two arrays

// function unionofarr(arr1, arr2){
    
//     let x = [...arr1,...arr2];
//     console.log([...new Set(x)])

// }
// unionofarr([2,4,6,7], [3,5,6,7])

// 14. Move zeros to the end

// function movezerotoend(arr){
//     let result = [];

//     // First push all non-zero numbers
//     for(let ff of arr){
//         if(ff !== 0){
//             result.push(ff);
//         }
//     }

//     // Then push all zeros
//     for(let ff of arr){
//         if(ff === 0){
//             result.push(ff);
//         }
//     }

//     console.log(result);
// }


// 15. Find pair with given sum

function findPair(arr, target){
    let pair = [];
    
    for(let i=0;i < arr.length-1;i++){
        for(let j=i+ 1; j < arr.length;j++){
            if(arr[i]+arr[j] === target){
                pair.push([arr[i],arr[j]])
            }
        }
    }
    console.log(pair)

}

// function findPair(arr, target){
//     let pair = [];
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 pair.push([arr[i], arr[j]]);
//             }
//         }
//     }

//     console.log(pair);
// }


findPair([2,7,6,22,1],9)






// 1
// Count consonants
// function countConsonant(str) {
    
//     let dd = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
//     console.log(dd?dd.length:0)

// }
// countConsonant('suraj');
// countConsonant('');

// function countConsonant(str) {
//   let count = 0;
//   const consonants = "bcdfghjklmnpqrstvwxyz";

//   for (let char of str.toLowerCase()) {
//     if (consonants.includes(char)) {
//       count++;
//     }
//   }

//   console.log(count);
// }

// countConsonant("suraj");
// countConsonant("");



// 2
// Check if string is isogram
function isogram(str) {

    let x = str.toLowerCase().match(/[a-z]/g) || [];

    let s = x.length;
    let y = new Set(x).size;

    if (s === y) {
        console.log('isogram');
    } else {
        console.log('not isogram');
    }
}

isogram('letter');       // not isogram
isogram('background');   // isogram



// 3
// Replace spaces with hyphens
// function replaceSpaceWithHyphen(str) {
//     let x = str.replace(/\s+/gi,'-');
//     console.log(x)

// }
// replaceSpaceWithHyphen('suraj is doing good');


// 4
// Check if substring exists
// function checkSubstring(str, substr) {
//     if (str.includes(substr)) {
//         console.log('exists');
//     } else {
//         console.log('not exists');
//     }
// }

// checkSubstring('hello world', 'suraj');
// checkSubstring('hello world', 'world');






// 5
// Count words in a sentence
function countWord(str) {
    console.log(str.split(' ').length)

}
countWord('i am great let have fun');


// 6
// Convert CamelCase to snake_case
function camelTosnake(str){
let x = str.replace(/([A-Z])/g,"_$1").toLowerCase();
console.log(x)
}   
camelTosnake('myVariableName');
camelTosnake('surajGupta');

// 7
// Remove special characters
function removeSpecialCharacter(str) {
    let x = str.match(/[A-Za-z]/g);
    console.log(x ? x.join('') : '');
}

removeSpecialCharacter("he@llo!123");
removeSpecialCharacter("123!@#");

console.log('day59 end');
