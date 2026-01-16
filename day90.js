console.log('day90 started');



//1
// function reverseword(word){
//     return word.split(' ').reverse().join(' ')
// }

// console.log(reverseword('i will do it'))

//2
// function unique(arr){
//     return arr.filter((a)=>arr.indexOf(a) === arr.lastIndexOf(a))
// }
// console.log(unique([1,5,2,4,5,8]))

//3
// function frequencycount(str) {
//   return [...str].reduce((acc, ch) => {
//     acc[ch] = (acc[ch] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(frequencycount('surajbhai'));

//4
// moverarr

// arr = [1,2,3,4,5,6]; d =2;
// output :  [3,4,5,6,1,2];

// function movearr(arr,d){
//     let final = [];
    
    
//     for(let i=d;i< arr.length;i++){
//         final.push(arr[i])
//     }
    
//     for(let i=0;i< d ;i++){
//         final.push(arr[i])
//     }
//     return final 
// }

// console.log(movearr([1,2,3,4,5,6],2))

//5
function compressString(str) {
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compressString('aabcccd'));
 








console.log('day90 ended')