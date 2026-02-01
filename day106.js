console.log('day106 started');
//1 write js fn that returns thr fibbo sequence up to a given number


// function fibbo(n){
//     let fibb = [0,1];
    
//     for(let i=0;i<n;i++){
//         let x= fibb[fibb.length-1] + fibb[fibb.length-2]
//         fibb.push(x)
        
//     }
    
    
    
//     console.log(fibb)
// }

// fibbo(10)

//2
// find max count of consucative 1's in array

// function consucatioveones(arr){
//     let maxcount =0;
//     let currentcount = 0;
    
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i] === 1){
//             currentcount = currentcount + 1;
//             maxcount = Math.max(currentcount,maxcount)
//         }else{
//             currentcount = 0
//         }
//     }
//     console.log(maxcount)
// }

// consucatioveones([3,4,7,1,9,4,2,1,1,1,77])


//3
// given 2 array that are sorted [0,3,4,31] & [4,6,30] merge them and sort [0,3,4,4,6,30,31]

// let a = [0,3,4,31]
// let b = [4,6,30]

// function mergeandsortarr(arr1,arr2){
//     let merged = [...arr1,...arr2];
//     merged.sort((a,b)=>a-b);
//     console.log(merged)
// }


// mergeandsortarr(a,b)


//4
// create a function which will accept 2 array arr1 and arr2. The function should return true if every value squared in arr1 is in arr2. the freq of values must be same

// [1,2,3][4,1,9] => true
// [1,2,3][1,9] => false
// [1,2,1][4,4,1] => false (muse same freq)

let a  = [1,2,3]
let b = [4,1,9] 

function isSameFreq(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for (let key in freq1) {
    let squared = key * key;

    if (!freq2[squared]) return false;

    if (freq2[squared] !== freq1[key]) return false;
  }

  return true;
}

console.log(isSameFreq(a,b))


//5
// given 2 string. Find if one string can be formed by rearranging the letters of other string

// "aaz" "zza"  => false
// "qwerty"  "qeywrt" => true


function isAnagram(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};


  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    count[char] = (count[char] || 0) + 1;
  }

 
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!count[char]) {
      return false;
    }

    count[char]--;
  }

  
  return true;
}

console.log(isAnagram("aaz", "zza"));      // false
console.log(isAnagram("qwerty", "qeywrt")); // true







console.log('day106 ended')