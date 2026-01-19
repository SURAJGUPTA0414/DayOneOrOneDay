console.log('day93 started');



//1
function compressString(str){
    let result = "";
    let count = 1;
    
    for(let i=0;i<str.length;i++){
        if(str[i] === str[i+1]){
            count = count +1
        }else{
            result = result + str[i] + count;
            count = 1;
        }
    }
    return result
}

console.log(compressString('aaabcddd'));

//2
// filter unique

// function unique(arr){
//     return arr.filter((a)=>arr.indexOf(a) === arr.lastIndexOf(a))
// }

// console.log(unique([1,44,2,66,8,33,44,1]));

//3
// function removeDuplicate(arr){
//     let uniques = [];
    
//     for(let ff of arr){
//         if(!uniques.includes(ff)){
//             uniques.push(ff)
//         }
//     }
//     return uniques
// }

//  console.log(removeDuplicate([1,44,2,66,8,33,44,1]));

//4
// move zero to start of arr

// function moverarrinstart(arr){
//     let newarr = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 0){
//             newarr.unshift(arr[i])
//         }else{
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
    
// }

// console.log(moverarrinstart([1,44,20,0,66,8,0,33,44,1]));

//5
function firstNonRepeatingChar(str) {
  let freq = {};

  // count frequency
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  console.log(freq)

  // find first character with count 1
  for (let ch of str) {
    if (freq[ch] === 1) {
      return ch;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbccddeeef")); // f




console.log('day93 ended')