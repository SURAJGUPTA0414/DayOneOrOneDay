console.log('day84 started');


// 1. Count vowels in a string
function countVowels(str) {
  let x = str.match(/[aeiou]/gi);
  return x ? x.length : 0;
}

// 2. Find the smallest number in an array
function findSmallest(arr) {
  let x = arr[0];

  for(let dd of arr){
    if(dd<x){
        x = dd

    }
  }
  return x
}

// 3. Remove duplicates from an array (without using Set)
function removeDuplicates(arr) {
  let unique = [];

  for(let x of arr){
    if(!unique.includes(x)){
        unique.push(x)
    }
  }
  return unique
}

// 4. Capitalize the first letter of each word
function capitalizeWords(str) {
  let x = str.split(' ');
   let y = []

  for(let dd of x){
    let word = dd.charAt(0).toUpperCase() + dd.slice(1);
    y.push(word)
  }
  return y.join(' ')
}

// 5. Check if two strings are anagrams
function isAnagram(str1, str2) {
  if(str1.split('').sort().join('') === str2.split('').sort().join('')){
    return true
  }else{
    return false
  }
}

// Test cases
console.log(countVowels("javascript"));            // expected: 3
console.log(findSmallest([8, 3, 10, 1, 6]));        // expected: 1
console.log(removeDuplicates([1,2,2,3,4,4,5]));    // expected: [1,2,3,4,5]
console.log(capitalizeWords("hello javascript"));  // expected: "Hello Javascript"
console.log(isAnagram("listen", "silent"));        // expected: true

console.log("day84 ended");



console.log('day84 ended')