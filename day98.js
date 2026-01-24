console.log('day98 started');

/*--------------------------------------------------*/
// 1. Reverse a String
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("javascript")); 
// "tpircsavaj"

/*--------------------------------------------------*/
// 2. Check if String is Palindrome
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam")); 
// true

/*--------------------------------------------------*/
// 3. Find Largest Number in an Array
function findLargest(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

console.log(findLargest([10, 45, 3, 99, 23])); 
// 99

/*--------------------------------------------------*/
// 4. Count Frequency of Elements in Array
function frequencyCount(arr) {
  let freq = {};
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }
  return freq;
}

console.log(frequencyCount([1, 2, 2, 3, 3, 3]));
// {1:1, 2:2, 3:3}

/*--------------------------------------------------*/
// 5. Find Second Largest Number in Array
function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([10, 20, 4, 45, 99])); 
// 45

console.log('day98 ended');
