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






console.log('day69 ended')