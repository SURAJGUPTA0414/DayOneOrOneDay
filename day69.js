console.log('day69 started');

11.
// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

// function fibonacci(n) {
//     if (n === 0) return [0];
//     if (n === 1) return [0, 1];

//     let fibb = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         let x = fibb[i - 1] + fibb[i - 2];
//         fibb.push(x);
//     }

//     return fibb;
// }

// console.log(fibonacci(2)); // [0, 1, 1]


//2
// 12. Find the max count of consecutive 1’s in an array

function maxConsecutiveOnes(arr) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

// Example
console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3



// 13. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?


function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));


// 14. Create a function which will accepts two arrays arr1 and arr2.
// The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same. (Effecient)


function isSameFrequency(arr1, arr2) {
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

console.log(isSameFrequency([1, 2, 5], [25, 4, 1]));


// 15. Given two strings. Find if one string can be formed by rearranging the letters of other string.
// (Effecient)

// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     let freq = {};

//     for (let char of str1) {
//         freq[char] = (freq[char] || 0) + 1;
//     }

//     for (let char of str2) {
//         if (!freq[char]) {
//             return false;
//         }
//         freq[char]--;
//     }

//     return true;
// }

console.log(isAnagram("aaz", "zza"));     // false
console.log(isAnagram("qwerty", "qeywrt")); // true




console.log('day69 ended')