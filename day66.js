console.log('day66 started');

// Count consonants

// function countConsonant(str){
//     let consonant = [];
    
//     for(let ss of str){
//         if(!('aeiou'.includes(ss))){
//             consonant.push(ss)
//         }
//     }
//     console.log(consonant.length)
// }

// countConsonant('surah')


// function countConsonant(str) {
//   let count = 0;
//   str = str.toLowerCase();

//   for (let ch of str) {
//     if (ch >= 'a' && ch <= 'z' && !'aeiou'.includes(ch)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countConsonant('surah')); // 3


//2
// remove dupliate from array

// function removeDuplicate(arr){
//     let removedup = [...new Set(arr)]
//     console.log(removedup)
// }


// function removeDuplicate(arr){
//     let removeDup = arr.filter((item,index)=>arr.indexOf(item) === index);
//     console.log(removeDup)
    
// }
// removeDuplicate([1,2,2,3,4])

//fisrst non repeating element


//3

// function firstNonRepeatingElement(arr){
    
//     let unique = arr.filter((a,b)=>arr.indexOf(a) === arr.lastIndexOf(a))
//     return unique.length === 0 ? -1 : unique[0]
   
    
// }

// console.log(firstNonRepeatingElement([1,3,2,5,3,2,5,1]))


//4
// seperte even and odd number

// function seperateEvenAndOdd(arr){
//     let obj = {
//         even: [],
//         odd : []
//     }
    
//     for(let dd of arr){
//         dd%2 === 0 ? obj.even.push(dd) : obj.odd.push(dd)
//     }
//     console.log(obj)
// }

// seperateEvenAndOdd([1,2,3,4,5,7,8])

//5
// frequency count of element

function freqCount(arr){
    let obj = {
        
    }
    
    for(let x of arr){
        if(obj[x]){
            obj[x] = obj[x]  + 1
        }else{
            obj[x] = 1
        }
    }
    console.log(obj)
    
}
freqCount(["a","b","a","c","d","e"])





console.log('day66 ended');

