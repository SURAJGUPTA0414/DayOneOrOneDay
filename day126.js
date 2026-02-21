console.log('day126 started');

/*--------------------------------------------------*/
// 1) Merge Two Sorted Arrays
// Input: [1,3,5], [2,4,6]
// Output: [1,2,3,4,5,6]

function mergeSortedArrays(firstArray, secondArray) {
  let firstIndex = 0;
  let secondIndex = 0;
  let mergedArray = [];

  // Compare values and add the smaller one
  while (firstIndex < firstArray.length && secondIndex < secondArray.length) {
    if (firstArray[firstIndex] <= secondArray[secondIndex]) {
      mergedArray.push(firstArray[firstIndex]);
      firstIndex++;
    } else {
      mergedArray.push(secondArray[secondIndex]);
      secondIndex++;
    }
  }

  // Add remaining values from firstArray
  while (firstIndex < firstArray.length) {
    mergedArray.push(firstArray[firstIndex]);
    firstIndex++;
  }

  // Add remaining values from secondArray
  while (secondIndex < secondArray.length) {
    mergedArray.push(secondArray[secondIndex]);
    secondIndex++;
  }

  return mergedArray;
}

console.log(mergeSortedArrays([1,3,5], [2,4,6]));


/*--------------------------------------------------*/
// 2) Valid Parentheses
// Input: "()[]{}"
// Output: true

function isValidParentheses(text) {
  let stack = [];

  for (let i = 0; i < text.length; i++) {
    let currentChar = text[i];

    if (currentChar === '(' || currentChar === '[' || currentChar === '{') {
      stack.push(currentChar);
    } else {
      let lastOpenBracket = stack.pop();

      if (
        (currentChar === ')' && lastOpenBracket !== '(') ||
        (currentChar === ']' && lastOpenBracket !== '[') ||
        (currentChar === '}' && lastOpenBracket !== '{')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()[]{}"));


/*--------------------------------------------------*/
// 3) Find Missing Number (0 to n)
// Input: [3,0,1]
// Output: 2

function missingNumber(numbers) {
  let n = numbers.length;
  let expectedTotal = (n * (n + 1)) / 2;
  let actualTotal = 0;

  for (let i = 0; i < numbers.length; i++) {
    actualTotal += numbers[i];
  }

  return expectedTotal - actualTotal;
}

console.log(missingNumber([3,0,1]));


/*--------------------------------------------------*/
// 4) Product of Array Except Self (Without Division)
// Input: [1,2,3,4]
// Output: [24,12,8,6]

function productExceptSelf(numbers) {
  let length = numbers.length;
  let answer = new Array(length).fill(1);

  // Left side product
  let leftProduct = 1;
  for (let i = 0; i < length; i++) {
    answer[i] = leftProduct;
    leftProduct = leftProduct * numbers[i];
  }

  // Right side product
  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * rightProduct;
    rightProduct = rightProduct * numbers[i];
  }

  return answer;
}

console.log(productExceptSelf([1,2,3,4]));


/*--------------------------------------------------*/
// 5) Anagram Check
// Input: "listen", "silent"
// Output: true

function isAnagram(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  let charCount = {};

  // Count each character from firstWord
  for (let i = 0; i < firstWord.length; i++) {
    let char = firstWord[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Subtract using secondWord characters
  for (let i = 0; i < secondWord.length; i++) {
    let char = secondWord[i];

    if (!charCount[char]) {
      return false;
    }

    charCount[char] = charCount[char] - 1;
  }

  return true;
}

console.log(isAnagram("listen", "silent"));

/*--------------------------------------------------*/

console.log('day126 ended');
