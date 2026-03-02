console.log('day133 started');

/*--------------------------------------------------*/
// 1️⃣ Reverse a String
// Input: "suraj"
// Output: "jarus"

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("suraj")); // jarus


/*--------------------------------------------------*/
// 2️⃣ Check if Array is Sorted
// Input: [1,2,3,4]
// Output: true

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

console.log(isSorted([1,2,3,4])); // true
console.log(isSorted([1,3,2]));   // false


/*--------------------------------------------------*/
// 3️⃣ Find Second Largest Element
// Input: [10, 5, 20, 8]
// Output: 10

function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second;
}

console.log(secondLargest([10,5,20,8])); // 10


/*--------------------------------------------------*/
// 4️⃣ Count Frequency of Elements
// Input: [1,2,2,3,1]
// Output: {1:2, 2:2, 3:1}

function frequencyCount(arr) {
    let map = {};
    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }
    return map;
}

console.log(frequencyCount([1,2,2,3,1]));


/*--------------------------------------------------*/
// 5️⃣ Find First Non-Repeating Character
// Input: "aabbcdd"
// Output: "c"

function firstNonRepeating(str) {
    let map = {};

    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of str) {
        if (map[char] === 1) return char;
    }

    return null;
}

console.log(firstNonRepeating("aabbcdd")); // c

/*--------------------------------------------------*/

console.log('day133 ended');