console.log("Day 19 started");

//1

// Search Insert Position


// Share
// Array
// Binary Search
// Problem Statement:

// Given a sorted array of integers and a target value, your task is to find the index where the target value should be inserted into the array to maintain its sorted order. If the target value is already present in the array, return its index. If the target value is not present in the array, return the index where it should be inserted.


var insertPosition = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length; // If target is greater than all elements
};



console.log("Day 19 ended done");