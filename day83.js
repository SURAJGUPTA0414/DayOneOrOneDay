console.log('day83 started');

// 1. Reverse a string
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// 2. Find the largest number in an array
function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 3. Chunk an array
function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = [];
    for (let j = i; j < i + size && j < arr.length; j++) {
      chunk.push(arr[j]);
    }
    result.push(chunk);
  }
  return result;
}

// 4. Check if a string is a palindrome
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// 5. Flatten a nested array
function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flat = flattenArray(arr[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// Test cases
console.log(reverseString("hello"));                 // "olleh"
console.log(findLargest([3, 7, 2, 9, 5]));           // 9
console.log(chunkArray([1, 2, 3, 4, 5], 2));         // [[1,2],[3,4],[5]]
console.log(isPalindrome("racecar"));                // true
console.log(flattenArray([1, [2, [3, 4], 5]]));      // [1,2,3,4,5]








console.log('day83 ended')